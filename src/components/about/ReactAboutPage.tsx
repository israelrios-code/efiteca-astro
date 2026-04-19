import { LocationsShowcaseSection } from "@/components/shared/LocationsShowcase";
import { TestimonialsMetricsSection } from "@/components/solutions/ReactSolutionsPage";
import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";

function fieldFor(object: any, property: string) {
  return object ? tinaField(object, property) : undefined;
}

function CheckIcon({ className = "h-[18px] w-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 12.5L10 16.5L18 8.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LegalScaleIcon({ className = "h-[14px] w-[14px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 4V20M7 8H17M5 8L2.5 12H7.5L5 8ZM19 8L16.5 12H21.5L19 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LegalShieldIcon({ className = "h-[14px] w-[14px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3L19 6V11C19 15.4 16.2 19.2 12 21C7.8 19.2 5 15.4 5 11V6L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LegalDocIcon({ className = "h-[14px] w-[14px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M8 3H14L18 7V21H8V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 3V7H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ className = "h-[16px] w-[16px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3.8L14.5 8.9L20.1 9.7L16.1 13.6L17 19.1L12 16.4L7 19.1L7.9 13.6L3.9 9.7L9.5 8.9L12 3.8Z" />
    </svg>
  );
}

function PhoneIcon({ className = "h-[16px] w-[16px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7.8 4.5H4.9C4.4 4.5 4 4.9 4 5.4C4 14.5 11.5 22 20.6 22C21.1 22 21.5 21.6 21.5 21.1V18.2C21.5 17.8 21.2 17.4 20.7 17.3L16.7 16.4C16.3 16.3 15.9 16.4 15.6 16.7L13.9 18.4C10.9 16.9 7.1 13.1 5.6 10.1L7.3 8.4C7.6 8.1 7.7 7.7 7.6 7.3L6.7 3.3C6.6 2.8 6.2 2.5 5.8 2.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon({ className = "h-[16px] w-[16px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6.5H20V17.5H4V6.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M4.5 7L12 12.5L19.5 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FormField({
  label,
  placeholder,
  textarea = false,
  labelField,
  placeholderField
}: {
  label: string;
  placeholder?: string;
  textarea?: boolean;
  labelField?: string;
  placeholderField?: string;
}) {
  return (
    <label className="flex flex-col gap-[14px]">
      <span className="text-[16px] font-bold text-white" data-tina-field={labelField}>{label}</span>
      {textarea ? (
        <textarea
          className="min-h-[110px] rounded-[6px] border border-[#9d9ba8] px-[20px] py-[16px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]"
          placeholder={placeholder}
          data-tina-field={placeholderField}
        />
      ) : (
        <input
          className="rounded-[6px] border border-[#9d9ba8] px-[20px] py-[12px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]"
          placeholder={placeholder}
          data-tina-field={placeholderField}
        />
      )}
    </label>
  );
}

function AboutHeroSection({ content, editable }: { content: any; editable?: any }) {
  const hero = content?.aboutHero;
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-[#7c42f3] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]">
      {hero.texture ? (
        <img
          src={hero.texture}
          alt=""
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          data-tina-field={fieldFor(editable?.aboutHero, "texture")}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_24%_112%,rgba(8,8,19,0.42),transparent_34%)]" />
      {hero.outlineImage ? (
        <img
          src={hero.outlineImage}
          alt=""
          className="pointer-events-none absolute bottom-[-232px] right-[-300px] hidden w-[900px] max-w-none opacity-80 lg:block xl:bottom-[-280px] xl:right-[-220px] xl:w-[1040px]"
          data-tina-field={fieldFor(editable?.aboutHero, "outlineImage")}
        />
      ) : null}
      <img
        src="/images/Sobre-nosotros-logo-lineas.webp"
        alt=""
        className="pointer-events-none absolute bottom-0 right-0 hidden md:block"
      />
      <div className="relative z-10 flex w-full min-h-[320px] items-center justify-start md:min-h-[560px]">
        <div className="max-w-[620px]">
          <div className="inline-flex items-center gap-[12px] rounded-full border border-[#c993ff] bg-[rgba(255,255,255,0.1)] px-[16px] py-[8px]">
            <span className="h-[8px] w-[8px] rounded-full bg-white/80"></span>
            <span className="text-[12px] font-bold leading-[1.1] text-white" data-tina-field={fieldFor(editable?.aboutHero, "eyebrow")}>
              {hero.eyebrow}
            </span>
          </div>
          <h1 className="mt-[24px] max-w-[620px] text-[38px] font-bold leading-[1.05] text-white md:text-[56px]">
            <span data-tina-field={fieldFor(editable?.aboutHero, "title")}>{hero.title} </span>
            <span className="text-[#fcc63d]" data-tina-field={fieldFor(editable?.aboutHero, "highlight")}>
              {hero.highlight}
            </span>
          </h1>
          <p className="mt-[24px] max-w-[620px] text-[16px] leading-[1.5] text-white" data-tina-field={fieldFor(editable?.aboutHero, "description")}>
            {hero.description}
          </p>
          <a
            href={hero.cta?.href || "#contacto-sobre-nosotros"}
            className="mt-[32px] inline-flex w-full items-center justify-center rounded-full bg-[#fcc63d] px-[32px] py-[16px] text-center text-[14px] font-bold uppercase tracking-[1.8px] text-[#101828] no-underline shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] transition-all duration-300 hover:bg-[#ffe07e] hover:-translate-y-[2px] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.4)] sm:w-auto md:text-[18px]"
            data-tina-field={fieldFor(editable?.aboutHero?.cta, "label")}
          >
            {hero.cta?.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function TrajectorySection({ content, editable }: { content: any; editable?: any }) {
  const trajectory = content?.trajectory;
  if (!trajectory) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "trajectory")}>
      <div className="grid w-full grid-cols-1 items-stretch gap-[32px] xl:grid-cols-2 xl:gap-[80px]">
        <div className="flex flex-col justify-center py-0 xl:py-[40px]">
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.trajectory, "title")}>
            {trajectory.title}
          </h2>
          <p className="mt-[20px] text-[16px] leading-[1.5] text-[#101828]" data-tina-field={fieldFor(editable?.trajectory, "description")}>
            {trajectory.description}
          </p>
          <div className="mt-[24px] max-w-[540px] border-l-[3px] border-[#8949ff] bg-white pl-[18px] pr-[8px] py-[6px]">
            <p className="text-[15px] font-bold leading-[1.1] text-[#101828]" data-tina-field={fieldFor(editable?.trajectory, "highlight")}>
              {trajectory.highlight}
            </p>
          </div>
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-[40px] md:min-h-[420px]">
          <img
            src={trajectory.image}
            alt={trajectory.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            data-tina-field={fieldFor(editable?.trajectory, "image")}
          />
          <div className="absolute bottom-[26px] left-[26px] flex items-center gap-[14px] rounded-[16px] border border-white bg-[#f9fafb] p-[20px] shadow-[0px_20px_25px_rgba(0,0,0,0.1),0px_8px_10px_rgba(0,0,0,0.1)]">
            <img src="/images/Icono-registro-guard.svg" alt="" className="h-[40px] w-[40px] shrink-0" aria-hidden="true" />
            <div>
              <p className="text-[12px] font-bold leading-[1.1] text-[#6a7282]" data-tina-field={fieldFor(editable?.trajectory, "badgeLabel")}>
                {trajectory.badgeLabel}
              </p>
              <p className="mt-[4px] text-[15px] font-bold leading-[1.1] text-[#080813]" data-tina-field={fieldFor(editable?.trajectory, "badgeText")}>
                {trajectory.badgeText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PurposeSection({ content, editable }: { content: any; editable?: any }) {
  const section = content?.purposeSection;
  if (!section) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "purposeSection")}>
      <div className="grid w-full grid-cols-1 items-stretch gap-[32px] xl:grid-cols-2 xl:gap-[80px]">
        <div className="relative order-2 min-h-[260px] overflow-hidden rounded-[40px] md:min-h-[420px] xl:order-1">
          <img
            src={section.image}
            alt={section.title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            data-tina-field={fieldFor(editable?.purposeSection, "image")}
          />
        </div>
        <div className="order-1 flex flex-col justify-center py-0 xl:order-2">
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.purposeSection, "title")}>
            {section.title}
          </h2>
          <p className="mt-[20px] text-[16px] leading-[1.5] text-[#101828]" data-tina-field={fieldFor(editable?.purposeSection, "description")}>
            {section.description}
          </p>
          <div className="mt-[24px] rounded-[16px] bg-[rgba(137,73,255,0.1)] p-[24px]">
            <p className="text-[15px] font-bold leading-[1.1] text-[#8949ff]" data-tina-field={fieldFor(editable?.purposeSection, "highlight")}>
              {section.highlight}
            </p>
          </div>
          <div className="mt-[24px] space-y-[16px]" data-tina-field={fieldFor(editable?.purposeSection, "bullets")}>
            {(section.bullets || []).map((bullet: string, index: number) => (
              <div key={`${bullet}-${index}`} className="flex items-center gap-[16px]">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[rgba(137,73,255,0.1)] text-[#8949ff]"><CheckIcon /></div>
                <p className="flex-1 text-[16px] font-bold leading-[1.1] text-[#101828]">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection({ content, editable }: { content: any; editable?: any }) {
  const partners = content?.partners;
  const items = partners?.items || [];
  if (!partners) return null;
  const marqueeItems = items.length > 0 ? [...items, ...items] : [];

  return (
    <section className="bg-white" data-tina-field={fieldFor(editable, "partners")}>
      <div className="relative flex w-full flex-col items-center gap-[24px] px-[20px] py-[40px] md:gap-[32px] md:px-[40px] md:py-[72px] xl:px-[160px] 2xl:px-[160px]">
        <div className="relative flex w-full max-w-[760px] flex-col items-center gap-[16px] text-center">
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.partners, "title")}>
            {partners.title}
          </h2>
          <p className="text-[16px] leading-[1.2] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.partners, "description")}>
            {partners.description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <style>{`
            @keyframes about-partners-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[40px] bg-gradient-to-r from-white to-transparent md:w-[72px]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[40px] bg-gradient-to-l from-white to-transparent md:w-[72px]" />

          <div
            className="flex w-max items-center gap-[14px] md:gap-[20px] xl:gap-[28px]"
            style={{ animation: "about-partners-marquee 28s linear infinite" }}
          >
            {marqueeItems.map((item: any, index: number) => {
              const itemField = items.length > 0 ? editable?.partners?.items?.[index % items.length] : undefined;

              return (
                <div
                  key={`${item.name}-${index}`}
                  className="flex h-[72px] w-[160px] shrink-0 items-center justify-center rounded-[18px] border border-[#ece7f5] bg-white px-[18px] md:h-[84px] md:w-[190px] md:rounded-[22px] md:px-[24px]"
                  data-tina-field={fieldFor(itemField, "name")}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-[28px] w-auto max-w-full object-contain md:max-h-[34px]"
                      loading="lazy"
                      data-tina-field={fieldFor(itemField, "image")}
                    />
                  ) : (
                    <span className="text-center text-[18px] font-bold text-[#8949ff]">{item.name}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection({ content, editable }: { content: any; editable?: any }) {
  const certifications = content?.certifications;
  if (!certifications) return null;

  return (
    <section className="bg-[#f9f6f3] px-[20px] pb-[56px] md:px-[40px] md:pb-[80px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "certifications")}>
      <div className="w-full rounded-[20px] border border-[#ece7f4] bg-white px-[24px] py-[28px] shadow-[0px_10px_30px_rgba(16,24,40,0.05)] md:px-[40px] md:py-[40px]">
        <div className="grid grid-cols-1 items-center gap-[28px] lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-[40px]">
          <div>
            <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[32px]" data-tina-field={fieldFor(editable?.certifications, "title")}>
              {certifications.title}
            </h2>
            <p className="mt-[12px] max-w-[760px] text-[15px] leading-[1.5] text-[#6a7282]" data-tina-field={fieldFor(editable?.certifications, "description")}>
              {certifications.description}
            </p>
          </div>
          {certifications.logoImage ? (
            <div className="flex justify-start lg:justify-end">
              <img
                src={certifications.logoImage}
                alt={certifications.title}
                className="h-[100px] w-auto object-contain lg:h-[180px]"
                loading="lazy"
                data-tina-field={fieldFor(editable?.certifications, "logoImage")}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function RecognitionsSection({ content, editable }: { content: any; editable?: any }) {
  const recognitions = content?.recognitions;
  const companyInfo = content?.companyInfo;
  if (!recognitions && !companyInfo) return null;

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#4f3bf9_0%,#3f2ab6_100%)] px-[20px] py-[56px] text-white md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]">
      <div className="relative w-full space-y-[64px] md:space-y-[80px]">
        {recognitions ? (
          <div data-tina-field={fieldFor(editable, "recognitions")}>
            <div className="text-center">
              <h2 className="text-[28px] font-bold leading-[1.1] md:text-[40px]" data-tina-field={fieldFor(editable?.recognitions, "title")}>
                {recognitions.title}
              </h2>
              <p className="mt-[14px] text-[16px] leading-[1.5] text-white/90" data-tina-field={fieldFor(editable?.recognitions, "description")}>
                {recognitions.description}
              </p>
            </div>
            <div className="mt-[40px] grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[32px]">
              {(recognitions.items || []).map((item: any, index: number) => (
                <article key={`${item.title}-${index}`} className="rounded-[20px] border border-white/15 bg-white px-[24px] py-[28px] text-center text-[#101828] shadow-[0px_10px_30px_rgba(8,8,19,0.15)]" data-tina-field={fieldFor(editable?.recognitions?.items?.[index], "title")}>
                  <div className="mx-auto flex h-[56px] w-[56px] items-center justify-center">
                    <img src="/images/Icon-award.svg" alt="" className="h-[56px] w-[56px]" aria-hidden="true" />
                  </div>
                  <div className="mt-[16px] flex justify-center gap-[8px] text-[#fcc63d]">
                    <StarIcon className="h-[18px] w-[18px]" /><StarIcon className="h-[18px] w-[18px]" /><StarIcon className="h-[18px] w-[18px]" /><StarIcon className="h-[18px] w-[18px]" /><StarIcon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mt-[18px] text-[18px] font-bold leading-[1.1]">{item.title}</h3>
                  {item.subtitle ? <p className="mt-[8px] text-[14px] leading-[1.1] text-[#6a7282]">{item.subtitle}</p> : null}
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {companyInfo ? (
          <div className="overflow-hidden rounded-[24px] bg-[#080813] px-[24px] py-[28px] shadow-[0px_25px_60px_rgba(8,8,19,0.3)] md:px-[40px] md:py-[40px]" data-tina-field={fieldFor(editable, "companyInfo")}>
            <div className="grid grid-cols-1 gap-[32px] xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-[48px]">
              <div>
                <h2 className="text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.companyInfo, "title")}>
                  {companyInfo.title}
                </h2>
                <div className="mt-[32px] space-y-[24px]" data-tina-field={fieldFor(editable?.companyInfo, "items")}>
                  {(companyInfo.items || []).map((item: string, index: number) => (
                    <div key={`${item}-${index}`} className="flex items-start gap-[12px]">
                      <div className="mt-[2px] flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-[rgba(158,105,255,0.3)] text-white">
                        <CheckIcon className="h-[16px] w-[16px]" />
                      </div>
                      <p className="text-[16px] leading-[1.5] text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-[32px] flex flex-wrap gap-[16px]" data-tina-field={fieldFor(editable?.companyInfo, "legalLinks")}>
                  {(companyInfo.legalLinks || []).map((link: any, index: number) => (
                    <a
                      key={`${link.label}-${index}`}
                      href={link.href || "#"}
                      className="inline-flex items-center gap-[10px] rounded-[16px] border border-[#e2e8f0] bg-white px-[20px] py-[12px] text-[15px] font-bold leading-[1.1] text-[#364153] no-underline"
                      data-tina-field={fieldFor(editable?.companyInfo?.legalLinks?.[index], "label")}
                    >
                      {index === 0 ? <LegalScaleIcon /> : null}
                      {index === 1 ? <LegalShieldIcon /> : null}
                      {index === 2 ? <LegalDocIcon /> : null}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[320px] overflow-hidden rounded-[20px]">
                <img
                  src={companyInfo.image}
                  alt={companyInfo.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  data-tina-field={fieldFor(editable?.companyInfo, "image")}
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function ContactSection({ content, editable, sectionId = "contacto-sobre-nosotros" }: { content: any; editable?: any; sectionId?: string }) {
  const contact = content?.contact;
  if (!contact) return null;

  return (
    <section id={sectionId} className="bg-[#f9fafb] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]" data-tina-field={fieldFor(editable, "contact")}>
      <div className="grid w-full grid-cols-1 gap-[32px] lg:grid-cols-[1fr_798px] lg:items-center">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.contact, "title")}>{contact.title}</h2>
          <p className="mt-[20px] text-[16px] leading-[1.5] text-[#080813]" data-tina-field={fieldFor(editable?.contact, "description")}>{contact.description}</p>
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
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-[rgba(137,73,255,0.1)] text-[#8949ff]"><PhoneIcon /></div>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="text-[18px] font-bold text-[#101828] no-underline" data-tina-field={fieldFor(editable?.contact, "phone")}>{contact.phone}</a>
              </div>
            ) : null}
            {contact.email ? (
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-[rgba(137,73,255,0.1)] text-[#8949ff]"><MailIcon /></div>
                <a href={`mailto:${contact.email}`} className="text-[18px] font-bold text-[#101828] no-underline" data-tina-field={fieldFor(editable?.contact, "email")}>{contact.email}</a>
              </div>
            ) : null}
          </div>
        </div>

        <form className="rounded-[12px] bg-[#8949ff] p-[24px] md:p-[40px]">
          <div className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[30px]">
            <div><FormField label={contact.form?.name_label} placeholder={contact.form?.name_placeholder} labelField={fieldFor(editable?.contact?.form, "name_label")} placeholderField={fieldFor(editable?.contact?.form, "name_placeholder")} /></div>
            <div><FormField label={contact.form?.lastname_label} placeholder={contact.form?.lastname_placeholder} labelField={fieldFor(editable?.contact?.form, "lastname_label")} placeholderField={fieldFor(editable?.contact?.form, "lastname_placeholder")} /></div>
            <div><FormField label={contact.form?.email_label} placeholder={contact.form?.email_placeholder} labelField={fieldFor(editable?.contact?.form, "email_label")} placeholderField={fieldFor(editable?.contact?.form, "email_placeholder")} /></div>
            <div><FormField label={contact.form?.phone_label} placeholder={contact.form?.phone_placeholder} labelField={fieldFor(editable?.contact?.form, "phone_label")} placeholderField={fieldFor(editable?.contact?.form, "phone_placeholder")} /></div>
          </div>
          <div className="mt-[16px]"><FormField label={contact.form?.message_label} placeholder={contact.form?.message_placeholder} textarea labelField={fieldFor(editable?.contact?.form, "message_label")} placeholderField={fieldFor(editable?.contact?.form, "message_placeholder")} /></div>
          <div className="mt-[24px] flex flex-col gap-[20px] md:flex-row md:items-center md:justify-between md:gap-[50px]">
            <label className="flex items-center gap-[8px]" data-tina-field={fieldFor(editable?.contact?.form, "terms_label")}>
              <input type="checkbox" className="h-[24px] w-[24px] rounded-[4px] border border-[#9d9ba8] bg-[#ecddee]" />
              <span className="text-[12px] font-bold text-[#d9d9d9]">{contact.form?.terms_label}</span>
            </label>
            <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-[#fcc63d] px-[40px] py-[19px] text-[18px] font-bold uppercase tracking-[1.8px] text-[#0f172b] shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] transition-all duration-300 hover:bg-[#ffe07e] hover:-translate-y-[2px] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.4)] md:w-auto" data-tina-field={fieldFor(editable?.contact?.form, "submit_label")}>
              {contact.form?.submit_label}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default function ReactAboutPage({
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
      <a href="https://wa.link/rmtjml" target="_blank" rel="noopener noreferrer" className="fixed bottom-[24px] right-[24px] z-40 inline-flex items-center gap-[8px] rounded-full bg-[#25d366] px-[20px] py-[12px] text-[15px] font-bold text-white no-underline shadow-[0px_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-[2px]">
        <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true"><path d="M12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 13.66 3.45 15.22 4.23 16.56L3 21L7.58 19.8C8.9 20.58 10.4 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 8.8C9 12.07 11.74 14.8 15 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M14.2 11.4L15.9 10.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        WhatsApp
      </a>
      <AboutHeroSection content={page} editable={editable} />
      <TrajectorySection content={page} editable={editable} />
      <PurposeSection content={page} editable={editable} />
      <PartnersSection content={page} editable={editable} />
      <TestimonialsMetricsSection content={page} editable={editable} />
      <CertificationsSection content={page} editable={editable} />
      <RecognitionsSection content={page} editable={editable} />
      <ContactSection content={page} editable={editable} />
      <LocationsShowcaseSection content={page} editable={editable} />
    </div>
  );
}
