import adapterStatic from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
      scss: {}
    }),
    vitePreprocess()
  ],
  kit: {
    adapter: adapterStatic(),
    alias: {
      $components: './src/lib/components'
    }
  }
};

export default config;
