import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        const { login,user } = useContext(AuthContext);
        const navigate = useNavigate();

        if(user) return<Navigate to="/"/>
    
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const success = login(username, password);
            if (success) {
                alert("registration successfully ! plaese login");
                navigate("/")
            } else {
                alert("invalid credntials!")
            }
        }
        return (
            <form onSubmit={handleSubmit} className='login-form'>
                <h2>Login</h2>

                <input type="text"
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br />
                <input type="password"
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br />
                <button type='submit'>Login</button>
            </form>
        );
    }
  

export default Login;
