import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  srcDir: './src-astro',
  outDir: './dist',
  publicDir: './public',
  integrations: [mdx()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          loadPaths: [
            path.join(__dirname, 'node_modules/foundation-sites/scss'),
            path.join(__dirname, 'node_modules/motion-ui/src'),
            path.join(__dirname, 'node_modules')
          ],
          silenceDeprecations: ['import']
        }
      }
    }
  }
});
