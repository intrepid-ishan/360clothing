import React, { useState } from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = () => {

    const [userDetails, setUserDetails] = useState({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        setUserDetails({ email: '', password: '' });
    };

    const handleChange = (e) => {
        const { value, name } = e.target;

        setUserDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={userDetails.email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    handleChange={handleChange}
                    value={userDetails.password}
                    label='password'
                    required
                />
                <CustomButton type='submit'>Sign In</CustomButton>
            </form>
        </div>
    );
};

export default SignIn;