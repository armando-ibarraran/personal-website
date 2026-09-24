import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectList from './ProjectList';
import { fetchJson } from '../lib/paths';
import './Projects.css';

const byDateDesc = (a, b) => (b.year - a.year) || ((b.month || 0) - (a.month || 0));

function Projects() {
  const [projects, setProjects] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJson('data/projects.json')
      .then((data) => setProjects([...data].sort(byDateDesc)))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    if (!projects || !window.location.hash) return;
    const el = document.getElementById(window.location.hash.slice(1));
    if (el) el.scrollIntoView();
  }, [projects]);

  if (error) {
    return <div className="container page"><p className="muted">Could not load projects. {error}</p></div>;
  }
  if (!projects) {
    return <div className="container page"><p className="muted">Loading projects</p></div>;
  }

  const featured = projects.filter((p) => p.tier === 'featured');
  const earlier = projects.filter((p) => p.tier !== 'featured');

  return (
    <div className="container page projects">
      <p className="projects-intro muted">
        Selected work, newest first. Each entry links to code or a report when one exists.
      </p>

      <section className="projects-section">
        <h2 className="section-label">Featured</h2>
        {featured.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </section>

      <section className="projects-section">
        <h2 className="section-label">Earlier work</h2>
        <ProjectList projects={earlier} />
      </section>
    </div>
  );
}

export default Projects;
