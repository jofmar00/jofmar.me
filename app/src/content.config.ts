import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        miniature: image(),
        description: z.string(),
        date: z.coerce.date(),
        published: z.boolean().default(true),
        tags: z.array(z.string()).optional(),
    }),
});

const achievements = defineCollection({
    loader: glob({ base: "./src/content/achievements", pattern: "**/*.md" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        miniature: image(),
        date: z.coerce.date(),
        published: z.boolean().default(true),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    blog,
    achievements
};