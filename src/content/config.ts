import { defineCollection, z } from "astro:content"

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image(),
    private: z.boolean().optional()
  }),
})

export const collections = { blog }
