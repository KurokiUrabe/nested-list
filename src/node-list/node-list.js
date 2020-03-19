import React from 'react';
import Node from './Node';

// Recursive component

const NodeList = ({ tree, selectedNodes, onChange, isFirst }) => {
  const keys = Object.keys(tree);
  console.log({ tree, selectedNodes });
  const handleCheckboxClicked = selectedNodesId => {
    // is currently selected
    if (selectedNodes[selectedNodesId]) {
      // remove selected key from options list
      delete selectedNodes[selectedNodesId];
    } else {
      // is not currently selected
      // Add selected key to optionsList
      selectedNodes[selectedNodesId] = {};
    }
    // call onChange function given by parent
    console.log({
      selectedNodes,
      coo: Object.keys(tree['root-id'].childs),
    });

    onChange(selectedNodes);
  };
  const handleChildsListChange = (optionId, childs) => {
    // add sub selections to current optionId
    selectedNodes[optionId] = childs;
    // call onChange function given by parent
    console.log({ selectedNodes, childs });

    onChange(selectedNodes);
  };

  const checkIfNode = () => {
    if (keys.length === 0) {
      return <div>Root</div>;
    } else {
      return keys.map(nodeId => {
        console.log({
          selectedNodes,
          tree,
          nodeId,
          ss: tree[nodeId],
        });

        return (
          <ul key={nodeId} className={isFirst && 'firstUL'}>
            <Node
              selected={tree[nodeId]}
              label={tree[nodeId].name}
              onChange={() => handleCheckboxClicked(nodeId)}
            />

            {/* Base Case */}
            {Object.keys(tree[nodeId].childs).length > 0 &&
              selectedNodes[nodeId] && (
                <div>
                  <NodeList
                    tree={tree[nodeId].childs}
                    selected={selectedNodes[nodeId]}
                    onChange={childs =>
                      handleChildsListChange(nodeId, childs)
                    }
                  />
                </div>
              )}
          </ul>
        );
      });
    }
  };

  return <div>{checkIfNode()}</div>;
};

export default NodeList;
