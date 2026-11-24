// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// The live address. Used for canonical URLs and the sitemap.
	// TODO: when the domain is connected in Cloudflare, put it here and run `npm run deploy` again.
	site: 'https://shivsagar-enterprise.vraj-d7.workers.dev',
	integrations: [sitemap({ filter: (page) => !page.endsWith('/404/') })],
});
