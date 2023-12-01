/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable block-scoped-var, no-var, vars-on-top, no-param-reassign */
import TileLayer from 'ol/layer/Tile';
import { Options as TileOptions } from 'ol/layer/BaseTile';
import XYZ, { Options as SourceOptions } from 'ol/source/XYZ';
import TileGrid, { Options as TileGridOptions } from 'ol/tilegrid/TileGrid';
import { transformExtent } from 'ol/proj';
import { Extent } from 'ol/extent';

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
} from '@/geo/map/map-schema-types';
import { getLocalizedValue, getMinOrMaxExtents, getXMLHttpRequest } from '@/core/utils/utilities';
import { Cast, toJsonObject } from '@/core/types/global-types';
import { api } from '@/app';
import { Layer } from '../../layer';
import { LayerSetPayload } from '@/api/events/payloads';

// ? Do we keep this TODO ? Dynamic parameters can be placed on the dataAccessPath and initial settings can be used on xyz-tiles.
// TODO: Implement method to validate XYZ tile service
//
// NOTE: The signature of tile services may vary depending of if it's a dynamic or static tile service. Dynamic tile services solutions like TiTiler allows users
// to define query parameters such as a COG url, a TileMatrixSet and a resampling method.
// e.g.: http://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png?url=http://smtg/cog.tif&TileMatrixSetId=CanadianNAD83_LCC&resampling_method=bilinear

// TODO: Add more customization (minZoom, maxZoom, TMS)

export type TypeSourceImageXYZTilesInitialConfig = TypeSourceTileInitialConfig;

export interface TypeXYZTilesLayerEntryConfig extends Omit<TypeTileLayerEntryConfig, 'source'> {
  source: TypeSourceImageXYZTilesInitialConfig;
}

export interface TypeXYZTilesConfig extends Omit<TypeGeoviewLayerConfig, 'listOfLayerEntryConfig'> {
  geoviewLayerType: 'xyzTiles';
  listOfLayerEntryConfig: TypeXYZTilesLayerEntryConfig[];
}

/** *****************************************************************************************************************************
 * type guard function that redefines a TypeGeoviewLayerConfig as a TypeXYZTilesConfig if the geoviewLayerType attribute of the
 * verifyIfLayer parameter is XYZ_TILES. The type ascention applies only to the true block of the if clause that use this
 * function.
 *
 * @param {TypeGeoviewLayerConfig} verifyIfLayer Polymorphic object to test in order to determine if the type ascention is valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const layerConfigIsXYZTiles = (verifyIfLayer: TypeGeoviewLayerConfig): verifyIfLayer is TypeXYZTilesConfig => {
  return verifyIfLayer?.geoviewLayerType === CONST_LAYER_TYPES.XYZ_TILES;
};

/** *****************************************************************************************************************************
 * type guard function that redefines an AbstractGeoViewLayer as an XYZTiles if the type attribute of the verifyIfGeoViewLayer
 * parameter is XYZ_TILES. The type ascention applies only to the true block of the if clause that use this function.
 *
 * @param {AbstractGeoViewLayer} verifyIfGeoViewLayer Polymorphic object to test in order to determine if the type ascention
 * is valid
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const geoviewLayerIsXYZTiles = (verifyIfGeoViewLayer: AbstractGeoViewLayer): verifyIfGeoViewLayer is XYZTiles => {
  return verifyIfGeoViewLayer?.type === CONST_LAYER_TYPES.XYZ_TILES;
};

/** *****************************************************************************************************************************
 * type guard function that redefines a TypeLayerEntryConfig as a TypeXYZTilesLayerEntryConfig if the geoviewLayerType attribute
 * of the verifyIfGeoViewEntry.geoviewRootLayer attribute is XYZ_TILES. The type ascention applies only to the true block of
 * the if clause that use this function.
 *
 * @param {TypeLayerEntryConfig} verifyIfGeoViewEntry Polymorphic object to test in order to determine if the type ascention is
 * valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const geoviewEntryIsXYZTiles = (
  verifyIfGeoViewEntry: TypeLayerEntryConfig
): verifyIfGeoViewEntry is TypeXYZTilesLayerEntryConfig => {
  return verifyIfGeoViewEntry?.geoviewRootLayer?.geoviewLayerType === CONST_LAYER_TYPES.XYZ_TILES;
};

// ******************************************************************************************************************************
// ******************************************************************************************************************************
/** *****************************************************************************************************************************
 * a class to add xyz-tiles layer
 *
 * @exports
 * @class XYZTiles
 */
// ******************************************************************************************************************************
export class XYZTiles extends AbstractGeoViewRaster {
  // layer
  layer!: TileLayer<XYZ>;

  /** ***************************************************************************************************************************
   * Initialize layer
   *
   * @param {string} mapId the id of the map
   * @param {TypeXYZTilesConfig} layerConfiguration the layer configuration
   */
  constructor(mapId: string, layerConfiguration: TypeXYZTilesConfig) {
    super(CONST_LAYER_TYPES.XYZ_TILES, layerConfiguration, mapId);
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

      // When no metadata are provided, all layers are considered valid.
      if (!this.metadata) return;

      // Note that XYZ metadata as we defined it does not contains metadata layer group. If you need geogson layer group,
      // you can define them in the configuration section.
      if (Array.isArray(this.metadata?.listOfLayerEntryConfig)) {
        const metadataLayerList = Cast<TypeLayerEntryConfig[]>(this.metadata?.listOfLayerEntryConfig);
        const foundEntry = metadataLayerList.find((layerMetadata) => layerMetadata.layerId === layerConfiguration.layerId);
        if (!foundEntry) {
          this.layerLoadError.push({
            layer: layerPath,
            consoleMessage: `XYZ layer not found (mapId:  ${this.mapId}, layerPath: ${layerPath})`,
          });
          this.setLayerStatus('error', layerPath);
          return;
        }
        return;
      }

      throw new Error(
        `Invalid GeoJSON metadata (listOfLayerEntryConfig) prevent loading of layer (mapId:  ${this.mapId}, layerPath: ${layerPath})`
      );
    });
  }

  /** ****************************************************************************************************************************
   * This method creates a GeoView XYZTiles layer using the definition provided in the layerConfiguration parameter.
   *
   * @param {string} layerPath The layer path to the layer's configuration needed to create the GeoView layer.
   *
   * @returns {TypeBaseRasterLayer} The GeoView raster layer that has been created.
   */
  processOneLayerEntry(layerPath: string): Promise<TypeBaseRasterLayer | null> {
    const promisedVectorLayer = new Promise<TypeBaseRasterLayer | null>((resolve) => {
      const layerConfiguration = this.getLayerConfig(layerPath) as TypeXYZTilesLayerEntryConfig;
      this.setLayerPhase('processOneLayerEntry', layerPath);
      const sourceOptions: SourceOptions = {
        url: getLocalizedValue(layerConfiguration.source.dataAccessPath, this.mapId),
      };
      if (layerConfiguration.source.crossOrigin) sourceOptions.crossOrigin = layerConfiguration.source.crossOrigin;
      if (layerConfiguration.source.projection) sourceOptions.projection = `EPSG:${layerConfiguration.source.projection}`;
      if (layerConfiguration.source.tileGrid) {
        const tileGridOptions: TileGridOptions = {
          origin: layerConfiguration.source.tileGrid?.origin,
          resolutions: layerConfiguration.source.tileGrid?.resolutions as number[],
        };
        if (layerConfiguration.source.tileGrid?.tileSize) tileGridOptions.tileSize = layerConfiguration.source.tileGrid?.tileSize;
        if (layerConfiguration.source.tileGrid?.extent) tileGridOptions.extent = layerConfiguration.source.tileGrid?.extent;
        sourceOptions.tileGrid = new TileGrid(tileGridOptions);
      }

      const tileLayerOptions: TileOptions<XYZ> = { source: new XYZ(sourceOptions) };
      // layerConfiguration.initialSettings cannot be undefined because config-validation set it to {} if it is undefined.
      if (layerConfiguration.initialSettings?.className !== undefined)
        tileLayerOptions.className = layerConfiguration.initialSettings?.className;
      if (layerConfiguration.initialSettings?.extent !== undefined) tileLayerOptions.extent = layerConfiguration.initialSettings?.extent;
      if (layerConfiguration.initialSettings?.maxZoom !== undefined) tileLayerOptions.maxZoom = layerConfiguration.initialSettings?.maxZoom;
      if (layerConfiguration.initialSettings?.minZoom !== undefined) tileLayerOptions.minZoom = layerConfiguration.initialSettings?.minZoom;
      if (layerConfiguration.initialSettings?.opacity !== undefined) tileLayerOptions.opacity = layerConfiguration.initialSettings?.opacity;
      if (layerConfiguration.initialSettings?.visible !== undefined)
        tileLayerOptions.visible =
          layerConfiguration.initialSettings?.visible === 'yes' || layerConfiguration.initialSettings?.visible === 'always';

      layerConfiguration.olLayer = new TileLayer(tileLayerOptions);

      super.addLoadendListener(layerPath, 'tile');

      resolve(layerConfiguration.olLayer);
    });
    return promisedVectorLayer;
  }

  /** ***************************************************************************************************************************
   * This method is used to process the layer's metadata. It will fill the empty fields of the layer's configuration (renderer,
   * initial settings, fields and aliases).
   *
   * @param {TypeVectorLaTypeLayerEntryConfigyerEntryConfig} layerConfiguration The layer entry configuration to process.
   *
   * @returns {Promise<void>} A promise that the vector layer configuration has its metadata processed.
   */
  protected processLayerMetadata(layerConfiguration: TypeLayerEntryConfig): Promise<void> {
    const promiseOfExecution = new Promise<void>((resolve) => {
      if (!this.metadata) resolve();
      else {
        const metadataLayerConfigFound = Cast<TypeXYZTilesLayerEntryConfig[]>(this.metadata?.listOfLayerEntryConfig).find(
          (metadataLayerConfig) => metadataLayerConfig.layerId === layerConfiguration.layerId
        );
        // metadataLayerConfigFound can not be undefined because we have already validated the config exist
        this.layerMetadata[Layer.getLayerPath(layerConfiguration)] = toJsonObject(metadataLayerConfigFound);
        layerConfiguration.source = defaultsDeep(layerConfiguration.source, metadataLayerConfigFound!.source);
        layerConfiguration.initialSettings = defaultsDeep(layerConfiguration.initialSettings, metadataLayerConfigFound!.initialSettings);

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
    const layerBounds = (layerConfiguration.olLayer as TileLayer<XYZ>).getSource()?.getTileGrid()?.getExtent();
    const projection =
      (layerConfiguration.olLayer as TileLayer<XYZ>).getSource()?.getProjection()?.getCode().replace('EPSG:', '') ||
      api.maps[this.mapId].currentProjection;

    if (layerBounds) {
      const transformedBounds = transformExtent(layerBounds, `EPSG:${projection}`, `EPSG:4326`);
      if (!bounds) bounds = [transformedBounds[0], transformedBounds[1], transformedBounds[2], transformedBounds[3]];
      else bounds = getMinOrMaxExtents(bounds, transformedBounds);
    }

    return bounds;
  }
}
