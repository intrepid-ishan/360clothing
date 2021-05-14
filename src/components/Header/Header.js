import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Header.scss';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { auth } from '../../firebase/firebase.utils';
import logo from '../../assets/360.svg';

const Header = (props) => {
  const { currentUser, hidden } = props;
  return (
    <div className={classes.header}>
      <Link className={classes.logoContainer} to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <div className={classes.options}>
        <Link className={classes.option} to="/shop">
          SHOP
        </Link>
        <Link className={classes.option} to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className={classes.option}
            onClick={() => auth.signOut()}
            role="button"
            tabIndex="0"
          >
            SIGN OUT
          </div>
        ) : (
          <Link className={classes.option} to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);
