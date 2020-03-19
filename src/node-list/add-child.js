import React from 'react';
import { IconContext } from 'react-icons';
import { MdAdd } from 'react-icons/md';

const Add = ({ selected, onChange }) => {
  return (
    <div className="add">
      <div className="icon" onClick={() => onChange(!selected)}>
        <IconContext.Provider
          value={{
            className: 'icon-add',
            attr: { focusable: 'false' },
          }}
        >
          <MdAdd></MdAdd>
        </IconContext.Provider>
      </div>
      <div className="label">input</div>
    </div>
  );
};
export default Add;
