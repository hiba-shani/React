import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const success = register(username, password);
        if (success) {
            alert("registration successfully ! plaese login");
            navigate("/login")
        } else {
            alert("user already exists!")
        }
    }
    return (
        <form onSubmit={handleSubmit} className='login-form'>
            <h2>Register</h2>
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
            <button type='submit'>Register</button>
        </form>
    )
}

export default Register
