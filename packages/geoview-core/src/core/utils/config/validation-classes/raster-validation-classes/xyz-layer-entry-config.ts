import { TypeSourceImageXYZTilesInitialConfig } from '@/geo/layer/geoview-layers/raster/xyz-tiles';
import { TileLayerEntryConfig } from '../tile-layer-entry-config';
import { TypeJsonObject } from '@/app';

export class XYZTilesLayerEntryConfig extends TileLayerEntryConfig {
  declare source: TypeSourceImageXYZTilesInitialConfig;

  /**
   * The class constructor.
   * @param {TypeJsonObject} layerConfig The layer configuration we want to instanciate.
   */
  constructor(layerConfig: TypeJsonObject) {
    super(layerConfig);
    Object.assign(this, layerConfig);

    /** layerConfig.source.dataAccessPath is mandatory. */
    if (!this.source.dataAccessPath) {
      throw new Error(
        `source.dataAccessPath on layer entry ${this.layerPath} is mandatory for GeoView layer ${this.geoviewLayerConfig.geoviewLayerId} of type ${this.geoviewLayerConfig.geoviewLayerType}`
      );
    }
  }
}
