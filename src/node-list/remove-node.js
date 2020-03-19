import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
export default ({ tree, nodeId, onRemoveNode }) => {
  return (
    <div
      className="remove"
      onClick={() => onRemoveNode(tree, nodeId)}
    >
      <IconContext.Provider
        value={{
          className: 'icon',

          attr: { focusable: 'false' },
        }}
      >
        <FaRegTrashAlt></FaRegTrashAlt>
      </IconContext.Provider>
    </div>
  );
};
