/* eslint-disable react-refresh/only-export-components */
import { Children, createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // load from local storage
    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // register

    const register = (username, password) => {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const exists = users.find((u) => u.username === username);
        if (exists) return false;

        users.push({ username, password });
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    };

    // login user

    const login = (username, password) => {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (u) => u.username === username && u.password === password
        );
        if (user) {
            setUser(user);
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            return true;
        }
        return false;
    };

    // logout
    const logout = () => {
        setUser(null);
        localStorage.removeItem("loggedInUser");
    };

    return (
        <AuthContext.Provider value={{ user, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};