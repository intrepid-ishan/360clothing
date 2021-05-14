import React from 'react';

import classes from './CheckoutItem.scss';

const CheckoutItem = (props) => {
  const {
    cartItem: { name, imageUrl, price, quantity },
    clearItem,
    addItem,
    removeItem
  } = props;

  return (
    <div className={classes.checkoutItem}>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt="item" />
      </div>
      <span className={classes.name}>{name}</span>
      <span className={classes.quantity}>
        <div
          className={classes.arrow}
          onClick={removeItem}
          role="button"
          tabIndex="0"
        >
          &#10094;
        </div>
        <span className={classes.value}>{quantity}</span>
        <div
          className={classes.arrow}
          onClick={addItem}
          role="button"
          tabIndex="0"
        >
          &#10095;
        </div>
      </span>
      <span className={classes.price}>{price}</span>
      <div
        className={classes.removeButton}
        onClick={clearItem}
        role="button"
        tabIndex="0"
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
