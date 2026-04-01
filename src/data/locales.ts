export const DEFAULT_LANG = "es" as const;

export const LOCALES = [
  {
    code: "es",
    label: "Español",
    htmlLang: "es-ES"
  },
  {
    code: "en",
    label: "English",
    htmlLang: "en"
  }
] as const;

export type Lang = (typeof LOCALES)[number]["code"];

export function isLang(value: string): value is Lang {
  return LOCALES.some((locale) => locale.code === value);
}

export function getLocale(code: Lang) {
  return LOCALES.find((locale) => locale.code === code) ?? LOCALES[0];
}
