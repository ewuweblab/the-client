// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

// Keystatic's admin UI (/keystatic) needs a server, but this site deploys to
// Cloudflare as static files. Load it only under `astro dev`, so content is
// edited locally, committed, and the production build stays fully static.
function keystaticInDev() {
  const integration = keystatic();
  const setup = integration.hooks['astro:config:setup'];
  return {
    name: 'keystatic-dev-only',
    hooks: {
      /** @param {any} options */
      'astro:config:setup': (options) => {
        if (options.command === 'dev') setup?.(options);
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  build: {
    // Inline CSS so the built pages are styled even when opened from disk
    inlineStylesheets: 'always'
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react(), markdoc(), keystaticInDev()]
});