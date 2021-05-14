import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import classes from './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';

const CartDropdown = (props) => {
  const { cartItems, history, toggleCartDropdown } = props;

  const navigateToCheckout = () => {
    history.push('/checkout');
    toggleCartDropdown();
  };

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
      <CustomButton onClick={navigateToCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

const mapActionCreators = {
  toggleCartDropdown
};

export default withRouter(
  connect(mapStateToProps, mapActionCreators)(CartDropdown)
);
