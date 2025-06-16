import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    client: z.string(),
    role: z.string(),
    contribution: z.array(z.string()),
    caseType: z.enum(['Case Study']),
    projectType: z.array(z.string()),
    leadImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const projectSnapshots = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    subtitle: z.string(),
    role: z.string(),
    contribution: z.array(z.string()),
    caseType: z.enum(['Project Snapshot']),
    projectType: z.array(z.string()),
    leadImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const home = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    intro: z.string(),
  }),
});

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    date: z.string().optional(),
    readingTime: z.string(),
    topics: z.array(z.string()),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  'project-snapshots': projectSnapshots,
  'about': about,
  'home': home,
  'essays': essays,
} as const;