import { defineCollection, z } from 'astro:content';

// Portal asset documents — synced from the client's GitHub asset library by
// scripts/sync-portal-content.mjs. Frontmatter is written by that script from
// src/data/portal-manifest.json, so every field is optional/defensive here.
const portal = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    skill: z.string().optional(),
    sourceFile: z.string().optional(),
    lastUpdated: z.string().optional(),
  }),
});

export const collections = { portal };
