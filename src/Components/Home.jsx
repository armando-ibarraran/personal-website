import React from 'react';
import headshot from '../assets/imgs/me.jpeg';
import HomeNavButton from '../Components/HomeNavButton'; // Import the button component
import projectIcon from "../assets/icons/projects-icon.svg" 
import personalIcon from "../assets/icons/personal-icon.svg"
import './Home.css';

function Home() {
    return (
        <article>
            <div className='home-top'>
                <img className="home-portrait" src={headshot} alt="Profile" />
                <div className='home-presentation'>
                    <h1 className="home-name">Carlos Armando Ibarrarán Arnaldo</h1>
                </div>
            </div>
            <p className='home-description'>
                I'm an undergraduate student in Applied Mathematics & Computer Engineering at ITAM, eager to solve real-world problems with AI and statistics.
            </p>
            <hr className='home-divider' />

            {/* Navigation Buttons */}
            <div className="home-nav-buttons">
                <HomeNavButton link="/projects" imageSrc={projectIcon} text="Projects" />
                <HomeNavButton link="/about-me" imageSrc={personalIcon} text="About me" />
            </div>
        </article>
    );
}

export default Home;
