import React from 'react';
import { withBase } from '../lib/paths';
import './AboutSection.css';

// images: [{ src, alt }] ; items: optional list of strings shown when there are no images
function AboutSection({ title, subtitle, images, items, fit }) {
  const pics = (images || []).map((img) => (typeof img === 'string' ? { src: img, alt: title } : img));
  const galleryClass = fit === 'natural' ? 'gallery gallery-natural' : 'gallery';
  return (
    <section className="about-section">
      <h2 className="section-label">{title}</h2>
      {subtitle && <p className="about-subtitle">{subtitle}</p>}
      {pics.length > 0 && (
        <div className={galleryClass}>
          {pics.map((img) => (
            <img
              key={img.src}
              src={withBase(img.src)}
              alt={img.alt || title}
              className="gallery-image"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      )}
      {pics.length === 0 && items && items.length > 0 && (
        <ul className="about-items">
          {items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default AboutSection;
