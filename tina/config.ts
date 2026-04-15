// @ts-nocheck
import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const linkFields = [
  { type: "string", name: "label", label: "Label", required: true },
  { type: "string", name: "href", label: "Link", required: true }
];

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        format: "md",
        ui: {
          router: ({ document }: { document: { _sys: { filename: string } } }) => {
            const filename = document._sys.filename;
            const lang = document._sys.filename.endsWith("-en") ? "en" : "es";
            if (filename.startsWith("solutions-")) {
              return `/${lang}/soluciones-vivienda/`;
            }
            if (filename.startsWith("about-")) {
              return `/${lang}/sobre-nosotros/`;
            }
            if (filename.startsWith("contact-")) {
              return `/${lang}/contacto/`;
            }
            if (filename.startsWith("blog-")) {
              return `/${lang}/news/`;
            }
            if (filename.startsWith("simulator-")) {
              return `/${lang}/simulador-hipoteca/`;
            }
            return `/${lang}/`;
          }
        },
        fields: [
          {
            type: "string",
            name: "lang",
            label: "Language",
            options: ["es", "en"],
            required: true
          },
          {
            type: "string",
            name: "title",
            label: "Internal title",
            required: true
          },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "SEO title", required: true },
              {
                type: "string",
                name: "description",
                label: "SEO description",
                ui: { component: "textarea" },
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "title_part1", label: "Title part 1" },
              { type: "string", name: "title_part2", label: "Title part 2" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "background_desktop", label: "Background desktop" },
              { type: "image", name: "background_mobile", label: "Background mobile" },
              {
                type: "object",
                name: "cta",
                label: "CTA",
                fields: linkFields
              }
            ]
          },
          {
            type: "object",
            name: "aboutHero",
            label: "About hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "highlight", label: "Highlight" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "texture", label: "Background texture" },
              { type: "image", name: "outlineImage", label: "Outline image" },
              { type: "object", name: "cta", label: "CTA", fields: linkFields }
            ]
          },
          {
            type: "object",
            name: "contactHero",
            label: "Contact hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "highlight", label: "Highlight" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "object", name: "primaryCta", label: "Primary CTA", fields: linkFields },
              { type: "object", name: "secondaryCta", label: "Secondary CTA", fields: linkFields }
            ]
          },
          {
            type: "object",
            name: "newsLanding",
            label: "News landing",
            fields: [
              { type: "string", name: "heroTitle", label: "Hero title" },
              { type: "string", name: "heroHighlight", label: "Hero highlight" },
              { type: "string", name: "heroDescription", label: "Hero description", ui: { component: "textarea" } },
              { type: "string", name: "listingTitle", label: "Listing title" },
              { type: "string", name: "listingDescription", label: "Listing description", ui: { component: "textarea" } }
            ]
          },
          {
            type: "object",
            name: "contactIntro",
            label: "Contact intro",
            fields: [
              { type: "string", name: "pretitle", label: "Pretitle" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "highlight", label: "Highlight" },
              { type: "string", name: "bulletsTitle", label: "Bullets title" },
              { type: "string", name: "bullets", label: "Bullets", list: true },
              { type: "string", name: "footnote", label: "Footnote", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "floatingLabel", label: "Floating label" }
            ]
          },
          {
            type: "object",
            name: "diagnosticSteps",
            label: "Diagnostic steps",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description" },
              { type: "string", name: "footnote", label: "Footnote" },
              {
                type: "object",
                name: "items",
                label: "Steps",
                list: true,
                ui: {
                  itemProps: (item: { title?: string; number?: number }) => ({
                    label: item?.title || `Step ${item?.number ?? ""}`.trim()
                  })
                },
                fields: [
                  { type: "number", name: "number", label: "Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "trajectory",
            label: "Trajectory",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "highlight", label: "Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "badgeLabel", label: "Badge label" },
              { type: "string", name: "badgeText", label: "Badge text" }
            ]
          },
          {
            type: "object",
            name: "purposeSection",
            label: "Purpose",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "highlight", label: "Highlight" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "bullets", label: "Bullets", list: true }
            ]
          },
          {
            type: "object",
            name: "services",
            label: "Services",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Cards",
                list: true,
                ui: {
                  itemProps: (item: { title?: string }) => ({
                    label: item?.title || "Service"
                  })
                },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "object", name: "button", label: "Button", fields: linkFields }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "simulator",
            label: "Simulator",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "secondaryDescription", label: "Secondary description", ui: { component: "textarea" } },
              { type: "string", name: "noteTitle", label: "Note title" },
              { type: "string", name: "noteText", label: "Note text", ui: { component: "textarea" } },
              { type: "string", name: "offerBadge", label: "Offer badge" },
              { type: "string", name: "calculatorTitle", label: "Calculator title" },
              { type: "string", name: "resultLabel", label: "Result label" },
              { type: "string", name: "resultValue", label: "Result value" },
              { type: "object", name: "cta", label: "CTA", fields: linkFields },
              {
                type: "object",
                name: "sliders",
                label: "Sliders",
                list: true,
                ui: {
                  itemProps: (item: { label?: string }) => ({
                    label: item?.label || "Slider"
                  })
                },
                fields: [
                  { type: "string", name: "label", label: "Label" },
                  { type: "string", name: "value", label: "Value" },
                  { type: "number", name: "progress", label: "Progress" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "requirementsBanner",
            label: "Requirements banner",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "items",
                label: "Requirements",
                list: true
              },
              { type: "image", name: "image", label: "Image" },
              { type: "object", name: "button", label: "Button", fields: linkFields }
            ]
          },
          {
            type: "object",
            name: "calculatorEmbed",
            label: "Calculator embed",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "src", label: "Source URL" }
            ]
          },
          {
            type: "object",
            name: "whoIsItFor",
            label: "Audience",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Audience cards",
                list: true,
                ui: {
                  itemProps: (item: { title?: string }) => ({
                    label: item?.title || "Audience item"
                  })
                },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "image", name: "image", label: "Image" }
                ]
              },
              {
                type: "object",
                name: "process",
                label: "Process panel",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "requirements",
                    label: "Requirements",
                    list: true
                  },
                  { type: "image", name: "image", label: "Image" },
                  {
                    type: "object",
                    name: "pricing",
                    label: "Pricing card",
                    fields: [
                      { type: "string", name: "title", label: "Title" },
                      { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                      { type: "string", name: "highlight", label: "Highlight" },
                      { type: "object", name: "button", label: "Button", fields: linkFields }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "howItWorks",
            label: "How it works",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "object", name: "cta", label: "CTA", fields: linkFields },
              {
                type: "object",
                name: "items",
                label: "Steps",
                list: true,
                ui: {
                  itemProps: (item: { title?: string; number?: string }) => ({
                    label: item?.title || `Step ${item?.number ?? ""}`.trim()
                  })
                },
                fields: [
                  { type: "string", name: "number", label: "Number" },
                  { type: "image", name: "icon", label: "Icon" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "steps",
            label: "Steps",
            fields: [
              { type: "string", name: "eyebrow", label: "Eyebrow" },
              { type: "string", name: "title", label: "Title" },
              { type: "image", name: "image", label: "Image" },
              {
                type: "object",
                name: "items",
                label: "Steps",
                list: true,
                ui: {
                  itemProps: (item: { title?: string; number?: number }) => ({
                    label: item?.title || `Step ${item?.number ?? ""}`.trim()
                  })
                },
                fields: [
                  { type: "number", name: "number", label: "Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "actionCta",
            label: "Action CTA",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "object", name: "button", label: "Button", fields: linkFields }
            ]
          },
          {
            type: "object",
            name: "shortcutCta",
            label: "Shortcut CTA",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "object", name: "button", label: "Button", fields: linkFields },
              { type: "image", name: "image", label: "Image" },
              { type: "image", name: "overlayImage", label: "Overlay image" },
              { type: "image", name: "accentImage", label: "Accent image" }
            ]
          },
          {
            type: "object",
            name: "benefits",
            label: "Benefits",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "ctaText", label: "CTA text" },
              { type: "string", name: "ctaLink", label: "CTA link" },
              {
                type: "object",
                name: "items",
                label: "Benefits",
                list: true,
                fields: [
                  { type: "image", name: "icon", label: "Icon" },
                  { type: "string", name: "text", label: "Text" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "metrics",
            label: "Metrics",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Metrics",
                list: true,
                ui: {
                  itemProps: (item: { title?: string; value?: string }) => ({
                    label: item?.title || item?.value || "Metric"
                  })
                },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "value", label: "Value" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "guides",
            label: "Guides",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Guide cards",
                list: true,
                ui: {
                  itemProps: (item: { title?: string }) => ({
                    label: item?.title || "Guide"
                  })
                },
                fields: [
                  { type: "string", name: "title", label: "Title", ui: { component: "textarea" } },
                  { type: "object", name: "cta", label: "CTA", fields: linkFields }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "testimonials",
            label: "Testimonials",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "backgroundColor", label: "Background color" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Testimonials",
                list: true,
                ui: {
                  itemProps: (item: { name?: string }) => ({
                    label: item?.name || "Testimonial"
                  })
                },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "role", label: "Role" },
                  { type: "string", name: "text", label: "Text", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Avatar" },
                  { type: "number", name: "stars", label: "Stars" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "certifications",
            label: "Certifications",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "logoImage", label: "Logo image" }
            ]
          },
          {
            type: "object",
            name: "recognitions",
            label: "Recognitions",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "texture", label: "Background texture" },
              {
                type: "object",
                name: "items",
                label: "Recognition cards",
                list: true,
                ui: {
                  itemProps: (item: { title?: string }) => ({
                    label: item?.title || "Recognition"
                  })
                },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "companyInfo",
            label: "Company info",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "items", label: "Paragraphs", list: true },
              { type: "image", name: "image", label: "Image" },
              {
                type: "object",
                name: "legalLinks",
                label: "Legal links",
                list: true,
                ui: {
                  itemProps: (item: { label?: string }) => ({
                    label: item?.label || "Legal link"
                  })
                },
                fields: linkFields
              }
            ]
          },
          {
            type: "object",
            name: "about",
            label: "About",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "image", label: "Image" },
              { type: "string", name: "badgeLabel", label: "Badge label" },
              { type: "string", name: "badgeText", label: "Badge text" },
              { type: "object", name: "button", label: "Button", fields: linkFields }
            ]
          },
          {
            type: "object",
            name: "partners",
            label: "Partners",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Partners",
                list: true,
                fields: [{ type: "string", name: "name", label: "Name" }]
              }
            ]
          },
          {
            type: "object",
            name: "faq",
            label: "FAQ",
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "object",
                name: "items",
                label: "Questions",
                list: true,
                ui: {
                  itemProps: (item: { question?: string }) => ({
                    label: item?.question || "Question"
                  })
                },
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "comparison",
            label: "Comparison",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "leftTitle", label: "Left title" },
              { type: "string", name: "rightTitle", label: "Right title" },
              { type: "string", name: "leftItems", label: "Left items", list: true },
              { type: "string", name: "rightItems", label: "Right items", list: true },
              { type: "object", name: "cta", label: "CTA", fields: linkFields }
            ]
          },
          {
            type: "object",
            name: "locations",
            label: "Locations",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              {
                type: "object",
                name: "items",
                label: "Location cards",
                list: true,
                ui: {
                  itemProps: (item: { city?: string }) => ({
                    label: item?.city || "Location"
                  })
                },
                fields: [
                  { type: "string", name: "city", label: "City" },
                  { type: "string", name: "address", label: "Address", ui: { component: "textarea" } },
                  { type: "string", name: "summary", label: "SEO summary", ui: { component: "textarea" } },
                  { type: "string", name: "seoLabel", label: "SEO CTA label" },
                  { type: "image", name: "image", label: "Image" },
                  { type: "object", name: "cta", label: "Card CTA", fields: linkFields }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "locationsShowcase",
            label: "Locations showcase",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "image", name: "mapImage", label: "Map image" },
              {
                type: "object",
                name: "cta",
                label: "CTA card",
                fields: [
                  { type: "string", name: "title", label: "Card title" },
                  { type: "string", name: "description", label: "Card description", ui: { component: "textarea" } },
                  { type: "object", name: "button", label: "Button", fields: linkFields }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "blog",
            label: "Blog",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
              { type: "object", name: "cta", label: "Section CTA", fields: linkFields },
              {
                type: "object",
                name: "items",
                label: "Posts",
                list: true,
                ui: {
                  itemProps: (item: { title?: string }) => ({
                    label: item?.title || "Post"
                  })
                },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
                  { type: "image", name: "image", label: "Image" },
                  { type: "object", name: "cta", label: "Post CTA", fields: linkFields }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "newsletter",
            label: "Newsletter",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "emailPlaceholder", label: "Email placeholder" },
              { type: "object", name: "button", label: "Button", fields: linkFields }
            ]
          },
          {
            type: "object",
            name: "contact",
            label: "Contact",
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
              { type: "string", name: "backgroundColor", label: "Background color" },
              { type: "string", name: "cardBackground", label: "Card background" },
              {
                type: "string",
                name: "highlights",
                label: "Highlights",
                list: true
              },
              {
                type: "object",
                name: "form",
                label: "Form labels",
                fields: [
                  { type: "string", name: "name_label", label: "Name label" },
                  { type: "string", name: "name_placeholder", label: "Name placeholder" },
                  { type: "string", name: "lastname_label", label: "Last name label" },
                  { type: "string", name: "lastname_placeholder", label: "Last name placeholder" },
                  { type: "string", name: "email_label", label: "Email label" },
                  { type: "string", name: "email_placeholder", label: "Email placeholder" },
                  { type: "string", name: "phone_label", label: "Phone label" },
                  { type: "string", name: "phone_placeholder", label: "Phone placeholder" },
                  { type: "string", name: "role_label", label: "Role label" },
                  { type: "string", name: "role_placeholder", label: "Role placeholder" },
                  { type: "string", name: "message_label", label: "Message label" },
                  { type: "string", name: "message_placeholder", label: "Message placeholder" },
                  { type: "string", name: "terms_label", label: "Terms label" },
                  { type: "string", name: "submit_label", label: "Submit label" }
                ]
              },
              { type: "string", name: "scheduleLabel", label: "Schedule label" },
              { type: "string", name: "scheduleText", label: "Schedule text", ui: { component: "textarea" } },
              { type: "string", name: "phone", label: "Phone" },
              { type: "string", name: "email", label: "Email" }
            ]
          },
          {
            type: "object",
            name: "footer",
            label: "Footer",
            fields: [
              { type: "string", name: "services_title", label: "Services title" },
              {
                type: "object",
                name: "links",
                label: "Footer links",
                list: true,
                fields: linkFields
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true
          }
        ]
      },
      {
        name: "news",
        label: "News",
        path: "src/content/news",
        format: "mdx",
        fields: [
          { type: "string", name: "lang", label: "Language", options: ["es", "en"], required: true },
          { type: "string", name: "market", label: "Market" },
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "excerpt", label: "Excerpt", ui: { component: "textarea" }, required: true },
          { type: "datetime", name: "publishedAt", label: "Published at", required: true },
          { type: "datetime", name: "updatedAt", label: "Updated at" },
          { type: "string", name: "category", label: "Category", options: ["corporate", "market", "insight"], required: true },
          { type: "boolean", name: "featured", label: "Featured" },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "SEO title" },
              { type: "string", name: "description", label: "SEO description", ui: { component: "textarea" } }
            ]
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      },
      {
        name: "markets",
        label: "Markets",
        path: "src/content/markets",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "lang", label: "Language", options: ["es", "en"], required: true },
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              { type: "string", name: "title", label: "SEO title" },
              { type: "string", name: "description", label: "SEO description", ui: { component: "textarea" } }
            ]
          },
          { type: "rich-text", name: "body", label: "Body", isBody: true }
        ]
      }
    ]
  }
});
