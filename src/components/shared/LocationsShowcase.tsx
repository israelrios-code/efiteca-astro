import React from "react";

type EditableObject = {
  _editable_props?: Record<string, string>;
};

type LocationsShowcaseContent = {
  locationsShowcase?: {
    title?: string;
    description?: string;
    cta?: {
      button?: {
        label?: string;
        href?: string;
      };
    };
  };
};

type LocationsShowcaseProps = {
  content?: LocationsShowcaseContent | null;
  editable?: {
    locationsShowcase?: EditableObject;
  } | null;
};

function fieldFor(object: EditableObject | null | undefined, property: string) {

  if (object && object._editable_props && object._editable_props[property]) {

    return object._editable_props[property];

  }

  return "";

}



const MAIN_BUTTON_CLASS =

  "bg-[#fcc63d] inline-flex min-h-[56px] items-center justify-center gap-[12px] rounded-full px-[24px] md:px-[40px] py-[14px] md:py-[20px] shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] no-underline transition-all duration-200 hover:bg-[#ffe07e] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.35)] focus-visible:bg-[#ffe07e]";

const MAIN_BUTTON_TEXT_CLASS =

  "font-['Inter:Bold',sans-serif] font-bold leading-[1.15] md:leading-[27px] tracking-[1.2px] md:tracking-[1.8px] uppercase text-[#101828] text-[14px] sm:text-[15px] md:text-[18px] text-center whitespace-normal";



function LocationPinIcon({ className = "h-[20px] w-[20px]" }: { className?: string }) {

  return (

    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">

      <path d="M12 21C15.5 16.8 18 13.7 18 10.5A6 6 0 1 0 6 10.5C6 13.7 8.5 16.8 12 21Z" stroke="currentColor" strokeWidth="2" />

      <circle cx="12" cy="10.5" r="2.4" fill="currentColor" />

    </svg>

  );

}



export function LocationsShowcaseSection({ content, editable }: LocationsShowcaseProps) {

  const locationsShowcase = content?.locationsShowcase;

  // Fallback values if CMS is not updated yet

  const title = locationsShowcase?.title || "Conoce nuestras ubicaciones";

  const description = locationsShowcase?.description || "Atendemos de forma digital en toda España con acompañamiento personalizado durante todo el proceso.";

  const address = "Calle Cartagena 245, Planta 3 Puerta E, 08025, Barcelona";

  

  const ctaTitle = "Descubre nuestros beneficios";

  const ctaDescription = "Habla con un experto hipotecario y obtén claridad en 10 minutos";

  const ctaButtonLabel = locationsShowcase?.cta?.button?.label || "Contactar experto";
  const ctaButtonHref = locationsShowcase?.cta?.button?.href || "/es/contacto/";



  return (

    <section className="bg-white px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]">

      <div className="grid w-full grid-cols-1 gap-[40px] lg:grid-cols-[1fr_minmax(0,1.2fr)] xl:grid-cols-[1fr_minmax(0,1.4fr)] items-stretch">

        <div className="flex flex-col gap-[32px]">

          <div>

            <h2 className="text-[32px] font-bold leading-[1.1] text-[#080813] md:text-[45px]" data-tina-field={fieldFor(editable?.locationsShowcase, "title")}>

              {title}

            </h2>

            <p className="mt-[20px] text-[16px] leading-[1.4] text-[#080813] md:text-[18px]" data-tina-field={fieldFor(editable?.locationsShowcase, "description")}>

              {description}

            </p>

          </div>



          {/* White Address Card */}

          <div className="rounded-[30px] md:rounded-[40px] border border-[#f2f4f7] bg-white p-[24px] md:p-[28px] shadow-[0px_10px_30px_rgba(0,0,0,0.03)]">

            <div className="flex items-center gap-[16px]">

              <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[12px] bg-[rgba(137,73,255,0.08)] text-[#8949ff]">

                <LocationPinIcon className="h-[22px] w-[22px]" />

              </div>

              <p className="text-[17px] font-bold leading-[1.3] text-[#101828] md:text-[20px]">

                {address}

              </p>

            </div>

          </div>



          {/* Purple Benefits Card */}

          <div className="rounded-[30px] md:rounded-[40px] bg-[#8949ff] p-[32px] md:p-[40px] relative overflow-hidden flex-grow flex flex-col justify-center">

            {/* Subtle background circles for depth */}

            <div className="absolute top-[-20%] right-[-10%] w-[150px] h-[150px] bg-white/5 rounded-full blur-2xl pointer-events-none" />

            

            <div className="flex flex-col gap-[24px] relative z-10">

              <div className="flex flex-col gap-[12px]">

                <h3 className="text-[26px] font-bold leading-[1.1] text-white md:text-[32px]">

                  {ctaTitle}

                </h3>

                <p className="text-[16px] leading-[1.4] text-white/80 md:text-[18px] max-w-none">

                  {ctaDescription}

                </p>

              </div>

              <a href={ctaButtonHref} className={`${MAIN_BUTTON_CLASS} shrink-0 w-full`}>

                <span className={MAIN_BUTTON_TEXT_CLASS}>{ctaButtonLabel}</span>

                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">

                  <path d="M4.16666 10H15.8333M15.8333 10L10.8333 5M15.8333 10L10.8333 15" stroke="#101828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

                </svg>

              </a>

            </div>

          </div>

        </div>



        {/* Map Column */}

        <div className="h-[360px] md:h-[500px] lg:h-auto overflow-hidden rounded-[30px] md:rounded-[50px] border border-[#f2f4f7] shadow-xl">

          <iframe 

            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.4377617803398!2d2.1783344!3d41.408015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a36361809249%3A0x7dacaebfd27bc034!2sEfiteca!5e0!3m2!1ses!2sco!4v1776387233419!5m2!1ses!2sco" 

            width="100%" 

            height="100%" 

            style={{ border: 0 }} 

            allowFullScreen={true} 

            loading="lazy" 

            referrerPolicy="no-referrer-when-downgrade"

            className="w-full h-full"

          ></iframe>

        </div>

      </div>

    </section>

  );

}

