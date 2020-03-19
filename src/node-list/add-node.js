import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdAdd } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';

const Add = ({ parentId, onAddNode }) => {
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState('');
  const changeAddNodeHandler = () => {
    console.log('Removing', parentId);
    onAddNode(parentId, text);
    setText('');
  };

  const showInput = () => {
    if (adding) {
      return (
        <input
          value={text}
          onChange={event => setText(event.target.value)}
        ></input>
      );
    }
  };
  const changeIcons = () => {
    if (adding) {
      return (
        <IconContext.Provider
          value={{
            className: 'add-check',
            attr: { focusable: 'false' }
          }}
        >
          <FaCheck></FaCheck>
        </IconContext.Provider>
      );
    }
    return (
      <IconContext.Provider
        value={{
          className: 'add',
          attr: { focusable: 'false' }
        }}
      >
        <MdAdd></MdAdd>
      </IconContext.Provider>
    );
  };
  return (
    <div className="add-node">
      {showInput()}
      <div
        className="icon"
        onClick={() => {
          setAdding(!adding);
          if (adding && text.length > 0) {
            changeAddNodeHandler();
          }
        }}
      >
        {changeIcons()}
      </div>
    </div>
  );
};
export default Add;
