import React from 'react';
import TagList from './TagList';
import './ProjectList.css';

function ProjectList({ projects }) {
  if (!projects || projects.length === 0) return null;
  return (
    <ul className="project-list">
      {projects.map((p) => {
        const repo = p.links && p.links.repo;
        return (
          <li key={p.id} id={p.id} className="project-row">
            <span className="project-row-year">{p.dateLabel || p.year}</span>
            <div className="project-row-body">
              <p className="project-row-title">
                {repo ? (
                  <a href={repo} target="_blank" rel="noreferrer">{p.title}</a>
                ) : (
                  p.title
                )}
              </p>
              {p.pitch && <p className="project-row-line muted">{p.pitch}</p>}
              <TagList tags={p.tags} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectList;
