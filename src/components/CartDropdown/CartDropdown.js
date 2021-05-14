import React from 'react';

import classes from './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = () => (
  <div className={classes.cartDropdown}>
    <div className={classes.cartItems} />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDropdown;
