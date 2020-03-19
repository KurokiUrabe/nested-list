import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaSquare, FaCheck } from 'react-icons/fa';
import RemoveNode from './remove-node.js';
import EditNode from './edit-node.js';

// Dumb checkbox component, completly controlled by parent
const Node = ({
  selected,
  nodeId,
  label,
  onChange,
  onEditingNode,
  onRemove
}) => {
  const [hideLabel, setLabelHide] = useState(false);

  const changeEditingHandle = editing => {
    console.log('click', { editing });

    setLabelHide(!editing);
  };

  const editing = true;
  const renderIcon = () => {
    if (selected) {
      return (
        <div>
          <IconContext.Provider
            value={{
              className: 'box-checked',

              attr: { focusable: 'false' }
            }}
          >
            <FaSquare></FaSquare>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              className: 'check',
              attr: { focusable: 'false' }
            }}
          >
            <FaCheck></FaCheck>
          </IconContext.Provider>
        </div>
      );
    } else {
      return (
        <IconContext.Provider
          value={{
            className: 'box',

            attr: { focusable: 'false' }
          }}
        >
          <FaSquare></FaSquare>
        </IconContext.Provider>
      );
    }
  };
  const notRoot = () => {
    if (label !== 'root') {
      return <RemoveNode nodeId={nodeId} onRemoveNode={onRemove}></RemoveNode>;
    }
  };
  const onhideLabel = hide => {
    if (!hide) {
      return <div className="label">{label}</div>;
    }
  };

  return (
    <div className="node">
      <div
        className="icon"
        onClick={() => {
          console.log(selected);
          return onChange(!selected);
        }}
      >
        {renderIcon()}
      </div>
      {onhideLabel(hideLabel)}
      <EditNode
        nodeId={nodeId}
        onEditingNode={onEditingNode}
        onChange={changeEditingHandle}
      ></EditNode>

      {notRoot()}
    </div>
  );
};
export default Node;
