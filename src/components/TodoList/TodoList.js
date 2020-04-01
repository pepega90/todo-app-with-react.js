import React from 'react';

import styling from './TodoList.css';

import Button from '../UI/Button';

const todoList = props => (
  <div className={styling.TodoList}>
    <ul
      onClick={props.done}
      style={{
        textDecoration: props.complete ? 'line-through' : 'none',
        cursor: 'pointer'
      }}
    >
      <li>{props.list}</li>
    </ul>
    <Button remove={props.removeTodo} btn="Delete" />
  </div>
);

export default todoList;
