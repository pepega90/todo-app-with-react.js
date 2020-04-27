import React, { useState } from 'react';

import styling from './Todo.css';
import id from 'shortid';

import Input from '../../components/Input/Input';
import TodoList from '../../components/TodoList/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: '',
    text: '',
    done: false,
    editing: false,
  });

  const changeHandler = e => {
    const updatedTodo = {
      id: id.generate(),
      text: e.target.value,
    };
    setTodo(updatedTodo);
  };

  const addTodo = e => {
    e.preventDefault();
    setTodos(prevState => [todo, ...prevState]);
    e.target.previousElementSibling.value = null;
  };

  const removeTodoHandler = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  const doneTodo = id => {
    const done = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      } else {
        return todo;
      }
    });
    setTodos(done);
  };

  const editTodo = (id, e) => {
    const findTodo = todos.findIndex(val => {
      return id === val.id;
    });

    const findedTodo = {
      ...todos[findTodo],
    };

    findedTodo.text = e.target.value;

    const editedTodo = [...todos];
    editedTodo[findTodo] = findedTodo;
    setTodos(prevState => editedTodo);
  };

  const goEditingMode = id => {
    const goEdit = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: false,
          editing: !todo.editing,
        };
      } else {
        return todo;
      }
    });

    setTodos(goEdit);
  };

  return (
    <div className={styling.Todo}>
      <h1>Todo app</h1>
      <Input addTodo={addTodo} changeHandler={changeHandler} />
      {todos.map(val => {
        return (
          <TodoList
            key={val.id}
            hapus={() => removeTodoHandler(val.id)}
            list={val.text}
            edit={e => editTodo(val.id, e)}
            editing={() => goEditingMode(val.id)}
            editStatus={val.editing}
            done={() => doneTodo(val.id)}
            complete={val.done}
          />
        );
      })}
    </div>
  );
};

export default Todo;
