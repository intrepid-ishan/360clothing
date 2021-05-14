import React from 'react';
import { connect } from 'react-redux';

import classes from './CartIcon.scss';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';

import logo from '../../assets/shopping-bag.svg';

const CartIcon = (props) => {
  const { toggleCartDropdown } = props;
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
      <span className={classes.itemCount}>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
