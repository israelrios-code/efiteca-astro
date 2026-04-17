import { LocationsShowcaseSection } from "@/components/shared/LocationsShowcase";



import React from "react";



import { tinaField, useTina } from "tinacms/dist/react";



import * as Accordion from "@radix-ui/react-accordion";



import { Frame60, StepTimelineSection, Frame115, FaqSection } from "@/components/home/ReactHome";



function fieldFor(object: any, property: string) {



  return object ? tinaField(object, property) : undefined;



}



const PRIMARY_BUTTON_CLASS =



  "inline-flex w-full items-center justify-center gap-[12px] rounded-full bg-[#fcc63d] px-[24px] py-[16px] text-center no-underline shadow-[0px_18px_40px_rgba(252,198,61,0.3)] transition-all duration-300 hover:bg-[#ffd76a] hover:shadow-[0px_22px_48px_rgba(252,198,61,0.36)] sm:w-auto md:px-[40px] md:py-[19px]";



const PRIMARY_BUTTON_TEXT_CLASS =



  "text-[14px] font-bold uppercase tracking-[1.6px] text-[#0f172b] md:text-[18px] md:tracking-[1.8px]";



const PARTNER_LOGOS = [



  { name: "Ibercaja", image: "/images/partners/ibercaja.png" },



  { name: "ABANCA", image: "/images/partners/abanca.png" },



  { name: "Santander", image: "/images/partners/santander.png" },



  { name: "Bankinter", image: "/images/partners/bankinter.png" },



  { name: "ING", image: "/images/partners/ing.png" },



  { name: "BBVA", image: "/images/partners/bbva.png" },



  { name: "B100", image: "/images/partners/b100.png" },



  { name: "Unicaja", image: "/images/partners/unicaja.png" },



  { name: "CaixaBank", image: "/images/partners/caixabank.png" },



  { name: "Laboral Kutxa", image: "/images/partners/laboral-kutxa.png" }



];



const HOME_STEPS_CONTENT = {



  steps: {



    title: "De la primera llamada a la firma",



    items: [



      {



        title: "Diagnóstico inicial",



        description:



          "Analizamos tu situación actual y objetivo hipotecario para entender si existe una ruta viable y qué opciones pueden aplicarse a tu perfil."



      },



      {



        title: "Estudio de viabilidad",



        description:



          "Evaluamos tu perfil financiero y laboral para determinar qué bancos podrían aprobar tu solicitud y bajo qué condiciones realistas posibles."



      },



      {



        title: "Comparativa de opciones",



        description:



          "Te mostramos las alternativas que encajan contigo, explicadas en lenguaje claro para facilitar una decisión informada y alineada con tu objetivo."



      },



      {



        title: "Estrategia recomendada",



        description:



          "Decides el camino más conveniente según tu perfil, priorizando viabilidad, tiempos de aprobación y condiciones sostenibles en el largo plazo."



      },



      {



        title: "Coordinación con intervinientes",



        description:



          "Gestionamos la comunicación entre intervinieres particulares, organismos y entidades para asegurar que el proceso avance correctamente y llegues a firma sin retrasos ni sorpresas."



      },



      {



        title: "Firma con claridad",



        description:



          "Llegas a la firma entendiendo cada decisión tomada, con acompañamiento experto que garantiza coherencia entre lo aprobado y lo contratado."



      }



    ]



  }



};



const HOME_TESTIMONIALS_CONTENT = {



  testimonials: {



    title: "Testimonios",



    description:



      "Personas en situaciones reales lograron tomar decisiónes con mayor claridad, mejorar condiciones o conseguíir su hipoteca con acompañamiento experto y coordinación hasta la firma.",



    items: [



      {



        name: "Guillermo",



        role: "Local Guide·40 opiniones·11 fotos",



        image: "/images/testimonials/guillermo.png",



        stars: 5,



        text:



          "Gran experiencia con Andrés. Un profesional muy serio que estudia tu caso al milímetro. Nos ha dado mucha seguridad tener su visión realista sobre nuestros números y opciones de hipoteca. Trato cercano y muy claro. 100% recomendable"



      },



      {



        name: "Pablo Orozco Espada",



        role: "5 opiniones",



        image: "/images/testimonials/pablo-orozco-espada.png",



        stars: 5,



        text:



          "Sin duda la experiencia con el equeipo de Efiteca ha sido 100% satisfactoria\n\nAndres es un profesional que se implica y sin duda pone toda la carne en el asador en cada operación\n\nSu intermediación ha sido fundamental en todos los sentidos ya que ha facilitado todas las gestiones de manera rápida, eficaz y con solvencia contrastada.\n\nSin duda lo recomiendo al 100% ★★★★★★★★★★"



      },



      {



        name: "Loly zazo",



        role: "Cliente desde 2022",



        image: "/images/testimonials/loly-zazo.png",



        stars: 4,



        text:



          "Mi experiencia ha sido de más de cinco estrellas, Andrés gran profesional y excelente persona, llegando a gestionar más allá de su responsabilidad.\n\nSólo puedo agradecer el trato recibido y la humanidad mostrada por él.\n\nNos hemos sentido acompañados y perfectamente asesorados.\n\nEstaremos siempre muy agradecidos por toda la gestión realizada.\n\nMuchísimas gracias Andrés.\n\nPor supuesto que lo recomiendo."



      }



    ]



  }



};



function parseNumericValue(value: string | number | undefined, fallback: number) {



  if (typeof value === "number" && Number.isFinite(value)) return value;



  if (typeof value !== "string") return fallback;



  const normalized = value



    .replace(/[€$%]/g, "")



    .replace(/años|anos/gi, "")



    .replace(/\s/g, "")



    .replace(/\.(?=\d{3}(?:\D|$))/g, "")



    .replace(",", ".");



  const parsed = Number(normalized);



  return Number.isFinite(parsed) ? parsed : fallback;



}



function formatEUR(value: number) {



  return new Intl.NumberFormat("es-ES", {



    style: "currency",



    currency: "EUR",



    maximumFractionDigits: 0



  }).format(Math.round(value));



}



function calcMortgage(principal: number, annualRate: number, years: number) {



  const monthlyRate = annualRate / 100 / 12;



  const payments = years * 12;



  if (payments <= 0) return 0;



  if (monthlyRate === 0) return principal / payments;



  return (



    (principal * monthlyRate * Math.pow(1 + monthlyRate, payments)) /



    (Math.pow(1 + monthlyRate, payments) - 1)



  );



}



function RangeSlider({



  label,



  value,



  min,



  max,



  step,



  onChange,



  format



}: {



  label: string;



  value: number;



  min: number;



  max: number;



  step: number;



  onChange: (value: number) => void;



  format: (value: number) => string;



}) {



  const pct = ((value - min) / (max - min)) * 100;



  return (



    <div className="flex flex-col gap-[12px]">



      <div className="flex items-center justify-between gap-[16px]">



        <span className="text-[13px] font-bold uppercase tracking-[0.65px] text-[#99a1af]">{label}</span>



        <span className="rounded-full bg-[#ede8fb] px-[16px] py-[4px] text-[14px] font-black text-[#8949ff]">



          {format(value)}



        </span>



      </div>



      <div className="relative h-[8px] rounded-full bg-[#f3f4f6]">



        <div className="absolute left-0 top-0 h-[8px] rounded-full bg-[#8949ff] transition-all duration-300" style={{ width: `${pct}%` }} />



        <input



          type="range"



          min={min}



          max={max}



          step={step}



          value={value}



          onChange={(event) => onChange(Number(event.target.value))}



          className="absolute inset-0 z-10 h-[8px] w-full cursor-pointer opacity-0"



        />



        <div



          className="pointer-events-none absolute top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full border-2 border-[#8949ff] bg-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)] transition-transform duration-200"



          style={{ left: `calc(${pct}% - 10px)` }}



        />



      </div>



    </div>



  );



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



  return Array.from({ length: count }).map((_, index) => <div key={index} className="text-[#fcc63d]"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fcc63d" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>);



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



      <div className="relative mx-auto flex min-h-[720px] w-full max-w-[1460px] items-center px-[20px] py-[56px] md:min-h-[803px] md:px-[40px] xl:px-[64px] 2xl:px-[80px]">



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



            className={`mt-[24px] ${PRIMARY_BUTTON_CLASS} ${PRIMARY_BUTTON_TEXT_CLASS}`}



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



  const marqueeItems = [...PARTNER_LOGOS, ...PARTNER_LOGOS];



  return (



    <section className="bg-white" data-tina-field={fieldFor(editable, "partners")}>



      <div className="content-stretch relative mx-auto flex w-full max-w-[1460px] flex-col items-center gap-[24px] px-[20px] py-[40px] md:gap-[32px] md:px-[40px] md:py-[72px] xl:px-[64px] 2xl:px-[80px]">



        <div className="content-stretch relative flex w-full max-w-[760px] shrink-0 flex-col items-center gap-[16px]">



          <h2 className="w-full text-center text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.partners, "title")}>



            {partners.title}



          </h2>



          <p className="w-full text-center text-[16px] font-normal leading-[1.2] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.partners, "description")}>



            {partners.description}



          </p>



        </div>



        <div className="relative w-full overflow-hidden">



          <style>{`



            @keyframes solutions-partners-marquee {



              0% { transform: translateX(0); }



              100% { transform: translateX(-50%); }



            }



          `}</style>



          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[40px] bg-gradient-to-r from-white to-transparent md:w-[72px]" />



          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[40px] bg-gradient-to-l from-white to-transparent md:w-[72px]" />



          <div



            className="flex w-max items-center gap-[14px] md:gap-[20px] xl:gap-[28px]"



            style={{ animation: "solutions-partners-marquee 28s linear infinite" }}



          >



            {marqueeItems.map((item, index) => (



              <div



                key={`${item.name}-${index}`}



                className="flex h-[72px] w-[160px] shrink-0 items-center justify-center rounded-[18px] border border-[#ece7f5] bg-white px-[18px] md:h-[84px] md:w-[190px] md:rounded-[22px] md:px-[24px]"



                data-name="partner-logo"



              >



                <img



                  src={item.image}



                  alt={item.name}



                  className="max-h-[28px] w-auto max-w-full object-contain md:max-h-[34px]"



                />



              </div>



            ))}



          </div>



        </div>



      </div>



    </section>



  );



}



function ServicesSection({ content, editable }: { content: any; editable?: any }) {



  const services = content?.services;



  if (!services) return null;



  const serviceOrder = [



    "Recibe informaciíƒÂ³n",



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



    .map((item: any, sourceIndex: number) => ({ ...item, sourceIndex }))



    .sort((a: any, b: any) => {



      const aIndex = serviceOrder.indexOf(a.title);



      const bIndex = serviceOrder.indexOf(b.title);



      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);



    });



  return (



    <section className="relative w-full bg-[#f7f5f9]" data-tina-field={fieldFor(editable, "services")}>



      <div className="content-stretch flex w-full flex-col items-center gap-[40px] px-[20px] py-[56px] md:gap-[60px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px] relative">



        <div className="relative shrink-0 w-full max-w-[1300px]">



          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">



            <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">



              <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.1] not-italic relative shrink-0 text-[#080813] text-center w-full">



                <h2



                  className="font-bold relative shrink-0 text-[32px] md:text-[40px] w-full"



                  data-tina-field={fieldFor(editable?.services, "title")}



                >



                  {services.title}



                </h2>



                <p



                  className="relative shrink-0 text-[16px] md:text-[18px] w-full"



                  data-tina-field={fieldFor(editable?.services, "description")}



                >



                  {services.description}



                </p>



              </div>



            </div>



          </div>



        </div>



        <div className="relative shrink-0 w-full">



          <div className="mx-auto w-full max-w-[1460px]">



            <Frame115 content={{ services: { items: orderedServices } }} />



          </div>



        </div>



      </div>



    </section>



  );



}



function SimulatorSection({ content, editable }: { content: any; editable?: any }) {



  const simulator = content?.simulator;



  const benefits = content?.benefits;



  if (!simulator) return null;



  const benefitIcons = [



    "/images/DOC.png",



    "/images/TQ2341.png",



    "/images/4123.png",



    "/images/41.png",



    "/images/123123.png"



  ];



  const sliderItemás = simulator.sliders || [];



  const [valor, setValor] = React.useState(() => parseNumericValue(sliderItemás[0]?.value, 280000));



  const [financiacion, setFinanciacion] = React.useState(() => parseNumericValue(sliderItemás[1]?.value, 80));



  const [anos, setAnos] = React.useState(() => parseNumericValue(sliderItemás[2]?.value, 30));



  const [interes, setInteres] = React.useState(() => parseNumericValue(sliderItemás[3]?.value, 2.9));



  const principal = valor * (financiacion / 100);



  const cuotaMensual = calcMortgage(principal, interes, anos);



  const ahorroEfiteca = cuotaMensual * 0.12;



  const sliderConfig = [



    {



      label: sliderItemás[0]?.label || "Valor inmueble",



      value: valor,



      min: 80000,



      max: 1000000,



      step: 10000,



      onChange: setValor,



      format: (v: number) => formatEUR(v)



    },



    {



      label: sliderItemás[1]?.label || "Financiación",



      value: financiacion,



      min: 10,



      max: 100,



      step: 5,



      onChange: setFinanciacion,



      format: (v: number) => `${v}%`



    },



    {



      label: sliderItemás[2]?.label || "Plazo",



      value: anos,



      min: 5,



      max: 40,



      step: 1,



      onChange: setAnos,



      format: (v: number) => `${v} años`



    },



    {



      label: sliderItemás[3]?.label || "Interés (TIN)",



      value: interes,



      min: 0.5,



      max: 6,



      step: 0.1,



      onChange: setInteres,



      format: (v: number) => `${v.toFixed(1)}%`



    }



  ];



  return (



    <section id="simulador" className="overflow-hidden bg-[linear-gradient(135deg,#4f3bf9_0%,#8949ff_42%,#ad5cff_100%)] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px]">



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



              {sliderConfig.map((item, index) => (



                <div key={`${item.label}-${index}`} data-tina-field={fieldFor(editable?.simulator?.sliders?.[index], "label")}>



                  <RangeSlider



                    label={item.label}



                    value={item.value}



                    min={item.min}



                    max={item.max}



                    step={item.step}



                    onChange={item.onChange}



                    format={item.format}



                  />



                </div>



              ))}



            </div>



            <div className="mt-[28px] grid grid-cols-1 gap-[16px] rounded-[24px] border border-[#f1f5f9] bg-[#f8fafc] p-[24px] md:grid-cols-2">



              <div>



                <p className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#90a1b9]" data-tina-field={fieldFor(editable?.simulator, "resultLabel")}>{simulator.resultLabel}</p>



                <p className="mt-[4px] text-[30px] font-black leading-[1.1] text-[#0f172b]">{formatEUR(cuotaMensual)}</p>



              </div>



              <div>



                <p className="text-[11px] font-bold uppercase tracking-[0.55px] text-[#90a1b9]">Ahorro Efiteca</p>



                <p className="mt-[4px] text-[26px] font-black leading-[1.1] text-[#8949ff]">{formatEUR(ahorroEfiteca)}/mes</p>



              </div>



            </div>



            <a href={simulator.cta?.href || "#contacto-soluciones"} className={`mt-[28px] ${PRIMARY_BUTTON_CLASS} ${PRIMARY_BUTTON_TEXT_CLASS}`} data-tina-field={fieldFor(editable?.simulator?.cta, "label")}>



              <span>{simulator.cta?.label}</span>



              <span aria-hidden="true">→</span>



            </a>



          </div>



        </div>



        {benefits ? (



          <div className="mt-[56px]" data-tina-field={fieldFor(editable, "benefits")}>



            <h3 className="text-center text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.benefits, "title")}>{benefits.title}</h3>



            <p className="mx-auto mt-[16px] max-w-[960px] text-center text-[16px] leading-[1.15] text-white md:text-[18px]" data-tina-field={fieldFor(editable?.benefits, "description")}>{benefits.description}</p>



            <div className="relative mx-auto mt-[32px] grid w-full max-w-[1120px] grid-cols-2 items-stretch gap-[12px] md:grid-cols-3 md:gap-[16px] xl:grid-cols-5">



              {(benefits.items || []).map((item: any, index: number) => (



                <div key={`${item.text}-${index}`} data-tina-field={fieldFor(editable?.benefits?.items?.[index], "text")}>



                  <div className="flex w-full min-h-[136px] flex-col items-center justify-center gap-[14px] rounded-[22px] bg-[#ad81ff] px-[16px] py-[20px] text-center md:min-h-[150px] md:gap-[16px] md:rounded-[24px] md:px-[18px] md:py-[22px]">



                  <div className="flex size-[44px] items-center justify-center rounded-full bg-[#fcc63d] shadow-[0px_10px_15px_0px_rgba(252,198,61,0.2),0px_4px_6px_0px_rgba(252,198,61,0.2)]" data-tina-field={fieldFor(editable?.benefits?.items?.[index], "icon")}>



                    <img src={benefitIcons[index] || item.icon} alt="" className="size-[22px] object-contain md:size-[24px]" />



                  </div>



                  <p className="max-w-[170px] text-[12px] font-bold leading-[1.25] text-white md:max-w-[180px] md:text-[13px]">{item.text}</p>



                  </div>



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



  const howItWorksIcon = "/images/how-it-works-check.svg";



  return (



    <section className="bg-white px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px]" data-tina-field={fieldFor(editable, "howItWorks")}>



      <div className="mx-auto grid max-w-[1460px] grid-cols-1 items-center gap-[32px] lg:grid-cols-[608px_minmax(0,1fr)] lg:gap-[80px]">



        <img



          src={section.image || "/images/contact-intro.jpg"}



          alt="Asesor hipotecario revisando opciones con una pareja"



          className="h-[320px] w-full rounded-[32px] object-cover md:h-[406px]"



          data-tina-field={fieldFor(editable?.howItWorks, "image")}



        />



        <div>



          <h2 className="text-[28px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.howItWorks, "title")}>{section.title}</h2>



          <p className="mt-[24px] text-[16px] leading-[1.15] text-[#101828] md:text-[18px]" data-tina-field={fieldFor(editable?.howItWorks, "description")}>{section.description}</p>



          <div className="mt-[32px] space-y-[18px]">



            {(section.items || []).map((item: any, index: number) => (



              <div key={`${item.title}-${index}`} className="flex items-start gap-[16px]">



                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#8949ff] text-white" data-tina-field={fieldFor(editable?.howItWorks?.items?.[index], "icon")}>



                  <img src={howItWorksIcon} alt="" className="h-[18px] w-[18px] object-contain" />



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



    <section



      className="bg-white px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px]"



      data-tina-field={fieldFor(editable, "actionCta")}



    >



      <div className="mx-auto max-w-[1460px]">



        <div className="flex w-full flex-col items-start justify-between gap-[32px] overflow-hidden rounded-[24px] bg-[#8949ff] px-[28px] py-[48px] md:px-[60px] md:py-[80px] md:flex-row md:items-center">



          <div className="flex w-full max-w-[787px] flex-col items-start gap-[16px]">



            <h2



              className="text-[30px] font-bold leading-[1.1] text-white md:text-[40px]"



              data-tina-field={fieldFor(editable?.actionCta, "title")}



            >



              {actionCta.title}



            </h2>



            <p



              className="text-[16px] leading-[1.35] text-white md:text-[18px]"



              data-tina-field={fieldFor(editable?.actionCta, "description")}



            >



              {actionCta.description}



            </p>



          </div>



          <a



            href={actionCta.button?.href || "#contacto-soluciones"}



            className="inline-flex min-h-[56px] w-full shrink-0 items-center justify-center gap-[12px] rounded-full bg-[#fcc63d] px-[20px] py-[14px] text-center no-underline shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] transition-all duration-200 hover:bg-[#ffe07e] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.32)] focus-visible:bg-[#ffe07e] sm:w-auto sm:px-[24px] md:px-[40px] md:py-[20px]"



            data-tina-field={fieldFor(editable?.actionCta?.button, "label")}



          >



            <span className="text-center text-[14px] font-bold uppercase leading-[1.15] tracking-[1.2px] text-[#101828] sm:text-[15px] md:text-[18px] md:leading-[27px] md:tracking-[1.8px]">



              {actionCta.button?.label}



            </span>



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



    <section className="relative overflow-hidden bg-[#101828] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px]" data-tina-field={fieldFor(editable, "comparison")}>



      <div className="absolute left-[-180px] top-[200px] h-[480px] w-[480px] rounded-full bg-[rgba(137,73,255,0.18)] blur-[110px]" />



      <div className="relative mx-auto max-w-[1460px]">



        <h2 className="text-center text-[28px] font-bold leading-[1.1] text-white md:text-[40px]" data-tina-field={fieldFor(editable?.comparison, "title")}>{comparison.title}</h2>



        <div className="mt-[40px] overflow-hidden rounded-[16px] bg-white">



          <div className="grid grid-cols-1 md:grid-cols-2">



            <div>



              <div className="bg-[linear-gradient(90deg,#4f3bf9_0%,#8949ff_100%)] px-[16px] py-[14px] text-[20px] font-bold text-white md:text-[22px]" data-tina-field={fieldFor(editable?.comparison, "leftTitle")}>{comparison.leftTitle}</div>



              {(comparison.leftItems || []).map((item: string, index: number) => (



                <div key={`${item}-${index}`} className="flex items-center gap-[16px] border-t border-[#f2f4f7] px-[16px] py-[18px]" data-tina-field={fieldFor(editable?.comparison, "leftItems")}>



                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[rgba(79,59,249,0.1)] text-[16px] font-black leading-none text-[#4f3bf9]"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></div>



                  <p className="text-[16px] font-bold leading-[1.1] text-[#101828]">{item}</p>



                </div>



              ))}



            </div>



            <div>



              <div className="bg-[#9d9ba8] px-[16px] py-[14px] text-[20px] font-bold text-white md:text-[22px]" data-tina-field={fieldFor(editable?.comparison, "rightTitle")}>{comparison.rightTitle}</div>



              {(comparison.rightItems || []).map((item: string, index: number) => (



                <div key={`${item}-${index}`} className="flex items-center gap-[16px] border-t border-[#f2f4f7] px-[16px] py-[18px]" data-tina-field={fieldFor(editable?.comparison, "rightItems")}>



                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-[#9d9ba8] text-[16px] font-black leading-none text-white">×</div>



                  <p className="text-[16px] font-bold leading-[1.1] text-[#9d9ba8]">{item}</p>



                </div>



              ))}



            </div>



          </div>



        </div>



        <div className="mt-[24px] text-center">



          <a href={comparison.cta?.href || "#contacto-soluciones"} className={`${PRIMARY_BUTTON_CLASS} ${PRIMARY_BUTTON_TEXT_CLASS}`} data-tina-field={fieldFor(editable?.comparison?.cta, "label")}>



            {comparison.cta?.label}



          </a>



        </div>



      </div>



    </section>



  );



}



function TestimonialsMetricsSection({ content, editable }: { content: any; editable?: any }) {



  const testimonials = HOME_TESTIMONIALS_CONTENT.testimonials;



  const metrics = content?.metrics;



  if (!testimonials && !metrics) return null;



  const [activeTestimonial, setActiveTestimonial] = React.useState(0);



  const testimonialItemás = (testimonials?.items || []).slice(0, 3);



  return (



    <section className="mb-[-2px] relative w-full shrink-0 bg-[#f9f6f3]">



      <div className="mx-auto flex w-full max-w-[1460px] flex-col items-center gap-[40px] px-[20px] py-[56px] md:gap-[48px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px]">



        {testimonials ? (



          <>



            <div className="relative flex w-full max-w-[760px] flex-col items-center gap-[16px] text-center">



              <h2



                className="relative w-full shrink-0 text-[32px] font-bold leading-[1.1] text-[#101828] md:text-[40px]"



                data-tina-field={fieldFor(editable?.testimonials, "title")}



              >



                {testimonials.title}



              </h2>



              <p



                className="relative w-full shrink-0 text-[15px] font-normal leading-[1.35] text-[#364153] md:text-[16px]"



                data-tina-field={fieldFor(editable?.testimonials, "description")}



              >



                {testimonials.description}



              </p>



            </div>



            <div className="w-full max-w-[1180px] md:hidden">



              <div className="overflow-hidden">



                <div



                  className="flex transition-transform duration-300 ease-out"



                  style={{ transform: `translate3d(-${activeTestimonial * 100}%, 0, 0)` }}



                >



                  {testimonialItemás.map((item: any, index: number) => (



                    <div key={`${item.name}-${index}`} className="min-w-0 shrink-0 basis-full pr-[12px]">



                      <div className="min-w-0">



                        <article



                          className="flex min-h-[320px] w-full flex-col justify-between rounded-[32px] border border-[#d9d9d9] bg-white px-[24px] py-[24px] md:min-h-[340px] md:px-[32px] md:py-[32px] xl:rounded-[40px] xl:px-[36px] xl:py-[34px]"



                          data-tina-field={fieldFor(editable?.testimonials?.items?.[index], "text")}



                        >



                          <div className="flex flex-col gap-[20px] md:gap-[24px]">



                            <div className="flex gap-[10px] text-[20px] leading-none text-[#fcc63d]">



                              {Array.from({ length: item.stars || 5 }).map((_, starIndex) => (



                                <div key={starIndex} className="text-[#fcc63d]"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fcc63d" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>



                              ))}



                            </div>



                            <p



                              className="overflow-hidden text-[18px] font-bold leading-[1.1] text-[#364153] md:text-[20px] xl:text-[22px]"



                              style={{ display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical" }}



                            >



                              {item.text}



                            </p>



                          </div>



                          <div className="flex items-center gap-[12px] pt-[20px]">



                            <img src={item.image} alt={item.name} className="size-[46px] shrink-0 rounded-full object-cover bg-[#f2eff7]" />



                            <div className="flex min-w-0 flex-col">



                              <p className="text-[16px] font-bold leading-[1.1] text-[#101828]">{item.name}</p>



                              <p className="text-[14px] leading-[1.2] text-[#6a7282] md:text-[15px]">{item.role}</p>



                            </div>



                          </div>



                        </article>



                      </div>



                    </div>



                  ))}



                </div>



              </div>



              <div className="mt-[18px] flex justify-center">



                <div className="flex items-center justify-center gap-[10px]">



                  {testimonialItemás.map((item: any, index: number) => (



                    <button



                      key={`${item.name}-dot-${index}`}



                      className={`transition-all duration-300 ${index === activeTestimonial ? "h-[9px] w-[34px] rounded-[999px] bg-[#8949ff]" : "h-[9px] w-[9px] rounded-full bg-[#d8d2e3]"}`}



                      aria-label={`Ir al testimonio ${index + 1}`}



                      type="button"



                      onClick={() => setActiveTestimonial(index)}



                    />



                  ))}



                </div>



              </div>



            </div>



            <div className="hidden w-full max-w-[1180px] grid-cols-2 gap-[20px] md:grid xl:grid-cols-3">



              {testimonialItemás.map((item: any, index: number) => (



                <div key={`${item.name}-${index}`} className="min-w-0">



                  <article



                    className="flex min-h-[320px] w-full flex-col justify-between rounded-[32px] border border-[#d9d9d9] bg-white px-[24px] py-[24px] md:min-h-[340px] md:px-[32px] md:py-[32px] xl:rounded-[40px] xl:px-[36px] xl:py-[34px]"



                    data-tina-field={fieldFor(editable?.testimonials?.items?.[index], "text")}



                  >



                    <div className="flex flex-col gap-[20px] md:gap-[24px]">



                      <div className="flex gap-[10px] text-[20px] leading-none text-[#fcc63d]">



                        {Array.from({ length: item.stars || 5 }).map((_, starIndex) => (



                          <div key={starIndex} className="text-[#fcc63d]"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fcc63d" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>



                        ))}



                      </div>



                      <p



                        className="overflow-hidden text-[18px] font-bold leading-[1.1] text-[#364153] md:text-[20px] xl:text-[22px]"



                        style={{ display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical" }}



                      >



                        {item.text}



                      </p>



                    </div>



                    <div className="flex items-center gap-[12px] pt-[20px]">



                      <img src={item.image} alt={item.name} className="size-[46px] shrink-0 rounded-full object-cover bg-[#f2eff7]" />



                      <div className="flex min-w-0 flex-col">



                        <p className="text-[16px] font-bold leading-[1.1] text-[#101828]">{item.name}</p>



                        <p className="text-[14px] leading-[1.2] text-[#6a7282] md:text-[15px]">{item.role}</p>



                      </div>



                    </div>



                  </article>



                </div>



              ))}



            </div>



          </>



        ) : null}



        {metrics ? (



          <div



            className="w-full rounded-[32px] bg-[#12192d] px-[24px] py-[28px] md:rounded-[40px] md:px-[60px] md:py-[32px]"



            data-tina-field={fieldFor(editable, "metrics")}



          >



            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[40px]">



              {(metrics.items || []).map((item: any, index: number) => (



                <div



                  key={`${item.title}-${index}`}



                  className={`text-center md:text-left ${index < (metrics.items?.length || 0) - 1 ? "md:border-r md:border-[#744c98] md:pr-[40px]" : ""}`}



                  data-tina-field={fieldFor(editable?.metrics?.items?.[index], "value")}



                >



                  <p className="text-[40px] font-normal leading-none text-[#c993ff] md:text-[56px]">{index === 0 ? "€10M" : index === 1 ? "+500" : "€30k"}</p>



                  <p className="mt-[10px] text-[18px] font-bold leading-[1.2] text-white md:text-[22px]">{index === 0 ? "Volumen gestionado en el ultimo año" : index === 1 ? "Personas atendidas" : "Promedio de ahorro para las familias en su casa"}</p>



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



    <section id="contacto-soluciones" className="bg-[#f9fafb] px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px]" data-tina-field={fieldFor(editable, "contact")}>



      <div className="mx-auto grid max-w-[1460px] grid-cols-1 gap-[32px] lg:grid-cols-[1fr_798px] md:items-center">



        <div>



          <h2 className="text-[28px] font-bold leading-[1.1] text-[#080813] md:text-[40px]" data-tina-field={fieldFor(editable?.contact, "title")}>{contact.title}</h2>



          <p className="mt-[20px] text-[15px] leading-[1.15] text-[#080813]" data-tina-field={fieldFor(editable?.contact, "description")}>{contact.description}</p>



          <div className="mt-[24px] space-y-[16px]" data-tina-field={fieldFor(editable?.contact, "highlights")}>



            {(contact.highlights || []).map((highlight: string, index: number) => (



              <div key={`${highlight}-${index}`} className="flex items-center gap-[12px]">



                <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[rgba(137,73,255,0.1)] text-[#8949ff]">



                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>



                </div>



                <p className="text-[16px] font-bold text-[#314158]">{highlight}</p>



              </div>



            ))}



          </div>



          {(contact.scheduleLabel || contact.scheduleText) ? (



            <div className="mt-[32px] border-t border-[#dfe4ec] pt-[24px]">



              {contact.scheduleLabel ? <p className="text-[15px] font-bold text-[#8949ff]" data-tina-field={fieldFor(editable?.contact, "scheduleLabel")}>{contact.scheduleLabel}</p> : null}



              {contact.scheduleText ? <div className="mt-[16px] space-y-[4px]" data-tina-field={fieldFor(editable?.contact, "scheduleText")}>

                {(contact.scheduleText || "").split("\n").filter((line: string) => line.trim()).map((line: string, idx: number) => (

                  <p key={idx} className="text-[15px] font-bold leading-[1.15] text-[#101828]">{line.trim()}</p>

                ))}

              </div> : null}



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



            <button type="button" className={`${PRIMARY_BUTTON_CLASS} ${PRIMARY_BUTTON_TEXT_CLASS}`} data-tina-field={fieldFor(editable?.contact?.form, "submit_label")}>



              {contact.form?.submit_label}



            </button>



          </div>



        </form>



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



      <StepTimelineSection content={HOME_STEPS_CONTENT} />



      <ComparisonSection content={page} editable={editable} />



      <TestimonialsMetricsSection content={page} editable={editable} />



      <ContactSection content={page} editable={editable} />



      <LocationsShowcaseSection content={page} editable={editable} />



      <FaqSection content={page} editable={editable} />



      <div className="bg-white"><Frame60 content={page} editable={editable} /></div>



    </div>



  );



}



