import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        return user ? { user, authenticated: true } : { user: null, authenticated: false};
    });

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setAuthState({
            user: userData,
            authenticated: true,
        });
    };

    const logout = () => {
        localStorage.removeItem('user');
        setAuthState({
            user: null,
            authenticated: false,
        });
    };

    const signUp = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setAuthState({
            user: userData,
            authenticated: true,
        });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout, signUp }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};