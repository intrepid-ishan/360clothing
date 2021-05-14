import React from 'react';
import classNames from 'classnames';

import classes from './CustomButton.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  buttonStyle,
  ...otherProps
}) => {
  const buttonClass = classNames({
    [classes.inverted]: inverted,
    [classes.isGoogleSignIn]: isGoogleSignIn,
    [classes.customButton]: true
  });

  return (
    <button
      type="button"
      className={buttonClass}
      {...otherProps}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default CustomButton;
