import { defineCollection, z } from 'astro:content';

const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    blurb: z.string(),
    role: z.string(),
    focus: z.string(),
    overview: z.object({
      summary: z.string(),
      highlights: z.array(z.string())
    }),
    context: z.object({
      description: z.string(),
      challenges: z.array(z.string())
    }),
    work: z.array(z.object({
      sectionTitle: z.string(),
      sectionSubhead: z.string().optional(),
      content: z.string(),
      images: z.array(z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
        layout: z.enum(['3-3', '2-4', '4-2', 'full', '5-1', '1-5', '2-2-2'])
      })).optional()
    })),
    impact: z.array(z.object({
      heading: z.string(),
      description: z.string()
    })),
    nextCaseStudy: z.object({
      title: z.string(),
      slug: z.string()
    }),
    publishedAt: z.date(),
    updatedAt: z.date().optional()
  })
});

export const collections = {
  'case-studies': caseStudiesCollection
}; 