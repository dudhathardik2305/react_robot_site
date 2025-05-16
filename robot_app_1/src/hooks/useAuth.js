import { useState, useEffect, createContext, useContext, useCallback } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
        setLoading(false);
    }, []);

    const login = useCallback(async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            const { user: userData, token: userToken, message } = response.data;
            setUser(userData);
            setToken(userToken);
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', userToken);
            return { success: true, message };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Login failed' };
        }
    }, []);

    const register = useCallback(async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/register', { email, password });
            const { user: userData, token: userToken, message } = response.data;
            setUser(userData);
            setToken(userToken);
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('token', userToken);
            return { success: true, message };
        } catch (error) {
              console.log(error)
            return { success: false, message: error.response?.data?.message || 'Registration failed' };
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }, []);

    const authContextValue = {
        user,
        token,
        login,
        register,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuth };