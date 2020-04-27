import React from 'react';

import styling from './Input.css';

const formInput = props => {
  return (
    <div>
      <form onSubmit={props.addTodo}>
        <input
          className={styling.Input}
          name="text"
          placeholder="Input Todo..."
          onChange={props.changeHandler}
        />
        <button
          onClick={props.addTodo}
          className={styling.Button}
          type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default formInput;
