import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaSquare, FaCheck, FaEdit } from 'react-icons/fa';
import RemoveNode from './remove-node.js';
import EditNode from './edit-node.js';

// Dumb checkbox component, completly controlled by parent
const Node = ({ selected, label, onChange }) => {
  console.log({ selected, label, onChange });
  const [editing, setStateEditing] = useState(false);
  let state = false;
  const renderIcon = () => {
    if (selected) {
      return (
        <div>
          <IconContext.Provider
            value={{
              className: 'box-checked',

              attr: { focusable: 'false' },
            }}
          >
            <FaSquare></FaSquare>
          </IconContext.Provider>
          <IconContext.Provider
            value={{
              className: 'check',
              attr: { focusable: 'false' },
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

            attr: { focusable: 'false' },
          }}
        >
          <FaSquare></FaSquare>
        </IconContext.Provider>
      );
    }
  };
  const notRoot = () => {
    if (label !== 'root') {
      return <RemoveNode></RemoveNode>;
    }
  };
  const editable = () => {
    console.log('clickk');

    if (editing) {
      return <input value={label}></input>;
    }
    return label;
  };
  return (
    <div className="node">
      <div className="icon" onClick={() => onChange(!selected)}>
        {renderIcon()}
      </div>
      <div className="label">{editable()}</div>
      {notRoot()}

      <EditNode
        onClick={() => {
          console.log({ state });

          setStateEditing(!editing);
        }}
      ></EditNode>
    </div>
  );
};
export default Node;
