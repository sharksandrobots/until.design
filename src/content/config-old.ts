import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    client: z.string(),
    year: z.string(),
    role: z.string(),
    services: z.array(z.string()),
    leadImage: z.object({
      src: z.string(),
      alt: z.string()
    })
  })
});

const projectSnapshots = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    blurb: z.string(),
    role: z.string(),
    focus: z.string(),
    caseType: z.enum(['Project Snapshot']),
    leadImage: z.object({
      src: z.string(),
      alt: z.string()
    })
  })
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  })
});

const home = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    intro: z.string()
  })
});

const essays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    date: z.string().optional(),
    readingTime: z.string(),
    topics: z.array(z.string())
  })
});

export const collections = {
  'case-studies': caseStudies,
  'project-snapshots': projectSnapshots,
  'about': about,
  'home': home,
  'essays': essays
}; 