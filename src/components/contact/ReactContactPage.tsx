import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { FaqSection, Frame60 } from "@/components/home/ReactHome";

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
    <section className="relative overflow-hidden bg-[#7c42f3] px-[20px] py-[52px] md:px-[40px] md:py-[72px] xl:px-[160px] 2xl:px-[160px]">
      <img src="/images/about-hero-texture.webp" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_24%_112%,rgba(8,8,19,0.42),transparent_34%)]" />
      <img src="/images/about-hero-outline.svg" alt="" className="pointer-events-none absolute bottom-[-232px] right-[-300px] hidden w-[900px] max-w-none opacity-80 lg:block xl:bottom-[-280px] xl:right-[-220px] xl:w-[1040px]" />
      <div className="relative flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-[10px] rounded-full border border-white/30 bg-white/10 px-[14px] py-[6px]">
          <span className="h-[8px] w-[8px] rounded-full bg-[#fcc63d]" />
          <span className="text-[12px] font-bold leading-[1.1] text-[#fcc63d]" data-tina-field={fieldFor(editable?.contactHero, "eyebrow")}>
            {hero.eyebrow}
          </span>
        </div>
        <h1 className="mt-[20px] max-w-[820px] text-[34px] font-bold leading-[1.08] text-white md:text-[56px]">
          <span data-tina-field={fieldFor(editable?.contactHero, "title")}>{hero.title} </span>
          {hero.highlight ? (
            <span className="text-[#fcc63d]" data-tina-field={fieldFor(editable?.contactHero, "highlight")}>
              {hero.highlight}
            </span>
          ) : null}
        </h1>
        <p className="mt-[16px] max-w-[820px] text-[14px] leading-[1.2] text-white/90 md:text-[16px]" data-tina-field={fieldFor(editable?.contactHero, "description")}>
          {hero.description}
        </p>
        <div className="mt-[24px] flex w-full flex-col items-center justify-center gap-[12px] sm:flex-row">
          <a
            href="#contacto"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#fcc63d] px-[24px] py-[14px] text-[12px] font-bold uppercase tracking-[1.5px] text-[#080813] no-underline sm:w-auto md:px-[32px] md:py-[16px] shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] transition-all duration-300 hover:bg-[#ffe07e] hover:-translate-y-[2px] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.4)]"
            data-tina-field={fieldFor(editable?.contactHero?.primaryCta, "label")}
          >
            {hero.primaryCta?.label}
          </a>
          {hero.secondaryCta ? (
            <a
              href={hero.secondaryCta.href || "#contacto"}
              className="inline-flex w-full items-center justify-center rounded-full border border-white/35 bg-white px-[24px] py-[14px] text-[12px] font-bold uppercase tracking-[1.5px] text-[#4f3bf9] no-underline sm:w-auto md:px-[32px] md:py-[16px] transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/90 hover:shadow-lg"
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
    <section className="bg-white px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]">
      <div className="grid w-full grid-cols-1 items-center gap-[32px] lg:grid-cols-[540px_minmax(0,1fr)] lg:gap-[80px]" data-tina-field={fieldFor(editable, "contactIntro")}>
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
            <div className="absolute right-[16px] top-[16px] rounded-full bg-[#7c42f3] px-[16px] py-[10px] text-[12px] font-bold text-white shadow-[0px_8px_24px_rgba(124,66,243,0.35)]" data-tina-field={fieldFor(editable?.contactIntro, "floatingLabel")}>
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
    <section className="bg-white px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]">
      <div className="w-full text-center" data-tina-field={fieldFor(editable, "diagnosticSteps")}>
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

function FormField({ label, placeholder, textarea = false }: { label: string; placeholder?: string; textarea?: boolean }) {
  return (
    <label className="flex flex-col gap-[14px]">
      <span className="text-[16px] font-bold text-white">{label}</span>
      {textarea ? (
        <textarea
          className="min-h-[110px] rounded-[6px] border border-[#9d9ba8] px-[20px] py-[16px] text-[15px] text-[#101828] placeholder:text-[#9d9ba8] focus:border-[#fcc63d] focus:outline-none focus:ring-1 focus:ring-[#fcc63d]"
          placeholder={placeholder}
        />
      ) : (
        <input
          className="rounded-[6px] border border-[#9d9ba8] px-[20px] py-[12px] text-[15px] text-[#101828] placeholder:text-[#9d9ba8] focus:border-[#fcc63d] focus:outline-none focus:ring-1 focus:ring-[#fcc63d]"
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

function ContactSection({ content, editable, sectionId = "contacto-soluciones" }: { content: any; editable?: any; sectionId?: string }) {
  const contact = content?.contact;
  if (!contact) return null;

  return (
    <section id={sectionId} className="bg-[#f9fafb] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "contact")}>
      <div className="grid w-full grid-cols-1 gap-[32px] md:items-center lg:grid-cols-[1fr_798px]">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.contact, "title")}>{contact.title}</h2>
          <p className="mt-[20px] text-[15px] leading-[1.15] text-[#080813]" data-tina-field={fieldFor(editable?.contact, "description")}>{contact.description}</p>
          <div className="mt-[24px] space-y-[16px]" data-tina-field={fieldFor(editable?.contact, "highlights")}>
            {(contact.highlights || []).map((highlight: string, index: number) => (
              <div key={`${highlight}-${index}`} className="flex items-center gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[rgba(137,73,255,0.1)] text-[#8949ff]">
                  <CheckIcon />
                </div>
                <p className="text-[16px] font-bold text-[#314158]">{highlight}</p>
              </div>
            ))}
          </div>
          {(contact.scheduleLabel || contact.scheduleText) ? (
            <div className="mt-[32px] border-t border-[#dfe4ec] pt-[24px]">
              {contact.scheduleLabel ? <p className="text-[15px] font-bold text-[#8949ff]" data-tina-field={fieldFor(editable?.contact, "scheduleLabel")}>{contact.scheduleLabel}</p> : null}
              {contact.scheduleText ? (
                <div className="mt-[16px] space-y-[4px]" data-tina-field={fieldFor(editable?.contact, "scheduleText")}>
                  {(contact.scheduleText || "").split("\n").filter((line: string) => line.trim()).map((line: string, idx: number) => (
                    <p key={idx} className="text-[15px] font-bold leading-[1.15] text-[#101828]">{line.trim()}</p>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="mt-[28px] space-y-[12px]">
            {contact.phone ? (
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-[rgba(137,73,255,0.1)] text-[#8949ff]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="text-[18px] font-bold text-[#101828] no-underline" data-tina-field={fieldFor(editable?.contact, "phone")}>{contact.phone}</a>
              </div>
            ) : null}
            {contact.email ? (
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-[rgba(137,73,255,0.1)] text-[#8949ff]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <a href={`mailto:${contact.email}`} className="text-[18px] font-bold text-[#101828] no-underline" data-tina-field={fieldFor(editable?.contact, "email")}>{contact.email}</a>
              </div>
            ) : null}
          </div>
        </div>

        <form className="rounded-[12px] bg-[#8949ff] p-[24px] md:p-[40px]">
          <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[30px]">
            <div data-tina-field={fieldFor(editable?.contact?.form, "name_label")}><FormField label={contact.form?.name_label} placeholder={contact.form?.name_placeholder} /></div>
            <div data-tina-field={fieldFor(editable?.contact?.form, "lastname_label")}><FormField label={contact.form?.lastname_label} placeholder={contact.form?.lastname_placeholder} /></div>
            <div data-tina-field={fieldFor(editable?.contact?.form, "email_label")}><FormField label={contact.form?.email_label} placeholder={contact.form?.email_placeholder} /></div>
            <div data-tina-field={fieldFor(editable?.contact?.form, "phone_label")}><FormField label={contact.form?.phone_label} placeholder={contact.form?.phone_placeholder} /></div>
          </div>
          <div className="mt-[16px]" data-tina-field={fieldFor(editable?.contact?.form, "message_label")}><FormField label={contact.form?.message_label} placeholder={contact.form?.message_placeholder} textarea /></div>
          <div className="mt-[24px] flex flex-col gap-[20px] md:flex-row md:items-center md:justify-between md:gap-[50px]">
            <label className="flex items-center gap-[8px]" data-tina-field={fieldFor(editable?.contact?.form, "terms_label")}>
              <input type="checkbox" className="h-[24px] w-[24px] rounded-[4px] border border-[#9d9ba8] bg-[#ecddee]" />
              <span className="text-[12px] font-bold text-white">{contact.form?.terms_label}</span>
            </label>
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-[#fcc63d] px-[32px] py-[16px] text-[16px] font-bold uppercase tracking-[1.5px] text-[#0f172b] shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#ffe07e] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.4)]" data-tina-field={fieldFor(editable?.contact?.form, "submit_label")}>
              {contact.form?.submit_label}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ShortcutCtaSection({ content, editable }: { content: any; editable?: any }) {
  const shortcutCta = content?.shortcutCta;
  if (!shortcutCta) return null;

  return (
    <section
      className="bg-white px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]"
      data-tina-field={fieldFor(editable, "shortcutCta")}
    >
      <div className="flex w-full flex-col items-start justify-between gap-[32px] overflow-hidden rounded-[24px] bg-[#8949ff] px-[28px] py-[48px] md:px-[60px] md:py-[80px] lg:flex-row lg:items-center">
          <div className="flex w-full max-w-[787px] flex-col items-start gap-[16px]">
            <h2
              className="text-[30px] font-bold leading-[1.1] text-white md:text-[40px]"
              data-tina-field={fieldFor(editable?.shortcutCta, "title")}
            >
              {shortcutCta.title}
            </h2>
            <p
              className="text-[16px] leading-[1.35] text-white md:text-[18px]"
              data-tina-field={fieldFor(editable?.shortcutCta, "description")}
            >
              {shortcutCta.description}
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] w-full shrink-0 items-center justify-center gap-[12px] rounded-full bg-[#fcc63d] px-[20px] py-[14px] text-center no-underline shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#ffe07e] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.4)] focus-visible:bg-[#ffe07e] sm:w-auto sm:px-[24px] md:px-[40px] md:py-[20px]"
            data-tina-field={fieldFor(editable?.shortcutCta?.button, "label")}
          >
            <span className="text-center text-[14px] font-bold uppercase leading-[1.15] tracking-[1.2px] text-[#101828] sm:text-[15px] md:text-[18px] md:leading-[27px] md:tracking-[1.8px]">
              {shortcutCta.button?.label}
            </span>
          </a>
        </div>
    </section>
  );
}

const WHATSAPP_URL = "https://wa.link/rmtjml";

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[24px] right-[24px] z-40 inline-flex items-center gap-[8px] rounded-full bg-[#25d366] px-[20px] py-[12px] text-[15px] font-bold text-white no-underline shadow-[0px_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0px_8px_24px_rgba(37,211,102,0.6)]"
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
      <FloatingWhatsApp />
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
