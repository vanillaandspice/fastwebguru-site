import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // marketing pages stay static; /portal opts into SSR via `prerender = false`
  adapter: vercel(),
  site: 'https://fastwebguru.com',
});
