import { defineCollection, z } from 'astro:content';

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    blurb: z.string(),
    role: z.string(),
    focus: z.string(),
    caseType: z.enum(['Case Study']),
    leadImage: z.object({
      src: z.string(),
      alt: z.string()
    }),
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
      sectionSubhead: z.string(),
      content: z.string(),
      images: z.array(z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
        layout: z.string()
      }))
    })),
    impact: z.array(z.object({
      heading: z.string(),
      description: z.string()
    })),
    nextCaseStudy: z.object({
      title: z.string(),
      slug: z.string()
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
    }),
    overview: z.object({
      summary: z.string(),
      highlights: z.array(z.string())
    }),
    work: z.array(z.object({
      sectionTitle: z.string(),
      sectionSubhead: z.string(),
      content: z.string(),
      images: z.array(z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string(),
        layout: z.string()
      }))
    })),
    impact: z.array(z.object({
      heading: z.string(),
      description: z.string()
    })),
    nextCaseStudy: z.object({
      title: z.string(),
      slug: z.string()
    })
  })
});

export const collections = {
  'case-studies': caseStudies,
  'project-snapshots': projectSnapshots
}; 