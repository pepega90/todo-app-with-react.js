import React from 'react';

import styling from './Button.css';

const button = props => {
  let stylingBtn = '';
  if (props.btn === 'Edit' || props.btn === 'Cancel') {
    stylingBtn = styling.edit;
  }

  if (props.btn === 'Delete') {
    stylingBtn = styling.remove;
  }

  return (
    <button onClick={props.click} className={stylingBtn}>
      {props.btn}
    </button>
  );
};

export default button;
