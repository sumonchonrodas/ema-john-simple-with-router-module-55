import React from 'react';
import {Link} from 'react-router-dom';
import './Login.css'
import Spinner from '../Spinner/Spinner';

const Login = () => {
    return (
    <div className='form-container'>
            <h1 className="form-title">Login</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <input type="submit" value="Login" className='btn-submit' />
            </form>
            <p><small>new to ema-jon? <Link to='/signup'><span>Creat new account</span></Link></small></p>
            
        </div>
    );
};

export default Login;