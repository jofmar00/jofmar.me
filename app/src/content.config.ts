import { defineCollection } from "astro/content/config";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { url } from "astro:schema";

const blog = defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
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
    }),
});

const projects = defineCollection({
    loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
    schema: () => z.object({
        title: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        published: z.boolean().default(true),
        url: url().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const quotes = defineCollection({
    loader: glob({ base: "./src/content/quotes", pattern: "**/*.md" }),
});

const music = defineCollection({
    loader: glob({ base: "./src/content/music", pattern: "**/*.md" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        artist: z.string(),
        miniature: image(),
        video: z.url(),
        date: z.coerce.date(),
        published: z.boolean().default(true),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    blog,
    achievements,
    projects,
    quotes,
    music
};