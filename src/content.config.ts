import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    isbn13: z.string().optional().default(''),
    isbn: z.string().optional().default(''),
    publisher: z.string().optional().default(''),
    pages: z.number().optional().default(0),
    year: z.string().optional().default(''),
    dateRead: z.string().optional().default(''),
    status: z.enum(['read', 'currently-reading', 'did-not-finish']).default('read'),
    rating: z.number().default(0),
    published: z.boolean().default(true),
    aiGenerated: z.boolean().default(true),
    favoriteQuote: z.string().optional().default(''),
  }),
});

export const collections = { books };
