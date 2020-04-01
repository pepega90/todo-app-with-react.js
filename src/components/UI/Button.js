import React from 'react';

import styling from './Button.css';

const button = props => {
  return (
    <button onClick={props.remove} className={styling.remove}>
      {props.btn}
    </button>
  );
};

export default button;
