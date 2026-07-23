import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const biography = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/biography' }),
  schema: z.object({
    name: z.string(),
    nameEn: z.string().optional(),
    birthDate: z.date(),
    birthPlace: z.string(),
    birthPlaceEn: z.string().optional(),
    height: z.number().optional(),
    education: z.string().optional(),
    agency: z.string().optional(),
    debutYear: z.number(),
    weibo: z.string().url().optional(),
    intro: z.string(),
    locale: z.enum(['zh', 'en']).default('zh'),
  }),
});

const discography = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/discography' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string().optional(),
      type: z.enum(['album', 'single', 'ost']),
      releaseDate: z.date(),
      coverImage: image().optional(),
      label: z.string().optional(),
      tracks: z
        .array(
          z.object({
            number: z.number(),
            name: z.string(),
            duration: z.string().optional(),
          })
        )
        .optional(),
      platforms: z
        .array(
          z.object({
            name: z.string(),
            url: z.string().url(),
          })
        )
        .optional(),
      tags: z.array(z.string()).optional(),
      locale: z.enum(['zh', 'en']).default('zh'),
    }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/events' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string().optional(),
      date: z.date(),
      endDate: z.date().optional(),
      type: z.enum(['concert', 'variety', 'award', 'interview', 'fanmeeting', 'other']),
      location: z.string(),
      locationEn: z.string().optional(),
      images: z.array(image()).optional(),
      links: z
        .array(
          z.object({
            label: z.string(),
            url: z.string().url(),
          })
        )
        .optional(),
      featured: z.boolean().default(false),
      locale: z.enum(['zh', 'en']).default('zh'),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      titleEn: z.string().optional(),
      publishDate: z.date(),
      source: z.string(),
      sourceUrl: z.string().url().optional(),
      summary: z.string(),
      summaryEn: z.string().optional(),
      featuredImage: image().optional(),
      tags: z.array(z.string()),
      isTranslation: z.boolean().default(false),
      locale: z.enum(['zh', 'en']).default('zh'),
    }),
});

const awards = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/awards' }),
  schema: z.object({
    awardName: z.string(),
    awardNameEn: z.string().optional(),
    ceremony: z.string(),
    ceremonyEn: z.string().optional(),
    year: z.number(),
    category: z.string(),
    result: z.enum(['won', 'nominated']),
    work: z.string().optional(),
    date: z.date().optional(),
    locale: z.enum(['zh', 'en']).default('zh'),
  }),
});

export const collections = {
  biography,
  discography,
  events,
  news,
  awards,
};
