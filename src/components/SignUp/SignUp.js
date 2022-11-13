import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleInputEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    };
    const handleInputConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };

    if (user) {
        navigate('/login');
    }

    const createUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Mismatched password :(');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or long!');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };
    return (
        <div className='login-form'>
            <form onSubmit={createUser}>
                <fieldset>
                    <legend><h2 className='form-title'>Sign up form</h2></legend>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleInputEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handleInputPassword} type="password" name="password" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleInputConfirmPassword} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>
                    <input type="submit" value="Sign up" className='register-btn' />
                </fieldset>
            </form>
            <p>Already went to ema-john <Link to={'/login'} className='create-account'>Log in here</Link></p>
            <fieldset><legend>or</legend></fieldset>
        </div>
    );
};

export default SignUp;