import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [tailwind()],
  output: 'hybrid', // marketing pages stay static; /portal opts into SSR via `prerender = false`
  adapter: vercel({ maxDuration: 60 }),
  site: 'https://fastwebguru.com',
});
