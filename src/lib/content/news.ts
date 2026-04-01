import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "@/data/locales";

export async function getNewsForLang(lang: Lang) {
  const entries = await getCollection("news", ({ data }: CollectionEntry<"news">) => data.lang === lang);
  return entries.sort(
    (a: CollectionEntry<"news">, b: CollectionEntry<"news">) =>
      b.data.publishedAt.localeCompare(a.data.publishedAt)
  );
}

export async function getLatestNews(lang: Lang, limit = 3) {
  const entries = await getNewsForLang(lang);
  return entries.slice(0, limit);
}
