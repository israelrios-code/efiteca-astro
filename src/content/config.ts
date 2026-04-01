import { defineCollection, z } from "astro:content";

const seoSchema = z.object({
  title: z.string().min(10).max(70),
  description: z.string().min(50).max(160)
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["es", "en"]),
    market: z.string().optional(),
    title: z.string().min(10).max(80),
    excerpt: z.string().min(80).max(220),
    publishedAt: z.string().date(),
    updatedAt: z.string().date().optional(),
    category: z.enum(["corporate", "market", "insight"]),
    featured: z.boolean().default(false),
    seo: seoSchema
  })
});

const buttonSchema = z.object({
  label: z.string(),
  href: z.string()
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["es", "en"]),
    title: z.string(),
    seo: seoSchema,
    // Estructura de la Home
    hero: z.object({
      title_part1: z.string(),
      title_part2: z.string(),
      description: z.string(),
      cta: buttonSchema,
      images: z.array(z.string()).optional()
    }).optional(),
    services: z.object({
      title: z.string(),
      description: z.string(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
        button: buttonSchema,
        image: z.string()
      }))
    }).optional(),
    whoIsItFor: z.object({
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        image: z.string()
      }))
    }).optional(),
    steps: z.object({
      title: z.string(),
      image: z.string(),
      items: z.array(z.object({
        number: z.number(),
        title: z.string(),
        description: z.string()
      }))
    }).optional(),
    benefits: z.object({
      title: z.string(),
      items: z.array(z.object({
        text: z.string()
      }))
    }).optional(),
    metrics: z.object({
        title: z.string(),
        items: z.array(z.object({
            title: z.string(),
            value: z.string(),
        }))
    }).optional(),
    testimonials: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(z.object({
            name: z.string(),
            role: z.string(),
            text: z.string(),
            image: z.string(),
            stars: z.number().default(5)
        }))
    }).optional(),
    partners: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(z.object({
            name: z.string()
        }))
    }).optional()
  })
});

const markets = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    lang: z.enum(["es", "en"]),
    seo: seoSchema
  })
});

export const collections = {
  news,
  pages,
  markets
};
