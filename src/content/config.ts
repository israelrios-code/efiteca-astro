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

const textButtonSchema = z.object({
  title: z.string(),
  description: z.string(),
  button: buttonSchema
});

const simpleLinkSchema = z.object({
  label: z.string(),
  href: z.string()
});

const locationItemSchema = z.object({
  city: z.string(),
  address: z.string(),
  image: z.string(),
  summary: z.string().optional(),
  seoLabel: z.string().optional(),
  cta: buttonSchema
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
      background_desktop: z.string(),
      background_mobile: z.string().optional()
    }).optional(),
    aboutHero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      highlight: z.string(),
      description: z.string(),
      cta: buttonSchema,
      texture: z.string().optional(),
      outlineImage: z.string().optional()
    }).optional(),
    contactHero: z.object({
      eyebrow: z.string(),
      title: z.string(),
      highlight: z.string().optional(),
      description: z.string(),
      primaryCta: buttonSchema,
      secondaryCta: buttonSchema.optional()
    }).optional(),
    newsLanding: z.object({
      heroTitle: z.string(),
      heroHighlight: z.string().optional(),
      heroDescription: z.string(),
      listingTitle: z.string(),
      listingDescription: z.string()
    }).optional(),
    contactIntro: z.object({
      title: z.string(),
      highlight: z.string().optional(),
      pretitle: z.string().optional(),
      bulletsTitle: z.string().optional(),
      bullets: z.array(z.string()),
      footnote: z.string().optional(),
      image: z.string(),
      floatingLabel: z.string().optional()
    }).optional(),
    diagnosticSteps: z.object({
      title: z.string(),
      description: z.string(),
      footnote: z.string().optional(),
      items: z.array(z.object({
        number: z.number(),
        title: z.string(),
        description: z.string()
      }))
    }).optional(),
    trajectory: z.object({
      title: z.string(),
      description: z.string(),
      highlight: z.string(),
      image: z.string(),
      badgeLabel: z.string().optional(),
      badgeText: z.string().optional()
    }).optional(),
    purposeSection: z.object({
      title: z.string(),
      description: z.string(),
      highlight: z.string(),
      image: z.string(),
      bullets: z.array(z.string())
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
    simulator: z.object({
      title: z.string(),
      image: z.string(),
      description: z.string(),
      secondaryDescription: z.string().optional(),
      noteTitle: z.string(),
      noteText: z.string(),
      offerBadge: z.string().optional(),
      calculatorTitle: z.string(),
      resultLabel: z.string(),
      resultValue: z.string(),
      cta: buttonSchema,
      sliders: z.array(z.object({
        label: z.string(),
        value: z.string(),
        progress: z.number().min(0).max(100)
      }))
    }).optional(),
    requirementsBanner: z.object({
      title: z.string(),
      items: z.array(z.string()),
      image: z.string(),
      button: buttonSchema
    }).optional(),
    calculatorEmbed: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      description: z.string(),
      src: z.string()
    }).optional(),
    whoIsItFor: z.object({
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        image: z.string()
      })),
      process: z.object({
        title: z.string(),
        requirements: z.array(z.string()),
        image: z.string().optional(),
        pricing: z.object({
          title: z.string(),
          description: z.string(),
          highlight: z.string(),
          button: buttonSchema
        })
      }).optional()
    }).optional(),
    howItWorks: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      cta: buttonSchema.optional(),
      items: z.array(z.object({
        number: z.string(),
        icon: z.string().optional(),
        title: z.string(),
        description: z.string()
      }))
    }).optional(),
    steps: z.object({
      eyebrow: z.string().optional(),
      title: z.string(),
      image: z.string(),
      items: z.array(z.object({
        number: z.number(),
        title: z.string(),
        description: z.string()
      }))
    }).optional(),
    actionCta: z.object({
      title: z.string(),
      description: z.string(),
      button: buttonSchema
    }).optional(),
    shortcutCta: z.object({
      title: z.string(),
      description: z.string(),
      button: buttonSchema,
      image: z.string(),
      overlayImage: z.string().optional(),
      accentImage: z.string().optional()
    }).optional(),
    benefits: z.object({
      title: z.string(),
      description: z.string().optional(),
      ctaText: z.string().optional(),
      ctaLink: z.string().optional(),
      items: z.array(z.object({
        icon: z.string().optional(),
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
    guides: z.object({
      title: z.string(),
      items: z.array(z.object({
        title: z.string(),
        cta: buttonSchema
        }))
    }).optional(),
    testimonials: z.object({
        title: z.string(),
        backgroundColor: z.string().optional(),
        description: z.string(),
        items: z.array(z.object({
            name: z.string(),
            role: z.string(),
            text: z.string(),
            image: z.string(),
            stars: z.number().default(5)
        }))
    }).optional(),
    certifications: z.object({
      title: z.string(),
      description: z.string(),
      logoImage: z.string().optional()
    }).optional(),
    recognitions: z.object({
      title: z.string(),
      description: z.string(),
      texture: z.string().optional(),
      items: z.array(z.object({
        title: z.string(),
        subtitle: z.string().optional()
      }))
    }).optional(),
    companyInfo: z.object({
      title: z.string(),
      items: z.array(z.string()),
      image: z.string(),
      legalLinks: z.array(simpleLinkSchema)
    }).optional(),
    about: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string(),
      badgeLabel: z.string(),
      badgeText: z.string(),
      button: buttonSchema
    }).optional(),
    partners: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(z.object({
            name: z.string()
        }))
    }).optional(),
    faq: z.object({
      title: z.string(),
      items: z.array(z.object({
        question: z.string(),
        answer: z.string()
      }))
    }).optional(),
    comparison: z.object({
      title: z.string(),
      leftTitle: z.string(),
      rightTitle: z.string(),
      leftItems: z.array(z.string()),
      rightItems: z.array(z.string()),
      cta: buttonSchema
    }).optional(),
    locations: z.object({
      title: z.string(),
      subtitle: z.string(),
      items: z.array(locationItemSchema)
    }).optional(),
    locationsShowcase: z.object({
      title: z.string(),
      description: z.string(),
      mapImage: z.string(),
      cta: textButtonSchema
    }).optional(),
    blog: z.object({
      title: z.string(),
      subtitle: z.string(),
      items: z.array(z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        cta: buttonSchema
      })),
      cta: buttonSchema
    }).optional(),
    newsletter: z.object({
      title: z.string(),
      description: z.string(),
      button: buttonSchema,
      emailPlaceholder: z.string().optional()
    }).optional(),
    contact: z.object({
      title: z.string(),
      description: z.string(),
      backgroundColor: z.string().optional(),
      cardBackground: z.string().optional(),
      highlights: z.array(z.string()).optional(),
      form: z.object({
        name_label: z.string(),
        name_placeholder: z.string().optional(),
        lastname_label: z.string(),
        lastname_placeholder: z.string().optional(),
        email_label: z.string(),
        email_placeholder: z.string().optional(),
        phone_label: z.string(),
        phone_placeholder: z.string().optional(),
        role_label: z.string().optional(),
        role_placeholder: z.string().optional(),
        message_label: z.string(),
        message_placeholder: z.string().optional(),
        terms_label: z.string(),
        submit_label: z.string()
      }),
      scheduleLabel: z.string().optional(),
      scheduleText: z.string().optional(),
      phone: z.string().optional(),
      email: z.string().optional()
    }).optional(),
    footer: z.object({
      services_title: z.string(),
      links: z.array(buttonSchema)
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
