import React, { useState } from 'react';
import {} from 'react-icons/fa';

import { FaEdit, FaCheck } from 'react-icons/fa';
import { IconContext } from 'react-icons';

export default ({ nodeId, onEditingNode, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('');
  const changeEditingNodeHandler = () => {
    onEditingNode(nodeId, text);
    setText('');
  };
  const showInput = () => {
    if (editing) {
      return (
        <input
          value={text}
          onChange={event => setText(event.target.value)}
        ></input>
      );
    }
  };
  const changeIcons = () => {
    if (editing) {
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
        <FaEdit></FaEdit>
      </IconContext.Provider>
    );
  };
  return (
    <div className="edit">
      {showInput()}
      <div
        className="icon"
        onClick={() => {
          setEditing(!editing);
          onChange(editing);
          if (editing && text.length > 0) {
            changeEditingNodeHandler();
          }
        }}
      >
        {changeIcons()}
      </div>
    </div>
  );
};
