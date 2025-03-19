import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css'

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('data/projects.json')
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error("Error loading project data:", error));
    }, []);

    return (
        <div className="projects-container">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                media={project.media}
              />
            ))
          ) : (
            <p>Loading projects...</p>
          )}
        </div>
      );
    }
    
    export default Projects;
    