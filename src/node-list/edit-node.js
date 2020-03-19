import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default ({ node, onEditNode }) => {
  return (
    <div className="edit">
      <IconContext.Provider
        value={{
          className: 'icon',

          attr: { focusable: 'false' },
        }}
      >
        <FaEdit></FaEdit>
      </IconContext.Provider>
    </div>
  );
};
