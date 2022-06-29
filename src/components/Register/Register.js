import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (e) => {
        // prevent the loading the entire page when click the submit button
        e.preventDefault();
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Create Account</h2>
                <form onSubmit={handleRegister}>
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" placeholder='Your Password' />
                    <br />
                    <input type="password" name="" id="" placeholder='Re-enter Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account?? <Link to="/login">Login</Link></p>
                <div>----------------or---------------</div><br />
                <button className='btn-regular'>Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;