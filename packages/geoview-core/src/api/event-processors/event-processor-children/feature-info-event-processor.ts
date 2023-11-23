import { AbstractEventProcessor } from '../abstract-event-processor';
import { TypeFeatureInfoResultSets, TypeArrayOfLayerData, EventType } from '@/api/events/payloads/get-feature-info-payload';
import { getGeoViewStore } from '@/core/stores/stores-managers';

export class FeatureInfoEventProcessor extends AbstractEventProcessor {
  // **********************************************************
  // Static functions for Typescript files to set store values
  // **********************************************************
  static propagateFeatureInfoToStore(mapId: string, layerPath: string, eventType: EventType, resultSets: TypeFeatureInfoResultSets) {
    const store = getGeoViewStore(mapId);
    const layerPathInResultSets = Object.keys(resultSets);
    if (eventType === 'click') {
      const newDetails: TypeArrayOfLayerData = [];
      layerPathInResultSets.forEach((existingLayerPath) => {
        if (resultSets[existingLayerPath].data[eventType]?.features?.length)
          newDetails.push(resultSets[existingLayerPath].data[eventType]!);
      });
      const storeDetails = store.getState().detailsState.layerDataArray;
      if (storeDetails.length !== newDetails.length || storeDetails.findIndex((layerData, i) => layerData !== newDetails[i]) !== -1)
        store.getState().detailsState.actions.setLayerDataArray(newDetails);
    }
  }
}
