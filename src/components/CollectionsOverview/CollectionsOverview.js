import React from 'react';
import { connect } from 'react-redux';

import classes from './CollectionsOverview.scss';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = (props) => {
  const { collections } = props;
  return (
    <div className={classes.collectionsOverview}>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.shop.collections
});

export default connect(mapStateToProps)(CollectionsOverview);
