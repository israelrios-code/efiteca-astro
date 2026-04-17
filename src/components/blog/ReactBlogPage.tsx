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
    <section className="bg-[linear-gradient(90deg,#4f3bf9_0%,#7a49ff_42%,#0f1730_100%)] px-[20px] py-[72px] md:px-[48px] md:py-[110px] xl:px-[230px]" data-tina-field={fieldFor(editable, "newsLanding")}>
      <div className="mx-auto flex max-w-[1296px] flex-col items-center text-center">
        <h1 className="text-[38px] font-bold leading-[1.08] tracking-[0.2px] text-white md:text-[56px]">
          <span data-tina-field={fieldFor(editable?.newsLanding, "heroTitle")}>{section.heroTitle} </span>
          {section.heroHighlight ? (
            <span className="text-[#c993ff]" data-tina-field={fieldFor(editable?.newsLanding, "heroHighlight")}>
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

function ArticleGrid({ page, editable, lang }: { page: any; editable?: any; lang: "es" | "en" }) {
  const blog = page?.blog;
  const section = page?.newsLanding;
  if (!blog?.items?.length || !section) return null;

  const readLabel = lang === "es" ? "Ver noticia" : "Read article";

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]">
      <div className="mx-auto max-w-[1296px]">
        <div className="max-w-[1296px]" data-tina-field={fieldFor(editable, "newsLanding")}>
          <h2 className="text-[30px] font-normal leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.newsLanding, "listingTitle")}>
            {section.listingTitle}
          </h2>
          <p className="mt-[24px] max-w-[1296px] text-[15px] leading-[1.2] text-[#101828]" data-tina-field={fieldFor(editable?.newsLanding, "listingDescription")}>
            {section.listingDescription}
          </p>
        </div>

        <div className="mt-[40px] grid grid-cols-1 gap-x-[40px] gap-y-[48px] md:grid-cols-2 xl:grid-cols-3">
          {(blog.items || []).map((item: any, index: number) => (
            <article key={`${item.title}-${index}`} className="flex flex-col gap-[20px]" data-tina-field={fieldFor(editable?.blog?.items?.[index], "title")}>
              <a href={item.cta?.href || "#"} className="block overflow-hidden rounded-[24px]">
                <img src={item.image} alt={item.title} className="h-[320px] w-full object-cover" data-tina-field={fieldFor(editable?.blog?.items?.[index], "image")} />
              </a>
              <div>
                <h3 className="text-[28px] font-bold leading-[1.1] text-[#080813]">{item.title}</h3>
                <p className="mt-[12px] text-[16px] leading-[1.2] text-[#080813]">{item.description}</p>
                <a
                  href={item.cta?.href || "#"}
                  className="mt-[18px] inline-flex items-center gap-[8px] text-[18px] font-bold leading-[1.1] text-[#8949ff] no-underline"
                  data-tina-field={fieldFor(editable?.blog?.items?.[index], "cta")}
                >
                  {item.cta?.label || readLabel}
                  <ArrowIcon />
                </a>
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
    <section className="bg-[linear-gradient(90deg,rgba(137,73,255,0.92)_0%,rgba(103,67,252,0.92)_38%,rgba(137,73,255,0.72)_100%)] px-[20px] py-[64px] md:px-[48px] md:py-[96px] xl:px-[230px]">
      <div className="mx-auto flex max-w-[1296px] flex-col items-center gap-[56px]">
        {newsletter ? (
          <div id="newsletter" className="w-full max-w-[920px] text-center" data-tina-field={fieldFor(editable, "newsletter")}>
            <div className="mx-auto inline-flex items-center gap-[10px] rounded-full border border-[#c993ff] bg-white/5 px-[16px] py-[8px]">
              <span className="h-[8px] w-[8px] rounded-full bg-[#c993ff]" />
              <span className="text-[12px] font-bold leading-[1.1] text-[#c993ff]">Newsletter</span>
            </div>
            <h2 className="mt-[24px] text-[34px] font-bold leading-[1.1] text-white md:text-[40px]">
              <span data-tina-field={fieldFor(editable?.newsletter, "title")}>{newsletter.title} </span>
            </h2>
            <p className="mx-auto mt-[16px] max-w-[840px] text-[15px] leading-[1.2] text-white/90" data-tina-field={fieldFor(editable?.newsletter, "description")}>
              {newsletter.description}
            </p>
            <div className="mt-[28px] flex flex-col items-stretch gap-[16px] md:flex-row">
              <div className="flex-1 rounded-[16px] border border-[#e2e8f0] bg-white px-[24px] py-[16px] text-left text-[16px] text-[rgba(8,8,19,0.5)]" data-tina-field={fieldFor(editable?.newsletter, "emailPlaceholder")}>
                {newsletter.emailPlaceholder || "tu@email.com"}
              </div>
              <a
                href={newsletter.button?.href || "#"}
                className="inline-flex items-center justify-center rounded-full bg-[#fcc63d] px-[32px] py-[16px] text-[18px] font-bold uppercase tracking-[1.8px] text-[#101828] no-underline shadow-[0px_10px_15px_rgba(252,198,61,0.12),0px_4px_6px_rgba(252,198,61,0.2)]"
                data-tina-field={fieldFor(editable?.newsletter?.button, "label")}
              >
                {newsletter.button?.label}
              </a>
            </div>
            <p className="mt-[18px] text-[15px] leading-[1.1] text-white/80">Sin spam. Puedes darte de baja cuando ¿quéieras.</p>
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
                className="inline-flex items-center justify-center self-start rounded-full bg-[#fcc63d] px-[32px] py-[18px] text-[16px] font-bold uppercase tracking-[1.8px] text-[#101828] no-underline shadow-[0px_25px_50px_rgba(252,198,61,0.3)] md:px-[40px] md:py-[24px] md:text-[18px]"
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
  lang
}: {
  content: any;
  data?: any;
  query?: string;
  variables?: Record<string, any>;
  lang: "es" | "en";
}) {
  const tinaState = query && variables && data ? useTina({ query, variables, data }) : null;
  const page = tinaState?.data?.pages ?? content;
  const editable = tinaState?.data?.pages ?? null;

  return (
    <div className="bg-white">
      <FloatingWhatsApp />
      <HeroSection page={page} editable={editable} />
      <ArticleGrid page={page} editable={editable} lang={lang} />
      <NewsletterAndCta page={page} editable={editable} />
    </div>
  );
}
