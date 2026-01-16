import { defineCollection, z } from "astro:content"


const posts = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    private: z.boolean().optional()
  }),
})

const projects = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedData: z.coerce.date().optional(),
    heroImage: image(),
    private: z.boolean().optional()
  })
})

export const collections = { posts, projects }
