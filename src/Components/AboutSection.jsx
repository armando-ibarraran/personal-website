import React from 'react';
import './AboutSection.css';

function AboutSection({ title, subtitle, images }) {
  return (
    <div className="about-section">
      <h2 className="about-title">{title}</h2>
      <p className="about-subtitle">{subtitle}</p>
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`${title} - ${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
}

export default AboutSection;
