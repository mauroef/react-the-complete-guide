import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('RENDER button');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// export default Button;
export default React.memo(Button);
