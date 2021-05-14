import React from 'react';

import classes from './AuthenticationPage.scss';
import { SignIn, SignUp } from '../../components';

const AuthenticationPage = () => (
  <div className={classes.authentication}>
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenticationPage;
