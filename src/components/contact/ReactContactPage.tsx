import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { ContactSection } from "@/components/about/ReactAboutPage";
import { FaqSection, Frame60, SharedHomeBenefitsBlock } from "@/components/home/ReactHome";

function fieldFor(object: any, property: string) {
  return object ? tinaField(object, property) : undefined;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
      <path d="M6 12.5L10 16.5L18 8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
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

function ContactHeroSection({ content, editable }: { content: any; editable?: any }) {
  const hero = content?.contactHero;
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,#4f3bf9_0%,#8949ff_48%,#b48eff_100%)] px-[20px] py-[52px] md:px-[48px] md:py-[72px] xl:px-[230px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.08),transparent_28%)]" />
      <div className="relative mx-auto flex max-w-[1460px] flex-col items-center text-center">
        <div className="inline-flex items-center gap-[10px] rounded-full border border-white/30 bg-white/10 px-[14px] py-[6px]">
          <span className="h-[8px] w-[8px] rounded-full bg-white/80" />
          <span className="text-[12px] font-bold leading-[1.1] text-white" data-tina-field={fieldFor(editable?.contactHero, "eyebrow")}>
            {hero.eyebrow}
          </span>
        </div>
        <h1 className="mt-[20px] max-w-[820px] text-[34px] font-bold leading-[1.08] text-white md:text-[56px]">
          <span data-tina-field={fieldFor(editable?.contactHero, "title")}>{hero.title} </span>
          {hero.highlight ? (
            <span className="text-[#cda4ff]" data-tina-field={fieldFor(editable?.contactHero, "highlight")}>
              {hero.highlight}
            </span>
          ) : null}
        </h1>
        <p className="mt-[16px] max-w-[820px] text-[14px] leading-[1.2] text-white/90 md:text-[16px]" data-tina-field={fieldFor(editable?.contactHero, "description")}>
          {hero.description}
        </p>
        <div className="mt-[24px] flex w-full flex-col items-center justify-center gap-[12px] sm:flex-row">
          <a
            href={hero.primaryCta?.href || "#contacto"}
            className="inline-flex items-center justify-center rounded-full bg-[#fcc63d] px-[24px] py-[14px] text-[12px] font-bold uppercase tracking-[1.5px] text-[#080813] no-underline md:px-[32px] md:py-[16px]"
            data-tina-field={fieldFor(editable?.contactHero?.primaryCta, "label")}
          >
            {hero.primaryCta?.label}
          </a>
          {hero.secondaryCta ? (
            <a
              href={hero.secondaryCta.href || "#whatsapp"}
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white px-[24px] py-[14px] text-[12px] font-bold uppercase tracking-[1.5px] text-[#4f3bf9] no-underline md:px-[32px] md:py-[16px]"
              data-tina-field={fieldFor(editable?.contactHero?.secondaryCta, "label")}
            >
              {hero.secondaryCta.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ContactIntroSection({ content, editable }: { content: any; editable?: any }) {
  const section = content?.contactIntro;
  if (!section) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]">
      <div className="mx-auto grid max-w-[1460px] grid-cols-1 items-center gap-[32px] lg:grid-cols-[540px_minmax(0,1fr)] lg:gap-[80px]" data-tina-field={fieldFor(editable, "contactIntro")}>
        <div>
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#101828] md:text-[40px]">
            <span data-tina-field={fieldFor(editable?.contactIntro, "title")}>{section.title} </span>
            {section.highlight ? (
              <span className="text-[#8949ff]" data-tina-field={fieldFor(editable?.contactIntro, "highlight")}>
                {section.highlight}
              </span>
            ) : null}
          </h2>
          {section.bulletsTitle ? (
            <p className="mt-[24px] text-[15px] font-bold text-[#6a7282]" data-tina-field={fieldFor(editable?.contactIntro, "bulletsTitle")}>
              {section.bulletsTitle}
            </p>
          ) : null}
          <div className="mt-[18px] space-y-[14px]" data-tina-field={fieldFor(editable?.contactIntro, "bullets")}>
            {(section.bullets || []).map((bullet: string, index: number) => (
              <div key={`${bullet}-${index}`} className="flex items-center gap-[12px]">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[rgba(137,73,255,0.12)] text-[#8949ff]">
                  <CheckIcon />
                </div>
                <p className="text-[16px] font-bold leading-[1.1] text-[#101828]">{bullet}</p>
              </div>
            ))}
          </div>
          {section.footnote ? (
            <p className="mt-[20px] max-w-[540px] text-[13px] leading-[1.25] text-[#6a7282]" data-tina-field={fieldFor(editable?.contactIntro, "footnote")}>
              {section.footnote}
            </p>
          ) : null}
        </div>
        <div className="relative overflow-hidden rounded-[24px]">
          <img src={section.image} alt={section.title} className="h-[320px] w-full object-cover md:h-[514px]" data-tina-field={fieldFor(editable?.contactIntro, "image")} />
          {section.floatingLabel ? (
            <div className="absolute right-[16px] top-[16px] rounded-full bg-[#25d366] px-[16px] py-[10px] text-[12px] font-bold text-white shadow-[0px_8px_24px_rgba(37,211,102,0.35)]" data-tina-field={fieldFor(editable?.contactIntro, "floatingLabel")}>
              {section.floatingLabel}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function DiagnosticStepsSection({ content, editable }: { content: any; editable?: any }) {
  const section = content?.diagnosticSteps;
  if (!section) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]">
      <div className="mx-auto max-w-[1460px] text-center" data-tina-field={fieldFor(editable, "diagnosticSteps")}>
        <h2 className="text-[28px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.diagnosticSteps, "title")}>
          {section.title}
        </h2>
        <p className="mx-auto mt-[16px] max-w-[860px] text-[16px] leading-[1.15] text-[#6a7282] md:text-[18px]" data-tina-field={fieldFor(editable?.diagnosticSteps, "description")}>
          {section.description}
        </p>
        <div className="mt-[32px] grid grid-cols-1 gap-[20px] md:grid-cols-3">
          {(section.items || []).map((item: any, index: number) => (
            <article key={`${item.title}-${index}`} className="rounded-[16px] border border-[#e5e7eb] bg-white px-[24px] py-[32px] shadow-[0px_8px_24px_rgba(16,24,40,0.06)]" data-tina-field={fieldFor(editable?.diagnosticSteps?.items?.[index], "title")}>
              <div className="mx-auto flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#fcc63d] text-[22px] font-bold text-[#101828]">
                {item.number}
              </div>
              <h3 className="mt-[20px] text-[18px] font-bold leading-[1.1] text-[#101828]">{item.title}</h3>
              <p className="mt-[16px] text-[14px] leading-[1.2] text-[#6a7282]">{item.description}</p>
            </article>
          ))}
        </div>
        {section.footnote ? (
          <p className="mt-[20px] text-[13px] leading-[1.2] text-[#6a7282]" data-tina-field={fieldFor(editable?.diagnosticSteps, "footnote")}>
            {section.footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function ShortcutCtaSection({ content, editable }: { content: any; editable?: any }) {
  const section = content?.shortcutCta;
  if (!section) return null;

  return (
    <div data-tina-field={fieldFor(editable, "shortcutCta")}>
      <SharedHomeBenefitsBlock
        title={section.title}
        description={section.description}
        ctaLabel={section.button?.label || ""}
        ctaHref={section.button?.href || "#"}
        editable={editable?.shortcutCta}
      />
    </div>
  );
}

function FloatingWhatsApp({ href = "#whatsapp" }: { href?: string }) {
  return (
    <a
      href={href}
      className="fixed bottom-[24px] right-[24px] z-40 inline-flex items-center gap-[8px] rounded-full bg-[#25d366] px-[20px] py-[12px] text-[15px] font-bold text-white no-underline shadow-[0px_8px_24px_rgba(37,211,102,0.4)]"
    >
      <WhatsAppIcon />
      WhatsApp
    </a>
  );
}

export default function ReactContactPage({
  content,
  data,
  query,
  variables
}: {
  content: any;
  data?: any;
  query?: string;
  variables?: Record<string, any>;
}) {
  const tinaState = query && variables && data ? useTina({ query, variables, data }) : null;
  const page = tinaState?.data?.pages ?? content;
  const editable = tinaState?.data?.pages ?? null;

  return (
    <div className="bg-white">
      <FloatingWhatsApp href={page?.shortcutCta?.button?.href || "#whatsapp"} />
      <ContactHeroSection content={page} editable={editable} />
      <ContactIntroSection content={page} editable={editable} />
      <DiagnosticStepsSection content={page} editable={editable} />
      <ContactSection content={page} editable={editable} sectionId="contacto" />
      <ShortcutCtaSection content={page} editable={editable} />
      <Frame60 content={page} editable={editable} />
      <FaqSection content={page} editable={editable} backgroundColor="#f9fafb" />
    </div>
  );
}
