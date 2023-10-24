import React from "react";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {

                const data = {
                    email: email,
                    password: password
                };

                axios.post('http://127.0.0.1:4000/api/user-login', data)
                .then(response => {
                    // Check the response from the API
                    if (response.status === 200) {
                        // Login was successful, you can redirect the user
                        navigate('/home');
                    } else {
                        // Handle other responses here (e.g., show an error message)
                        setError('Incorrect email or password. Please try again.');
                    }
                })
                .catch(error => {
                    // Handle errors here
                    setError('An error occurred while trying to log in.');
                });

            console.log('Login button clicked');
        // };

        // if (email === 'sohail' && password === '1234') {
        //     navigate('/home'); // Redirect to the home page
        // }
        // else {
        //     setError('Incorrect username or password. Please try again.');
        // }
        // console.log('Login button clicked');
    };
        return (
            <>
                <form>
                    <div>
                        <h1>Login Here</h1>
                        {<p style={{ color: 'red' }}>{error}</p>}
                        <label htmlFor="email">email:</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <a href="/forgot-password">Forgot Password</a>
                    <button type="button" onClick={handleLogin}>
                        Login
                    </button>
                </form>
            </>

        )

    }