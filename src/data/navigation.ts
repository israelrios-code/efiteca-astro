import type { Lang } from "@/data/locales";

export type NavItem = {
  href: string;
  label: Record<Lang, string>;
};

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: {
      es: "Inicio",
      en: "Home"
    }
  },
  {
    href: "/news/",
    label: {
      es: "Noticias",
      en: "News"
    }
  }
];
