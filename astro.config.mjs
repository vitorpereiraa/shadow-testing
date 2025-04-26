// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://shadow-testing.org',
	integrations: [
		starlight({
			title: 'Home',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/vitorpereiraa' }],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What is Shadow Testing', slug: 'getting-started/shadow-testing' },
					],
				}
			],
		}),
	],
});
