import React from 'react';
import TagList from './TagList';
import LinksRow from './LinksRow';
import MediaCarousel from './MediaCarousel';
import { linksFromObject } from '../lib/links';
import './ProjectCard.css';

function ProjectCard({ id, title, dateLabel, context, pitch, bullets, tags, links, media }) {
  return (
    <article className="project" id={id}>
      <header className="project-header">
        <h3 className="project-title">{title}</h3>
        {dateLabel && <span className="project-date">{dateLabel}</span>}
      </header>
      {context && <p className="project-context muted">{context}</p>}
      {pitch && <p className="project-pitch">{pitch}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="project-bullets">
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      <div className="project-meta">
        <TagList tags={tags} />
        <LinksRow links={linksFromObject(links)} />
      </div>
      <MediaCarousel media={media} title={title} />
    </article>
  );
}

export default ProjectCard;
