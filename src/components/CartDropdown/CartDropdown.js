import React from 'react';
import { connect } from 'react-redux';

import classes from './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = (props) => {
  const { cartItems } = props;
  return (
    <div className={classes.cartDropdown}>
      <div className={classes.cartItems}>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className={classes.emptyMessage}>Your cart is empty</span>
        )}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps, null)(CartDropdown);
