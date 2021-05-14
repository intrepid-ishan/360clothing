import React from 'react';
import { connect } from 'react-redux';

import classes from './CartIcon.scss';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import logo from '../../assets/shopping-bag.svg';

const CartIcon = (props) => {
  const { toggleCartDropdown, totalItemCount } = props;
  return (
    <div
      className={classes.cartIcon}
      onClick={toggleCartDropdown}
      role="button"
      tabIndex="0"
    >
      <div className={classes.shoppingIcon}>
        <img src={logo} alt="Logo" />
      </div>
      <span className={classes.itemCount}>{totalItemCount}</span>
    </div>
  );
};

const getTotalCount = (items) =>
  items.reduce((acc, item) => acc + item.quantity, 0);

const mapStateToProps = (state) => {
  console.warn('I will be called on every state update');
  return {
    totalItemCount: getTotalCount(state.cart.cartItems)
  };
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
