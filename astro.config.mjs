// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://shadow-testing.org',
	integrations: [
		starlight({
			title: 'Home',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vitorpereiraa' },
				 { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/vitor-pereira-9671771a1' }],
			sidebar: [
				{
					label: 'Introduction',
					link: '/introduction',
				},
				{
					label: 'Literature Review',
					link: '/literature-review',
				}
			],
		}),
	],
});
