import React from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';

const SignUp = () => {
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password, confirm)
    }


    return (
        <div className='form-container'>
            <h1 className="form-title">Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm password</label>
                    <input type="confirm" name="confirm" id="" required/>
                </div>
                <input type="submit" value="Sign Up" className='btn-submit' />
            </form>
                <p><small>Already have an account? <Link to='/login'><span>Login</span></Link></small></p>
        </div>
    );
};

export default SignUp;