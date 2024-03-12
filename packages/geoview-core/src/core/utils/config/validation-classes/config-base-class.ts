import BaseLayer from 'ol/layer/Base';
import LayerGroup from 'ol/layer/Group';
import { AbstractGeoViewLayer, TypeGeoviewLayerType } from '@/geo/layer/geoview-layers/abstract-geoview-layers';
import { TypeGeoviewLayerConfig, TypeLayerEntryType, TypeLayerStatus, layerEntryIsGroupLayer } from '@/geo/map/map-schema-types';
import { GroupLayerEntryConfig } from './group-layer-entry-config';
import { logger } from '../../logger';
import { LayerSetPayload } from '@/api/events/payloads';
import { Cast, TypeJsonValue, api } from '@/core/types/cgpv-types';
import { AbstractBaseLayerEntryConfig } from './abstract-base-layer-entry-config';

/** ******************************************************************************************************************************
 * Base type used to define a GeoView layer to display on the map. Unless specified,its properties are not part of the schema.
 */
export class ConfigBaseClass {
  /** The identifier of the layer to display on the map. This element is part of the schema. */
  private _layerId = '';

  /** The ending extension (element) of the layer identifier. This element is part of the schema. */
  layerIdExtension?: string;

  /** Tag used to link the entry to a specific schema. This element is part of the schema. */
  schemaTag?: TypeGeoviewLayerType;

  /** Layer entry data type. This element is part of the schema. */
  entryType?: TypeLayerEntryType;

  // TODO: There shouldn't be a coupling to a `AbstractGeoViewLayer` inside a Configuration class.
  // TO.DOCONT: That logic should be elsewhere so that the Configuration class remains portable and immutable.
  /** The geoview layer instance that contains this layer configuration. */
  geoviewLayerInstance?: AbstractGeoViewLayer;

  /** It is used to link the layer entry config to the GeoView layer config. */
  geoviewLayerConfig = {} as TypeGeoviewLayerConfig;

  /** It is used internally to distinguish layer groups derived from the
   * metadata. */
  isMetadataLayerGroup?: boolean;

  // TODO: There shouldn't be a coupling to a `AbstractGeoViewLayer` inside a Configuration class.
  // TO.DOCONT: That logic should be elsewhere so that the Configuration class remains portable and immutable.
  /** It is used to link the layer entry config to the parent's layer config. */
  parentLayerConfig?: TypeGeoviewLayerConfig | GroupLayerEntryConfig;

  /** The layer path to this instance. */
  protected _layerPath = '';

  // TODO: There shouldn't be a coupling to a `AbstractGeoViewLayer` inside a Configuration class.
  // TO.DOCONT: That logic should be elsewhere so that the Configuration class remains portable and immutable.
  /** This property is used to link the displayed layer to its layer entry config. it is not part of the schema. */
  protected _olLayer: BaseLayer | LayerGroup | null = null;

  /** It is used to identified unprocessed layers and shows the final layer state */
  protected _layerStatus: TypeLayerStatus = 'newInstance';

  protected layerStatusWeight = {
    newInstance: 10,
    registered: 20,
    processing: 30,
    processed: 40,
    loading: 50,
    loaded: 60,
    error: 70,
  };

  /** Flag indicating that the loaded signal arrived before the processed one */
  protected waitForProcessedBeforeSendingLoaded = false;

  /**
   * The class constructor.
   * @param {ConfigBaseClass} layerConfig The layer configuration we want to instanciate.
   */
  constructor(layerConfig: ConfigBaseClass) {
    if (layerConfig.entryType === 'geoCore') {
      // eslint-disable-next-line no-underscore-dangle
      this._layerPath = '';
      this.geoviewLayerConfig = {} as TypeGeoviewLayerConfig;
      return;
    }
    Object.assign(this, layerConfig);
    // eslint-disable-next-line no-underscore-dangle
    if (this.geoviewLayerConfig) this._layerPath = ConfigBaseClass.evaluateLayerPath(layerConfig);
    else logger.logError("Couldn't calculate layerPath because geoviewLayerConfig has an invalid value");
  }

  /**
   * The layerPath getter method for the ConfigBaseClass class and its descendant classes.
   */
  get layerPath() {
    // eslint-disable-next-line no-underscore-dangle
    this._layerPath = ConfigBaseClass.evaluateLayerPath(this);
    // eslint-disable-next-line no-underscore-dangle
    return this._layerPath;
  }

  /**
   * Getter for the layer Path of the layer configuration parameter.
   * @param {ConfigBaseClass} layerConfig The layer configuration for which we want to get the layer path.
   * @param {string} layerPath Internal parameter used to build the layer path (should not be used by the user).
   *
   * @returns {string} Returns the layer path.
   */
  static evaluateLayerPath(layerConfig: ConfigBaseClass, layerPath?: string): string {
    let pathEnding = layerPath;
    if (pathEnding === undefined)
      pathEnding =
        layerConfig.layerIdExtension === undefined ? layerConfig.layerId : `${layerConfig.layerId}.${layerConfig.layerIdExtension}`;
    if (!layerConfig.parentLayerConfig) return `${layerConfig.geoviewLayerConfig!.geoviewLayerId!}/${pathEnding}`;
    return this.evaluateLayerPath(
      layerConfig.parentLayerConfig as GroupLayerEntryConfig,
      `${(layerConfig.parentLayerConfig as GroupLayerEntryConfig).layerId}/${pathEnding}`
    );
  }

  /**
   * The layerId getter method for the ConfigBaseClass class and its descendant classes.
   */
  get layerId() {
    // eslint-disable-next-line no-underscore-dangle
    return this._layerId;
  }

  /**
   * The layerId setter method for the ConfigBaseClass class and its descendant classes.
   * @param {string} newLayerId The new layerId value.
   */
  set layerId(newLayerId: string) {
    // eslint-disable-next-line no-underscore-dangle
    this._layerId = newLayerId;
    // eslint-disable-next-line no-underscore-dangle
    this._layerPath = ConfigBaseClass.evaluateLayerPath(this);
  }

  /**
   * The layerId getter method for the ConfigBaseClass class and its descendant classes.
   */
  get layerStatus() {
    // eslint-disable-next-line no-underscore-dangle
    return this._layerStatus;
  }

  /**
   * The layerStatus setter method for the ConfigBaseClass class and its descendant classes.
   * @param {string} newLayerStatus The new layerId value.
   */
  set layerStatus(newLayerStatus: TypeLayerStatus) {
    if (
      newLayerStatus === 'loaded' &&
      !layerEntryIsGroupLayer(this) &&
      !this.IsGreaterThanOrEqualTo('loading') &&
      !this.waitForProcessedBeforeSendingLoaded
    ) {
      this.waitForProcessedBeforeSendingLoaded = true;
      return;
    }
    if (!this.IsGreaterThanOrEqualTo(newLayerStatus)) {
      // eslint-disable-next-line no-underscore-dangle
      this._layerStatus = newLayerStatus;
      api.event.emit(
        // TODO: Change createLayerSetChangeLayerStatusPayload events for a direct function call.
        LayerSetPayload.createLayerSetChangeLayerStatusPayload(this.geoviewLayerInstance!.mapId, this.layerPath, newLayerStatus)
      );
    }
    if (newLayerStatus === 'processed' && this.waitForProcessedBeforeSendingLoaded) this.layerStatus = 'loaded';

    if (
      // eslint-disable-next-line no-underscore-dangle
      this._layerStatus === 'loaded' &&
      this.parentLayerConfig &&
      this.geoviewLayerInstance!.allLayerStatusAreGreaterThanOrEqualTo('loaded', [this.parentLayerConfig as GroupLayerEntryConfig])
    )
      (this.parentLayerConfig as GroupLayerEntryConfig).layerStatus = 'loaded';
  }

  /**
   * Register the layer identifier. Duplicate identifier are not allowed.
   *
   * @returns {boolean} Returns false if the layer configuration can't be registered.
   */

  registerLayerConfig(): boolean {
    const { registeredLayers } = api.maps[this.geoviewLayerInstance!.mapId].layer;
    if (registeredLayers[this.layerPath]) return false;
    (registeredLayers[this.layerPath] as ConfigBaseClass) = this;
    if (this.entryType !== 'group')
      (this.geoviewLayerInstance as AbstractGeoViewLayer).registerToLayerSets(Cast<AbstractBaseLayerEntryConfig>(this));
    this.layerStatus = 'registered';
    return true;
  }

  /**
   * This method returns the GeoView instance associated to a specific layer path. The first element of the layerPath
   * is the geoviewLayerId.
   * @param {string} layerPath The layer path to the layer's configuration.
   *
   * @returns {AbstractGeoViewLayer} Returns the geoview instance associated to the layer path.
   */
  // TODO: Check - Is this still used? Remove it and favor the homonymous method in `layer`?
  geoviewLayer(layerPath?: string): AbstractGeoViewLayer {
    this.geoviewLayerInstance!.layerPathAssociatedToTheGeoviewLayer = layerPath || this.layerPath;
    return this.geoviewLayerInstance!;
  }

  /**
   * This method compares the internal layer status of the config with the layer status passed as a parameter and it
   * returns true if the internal value is greater or equal to the value of the parameter.
   *
   * @param {TypeLayerStatus} layerStatus The layer status to compare with the internal value of the config.
   *
   * @returns {boolean} Returns true if the internal value is greater or equal than the value of the parameter.
   */
  IsGreaterThanOrEqualTo(layerStatus: TypeLayerStatus): boolean {
    return this.layerStatusWeight[this.layerStatus] >= this.layerStatusWeight[layerStatus];
  }

  /**
   * Serializes the ConfigBaseClass class
   * @returns {TypeJsonValue} The serialized ConfigBaseClass
   */
  serialize(): TypeJsonValue {
    // Redirect
    return this.onSerialize();
  }

  /**
   * Overridable function to serialize a ConfigBaseClass
   * @returns {TypeJsonValue} The serialized ConfigBaseClass
   */
  onSerialize(): TypeJsonValue {
    return {
      layerIdExtension: this.layerIdExtension,
      schemaTag: this.schemaTag,
      entryType: this.entryType,
      layerStatus: this.layerStatus,
      isMetadataLayerGroup: this.isMetadataLayerGroup,
    } as unknown as TypeJsonValue;
  }
}