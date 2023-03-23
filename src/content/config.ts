import { defineCollection, z } from 'astro:content';
import { BASE } from '../consts';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z
      .string()
      .optional()
      .transform((str) =>
        str ? `/${BASE}${BASE ? '/' : ''}${str}` : undefined
      ),
    width: z.number(),
    height: z.number(),
  }),
});

export const collections = { blog };
