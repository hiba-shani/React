import React from 'react'
import './loginPage.css';

const LoginPage = () => {
    return (
        <div className='login-container'>
            <div className='login-box'>
                <h2>Welcome back</h2>
                <p>Please enter your details</p>

                <div className='login-form'>

                    <label>Email address</label>

                    <input type="email" />

                    <label>Password</label>

                    <input type="password" />
                    <div className='options'>
                        <label>
                            <input type="checkbox" />Remember for 30 days
                        </label>
                        <a href="#" className='forgot'>Forgot Password?</a>
                    </div>

                    <button className='btn'>Sign in</button>

                    <button className='btn google'>Sign in with google</button>
                    <p className='signup'>Don't have an account?<a href="#">Sign up</a></p>

                </div>

            </div>

        </div>


        
    )
}

export default LoginPage
