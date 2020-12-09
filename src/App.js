import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';

const App = ({ setCurrentUser, currentUser }) => {

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            // console.log("🚀 ~ file: App.js ~ line 18 ~ useEffect ~ user", user); //null - signout
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            } else {
                setCurrentUser(user);
            }
        });
    }, [setCurrentUser]);

    //TODO: unsubscribe

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                {/* render - javascript invocation to return component */}
                <Route
                    exact
                    path='/signin'
                    render={() =>
                        currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
