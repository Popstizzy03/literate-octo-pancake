import { defineCollection, z } from 'astro:content';
import { image } from 'astro:assets';

const projectsCollection = defineCollection({
  type: 'content', // v2.5.0+ required
  schema: ({ image }) => z.object({
    title: z.string(),
    category: z.string(),
    client: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    sortOrder: z.number().default(100),
    coverImage: image().optional(),
    jingle: z.string().optional(),
  }),
});

export const collections = {
  'projects': projectsCollection,
};