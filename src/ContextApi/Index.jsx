import React, { createContext, useState } from "react";

// Create a Context for the theme
export const ThemeContext = createContext();


// To pass state through provider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    // Toggle between 'light' and 'dark'
    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}