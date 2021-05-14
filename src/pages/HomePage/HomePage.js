import React from 'react';

import classes from './HomePage.scss';
import { Directory } from '../../components';

const HomePage = () => (
  <div className={classes.homepage}>
    <Directory />
  </div>
);

export default HomePage;
