import React from "react";
import { tinaField, useTina } from "tinacms/dist/react";
import { Frame60, StepTimelineSection } from "@/components/home/ReactHome";

function fieldFor(object: any, property: string) {
  return object ? tinaField(object, property) : undefined;
}

function brandClass(name: string) {
  const normalized = name.toLowerCase();
  if (normalized.includes("santander")) return "text-[#ec1c24]";
  if (normalized.includes("caixa")) return "text-[#0b4ea2]";
  if (normalized.includes("sabadell")) return "text-[#1f3b82]";
  if (normalized.includes("bbva")) return "text-[#0f4c81]";
  if (normalized.includes("ing")) return "text-[#f26b21]";
  if (normalized.includes("bankinter")) return "text-[#f15a24]";
  return "text-[#8949ff]";
}

function renderStars(count = 5) {
  return Array.from({ length: count }).map((_, index) => <span key={index}>★</span>);
}

function FormField({
  label,
  placeholder,
  textarea = false
}: {
  label: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="flex flex-col gap-[14px]">
      <span className="text-[16px] font-bold text-white">{label}</span>
      {textarea ? (
        <textarea
          className="min-h-[110px] rounded-[6px] border border-[#9d9ba8] px-[20px] py-[16px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]"
          placeholder={placeholder}
        />
      ) : (
        <input
          className="rounded-[6px] border border-[#9d9ba8] px-[20px] py-[12px] text-[12px] text-[#101828] placeholder:text-[#9d9ba8]"
          placeholder={placeholder}
        />
      )}
    </label>
  );
}

function HeroSection({ content, editable }: { content: any; editable?: any }) {
  const hero = content?.hero;
  if (!hero) return null;

  return (
    <section className="relative overflow-hidden bg-[#f9fafb]">
      <img
        src={hero.background_desktop}
        alt=""
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        data-tina-field={fieldFor(editable?.hero, "background_desktop")}
      />
      <img
        src={hero.background_mobile || hero.background_desktop}
        alt=""
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        data-tina-field={fieldFor(editable?.hero, "background_mobile")}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,19,0.18)_0%,rgba(8,8,19,0)_55%)]" />
      <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1920px] items-center px-[20px] py-[56px] md:min-h-[803px] md:px-[48px] xl:px-[230px]">
        <div className="w-full max-w-[680px] rounded-[20px] bg-[linear-gradient(180deg,#ad81ff_0%,#8949ff_58%,#2b2148_100%)] p-[24px] shadow-[0px_24px_60px_rgba(137,73,255,0.28)] md:p-[40px]">
          <h1 className="text-[36px] font-bold leading-[1.08] tracking-[0] text-white md:text-[56px] md:tracking-[1px]">
            <span className="text-[#fcc63d]" data-tina-field={fieldFor(editable?.hero, "title_part1")}>
              {hero.title_part1}
            </span>
            <span data-tina-field={fieldFor(editable?.hero, "title_part2")}>{hero.title_part2}</span>
          </h1>
          <p
            className="mt-[24px] max-w-[520px] text-[15px] leading-[1.15] text-white md:text-[16px]"
            data-tina-field={fieldFor(editable?.hero, "description")}
          >
            {hero.description}
          </p>
          <a
            href={hero.cta?.href || "#contacto-soluciones"}
            className="mt-[24px] inline-flex w-full items-center justify-center rounded-full bg-[#fcc63d] px-[24px] py-[16px] text-center text-[14px] font-bold uppercase tracking-[1.6px] text-[#0f172b] no-underline shadow-[0px_18px_40px_rgba(252,198,61,0.3)] sm:w-auto md:px-[40px] md:py-[19px] md:text-[18px] md:tracking-[1.8px]"
            data-tina-field={fieldFor(editable?.hero?.cta, "label")}
          >
            {hero.cta?.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function PartnersSection({ content, editable }: { content: any; editable?: any }) {
  const partners = content?.partners;
  if (!partners) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "partners")}>
      <div className="mx-auto flex max-w-[1460px] flex-col items-center gap-[24px]">
        <div className="w-full text-center">
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.partners, "title")}>
            {partners.title}
          </h2>
          <p className="mx-auto mt-[16px] max-w-[940px] text-[16px] leading-[1.15] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.partners, "description")}>
            {partners.description}
          </p>
        </div>
        <div className="flex w-full snap-x snap-mandatory gap-[24px] overflow-x-auto pb-[8px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center md:overflow-visible">
          {(partners.items || []).map((item: any, index: number) => (
            <div
              key={`${item.name}-${index}`}
              className="min-w-[140px] snap-start rounded-[18px] border border-[#ebe8f2] bg-white px-[18px] py-[18px] text-center shadow-[0px_8px_24px_rgba(16,24,40,0.06)]"
              data-tina-field={fieldFor(editable?.partners?.items?.[index], "name")}
            >
              <span className={`text-[20px] font-black uppercase leading-none tracking-[-0.8px] ${brandClass(item.name)}`}>{item.name}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-[12px]">
          <span className="h-[8px] w-[8px] rounded-full bg-[#e0d0ef]" />
          <span className="h-[8px] w-[8px] rounded-full bg-[#e0d0ef]" />
          <span className="h-[8px] w-[28px] rounded-full bg-[#8949ff]" />
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ content, editable }: { content: any; editable?: any }) {
  const services = content?.services;
  if (!services) return null;

  const serviceOrder = [
    "Recibe información",
    "Recibe informacion",
    "Receive information",
    "Busca nueva hipoteca",
    "Search for a new mortgage",
    "Mejora tu hipoteca",
    "Improve your mortgage",
    "Calcula la hipoteca",
    "Calculate the mortgage"
  ];

  const orderedServices = (services.items || [])
    .slice()
    .sort((a: any, b: any) => {
      const aIndex = serviceOrder.indexOf(a.title);
      const bIndex = serviceOrder.indexOf(b.title);
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });

  return (
    <section className="bg-[#f7f5f9] px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "services")}>
      <div className="mx-auto max-w-[1460px] rounded-[36px] bg-[#f7f5f9]">
        <h2 className="text-center text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.services, "title")}>
          {services.title}
        </h2>
        <p className="mx-auto mt-[16px] max-w-[860px] text-center text-[16px] leading-[1.15] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.services, "description")}>
          {services.description}
        </p>
        <div className="mt-[40px] grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-4">
          {orderedServices.map((item: any, index: number) => (
            <article key={`${item.title}-${index}`} className="flex flex-col gap-[16px]">
              <h3 className="text-[24px] font-bold leading-[1.1] text-[#080813] md:text-[28px]" data-tina-field={fieldFor(editable?.services?.items?.[index], "title")}>
                {item.title}
              </h3>
              <div className="relative min-h-[480px] overflow-hidden rounded-[20px]">
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" data-tina-field={fieldFor(editable?.services?.items?.[index], "image")} />
                <div className="absolute inset-x-[18px] bottom-[18px] rounded-[16px] bg-white p-[16px] shadow-[0px_12px_32px_rgba(16,24,40,0.18)]">
                  <p className="text-[15px] leading-[1.1] text-[#080813]" data-tina-field={fieldFor(editable?.services?.items?.[index], "description")}>
                    {item.description}
                  </p>
                  <a href={item.button?.href || "#contacto-soluciones"} className="mt-[20px] inline-flex items-center gap-[8px] text-[18px] font-bold leading-[1.1] text-[#8949ff] no-underline" data-tina-field={fieldFor(editable?.services?.items?.[index]?.button, "label")}>
                    {item.button?.label}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SimulatorSection({ content, editable }: { content: any; editable?: any }) {
  const simulator = content?.simulator;
  const benefits = content?.benefits;
  if (!simulator) return null;

  const fallbackIcons = ["i", "+", "%", "$", "*"];

  return (
    <section id="simulador" className="overflow-hidden bg-[linear-gradient(135deg,#4f3bf9_0%,#8949ff_42%,#ad5cff_100%)] px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]">
      <div className="mx-auto max-w-[1460px]">
        <div className="grid grid-cols-1 items-start gap-[32px] xl:grid-cols-[minmax(0,1fr)_576px] xl:gap-[40px]">
          <div data-tina-field={fieldFor(editable, "simulator")}>
            <h2 className="text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.simulator, "title")}>
              {simulator.title}
            </h2>
            <img src={simulator.image} alt={simulator.title} className="mt-[24px] h-[240px] w-full rounded-[20px] object-cover md:h-[299px]" data-tina-field={fieldFor(editable?.simulator, "image")} />
            <div className="mt-[24px] space-y-[16px] text-[15px] leading-[1.15] text-white md:text-[16px]">
              <p data-tina-field={fieldFor(editable?.simulator, "description")}>{simulator.description}</p>
              {simulator.secondaryDescription ? <p data-tina-field={fieldFor(editable?.simulator, "secondaryDescription")}>{simulator.secondaryDescription}</p> : null}
            </div>
            <div className="mt-[24px] rounded-[16px] border-l-4 border-[#8949ff] bg-white p-[24px] shadow-[0px_1px_3px_rgba(0,0,0,0.1)]">
              <p className="text-[18px] font-bold leading-[1.1] text-[#ad5cff]" data-tina-field={fieldFor(editable?.simulator, "noteTitle")}>{simulator.noteTitle}</p>
              <p className="mt-[16px] text-[15px] font-bold leading-[1.1] text-[#101828]" data-tina-field={fieldFor(editable?.simulator, "noteText")}>{simulator.noteText}</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-[#f3f4f6] bg-white p-[24px] shadow-[0px_32px_64px_-16px_rgba(0,0,0,0.1)] md:rounded-[40px] md:p-[32px]" data-tina-field={fieldFor(editable, "simulator")}>
            {simulator.offerBadge ? <span className="inline-flex rounded-full bg-[rgba(137,73,255,0.1)] px-[12px] py-[4px] text-[10px] font-bold uppercase tracking-[1px] text-[#8949ff]" data-tina-field={fieldFor(editable?.simulator, "offerBadge")}>{simulator.offerBadge}</span> : null}
            <h3 className="mt-[16px] text-[32px] font-bold leading-none text-[#0f172b] md:text-[37px]" data-tina-field={fieldFor(editable?.simulator, "calculatorTitle")}>{simulator.calculatorTitle}</h3>
            <div className="mt-[24px] space-y-[28px]">
              {(simulator.sliders || []).map((item: any, index: number) => (
                <div key={`${item.label}-${index}`} data-tina-field={fieldFor(editable?.simulator?.sliders?.[index], "label")}>
                  <div className="mb-[12px] flex items-center justify-between gap-[16px]">
                    <span className="text-[13px] font-bold uppercase tracking-[0.65px] text-[#99a1af]">{item.label}</span>
                    <span className="rounded-full bg-[#ede8fb] px-[16px] py-[4px] text-[14px] font-black text-[#8949ff]">{item.value}</span>
                  </div>
                  <div className="relative h-[8px] rounded-full bg-[#f3f4f6]">
                    <div className="h-[8px] rounded-full bg-[#8949ff]" style={{ width: `${item.progress}%` }} />
                    <div className="absolute top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full border-2 border-[#8949ff] bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)]" style={{ left: `calc(${item.progress}% - 10px)` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-[28px] rounded-[24px] border border-[#f1f5f9] bg-[#f8fafc] p-[24px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#90a1b9]" data-tina-field={fieldFor(editable?.simulator, "resultLabel")}>{simulator.resultLabel}</p>
              <p className="mt-[4px] text-[30px] font-black leading-[1.1] text-[#0f172b]" data-tina-field={fieldFor(editable?.simulator, "resultValue")}>{simulator.resultValue}</p>
            </div>
            <a href={simulator.cta?.href || "#contacto-soluciones"} className="mt-[28px] inline-flex w-full items-center justify-center gap-[12px] rounded-[24px] bg-[#fcc63d] px-[24px] py-[19px] text-center text-[18px] font-bold uppercase tracking-[1.8px] text-[#080813] no-underline shadow-[0px_20px_25px_rgba(252,198,61,0.3)]" data-tina-field={fieldFor(editable?.simulator?.cta, "label")}>
              {simulator.cta?.label}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {benefits ? (
          <div className="mt-[56px]" data-tina-field={fieldFor(editable, "benefits")}>
            <h3 className="text-center text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.benefits, "title")}>{benefits.title}</h3>
            <p className="mx-auto mt-[16px] max-w-[960px] text-center text-[16px] leading-[1.15] text-white md:text-[18px]" data-tina-field={fieldFor(editable?.benefits, "description")}>{benefits.description}</p>
            <div className="mt-[32px] grid grid-cols-2 gap-[16px] lg:grid-cols-5 lg:gap-[24px]">
              {(benefits.items || []).map((item: any, index: number) => (
                <div key={
                  `${item.text}-${index}`
                } className="flex min-h-[170px] flex-col items-center rounded-[28px] border border-[#ad81ff] bg-[#ad81ff] px-[14px] py-[24px] text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#fcc63d] shadow-[0px_10px_15px_rgba(252,198,61,0.2)]" data-tina-field={fieldFor(editable?.benefits?.items?.[index], "icon")}>
                    {item.icon ? (
                      <img src={item.icon} alt="" className="h-[28px] w-[28px] object-contain" />
                    ) : (
                      <span className="text-[22px] text-[#080813]">{fallbackIcons[index] || "*"}</span>
                    )}
                  </div>
                  <p className="mt-[20px] text-[14px] font-bold leading-[1.25] text-white md:text-[16px]" data-tina-field={fieldFor(editable?.benefits?.items?.[index], "text")}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function HowItWorksSection({ content, editable }: { content: any; editable?: any }) {
  const section = content?.howItWorks;
  if (!section) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[312px]" data-tina-field={fieldFor(editable, "howItWorks")}>
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 items-center gap-[32px] lg:grid-cols-[608px_minmax(0,1fr)] lg:gap-[80px]">
        <img src={section.image || "/images/about-efiteca.png"} alt="Asesoria hipotecaria" className="h-[320px] w-full rounded-[32px] object-cover md:h-[406px]" data-tina-field={fieldFor(editable?.howItWorks, "image")} />
        <div>
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.howItWorks, "title")}>{section.title}</h2>
          <p className="mt-[24px] text-[16px] leading-[1.15] text-[#101828] md:text-[18px]" data-tina-field={fieldFor(editable?.howItWorks, "description")}>{section.description}</p>
          <div className="mt-[32px] space-y-[18px]">
            {(section.items || []).map((item: any, index: number) => (
              <div key={`${item.title}-${index}`} className="flex items-start gap-[16px]">
                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#8949ff] text-white" data-tina-field={fieldFor(editable?.howItWorks?.items?.[index], "icon")}>
                  {item.icon ? <img src={item.icon} alt="" className="h-[18px] w-[18px] object-contain" /> : "v"}
                </div>
                <div className="pt-[2px]">
                  <p className="text-[16px] font-bold leading-[1.1] text-[#101828]" data-tina-field={fieldFor(editable?.howItWorks?.items?.[index], "title")}>{item.title}</p>
                  {item.description ? <p className="mt-[8px] text-[15px] leading-[1.15] text-[#667085]" data-tina-field={fieldFor(editable?.howItWorks?.items?.[index], "description")}>{item.description}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionCtaSection({ content, editable }: { content: any; editable?: any }) {
  const actionCta = content?.actionCta;
  if (!actionCta) return null;

  return (
    <section className="relative overflow-hidden bg-[#8949ff] px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "actionCta")}>
      <div className="absolute inset-y-0 left-0 w-[40%] bg-[radial-gradient(circle_at_left,rgba(173,92,255,0.4),transparent_72%)]" />
      <div className="absolute inset-y-0 right-0 w-[35%] bg-[radial-gradient(circle_at_right,rgba(252,198,61,0.18),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1460px]">
        <div className="flex w-full flex-col items-start justify-between gap-[24px] rounded-[28px] border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.06)] px-[28px] py-[32px] md:flex-row md:items-center md:rounded-[36px] md:px-[48px] md:py-[48px] xl:px-[60px]">
        <div className="max-w-[760px]">
          <h2 className="text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.actionCta, "title")}>{actionCta.title}</h2>
          <p className="mt-[20px] text-[16px] leading-[1.2] text-white md:text-[18px]" data-tina-field={fieldFor(editable?.actionCta, "description")}>{actionCta.description}</p>
        </div>
        <a href={actionCta.button?.href || "#contacto-soluciones"} className="inline-flex w-full items-center justify-center rounded-full bg-[#fcc63d] px-[24px] py-[16px] text-[14px] font-bold uppercase tracking-[1.6px] text-[#080813] no-underline shadow-[0px_18px_40px_rgba(252,198,61,0.28)] sm:w-auto md:px-[40px] md:text-[18px]" data-tina-field={fieldFor(editable?.actionCta?.button, "label")}>
          {actionCta.button?.label}
        </a>
      </div>
      </div>
    </section>
  );
}

function ComparisonSection({ content, editable }: { content: any; editable?: any }) {
  const comparison = content?.comparison;
  if (!comparison) return null;

  return (
    <section className="relative overflow-hidden bg-[#101828] px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "comparison")}>
      <div className="absolute left-[-180px] top-[200px] h-[480px] w-[480px] rounded-full bg-[rgba(137,73,255,0.18)] blur-[110px]" />
      <div className="relative mx-auto max-w-[1460px]">
        <h2 className="text-center text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.comparison, "title")}>{comparison.title}</h2>
        <div className="mt-[40px] overflow-hidden rounded-[16px] bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <div className="bg-[linear-gradient(90deg,#4f3bf9_0%,#8949ff_100%)] px-[16px] py-[14px] text-[20px] font-bold text-white md:text-[22px]" data-tina-field={fieldFor(editable?.comparison, "leftTitle")}>{comparison.leftTitle}</div>
              {(comparison.leftItems || []).map((item: string, index: number) => (
                <div key={`${item}-${index}`} className="flex items-center gap-[16px] border-t border-[#f2f4f7] px-[16px] py-[18px]" data-tina-field={fieldFor(editable?.comparison, "leftItems")}>
                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[rgba(79,59,249,0.1)] text-[#4f3bf9]">✓</div>
                  <p className="text-[16px] font-bold leading-[1.1] text-[#101828]">{item}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-[#9d9ba8] px-[16px] py-[14px] text-[20px] font-bold text-white md:text-[22px]" data-tina-field={fieldFor(editable?.comparison, "rightTitle")}>{comparison.rightTitle}</div>
              {(comparison.rightItems || []).map((item: string, index: number) => (
                <div key={`${item}-${index}`} className="flex items-center gap-[16px] border-t border-[#f2f4f7] px-[16px] py-[18px]" data-tina-field={fieldFor(editable?.comparison, "rightItems")}>
                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#9d9ba8] text-white">×</div>
                  <p className="text-[16px] font-bold leading-[1.1] text-[#9d9ba8]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[24px] text-center">
          <a href={comparison.cta?.href || "#contacto-soluciones"} className="inline-flex items-center justify-center rounded-full bg-[#fcc63d] px-[32px] py-[16px] text-[18px] font-bold uppercase tracking-[1.8px] text-[#101828] no-underline" data-tina-field={fieldFor(editable?.comparison?.cta, "label")}>
            {comparison.cta?.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialsMetricsSection({ content, editable }: { content: any; editable?: any }) {
  const testimonials = content?.testimonials;
  const metrics = content?.metrics;
  if (!testimonials && !metrics) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]">
      <div className="mx-auto max-w-[1460px]">
        {testimonials ? (
          <>
            <h2 className="text-center text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.testimonials, "title")}>{testimonials.title}</h2>
            <p className="mx-auto mt-[16px] max-w-[1120px] text-center text-[16px] leading-[1.15] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.testimonials, "description")}>{testimonials.description}</p>
            <div className="mt-[40px] grid grid-cols-1 gap-[24px] xl:grid-cols-3">
              {(testimonials.items || []).slice(0, 3).map((item: any, index: number) => (
                <article key={`${item.name}-${index}`} className="rounded-[28px] border border-[#ead9ef] bg-[#f8eef7] p-[32px] shadow-[0px_12px_32px_rgba(16,24,40,0.05)]" data-tina-field={fieldFor(editable?.testimonials?.items?.[index], "text")}>
                  <div className="flex gap-[8px] text-[#fcc63d]">{renderStars(item.stars || 5)}</div>
                  <p className="mt-[24px] text-[18px] leading-[1.45] text-[#101828]">"{item.text}"</p>
                  <div className="mt-[24px] flex items-center gap-[12px]">
                    <img src={item.image} alt={item.name} className="h-[48px] w-[48px] rounded-full object-cover" />
                    <div>
                      <p className="text-[18px] font-bold text-[#101828]">{item.name}</p>
                      <p className="text-[14px] text-[#667085]">{item.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : null}

        {metrics ? (
          <div className="mt-[40px] rounded-[32px] bg-[#12192d] px-[24px] py-[28px] md:rounded-[40px] md:px-[60px] md:py-[32px]" data-tina-field={fieldFor(editable, "metrics")}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[40px]">
              {(metrics.items || []).map((item: any, index: number) => (
                <div key={`${item.title}-${index}`} className={`text-center md:text-left ${index < (metrics.items?.length || 0) - 1 ? "md:border-r md:border-[#744c98] md:pr-[40px]" : ""}`} data-tina-field={fieldFor(editable?.metrics?.items?.[index], "value")}>
                  <p className="text-[40px] font-normal leading-none text-[#c993ff] md:text-[56px]">{item.value}</p>
                  <p className="mt-[10px] text-[18px] font-bold leading-[1.2] text-white md:text-[22px]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ContactSection({ content, editable }: { content: any; editable?: any }) {
  const contact = content?.contact;
  if (!contact) return null;

  return (
    <section id="contacto-soluciones" className="bg-[#f9fafb] px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "contact")}>
      <div className="mx-auto grid max-w-[1460px] grid-cols-1 gap-[32px] lg:grid-cols-[1fr_798px] lg:items-center">
        <div>
          <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.contact, "title")}>{contact.title}</h2>
          <p className="mt-[20px] text-[15px] leading-[1.15] text-[#080813]" data-tina-field={fieldFor(editable?.contact, "description")}>{contact.description}</p>
          <div className="mt-[24px] space-y-[16px]" data-tina-field={fieldFor(editable?.contact, "highlights")}>
            {(contact.highlights || []).map((highlight: string, index: number) => (
              <div key={`${highlight}-${index}`} className="flex items-center gap-[12px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[rgba(137,73,255,0.1)] text-[#8949ff]">✓</div>
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
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-[rgba(137,73,255,0.1)] text-[#8949ff]">☎</div>
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="text-[18px] font-bold text-[#101828] no-underline" data-tina-field={fieldFor(editable?.contact, "phone")}>{contact.phone}</a>
              </div>
            ) : null}
            {contact.email ? (
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[16px] bg-[rgba(137,73,255,0.1)] text-[#8949ff]">✉</div>
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

function LocationsShowcaseSection({ content, editable }: { content: any; editable?: any }) {
  const locationsShowcase = content?.locationsShowcase;
  const mainLocation = content?.locations?.items?.[0];
  if (!locationsShowcase) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "locationsShowcase")}>
      <div className="mx-auto grid max-w-[1460px] grid-cols-1 gap-[32px] lg:grid-cols-[690px_minmax(0,1fr)]">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.locationsShowcase, "title")}>{locationsShowcase.title}</h2>
            <p className="mt-[16px] max-w-[650px] text-[16px] leading-[1.15] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.locationsShowcase, "description")}>{locationsShowcase.description}</p>
            {mainLocation ? (
              <div className="mt-[32px] rounded-[24px] border border-[#eceff4] bg-[#f8fafc] p-[24px]" data-tina-field={fieldFor(editable?.locations?.items?.[0], "address")}>
                <div className="flex items-start gap-[12px]">
                  <div className="mt-[4px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[rgba(137,73,255,0.1)] text-[#8949ff]">⌖</div>
                  <p className="text-[16px] leading-[1.2] text-[#101828]">{mainLocation.address}</p>
                </div>
              </div>
            ) : null}
          </div>
          <div className="mt-[24px] rounded-[28px] bg-[linear-gradient(135deg,#8949ff_0%,#ad5cff_100%)] p-[32px] text-white" data-tina-field={fieldFor(editable?.locationsShowcase, "cta")}>
            <h3 className="max-w-[260px] text-[28px] font-bold leading-[1.1]" data-tina-field={fieldFor(editable?.locationsShowcase?.cta, "title")}>{locationsShowcase.cta?.title}</h3>
            <p className="mt-[16px] max-w-[260px] text-[16px] leading-[1.15]" data-tina-field={fieldFor(editable?.locationsShowcase?.cta, "description")}>{locationsShowcase.cta?.description}</p>
            <a href={locationsShowcase.cta?.button?.href || "#contacto-soluciones"} className="mt-[24px] inline-flex items-center justify-center rounded-full bg-[#fcc63d] px-[28px] py-[16px] text-[14px] font-bold uppercase tracking-[1.4px] text-[#080813] no-underline md:px-[40px] md:text-[18px]" data-tina-field={fieldFor(editable?.locationsShowcase?.cta?.button, "label")}>
              {locationsShowcase.cta?.button?.label}
            </a>
          </div>
        </div>
        <img src={locationsShowcase.mapImage} alt="Mapa de ubicaciones" className="h-full min-h-[420px] w-full rounded-[28px] object-cover" data-tina-field={fieldFor(editable?.locationsShowcase, "mapImage")} />
      </div>
    </section>
  );
}

function FaqSection({ content, editable }: { content: any; editable?: any }) {
  const faq = content?.faq;
  if (!faq) return null;

  return (
    <section className="bg-white px-[20px] py-[56px] md:px-[48px] md:py-[80px] xl:px-[230px]" data-tina-field={fieldFor(editable, "faq")}>
      <div className="mx-auto max-w-[1460px]">
        <h2 className="text-center text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.faq, "title")}>{faq.title}</h2>
        <div className="mt-[40px] space-y-[12px]">
          {(faq.items || []).map((item: any, index: number) => (
            <details key={`${item.question}-${index}`} className="group rounded-[20px] bg-[#8949ff] px-[24px] py-[24px] text-white" data-tina-field={fieldFor(editable?.faq?.items?.[index], "question")}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] text-[18px] font-bold leading-[1.15]">
                <span>{item.question}</span>
                <span className="text-[28px] transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pt-[16px] text-[16px] leading-[1.3] text-white/90">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ReactSolutionsPage({
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
      <HeroSection content={page} editable={editable} />
      <PartnersSection content={page} editable={editable} />
      <ServicesSection content={page} editable={editable} />
      <SimulatorSection content={page} editable={editable} />
      <HowItWorksSection content={page} editable={editable} />
      <ActionCtaSection content={page} editable={editable} />
      <div data-tina-field={fieldFor(editable, "steps")}><StepTimelineSection content={page} editable={editable} /></div>
      <ComparisonSection content={page} editable={editable} />
      <TestimonialsMetricsSection content={page} editable={editable} />
      <ContactSection content={page} editable={editable} />
      <LocationsShowcaseSection content={page} editable={editable} />
      <FaqSection content={page} editable={editable} />
      <div className="bg-white"><Frame60 content={page} editable={editable} /></div>
    </div>
  );
}


