import React, {Component} from 'react';
import shortid from 'shortid';

import styling from './Input.css';

class FormInput extends Component {
  state = {
    text: ''
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      text: e.target.value
    });
  };

  formSubmit = event => {
    event.preventDefault();

    const todo = {
      id: shortid.generate(),
      text: this.state.text,
      done: false
    };

    this.props.onSubmit(todo);
    event.target.previousElementSibling.value = null;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
          <input
            className={styling.Input}
            name="text"
            onChange={this.changeHandler}
            placeholder="Input Todo..."
          />
          <button
            className={styling.Button}
            onClick={this.formSubmit}
            type="submit"
          >
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default FormInput;
