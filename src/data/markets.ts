import type { Lang } from "@/data/locales";

export type Market = {
  slug: string;
  countryCode: string;
  defaultLang: Lang;
  hreflang: string;
  languages: Lang[];
  city: string;
  label: Record<Lang, string>;
  hero: Record<Lang, string>;
};

export const MARKETS: Market[] = [
  {
    slug: "canarias",
    countryCode: "ES",
    defaultLang: "es",
    hreflang: "es-ES",
    languages: ["es", "en"],
    city: "Canary Islands",
    label: {
      es: "Canarias",
      en: "Canary Islands"
    },
    hero: {
      es: "Estrategia inmobiliaria y capital privado adaptados al mercado canario.",
      en: "Real estate and private capital strategy tailored for the Canary Islands."
    }
  },
  {
    slug: "madrid",
    countryCode: "ES",
    defaultLang: "es",
    hreflang: "es-ES",
    languages: ["es", "en"],
    city: "Madrid",
    label: {
      es: "Madrid",
      en: "Madrid"
    },
    hero: {
      es: "Posicionamiento premium para operaciones urbanas y corporativas en Madrid.",
      en: "Premium positioning for urban and corporate operations in Madrid."
    }
  },
  {
    slug: "miami",
    countryCode: "US",
    defaultLang: "en",
    hreflang: "en-US",
    languages: ["en", "es"],
    city: "Miami",
    label: {
      es: "Miami",
      en: "Miami"
    },
    hero: {
      es: "Puente estratégico entre capital internacional y oportunidades en Florida.",
      en: "A strategic bridge between international capital and Florida opportunities."
    }
  }
];

export function getMarketBySlug(slug: string) {
  return MARKETS.find((market) => market.slug === slug);
}

export function getMarketsForLang(lang: Lang) {
  return MARKETS.filter((market) => market.languages.includes(lang));
}

export function detectLangFromCountry(countryCode?: string): Lang {
  if (!countryCode) {
    return "es";
  }

  const englishCountries = new Set(["US", "GB", "IE", "CA", "AU", "NZ"]);
  return englishCountries.has(countryCode.toUpperCase()) ? "en" : "es";
}
