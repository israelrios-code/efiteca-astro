import { DEFAULT_LANG, isLang, type Lang } from "@/data/locales";

export function withLang(lang: Lang, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized === "/" ? "/" : normalized}`;
}

export function stripLangFromPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (!segments.length) {
    return "/";
  }

  if (isLang(segments[0] ?? "")) {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join("/")}/` : "/";
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function getLangFromPath(pathname: string): Lang {
  const [first] = pathname.split("/").filter(Boolean);
  return first && isLang(first) ? first : DEFAULT_LANG;
}
