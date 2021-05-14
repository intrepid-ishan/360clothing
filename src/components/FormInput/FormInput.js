import React from 'react';
import classNames from 'classnames';

import classes from './FormInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelClass = classNames({
    [classes.shrink]: otherProps.value.length,
    [classes.formInputLable]: true
  });

  return (
    <div className={classes.group}>
      <input
        className={classes.formGroup}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? <label className={labelClass}>{label}</label> : null}
    </div>
  );
};

export default FormInput;
