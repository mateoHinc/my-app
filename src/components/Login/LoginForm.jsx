import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

import './LoginForm.css'

const LoginForm = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validateCredentials = (email, password) => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (!storedUser) {
        return false;
      }
      return storedUser.email === email && storedUser.password === password;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validateCredentials(email, password)){
        const mockUser = {
            name: 'Matt hINC',
            email,
        };
        login(mockUser);
        navigate('/dashboard');
      } else {
        setError('Invalid email or password')
      }
    };

    return (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      );
};

export default LoginForm;