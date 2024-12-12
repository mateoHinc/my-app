import React from 'react';
import { useAuth } from '../../Context/AuthContext';
import './Header.css'

const Header = () => {
    const { authState, logout } = useAuth();

    return (
        <header>
            <h1>React Auth Context Example</h1>
            {authState.authenticated && (
                <button onClick={logout}>Logout</button>
            )}
        </header>
    );
};

export default Header