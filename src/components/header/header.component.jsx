import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';//HOC 

import { ReactComponent as Logo } from '../../assets/360.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
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
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                ) : (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                    )}
            </div>
        </div>
    );
};

//to get state value - use mapStateToProps
//state - top level root reducer
//returns obj - name of prop=(actual prop to be passed to component i.e 'currentUser')
const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
//HOC - function that take component as argument and return new charged component