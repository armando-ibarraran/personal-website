import React from 'react'
import { Link } from 'react-router-dom'
import './HomeNavButton.css'

function HomeNavButton({ link, imageSrc, text }) {
  return (
    <Link to={link} className="home-nav-button">
      <img src={imageSrc} alt={text} className="home-nav-image" />
      <p className="home-nav-text">{text}</p>
    </Link>
  )
}

export default HomeNavButton
