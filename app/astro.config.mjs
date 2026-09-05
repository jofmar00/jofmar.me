// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://jofmar.me",
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  integrations: [mdx()],
  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Baumans',
          cssVariable: '--baumans',
      },
      {
          provider: fontProviders.google(),
          name: 'Sniglet',
          cssVariable: '--sniglet',
      },
	],
  vite: {
    plugins: [tailwindcss()],
  },
});