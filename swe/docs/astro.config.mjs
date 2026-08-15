// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	server: {
		host: true, // ou '0.0.0.0'
	},
	integrations: [
		mermaid({
			theme: 'default', // Tema base padrão
			autoTheme: true,   // Alterna automaticamente entre claro/escuro com base no Starlight
		}),
		starlight({
			title: 'Locuto-Rio [0.0.0]',
			sidebar: [
				{
					label: 'Getting Started',
					collapsed: true,
					items: [
						{ autogenerate: { directory: 'getting-started' } },
					],
				},
				{
					label: 'Level #1',
					collapsed: true,
					items: [
						{
							label: 'Level #2',
							collapsed: true,
							items: [
								{ autogenerate: { directory: 'project-documentation/requirements-engineering' } },
							],
						},
					],
				},
			],
		}),
	],
});