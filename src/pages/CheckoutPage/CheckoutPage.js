import React from 'react';
import { connect } from 'react-redux';

import classes from './CheckoutPage.scss';
import { CheckoutItem } from '../../components';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

const CheckoutPage = (props) => {
  const { cartItems, totalPrice, clearItem, addItem, removeItem } = props;
  return (
    <div className={classes.checkoutPage}>
      <div className={classes.checkoutHeader}>
        <div className={classes.headerBlock}>
          <span>Product</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Description</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Quantity</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Price</span>
        </div>
        <div className={classes.headerBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          cartItem={cartItem}
          clearItem={() => clearItem(cartItem)}
          addItem={() => addItem(cartItem)}
          removeItem={() => removeItem(cartItem)}
        />
      ))}
      <div className={classes.total}>TOTAL: ${totalPrice}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalPrice: selectCartTotal(state)
});

const mapDispatchToProps = {
  clearItem,
  addItem,
  removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
