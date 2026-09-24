// The only place that knows about the GitHub Pages base path.
const BASE = import.meta.env.BASE_URL; // "/personal-website/"

export function withBase(path) {
  if (!path) return path;
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:')) return path;
  return BASE + path.replace(/^\//, '');
}

export async function fetchJson(path) {
  const res = await fetch(withBase(path));
  if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
  return res.json();
}
