import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ThemeComponent from './views/ThemeComponent';
import { ThemeProvider } from './ContextApi/Index';



function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ThemeComponent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App