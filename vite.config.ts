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
    Components({ // https://github.com/Mohamed-Kaizen/unplugin-svelte-components
      dirs: [],
      allowOverrides: true,
      external: [
        {
          from: 'nathanblaylock.com',
          names: componentNames,
          defaultImport: false
        }
      ],
      eslintrc: { enabled: false }
    }),
    sveltekit()
  ],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || 'unknown'),
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  }
});
