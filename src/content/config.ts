import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content', // v2.5.0+ required
  schema: z.object({
    title: z.string(),
    category: z.string(),
    client: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(100),
    coverImage: z.string().optional(), // URL or path to image
    jingle: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};