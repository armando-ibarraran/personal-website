# armando-ibarraran.github.io/personal-website

Personal site of Armando Ibarrarán. React 19 + Vite, plain CSS, no UI framework. Deployed to GitHub Pages under the `/personal-website/` base path.

## Scripts

```
npm run dev       # local dev server
npm run build     # production build into dist/ (postbuild copies index.html to 404.html for deep links)
npm run preview   # serve dist/ at http://localhost:4173/personal-website/
npm run lint
npm run deploy    # build + push dist/ to the gh-pages branch
```

## Content lives in JSON

- `public/data/timeline.json`: entries shown on the Home timeline, in display order. `href` may be an internal route (`/projects#id`) or an external URL. `image` is `{ src, alt }` or `null`.
- `public/data/projects.json`: `tier` is `featured` (full card) or `earlier` (compact row). Sorted by `year` then `month`, newest first. `links` keys: `repo`, `report`, `article`, `site`. `media` items are `{ type: "image" | "video", src, alt, poster? }`.
- `public/data/aboutData.json`: sections with `images` (`{ src, alt }`), optional `items` (text list shown when there are no images) and optional `fit: "natural"` to avoid cropping.

All `src` paths are relative to `public/` with no leading slash; `src/lib/paths.js` prefixes the base path.

## Layout

- `src/index.css`: design tokens, reset, `.container`, `.section-label`.
- `src/Components/`: `Home` (hero + `Timeline`), `Projects` (`ProjectCard` for featured, `ProjectList` for earlier work), `AboutMe` (`AboutSection`), shared `TagList`, `LinksRow`, `MediaCarousel`, `Navbar`.

Images in `public/images/` are kept at or below 1600 px and about 300 KB.
