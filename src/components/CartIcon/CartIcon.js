import React from 'react';
import { connect } from 'react-redux';

import classes from './CartIcon.scss';

import { toggleCartDropdown } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = (state) => ({
  totalItemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
