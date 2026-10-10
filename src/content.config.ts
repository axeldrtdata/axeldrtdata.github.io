import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Astro 7 Content Layer API: each collection declares a `loader`.
// Authors add Markdown/MDX files under the `base` directories below.
const works = defineCollection({
  loader: glob({ pattern: '**/index.{md,mdx}', base: './src/content/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tech: z.array(z.string()),
      link: z.string().url().optional(),
      repo: z.string().url().optional(),
      thumbnail: image().optional(),
      icon: image().optional(),
      order: z.number().optional(),
      publishDate: z.coerce.date(),
      category: z.enum(['python', 'sql', 'dataviz']).optional(),
      client: z.string().optional(),
      role: z.string().optional(),
      featured: z.boolean().default(false),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/index.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      description: z.string(),
      draft: z.boolean().default(false),
      heroImage: image().optional(),
    }),
});

// French versions: a `fr.mdx` (or `fr.md`) next to each English `index.mdx`.
// Only the translated fields live in its front matter; everything else (images,
// stack, order, dates…) is taken from the English entry with the same folder name.
const folderId = ({ entry }: { entry: string }) => entry.split('/')[0];

const worksFr = defineCollection({
  loader: glob({ pattern: '**/fr.{md,mdx}', base: './src/content/works', generateId: folderId }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    role: z.string().optional(),
  }),
});

const blogFr = defineCollection({
  loader: glob({ pattern: '**/fr.{md,mdx}', base: './src/content/blog', generateId: folderId }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { works, blog, worksFr, blogFr };
