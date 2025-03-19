import React, { useEffect, useState } from 'react';
import AboutSection from '../Components/AboutSection';
import './AboutMe.css';

function AboutMe() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch('data/aboutData.json') // Load JSON data
      .then(response => response.json())
      .then(data => setSections(data))
      .catch(error => console.error("Error loading about data:", error));
  }, []);

  return (
    <div className="about-container">
      <p className="about-description">
        I'm a student with a passion for software, mathematics, and optimization. 
        Beyond programming, I enjoy watching movies, taking photographies, practicing martial arts and going to the gym.
      </p>

      {sections.map((section, index) => (
        <AboutSection
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          images={section.images}
        />
      ))}
    </div>
  );
}

export default AboutMe;
