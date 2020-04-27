import React from 'react';
import styling from './TodoList.css';

import Button from '../UI/Button';

const todoList = props => (
  <div className={styling.TodoList}>
    <ul
      style={{
        cursor: 'pointer',
        textDecoration: props.complete ? 'line-through' : '',
      }}>
      <li onClick={props.done}>
        {props.editStatus ? (
          <input value={props.list} onChange={props.edit} />
        ) : (
          props.list
        )}
      </li>
    </ul>

    <div className={styling.control}>
      <Button
        click={props.editing}
        btn={props.editStatus ? 'Cancel' : 'Edit'}
      />
      <Button click={props.hapus} sudah={props.complete} btn="Delete" />
    </div>
  </div>
);

export default todoList;
