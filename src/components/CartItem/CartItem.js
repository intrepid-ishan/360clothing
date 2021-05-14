import React from 'react';

import classes from './CartItem.scss';

const CartItem = (props) => {
  const {
    item: { imageUrl, price, name, quantity }
  } = props;
  return (
    <div className={classes.cartItem}>
      <img src={imageUrl} alt="item" />
      <div className={classes.itemDetails}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
