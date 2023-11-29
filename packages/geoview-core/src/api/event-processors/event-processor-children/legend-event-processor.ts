import { AbstractEventProcessor } from '../abstract-event-processor';
import { TypeLegendResultSetsEntry } from '@/api/events/payloads';
import {
  isClassBreakStyleConfig,
  isImageStaticLegend,
  isSimpleStyleConfig,
  isUniqueValueStyleConfig,
  isVectorLegend,
  isWmsLegend,
  layerEntryIsGroupLayer,
  TypeGeoviewLayerType,
  TypeLegend,
  TypeStyleGeometry,
} from '@/geo';
import { getGeoViewStore } from '@/core/stores/stores-managers';
import { TypeLegendLayer, TypeLegendLayerIcons, TypeLegendLayerItem, TypeLegendLayerListItem } from '@/core/components/layers/types';
import { api, getLocalizedValue } from '@/app';

export class LegendEventProcessor extends AbstractEventProcessor {
  // **********************************************************
  // Static functions for Typescript files to set store values
  // **********************************************************
  private static getLayerIconImage(mapId: string, layerPath: string, layerLegend: TypeLegend | null): TypeLegendLayerIcons | undefined {
    const iconDetails: TypeLegendLayerIcons = [];
    if (layerLegend) {
      if (layerLegend.legend === null) {
        if (layerLegend.styleConfig === null) iconDetails[0] = { iconImage: 'config not found' };
        else if (layerLegend.styleConfig === undefined) iconDetails[0] = { iconImage: 'undefined style config' };
      } else if (Object.keys(layerLegend.legend).length === 0) iconDetails[0] = { iconImage: 'no data' };
      else if (isWmsLegend(layerLegend) || isImageStaticLegend(layerLegend)) {
        iconDetails[0].iconType = 'simple';
        iconDetails[0].iconImage = layerLegend.legend ? layerLegend.legend.toDataURL() : '';
      } else if (isVectorLegend(layerLegend)) {
        Object.entries(layerLegend.legend).forEach(([key, styleRepresentation]) => {
          const geometryType = key as TypeStyleGeometry;
          const styleSettings = layerLegend.styleConfig![geometryType]!;
          const iconDetailsEntry: TypeLegendLayerItem = {};
          iconDetailsEntry.geometryType = geometryType;
          if (isSimpleStyleConfig(styleSettings)) {
            iconDetailsEntry.iconType = 'simple';
            iconDetailsEntry.iconImage = (styleRepresentation.defaultCanvas as HTMLCanvasElement).toDataURL();
            iconDetailsEntry.name = styleSettings.label;
          } else {
            iconDetailsEntry.iconType = 'list';
            if (isClassBreakStyleConfig(styleSettings)) {
              iconDetailsEntry.iconList = styleRepresentation.arrayOfCanvas!.map((canvas, i) => {
                const legendLayerListItem: TypeLegendLayerListItem = {
                  geometryType,
                  icon: canvas ? canvas.toDataURL() : null,
                  name: styleSettings.classBreakStyleInfo[i].label,
                  isVisible: styleSettings.classBreakStyleInfo[i].visible!,
                  default: false,
                };
                return legendLayerListItem;
              });
              if (styleRepresentation.defaultCanvas) {
                const legendLayerListItem: TypeLegendLayerListItem = {
                  geometryType,
                  icon: styleRepresentation.defaultCanvas.toDataURL(),
                  name: styleSettings.defaultLabel!,
                  isVisible: styleSettings.defaultVisible!,
                  default: true,
                };
                iconDetailsEntry.iconList.push(legendLayerListItem);
              }
            } else if (isUniqueValueStyleConfig(styleSettings)) {
              iconDetailsEntry.iconList = styleRepresentation.arrayOfCanvas!.map((canvas, i) => {
                const legendLayerListItem: TypeLegendLayerListItem = {
                  geometryType,
                  icon: canvas ? canvas.toDataURL() : null,
                  name: styleSettings.uniqueValueStyleInfo[i].label,
                  isVisible: styleSettings.uniqueValueStyleInfo[i].visible!,
                  default: false,
                };
                return legendLayerListItem;
              });
              if (styleRepresentation.defaultCanvas) {
                const legendLayerListItem: TypeLegendLayerListItem = {
                  geometryType,
                  icon: styleRepresentation.defaultCanvas.toDataURL(),
                  name: styleSettings.defaultLabel!,
                  isVisible: styleSettings.defaultVisible!,
                  default: true,
                };
                iconDetailsEntry.iconList.push(legendLayerListItem);
              }
            }
            if (iconDetailsEntry.iconList?.length) iconDetailsEntry.iconImage = iconDetailsEntry.iconList[0].icon;
            if (iconDetailsEntry.iconList && iconDetailsEntry.iconList.length > 1)
              iconDetailsEntry.iconImageStacked = iconDetailsEntry.iconList[1].icon;
            iconDetails.push(iconDetailsEntry);
          }
        });
      }
      return iconDetails;
    }
    return undefined;
  }

  static propagateLegendToStore(mapId: string, layerPath: string, legendResultSetsEntry: TypeLegendResultSetsEntry) {
    const layerPathNodes = layerPath.split('/');
    const createNewLegendEntries = (layerPathBeginning: string, currentLevel: number, existingEntries: TypeLegendLayer[]) => {
      if (layerPathNodes.length === currentLevel) return;
      const entryLayerPath = `${layerPathBeginning}/${layerPathNodes[currentLevel]}`;
      const layerConfiguration = api.maps[mapId].layer.registeredLayers[entryLayerPath];
      let entryIndex = existingEntries.findIndex((entry) => entry.layerPath === entryLayerPath);
      if (layerEntryIsGroupLayer(layerConfiguration)) {
        if (entryIndex === -1) {
          const legendLayerEntry: TypeLegendLayer = {
            layerId: layerConfiguration.layerId,
            layerPath: entryLayerPath,
            layerName: legendResultSetsEntry.data?.layerName ? getLocalizedValue(legendResultSetsEntry.data.layerName, mapId)! : '',
            type: layerConfiguration.entryType as TypeGeoviewLayerType,
            isVisible: layerConfiguration.initialSettings?.visible ? layerConfiguration.initialSettings.visible : 'yes',
            opacity: layerConfiguration.initialSettings?.opacity ? layerConfiguration.initialSettings.opacity : 1,
            layerAttribution: api.maps[mapId].layer.geoviewLayers[layerPathNodes[0]].attributions,
            metadataAccessPath: getLocalizedValue(layerConfiguration.geoviewRootLayer?.metadataAccessPath, mapId),
            items: [] as TypeLegendLayerListItem[],
            children: [] as TypeLegendLayer[],
          };
          existingEntries.push(legendLayerEntry);
          entryIndex = existingEntries.length - 1;
        } // else
        // We don't need to update it because basic information of a group node is not supposed to change after its creation.
        // Only the children may change and this is handled by the following call.
        createNewLegendEntries(entryLayerPath, currentLevel + 1, existingEntries[entryIndex].children);
      } else {
        const newLegendLayer = {
          bounds: undefined,
          layerId: layerPathNodes[currentLevel],
          layerPath: entryLayerPath,
          layerName: getLocalizedValue(legendResultSetsEntry.data?.layerName, mapId)!,
          layerStatus: legendResultSetsEntry.layerStatus,
          layerPhase: legendResultSetsEntry.layerPhase,
          querySent: legendResultSetsEntry.querySent,
          styleConfig: legendResultSetsEntry.data?.styleConfig,
          type: legendResultSetsEntry.data?.type,
          isVisible: layerConfiguration.initialSettings?.visible ? layerConfiguration.initialSettings.visible : 'yes',
          opacity: layerConfiguration.initialSettings?.opacity ? layerConfiguration.initialSettings.opacity : 1,
          layerAttribution: api.maps[mapId].layer.geoviewLayers[layerPathNodes[0]].attributions,
          metadataAccessPath: getLocalizedValue(api.maps[mapId].layer.geoviewLayers[layerPathNodes[0]].metadataAccessPath, mapId),
          items: [] as TypeLegendLayerListItem[],
          children: [] as TypeLegendLayer[],
          icons: LegendEventProcessor.getLayerIconImage(mapId, layerPath, legendResultSetsEntry.data!),
        } as TypeLegendLayer;

        // TODO: find the best place to calculate layers item and assign https://github.com/Canadian-Geospatial-Platform/geoview/issues/1566
        setTimeout(() => {
          newLegendLayer.bounds = api.maps[mapId].layer.geoviewLayers[layerPathNodes[0]].calculateBounds(layerPath);
        }, 1000);

        newLegendLayer.items = [];
        newLegendLayer.icons?.forEach((legendLayerItem) => {
          if (legendLayerItem.iconList)
            legendLayerItem.iconList.forEach((legendLayerListItem) => {
              newLegendLayer.items.push(legendLayerListItem);
            });
        });
        if (entryIndex === -1) existingEntries.push(newLegendLayer);
        // eslint-disable-next-line no-param-reassign
        else existingEntries[entryIndex] = newLegendLayer;
      }
    };
    createNewLegendEntries(layerPathNodes[0], 1, getGeoViewStore(mapId).getState().layerState.legendLayers);
  }
}
