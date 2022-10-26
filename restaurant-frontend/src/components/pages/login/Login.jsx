import React, { useRef } from 'react';
import { useContext } from 'react';
import { loginCall } from '../../../actionCalls';
import "./Login.css";
import { AuthCotext } from '../../../state/AuthContext';

const Login = () => {

    const email = useRef();
    const password = useRef();
    //分割代入
    const { user, isFetching, error, dispatch } = useContext(AuthCotext);

    const handleSubmit = (e) => {
        e.preventDefault();

        loginCall({
            email: email.current.value,
            password: password.current.value,
        },
            dispatch
        );
    };

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Login</h3>

                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
                        <p className="loginMessage">
                            ログインはこちら
                        </p>
                        <input type="email" className='loginInput' placeholder='Email' required ref={email} />
                        <input type="password" className='loginInput' placeholder='Password' required minLength="6" ref={password} />
                        <button className='loginButton'>Login</button>
                        <span className='loginForgot'>パスワード忘れた方</span>
                        <button className="loginRegisterButton">アカウント作成</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;