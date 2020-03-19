import React from 'react';
import Checkbox from './Node';
import AddNode from './add-node.js';

// Recursive component

const NodesList = ({
  nodes,
  parentId,
  selectedNodes,
  onChange,
  onRemove,
  onAddNode,
  onEditingNode,
  isFirst,
  debug
}) => {
  const handleCheckboxClicked = selectedOptionId => {
    if (selectedNodes[selectedOptionId]) {
      delete selectedNodes[selectedOptionId];
    } else {
      selectedNodes[selectedOptionId] = {};
    }

    onChange(selectedNodes);
  };

  const handleSubNodesListChange = (optionId, subSelections) => {
    selectedNodes[optionId] = subSelections;
    onChange(selectedNodes);
  };

  const hasChilds = node => {
    if (selectedNodes[node.id]) {
      console.log({ nodeId: node.id });

      return (
        <NodesList
          nodes={node.childs}
          parentId={`${node.id}`}
          selectedNodes={selectedNodes[node.id]}
          onChange={subSelections =>
            handleSubNodesListChange(node.id, subSelections)
          }
          onAddNode={onAddNode}
          onRemove={onRemove}
          debug={debug}
        />
      );
    }
  };

  return (
    <div>
      {nodes.map(node => (
        <ul key={node.id} className={isFirst && 'firstUL'}>
          <Checkbox
            selected={selectedNodes[node.id]}
            label={node.name}
            nodeId={node.id}
            onChange={() => {
              handleCheckboxClicked(node.id);
            }}
            onEditingNode={onEditingNode}
            onRemove={onRemove}
          />
          {hasChilds(node)}
        </ul>
      ))}
      <ul className={isFirst && 'firstUL'}>
        <AddNode parentId={parentId} onAddNode={onAddNode}></AddNode>
      </ul>
    </div>
  );
};
export default NodesList;
