import React, {Component} from 'react';

import styling from './Todo.css';
import id from 'shortid';

import Input from '../../components/Input/Input';
import TodoList from '../../components/TodoList/TodoList';

class Todo extends Component {
  state = {
    todos: [],
    todo: {
      id: '',
      text: '',
      done: false,
      editing: false
    }
  };

  changeHandler = e => {
    const updateTextTodo = {
      id: id.generate(),
      text: e.target.value
    };

    this.setState({
      todo: updateTextTodo
    });
  };

  addTodo = e => {
    e.preventDefault();
    const todo = {
      ...this.state.todo
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos]
    }));

    e.target.previousElementSibling.value = null;
  };

  editTodo = (id, e) => {
    const findTodo = this.state.todos.findIndex(val => {
      return id === val.id;
    });

    const findedTodo = {
      ...this.state.todos[findTodo]
    };

    findedTodo.text = e.target.value;

    const todos = [...this.state.todos];
    todos[findTodo] = findedTodo;

    this.setState(prevState => ({
      todos: todos
    }));
  };

  removeTodoHandler = id => {
    const findTodo = this.state.todos.findIndex(val => {
      return id === val.id;
    });

    const updateTodos = this.state.todos;

    updateTodos.splice(findTodo, 1);

    this.setState({
      todos: updateTodos
    });
  };

  goEditingMode = id => {
    const editedTodo = this.state.todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          done: false,
          editing: !todo.editing
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: editedTodo
    });
  };

  doneTodo = id => {
    const doneTodo = this.state.todos.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          done: !todo.done
        };
      } else {
        return todo;
      }
    });

    this.setState({
      todos: doneTodo
    });
  };

  render() {
    let todo = this.state.todos.map(val => (
      <TodoList
        key={val.id}
        hapus={() => this.removeTodoHandler(val.id)}
        list={val.text}
        edit={e => this.editTodo(val.id, e)}
        editing={() => this.goEditingMode(val.id)}
        editStatus={val.editing}
        done={() => this.doneTodo(val.id)}
        complete={val.done}
      />
    ));

    return (
      <div className={styling.Todo}>
        <h1>Todo app</h1>
        <Input addTodo={this.addTodo} changeHandler={this.changeHandler} />
        {todo}
      </div>
    );
  }
}

export default Todo;
