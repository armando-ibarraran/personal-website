import React from 'react';
import './LinksRow.css';

// links: [{ label, href }]
function LinksRow({ links, className = '' }) {
  const items = (links || []).filter((l) => l && l.href);
  if (items.length === 0) return null;
  return (
    <ul className={('links-row ' + className).trim()}>
      {items.map((l) => {
        const external = /^https?:\/\//.test(l.href);
        return (
          <li key={l.href}>
            <a
              href={l.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
            >
              {l.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default LinksRow;
