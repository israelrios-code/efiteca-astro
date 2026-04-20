import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";

function fieldFor(object: any, property: string) {
  return object ? tinaField(object, property) : undefined;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 13.66 3.45 15.22 4.23 16.56L3 21L7.58 19.8C8.9 20.58 10.4 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8.8C9 12.07 11.74 14.8 15 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14.2 11.4L15.9 10.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-[16px] w-[16px]" aria-hidden="true">
      <path d="M4.2 10H15.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10.8 5.6L15.2 10L10.8 14.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href="#newsletter"
      className="fixed bottom-[24px] right-[24px] z-40 inline-flex items-center gap-[8px] rounded-full bg-[#25d366] px-[20px] py-[12px] text-[15px] font-bold text-white no-underline shadow-[0px_8px_24px_rgba(37,211,102,0.4)]"
    >
      <WhatsAppIcon />
      WhatsApp
    </a>
  );
}

function HeroSection({ page, editable }: { page: any; editable?: any }) {
  const section = page?.newsLanding;
  if (!section) return null;

  return (
    <section className="relative overflow-hidden bg-[#7c42f3] px-[20px] py-[72px] md:px-[40px] md:py-[110px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "newsLanding")}>
      <img src="/images/about-hero-texture.webp" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_24%_112%,rgba(8,8,19,0.42),transparent_34%)]" />
      <img src="/images/about-hero-outline.svg" alt="" className="pointer-events-none absolute bottom-[-232px] right-[-300px] hidden w-[900px] max-w-none opacity-80 lg:block xl:bottom-[-280px] xl:right-[-220px] xl:w-[1040px]" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[38px] font-bold leading-[1.08] tracking-[0.2px] text-white md:text-[56px]">
          <span data-tina-field={fieldFor(editable?.newsLanding, "heroTitle")}>{section.heroTitle} </span>
          {section.heroHighlight ? (
            <span className="text-[#fcc63d]" data-tina-field={fieldFor(editable?.newsLanding, "heroHighlight")}>
              {section.heroHighlight}
            </span>
          ) : null}
        </h1>
        <p className="mt-[18px] max-w-[980px] text-[14px] leading-[1.2] text-white/90 md:text-[16px]" data-tina-field={fieldFor(editable?.newsLanding, "heroDescription")}>
          {section.heroDescription}
        </p>
      </div>
    </section>
  );
}

function ArticleGrid({ page, editable, lang, newsItems }: { page: any; editable?: any; lang: "es" | "en"; newsItems?: Array<{ title: string; description: string; image?: string; href: string }> }) {
  const section = page?.newsLanding;
  const items = newsItems && newsItems.length > 0
    ? newsItems
    : (page?.blog?.items || []).map((item: any) => ({ title: item.title, description: item.description, image: item.image, href: item.cta?.href || "#" }));

  if (!items.length || !section) return null;

  const readLabel = lang === "es" ? "Ver noticia" : "Read article";

  return (
    <section className="bg-[#fbf7ec] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]">
      <div className="flex w-full flex-col">
        <div className="w-full max-w-[1100px] mb-[40px] md:mb-[64px]" data-tina-field={fieldFor(editable, "newsLanding")}>
          <h2 className="text-[32px] font-bold leading-[1.1] text-[#080813] md:text-[40px] xl:text-[48px]" data-tina-field={fieldFor(editable?.newsLanding, "listingTitle")}>
            {section.listingTitle}
          </h2>
          <p className="mt-[20px] text-[16px] leading-[1.5] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.newsLanding, "listingDescription")}>
            {section.listingDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] md:gap-[32px] items-start w-full">
          {items.map((item: any, index: number) => (
            <article key={`${item.title}-${index}`} className="group flex flex-col items-start w-full transition-transform duration-300 hover:-translate-y-[4px]">
              <a href={item.href || "#"} className="block overflow-hidden rounded-[24px] w-full mb-[20px]">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[240px] md:h-[280px] xl:h-[320px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                ) : (
                  <div className="h-[240px] md:h-[280px] xl:h-[320px] w-full bg-[linear-gradient(135deg,rgba(137,73,255,0.15),rgba(252,198,61,0.15))] flex items-center justify-center text-[48px]">
                    🏠
                  </div>
                )}
              </a>
              <div className="flex flex-1 flex-col w-full">
                <h3 className="text-[24px] md:text-[28px] font-bold leading-[1.1] text-[#080813] mb-[12px]">
                  <a href={item.href || "#"}>{item.title}</a>
                </h3>
                <p className="text-[16px] leading-[1.4] text-[#364153] mb-[20px] flex-1">{item.description}</p>
                <div className="flex items-center gap-[8px]">
                  <a
                    href={item.href || "#"}
                    className="inline-flex items-center font-bold text-[18px] text-[#8949ff] no-underline transition-colors duration-300 group-hover:text-[#c993ff]"
                  >
                    {readLabel}
                  </a>
                  <div className="transition-transform duration-300 group-hover:translate-x-[4px] text-[#8949ff] group-hover:text-[#c993ff]">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterAndCta({ page, editable }: { page: any; editable?: any }) {
  const newsletter = page?.newsletter;
  const actionCta = page?.actionCta;
  if (!newsletter && !actionCta) return null;

  return (
    <section className="bg-[linear-gradient(90deg,rgba(137,73,255,0.92)_0%,rgba(103,67,252,0.92)_38%,rgba(137,73,255,0.72)_100%)] px-[20px] py-[64px] md:px-[40px] md:py-[96px] xl:px-[160px] 2xl:px-[160px]">
      <div className="flex w-full flex-col items-center gap-[56px]">
        {newsletter ? (
          <div id="newsletter" className="w-full max-w-[920px] text-center" data-tina-field={fieldFor(editable, "newsletter")}>

            <h2 className="mt-[24px] text-[34px] font-bold leading-[1.1] text-white md:text-[40px]">
              <span data-tina-field={fieldFor(editable?.newsletter, "title")}>{newsletter.title} </span>
            </h2>
            <p className="mx-auto mt-[16px] max-w-[840px] text-[15px] leading-[1.2] text-white/90" data-tina-field={fieldFor(editable?.newsletter, "description")}>
              {newsletter.description}
            </p>
            <form
              className="mt-[28px] flex flex-col items-stretch gap-[16px] md:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder={newsletter.emailPlaceholder || "tu@email.com"}
                className="flex-1 rounded-[16px] border border-[#e2e8f0] bg-white px-[24px] py-[16px] text-left text-[16px] text-[#080813] placeholder:text-[rgba(8,8,19,0.5)] outline-none focus:border-[#6941c6]"
                data-tina-field={fieldFor(editable?.newsletter, "emailPlaceholder")}
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#fcc63d] px-[32px] py-[16px] text-[18px] font-bold uppercase tracking-[1.8px] text-[#080813] shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] transition-all duration-300 hover:bg-[#ffe07e] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.4)] cursor-pointer border-none"
                data-tina-field={fieldFor(editable?.newsletter?.button, "label")}
              >
                {newsletter.button?.label}
              </button>
            </form>
            <p className="mt-[18px] text-[15px] leading-[1.1] text-white/80">Sin spam. Puedes darte de baja cuando quieras.</p>
          </div>
        ) : null}

        {actionCta ? (
          <div className="w-full rounded-[48px] bg-[#0f172b] px-[28px] py-[40px] md:px-[56px] md:py-[56px]" data-tina-field={fieldFor(editable, "actionCta")}>
            <div className="flex flex-col gap-[28px] lg:flex-row lg:items-center lg:justify-between">
              <p className="max-w-[760px] text-[32px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.actionCta, "title")}>
                {actionCta.title}
              </p>
              <a
                href={actionCta.button?.href || "#"}
                className="inline-flex shrink-0 items-center justify-center self-center whitespace-nowrap rounded-full bg-[#fcc63d] px-[28px] py-[18px] text-[14px] font-bold uppercase tracking-[1px] text-[#080813] no-underline shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] md:px-[40px] md:py-[24px] md:text-[16px] md:tracking-[1.5px] transition-all duration-300 hover:bg-[#ffe07e] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.4)]"
                data-tina-field={fieldFor(editable?.actionCta?.button, "label")}
              >
                {actionCta.button?.label}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default function ReactBlogPage({
  content,
  data,
  query,
  variables,
  lang,
  newsItems,
}: {
  content: any;
  data?: any;
  query?: string;
  variables?: Record<string, any>;
  lang: "es" | "en";
  newsItems?: Array<{ title: string; description: string; image?: string; href: string }>;
}) {
  const tinaState = query && variables && data ? useTina({ query, variables, data }) : null;
  const page = tinaState?.data?.pages ?? content;
  const editable = tinaState?.data?.pages ?? null;

  return (
    <div className="bg-white">
      <FloatingWhatsApp />
      <HeroSection page={page} editable={editable} />
      <ArticleGrid page={page} editable={editable} lang={lang} newsItems={newsItems} />
      <NewsletterAndCta page={page} editable={editable} />
    </div>
  );
}
