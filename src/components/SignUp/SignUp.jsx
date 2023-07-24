import React, { useContext, useState } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setError('')
        console.log(email,password, confirm)
        if (password !== confirm) {
            setError("Your password didn't match")
            return;
        }
        else if(password.length < 6){
            setError("Your password must be 6 or longer.")
            return;
        }
        createUser(email,password)
        .then((userCredential) => {
            const loggedUser = userCredential.user;
            console.log(loggedUser);
            form.reset();
          })
          .catch((error) => {
            console.log(error);
            const errorMessage = error.message;
            setError(errorMessage);
          });
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
                    <input type="password" name="confirm" id="" required/>
                </div>
                <input type="submit" value="Sign Up" className='btn-submit' />
            </form>
                <p><small>Already have an account? <Link to='/login'><span>Login</span></Link></small></p>
                <span className='error-message'>{error}</span>
        </div>
    );
};

export default SignUp;