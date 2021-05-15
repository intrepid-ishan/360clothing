import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';

import { addItem } from '../../redux/cart/cart.actions';

const commonStyle = {
  width: '80%',
  position: 'absolute',
  top: '255px'
};

const styles = {
  buttonStyle: {
    ...commonStyle,
    opacity: '0.70',
    display: 'none'
  },
  buttonHoverStyle: {
    ...commonStyle,
    opacity: '0.85',
    display: 'flex'
  }
};

const CollectionItem = (props) => {
  const { item, addItem, containerStyle } = props;
  const { name, price, imageUrl } = item;

  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={classes.collectionItem}
      style={containerStyle}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <div
        className={classes.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={classes.collectionFooter}>
        <span className={classes.name}>{name}</span>
        <span className={classes.price}>{price}</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        inverted
        buttonStyle={isHover ? styles.buttonHoverStyle : styles.buttonStyle}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
