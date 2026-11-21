// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://estebansaa.com',
  integrations: [sitemap()],
  build: {
    // Inline small stylesheets to avoid render-blocking requests.
    inlineStylesheets: 'auto',
  },
  vite: {
    // three.js is lazy-loaded after first paint, so its large chunk is expected.
    build: { chunkSizeWarningLimit: 700 },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
