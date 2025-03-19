import React from 'react';
import './ProjectCard.css';

function ProjectCard({ title, description, media }) {
  return (
    <div className="project-card">
      <div className="carousel">
        {media.map((item, index) => (
          <div key={index} className="carousel-item">
            {item.type === 'image' ? (
              <img src={item.src} alt={`Project ${title} - ${index}`} />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
