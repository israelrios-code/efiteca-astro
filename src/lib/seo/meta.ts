import { LOCALES, type Lang } from "@/data/locales";
import { withLang } from "@/lib/i18n/routes";

export type AlternateLink = {
  href: string;
  hreflang: string;
};

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  alternates?: AlternateLink[];
};

export function getSiteUrl() {
  return import.meta.env.SITE_URL ?? "https://www.efiteca.com";
}

export function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

export function buildLanguageAlternates(path: string): AlternateLink[] {
  return [
    ...LOCALES.map((locale) => ({
      hreflang: locale.htmlLang,
      href: absoluteUrl(withLang(locale.code, path))
    })),
    {
      hreflang: "x-default",
      href: absoluteUrl(withLang("es", path))
    }
  ];
}

export function buildRegionAlternates(
  lang: Lang,
  region: string,
  suffix = "/"
): AlternateLink[] {
  const path = `/${region}${suffix}`;

  return [
    {
      hreflang: lang === "es" ? "es-ES" : "en-US",
      href: absoluteUrl(withLang(lang, path))
    },
    {
      hreflang: "x-default",
      href: absoluteUrl(withLang(lang, path))
    }
  ];
}
