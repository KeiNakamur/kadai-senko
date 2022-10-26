import React from 'react';
import "./Register.css";

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Register</h3>

                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <p className="loginMessage">
                            新規登録はこちら
                        </p>
                        <input type="text" className='loginInput' placeholder='Username' required />
                        <input type="email" className='loginInput' placeholder='Email' required />
                        <input type="password" className='loginInput' placeholder='Password' required />
                        <input type="password" className='loginInput' placeholder='Confirm Password' required />
                        <button className='loginButton'>Sign Up</button>
                        <button className="loginRegisterButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;