import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({
        name: null,
        email: null,
        authenticated: false,
    });
    // const [user, setUser] = useState({});

    // const login = (userData) => {
    //     localStorage.setItem('user', JSON.stringify(userData));
    //     setAuthState({
    //         user: userData,
    //         authenticated: true,
    //     });
    // };

    // const logout = () => {
    //     localStorage.removeItem('user');
    //     setAuthState({
    //         user: null,
    //         authenticated: false,
    //     });
    // };

    // const signUp = (userData) => {
    //     localStorage.setItem('user', JSON.stringify(userData));
    //     setAuthState({
    //         user: userData,
    //         authenticated: true,
    //     });
    // };

    const changeAuthState = (newState) => {
        setAuthState(newState);
    }

    // const changeUserInfo = (userData) => {
    //     setUser(userData);
    // }

    return (
        <AuthContext.Provider value={{ authState, changeAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};