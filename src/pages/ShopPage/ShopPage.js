import React, { useState } from 'react';
import SHOP_DATA from './ShopPage.data';

import { CollectionPreview } from '../../components';

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
