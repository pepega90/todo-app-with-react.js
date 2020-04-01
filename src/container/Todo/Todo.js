import React, {Component} from 'react';

import styling from './Todo.css';

import Input from '../../components/Input/Input';
import TodoList from '../../components/TodoList/TodoList';

class Todo extends Component {
  state = {
    todos: []
  };

  addTodo = todo => {
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos]
    }));
  };

  removeTodoHandler = id => {
    const findTodo = [...this.state.todos];

    findTodo.splice(id, 1);
    this.setState({todos: findTodo});
  };

  doneTodo = id => {
    const done = this.state.todos.map(todo => {
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
      todos: done
    });
  };

  render() {
    let list = null;

    list = this.state.todos.map(item => {
      return (
        <TodoList
          key={item.id}
          removeTodo={() => this.removeTodoHandler(item.id)}
          list={item.text}
          done={() => this.doneTodo(item.id)}
          complete={item.done}
        />
      );
    });

    return (
      <div className={styling.Todo}>
        <h1>Todo app</h1>
        <Input onSubmit={this.addTodo} />
        {list}
      </div>
    );
  }
}

export default Todo;
