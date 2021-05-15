import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components';

const ShopPage = (props) => {
  const { match } = props;
  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
    </div>
  );
};

export default ShopPage;
