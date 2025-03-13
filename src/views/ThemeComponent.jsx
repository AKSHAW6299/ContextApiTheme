import React, { useContext } from 'react'
import { ThemeContext } from '../ContextApi/Index';

function ThemeComponent() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  // Full-screen container styling
  const containerStyle = {
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
    color: theme === 'light' ? '#222' : '#f0f0f0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    fontFamily: 'Arial, sans-serif'
  };

  // Styling for the title and additional text
  const textStyle = {
    margin: '0 0 20px',
    textAlign: 'center'
  };

  // Button styling
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: theme === 'light' ? '#222' : '#f0f0f0',
    color: theme === 'light' ? '#f0f0f0' : '#222',
    transition: 'background-color 0.3s ease, color 0.3s ease'
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>{theme === 'light' ? 'Light' : 'Dark'} Theme</h1>
      <p style={textStyle}>This full-screen project uses the Context API for theme switching.</p>
      <button style={buttonStyle} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  )
}

export default ThemeComponent