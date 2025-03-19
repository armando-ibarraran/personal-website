import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';
import Navbar from './Components/Navbar';

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {!isHome && <Navbar />} {/* Show Navbar only if not on Home */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router basename="/personal-website"> {/* Set basename for GitHub Pages */}
      <Layout />
    </Router>
  );
}

export default App;
