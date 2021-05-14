import React, { useState } from 'react';

import classes from './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [userDetails, setUserDetails] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userDetails;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserDetails({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUserDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className={classes.signIn}>
      <h2>I already have an account</h2>
      <span>Sign In with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={userDetails.email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={userDetails.password}
          label="Password"
          required
        />
        <div className={classes.buttons}>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
