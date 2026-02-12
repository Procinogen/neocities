// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vtbot from 'astro-vtbot';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vtbot()],
  output: 'server'
});