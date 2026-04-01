import type { APIRoute } from "astro";
import { LOCALES } from "@/data/locales";
import { MARKETS } from "@/data/markets";
import { getCollection, type CollectionEntry } from "astro:content";
import { absoluteUrl } from "@/lib/seo/meta";

export const prerender = true;

export const GET: APIRoute = async () => {
  const newsEntries = await getCollection("news");

  const urls = [
    ...LOCALES.flatMap((locale) => [
      absoluteUrl(`/${locale.code}/`),
      absoluteUrl(`/${locale.code}/news/`)
    ]),
    ...MARKETS.flatMap((market) =>
      market.languages.map((lang) => absoluteUrl(`/${lang}/${market.slug}/`))
    ),
    ...newsEntries.map((entry: CollectionEntry<"news">) =>
      absoluteUrl(`/${entry.data.lang}/news/${entry.slug}/`)
    )
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
