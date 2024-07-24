import React, { useState } from 'react';
import '../Styles/Login.css';

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Error, setError] = useState('');
    const [LoginError, setLoginError] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    //Email Validation

    function VerifyEmail(_email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(_email);
    }

    //Submit Handler

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!VerifyEmail(email)) {
            setError('1');
            return;
        }
        else if (password === '') {
            setError('2');
            return;
        }
        else {
            setError('');
        }

        // Add your login logic here
        const user = { email, password }; // User object
        setIsDisabled(true);
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => {
                console.log(response.status);
                // Handle the response data
                if (response.status === 200) {
                    setLoginError(false);
                    setIsDisabled(false);
                    localStorage.setItem('token', email);
                    setIsAuthenticated(true);
                } else if (response.status === 404 || response.status === 401) {
                    setLoginError(true);
                    setIsDisabled(false);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('name', data.userName);
                localStorage.setItem('email', data.userEmail);
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    };

    return (
        <div className='main-page-bg'>
            <div className="login-container">
                <form onSubmit={handleSubmit}>
                    <div className='common-div'>
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError('');
                                setLoginError(false);
                            }}
                        />
                        {Error === '1' && (
                            <p className="error-message">Please enter a valid email address</p>
                        )}
                    </div>
                    <div className='password-input-container common-1'>
                        <div className='common-div'>
                            <label htmlFor='password'>Password</label>
                            <br />
                            <input
                                type='password'
                                className='password-input'
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError('');
                                    setLoginError(false);
                                }}
                            />
                        </div>
                        {Error === '2' && (
                            <p className="error-message">Password cannot be empty</p>
                        )}
                    </div>
                    <div className='login-btn-div'>
                        <button className='login-btn' disabled={isDisabled} type="submit" > Login</button>
                        {LoginError && (
                            <p className="login-error">Invalid Email or Password</p>
                        )}

                    </div>
                </form>
            </div >
        </div>
    );
}

export default Login;