import React, {Component} from 'react';

import classes from './App.css';

import Todo from './Todo/Todo';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Todo />
      </div>
    );
  }
}

export default App;
