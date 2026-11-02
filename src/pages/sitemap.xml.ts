import type { APIRoute } from 'astro';

const routes = ['/', '/work/no-call/', '/work/no-message/', '/work/no-contact/', '/notes/setup/', '/notes/features/', '/notes/privacy/', '/notes/testing/'];

export const GET: APIRoute = ({ site }) => {
  const urls = site ? routes.map(route => `<url><loc>${new URL(route, site).href}</loc></url>`).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
