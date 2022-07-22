// import axios from 'axios';

import { ImageArcGISRest } from 'ol/source';
import { Options as SourceOptions } from 'ol/source/ImageArcGISRest';
import { Options as ImageOptions } from 'ol/layer/BaseImage';
import { Image as ImageLayer } from 'ol/layer';
// import { extend, Extent } from 'ol/extent';
// import { transformExtent } from 'ol/proj';

import {
  getXMLHttpRequest,
  AbstractGeoViewLayer,
  CONST_LAYER_TYPES,
  TypeJsonObject,
  TypeImageLayerConfig,
  TypeSourceImageEsriInitialConfig,
  TypeBaseRasterLayer,
  TypeGeoviewLayerConfig,
  AbstractGeoViewRaster,
  TypeLayerConfig,
} from '../../../../core/types/cgpv-types';

import { api } from '../../../../app';

export interface TypeImageEsriLayerConfig extends Omit<TypeImageLayerConfig, 'source'> {
  source: TypeSourceImageEsriInitialConfig;
}

export interface TypeDynamicLayerConfig extends Omit<TypeGeoviewLayerConfig, 'layerEntries'> {
  layerEntries?: TypeImageEsriLayerConfig[];
}

/** ******************************************************************************************************************************
 * Type Gard function that redefines a TypeGeoviewLayerConfig as a TypeDynamicLayerConfig if the layerType attribute of the
 * verifyIfLayer parameter is ESRI_DYNAMIC. The type ascention applies only to the the true block of the if clause that use
 * this function.
 *
 * @param {TypeGeoviewLayerConfig} verifyIfLayer Polymorphic object to test in order to determine if the type ascention is valid.
 *
 * @return {boolean} true if the type ascention is valid.
 */
export const layerConfigIsEsriDynamic = (verifyIfLayer: TypeGeoviewLayerConfig): verifyIfLayer is TypeDynamicLayerConfig => {
  return verifyIfLayer.layerType === CONST_LAYER_TYPES.ESRI_DYNAMIC;
};

/** ******************************************************************************************************************************
 * Type Gard function that redefines an AbstractGeoViewLayer as an EsriDynamic if the type attribute of the verifyIfGeoViewLayer
 * parameter is ESRI_DYNAMIC. The type ascention applies only to the the true block of the if clause that use this function.
 *
 * @param {AbstractGeoViewLayer} verifyIfGeoViewLayer Polymorphic object to test in order to determine if the type ascention is valid.
 *
 * @return {boolean} true if the type ascention is valid.
 */
export const geviewLayerIsEsriDynamic = (verifyIfGeoViewLayer: AbstractGeoViewLayer): verifyIfGeoViewLayer is EsriDynamic => {
  return verifyIfGeoViewLayer.type === CONST_LAYER_TYPES.ESRI_DYNAMIC;
};

/** ******************************************************************************************************************************
 * Type Gard function that redefines a TypeLayerConfig as a TypeImageEsriLayerConfig if the layerType attribute of the
 * verifyIfGeoViewEntry.geoviewLayerParent attribute is ESRI_DYNAMIC. The type ascention applies only to the the true block of
 * the if clause that use this function.
 *
 * @param {TypeLayerConfig} polymorphic object to test in order to determine if the type ascention is valid
 *
 * @return {boolean} true if the type ascention is valid
 */
export const geoviewEntryIsEsriDynamic = (verifyIfGeoViewEntry: TypeLayerConfig): verifyIfGeoViewEntry is TypeImageEsriLayerConfig => {
  return verifyIfGeoViewEntry.geoviewLayerParent.layerType === CONST_LAYER_TYPES.ESRI_DYNAMIC;
};

/** ******************************************************************************************************************************
 * A class to add esri dynamic layer.
 *
 * @exports
 * @class EsriDynamic
 */
export class EsriDynamic extends AbstractGeoViewRaster {
  /** Service metadata */
  metadata: TypeJsonObject = {};

  /** ****************************************************************************************************************************
   * Initialize layer.
   * @param {string} mapId The id of the map.
   * @param {TypeDynamicLayerConfig} layerConfig The layer configuration.
   */
  constructor(mapId: string, layerConfig: TypeDynamicLayerConfig) {
    super(CONST_LAYER_TYPES.ESRI_DYNAMIC, layerConfig, mapId);
  }

  /** ****************************************************************************************************************************
   * This method reads from the accessPath additional information to complete the GeoView layer configuration.
   */
  getAdditionalServiceDefinition(): void {
    const data = getXMLHttpRequest(`${this.accessPath[api.map(this.mapId).getLanguageCode()]}?f=json`);
    data.then((value) => {
      if (value !== '{}') {
        this.metadata = JSON.parse(value) as TypeJsonObject;
      }
    });
  }

  /** ****************************************************************************************************************************
   * This method creates a GeoView EsriDynamic layer using the definition provided in the layerEntry parameter.
   *
   * @param {TypeImageEsriLayerConfig} layerEntry Information needed to create the GeoView layer.
   *
   * @returns {TypeBaseRasterLayer} The GeoView raster layer that has been created.
   */
  processOneLayerEntry(layerEntry: TypeImageEsriLayerConfig): TypeBaseRasterLayer {
    const sourceOptions: SourceOptions = {};
    sourceOptions.attributions = [(this.metadata.copyrightText ? this.metadata.copyrightText : '') as string];
    sourceOptions.url = layerEntry.source.accesPath[api.map(this.mapId).getLanguageCode()];
    sourceOptions.params = { LAYERS: `show:${layerEntry.info.layerId}` };
    if (typeof layerEntry.source.transparent !== undefined)
      Object.defineProperty(sourceOptions.params, 'transparent', layerEntry.source.transparent!);
    if (typeof layerEntry.source.format !== undefined) Object.defineProperty(sourceOptions.params, 'format', layerEntry.source.format!);
    if (typeof layerEntry.source.crossOrigin !== undefined) sourceOptions.crossOrigin = layerEntry.source.crossOrigin;
    if (typeof layerEntry.source.projection !== undefined) sourceOptions.projection = `EPSG:${layerEntry.source.projection}`;

    const imageLayerOptions: ImageOptions<ImageArcGISRest> = {
      source: new ImageArcGISRest(sourceOptions),
      properties: { layerConfig: layerEntry },
    };
    if (typeof layerEntry.initialSettings?.className !== undefined) imageLayerOptions.className = layerEntry.initialSettings?.className;
    if (typeof layerEntry.initialSettings?.extent !== undefined) imageLayerOptions.extent = layerEntry.initialSettings?.extent;
    if (typeof layerEntry.initialSettings?.maxZoom !== undefined) imageLayerOptions.maxZoom = layerEntry.initialSettings?.maxZoom;
    if (typeof layerEntry.initialSettings?.minZoom !== undefined) imageLayerOptions.minZoom = layerEntry.initialSettings?.minZoom;
    if (typeof layerEntry.initialSettings?.opacity !== undefined) imageLayerOptions.opacity = layerEntry.initialSettings?.opacity;
    if (typeof layerEntry.initialSettings?.visible !== undefined) imageLayerOptions.visible = layerEntry.initialSettings?.visible;

    const esriLayer = new ImageLayer(imageLayerOptions);

    return esriLayer;
  }

  /**
   * This method associate a renderer to the GeoView layer.
   *
   * @param {TypeLayerConfig} layerEntry Information needed to create the renderer.
   * @param {TypeBaseRasterLayer} rasterLayer The GeoView layer associated to the renderer.
   */
  setRenderer(layerEntry: TypeLayerConfig, rasterLayer: TypeBaseRasterLayer): void {
    // eslint-disable-next-line no-console
    console.log('This method needs to be coded!');
    // eslint-disable-next-line no-console
    console.log(layerEntry, rasterLayer);
  }

  /**
   * This method register the GeoView layer to panels that offer this possibility.
   *
   * @param {TypeLayerConfig} layerEntry Information needed to create the renderer.
   * @param {TypeBaseRasterLayer} rasterLayer The GeoView layer who wants to register.
   */
  registerToPanels(layerEntry: TypeLayerConfig, rasterLayer: TypeBaseRasterLayer): void {
    // eslint-disable-next-line no-console
    console.log('This method needs to be coded!');
    // eslint-disable-next-line no-console
    console.log(layerEntry, rasterLayer);
  }
}