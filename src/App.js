import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

const App = (props) => {

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            // console.log("🚀 ~ file: App.js ~ line 18 ~ useEffect ~ user", user); //null - signout
            if (user) {
                const userRef = await createUserProfileDocument(user);

                userRef.onSnapshot(snapShot => {
                    props.setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } else {
                props.setCurrentUser(user);
            }
        });
    }, [props]);

    //TODO: unsubscribe

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>
        </div>
    );
};

//function - it gets dispatch property
//returns obj - prop name = ()
const mapDispatchToProps = dispatch => ({
    //dispatching the object indirectly 
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
