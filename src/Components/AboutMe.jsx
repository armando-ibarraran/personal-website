import React, { useEffect, useState } from 'react';
import AboutSection from './AboutSection';
import { fetchJson } from '../lib/paths';
import './AboutMe.css';

function AboutMe() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchJson('data/aboutData.json')
      .then(setSections)
      .catch((err) => console.error('Error loading about data:', err));
  }, []);

  return (
    <div className="container page about">
      <p className="about-intro">
        Outside of work I train boxing, muay thai and Brazilian jiu-jitsu (two years now), lift,
        take photographs, and watch too many movies.
      </p>

      {sections.map((section) => (
        <AboutSection key={section.id || section.title} {...section} />
      ))}
    </div>
  );
}

export default AboutMe;
