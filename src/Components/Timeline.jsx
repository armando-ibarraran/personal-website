import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJson, withBase } from '../lib/paths';
import './Timeline.css';

function TimelineTitle({ item }) {
  if (item.href && item.href.startsWith('/')) {
    return <Link to={item.href} className="timeline-title">{item.title}</Link>;
  }
  if (item.href) {
    return <a href={item.href} className="timeline-title" target="_blank" rel="noreferrer">{item.title}</a>;
  }
  return <span className="timeline-title">{item.title}</span>;
}

function Timeline() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetchJson('data/timeline.json')
      .then(setItems)
      .catch((err) => console.error('Error loading timeline:', err));
  }, []);

  if (!items) return null;

  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item.id} className="timeline-item">
          <span className="timeline-year display">{item.year}</span>
          <span className="timeline-marker" aria-hidden="true" />
          <div className="timeline-body">
            <p>
              <TimelineTitle item={item} />
              {item.dateLabel && <span className="timeline-date muted"> {item.dateLabel}</span>}
            </p>
            {item.subtitle && <p className="timeline-subtitle muted">{item.subtitle}</p>}
            {item.image && (
              <img
                className="timeline-image"
                src={withBase(item.image.src)}
                alt={item.image.alt || item.title}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
