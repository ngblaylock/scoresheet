import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Components from 'unplugin-svelte-components/vite';
import fs from 'fs';
import path from 'path';

// For auto-importing nathanblaylock.com components
// Path to the third-party components
const componentsDir = path.resolve('node_modules/nathanblaylock.com/dist/');

// Get all Svelte file names dynamically
const componentNames = fs.readdirSync(componentsDir)
  .filter(file => file.endsWith('.svelte'))
  .map(file => file.replace('.svelte', ''));

export default defineConfig({
  plugins: [
    Components({
      dirs: [],
      allowOverrides: true,
      external: [
        {
          from: 'nathanblaylock.com', // import from third party
          names: componentNames,
          defaultImport: false // telling `unplugin-svelte-components` to import any component as non-default export
        }
      ],
      eslintrc: { enabled: false }
    }),
    sveltekit()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  }
});
