// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
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