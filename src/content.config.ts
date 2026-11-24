import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Blog posts carried over from the old WordPress site (src/content/blog/*.md).
const blog = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/blog' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			category: z.string(),
			description: z.string().optional(),
			image: image().optional(),
		}),
});

export const collections = { blog };
