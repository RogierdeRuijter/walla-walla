import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://rogierderuijter.github.io',
  base: 'walla-walla',
  integrations: [mdx(), sitemap(), image()],
});
