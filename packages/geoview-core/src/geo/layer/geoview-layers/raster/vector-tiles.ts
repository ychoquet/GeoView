/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable block-scoped-var, no-var, vars-on-top, no-param-reassign */
import View from 'ol/View';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import VectorTileLayer from 'ol/layer/VectorTile';
import { Options as TileOptions } from 'ol/layer/BaseTile';
import VectorTileSource, { Options as SourceOptions } from 'ol/source/VectorTile';
import { MVT } from 'ol/format';
import TileGrid, { Options as TileGridOptions } from 'ol/tilegrid/TileGrid';
import { transformExtent } from 'ol/proj';
import { Extent } from 'ol/extent';

import olms, { apply, applyStyle, addMapboxLayer } from 'ol-mapbox-style';

import defaultsDeep from 'lodash/defaultsDeep';
import { AbstractGeoViewLayer, CONST_LAYER_TYPES } from '../abstract-geoview-layers';
import { AbstractGeoViewRaster, TypeBaseRasterLayer } from './abstract-geoview-raster';
import {
  TypeLayerEntryConfig,
  TypeSourceTileInitialConfig,
  TypeTileLayerEntryConfig,
  TypeGeoviewLayerConfig,
  TypeListOfLayerEntryConfig,
  layerEntryIsGroupLayer,
  TypeLocalizedString,
  TypeTileGrid,
} from '@/geo/map/map-schema-types';
import { getLocalizedValue, getMinOrMaxExtents, getXMLHttpRequest, showError } from '@/core/utils/utilities';
import { Cast, TypeJsonObject, toJsonObject } from '@/core/types/global-types';
import { api } from '@/app';
import { Layer } from '../../layer';
import { LayerSetPayload } from '@/api/events/payloads';

// TODO: Implement method to validate Vector Tiles service
// TODO: Add more customization (minZoom, maxZoom, TMS)

export type TypeSourceVectorTilesInitialConfig = TypeSourceTileInitialConfig;

export interface TypeVectorTilesLayerEntryConfig extends Omit<TypeTileLayerEntryConfig, 'source'> {
  source: TypeSourceVectorTilesInitialConfig;
  tileGrid: TypeTileGrid;
}

export interface TypeVectorTilesConfig extends Omit<TypeGeoviewLayerConfig, 'listOfLayerEntryConfig'> {
  geoviewLayerType: 'vectorTiles';
  listOfLayerEntryConfig: TypeVectorTilesLayerEntryConfig[];
}

/** *****************************************************************************************************************************
 * type guard function that redefines a TypeGeoviewLayerConfig as a TypeVectorTilesConfig if the geoviewLayerType attribute of the
 * verifyIfLayer parameter is VECTOR_TILES. The type ascention applies only to the true block of the if clause that use this
 * function.
 *
 * @param {TypeGeoviewLayerConfig} verifyIfLayer Polymorphic object to test in order to determine if the type ascention is valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const layerConfigIsVectorTiles = (verifyIfLayer: TypeGeoviewLayerConfig): verifyIfLayer is TypeVectorTilesConfig => {
  return verifyIfLayer?.geoviewLayerType === CONST_LAYER_TYPES.VECTOR_TILES;
};

/** *****************************************************************************************************************************
 * type guard function that redefines an AbstractGeoViewLayer as an VectorTiles if the type attribute of the verifyIfGeoViewLayer
 * parameter is Vector_TILES. The type ascention applies only to the true block of the if clause that use this function.
 *
 * @param {AbstractGeoViewLayer} verifyIfGeoViewLayer Polymorphic object to test in order to determine if the type ascention
 * is valid
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const geoviewLayerIsVectorTiles = (verifyIfGeoViewLayer: AbstractGeoViewLayer): verifyIfGeoViewLayer is VectorTiles => {
  return verifyIfGeoViewLayer?.type === CONST_LAYER_TYPES.VECTOR_TILES;
};

/** *****************************************************************************************************************************
 * type guard function that redefines a TypeLayerEntryConfig as a TypeVectorTilesLayerEntryConfig if the geoviewLayerType attribute
 * of the verifyIfGeoViewEntry.geoviewRootLayer attribute is VECTOR_TILES. The type ascention applies only to the true block of
 * the if clause that use this function.
 *
 * @param {TypeLayerEntryConfig} verifyIfGeoViewEntry Polymorphic object to test in order to determine if the type ascention is
 * valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const geoviewEntryIsVectorTiles = (
  verifyIfGeoViewEntry: TypeLayerEntryConfig
): verifyIfGeoViewEntry is TypeVectorTilesLayerEntryConfig => {
  return verifyIfGeoViewEntry?.geoviewRootLayer?.geoviewLayerType === CONST_LAYER_TYPES.VECTOR_TILES;
};

// ******************************************************************************************************************************
// ******************************************************************************************************************************
/** *****************************************************************************************************************************
 * a class to add vector-tiles layer
 *
 * @exports
 * @class VectorTiles
 */
// ******************************************************************************************************************************
export class VectorTiles extends AbstractGeoViewRaster {
  /** ***************************************************************************************************************************
   * Initialize layer
   *
   * @param {string} mapId the id of the map
   * @param {TypeVectorTilesConfig} layerConfiguration the layer configuration
   */
  constructor(mapId: string, layerConfiguration: TypeVectorTilesConfig) {
    super(CONST_LAYER_TYPES.VECTOR_TILES, layerConfiguration, mapId);
  }

  /** ***************************************************************************************************************************
   * Extract the type of the specified field from the metadata. If the type can not be found, return 'string'.
   *
   * @param {string} fieldName field name for which we want to get the type.
   * @param {TypeLayerEntryConfig} layerConfiguration layer configuration.
   *
   * @returns {'string' | 'date' | 'number'} The type of the field.
   */
  protected getFieldType(fieldName: string, layerConfiguration: TypeLayerEntryConfig): 'string' | 'date' | 'number' {
    const fieldDefinitions = this.layerMetadata[Layer.getLayerPath(layerConfiguration)].source.featureInfo;
    const fieldIndex = getLocalizedValue(Cast<TypeLocalizedString>(fieldDefinitions.outfields), this.mapId)?.split(',').indexOf(fieldName);
    if (!fieldIndex || fieldIndex === -1) return 'string';
    return (fieldDefinitions.fieldTypes as string).split(',')[fieldIndex!] as 'string' | 'date' | 'number';
  }

  /** ***************************************************************************************************************************
   * This method recursively validates the layer configuration entries by filtering and reporting invalid layers. If needed,
   * extra configuration may be done here.
   *
   * @param {TypeListOfLayerEntryConfig} listOfLayerEntryConfig The list of layer entries configuration to validate.
   */
  protected validateListOfLayerEntryConfig(listOfLayerEntryConfig: TypeListOfLayerEntryConfig) {
    this.setLayerPhase('validateListOfLayerEntryConfig');
    listOfLayerEntryConfig.forEach((layerConfiguration: TypeLayerEntryConfig) => {
      const layerPath = Layer.getLayerPath(layerConfiguration);
      if (layerEntryIsGroupLayer(layerConfiguration)) {
        this.validateListOfLayerEntryConfig(layerConfiguration.listOfLayerEntryConfig!);
        if (!layerConfiguration.listOfLayerEntryConfig.length) {
          this.layerLoadError.push({
            layer: layerPath,
            consoleMessage: `Empty layer group (mapId:  ${this.mapId}, layerPath: ${layerPath})`,
          });
          this.setLayerStatus('error', layerPath);
          return;
        }
      }

      this.setLayerStatus('loading', layerPath);
    });
  }

  /** ****************************************************************************************************************************
   * This method creates a GeoView VectorTiles layer using the definition provided in the layerConfiguration parameter.
   *
   * @param {string} layerPath The layer path to the layer's configuration needed to create the GeoView layer.
   *
   * @returns {TypeBaseRasterLayer} The GeoView raster layer that has been created.
   */
  processOneLayerEntry(layerPath: string): Promise<TypeBaseRasterLayer | null> {
    const promisedVectorLayer = new Promise<TypeBaseRasterLayer | null>((resolve) => {
      const layerConfiguration = this.getLayerConfig(layerPath) as TypeVectorTilesLayerEntryConfig;
      this.setLayerPhase('processOneLayerEntry', layerPath);
      const sourceOptions: SourceOptions = {
        url: getLocalizedValue(layerConfiguration.source.dataAccessPath, this.mapId),
      };
      if (
        this.metadata?.tileInfo?.spatialReference?.wkid &&
        api.maps[this.mapId].currentProjection !== this.metadata.tileInfo.spatialReference.wkid
      ) {
        showError(this.mapId, `Error: vector tile layer (${layerConfiguration.layerId}) projection does not match map projection`);
        // eslint-disable-next-line no-console
        console.log(`Error: vector tile layer (${layerConfiguration.layerId}) projection does not match map projection`);
        this.setLayerStatus('error', layerPath);
        resolve(null);
      } else if (layerConfiguration.source.projection) sourceOptions.projection = `EPSG:${layerConfiguration.source.projection}`;
      if (layerConfiguration.source.tileGrid) {
        const tileGridOptions: TileGridOptions = {
          origin: layerConfiguration.source.tileGrid?.origin,
          resolutions: layerConfiguration.source.tileGrid?.resolutions as number[],
        };
        if (layerConfiguration.source.tileGrid?.tileSize) tileGridOptions.tileSize = layerConfiguration.source.tileGrid?.tileSize;
        if (layerConfiguration.source.tileGrid?.extent) tileGridOptions.extent = layerConfiguration.source.tileGrid?.extent;
        sourceOptions.tileGrid = new TileGrid(tileGridOptions);
      }

      sourceOptions.format = new MVT();
      sourceOptions.projection = `EPSG:${api.maps[this.mapId].currentProjection}`;
      sourceOptions.tileGrid = new TileGrid(layerConfiguration.source!.tileGrid!);
      const tileLayerOptions: TileOptions<VectorTileSource> = { source: new VectorTileSource(sourceOptions) };
      // layerConfiguration.initialSettings cannot be undefined because config-validation set it to {} if it is undefined.
      if (layerConfiguration.initialSettings?.className !== undefined)
        tileLayerOptions.className = layerConfiguration.initialSettings?.className;
      if (layerConfiguration.initialSettings?.extent !== undefined) tileLayerOptions.extent = layerConfiguration.initialSettings?.extent;
      if (layerConfiguration.initialSettings?.maxZoom !== undefined) tileLayerOptions.maxZoom = layerConfiguration.initialSettings?.maxZoom;
      if (layerConfiguration.initialSettings?.minZoom !== undefined) tileLayerOptions.minZoom = layerConfiguration.initialSettings?.minZoom;
      if (layerConfiguration.initialSettings?.opacity !== undefined) tileLayerOptions.opacity = layerConfiguration.initialSettings?.opacity;
      if (layerConfiguration.initialSettings?.visible !== undefined)
        tileLayerOptions.visible = layerConfiguration.initialSettings?.visible !== 'no';

      // TODO remove after demoing
      const declutter = this.mapId !== 'LYR2';
      layerConfiguration.olLayer = new VectorTileLayer({ ...tileLayerOptions, declutter });
      if (this.metadata?.defaultStyles)
        applyStyle(
          layerConfiguration.olLayer as VectorTileLayer,
          `${getLocalizedValue(this.metadataAccessPath, this.mapId)}${this.metadata.defaultStyles}/root.json`
        );

      super.addLoadendListener(layerConfiguration, 'tile');

      resolve(layerConfiguration.olLayer);
    });
    return promisedVectorLayer;
  }

  /** ***************************************************************************************************************************
   * This method is used to process the layer's metadata. It will fill the empty fields of the layer's configuration (renderer,
   * initial settings, fields and aliases).
   *
   * @param {TypeTileLayerEntryConfig} layerConfiguration The layer entry configuration to process.
   *
   * @returns {Promise<void>} A promise that the vector layer configuration has its metadata processed.
   */
  protected processLayerMetadata(layerConfiguration: TypeTileLayerEntryConfig): Promise<void> {
    const promiseOfExecution = new Promise<void>((resolve) => {
      if (!this.metadata) resolve();
      else {
        const { tileInfo } = this.metadata;
        const extent = this.metadata.fullExtent;
        const newTileGrid: TypeTileGrid = {
          extent: [extent.xmin as number, extent.ymin as number, extent.xmax as number, extent.ymax as number],
          origin: [tileInfo.origin.x as number, tileInfo.origin.y as number],
          resolutions: (tileInfo.lods as Array<TypeJsonObject>).map(({ resolution }) => resolution as number),
          tileSize: [tileInfo.rows as number, tileInfo.cols as number],
        };
        layerConfiguration.source!.tileGrid = newTileGrid;

        if (layerConfiguration.initialSettings?.extent)
          layerConfiguration.initialSettings.extent = transformExtent(
            layerConfiguration.initialSettings.extent,
            'EPSG:4326',
            `EPSG:${api.maps[this.mapId].currentProjection}`
          );

        resolve();
      }
    });
    return promiseOfExecution;
  }

  /** ***************************************************************************************************************************
   * Get the bounds of the layer represented in the layerConfiguration, returns updated bounds
   *
   * @param {TypeLayerEntryConfig} layerConfiguration Layer config to get bounds from.
   * @param {Extent | undefined} bounds The current bounding box to be adjusted.
   *
   * @returns {Extent} The layer bounding box.
   */
  getBounds(layerConfiguration: TypeLayerEntryConfig, bounds: Extent | undefined): Extent | undefined {
    const layerBounds = (layerConfiguration.olLayer as TileLayer<VectorTileSource>).getSource()?.getTileGrid()?.getExtent();
    const projection =
      (layerConfiguration.olLayer as TileLayer<VectorTileSource>).getSource()?.getProjection()?.getCode().replace('EPSG:', '') ||
      api.maps[this.mapId].currentProjection;

    if (layerBounds) {
      const transformedBounds = transformExtent(layerBounds, `EPSG:${projection}`, `EPSG:4326`);
      if (!bounds) bounds = [transformedBounds[0], transformedBounds[1], transformedBounds[2], transformedBounds[3]];
      else bounds = getMinOrMaxExtents(bounds, transformedBounds);
    }

    return bounds;
  }

  addVectorTileLayer() {
    // ! from code sandbox https://codesandbox.io/s/vector-tile-info-forked-g28jud?file=/main.js it work good
    // ! from inside GEoView, even when not use, something is wrong.
    olms(
      'LYR3',
      'https://tiles.arcgis.com/tiles/HsjBaDykC1mjhXz9/arcgis/rest/services/CBMT3978_v11/VectorTileServer/resources/styles/root.json?f=json'
    ).then((map) => {
      // Configure the map with a view with EPSG:3978 projection
      (map as Map).setView(
        new View({
          projection: 'EPSG:3857',
          center: [(-2750565.340500001 + -936703.1849000007) / 2, (3583872.5053000003 + 4659267.001500003) / 2],
          zoom: 5,
        })
      );
    });
  }

  /**
   * Set Vector Tile style
   *
   * @param {string} layerPath Path of layer to style.
   * @param {string} styleUrl The url of the styles to apply.
   */
  setVectorTileStyle(layerPath: string, styleUrl: string) {
    applyStyle(api.maps[this.mapId].layer.registeredLayers[layerPath].olLayer as VectorTileLayer, styleUrl);
  }
}
