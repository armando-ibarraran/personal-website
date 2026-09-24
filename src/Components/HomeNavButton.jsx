import React from 'react';
import { Link } from 'react-router-dom';
import './HomeNavButton.css';

function HomeNavButton({ link, text }) {
  return (
    <Link to={link} className="home-nav-button">
      {text}
    </Link>
  );
}

export default HomeNavButton;
