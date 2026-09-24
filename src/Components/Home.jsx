import React from 'react';
import headshot from '../assets/imgs/me.jpeg';
import HomeNavButton from './HomeNavButton';
import LinksRow from './LinksRow';
import Timeline from './Timeline';
import './Home.css';

const PROFILE_LINKS = [
  { label: 'GitHub', href: 'https://github.com/armando-ibarraran' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlos-armando-ibarrar%C3%A1n-arnaldo-8b0a19323/' },
  { label: 'Email', href: 'mailto:carlos.ibarraran@itam.mx' },
];

function Home() {
  return (
    <div className="container page home">
      <header className="home-hero">
        <img className="home-portrait" src={headshot} alt="Armando Ibarrarán" width="128" height="128" />
        <div className="home-text">
          <h1 className="home-name display">Armando Ibarrarán</h1>
          <p className="home-intro">
            Applied Mathematics and Computer Engineering student at ITAM (Dec 2026).
            Currently at Bravos Energía modeling counterparties&rsquo; bids in ERCOT CRR auctions;
            previously a visiting student researcher at NASA JPL working on state estimation
            for autonomous spacecraft.
          </p>
          <p className="home-sub muted">
            I like problems where a probabilistic model has to become working software and then
            survive contact with a real market, a real spacecraft, or a real leaderboard.
          </p>
          <LinksRow links={PROFILE_LINKS} className="home-links" />
        </div>
      </header>

      <nav className="home-nav" aria-label="Sections">
        <HomeNavButton link="/projects" text="Projects" />
        <HomeNavButton link="/about-me" text="About me" />
      </nav>

      <section className="home-timeline">
        <h2 className="section-label">2015 to 2026</h2>
        <Timeline />
      </section>
    </div>
  );
}

export default Home;
