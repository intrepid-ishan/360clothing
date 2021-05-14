import React from 'react';
import { connect } from 'react-redux';

import classes from './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

const CartDropdown = (props) => {
  const { cartItems } = props;
  return (
    <div className={classes.cartDropdown}>
      <div className={classes.cartItems}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems });

export default connect(mapStateToProps, null)(CartDropdown);
