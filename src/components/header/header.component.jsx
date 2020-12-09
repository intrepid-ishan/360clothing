import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';//HOC 

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/360.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

//{ currentUser, hidden }
const Header = (props) => {
    // console.log("🚀 ~ file: header.component.jsx ~ line 11 ~ Header ~ currentUser", currentUser);
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {props.currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )}
                <CartIcon />
            </div>
            {props.hidden ? null : <CartDropdown />}
        </div>
    );
};

//({user: { currentUser },cart: { hidden }})
const mapStateToProps = (state) => ({
    //currentUser,hidden
    //currentUser: currentUser, hidden: hidden
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden
});

export default connect(mapStateToProps)(Header);