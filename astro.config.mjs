import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  srcDir: './src-astro',
  outDir: './dist',
  publicDir: './public',
  integrations: [
    mdx(),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true,
    })
  ]
});
