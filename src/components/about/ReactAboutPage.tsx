import { LocationsShowcaseSection } from "@/components/shared/LocationsShowcase";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { tinaField, useTina } from "tinacms/dist/react";
import { TestimonialsSection } from "@/components/home/ReactHome";

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

function LocationPinIcon({ className = "h-[20px] w-[20px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 21C15.5 16.8 18 13.7 18 10.5A6 6 0 1 0 6 10.5C6 13.7 8.5 16.8 12 21Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="10.5" r="2.4" fill="currentColor" />
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

function brandClass(name: string) {
  const normalized = name.toLowerCase();
  if (normalized.includes("santander")) return "text-[#ec1c24]";
  if (normalized.includes("ibercaja")) return "text-[#d62f2f]";
  if (normalized.includes("laboral")) return "text-[#8b215d]";
  if (normalized.includes("kutxa")) return "text-[#8b215d]";
  if (normalized.includes("unicaja")) return "text-[#008d4c]";
  if (normalized.includes("caixa")) return "text-[#0b4ea2]";
  if (normalized.includes("sabadell")) return "text-[#1f3b82]";
  if (normalized.includes("bbva")) return "text-[#0f4c81]";
  if (normalized.includes("ing")) return "text-[#f26b21]";
  if (normalized.includes("bankinter")) return "text-[#f15a24]";
  return "text-[#8949ff]";
}

function CarouselDots({
  count,
  selectedIndex,
  onDotClick
}: {
  count: number;
  selectedIndex: number;
  onDotClick: (index: number) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-[10px]">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onDotClick(index)}
          aria-label={`Ir a la diapositiva ${index + 1}`}
          className={`transition-all duration-300 ${
            selectedIndex === index
              ? "h-[9px] w-[34px] rounded-full bg-[#8949ff]"
              : "h-[9px] w-[9px] rounded-full bg-[#d8d2e3]"
          }`}
        />
      ))}
    </div>
  );
}

function renderStars(count = 5) {
  return Array.from({ length: count }).map((_, index) => <span key={index}>â˜…</span>);
}

void renderStars;

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
    <section className="relative overflow-hidden bg-[#7c42f3] px-[20px] py-[72px] md:px-[48px] md:py-[108px] xl:px-[230px]">
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
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1460px] items-center md:min-h-[672px]">
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
          <p className="mt-[24px] max-w-[620px] text-[16px] leading-[1.1] text-white" data-tina-field={fieldFor(editable?.aboutHero, "description")}>
            {hero.description}
          </p>
          <a
            href={hero.cta?.href || "#contacto-sobre-nosotros"}
            className="mt-[32px] inline-flex items-center justify-center rounded-full bg-[#fcc63d] px-[32px] py-[16px] text-[14px] font-bold uppercase tracking-[1.8px] text-[#101828] no-underline shadow-[0px_10px_15px_rgba(252,198,61,0.1),0px_4px_6px_rgba(252,198,61,0.2)] md:text-[18px]"
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
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[312px]" data-tina-field={fieldFor(editable, "trajectory")}>
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 items-stretch gap-[32px] xl:grid-cols-2 xl:gap-[80px]">
        <div className="flex flex-col justify-center py-0 xl:py-[80px]">
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.trajectory, "title")}>
            {trajectory.title}
          </h2>
          <p className="mt-[32px] whitespace-pre-line text-[16px] leading-[1.1] text-[#101828]" data-tina-field={fieldFor(editable?.trajectory, "description")}>
            {trajectory.description}
          </p>
          <div className="mt-[24px] max-w-[540px] border-l-[3px] border-[#8949ff] bg-white pl-[18px] pr-[8px] py-[6px]">
            <p className="text-[15px] font-bold leading-[1.1] text-[#101828]" data-tina-field={fieldFor(editable?.trajectory, "highlight")}>
              {trajectory.highlight}
            </p>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[40px]">
          <img
            src={trajectory.image}
            alt={trajectory.title}
            className="absolute inset-0 h-full w-full object-cover"
            data-tina-field={fieldFor(editable?.trajectory, "image")}
          />
          <div className="absolute bottom-[26px] left-[26px] rounded-[16px] border border-white bg-[#f9fafb] p-[24px] shadow-[0px_20px_25px_rgba(0,0,0,0.1),0px_8px_10px_rgba(0,0,0,0.1)]">
            <p className="text-[12px] font-bold leading-[1.1] text-[#6a7282]" data-tina-field={fieldFor(editable?.trajectory, "badgeLabel")}>
              {trajectory.badgeLabel}
            </p>
            <p className="mt-[4px] text-[15px] font-bold leading-[1.1] text-[#080813]" data-tina-field={fieldFor(editable?.trajectory, "badgeText")}>
              {trajectory.badgeText}
            </p>
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
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[312px]" data-tina-field={fieldFor(editable, "purposeSection")}>
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 items-stretch gap-[32px] xl:grid-cols-2 xl:gap-[80px]">
        <div className="relative order-2 min-h-[420px] overflow-hidden rounded-[40px] xl:order-1">
          <img
            src={section.image}
            alt={section.title}
            className="absolute inset-0 h-full w-full object-cover"
            data-tina-field={fieldFor(editable?.purposeSection, "image")}
          />
        </div>
        <div className="order-1 flex flex-col justify-center py-0 xl:order-2 xl:py-[40px]">
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.purposeSection, "title")}>
            {section.title}
          </h2>
          <p className="mt-[32px] whitespace-pre-line text-[16px] leading-[1.1] text-[#101828]" data-tina-field={fieldFor(editable?.purposeSection, "description")}>
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
    slidesToScroll: 1
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  if (!partners) return null;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || items.length <= 1) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const autoScroll = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => {
      window.clearInterval(autoScroll);
    };
  }, [emblaApi, items.length, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  return (
    <section className="bg-[#f9fafb] px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "partners")}>
      <div className="mx-auto flex max-w-[1460px] flex-col items-center gap-[24px]">
        <div className="w-full text-center">
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.partners, "title")}>
            {partners.title}
          </h2>
          <p className="mx-auto mt-[16px] max-w-[940px] text-[16px] leading-[1.15] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.partners, "description")}>
            {partners.description}
          </p>
        </div>
        <div className="flex w-full max-w-[1240px] flex-col items-center gap-[24px]">
          <div className="w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((item: any, index: number) => (
                <div
                  key={`${item.name}-${index}`}
                  className="flex-[0_0_50%] px-[14px] md:flex-[0_0_33.333%] lg:flex-[0_0_25%] xl:flex-[0_0_20%]"
                  data-tina-field={fieldFor(editable?.partners?.items?.[index], "name")}
                >
                  <div className="flex h-[68px] items-center justify-center">
                    <span className={`text-center text-[22px] font-black uppercase leading-none tracking-[-0.8px] md:text-[24px] ${brandClass(item.name)}`}>
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {snapCount > 1 ? <CarouselDots count={snapCount} selectedIndex={selectedIndex} onDotClick={scrollTo} /> : null}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection({ content, editable }: { content: any; editable?: any }) {
  const certifications = content?.certifications;
  if (!certifications) return null;

  return (
    <section className="bg-[#fcfaf7] px-[20px] pb-[56px] md:px-[48px] md:pb-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "certifications")}>
      <div className="mx-auto max-w-[1460px] rounded-[20px] border border-[#ece7f4] bg-white px-[24px] py-[28px] shadow-[0px_10px_30px_rgba(16,24,40,0.05)] md:px-[48px] md:py-[32px]">
        <div className="grid grid-cols-1 items-center gap-[28px] lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-[40px]">
          <div>
            <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[32px]" data-tina-field={fieldFor(editable?.certifications, "title")}>
              {certifications.title}
            </h2>
            <p className="mt-[12px] max-w-[760px] text-[14px] leading-[1.15] text-[#6a7282] md:text-[15px]" data-tina-field={fieldFor(editable?.certifications, "description")}>
              {certifications.description}
            </p>
          </div>
          {certifications.logoImage ? (
            <div className="flex justify-start lg:justify-end">
              <img
                src={certifications.logoImage}
                alt={certifications.title}
                className="w-full max-w-[255px] object-contain"
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
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#4f3bf9_0%,#3f2ab6_100%)] px-[20px] py-[56px] text-white md:px-[48px] md:py-[80px] xl:px-[230px]">
      {recognitions?.texture ? (
        <img
          src={recognitions.texture}
          alt=""
          className="pointer-events-none absolute right-[-160px] top-[40px] hidden opacity-25 md:block"
          data-tina-field={fieldFor(editable?.recognitions, "texture")}
        />
      ) : null}
      <div className="relative mx-auto max-w-[1460px] space-y-[32px]">
        {recognitions ? (
          <div className="px-[4px] py-[8px] text-white md:px-[20px]" data-tina-field={fieldFor(editable, "recognitions")}>
            <div className="mx-auto max-w-[980px] text-center">
              <h2 className="text-[28px] font-bold leading-[1.1] md:text-[40px]" data-tina-field={fieldFor(editable?.recognitions, "title")}>
                {recognitions.title}
              </h2>
              <p className="mt-[18px] whitespace-pre-line text-[15px] leading-[1.15] text-white/90 md:text-[16px]" data-tina-field={fieldFor(editable?.recognitions, "description")}>
                {recognitions.description}
              </p>
            </div>
            <div className="mt-[40px] grid grid-cols-1 gap-[20px] xl:grid-cols-3 xl:gap-[32px]">
              {(recognitions.items || []).map((item: any, index: number) => (
                <article key={`${item.title}-${index}`} className="rounded-[20px] border border-white/15 bg-white px-[24px] py-[28px] text-center text-[#101828] shadow-[0px_10px_30px_rgba(8,8,19,0.15)]" data-tina-field={fieldFor(editable?.recognitions?.items?.[index], "title")}>
                  <div className="mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-[10px] bg-[#ffdf80] text-[#8949ff]">
                    <StarIcon />
                  </div>
                  <div className="mt-[16px] flex justify-center gap-[8px] text-[#fcc63d]">
                    <StarIcon className="h-[18px] w-[18px]" /><StarIcon className="h-[18px] w-[18px]" /><StarIcon className="h-[18px] w-[18px]" /><StarIcon className="h-[18px] w-[18px]" /><StarIcon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="mt-[18px] text-[18px] font-bold leading-[1.1]" data-tina-field={fieldFor(editable?.recognitions?.items?.[index], "title")}>{item.title}</h3>
                  {item.subtitle ? <p className="mt-[8px] text-[14px] leading-[1.1] text-[#6a7282]" data-tina-field={fieldFor(editable?.recognitions?.items?.[index], "subtitle")}>{item.subtitle}</p> : null}
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {companyInfo ? (
          <div className="overflow-hidden rounded-[24px] bg-[#080813] px-[24px] py-[28px] shadow-[0px_25px_60px_rgba(8,8,19,0.3)] md:px-[40px] md:py-[40px]" data-tina-field={fieldFor(editable, "companyInfo")}>
            <div className="grid grid-cols-1 gap-[32px] xl:grid-cols-[minmax(0,1fr)_520px] xl:gap-[48px]">
              <div className="relative">
                <div className="absolute left-[25%] top-[-40px] hidden h-[360px] w-[360px] rounded-full bg-[rgba(79,59,249,0.22)] blur-[90px] md:block"></div>
                <div className="absolute left-[45%] top-[-40px] hidden h-[240px] w-[240px] rounded-full bg-[rgba(137,73,255,0.25)] blur-[70px] md:block"></div>
                <div className="relative">
                  <h2 className="text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.companyInfo, "title")}>
                    {companyInfo.title}
                  </h2>
                  <div className="mt-[32px] space-y-[24px]" data-tina-field={fieldFor(editable?.companyInfo, "items")}>
                    {(companyInfo.items || []).map((item: string, index: number) => (
                      <div key={`${item}-${index}`} className="flex items-start gap-[12px]">
                        <div className="mt-[2px] flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[rgba(158,105,255,0.3)] text-white">
                          <CheckIcon className="h-[16px] w-[16px]" />
                        </div>
                        <p className="text-[16px] leading-[1.15] text-white md:text-[18px]" data-tina-field={fieldFor(editable?.companyInfo, "items")}>{item}</p>
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
              </div>
              <div className="relative min-h-[320px] overflow-hidden rounded-[20px]">
                <img
                  src={companyInfo.image}
                  alt={companyInfo.title}
                  className="absolute inset-0 h-full w-full object-cover"
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
    <section id={sectionId} className="bg-[#f9fafb] px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "contact")}>
      <div className="mx-auto grid max-w-[1460px] grid-cols-1 gap-[32px] lg:grid-cols-[1fr_798px] lg:items-center">
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
              {contact.scheduleText ? <p className="mt-[16px] whitespace-pre-line text-[15px] font-bold leading-[1.15] text-[#101828]" data-tina-field={fieldFor(editable?.contact, "scheduleText")}>{contact.scheduleText}</p> : null}
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
            <button type="button" className="inline-flex items-center justify-center rounded-full bg-[#fcc63d] px-[40px] py-[19px] text-[18px] font-bold uppercase tracking-[1.8px] text-[#0f172b]" data-tina-field={fieldFor(editable?.contact?.form, "submit_label")}>
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
      <AboutHeroSection content={page} editable={editable} />
      <TrajectorySection content={page} editable={editable} />
      <PurposeSection content={page} editable={editable} />
      <PartnersSection content={page} editable={editable} />
      <TestimonialsSection content={page} editable={editable} />
      <CertificationsSection content={page} editable={editable} />
      <RecognitionsSection content={page} editable={editable} />
      <ContactSection content={page} editable={editable} />
      <LocationsShowcaseSection content={page} editable={editable} />
    </div>
  );
}

