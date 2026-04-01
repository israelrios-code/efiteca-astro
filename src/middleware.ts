import { defineMiddleware } from "astro:middleware";
import { DEFAULT_LANG, isLang } from "@/data/locales";
import { detectLangFromCountry } from "@/data/markets";

const BOT_PATTERN =
  /bot|crawler|spider|crawling|googlebot|bingbot|duckduckbot|slurp/i;

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  if (pathname !== "/") {
    return next();
  }

  const userAgent = context.request.headers.get("user-agent") ?? "";
  if (BOT_PATTERN.test(userAgent)) {
    return next();
  }

  const cookieLang = context.cookies.get("sun_locale")?.value;
  const cookieTarget = cookieLang && isLang(cookieLang) ? cookieLang : null;
  const resolvedLang =
    cookieTarget ??
    detectLangFromCountry(context.request.headers.get("x-vercel-ip-country") ?? undefined) ??
    DEFAULT_LANG;

  context.cookies.set("sun_locale", resolvedLang, {
    path: "/",
    sameSite: "lax",
    httpOnly: false,
    secure: true,
    maxAge: 60 * 60 * 24 * 365
  });

  return context.redirect(`/${resolvedLang}/`, 302);
});
