import type { Lang } from "@/data/locales";

export function formatDate(dateString: string, lang: Lang) {
  const locale = lang === "es" ? "es-ES" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "long"
  }).format(new Date(dateString));
}
