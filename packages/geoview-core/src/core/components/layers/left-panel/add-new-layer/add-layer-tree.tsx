/**
 * This component improves Mui's TreeView component to be able to process Layers data.
 */
import React, { useEffect, useState } from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { logger } from '@/core/utils/logger';
import { EntryConfigBaseClass, GroupLayerEntryConfig } from '@/api/config/types/map-schema-types';

export interface AddLayerTreeProps {
  layersData: GroupLayerEntryConfig[];
  onSelectedItemsChange(items: string[]): void;
  startingSelectedItems: string[];
}

export function AddLayerTree(props: AddLayerTreeProps): JSX.Element | null {
  // Log
  logger.logTraceRender('components/layers/left-panel/add-layer-tree/add-layer-tree');

  const { layersData, startingSelectedItems, onSelectedItemsChange } = props;
  const [defaultExpandedItems, setDefaultExpandedItems] = useState<string[]>([]); // e.g. ["layer1", "layer2"]
  const [defaultSelectedItems, setDefaultSelectedItems] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]); // e.g. ["group1/layer1", "group2/layer2"]

  // this use effect acts like onComponentDidMount
  useEffect(() => {
    if (isInitialized) return;
    setSelectedItems(startingSelectedItems);
    setDefaultSelectedItems(startingSelectedItems);

    const result = startingSelectedItems
      .map((item: string) => {
        return item.split('/');
      })
      .flat()
      .concat(selectedItems);
    setDefaultExpandedItems(result);
    setIsInitialized(true);
  }, [startingSelectedItems]);

  useEffect(() => {
    onSelectedItemsChange(selectedItems);
  }, [selectedItems]);

  const renderTreeItem = function (layer: GroupLayerEntryConfig, parentId: string | null): JSX.Element {
    const curLayerId = `${parentId ? `${parentId}/` : ''}${layer.layerId}`;
    return (
      <TreeItem key={curLayerId} itemId={curLayerId} label={layer.layerName}>
        {layer?.listOfLayerEntryConfig?.length > 0 &&
          layer.listOfLayerEntryConfig.map((subLayer: EntryConfigBaseClass) =>
            renderTreeItem(subLayer as GroupLayerEntryConfig, curLayerId)
          )}
      </TreeItem>
    );
  };

  // Event handler for tree selection change
  const handleSelectedItemsChange = function (event: React.SyntheticEvent, items: string[] | string): void {
    const sortedItems = (items as string[]).sort();
    setSelectedItems(sortedItems);
  };

  if (!isInitialized) {
    return null;
  }

  const renderTreeItems = function () {
    return layersData[0].listOfLayerEntryConfig.map((layer) => renderTreeItem(layer as GroupLayerEntryConfig, null));
  };

  return (
    <SimpleTreeView
      sx={{ fontSize: '0.8rem', '& .MuiTreeItem-label': { fontSize: '0.8rem !important' } }}
      multiSelect
      checkboxSelection
      defaultExpandedItems={defaultExpandedItems}
      defaultSelectedItems={defaultSelectedItems}
      onSelectedItemsChange={(event: React.SyntheticEvent, itemIds: Array<string> | string) => handleSelectedItemsChange(event, itemIds)}
    >
      {renderTreeItems()}
    </SimpleTreeView>
  );
}
