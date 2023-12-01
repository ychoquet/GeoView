/* eslint-disable no-var, vars-on-top, block-scoped-var, no-param-reassign */
import axios from 'axios';

import { get, transformExtent } from 'ol/proj';
import { Options as SourceOptions } from 'ol/source/Vector';
import { GeoJSON as FormatGeoJSON } from 'ol/format';
import { ReadOptions } from 'ol/format/Feature';
import { Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';

import { TypeJsonObject } from '@/core/types/global-types';
import { AbstractGeoViewLayer, CONST_LAYER_TYPES } from '@/geo/layer/geoview-layers/abstract-geoview-layers';
import { AbstractGeoViewVector } from './abstract-geoview-vector';
import {
  TypeLayerEntryConfig,
  TypeVectorLayerEntryConfig,
  TypeVectorSourceInitialConfig,
  TypeGeoviewLayerConfig,
  TypeListOfLayerEntryConfig,
  layerEntryIsGroupLayer,
  TypeBaseLayerEntryConfig,
  TypeBaseSourceVectorInitialConfig,
} from '@/geo/map/map-schema-types';

import { getLocalizedValue } from '@/core/utils/utilities';
import { api } from '@/app';
import { Layer } from '../../layer';

export interface TypeSourceOgcFeatureInitialConfig extends TypeVectorSourceInitialConfig {
  format: 'featureAPI';
}

export interface TypeOgcFeatureLayerEntryConfig extends Omit<TypeVectorLayerEntryConfig, 'source'> {
  source: TypeSourceOgcFeatureInitialConfig;
}

export interface TypeOgcFeatureLayerConfig extends Omit<TypeGeoviewLayerConfig, 'listOfLayerEntryConfig' | 'geoviewLayerType'> {
  geoviewLayerType: 'ogcFeature';
  listOfLayerEntryConfig: TypeOgcFeatureLayerEntryConfig[];
}

/** *****************************************************************************************************************************
 * type guard function that redefines a TypeGeoviewLayerConfig as a TypeOgcFeatureLayerConfig if the geoviewLayerType attribute of
 * the verifyIfLayer parameter is OGC_FEATURE. The type ascention applies only to the true block of the if clause that use this
 * function.
 *
 * @param {TypeGeoviewLayerConfig} verifyIfLayer Polymorphic object to test in order to determine if the type ascention is valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const layerConfigIsOgcFeature = (verifyIfLayer: TypeGeoviewLayerConfig): verifyIfLayer is TypeOgcFeatureLayerConfig => {
  return verifyIfLayer?.geoviewLayerType === CONST_LAYER_TYPES.OGC_FEATURE;
};

/** *****************************************************************************************************************************
 * type guard function that redefines an AbstractGeoViewLayer as an OgcFeature
 * if the type attribute of the verifyIfGeoViewLayer parameter is OGC_FEATURE. The type ascention
 * applies only to the true block of the if clause that use this function.
 *
 * @param {AbstractGeoViewLayer} verifyIfGeoViewLayer Polymorphic object to test in order to determine if the type ascention is
 * valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const geoviewLayerIsOgcFeature = (verifyIfGeoViewLayer: AbstractGeoViewLayer): verifyIfGeoViewLayer is OgcFeature => {
  return verifyIfGeoViewLayer?.type === CONST_LAYER_TYPES.OGC_FEATURE;
};

/** *****************************************************************************************************************************
 * type guard function that redefines a TypeLayerEntryConfig as a TypeOgcFeatureLayerEntryConfig if the geoviewLayerType attribute
 * of the verifyIfGeoViewEntry.geoviewRootLayer attribute is OGC_FEATURE. The type ascention applies only to the true block of
 * the if clause that use this function.
 *
 * @param {TypeLayerEntryConfig} verifyIfGeoViewEntry Polymorphic object to test in order to determine if the type ascention is
 * valid.
 *
 * @returns {boolean} true if the type ascention is valid.
 */
export const geoviewEntryIsOgcFeature = (
  verifyIfGeoViewEntry: TypeLayerEntryConfig
): verifyIfGeoViewEntry is TypeOgcFeatureLayerEntryConfig => {
  return verifyIfGeoViewEntry?.geoviewRootLayer?.geoviewLayerType === CONST_LAYER_TYPES.OGC_FEATURE;
};

// ******************************************************************************************************************************
// ******************************************************************************************************************************
/** ******************************************************************************************************************************
 * A class to add OGC api feature layer.
 *
 * @exports
 * @class OgcFeature
 */
// ******************************************************************************************************************************
export class OgcFeature extends AbstractGeoViewVector {
  // private varibale holding wfs version
  private version = '2.0.0';

  /** ***************************************************************************************************************************
   * Initialize layer
   *
   * @param {string} mapId the id of the map
   * @param {TypeOgcFeatureLayerConfig} layerConfiguration the layer configuration
   */
  constructor(mapId: string, layerConfiguration: TypeOgcFeatureLayerConfig) {
    super(CONST_LAYER_TYPES.OGC_FEATURE, layerConfiguration, mapId);
  }

  /** ***************************************************************************************************************************
   * Extract the type of the specified field from the metadata. If the type can not be found, return 'string'.
   *
   * @param {string} fieldName field name for which we want to get the type.
   * @param {TypeLayerEntryConfig} layerConfiguration layer configuration.
   *
   * @returns {'string' | 'date' | 'number'} The type of the field.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected getFieldType(fieldName: string, layerConfiguration: TypeLayerEntryConfig): 'string' | 'date' | 'number' {
    const fieldDefinitions = this.layerMetadata[Layer.getLayerPath(layerConfiguration)];
    const fieldEntryType = (fieldDefinitions[fieldName].type as string).split(':').slice(-1)[0] as string;
    if (fieldEntryType === 'date') return 'date';
    if (['int', 'number'].includes(fieldEntryType)) return 'number';
    return 'string';
  }

  /** ***************************************************************************************************************************
   * This method reads the service metadata from the metadataAccessPath.
   *
   * @returns {Promise<void>} A promise that the execution is completed.
   */
  protected getServiceMetadata(): Promise<void> {
    this.setLayerPhase('getServiceMetadata');
    const promisedExecution = new Promise<void>((resolve) => {
      const metadataUrl = getLocalizedValue(this.metadataAccessPath, this.mapId);
      if (metadataUrl) {
        const queryUrl = metadataUrl.endsWith('/') ? `${metadataUrl}collections?f=json` : `${metadataUrl}/collections?f=json`;
        axios
          .get<TypeJsonObject>(queryUrl)
          .then((response) => {
            this.metadata = response.data;
            resolve();
          }) // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .catch((reason) => {
            this.setAllLayerStatusToError(this.listOfLayerEntryConfig, 'Unable to read metadata');
          });
      } else {
        this.setAllLayerStatusToError(this.listOfLayerEntryConfig, 'Unable to read metadata');
      }
    });
    return promisedExecution;
  }

  /** ***************************************************************************************************************************
   * This method validates recursively the configuration of the layer entries to ensure that it is a feature layer identified
   * with a numeric layerId and creates a group entry when a layer is a group.
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

      // Note that the code assumes ogc-feature collections does not contains metadata layer group. If you need layer group,
      // you can define them in the configuration section.
      if (Array.isArray(this.metadata!.collections)) {
        const foundCollection = this.metadata!.collections.find((layerMetadata) => layerMetadata.id === layerConfiguration.layerId);
        if (!foundCollection) {
          this.layerLoadError.push({
            layer: layerPath,
            consoleMessage: `OGC feature layer not found (mapId:  ${this.mapId}, layerPath: ${layerPath})`,
          });
          this.setLayerStatus('error', layerPath);
          return;
        }

        if (foundCollection.description)
          layerConfiguration.layerName = {
            en: foundCollection.description as string,
            fr: foundCollection.description as string,
          };

        if (layerConfiguration.initialSettings?.extent)
          layerConfiguration.initialSettings.extent = transformExtent(
            layerConfiguration.initialSettings.extent,
            'EPSG:4326',
            `EPSG:${api.maps[this.mapId].currentProjection}`
          );

        if (!layerConfiguration.initialSettings?.bounds && foundCollection.extent?.spatial?.bbox && foundCollection.extent?.spatial?.crs) {
          // layerConfiguration.initialSettings cannot be undefined because config-validation set it to {} if it is undefined.
          layerConfiguration.initialSettings!.bounds = transformExtent(
            foundCollection.extent.spatial.bbox[0] as number[],
            get(foundCollection.extent.spatial.crs as string)!,
            `EPSG:${api.maps[this.mapId].currentProjection}`
          );
        }
        return;
      }

      throw new Error(`Invalid collection's metadata prevent loading of layer (mapId:  ${this.mapId}, layerPath: ${layerPath})`);
    });
  }

  /** ***************************************************************************************************************************
   * This method is used to process the layer's metadata. It will fill the empty outfields and aliasFields properties of the
   * layer's configuration.
   *
   * @param {TypeVectorLayerEntryConfig} layerConfiguration The layer entry configuration to process.
   *
   * @returns {Promise<void>} A promise that the vector layer configuration has its metadata processed.
   */
  protected processLayerMetadata(layerConfiguration: TypeVectorLayerEntryConfig): Promise<void> {
    const promiseOfExecution = new Promise<void>((resolve) => {
      const metadataUrl = getLocalizedValue(this.metadataAccessPath, this.mapId);
      if (metadataUrl) {
        const queryUrl = metadataUrl.endsWith('/')
          ? `${metadataUrl}collections/${String(layerConfiguration.layerId).replace('-unclustered', '')}/queryables?f=json`
          : `${metadataUrl}/collections/${String(layerConfiguration.layerId).replace('-unclustered', '')}/queryables?f=json`;
        const queryResult = axios.get<TypeJsonObject>(queryUrl);
        queryResult.then((response) => {
          if (response.data.properties) {
            this.layerMetadata[Layer.getLayerPath(layerConfiguration)] = response.data.properties;
            this.processFeatureInfoConfig(response.data.properties, layerConfiguration);
          }
          resolve();
        });
      } else resolve();
    });
    return promiseOfExecution;
  }

  /** ***************************************************************************************************************************
   * This method sets the outfields and aliasFields of the source feature info.
   *
   * @param {TypeJsonArray} fields An array of field names and its aliases.
   * @param {TypeVectorLayerEntryConfig} layerConfiguration The vector layer entry to configure.
   */
  private processFeatureInfoConfig(fields: TypeJsonObject, layerConfiguration: TypeVectorLayerEntryConfig) {
    if (!layerConfiguration.source) layerConfiguration.source = {};
    if (!layerConfiguration.source.featureInfo) layerConfiguration.source.featureInfo = { queryable: true };
    // Process undefined outfields or aliasFields ('' = false and !'' = true). Also, if en is undefined, then fr is also undefined.
    // when en and fr are undefined, we set both en and fr to the same value.
    if (!layerConfiguration.source.featureInfo.outfields?.en || !layerConfiguration.source.featureInfo.aliasFields?.en) {
      const processOutField = !layerConfiguration.source.featureInfo.outfields?.en;
      const processAliasFields = !layerConfiguration.source.featureInfo.aliasFields?.en;
      if (processOutField) {
        layerConfiguration.source.featureInfo.outfields = { en: '' };
        layerConfiguration.source.featureInfo.fieldTypes = '';
      }
      if (processAliasFields) layerConfiguration.source.featureInfo.aliasFields = { en: '' };

      // TODO: check if this is a duplicate of getField function. Clean in other classes as well
      Object.keys(fields).forEach((fieldEntry) => {
        if (fields[fieldEntry].type === 'Geometry') return;
        if (processOutField) {
          layerConfiguration.source!.featureInfo!.outfields!.en = `${layerConfiguration.source!.featureInfo!.outfields!.en}${fieldEntry},`;
          let fieldType: 'string' | 'date' | 'number';
          if (fields[fieldEntry].type === 'date') fieldType = 'date';
          else if (['int', 'number'].includes(fields[fieldEntry].type as string)) fieldType = 'number';
          else fieldType = 'string';
          layerConfiguration.source!.featureInfo!.fieldTypes = `${layerConfiguration.source!.featureInfo!.fieldTypes}${fieldType},`;
        }
        layerConfiguration.source!.featureInfo!.aliasFields!.en = `${
          layerConfiguration.source!.featureInfo!.aliasFields!.en
        }${fieldEntry},`;
      });
      layerConfiguration.source.featureInfo!.outfields!.en = layerConfiguration.source.featureInfo!.outfields?.en?.slice(0, -1);
      layerConfiguration.source.featureInfo!.fieldTypes = layerConfiguration.source.featureInfo!.fieldTypes?.slice(0, -1);
      layerConfiguration.source.featureInfo!.aliasFields!.en = layerConfiguration.source.featureInfo!.aliasFields?.en?.slice(0, -1);
      layerConfiguration.source!.featureInfo!.outfields!.fr = layerConfiguration.source!.featureInfo!.outfields?.en;
      layerConfiguration.source!.featureInfo!.aliasFields!.fr = layerConfiguration.source!.featureInfo!.aliasFields?.en;
    }
    if (!layerConfiguration.source.featureInfo.nameField) {
      const en =
        layerConfiguration.source.featureInfo!.outfields!.en?.split(',')[0] ||
        layerConfiguration.source.featureInfo!.outfields!.fr?.split(',')[0];
      const fr = en;
      if (en) layerConfiguration.source.featureInfo.nameField = { en, fr };
    }
  }

  /** ***************************************************************************************************************************
   * Create a source configuration for the vector layer.
   *
   * @param {string} layerPath The layer path to the layer's configuration.
   * @param {SourceOptions} sourceOptions The source options (default: {}).
   * @param {ReadOptions} readOptions The read options (default: {}).
   *
   * @returns {VectorSource<Geometry>} The source configuration that will be used to create the vector layer.
   */
  protected createVectorSource(layerPath: string, sourceOptions: SourceOptions = {}, readOptions: ReadOptions = {}): VectorSource<Feature> {
    const layerConfiguration = this.getLayerConfig(layerPath) as TypeBaseLayerEntryConfig;
    readOptions.dataProjection = (layerConfiguration.source as TypeBaseSourceVectorInitialConfig).dataProjection;
    sourceOptions.url = getLocalizedValue(layerConfiguration.source!.dataAccessPath!, this.mapId);
    sourceOptions.url = `${sourceOptions.url}/collections/${layerConfiguration.layerId}/items?f=json`;
    sourceOptions.format = new FormatGeoJSON();
    const vectorSource = super.createVectorSource(layerPath, sourceOptions, readOptions);
    return vectorSource;
  }
}
