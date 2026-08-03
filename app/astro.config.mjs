// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://jofmar.me",
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Baumans',
          cssVariable: '--baumans',
      },
	],
  vite: {
    plugins: [tailwindcss()],
  },
});