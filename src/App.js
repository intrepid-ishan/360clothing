import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App1 = () => {

    const [currentUser, setCurrentUser] = useState(null);

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
    }, []);

    //TODO: unsubscribe

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={ShopPage} />
                <Route path='/signin' component={SignInAndSignUpPage} />
            </Switch>
        </div>
    );
};

export default App1;
