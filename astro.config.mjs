import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { rehypeAffiliateLinks } from './src/plugins/rehype-affiliate-links.mjs';

export default defineConfig({
  site: 'https://petverdict.net',
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [rehypeAffiliateLinks],
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-light', wrap: true },
    }),
    sitemap(),
  ],
  output: 'static',
  vite: {
    ssr: { external: ['svgo'] },
  },
});
