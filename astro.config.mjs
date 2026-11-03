// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  build: {
    // Inline CSS so the built pages are styled even when opened from disk
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});