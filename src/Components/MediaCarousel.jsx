import React from 'react';
import { withBase } from '../lib/paths';
import './MediaCarousel.css';

function MediaItem({ item, title }) {
  if (item.type === 'video') {
    return (
      <video
        controls
        preload="metadata"
        playsInline
        poster={item.poster ? withBase(item.poster) : undefined}
        aria-label={item.alt || title}
      >
        <source src={withBase(item.src)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return (
    <img
      src={withBase(item.src)}
      alt={item.alt || title}
      loading="lazy"
      decoding="async"
    />
  );
}

function MediaCarousel({ media, title }) {
  if (!media || media.length === 0) return null;
  if (media.length === 1) {
    return (
      <figure className="media media-single">
        <MediaItem item={media[0]} title={title} />
      </figure>
    );
  }
  return (
    <div className="media media-carousel" aria-label={title + ' media, ' + media.length + ' items'}>
      {media.map((item, i) => (
        <figure key={item.src} className="media-item">
          <MediaItem item={item} title={title + ' (' + (i + 1) + ' of ' + media.length + ')'} />
        </figure>
      ))}
    </div>
  );
}

export default MediaCarousel;
