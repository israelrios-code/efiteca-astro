import React, { useEffect, useRef, useState } from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { LocationsShowcaseSection } from "@/components/shared/LocationsShowcase";
import { FaqSection, Frame60 } from "@/components/home/ReactHome";
import { TestimonialsMetricsSection } from "@/components/solutions/ReactSolutionsPage";

const WHATSAPP_URL = "https://wa.link/rmtjml";

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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[16px] w-[16px]" aria-hidden="true">
      <path d="M7.8 4.5H4.9C4.4 4.5 4 4.9 4 5.4C4 14.5 11.5 22 20.6 22C21.1 22 21.5 21.6 21.5 21.1V18.2C21.5 17.8 21.2 17.4 20.7 17.3L16.7 16.4C16.3 16.3 15.9 16.4 15.6 16.7L13.9 18.4C10.9 16.9 7.1 13.1 5.6 10.1L7.3 8.4C7.6 8.1 7.7 7.7 7.6 7.3L6.7 3.3C6.6 2.8 6.2 2.5 5.8 2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-[16px] w-[16px]" aria-hidden="true">
      <path d="M4 6.5H20V17.5H4V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

function SimulatorHeroSection({ page, editable }: { page: any; editable?: any }) {
  const simulator = page?.simulator;
  if (!simulator) return null;

  return (
    <section className="relative overflow-hidden bg-[#7c42f3] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]">
      <img src="/images/about-hero-texture.webp" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_24%_112%,rgba(8,8,19,0.42),transparent_34%)]" />
      <img src="/images/about-hero-outline.svg" alt="" className="pointer-events-none absolute bottom-[-232px] right-[-300px] hidden w-[900px] max-w-none opacity-80 lg:block xl:bottom-[-280px] xl:right-[-220px] xl:w-[1040px]" />
      <div className="relative z-10 grid w-full grid-cols-1 gap-[40px] xl:grid-cols-[minmax(0,1fr)_minmax(0,520px)] xl:items-center xl:gap-[72px]" data-tina-field={fieldFor(editable, "simulator")}>
        <div className="pt-[8px]">
          <div className="inline-flex items-center gap-[10px] rounded-full border border-white/30 bg-white/10 px-[14px] py-[6px]">
            <span className="h-[8px] w-[8px] rounded-full bg-[#fcc63d]" />
            <span className="text-[12px] font-bold leading-[1.1] text-[#fcc63d]">Asesoría hipotecaria sin sorpresas</span>
          </div>
          <h1 className="mt-[24px] text-[34px] font-bold leading-[1.08] text-white md:text-[56px]" data-tina-field={fieldFor(editable?.simulator, "title")}>
            {simulator.title}
          </h1>
          <div className="mt-[24px] space-y-[16px] text-[15px] leading-[1.2] text-white/90 md:text-[16px]">
            <p data-tina-field={fieldFor(editable?.simulator, "description")}>{simulator.description}</p>
            {simulator.secondaryDescription ? (
              <p data-tina-field={fieldFor(editable?.simulator, "secondaryDescription")}>{simulator.secondaryDescription}</p>
            ) : null}
            <div className="rounded-[16px] border border-white/20 bg-white/10 px-[20px] py-[18px]">
              {simulator.noteTitle ? (
                <p className="text-[16px] font-bold leading-[1.2] text-[#fcc63d]" data-tina-field={fieldFor(editable?.simulator, "noteTitle")}>
                  {simulator.noteTitle}
                </p>
              ) : null}
              <p className={`${simulator.noteTitle ? "mt-[10px] " : ""}text-[14px] font-bold leading-[1.4] text-white/80`} data-tina-field={fieldFor(editable?.simulator, "noteText")}>
                {simulator.noteText}
              </p>
            </div>
          </div>
          <div className="mt-[24px] flex flex-col gap-[10px] text-[13px] font-bold leading-[1.1] text-white/70 md:flex-row md:gap-[20px]">
            <div className="flex items-center gap-[8px]">
              <CheckIcon />
              <span>Regulado por el BdE · E377</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <CheckIcon />
              <span>Diagnóstico en 10 minutos</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <CheckIcon />
              <span>+12.000 familias asesoradas</span>
            </div>
          </div>
        </div>
        <div className="relative hidden xl:block">
          <div className="absolute inset-0 scale-[0.96] rounded-[34px] bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.05)_100%)] blur-[16px]" />
          <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/10 p-[14px] shadow-[0px_28px_70px_rgba(8,8,19,0.3)] md:rounded-[40px] md:p-[18px]">
            <div className="relative overflow-hidden rounded-[24px] md:rounded-[30px]">
              <img
                src={simulator.image}
                alt={simulator.calculatorTitle || simulator.title}
                className="block h-[320px] w-full object-cover md:h-[420px]"
                loading="eager"
                fetchPriority="high"
                data-tina-field={fieldFor(editable?.simulator, "image")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RequirementsBannerSection({ page, editable }: { page: any; editable?: any }) {
  const section = page?.requirementsBanner;
  if (!section) return null;

  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#4f3bf9_0%,#8949ff_45%,#7a49ff_100%)] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "requirementsBanner")}>
      <div className="grid w-full grid-cols-1 gap-[24px] rounded-[32px] bg-[#0f172b] p-[24px] shadow-[0px_24px_60px_rgba(8,8,19,0.26)] md:p-[36px] lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center lg:gap-[28px] xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-[32px] xl:rounded-[40px]">
        <div>
          <h2 className="max-w-[420px] text-[30px] font-bold leading-[1.08] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.requirementsBanner, "title")}>
            {section.title}
          </h2>
          <div className="mt-[24px] space-y-[14px]" data-tina-field={fieldFor(editable?.requirementsBanner, "items")}>
            {(section.items || []).map((item: string, index: number) => (
              <div key={`${item}-${index}`} className="flex items-center gap-[12px] text-white">
                <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[rgba(137,73,255,0.18)] text-[#cda4ff]">
                  <CheckIcon />
                </div>
                <p className="text-[15px] font-bold leading-[1.15] md:text-[16px]">{item}</p>
              </div>
            ))}
          </div>
          <a
            href={section.button?.href || "#contacto-simulador"}
            className="mt-[28px] inline-flex w-full items-center justify-center rounded-full bg-[#fcc63d] px-[24px] py-[16px] text-[14px] font-bold uppercase tracking-[1.6px] text-[#080813] no-underline shadow-[0px_18px_30px_rgba(252,198,61,0.22)] transition-all duration-300 hover:bg-[#ffe07e] hover:-translate-y-[2px] sm:w-auto md:px-[32px] md:text-[16px]"
            data-tina-field={fieldFor(editable?.requirementsBanner?.button, "label")}
          >
            {section.button?.label}
          </a>
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-[24px] bg-[#1a2340] md:min-h-[320px]">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(8,8,19,0.12)_0%,rgba(8,8,19,0)_42%,rgba(8,8,19,0.1)_100%)]" />
          <img
            src={section.image || "/images/contact-intro.webp"}
            alt={section.title}
            className="absolute inset-0 z-0 block h-full w-full object-cover object-center"
            loading="lazy"
            data-tina-field={fieldFor(editable?.requirementsBanner, "image")}
          />
        </div>
      </div>
    </section>
  );
}

function CalculatorEmbedSection({ page, editable }: { page: any; editable?: any }) {
  const section = page?.calculatorEmbed;
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [height, setHeight] = useState(980);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let resizeObserver: ResizeObserver | null = null;
    let fallbackTimer: number | null = null;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.source !== iframe.contentWindow) return;
      if (event.data?.type !== "efiteca-calculator-height") return;

      const nextHeight = Number(event.data.height);
      if (Number.isFinite(nextHeight) && nextHeight > 0) {
        setHeight((prev) => Math.abs(prev - (nextHeight + 8)) > 15 ? nextHeight + 8 : prev);
      }
    };

    const updateHeight = () => {
      try {
        const doc = iframe.contentDocument;
        if (!doc) return;
        const nextHeight = Math.max(
          doc.body?.scrollHeight || 0,
          doc.documentElement?.scrollHeight || 0,
          760
        );
        setHeight((prev) => Math.abs(prev - (nextHeight + 8)) > 15 ? nextHeight + 8 : prev);
      } catch {
        return;
      }
    };

    const handleLoad = () => {
      updateHeight();
      try {
        const doc = iframe.contentDocument;
        if (!doc) return;
        resizeObserver = new ResizeObserver(() => updateHeight());
        resizeObserver.observe(doc.body);
        resizeObserver.observe(doc.documentElement);
        fallbackTimer = window.setInterval(updateHeight, 500);
      } catch {
        return;
      }
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("message", handleMessage);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("message", handleMessage);
      if (resizeObserver) resizeObserver.disconnect();
      if (fallbackTimer) window.clearInterval(fallbackTimer);
    };
  }, [section?.src]);

  if (!section?.src) return null;

  return (
    <section className="bg-white px-[20px] pt-[56px] pb-[24px] md:px-[40px] md:pt-[80px] md:pb-[32px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "calculatorEmbed")}>
      <div className="w-full">
        {section.eyebrow ? (
          <p className="text-[13px] font-bold uppercase tracking-[1.4px] text-[#8949ff]" data-tina-field={fieldFor(editable?.calculatorEmbed, "eyebrow")}>
            {section.eyebrow}
          </p>
        ) : null}
        <h2 className="mt-[10px] max-w-[920px] text-[30px] font-bold leading-[1.06] text-[#080813] md:text-[48px]" data-tina-field={fieldFor(editable?.calculatorEmbed, "title")}>
          {section.title}
        </h2>
        <p className="mt-[16px] max-w-[760px] text-[15px] leading-[1.2] text-[#4b5565] md:text-[17px]" data-tina-field={fieldFor(editable?.calculatorEmbed, "description")}>
          {section.description}
        </p>
        <div className="mt-[28px] w-full overflow-hidden">
          <iframe
            ref={iframeRef}
            src={section.src}
            title={section.title}
            className="block w-full border-0"
            style={{ height: `${height}px` }}
            data-tina-field={fieldFor(editable?.calculatorEmbed, "src")}
          />
        </div>
      </div>
    </section>
  );
}

function MetricsSection({ page, editable }: { page: any; editable?: any }) {
  const metrics = page?.metrics;
  if (!metrics?.items?.length) return null;

  return (
    <section className="bg-white px-[20px] pb-[56px] md:px-[40px] md:pb-[80px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "metrics")}>
      <div className="w-full rounded-[32px] bg-[#12192d] px-[24px] py-[24px] md:px-[60px] md:py-[32px]">
        <div className="flex flex-col md:flex-row md:items-stretch">
          {(metrics.items || []).map((item: any, index: number) => (
            <React.Fragment key={`${item.title}-${index}`}>
              {index > 0 && (
                <div className="h-px w-full shrink-0 md:h-auto md:w-px md:self-stretch" style={{ backgroundColor: '#744c98' }} aria-hidden="true" />
              )}
              <div
                className={`flex-1 py-[20px] md:py-0 ${index === 0 ? 'md:pr-[40px]' : index === metrics.items.length - 1 ? 'md:pl-[40px]' : 'md:px-[40px]'}`}
                data-tina-field={fieldFor(editable?.metrics?.items?.[index], "value")}
              >
                <p className="text-[42px] font-normal leading-none text-[#c993ff] md:text-[56px]">{item.value}</p>
                <p className="mt-[10px] text-[18px] font-bold leading-[1.2] text-white md:text-[22px]">{item.title}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function SimulatorContactSection({ page, editable }: { page: any; editable?: any }) {
  const contact = page?.contact;
  if (!contact) return null;

  const backgroundColor = contact.backgroundColor || "#080813";
  const cardBackground = contact.cardBackground || "#8949ff";

  return (
    <section
      id="contacto-simulador"
      className="relative overflow-hidden px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]"
      style={{ backgroundColor }}
      data-tina-field={fieldFor(editable, "contact")}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-[-120px] mx-auto h-[320px] max-w-[980px] rounded-full bg-[rgba(137,73,255,0.26)] blur-[110px]" />
      <div className="relative grid w-full grid-cols-1 gap-[32px] lg:grid-cols-[1fr_798px] lg:items-center">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.contact, "title")}>
            {contact.title}
          </h2>
          <p className="mt-[20px] text-[15px] leading-[1.15] text-white/85" data-tina-field={fieldFor(editable?.contact, "description")}>
            {contact.description}
          </p>
          <div className="mt-[24px] space-y-[16px]" data-tina-field={fieldFor(editable?.contact, "highlights")}>
            {(contact.highlights || []).map((highlight: string, index: number) => (
              <div key={`${highlight}-${index}`} className="flex items-center gap-[12px] text-white">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[rgba(255,255,255,0.14)] text-[#cda4ff]">
                  <CheckIcon />
                </div>
                <p className="text-[16px] font-bold leading-[1.1]">{highlight}</p>
              </div>
            ))}
          </div>
          {(contact.scheduleLabel || contact.scheduleText) ? (
            <div className="mt-[20px]">
              {contact.scheduleLabel ? (
                <p className="text-[15px] font-bold text-[#cda4ff]" data-tina-field={fieldFor(editable?.contact, "scheduleLabel")}>
                  {contact.scheduleLabel}
                </p>
              ) : null}
              {contact.scheduleText ? (
                <div className="mt-[6px] space-y-[4px]" data-tina-field={fieldFor(editable?.contact, "scheduleText")}>
                  {(contact.scheduleText || "").split("\n").filter((line: string) => line.trim()).map((line: string, idx: number) => (
                    <p key={idx} className="text-[15px] leading-[1.3] text-white">{line.trim()}</p>
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="mt-[28px] space-y-[12px]">
            {contact.phone ? (
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-[rgba(255,255,255,0.1)] text-[#cda4ff]">
                  <PhoneIcon />
                </div>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="text-[18px] font-bold text-white no-underline" data-tina-field={fieldFor(editable?.contact, "phone")}>
                  {contact.phone}
                </a>
              </div>
            ) : null}
            {contact.email ? (
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-[rgba(255,255,255,0.1)] text-[#cda4ff]">
                  <MailIcon />
                </div>
                <a href={`mailto:${contact.email}`} className="text-[18px] font-bold text-white no-underline" data-tina-field={fieldFor(editable?.contact, "email")}>
                  {contact.email}
                </a>
              </div>
            ) : null}
          </div>
        </div>

        <form className="rounded-[16px] p-[24px] md:p-[40px]" style={{ backgroundColor: cardBackground }}>
          <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[30px]">
            <label className="flex flex-col gap-[14px]">
              <span className="text-[16px] font-bold text-white" data-tina-field={fieldFor(editable?.contact?.form, "name_label")}>{contact.form?.name_label}</span>
              <input className="rounded-[6px] border border-[#9d9ba8] px-[20px] py-[12px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]" placeholder={contact.form?.name_placeholder} />
            </label>
            <label className="flex flex-col gap-[14px]">
              <span className="text-[16px] font-bold text-white" data-tina-field={fieldFor(editable?.contact?.form, "lastname_label")}>{contact.form?.lastname_label}</span>
              <input className="rounded-[6px] border border-[#9d9ba8] px-[20px] py-[12px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]" placeholder={contact.form?.lastname_placeholder} />
            </label>
            <label className="flex flex-col gap-[14px]">
              <span className="text-[16px] font-bold text-white" data-tina-field={fieldFor(editable?.contact?.form, "email_label")}>{contact.form?.email_label}</span>
              <input className="rounded-[6px] border border-[#9d9ba8] px-[20px] py-[12px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]" placeholder={contact.form?.email_placeholder} />
            </label>
            <label className="flex flex-col gap-[14px]">
              <span className="text-[16px] font-bold text-white" data-tina-field={fieldFor(editable?.contact?.form, "phone_label")}>{contact.form?.phone_label}</span>
              <input className="rounded-[6px] border border-[#9d9ba8] px-[20px] py-[12px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]" placeholder={contact.form?.phone_placeholder} />
            </label>
          </div>
          <label className="mt-[16px] flex flex-col gap-[14px]">
            <span className="text-[16px] font-bold text-white" data-tina-field={fieldFor(editable?.contact?.form, "message_label")}>{contact.form?.message_label}</span>
            <textarea className="min-h-[110px] rounded-[6px] border border-[#9d9ba8] px-[20px] py-[16px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]" placeholder={contact.form?.message_placeholder} />
          </label>
          <div className="mt-[24px] flex flex-col gap-[20px] md:flex-row md:items-center md:justify-between md:gap-[50px]">
            <label className="flex items-center gap-[8px]" data-tina-field={fieldFor(editable?.contact?.form, "terms_label")}>
              <input type="checkbox" className="h-[24px] w-[24px] rounded-[4px] border border-[#9d9ba8] bg-[#ecddee]" />
              <span className="text-[12px] font-bold text-[#f2e8ff]">{contact.form?.terms_label}</span>
            </label>
            <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-[#fcc63d] px-[40px] py-[19px] text-[18px] font-bold uppercase tracking-[1.8px] text-[#0f172b] shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] transition-all duration-300 hover:bg-[#ffe07e] hover:-translate-y-[2px] md:w-auto" data-tina-field={fieldFor(editable?.contact?.form, "submit_label")}>
              {contact.form?.submit_label}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ReactSimulatorPage({
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
      <SimulatorHeroSection page={page} editable={editable} />
      <CalculatorEmbedSection page={page} editable={editable} />
      <RequirementsBannerSection page={page} editable={editable} />
      <TestimonialsMetricsSection content={page} editable={editable} />
      <SimulatorContactSection page={page} editable={editable} />
      <LocationsShowcaseSection content={page} editable={editable} />
      <FaqSection content={page} editable={editable} backgroundColor="#f9fafb" />
      <div className="bg-white">
        <Frame60 content={page} editable={editable} />
      </div>
    </div>
  );
}
