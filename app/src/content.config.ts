import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        published: z.boolean().default(true),
        tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        published: z.boolean().default(true),
        tags: z.array(z.string()).optional(),
        github: z.string().optional(),
    }),
});

const achievements = defineCollection({
    loader: glob({ base: "./src/content/achievements", pattern: "**/*.md" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        photo: z.string().optional(),
    }),
});

export const collections = {
    blog,
    projects,
    achievements
};