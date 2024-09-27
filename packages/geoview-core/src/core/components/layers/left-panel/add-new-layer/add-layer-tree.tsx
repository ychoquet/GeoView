/**
 * This component improves Mui's TreeView component to be able to process Layers data.
 */
import React, { useEffect, useState } from 'react';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import _ from 'lodash';
import { logger } from '@/core/utils/logger';
import { EntryConfigBaseClass, GroupLayerEntryConfig } from '@/api/config/types/map-schema-types';
import { getLayerById } from './add-new-layers-utils';

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
    // Log
    logger.logTraceUseEffect('Add Layer Tree - startingSelectedItems', startingSelectedItems);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startingSelectedItems]);

  useEffect(() => {
    // Log
    logger.logTraceUseEffect('Add Layer Tree - selectedItems ', selectedItems);
    onSelectedItemsChange(selectedItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItems]);

  /**
   * Recursive function to render tree item. It renders the layer and its children.
   * @param layer - the layer to render
   * @param parentId - the parent id of the layer
   */
  const renderTreeItem = (layer: GroupLayerEntryConfig, parentId: string | null): JSX.Element => {
    const curLayerId = `${parentId ? `${parentId}/` : ''}${layer.layerId}`;
    return (
      <TreeItem key={curLayerId} itemId={curLayerId} label={layer.layerName} aria-label={layer.layerName}>
        {layer?.listOfLayerEntryConfig?.length > 0 &&
          layer.listOfLayerEntryConfig.map((subLayer: EntryConfigBaseClass) =>
            renderTreeItem(subLayer as GroupLayerEntryConfig, curLayerId)
          )}
      </TreeItem>
    );
  };

  /**
   * Get all children of a layer
   * @param treeLayerId - the id of the layer
   * @returns - the list of children of the layer
   */
  const getLayerChildren = (treeLayerId: string): string[] => {
    const result: string[] = [];

    function populateLayerChildren(origLayerId: string, parentViewId: string | null): void {
      const viewLayerId = `${parentViewId ? `${parentViewId}/` : ''}${origLayerId}`;
      result.push(viewLayerId);
      const layerDetails = getLayerById(layersData, origLayerId);

      const childLayerIds = layerDetails?.listOfLayerEntryConfig?.map((child: EntryConfigBaseClass) => {
        return child.layerId;
      });

      childLayerIds?.forEach((childLayerId) => {
        populateLayerChildren(childLayerId, viewLayerId);
      });
    }

    const layerTokens = treeLayerId.split('/');
    const origLayerId = layerTokens.pop() as string;
    let parentLayerId = null;
    if (layerTokens.length > 0) {
      parentLayerId = layerTokens.join('/');
    }
    populateLayerChildren(origLayerId, parentLayerId);

    return _.uniq(result).sort();
  };

  const handleItemSelectionToggle = (event: React.SyntheticEvent, itemId: string, isSelected: boolean): void => {
    const layerChildren = getLayerChildren(itemId);
    const toAddOrRemove = [itemId, ...layerChildren];

    if (isSelected) {
      setSelectedItems(_.uniq([...selectedItems, ...toAddOrRemove]).sort());
    } else {
      setSelectedItems(selectedItems.filter((item) => !toAddOrRemove.includes(item)));
    }
  };

  if (!isInitialized) {
    return null;
  }

  const renderTreeItems = (): JSX.Element[] => {
    return layersData.map((layer) => renderTreeItem(layer as GroupLayerEntryConfig, null));
  };

  return (
    <SimpleTreeView
      sx={{ fontSize: '0.8rem', '& .MuiTreeItem-label': { fontSize: '0.8rem !important' } }}
      multiSelect
      checkboxSelection
      defaultExpandedItems={defaultExpandedItems}
      defaultSelectedItems={defaultSelectedItems}
      selectedItems={selectedItems}
      onItemSelectionToggle={(event: React.SyntheticEvent, itemId: string, isSelected: boolean) =>
        handleItemSelectionToggle(event, itemId, isSelected)
      }
    >
      {renderTreeItems()}
    </SimpleTreeView>
  );
}