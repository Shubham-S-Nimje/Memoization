import React from 'react';

import classes from './Button.module.css';

const Buttonsort = (props) => {
  console.log('BUTTON SORT')
  

  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Buttonsort);
