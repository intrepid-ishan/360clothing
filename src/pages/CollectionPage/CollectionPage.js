import React from 'react';
import { connect } from 'react-redux';

import classes from './CollectionPage.scss';
import { CollectionItem } from '../../components';

const styles = {
  collectionItemStyles: {
    marginBottom: '30px'
  }
};

const CollectionPage = (props) => {
  const {
    collection: { title, items }
  } = props;
  return (
    <div className={classes.collectionPage}>
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.items}>
        {items.map((item) => (
          <CollectionItem
            key={item.id}
            item={item}
            containerStyle={styles.collectionItemStyles}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: state.shop.collections[ownProps.match.params.collectionId]
});

export default connect(mapStateToProps)(CollectionPage);
