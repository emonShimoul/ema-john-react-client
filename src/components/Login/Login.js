import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/shop';
    // console.log("came from ", location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            navigate(redirect_uri);
        })
    }
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder='Your Email' />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to Ema-John Website?? <Link to="/register">Create Account</Link></p>
                <div>----------------or---------------</div><br />
                <button 
                className='btn-regular'
                onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;