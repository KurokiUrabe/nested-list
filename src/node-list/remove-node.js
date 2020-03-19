import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
export default ({ nodeId, onRemoveNode }) => {
  const changeHandler = () => {
    console.log('Removing', nodeId);
    onRemoveNode(nodeId);
  };
  return (
    <div className="remove" onClick={() => changeHandler(nodeId)}>
      <IconContext.Provider
        value={{
          className: 'icon',

          attr: { focusable: 'false' }
        }}
      >
        <FaRegTrashAlt></FaRegTrashAlt>
      </IconContext.Provider>
    </div>
  );
};
