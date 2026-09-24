const LINK_LABELS = { repo: 'Code', report: 'Report', article: 'Article', site: 'Site' };

// { repo: url, report: url, ... } -> [{ label, href }], skipping empty values
export function linksFromObject(links) {
  if (!links) return [];
  return Object.entries(links)
    .filter(([, href]) => href)
    .map(([key, href]) => ({ label: LINK_LABELS[key] || key, href }));
}
