import React from 'react';
import './TagList.css';

function TagList({ tags }) {
  if (!tags || tags.length === 0) return null;
  return (
    <ul className="tags" aria-label="Topics">
      {tags.map((tag) => (
        <li key={tag} className="tag">{tag}</li>
      ))}
    </ul>
  );
}

export default TagList;
