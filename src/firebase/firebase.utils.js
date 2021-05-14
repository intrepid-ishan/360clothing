import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDvjXX5zreQHyMwuU3Dbkkrzb4ggBOUsSk',
  authDomain: 'clothing-db-8ce94.firebaseapp.com',
  databaseURL: 'https://clothing-db-8ce94.firebaseio.com',
  projectId: 'clothing-db-8ce94',
  storageBucket: 'clothing-db-8ce94.appspot.com',
  messagingSenderId: '178567192526',
  appId: '1:178567192526:web:92040bb27ae370b023159f',
  measurementId: 'G-M84N2LR4M9'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return {};

  // query reference
  const userRef = firestore.doc(`users/${user.uid}`);

  // document reference
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      // document reference
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
