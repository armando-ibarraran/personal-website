import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const linkClass = ({ isActive }) => (isActive ? 'navbar-link is-active' : 'navbar-link');

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-brand" end>
          Armando Ibarrarán
        </NavLink>
        <ul className="navbar-list">
          <li><NavLink to="/" className={linkClass} end>Home</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/about-me" className={linkClass}>About me</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
