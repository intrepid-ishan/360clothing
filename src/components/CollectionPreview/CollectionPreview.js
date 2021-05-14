import React from 'react';

import classes from './CollectionPreview.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = (props) => {
  const { title, items } = props;
  return (
    <div className={classes.collectionPreview}>
      <h1 className={classes.title}>{title.toUpperCase()}</h1>
      <div className={classes.preview}>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
