import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Entries are edited through Keystatic (see keystatic.config.ts).
const pioneers = defineCollection({
	loader: glob({ pattern: '*.mdoc', base: './src/content/pioneers' }),
	schema: z.object({
		name: z.string(),
		order: z.number(),
		image: z.string(),
		link: z.string().url(),
		linkText: z.string(),
	}),
});

export const collections = { pioneers };
