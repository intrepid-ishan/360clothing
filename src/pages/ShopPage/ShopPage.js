import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = (props) => {
  const { match } = props;
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
