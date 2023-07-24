import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = event  =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('')
        signIn(email, password)
        .then((result) => {
            form.reset();
            navigate('/');
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
       

    }

    return (
    <div className='form-container'>
            <h1 className="form-title">Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required/>
                </div>
                <input type="submit" value="Login" className='btn-submit' />
            </form>
            <p><small>new to ema-jon? <Link to='/signup'><span>Creat new account</span></Link></small></p>
            <p><small>Already have an account? <Link to='/login'><span>Login</span></Link></small></p>
            <span className='error-message'>{error}</span>
        </div>
    );
};

export default Login;