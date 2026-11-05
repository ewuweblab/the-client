import { config, fields, collection } from '@keystatic/core';

export default config({
	// Edits are saved as files in this repo; commit them to publish.
	storage: { kind: 'local' },

	collections: {
		pioneers: collection({
			label: 'Pioneers',
			slugField: 'name',
			path: 'src/content/pioneers/*',
			format: { contentField: 'bio' },
			columns: ['name', 'order'],
			schema: {
				name: fields.slug({ name: { label: 'Name' } }),
				order: fields.integer({
					label: 'Sort order',
					description: 'Lower numbers appear first on the page.',
					validation: { isRequired: true },
				}),
				image: fields.image({
					label: 'Photo',
					directory: 'public/images',
					publicPath: 'images/',
					validation: { isRequired: true },
				}),
				link: fields.url({ label: 'Link', validation: { isRequired: true } }),
				linkText: fields.text({ label: 'Link text', validation: { isRequired: true } }),
				bio: fields.markdoc({
					label: 'Bio',
					options: {
						heading: false,
						blockquote: false,
						orderedList: false,
						unorderedList: false,
						table: false,
						image: false,
						divider: false,
						codeBlock: false,
					},
				}),
			},
		}),
	},
});
