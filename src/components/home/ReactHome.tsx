import React, { useState, useCallback, useEffect } from 'react';



import { svgPaths } from '../../data/svgData';



import useEmblaCarousel from 'embla-carousel-react';



import * as Accordion from '@radix-ui/react-accordion';



import { tinaField, useTina } from 'tinacms/dist/react';



function fieldFor(object: any, property: string) {



  return object ? tinaField(object, property) : undefined;



}



// These generated blocks are intentionallááy kept for the pending ReactHome split.



// Referencing them here avoids TypeScript "declared but never read" noise until



// we complete the larger extraction safely.



void [



  Frame107,



  BackgroundBorder1,



  BackgroundBorder2,



  BackgroundBorder3,



  Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di,



  Frame63,



  Container5,



  Container7,



  Container9,



  Container11,



  Container13,



  Container15,



  Frame96,



  Frame36,



  Frame61,



  Frame21,



  TextContainer,



  Frame28,



  Frame29,



  Frame30,



  Frame85,



  Container25,



  Section,



  Frame65,



  Frame1,



  Frame77,



  Frame51,



  Container46,



  Frame126,



  Frame127,



  Frame72



];



function renderStars(count = 5) {



  return Array.from({ length: count }).map((_, index) => (



    <div key={index} className="text-[#fcc63d]"><svg width="20" height="20" viewBox="0 0 24 24" fill="#fcc63d" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg></div>



  ));



}



function FaqChevronIcon() {



  return (



    <svg viewBox="0 0 18 18" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">



      <path



        d="M5.25 7.5L9 11.25L12.75 7.5"



        stroke="currentColor"



        strokeWidth="2"



        strokeLinecap="round"



        strokeLinejoin="round"



      />



    </svg>



  );



}



function FormInput({



  name,



  placeholder,



  type = "text"



}: {



  name: string;



  placeholder: string;



  type?: string;



}) {



  return (



    <input



      name={name}



      type={type}



      placeholder={placeholder}



      className="bg-white border border-[#9d9ba8] rounded-[6px] w-full px-[20px] py-[12px] text-[12px] text-[#080813] placeholder:text-[#9d9ba8] outline-none"



    />



  );



}



function FormSelect({



  name,



  placeholder



}: {



  name: string;



  placeholder: string;



}) {



  return (



    <select



      name={name}



      defaultValue=""



      className="bg-white border border-[#9d9ba8] rounded-[6px] w-full px-[20px] py-[12px] text-[12px] text-[#080813] outline-none"



    >



      <option value="" disabled>



        {placeholder}



      </option>



      <option value="particular">Particular</option>



      <option value="autonomo">Autónomo</option>



      <option value="empresa">Empresa</option>



    </select>



  );



}



function FormTextarea({



  name,



  placeholder



}: {



  name: string;



  placeholder: string;



}) {



  return (



    <textarea



      name={name}



      placeholder={placeholder}



      rows={4}



      className="bg-white border border-[#9d9ba8] rounded-[6px] w-full px-[20px] py-[16px] text-[12px] text-[#080813] placeholder:text-[#9d9ba8] outline-none resize-none min-h-[68px]"



    />



  );



}



function Frame74({ content }: { content: any }) {



  if (!content?.hero) return null;



  return (



    <div className="content-stretch flex flex-col gap-[40px] h-[590px] items-start justify-center pl-[40px] pr-[200px] relative shrink-0 w-[688px] z-10">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[56px] text-white tracking-[1px] w-[min-content]">



        <span className="leading-[1.1] text-[#fcc63d]">{content.hero.title_part1}</span>



        <span className="leading-[1.1]">{content.hero.title_part2}</span>



      </p>



      <p className="font-['Trueno:Light',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content] w-55 ">{content.hero.description}</p>



      <a href={content.hero.cta?.href || "#"} className="bg-[#fcc63d] content-stretch flex items-center justify-center px-[40px] py-[19px] relative rounded-[33554400px] shrink-0 hover:scale-105 active:scale-95 transition-transform no-underline">



        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#0f172b] text-[18px] text-center tracking-[1.8px] uppercase whitespace-nowrap">{content.hero.cta?.label}</p>



      </a>



    </div>



  );



}



function Frame({ content }: { content?: any }) {



  if (!content?.hero) return null;



  return (



    <div className="h-[847px] mb-[-60px] relative shrink-0 w-full">



      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={content.hero.main_background} />



      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">



        <div className="content-stretch flex flex-col gap-[40px] items-start justify-center px-[230px] py-[80px] relative size-full">



          {/* ... SVG codes omitted for brevity, keeping them as they are structural ... */}



          <div className="absolute left-[154px] size-[806px] top-[532px]">



            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 806 806">



              <circle cx="403" cy="403" fill="url(#paint0_radial_1_1135)" id="Ellipse 2" r="403" />



              <defs>



                <radialGradient cx="0" cy="0" gradientTransform="translate(403 403) rotate(90) scale(403)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1135" r="1">



                  <stop stopColor="#4F3BF9" />



                  <stop offset="1" stopColor="#3021AE" stopOpacity="0" />



                </radialGradient>



              </defs>



            </svg>



          </div>



          <div className="absolute left-[389px] size-[532px] top-[515px]">



            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 532 532">



              <circle cx="266" cy="266" fill="url(#paint0_radial_1_1127)" id="Ellipse 1" r="266" />



              <defs>



                <radialGradient cx="0" cy="0" gradientTransform="translate(266 266) rotate(90) scale(266)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1127" r="1">



                  <stop stopColor="#8949FF" />



                  <stop offset="1" stopColor="#522C99" stopOpacity="0" />



                </radialGradient>



              </defs>



            </svg>



          </div>



          <Frame74 content={content} />



          <div className="absolute h-[1173px] left-[605px] top-[-62px] w-[1760px]" data-name="Diseño sin título (60) 1">



            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={content.hero.person_image} />



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame57({ content }: { content: any }) {



  if (!content?.services) return null;



  return (



    <div className="content-stretch flex flex-col gap-[24px] items-center leading-[1.1] not-italic relative shrink-0 text-[#080813] text-center w-full">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[32px] md:text-[40px] w-full">{content.services.title}</p>



      <p className="font-['Trueno:Light',sans-serif] relative shrink-0 text-[16px] md:text-[18px] w-full">{content.services.description}</p>



    </div>



  );



}



function Frame2({ content }: { content: any }) {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">



      <Frame57 content={content} />



    </div>



  );



}



function Frame17({ content }: { content: any }) {



  return (



    <div className="relative shrink-0 w-full max-w-[1300px]">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">



        <Frame2 content={content} />



      </div>



    </div>



  );



}



function Container() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-current text-[24px] text-center transition-colors duration-300">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame113({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="absolute bg-white content-stretch flex flex-col gap-[18px] md:gap-[24px] items-start justify-center left-[16px] right-[16px] bottom-[16px] p-[16px] rounded-[16px] w-auto transition-transform duration-300 group-hover/card:-translate-y-[2px]">



      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">{item.description}</p>



      <a href={item.button?.href || "#"} className="content-stretch inline-flex max-w-full gap-[8px] items-center relative shrink-0 no-underline rounded-full px-[12px] py-[10px] text-[#8949ff] transition-colors duration-300 group-hover/card:bg-[#8949ff] group-hover/card:text-white">



        <div className="flex min-w-0 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-current text-[16px] text-left">



          <p className="leading-[1.1] whitespace-nowrap">{item.button?.label}</p>



        </div>



        <Container />



      </a>



    </div>



  );



}



function Frame111({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="group/card h-[479px] relative rounded-[20px] shrink-0 w-full overflow-hidden">



      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full transition-transform duration-500 ease-out group-hover/card:scale-[1.08]" src={item.image} />



      <div className="flex flex-col justify-end size-full">



        <div className="content-stretch flex flex-col items-start justify-end pb-[30px] pt-[451px] px-[20px] relative size-full">



          <Frame113 item={item} />



        </div>



      </div>



    </div>



  );



}



function Container1() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-current text-[24px] text-center transition-colors duration-300">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame114({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="absolute bg-white content-stretch flex flex-col gap-[18px] md:gap-[24px] items-start justify-center left-[16px] right-[16px] bottom-[16px] p-[16px] rounded-[16px] w-auto transition-transform duration-300 group-hover/card:-translate-y-[2px]">



      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">{item.description}</p>



      <a href={item.button?.href || "#"} className="content-stretch inline-flex max-w-full gap-[8px] items-center relative shrink-0 no-underline rounded-full px-[12px] py-[10px] text-[#8949ff] transition-colors duration-300 group-hover/card:bg-[#8949ff] group-hover/card:text-white">



        <div className="flex min-w-0 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-current text-[16px] text-left">



          <p className="leading-[1.1] whitespace-nowrap">{item.button?.label}</p>



        </div>



        <Container1 />



      </a>



    </div>



  );



}



function Frame112({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="group/card h-[479px] relative rounded-[20px] shrink-0 w-full overflow-hidden">



      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">



        <img alt="" className="absolute inset-0 h-full w-full max-w-none object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-[1.08]" src={item.image} />



      </div>



      <div className="flex flex-col justify-end size-full">



        <div className="content-stretch flex flex-col items-start justify-end pb-[30px] pt-[451px] px-[20px] relative size-full">



          <Frame114 item={item} />



        </div>



      </div>



    </div>



  );



}



function Container2() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-current text-[24px] text-center transition-colors duration-300">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame117({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="absolute bg-white content-stretch flex flex-col gap-[18px] md:gap-[24px] items-start justify-center left-[16px] right-[16px] bottom-[16px] p-[16px] rounded-[16px] w-auto transition-transform duration-300 group-hover/card:-translate-y-[2px]">



      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">{item.description}</p>



      <a href={item.button?.href || "#"} className="content-stretch inline-flex max-w-full gap-[8px] items-center relative shrink-0 no-underline rounded-full px-[12px] py-[10px] text-[#8949ff] transition-colors duration-300 group-hover/card:bg-[#8949ff] group-hover/card:text-white">



        <div className="flex min-w-0 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-current text-[16px] text-left">



          <p className="leading-[1.1] whitespace-nowrap">{item.button?.label}</p>



        </div>



        <Container2 />



      </a>



    </div>



  );



}



function Frame116({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="group/card h-[479px] relative rounded-[20px] shrink-0 w-full overflow-hidden">



      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">



        <img alt="" className="absolute inset-0 h-full w-full max-w-none object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-[1.08]" src={item.image} />



      </div>



      <div className="flex flex-col justify-end size-full">



        <div className="content-stretch flex flex-col items-start justify-end pb-[30px] pt-[451px] px-[20px] relative size-full">



          <Frame117 item={item} />



        </div>



      </div>



    </div>



  );



}



function Container3() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-current text-[24px] text-center transition-colors duration-300">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame119({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="absolute bg-white content-stretch flex flex-col gap-[18px] md:gap-[24px] items-start justify-center left-[16px] right-[16px] bottom-[16px] p-[16px] rounded-[16px] w-auto transition-transform duration-300 group-hover/card:-translate-y-[2px]">



      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">{item.description}</p>



      <a href={item.button?.href || "#"} className="content-stretch inline-flex max-w-full gap-[8px] items-center relative shrink-0 no-underline rounded-full px-[12px] py-[10px] text-[#8949ff] transition-colors duration-300 group-hover/card:bg-[#8949ff] group-hover/card:text-white">



        <div className="flex min-w-0 flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-current text-[16px] text-left">



          <p className="leading-[1.1] whitespace-nowrap">{item.button?.label}</p>



        </div>



        <Container3 />



      </a>



    </div>



  );



}



function Frame118({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="group/card h-[479px] relative rounded-[20px] shrink-0 w-full overflow-hidden">



      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">



        <img alt="" className="absolute inset-0 h-full w-full max-w-none object-cover object-center transition-transform duration-500 ease-out group-hover/card:scale-[1.08]" src={item.image} />



      </div>



      <div className="flex flex-col justify-end size-full">



        <div className="content-stretch flex flex-col items-start justify-end pb-[30px] pt-[451px] px-[20px] relative size-full">



          <Frame119 item={item} />



        </div>



      </div>



    </div>



  );



}



function Frame115({ content }: { content: any }) {



  if (!content?.services?.items) return null;



  const items = content.services.items;



  return (



    <div className="relative shrink-0 w-full">



      <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-4">



        <div className="content-stretch flex min-w-0 flex-col gap-[16px] min-h-[520px] items-start relative shrink-0 w-full" data-name="Component 7">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[24px] md:text-[28px] w-full">{items[0]?.title}</p>



          <Frame111 item={items[0]} />



        </div>



        <div className="content-stretch flex min-w-0 flex-col gap-[16px] min-h-[520px] items-start relative shrink-0 w-full" data-name="Component 8">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[24px] md:text-[28px] w-full">{items[1]?.title}</p>



          <Frame112 item={items[1]} />



        </div>



        <div className="content-stretch flex min-w-0 flex-col gap-[16px] min-h-[520px] items-start relative shrink-0 w-full" data-name="Component 9">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[24px] md:text-[28px] w-full">{items[2]?.title}</p>



          <Frame116 item={items[2]} />



        </div>



        <div className="content-stretch flex min-w-0 flex-col gap-[16px] min-h-[520px] items-start relative shrink-0 w-full" data-name="Component 10">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[24px] md:text-[28px] w-full">{items[3]?.title}</p>



          <Frame118 item={items[3]} />



        </div>



      </div>



    </div>



  );



}



function Frame18({ content }: { content?: any }) {



  if (!content) return null;



  return (



    <div className="mb-[-60px] relative rounded-[32px] md:rounded-[60px] shrink-0 w-full">



      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[60px]">



        <div className="absolute inset-0 overflow-hidden rounded-[60px]">



          <img alt="" className="absolute h-[299.1%] left-[-0.14%] max-w-none top-[-166.27%] w-[100.14%]" src={content.hero?.images?.[1]} />



        </div>



        <div className="absolute bg-[#f7f5f9] inset-0 rounded-[32px] md:rounded-[60px]" />



      </div>



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[56px] md:py-[80px] relative w-full">



          <Frame17 content={content} />



          <Frame115 content={content} />



        </div>



      </div>



    </div>



  );



}



function Frame107() {



  return (



    <div className="content-stretch flex flex-col items-start mb-[-2px] pb-[60px] relative shrink-0 w-full">



      <Frame />



      <Frame18 />



    </div>



  );



}



function BackgroundBorder({ item, editableItem }: { item: any; editableItem?: any }) {



  if (!item) return null;



  return (



    <div className="bg-[#f7f5f9] flex-[1_0_0] h-full min-h-[112px] min-w-px relative rounded-[12px]" data-name="Background+Border">



      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex gap-[12px] items-center p-[10px] md:p-[12px] relative size-full">



          <div className="relative h-[74px] w-[106px] shrink-0 overflow-hidden rounded-[4px]" data-tina-field={fieldFor(editableItem, "image")}>



            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={item.image} />



          </div>



          <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[14px] md:text-[16px]" data-tina-field={fieldFor(editableItem, "title")}>



            <p className="leading-[1.1]">{item.title}</p>



          </div>



        </div>



      </div>



    </div>



  );



}



function BackgroundBorder1() {



  return (



    <div className="bg-[#f7f5f9] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Background+Border">



      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex gap-[8px] items-center p-[9px] relative size-full">



          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">



            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/imgRectangle803.png" />



          </div>



          <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[18px]">



            <p className="leading-[1.1]">Personas que desean mejorar su hipoteca</p>



          </div>



        </div>



      </div>



    </div>



  );



}



function BackgroundBorder2() {



  return (



    <div className="bg-[#f7f5f9] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Background+Border">



      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex gap-[8px] items-center p-[9px] relative size-full">



          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">



            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/imgRectangle804.png" />



          </div>



          <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[18px]">



            <p className="leading-[1.1]">Casos complejos o rechazados por bancos</p>



          </div>



        </div>



      </div>



    </div>



  );



}



function BackgroundBorder3() {



  return (



    <div className="bg-[#f7f5f9] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Background+Border">



      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex gap-[8px] items-center p-[9px] relative size-full">



          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">



            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/imgRectangle805.png" />



          </div>



          <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[18px]">



            <p className="leading-[1.1]">Compradores que ya tienen vivienda vista</p>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame97({ content, editable }: { content: any; editable?: any }) {



  if (!content?.whoIsItFor) return null;



  const items = content.whoIsItFor.items || [];



  return (



    <div className="content-stretch flex flex-col gap-[28px] md:gap-[36px] items-start relative shrink-0 w-full max-w-[1420px] mx-auto">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[32px] md:text-[40px] text-center w-full" data-tina-field={fieldFor(editable?.whoIsItFor, "title")}>{content.whoIsItFor.title}</p>



      <div className="content-stretch grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] md:gap-[20px] xl:gap-[24px] items-start relative shrink-0 w-full">



        <BackgroundBorder item={items[0]} editableItem={editable?.whoIsItFor?.items?.[0]} />



        <BackgroundBorder item={items[1]} editableItem={editable?.whoIsItFor?.items?.[1]} />



        <BackgroundBorder item={items[2]} editableItem={editable?.whoIsItFor?.items?.[2]} />



        <BackgroundBorder item={items[3]} editableItem={editable?.whoIsItFor?.items?.[3]} />



      </div>



    </div>



  );



}



function Frame62({ content, editable }: { content: any; editable?: any }) {



  return (



    <div className="content-stretch flex flex-col gap-[40px] items-start py-[48px] md:py-[56px] relative shrink-0 w-full">



      <Frame97 content={content} editable={editable} />



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di() {



  return (



    <div className="h-[481px] relative rounded-[24px] shrink-0 w-[452px]" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">



        <img alt="" className="absolute h-full left-[-34.23%] max-w-none top-0 w-[159.66%]" src="/images/imgAb6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di.png" />



      </div>



    </div>



  );



}



function Frame100() {



  return (



    <div className="bg-[#8949ff] content-stretch flex flex-col items-center justify-center pl-[14px] pr-[15px] py-[9px] relative rounded-[19px] shrink-0 size-[38px]">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">1</p>



    </div>



  );



}



function Frame101() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.1] min-h-px min-w-px not-italic relative text-[#080813]">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[28px] w-full">Diagnóstico inicial</p>



      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Analizamos tu situación actual y objetivo hipotecario para entender si existe una ruta viable y queé opciones pueden aplicarse a tu perfil.</p>



    </div>



  );



}



function Frame89() {



  return (



    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">



      <Frame100 />



      <Frame101 />



    </div>



  );



}



function Frame102() {



  return (



    <div className="bg-[#8949ff] content-stretch flex flex-col items-center justify-center pl-[14px] pr-[15px] py-[9px] relative rounded-[19px] shrink-0 size-[38px]">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">3</p>



    </div>



  );



}



function Frame103() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.1] min-h-px min-w-px not-italic relative text-[#080813]">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[28px] w-full">Comparativa de opciones</p>



      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Te mostramos las alternativas que encajan contigo, explicadas en lenguaje claro para facilitar una decisión informada y alineada con tu objetivo.</p>



    </div>



  );



}



function Frame91() {



  return (



    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">



      <Frame102 />



      <Frame103 />



    </div>



  );



}



function Frame104() {



  return (



    <div className="bg-[#8949ff] content-stretch flex flex-col items-center justify-center pl-[14px] pr-[15px] py-[9px] relative rounded-[19px] shrink-0 size-[38px]">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">5</p>



    </div>



  );



}



function Frame105() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.1] min-h-px min-w-px not-italic relative text-[#080813]">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[28px] w-full">Coordinación con banco y notaría</p>



      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Gestionamos la comunicación entre intervinieres particulares, organismos y entidades para asegurar que el proceso avance correctamente y llegues a firma sin retrasos ni sorpresas.</p>



    </div>



  );



}



function Frame90() {



  return (



    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">



      <Frame104 />



      <Frame105 />



    </div>



  );



}



function Frame98() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">



      <Frame89 />



      <Frame91 />



      <Frame90 />



    </div>



  );



}



function Frame106() {



  return (



    <div className="bg-[#8949ff] content-stretch flex flex-col items-center justify-center pl-[14px] pr-[15px] py-[9px] relative rounded-[19px] shrink-0 size-[38px]">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">2</p>



    </div>



  );



}



function Frame108() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.1] min-h-px min-w-px not-italic relative text-[#080813]">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[28px] w-full">Estudio de viabilidad</p>



      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Evaluamos tu perfil financiero y laboral para determinar queé bancos podrían aprobar tu solicitud y bajo queé condiciones realistas posibles.</p>



    </div>



  );



}



function Frame92() {



  return (



    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">



      <Frame106 />



      <Frame108 />



    </div>



  );



}



function Frame109() {



  return (



    <div className="bg-[#8949ff] content-stretch flex flex-col items-center justify-center pl-[14px] pr-[15px] py-[9px] relative rounded-[19px] shrink-0 size-[38px]">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">4</p>



    </div>



  );



}



function Frame110() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.1] min-h-px min-w-px not-italic relative text-[#080813]">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[28px] w-full">Estrategia recomendada</p>



      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Decides el camino más conveniente según tu perfil, priorizando viabilidad, tiempos de aprobación y condiciones sostenibles en el largo plazo.</p>



    </div>



  );



}



function Frame93() {



  return (



    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">



      <Frame109 />



      <Frame110 />



    </div>



  );



}



function Frame120() {



  return (



    <div className="bg-[#8949ff] content-stretch flex flex-col items-center justify-center pl-[14px] pr-[15px] py-[9px] relative rounded-[19px] shrink-0 size-[38px]">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">6</p>



    </div>



  );



}



function Frame121() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.1] min-h-px min-w-px not-italic relative text-[#080813]">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[28px] w-full">Firma con claridad</p>



      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Llegas a la firma entendiendo cada decisión tomada, con acompañamiento experto que garantiza coherencia entre lo aprobado y lo contratado.</p>



    </div>



  );



}



function Frame94() {



  return (



    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">



      <Frame120 />



      <Frame121 />



    </div>



  );



}



function Frame99() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">



      <Frame92 />



      <Frame93 />



      <Frame94 />



    </div>



  );



}



function Frame63() {



  return (



    <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">



      <Frame98 />



      <Frame99 />



    </div>



  );



}



function Container5({ content }: { content: any }) {



  const steps = content?.steps?.items || [];



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative" data-name="Container">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[40px] w-full">



        <p className="leading-[1.1]">{content?.steps?.title || "Conoce nuestro paso a paso"}</p>



      </div>



      <div className="content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full">



        {[steps.slice(0, 3), steps.slice(3, 6)].map((column, columnIndex) => (



          <div key={columnIndex} className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px min-w-px relative">



            {column.map((item: any, index: number) => (



              <div key={item.number} className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">



                <div className="bg-[#8949ff] content-stretch flex flex-col items-center justify-center pl-[14px] pr-[15px] py-[9px] relative rounded-[19px] shrink-0 size-[38px]">



                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">{index + 1}</p>



                </div>



                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start leading-[1.1] min-h-px min-w-px not-italic relative text-[#080813]">



                  <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[24px] md:text-[28px] w-full">{item.title}</p>



                  <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">{item.description}</p>



                </div>



              </div>



            ))}



          </div>



        ))}



      </div>



    </div>



  );



}



function HowItWorksSection({ content, editable }: { content: any; editable?: any }) {



  const section = content?.howItWorks;



  if (!section) return null;



  return (



    <section className="bg-white content-stretch flex flex-col items-center py-[56px] md:py-[80px] relative shrink-0 w-full">



      <div className="content-stretch flex flex-col gap-[40px] items-center px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] relative w-full">



        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full max-w-[1296px] text-center">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[32px] md:text-[40px] w-full" data-tina-field={fieldFor(editable?.howItWorks, "title")}>{section.title}</p>



          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[16px] md:text-[18px] w-full" data-tina-field={fieldFor(editable?.howItWorks, "description")}>{section.description}</p>



        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[28px] md:gap-[40px] w-full max-w-[1296px]">



          {(section.items || []).map((item: any, index: number) => (



            <div key={index} className="content-stretch flex flex-col items-center text-center gap-[16px] relative" data-tina-field={fieldFor(editable?.howItWorks?.items?.[index], "title")}>



              <div className="bg-[#8949ff] content-stretch flex items-center justify-center rounded-full shadow-[0px_10px_15px_0px_rgba(137,73,255,0.2)] size-[80px]">



                <p className="font-['Inter:Bold',sans-serif] font-bold text-[22px] text-white">{index + 1}</p>



              </div>



              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] text-[#080813] text-[18px] w-full">{item.title}</p>



              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.35] text-[#62748e] text-[15px] w-full">{item.description}</p>



            </div>



          ))}



        </div>



        {section.cta?.label ? (



          <a href={section.cta.href || "#"} className={`${MAIN_BUTTON_CLASS} w-full sm:w-auto`} data-tina-field={fieldFor(editable?.howItWorks?.cta, "label")}>



            <p className={MAIN_BUTTON_TEXT_CLASS}>{section.cta.label}</p>



            <ArrowRight />



          </a>



        ) : null}



      </div>



    </section>



  );



}



function ActionCtaSection({ content }: { content: any }) {



  const section = content?.actionCta;



  if (!section) return null;



  return (



    <section className="bg-white content-stretch flex flex-col items-center px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[56px] md:py-[80px] relative shrink-0 w-full">



      <div className="bg-[#8949ff] content-stretch flex flex-col md:flex-row gap-[32px] items-start md:items-center justify-between overflow-hidden px-[28px] md:px-[60px] py-[48px] md:py-[80px] relative rounded-[24px] w-full">



        <div className="content-stretch flex flex-col gap-[16px] items-start relative z-10 w-full max-w-[787px]">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] text-[30px] md:text-[40px] text-white">{section.title}</p>



          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.35] text-[16px] md:text-[18px] text-white">{section.description}</p>



        </div>



        <a href={section.button?.href || "#"} className={`${MAIN_BUTTON_CLASS} shrink-0 z-10 w-full sm:w-auto`}>



          <p className={MAIN_BUTTON_TEXT_CLASS}>{section.button?.label}</p>



        </a>



      </div>



    </section>



  );



}



export function StepTimelineSection({ content, editable }: { content: any; editable?: any }) {



  const steps = content?.steps?.items || [];



  if (!steps.length) return null;



  return (



    <section className="bg-white border-y border-white content-stretch flex flex-col items-center px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[56px] md:py-[80px] relative shrink-0 w-full">



      <div className="bg-[radial-gradient(circle_at_1%_2%,rgba(137,73,255,0.9)_0%,#0f172b_18%)] content-stretch flex flex-col items-center justify-center overflow-hidden px-[28px] py-[48px] md:px-[60px] md:py-[80px] relative rounded-[32px] md:rounded-[60px] shrink-0 w-full">



        <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-center relative w-full">



          <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[4px] items-center leading-[1.1] not-italic relative shrink-0 text-center w-full" data-tina-field={fieldFor(editable?.steps, "title")}>



            <p className="relative shrink-0 text-[#fcc63d] text-[15px] whitespace-nowrap">{content.steps.eyebrow || "Conoce nuestro paso a paso"}</p>



            <p className="relative shrink-0 text-[32px] md:text-[40px] text-white w-full max-w-[1024px]">{content.steps.title}</p>



          </div>



          <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full max-w-[1024px]">



            <div className="hidden md:block -translate-x-1/2 absolute bg-[rgba(255,255,255,0.1)] h-full left-1/2 top-0 w-px" />



            {steps.slice(0, 6).map((item: any, index: number) => {



              const isRight = index % 2 === 1;



              return (



                <div key={item.number} className={`relative shrink-0 w-full md:min-h-[108px] flex items-center ${isRight ? "md:justify-end" : "md:justify-start"}`} data-tina-field={fieldFor(editable?.steps?.items?.[index], "title")}>



                  <div className={`content-stretch flex gap-[24px] md:gap-[32px] items-center relative w-full md:w-[calc(50%+28px)] ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}>



                    <div className="bg-[#8949ff] relative rounded-full shadow-[0px_20px_25px_0px_rgba(137,73,255,0.3),0px_8px_10px_0px_rgba(137,73,255,0.3)] shrink-0 size-[48px] md:size-[56px] z-10">



                      <div className="content-stretch flex items-center justify-center relative size-full">



                        <p className="font-['Inter:Black',sans-serif] font-black leading-[30px] not-italic relative shrink-0 text-[18px] md:text-[20px] text-white whitespace-nowrap">{index + 1}</p>



                      </div>



                    </div>



                    <div className={`content-stretch flex flex-col gap-[8px] justify-center leading-[1.1] not-italic relative flex-1 ${isRight ? "md:items-end md:text-right" : "md:items-start md:text-left"} text-left`}>



                      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#fcc63d] text-[15px] w-full">Paso {index + 1}</p>



                      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[20px] md:text-[22px] text-white w-full">{item.title}</p>



                      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#bec5d2] text-[15px] w-full">{item.description}</p>



                    </div>



                  </div>



                </div>



              );



            })}



          </div>



        </div>



      </div>



    </section>



  );



}



function StaggeredMetricsSection({ content, editable }: { content: any; editable?: any }) {



  return (



    <div className="mb-[-2px] relative shrink-0 w-full " data-name="Staggered Metrics Section">



      <div className="content-stretch flex flex-col items-start px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[56px] md:py-[80px] relative w-full ">



        <Frame62 content={content} editable={editable} />



        <HowItWorksSection content={content} editable={editable} />



      </div>



    </div>



  );



}



function Frame58() {



  return (



    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full ">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[30px] md:text-[40px] text-center text-white w-full">Conoce nuestros beneficios</p>



    </div>



  );



}



function Frame3() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full ">



      <Frame58 />



    </div>



  );



}



function Frame19() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full max-w-[1300px]">



      <Frame3 />



    </div>



  );



}



function ItemIcon() {



  return (



    <div className="relative shrink-0 size-[28px]" data-name="item.icon">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">



        <g id="item.icon">



          <path d={svgPaths.p3da6200} id="Vector" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d={svgPaths.p394f8700} id="Vector_2" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d="M11.6667 10.5H9.33333" id="Vector_3" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d="M18.6667 15.1667H9.33333" id="Vector_4" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d="M18.6667 19.8333H9.33333" id="Vector_5" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



        </g>



      </svg>



    </div>



  );



}



function Container8() {



  return (



    <div className="bg-[#fcc63d] relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(252,198,61,0.2),0px_4px_6px_0px_rgba(252,198,61,0.2)] shrink-0 size-[64px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



        <ItemIcon />



      </div>



    </div>



  );



}



function P() {



  return (



    <div className="h-[20px] relative shrink-0 w-[213.844px]" data-name="p">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">



        <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px not-italic relative text-[16px] text-center text-white">Entiendes exactamente lo que estás firmando.</p>



      </div>



    </div>



  );



}



function Container7() {



  return (



    <div className="bg-[#ad81ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name="Container">



      <div aria-hidden="true" className="absolute border border-[#ad81ff] border-solid inset-0 pointer-events-none rounded-[32px]" />



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[53px] pt-[33px] px-px relative size-full">



          <Container8 />



          <P />



        </div>



      </div>



    </div>



  );



}



function ItemIcon1() {



  return (



    <div className="relative shrink-0 size-[28px]" data-name="item.icon">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">



        <g id="item.icon">



          <path d={svgPaths.p3997a780} id="Vector" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d={svgPaths.p275e0300} id="Vector_2" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



        </g>



      </svg>



    </div>



  );



}



function Container10() {



  return (



    <div className="bg-[#fcc63d] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(252,198,61,0.2),0px_4px_6px_0px_rgba(252,198,61,0.2)] w-[64px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



        <ItemIcon1 />



      </div>



    </div>



  );



}



function P1() {



  return (



    <div className="h-[40px] relative shrink-0 w-[236px]" data-name="p">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">



        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[118.27px] not-italic text-[16px] text-center text-white top-[-1px] w-[220px]">Tomas decisiones con información clara.</p>



      </div>



    </div>



  );



}



function Container9() {



  return (



    <div className="bg-[#ad81ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name="Container">



      <div aria-hidden="true" className="absolute border border-[#ad81ff] border-solid inset-0 pointer-events-none rounded-[32px]" />



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[24px] items-center px-px py-[33px] relative size-full">



          <Container10 />



          <P1 />



        </div>



      </div>



    </div>



  );



}



function ItemIcon2() {



  return (



    <div className="relative shrink-0 size-[28px]" data-name="item.icon">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">



        <g id="item.icon">



          <path d={svgPaths.p1addb3c0} id="Vector" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d={svgPaths.p18228270} id="Vector_2" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d={svgPaths.p121d1300} id="Vector_3" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



        </g>



      </svg>



    </div>



  );



}



function Container12() {



  return (



    <div className="bg-[#fcc63d] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(252,198,61,0.2),0px_4px_6px_0px_rgba(252,198,61,0.2)] w-[64px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



        <ItemIcon2 />



      </div>



    </div>



  );



}



function P2() {



  return (



    <div className="h-[40px] relative shrink-0 w-[236px]" data-name="p">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">



        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[118.44px] not-italic text-[16px] text-center text-white top-[-1px] w-[216px]">Reduces tiempos y fricciones del proceso.</p>



      </div>



    </div>



  );



}



function Container11() {



  return (



    <div className="bg-[#ad81ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name="Container">



      <div aria-hidden="true" className="absolute border border-[#ad81ff] border-solid inset-0 pointer-events-none rounded-[32px]" />



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[24px] items-center px-px py-[33px] relative size-full">



          <Container12 />



          <P2 />



        </div>



      </div>



    </div>



  );



}



function ItemIcon3() {



  return (



    <div className="relative shrink-0 size-[28px]" data-name="item.icon">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">



        <g id="item.icon">



          <path d={svgPaths.p2d2ce480} id="Vector" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d={svgPaths.pe187a00} id="Vector_2" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d="M18.6667 12.8333H18.6783" id="Vector_3" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



        </g>



      </svg>



    </div>



  );



}



function Container14() {



  return (



    <div className="bg-[#fcc63d] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(252,198,61,0.2),0px_4px_6px_0px_rgba(252,198,61,0.2)] w-[64px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



        <ItemIcon3 />



      </div>



    </div>



  );



}



function P3() {



  return (



    <div className="h-[40px] relative shrink-0 w-[236px]" data-name="p">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">



        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[118.44px] not-italic text-[16px] text-center text-white top-[-1px] w-[216px]">Accedes a condiciones más adecuadas.</p>



      </div>



    </div>



  );



}



function Container13() {



  return (



    <div className="bg-[#ad81ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name="Container">



      <div aria-hidden="true" className="absolute border border-[#ad81ff] border-solid inset-0 pointer-events-none rounded-[32px]" />



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[24px] items-center px-px py-[33px] relative size-full">



          <Container14 />



          <P3 />



        </div>



      </div>



    </div>



  );



}



function ItemIcon4() {



  return (



    <div className="relative shrink-0 size-[28px]" data-name="item.icon">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">



        <g id="item.icon">



          <path d={svgPaths.p2d2ce480} id="Vector" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d={svgPaths.pe187a00} id="Vector_2" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



          <path d="M18.6667 12.8333H18.6783" id="Vector_3" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.91667" />



        </g>



      </svg>



    </div>



  );



}



function Container16() {



  return (



    <div className="bg-[#fcc63d] flex-[1_0_0] min-h-px min-w-px relative rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(252,198,61,0.2),0px_4px_6px_0px_rgba(252,198,61,0.2)] w-[64px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



        <ItemIcon4 />



      </div>



    </div>



  );



}



function P4() {



  return (



    <div className="h-[40px] relative shrink-0 w-[236px]" data-name="p">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">



        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[118.44px] not-italic text-[16px] text-center text-white top-[-1px] w-[216px]">Llegas a firma con acompañamiento integral.</p>



      </div>



    </div>



  );



}



function Container15() {



  return (



    <div className="bg-[#ad81ff] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[32px]" data-name="Container">



      <div aria-hidden="true" className="absolute border border-[#ad81ff] border-solid inset-0 pointer-events-none rounded-[32px]" />



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[24px] items-center px-px py-[33px] relative size-full">



          <Container16 />



          <P4 />



        </div>



      </div>



    </div>



  );



}



function BenefitStripCard({



  icon,



  fallábackIcon,



  text



}: {



  icon?: string;



  fallábackIcon: string;



  text: string;



}) {



  return (



    <div className="flex w-full min-h-[136px] flex-col items-center justify-center gap-[14px] rounded-[22px] bg-[#ad81ff] px-[16px] py-[20px] text-center md:min-h-[150px] md:gap-[16px] md:rounded-[24px] md:px-[18px] md:py-[22px]">



      <div className="flex size-[44px] items-center justify-center rounded-full bg-[#fcc63d] shadow-[0px_10px_15px_0px_rgba(252,198,61,0.2),0px_4px_6px_0px_rgba(252,198,61,0.2)] md:size-[48px]">



        {icon ? (



          <img alt="" className="size-[22px] object-contain md:size-[24px]" src={icon} />



        ) : (



          <span className="font-['Inter:Bold',sans-serif] font-bold text-[#080813] text-[20px] leading-none md:text-[22px]">{fallábackIcon}</span>



        )}



      </div>



      <p className="max-w-[170px] font-['Inter:Bold',sans-serif] text-[12px] font-bold leading-[1.25] text-white md:max-w-[180px] md:text-[13px]">



        {text}



      </p>



    </div>



  );



}



function Container6({



  content,



  editable



}: {



  content: any;



  editable?: any;



}) {



  const cards = (content?.benefits?.items?.length



    ? content.benefits.items.map((item: any, index: number) => ({



        icon: item.icon,



        fallábackIcon: ["!", "i", "%", "+", "*"][index] || "•",



        text: item.text



      }))



    : [



        { icon: undefined, fallábackIcon: "!", text: "Entiendes exactamente lo que estás firmando." },



        { icon: undefined, fallábackIcon: "i", text: "Tomas decisiones con información clara." },



        { icon: undefined, fallábackIcon: "%", text: "Reduces tiempos y fricciones del proceso." },



        { icon: undefined, fallábackIcon: "+", text: "Accedes a condiciones más adecuadas." },



        { icon: undefined, fallábackIcon: "*", text: "Llegas a firma con acompañamiento integral." }



      ]);



  return (



    <div className="relative grid w-full max-w-[1120px] grid-cols-2 gap-[12px] items-stretch md:grid-cols-3 md:gap-[16px] xl:grid-cols-5" data-name="Container">



      {cards.map((card: any, index: number) => (



        <div key={index} data-tina-field={fieldFor(editable?.benefits?.items?.[index], "text")}>



          <BenefitStripCard icon={card.icon} fallábackIcon={card.fallábackIcon} text={card.text} />



        </div>



      ))}



    </div>



  );



}



function Frame7() {



  return (



    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-white w-[587px]">



        <p className="leading-[1.1]">¿Cuáles son los requisitos de nuestro proceso?</p>



      </div>



    </div>



  );



}



function CheckCircle() {



  return (



    <div className="relative shrink-0 size-[18px]" data-name="CheckCircle">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



        <g clipPath="url(#clip0_1_1121)" id="CheckCircle">



          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



        </g>



        <defs>



          <clipPath id="clip0_1_1121">



            <rect fill="white" height="18" width="18" />



          </clipPath>



        </defs>



      </svg>



    </div>



  );



}



function Container17() {



  return (



    <div className="bg-[rgba(158,105,255,0.3)] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">



      <CheckCircle />



    </div>



  );



}



function CheckCircle1() {



  return (



    <div className="relative shrink-0 size-[18px]" data-name="CheckCircle">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



        <g clipPath="url(#clip0_1_1121)" id="CheckCircle">



          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



        </g>



        <defs>



          <clipPath id="clip0_1_1121">



            <rect fill="white" height="18" width="18" />



          </clipPath>



        </defs>



      </svg>



    </div>



  );



}



function Container18() {



  return (



    <div className="bg-[rgba(158,105,255,0.3)] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">



      <CheckCircle1 />



    </div>



  );



}



function CheckCircle2() {



  return (



    <div className="relative shrink-0 size-[18px]" data-name="CheckCircle">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



        <g clipPath="url(#clip0_1_1121)" id="CheckCircle">



          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



        </g>



        <defs>



          <clipPath id="clip0_1_1121">



            <rect fill="white" height="18" width="18" />



          </clipPath>



        </defs>



      </svg>



    </div>



  );



}



function Container19() {



  return (



    <div className="bg-[rgba(158,105,255,0.3)] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">



      <CheckCircle2 />



    </div>



  );



}



function CheckCircle3() {



  return (



    <div className="relative shrink-0 size-[18px]" data-name="CheckCircle">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



        <g clipPath="url(#clip0_1_1121)" id="CheckCircle">



          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



        </g>



        <defs>



          <clipPath id="clip0_1_1121">



            <rect fill="white" height="18" width="18" />



          </clipPath>



        </defs>



      </svg>



    </div>



  );



}



function Container20() {



  return (



    <div className="bg-[rgba(158,105,255,0.3)] content-stretch flex items-center justify-center relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">



      <CheckCircle3 />



    </div>



  );



}



function Frame14() {



  return (



    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[25px]">



      <Container17 />



      <div className="h-[27px] relative shrink-0 w-0">



        <div className="absolute inset-[0_-0.5px]">



          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 27">



            <path d="M0.5 0V27" id="Vector 2" stroke="var(--stroke-0, white)" />



          </svg>



        </div>



      </div>



      <Container18 />



      <div className="h-[27px] relative shrink-0 w-0">



        <div className="absolute inset-[0_-0.5px]">



          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 27">



            <path d="M0.5 0V27" id="Vector 2" stroke="var(--stroke-0, white)" />



          </svg>



        </div>



      </div>



      <Container19 />



      <div className="h-[27px] relative shrink-0 w-0">



        <div className="absolute inset-[0_-0.5px]">



          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 27">



            <path d="M0.5 0V27" id="Vector 2" stroke="var(--stroke-0, white)" />



          </svg>



        </div>



      </div>



      <Container20 />



    </div>



  );



}



function Frame8() {



  return (



    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full">



      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-white">



        <p className="leading-[1.1]">Compartir información básica de tu situación.</p>



      </div>



    </div>



  );



}



function Frame9() {



  return (



    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full">



      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-white">



        <p className="leading-[1.1]">Objetivo claro (compra o mejora).</p>



      </div>



    </div>



  );



}



function Frame10() {



  return (



    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full">



      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-white">



        <p className="leading-[1.1]">Ingresos y estabilidad laboral.</p>



      </div>



    </div>



  );



}



function Frame11() {



  return (



    <div className="content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full">



      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[18px] text-white">



        <p className="leading-[1.1]">Ahorro aproximado disponible.</p>



      </div>



    </div>



  );



}



function Frame6() {



  return (



    <div className="content-stretch flex flex-col items-start justify-between relative self-stretch shrink-0 w-[587px]">



      <Frame8 />



      <Frame9 />



      <Frame10 />



      <Frame11 />



    </div>



  );



}



function Frame15() {



  return (



    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">



      <Frame14 />



      <Frame6 />



    </div>



  );



}



function Container21() {



  return (



    <div className="bg-[#8949ff] relative rounded-[16px] shrink-0 w-full" data-name="Container">



      <div className="flex flex-col items-center justify-center size-full">



        <div className="content-stretch flex flex-col gap-[24px] items-center justify-center not-italic px-[20px] py-[16px] relative text-white w-full">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[28px] w-full">¿Cuánto vale?</p>



          <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[0px] w-full whitespace-pre-wrap">



            <p className="leading-[1.1] mb-0 text-[18px]">El diagnóstico inicial es gratuito. A partir de ahí, el costo depende del nivel de acompañamiento requerido y la complejidad del caso.</p>



            <p className="leading-[1.1] mb-0 text-[18px]">&nbsp;</p>



            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] text-[18px]">Siempre sabrás el valor antes de avanzar.</p>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame12() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative">



      <Frame7 />



      <Frame15 />



      <Container21 />



      <div className="bg-[#fcc63d] content-stretch flex items-center justify-center px-[40px] py-[19px] relative rounded-[33554400px] shrink-0">



        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#080813] text-[18px] text-center tracking-[1.8px] uppercase whitespace-nowrap">CALCULAR MI HIPOTECA AHORA</p>



      </div>



    </div>



  );



}



function Frame13() {



  return (



    <div className="content-stretch flex gap-[80px] items-center relative shrink-0 w-full">



      <div className="absolute left-[294px] size-[806px] top-[-38px]">



        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 806 806">



          <circle cx="403" cy="403" fill="url(#paint0_radial_1_1135)" id="Ellipse 2" r="403" />



          <defs>



            <radialGradient cx="0" cy="0" gradientTransform="translate(403 403) rotate(90) scale(403)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1135" r="1">



              <stop stopColor="#4F3BF9" />



              <stop offset="1" stopColor="#3021AE" stopOpacity="0" />



            </radialGradient>



          </defs>



        </svg>



      </div>



      <div className="absolute left-[529px] size-[532px] top-[-55px]">



        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 532 532">



          <circle cx="266" cy="266" fill="url(#paint0_radial_1_1127)" id="Ellipse 1" r="266" />



          <defs>



            <radialGradient cx="0" cy="0" gradientTransform="translate(266 266) rotate(90) scale(266)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_1127" r="1">



              <stop stopColor="#8949FF" />



              <stop offset="1" stopColor="#522C99" stopOpacity="0" />



            </radialGradient>



          </defs>



        </svg>



      </div>



      <Frame12 />



      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">



        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]">



          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">



            <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src="/images/imgRectangle805.png" />



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame4() {



  return (



    <div className="bg-[#080813] relative rounded-[40px] shrink-0 w-full">



      <div className="overflow-clip rounded-[inherit] size-full">



        <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">



          <Frame13 />



        </div>



      </div>



    </div>



  );



}



function Frame96() {



  return (



    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">



      <Frame4 />



    </div>



  );



}



function Frame95({



  content,



  editable



}: {



  content: any;



  editable?: any;



}) {



  const process = content?.whoIsItFor?.process || {



    title: "¿Cuáles son los requisitos de nuestro proceso?",



    requirements: [



      "Compartir información básica de tu situación.",



      "Objetivo claro: compra o mejora.",



      "Ingresos y estabilidad laboral.",



      "Ahorro aproximado disponible."



    ],



    pricing: {



      title: "¿Cuánto vale?",



      description:



        "El diagnóstico inicial es gratuito. Después, el costo depende del nivel de acompañamiento requerido y la complejidad del caso.",



      highlight: "Siempre sabrás el valor antes de avanzar.",



      button: {



        label: "Calcular mi hipoteca ahora",



        href: "#calculator"



      }



    }



  };



  return (



    <div className="flex w-full shrink-0 flex-col items-center gap-[20px] overflow-hidden rounded-[32px] bg-[url('/images/frame7.png')] bg-cover bg-center bg-no-repeat px-[18px] py-[34px] md:gap-[24px] md:rounded-[40px] md:px-[40px] md:py-[44px] xl:gap-[28px] xl:px-[56px] xl:py-[52px]">



      <Frame19 />



      <Container6 content={content} editable={editable} />



      <div className="grid w-full max-w-[1120px] grid-cols-1 gap-[22px] rounded-[28px] bg-[radial-gradient(circle_at_78%_72%,rgba(126,86,255,0.28),rgba(8,8,19,0.98)_34%)] p-[20px] md:gap-[28px] md:rounded-[32px] md:p-[24px] xl:grid-cols-[minmax(0,1fr)_380px] xl:items-center xl:px-[24px] xl:py-[20px]">



        <div className="flex flex-col gap-[18px] text-white md:gap-[20px]">



          <p className="font-['Inter:Bold',sans-serif] text-[28px] font-bold leading-[1.1] md:text-[40px]" data-tina-field={fieldFor(editable?.whoIsItFor?.process, "title")}>



            {process.title}



          </p>



          <div className="grid gap-[10px]" data-tina-field={fieldFor(editable?.whoIsItFor?.process, "requirements")}> 



            {(process.requirements || []).map((item: string, index: number) => (



              <div key={index} className="flex items-start gap-[10px] rounded-[16px] bg-[rgba(158,105,255,0.16)] px-[14px] py-[11px]">



                <div className="mt-[1px] flex size-[20px] shrink-0 items-center justify-center rounded-full bg-[rgba(158,105,255,0.3)]">



                  <svg className="size-[14px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



                    <path d={svgPaths.pa641000} stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



                    <path d="M6.75 8.25L9 10.5L16.5 3" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



                  </svg>



                </div>



                <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.35] md:text-[15px]">



                  {item}



                </p>



              </div>



            ))}



          </div>



          <a



            href={process.pricing?.button?.href || "#calculator"}



            className={`${MAIN_BUTTON_CLASS} mt-[6px] w-full md:w-fit`}



            data-tina-field={fieldFor(editable?.whoIsItFor?.process?.pricing, "button")}



          >



            <span className={MAIN_BUTTON_TEXT_CLASS}>{process.pricing?.button?.label || "Calcular mi hipoteca ahora"}</span>



          </a>



        </div>



        <div className="relative min-h-[250px] overflow-hidden rounded-[20px] md:min-h-[300px] xl:min-h-[320px]">



          <img alt="Familia revisando el proceso hipotecario en casa" className="absolute inset-0 h-full w-full object-cover" src={process.image || "/images/requisitos-nuestro-proceso.jpg"} data-tina-field={fieldFor(editable?.whoIsItFor?.process, "image")} />



        </div>



      </div>



    </div>



  );



}



function Frame122({ content, editable }: { content: any; editable?: any }) {



  return (



    <div className="content-stretch flex flex-col items-start mb-[-2px] relative shrink-0 w-full">



      <Frame95 content={content} editable={editable} />



    </div>



  );



}



function Frame33() {



  return (



    <div className="h-[17px] relative shrink-0 w-[113px]">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 17">



        <g id="Frame 3189">



          <path d={svgPaths.p15ec1000} fill="var(--fill-0, #8949FF)" id="Star 1" />



          <path d={svgPaths.p36dcfc80} fill="var(--fill-0, #8949FF)" id="Star 2" />



          <path d={svgPaths.p29a8c900} fill="var(--fill-0, #8949FF)" id="Star 3" />



          <path d={svgPaths.p347a0b00} fill="var(--fill-0, #8949FF)" id="Star 4" />



          <path d={svgPaths.p24c8a980} fill="var(--fill-0, #8949FF)" id="Star 5" />



        </g>



      </svg>



    </div>



  );



}



function Frame34() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative">



      <p className="font-['Trueno:Bold',sans-serif] leading-[1.1] relative shrink-0 text-[#8949ff] text-[18px] w-full">Carlos Gómez</p>



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] relative shrink-0 text-[#080813] text-[16px] w-full">Cliente desde 2022</p>



    </div>



  );



}



function Frame35() {



  return (



    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">



      <div className="relative shrink-0 size-[50px]">



        <img alt="" className="absolute block max-w-none size-full" height="50" src="/images/imgEllipse5.png" width="50" />



      </div>



      <Frame34 />



    </div>



  );



}



function SubContainer() {



  return (



    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Sub Container">



      <Frame33 />



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate queam aliqueam lacus. Quis elit sed pharetra facilisis.</p>



      <Frame35 />



    </div>



  );



}



function Frame37() {



  return (



    <div className="h-[17px] relative shrink-0 w-[113px]">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 17">



        <g id="Frame 3189">



          <path d={svgPaths.p15ec1000} fill="var(--fill-0, #8949FF)" id="Star 1" />



          <path d={svgPaths.p36dcfc80} fill="var(--fill-0, #8949FF)" id="Star 2" />



          <path d={svgPaths.p29a8c900} fill="var(--fill-0, #8949FF)" id="Star 3" />



          <path d={svgPaths.p347a0b00} fill="var(--fill-0, #8949FF)" id="Star 4" />



          <path d={svgPaths.p24c8a980} fill="var(--fill-0, #8949FF)" id="Star 5" />



        </g>



      </svg>



    </div>



  );



}



function Frame39() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative">



      <p className="font-['Trueno:Bold',sans-serif] leading-[1.1] relative shrink-0 text-[#8949ff] text-[18px] w-full">Carlos Gómez</p>



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] relative shrink-0 text-[#080813] text-[16px] w-full">Cliente desde 2022</p>



    </div>



  );



}



function Frame38() {



  return (



    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">



      <div className="relative shrink-0 size-[50px]">



        <img alt="" className="absolute block max-w-none size-full" height="50" src="/images/imgEllipse5.png" width="50" />



      </div>



      <Frame39 />



    </div>



  );



}



function SubContainer1() {



  return (



    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Sub Container">



      <Frame37 />



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate queam aliqueam lacus. Quis elit sed pharetra facilisis.</p>



      <Frame38 />



    </div>



  );



}



function Frame40() {



  return (



    <div className="h-[17px] relative shrink-0 w-[113px]">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 17">



        <g id="Frame 3189">



          <path d={svgPaths.p15ec1000} fill="var(--fill-0, #8949FF)" id="Star 1" />



          <path d={svgPaths.p36dcfc80} fill="var(--fill-0, #8949FF)" id="Star 2" />



          <path d={svgPaths.p29a8c900} fill="var(--fill-0, #8949FF)" id="Star 3" />



          <path d={svgPaths.p347a0b00} fill="var(--fill-0, #8949FF)" id="Star 4" />



          <path d={svgPaths.p24c8a980} fill="var(--fill-0, #8949FF)" id="Star 5" />



        </g>



      </svg>



    </div>



  );



}



function Frame42() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative">



      <p className="font-['Trueno:Bold',sans-serif] leading-[1.1] relative shrink-0 text-[#8949ff] text-[18px] w-full">Carlos Gómez</p>



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] relative shrink-0 text-[#080813] text-[16px] w-full">Cliente desde 2022</p>



    </div>



  );



}



function Frame41() {



  return (



    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">



      <div className="relative shrink-0 size-[50px]">



        <img alt="" className="absolute block max-w-none size-full" height="50" src="/images/imgEllipse5.png" width="50" />



      </div>



      <Frame42 />



    </div>



  );



}



function SubContainer2() {



  return (



    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Sub Container">



      <Frame40 />



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate queam aliqueam lacus. Quis elit sed pharetra facilisis.</p>



      <Frame41 />



    </div>



  );



}



function Frame43() {



  return (



    <div className="h-[17px] relative shrink-0 w-[113px]">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 17">



        <g id="Frame 3189">



          <path d={svgPaths.p15ec1000} fill="var(--fill-0, #8949FF)" id="Star 1" />



          <path d={svgPaths.p36dcfc80} fill="var(--fill-0, #8949FF)" id="Star 2" />



          <path d={svgPaths.p29a8c900} fill="var(--fill-0, #8949FF)" id="Star 3" />



          <path d={svgPaths.p347a0b00} fill="var(--fill-0, #8949FF)" id="Star 4" />



          <path d={svgPaths.p24c8a980} fill="var(--fill-0, #8949FF)" id="Star 5" />



        </g>



      </svg>



    </div>



  );



}



function Frame45() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative">



      <p className="font-['Trueno:Bold',sans-serif] leading-[1.1] relative shrink-0 text-[#8949ff] text-[18px] w-full">Carlos Gómez</p>



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] relative shrink-0 text-[#080813] text-[16px] w-full">Cliente desde 2022</p>



    </div>



  );



}



function Frame44() {



  return (



    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">



      <div className="relative shrink-0 size-[50px]">



        <img alt="" className="absolute block max-w-none size-full" height="50" src="/images/imgEllipse5.png" width="50" />



      </div>



      <Frame45 />



    </div>



  );



}



function SubContainer3() {



  return (



    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Sub Container">



      <Frame43 />



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate queam aliqueam lacus. Quis elit sed pharetra facilisis.</p>



      <Frame44 />



    </div>



  );



}



function Frame46() {



  return (



    <div className="h-[17px] relative shrink-0 w-[113px]">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 17">



        <g id="Frame 3189">



          <path d={svgPaths.p15ec1000} fill="var(--fill-0, #8949FF)" id="Star 1" />



          <path d={svgPaths.p36dcfc80} fill="var(--fill-0, #8949FF)" id="Star 2" />



          <path d={svgPaths.p29a8c900} fill="var(--fill-0, #8949FF)" id="Star 3" />



          <path d={svgPaths.p347a0b00} fill="var(--fill-0, #8949FF)" id="Star 4" />



          <path d={svgPaths.p24c8a980} fill="var(--fill-0, #8949FF)" id="Star 5" />



        </g>



      </svg>



    </div>



  );



}



function Frame48() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px not-italic relative">



      <p className="font-['Trueno:Bold',sans-serif] leading-[1.1] relative shrink-0 text-[#8949ff] text-[18px] w-full">Carlos Gómez</p>



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] relative shrink-0 text-[#080813] text-[16px] w-full">Cliente desde 2022</p>



    </div>



  );



}



function Frame47() {



  return (



    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">



      <div className="relative shrink-0 size-[50px]">



        <img alt="" className="absolute block max-w-none size-full" height="50" src="/images/imgEllipse5.png" width="50" />



      </div>



      <Frame48 />



    </div>



  );



}



function SubContainer4() {



  return (



    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Sub Container">



      <Frame46 />



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate queam aliqueam lacus. Quis elit sed pharetra facilisis.</p>



      <Frame47 />



    </div>



  );



}



function Frame36() {



  return (



    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">



      <div className="bg-white content-stretch flex flex-col items-center justify-center p-[40px] relative rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-[372px]" data-name="Form">



        <SubContainer />



      </div>



      <div className="bg-white content-stretch flex flex-col items-center justify-center p-[40px] relative rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-[372px]" data-name="Form">



        <SubContainer1 />



      </div>



      <div className="bg-white content-stretch flex flex-col items-center justify-center p-[40px] relative rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-[372px]" data-name="Form">



        <SubContainer2 />



      </div>



      <div className="bg-white content-stretch flex flex-col items-center justify-center p-[40px] relative rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-[372px]" data-name="Form">



        <SubContainer3 />



      </div>



      <div className="bg-white content-stretch flex flex-col items-center justify-center p-[40px] relative rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)] shrink-0 w-[372px]" data-name="Form">



        <SubContainer4 />



      </div>



    </div>



  );



}



function Frame16({ selectedIndex, onDotClick }: { selectedIndex: number, onDotClick: (index: number) => void }) {



  const dots = [0, 1, 2, 3, 4];



  return (



    <div className="content-stretch flex gap-[12px] items-center justify-center relative w-full">



      {dots.map((index) => (



        <button



          key={index}



          onClick={() => onDotClick(index)}



          className={`relative transition-all duration-300 ${



            selectedIndex === index 



              ? 'bg-[#8949ff] w-[33px] h-[9px] rounded-[7px]' 



              : 'bg-[#ecddee] w-[9px] h-[9px] rounded-full'



          }`}



          aria-label={`Go to slide ${index + 1}`}



        />



      ))}



    </div>



  );



}



function Frame61() {



  const [emblaRef, emblaApi] = useEmblaCarousel({ 



    loop: true,



    align: 'start',



    slidesToScroll: 1



  });



  const [selectedIndex, setSelectedIndex] = useState(0);



  const onSelect = useCallback(() => {



    if (!emblaApi) return;



    setSelectedIndex(emblaApi.selectedScrollSnap());



  }, [emblaApi]);



  useEffect(() => {



    if (!emblaApi) return;



    onSelect();



    emblaApi.on('select', onSelect);



    emblaApi.on('reInit', onSelect);



  }, [emblaApi, onSelect]);



  const scrollTo = useCallback((index: number) => {



    if (emblaApi) emblaApi.scrollTo(index);



  }, [emblaApi]);



  return (



    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">



      <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={emblaRef}>



        <div className="flex gap-[24px]">



          <div className="flex-[0_0_372px] min-w-0 bg-white p-[40px] rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">



            <SubContainer />



          </div>



          <div className="flex-[0_0_372px] min-w-0 bg-white p-[40px] rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">



            <SubContainer1 />



          </div>



          <div className="flex-[0_0_372px] min-w-0 bg-white p-[40px] rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">



            <SubContainer2 />



          </div>



          <div className="flex-[0_0_372px] min-w-0 bg-white p-[40px] rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">



            <SubContainer3 />



          </div>



          <div className="flex-[0_0_372px] min-w-0 bg-white p-[40px] rounded-[10px] shadow-[0px_25px_50px_0px_rgba(0,0,0,0.25)]">



            <SubContainer4 />



          </div>



        </div>



      </div>



      <div className="flex items-center justify-center relative shrink-0 w-full">



        <div className="-scale-y-100 flex-none w-full">



          <Frame16 selectedIndex={selectedIndex} onDotClick={scrollTo} />



        </div>



      </div>



    </div>



  );



}



function Frame21({ content }: { content: any }) {



  if (!content?.testimonials) return null;



  const t = content.testimonials;



  return (



    <div className="bg-[#f7f5f9] mb-[-2px] relative shrink-0 w-full" data-name="testimonios">



      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">



        <div className="content-stretch flex flex-col gap-[60px] items-center px-[231px] py-[80px] relative w-full">



          <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[947px]">



            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[40px] text-center w-full">{t.title}</p>



            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[24px] text-center w-full">{t.description}</p>



          </div>



          <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full justify-center">



            {t.items?.map((item: any, idx: number) => (



              <div key={idx} className="bg-white content-stretch flex flex-col gap-[40px] h-[400px] items-start justify-center p-[40px] relative rounded-[20px] shrink-0 w-[420px]">



                <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">



                  <img src={item.image} alt={item.name} className="size-[64px] rounded-full object-cover" />



                  <div className="flex flex-col">



                    <p className="font-bold text-[18px] text-[#080813]">{item.name}</p>



                    <p className="text-[#9d9ba8] text-[14px]">{item.role}</p>



                    <div className="flex gap-1 text-[#fcc63d] mt-1">



                      {Array.from({ length: item.stars || 5 }).map((_, i) => (



                        <span key={i}>★</span>



                      ))}



                    </div>



                  </div>



                </div>



                <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[1.6] text-[#080813] italic">"{item.text}"</p>



              </div>



            ))}



          </div>



        </div>



      </div>



    </div>



  );



}



function TextContainer() {



  return (



    <div className="content-stretch flex flex-col gap-[40px] items-start leading-[1.1] not-italic relative shrink-0 text-[#080813] text-center w-[1279px]" data-name="Text Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] w-full">Aliados estratégicos</p>



      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Trabajamos con entidades financieras y actores del ecosistema inmobiliario para ofrecer opciones reales adaptadas a cada perfil.</p>



    </div>



  );



}



function Frame86({ content }: { content: any }) {



  if (!content?.partners) return null;



  const partners = content.partners.items || [];



  const loopedPartners = partners.length ? [...partners, ...partners] : [];



  return (



    <div className="mb-[-2px] mt-[56px] md:mt-0 relative shrink-0 w-full">



      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">



        <div className="content-stretch mx-auto flex w-full max-w-[1460px] flex-col items-center gap-[24px] px-[20px] py-[40px] md:gap-[32px] md:px-[40px] md:py-[72px] xl:px-[64px] 2xl:px-[80px] relative">



          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full max-w-[760px]">



            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[28px] md:text-[40px] text-center w-full">{content.partners.title}</p>



            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.2] not-italic relative shrink-0 text-[#080813] text-[16px] md:text-[18px] text-center w-full">{content.partners.description}</p>



          </div>



          <div className="relative w-full overflow-hidden">



            <style>{`



              @keyframes partners-marque {



                0% { transform: translateX(0); }



                100% { transform: translateX(-50%); }



              }



            `}</style>



            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[40px] bg-gradient-to-r from-white to-transparent md:w-[72px]" />



            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[40px] bg-gradient-to-l from-white to-transparent md:w-[72px]" />



            <div



              className="flex w-max items-center gap-[14px] md:gap-[20px] xl:gap-[28px]"



              style={{ animation: "partners-marque 28s linear infinite" }}



            >



              {loopedPartners.map((partner: any, idx: number) => (



                <div key={`${partner.name}-${idx}`} className="flex h-[72px] w-[160px] shrink-0 items-center justify-center rounded-[18px] border border-[#ece7f5] bg-white px-[18px] md:h-[84px] md:w-[190px] md:rounded-[22px] md:px-[24px]" data-name="partner-logo">



                  {partner.image ? (



                    <img src={partner.image} alt={partner.name} className="max-h-[28px] w-auto max-w-full object-contain md:max-h-[34px]" />



                  ) : (



                    <p className="font-['Inter:Black',sans-serif] font-black leading-[1.1] not-italic text-[#9d9ba8] text-[12px] sm:text-[14px] md:text-[20px] tracking-[-0.3px] md:tracking-[-0.5px] whitespace-nowrap uppercase text-center">{partner.name}</p>



                  )}



                </div>



              ))}



            </div>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame28({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="content-stretch flex flex-col items-center not-italic relative shrink-0 w-full">



      <p className="font-['Inter:Light',sans-serif] font-light leading-none relative shrink-0 text-[#8949ff] text-[88px] sm:text-[120px] lg:text-[199.847px] text-center whitespace-nowrap">{item.value}</p>



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#828282] text-[16px] sm:text-[20px] md:text-[22px] max-w-[260px] text-center">{item.title}</p>



    </div>



  );



}



function Frame29({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[12px] md:gap-[24px] h-full items-center justify-end leading-[1.1] not-italic relative shrink-0 w-full max-w-[260px]">



      <p className="relative shrink-0 text-[#8949ff] text-[52px] sm:text-[56px] tracking-[1px] whitespace-nowrap text-center">{item.value}</p>



      <p className="relative shrink-0 text-[#9d9ba8] text-[16px] sm:text-[20px] md:text-[22px] text-center">{item.title}</p>



    </div>



  );



}



function Frame30({ item }: { item: any }) {



  if (!item) return null;



  return (



    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[12px] md:gap-[24px] h-full items-center justify-end leading-[1.1] not-italic relative shrink-0 w-full max-w-[260px]">



      <p className="relative shrink-0 text-[#8949ff] text-[52px] sm:text-[56px] tracking-[1px] whitespace-nowrap text-center">{item.value}</p>



      <p className="relative shrink-0 text-[#9d9ba8] text-[16px] sm:text-[20px] md:text-[22px] text-center">{item.title}</p>



    </div>



  );



}



function Frame5({ content, editable }: { content: any; editable?: any }) {



    if (!content?.benefits) return null;



    return (



      <div className="content-stretch flex flex-col gap-[24px] md:gap-[40px] items-center lg:items-start relative shrink-0 w-full max-w-[572px]">



        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[32px] md:text-[40px] text-center lg:text-left w-[min-content]" data-tina-field={fieldFor(editable?.benefits, "title")}>{content.benefits.title}</p>



        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[18px] md:text-[22px] text-center lg:text-left w-[min-content] whitespace-pre-wrap" data-tina-field={fieldFor(editable?.benefits, "description")}>



          {content.benefits.description}



        </p>



        <a href={content.benefits.ctaLink} className="bg-[#8949ff] content-stretch flex h-auto min-h-[52px] items-center justify-center px-[24px] md:px-[40px] py-[16px] relative rounded-full shrink-0 no-underline hover:scale-105 transition-transform w-[90%] sm:w-auto max-w-full" data-tina-field={fieldFor(editable?.benefits, "ctaText")}>



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[13px] sm:text-[14px] md:text-[18px] text-center text-white tracking-[1px] md:tracking-[1.8px] uppercase whitespace-normal break-words max-w-[100%]">{content.benefits.ctaText}</p>



        </a>



      </div>



    );



  }



function Frame20({ content }: { content: any }) {



  return (



    <div className="flex-[1_0_0] min-h-px min-w-px relative">



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col items-center pl-[120px] relative w-full">



          <Frame5 content={content} />



        </div>



      </div>



    </div>



  );



}



function Frame87({ content }: { content?: any }) {



  return (



    <div className="relative shrink-0 w-full">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[80px] items-center justify-center relative w-full">



        <Frame20 content={content} />



        <div className="h-[407px] relative rounded-br-[60px] rounded-tr-[60px] shrink-0 w-[791px]" data-name="Diseño sin título (57) 1">



          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-br-[60px] rounded-tr-[60px] size-full" src="/images/imgDisenoSinTitulo571.png" />



        </div>



      </div>



    </div>



  );



}



function Capa() {



  return (



    <div className="absolute inset-[0.1%_0.1%_0.1%_0.11%]" data-name="Capa 1">



      <div className="absolute inset-[-0.13%_-0.12%_-0.13%_-0.13%]">



        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 410.217 376.218">



          <g id="Capa 1">



            <path d={svgPaths.p4ef5400} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />



          </g>



        </svg>



      </div>



    </div>



  );



}



function Recurso2EfitecaELinea() {



  return (



    <div className="absolute h-[376px] left-[1097px] top-[137px] w-[410px]" data-name="Recurso 2Efiteca e linea 2">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">



        <Capa />



      </div>



    </div>



  );



}



function Frame84() {



  return (



    <div className="bg-[#fcc63d] content-stretch flex flex-col gap-[10px] items-center justify-center relative rounded-[60px] shrink-0 w-full">



      <Frame87 />



      <div className="absolute h-[491px] left-[700px] top-[-84px] w-[397px]" data-name="Diseño sin título (58) 1">



        <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">



          <img alt="" className="absolute h-[128.5%] left-[-28.56%] max-w-none top-0 w-[238.36%]" src="/images/imgDisenoSinTitulo581.png" />



        </div>



      </div>



      <div className="hidden xl:block"><Recurso2EfitecaELinea /></div>



    </div>



  );



}



function Frame85() {



  return (



    <div className="bg-[#f7f5f9] mb-[-2px] relative shrink-0 w-full">



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col items-center px-[230px] py-[80px] relative w-full">



          <Frame84 />



        </div>



      </div>



    </div>



  );



}



function Container23() {



  return <div className="absolute blur-[120px] h-[1291.797px] left-[266px] pointer-events-none rounded-[33554400px] top-[464px] w-[1121.594px] z-0" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1121.6 1291.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -85.538 -85.538 0 560.8 645.9)\\'><stop stop-color=\\'rgba(137,73,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(108,66,252,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(79,59,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />;



}



function Container24() {



  return <div className="absolute inset-0 bg-[rgba(255,255,255,0.72)] pointer-events-none z-0" data-name="Container" />;



}



function CheckCircle4() {



  return (



    <div className="relative shrink-0 size-[18px]" data-name="CheckCircle">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



        <g clipPath="url(#clip0_1_1121)" id="CheckCircle">



          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



        </g>



        <defs>



          <clipPath id="clip0_1_1121">



            <rect fill="white" height="18" width="18" />



          </clipPath>



        </defs>



      </svg>



    </div>



  );



}



function Container28() {



  return (



    <div className="bg-[rgba(137,73,255,0.1)] relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



        <CheckCircle4 />



      </div>



    </div>



  );



}



function Span6() {



  return (



    <div className="h-[16px] relative shrink-0 w-[236.172px]" data-name="span">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">



        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#314158] text-[16px] top-[-1px] whitespace-nowrap">Claridad total en costos reales</p>



      </div>



    </div>



  );



}



function Container27() {



  return (



    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">



        <Container28 />



        <Span6 />



      </div>



    </div>



  );



}



function CheckCircle5() {



  return (



    <div className="relative shrink-0 size-[18px]" data-name="CheckCircle">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



        <g clipPath="url(#clip0_1_1121)" id="CheckCircle">



          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



        </g>



        <defs>



          <clipPath id="clip0_1_1121">



            <rect fill="white" height="18" width="18" />



          </clipPath>



        </defs>



      </svg>



    </div>



  );



}



function Container30() {



  return (



    <div className="bg-[rgba(137,73,255,0.1)] relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



        <CheckCircle5 />



      </div>



    </div>



  );



}



function Span7() {



  return (



    <div className="h-[16px] relative shrink-0 w-[236.344px]" data-name="span">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">



        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#314158] text-[16px] top-[-1px] whitespace-nowrap">Sin letra pequeña ni sorpresas</p>



      </div>



    </div>



  );



}



function Container29() {



  return (



    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">



        <Container30 />



        <Span7 />



      </div>



    </div>



  );



}



function CheckCircle6() {



  return (



    <div className="relative shrink-0 size-[18px]" data-name="CheckCircle">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



        <g clipPath="url(#clip0_1_1121)" id="CheckCircle">



          <path d={svgPaths.pa641000} id="Vector" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



          <path d="M6.75 8.25L9 10.5L16.5 3" id="Vector_2" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" />



        </g>



        <defs>



          <clipPath id="clip0_1_1121">



            <rect fill="white" height="18" width="18" />



          </clipPath>



        </defs>



      </svg>



    </div>



  );



}



function Container32() {



  return (



    <div className="bg-[rgba(137,73,255,0.1)] relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



        <CheckCircle6 />



      </div>



    </div>



  );



}



function Span8() {



  return (



    <div className="h-[16px] relative shrink-0 w-[272.266px]" data-name="span">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">



        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[16px] left-0 not-italic text-[#314158] text-[16px] top-[-1px] whitespace-nowrap">Comparativa imparcial de mercado</p>



      </div>



    </div>



  );



}



function Container31() {



  return (



    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">



        <Container32 />



        <Span8 />



      </div>



    </div>



  );



}



function Container26() {



  return (



    <div className="content-stretch flex flex-col gap-[16px] h-[104px] items-start relative shrink-0 w-full" data-name="Container">



      <Container27 />



      <Container29 />



      <Container31 />



    </div>



  );



}



function TextContainer2() {



  return (



    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[412px]" data-name="Text Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[40px] w-full">Contáctanos</p>



      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[15px] w-full">Trabajamos con entidades financieras y actores del ecosistema inmobiliario para ofrecer opciones reales adaptadas a cada perfil.</p>



      <Container26 />



    </div>



  );



}



function InputField() {



  return (



    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input Field">



      <div aria-hidden="true" className="absolute border border-[#9d9ba8] border-solid inset-0 pointer-events-none rounded-[6px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">



          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[12px]">Escribe tu nombre</p>



        </div>



      </div>



    </div>



  );



}



function SubContainer5() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px relative" data-name="Sub Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">Nombre</p>



      <InputField />



    </div>



  );



}



function InputField1() {



  return (



    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input Field">



      <div aria-hidden="true" className="absolute border border-[#9d9ba8] border-solid inset-0 pointer-events-none rounded-[6px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">



          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[12px]">Escribe tu apellido</p>



        </div>



      </div>



    </div>



  );



}



function SubContainer6() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px relative" data-name="Sub Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">Apellido</p>



      <InputField1 />



    </div>



  );



}



function Container33() {



  return (



    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full" data-name="Container">



      <SubContainer5 />



      <SubContainer6 />



    </div>



  );



}



function InputField2() {



  return (



    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input Field">



      <div aria-hidden="true" className="absolute border border-[#9d9ba8] border-solid inset-0 pointer-events-none rounded-[6px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">



          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[12px]">Ingresa tu correo</p>



        </div>



      </div>



    </div>



  );



}



function SubContainer7() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px relative" data-name="Sub Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">Email</p>



      <InputField2 />



    </div>



  );



}



function InputField3() {



  return (



    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input Field">



      <div aria-hidden="true" className="absolute border border-[#9d9ba8] border-solid inset-0 pointer-events-none rounded-[6px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex items-center px-[20px] py-[12px] relative w-full">



          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[12px]">Enter Phone Number</p>



        </div>



      </div>



    </div>



  );



}



function SubContainer8() {



  return (



    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[14px] items-start min-h-px min-w-px relative" data-name="Sub Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">Teléfono</p>



      <InputField3 />



    </div>



  );



}



function Container34() {



  return (



    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full" data-name="Container">



      <SubContainer7 />



      <SubContainer8 />



    </div>



  );



}



function InputField4() {



  return (



    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input Field">



      <div aria-hidden="true" className="absolute border border-[#9d9ba8] border-solid inset-0 pointer-events-none rounded-[6px]" />



      <div className="flex flex-row items-center size-full">



        <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[12px] relative w-full">



          <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-h-px min-w-px not-italic relative text-[12px] text-white">Cuéntanos tu cargo</p>



          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="chevron-down">



            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">



              <div className="absolute inset-[-16.67%_-8.33%]">



                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">



                  <path d="M1 1L7 7L13 1" id="Icon" stroke="var(--stroke-0, #8949FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



                </svg>



              </div>



            </div>



          </div>



        </div>



      </div>



    </div>



  );



}



function SubContainer9() {



  return (



    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">Cargo</p>



      <InputField4 />



    </div>



  );



}



function InputField5() {



  return (



    <div className="bg-white h-[68px] relative rounded-[6px] shrink-0 w-full" data-name="Input Field">



      <div aria-hidden="true" className="absolute border border-[#9d9ba8] border-solid inset-0 pointer-events-none rounded-[6px]" />



      <div className="content-stretch flex items-start px-[20px] py-[16px] relative size-full">



        <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[12px]">Escribe tu mensaje</p>



      </div>



    </div>



  );



}



function Container35() {



  return (



    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">Mensaje</p>



      <InputField5 />



    </div>



  );



}



function FormElements() {



  return (



    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form Elements">



      <Container33 />



      <Container34 />



      <SubContainer9 />



      <Container35 />



    </div>



  );



}



function CheckBox() {



  return (



    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Check Box">



      <div className="bg-[#ecddee] relative rounded-[4px] shrink-0 size-[24px]" data-name="Shape">



        <div aria-hidden="true" className="absolute border border-[#9d9ba8] border-solid inset-0 pointer-events-none rounded-[4px]" />



      </div>



      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-h-px min-w-px not-italic relative text-[#d9d9d9] text-[12px]">Acepto los términos y condiciones</p>



    </div>



  );



}



function Container36() {



  return (



    <div className="content-stretch flex gap-[50px] items-center justify-center relative shrink-0 w-full" data-name="Container">



      <CheckBox />



      <div className={`${MAIN_BUTTON_CLASS} shrink-0`}>



        <p className={MAIN_BUTTON_TEXT_CLASS}>ENVIAR</p>



      </div>



    </div>



  );



}



function Form() {



  return (



    <div className="bg-[#8949ff] content-stretch flex flex-col gap-[24px] items-center justify-center p-[40px] relative rounded-[10px] shrink-0 w-[798px]" data-name="Form">



      <div aria-hidden="true" className="absolute border border-[#8949ff] border-solid inset-0 pointer-events-none rounded-[10px]" />



      <FormElements />



      <Container36 />



    </div>



  );



}



function Container25() {



  return (



    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1279px]" data-name="Container">



      <TextContainer2 />



      <Form />



    </div>



  );



}



function Frame83({ content }: { content: any }) {



  if (!content?.contact) return null;



  const highlights = content.contact.highlights || [];



  const form = content.contact.form || {};



  return (



      <div id="contacto" className="bg-white content-stretch isolate flex flex-col gap-[10px] items-center mb-[-2px] overflow-hidden py-[56px] md:py-[80px] px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] relative shrink-0 w-full">



        <Container23 />



        <Container24 />



        <div className="content-stretch grid grid-cols-1 xl:grid-cols-[minmax(280px,412px)_minmax(0,1fr)] gap-[32px] xl:gap-[56px] items-start relative shrink-0 w-full max-w-[1460px] z-10" data-name="Container">



        <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full xl:max-w-[412px]" data-name="Text Container">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[32px] md:text-[40px] w-full">{content.contact.title}</p>



          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[15px] w-full">{content.contact.description}</p>



          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">



            {highlights.map((item: string, index: number) => (



              <div key={index} className="h-[24px] relative shrink-0 w-full" data-name="Container">



                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">



                  <div className="bg-[rgba(137,73,255,0.1)] relative rounded-[33554400px] shrink-0 size-[24px]" data-name="Container">



                    <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">



                      <CheckCircle4 />



                    </div>



                  </div>



                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative text-[#314158] text-[15px] md:text-[16px]">{item}</p>



                </div>



              </div>



            ))}



          </div>



        </div>



        <form className="bg-[#8949ff] content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] md:p-[40px] relative rounded-[10px] min-w-0 w-full" data-name="Form">



          <div aria-hidden="true" className="absolute border border-[#8949ff] border-solid inset-0 pointer-events-none rounded-[10px]" />



          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form Elements">



            <div className="content-stretch flex flex-col xl:flex-row gap-[20px] xl:gap-[30px] items-start relative shrink-0 w-full" data-name="Container">



              <div className="content-stretch flex w-full min-w-0 xl:flex-[1_0_0] flex-col gap-[14px] items-start min-h-px relative" data-name="Sub Container">



                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">{form.name_label}</p>



                <FormInput name="firstName" placeholder={`Escribe tu ${String(form.name_label || "").toLowerCase()}`} />



              </div>



              <div className="content-stretch flex w-full min-w-0 xl:flex-[1_0_0] flex-col gap-[14px] items-start min-h-px relative" data-name="Sub Container">



                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">{form.lastname_label}</p>



                <FormInput name="lastName" placeholder={`Escribe tu ${String(form.lastname_label || "").toLowerCase()}`} />



              </div>



            </div>



            <div className="content-stretch flex flex-col xl:flex-row gap-[20px] xl:gap-[30px] items-start relative shrink-0 w-full" data-name="Container">



              <div className="content-stretch flex w-full min-w-0 xl:flex-[1_0_0] flex-col gap-[14px] items-start min-h-px relative" data-name="Sub Container">



                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">{form.email_label}</p>



                <FormInput name="email" type="email" placeholder={`Ingresa tu ${String(form.email_label || "").toLowerCase()}`} />



              </div>



              <div className="content-stretch flex w-full min-w-0 xl:flex-[1_0_0] flex-col gap-[14px] items-start min-h-px relative" data-name="Sub Container">



                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">{form.phone_label}</p>



                <FormInput name="phone" type="tel" placeholder={`Ingresa tu ${String(form.phone_label || "").toLowerCase()}`} />



              </div>



            </div>



            <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Sub Container">



              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">{form.role_label || "Cargo"}</p>



              <FormSelect name="role" placeholder={form.role_placeholder || "Cuéntanos tu cargo"} />



            </div>



            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">



              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[16px] text-white w-full">{form.message_label}</p>



              <FormTextarea name="message" placeholder={`Escribe tu ${String(form.message_label || "").toLowerCase()}`} />



            </div>



          </div>



          <div className="content-stretch flex flex-col md:flex-row gap-[20px] lg:gap-[50px] items-start md:items-center justify-center relative shrink-0 w-full" data-name="Container">



            <label className="content-stretch flex w-full lg:flex-[1_0_0] gap-[10px] items-start md:items-center min-h-px min-w-px relative cursor-pointer" data-name="Check Box">



              <input name="termás" type="checkbox" className="size-[18px] accent-[#fcc63d]" />



              <span className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-h-px min-w-px not-italic relative text-[#d9d9d9] text-[12px]">{form.termás_label}</span>



            </label>



            <button type="submit" className={`${MAIN_BUTTON_CLASS} shrink-0 w-full lg:w-auto`}>



              <p className={MAIN_BUTTON_TEXT_CLASS}>{form.submit_label}</p>



            </button>



          </div>



        </form>



      </div>



    </div>



  );



}



function Container37() {



  return (



    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[40px] text-center text-white w-full">



        <p className="leading-[1.1]">Blog hipotecario</p>



      </div>



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di1() {



  return (



    <div className="h-[320px] relative rounded-[24px] w-full" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Blog 1" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/blog1.png" />



    </div>



  );



}



function Container39() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di2() {



  return (



    <div className="h-[320px] relative rounded-[24px] w-full" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Blog 2" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/blog2.png" />



    </div>



  );



}



function Container40() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di3() {



  return (



    <div className="h-[320px] relative rounded-[24px] w-full" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Blog 3" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/blog3.png" />



    </div>



  );



}



function Container41() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Container38() {



  return (



    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">



      <div className="content-stretch flex flex-col gap-[20px] h-[508px] items-start relative shrink-0 w-[458.667px]" data-name="Blog card">



        <div className="flex items-center justify-center relative shrink-0 w-full">



          <div className="flex-none w-full">



            <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di1 />



          </div>



        </div>



        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[28px] text-white w-[min-content]">



          <p className="leading-[1.1]">Lorem ipsum lorem</p>



        </div>



        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#b7b7b7] text-[16px] w-[min-content]">



          <p className="leading-[1.1]">Lorem ipsum dolor sit amet consectetur. Massa imperdiet in fermentum tellus eget egestas vitae.</p>



        </div>



        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



            <p className="leading-[1.1] whitespace-pre">{`Ver  noticia`}</p>



          </div>



          <Container39 />



        </div>



      </div>



      <div className="content-stretch flex flex-col gap-[20px] h-[508px] items-start relative shrink-0 w-[458.667px]" data-name="Blog card">



        <div className="flex items-center justify-center relative shrink-0 w-full">



          <div className="flex-none w-full">



            <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di2 />



          </div>



        </div>



        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[28px] text-white w-[min-content]">



          <p className="leading-[1.1]">Lorem ipsum lorem</p>



        </div>



        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#b7b7b7] text-[16px] w-[min-content]">



          <p className="leading-[1.1]">Lorem ipsum dolor sit amet consectetur. Massa imperdiet in fermentum tellus eget egestas vitae.</p>



        </div>



        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



            <p className="leading-[1.1] whitespace-pre">{`Ver  noticia`}</p>



          </div>



          <Container40 />



        </div>



      </div>



      <div className="content-stretch flex flex-col gap-[20px] h-[508px] items-start relative shrink-0 w-[458.667px]" data-name="Blog card">



        <div className="flex items-center justify-center relative shrink-0 w-full">



          <div className="flex-none w-full">



            <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di3 />



          </div>



        </div>



        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[28px] text-white w-[min-content]">



          <p className="leading-[1.1]">Lorem ipsum lorem</p>



        </div>



        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#b7b7b7] text-[16px] w-[min-content]">



          <p className="leading-[1.1]">Lorem ipsum dolor sit amet consectetur. Massa imperdiet in fermentum tellus eget egestas vitae.</p>



        </div>



        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



            <p className="leading-[1.1] whitespace-pre">{`Ver  noticia`}</p>



          </div>



          <Container41 />



        </div>



      </div>



    </div>



  );



}



function Section() {



  return (



    <div className="relative shrink-0 w-full" data-name="Section">



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[40px] items-center px-[240px] relative w-full">



          <Container37 />



          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">



            <p className="leading-[1.1]">Actualízate con nuestro contenido educativo para entender mejor el proceso hipotecario y tomar decisiones con mayor seguridad.</p>



          </div>



          <Container38 />



          <div className="bg-[#fcc63d] content-stretch flex items-center justify-center px-[40px] py-[19px] relative rounded-[33554400px] shrink-0">



            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#0f172b] text-[18px] text-center tracking-[1.8px] uppercase whitespace-nowrap">CALCULAR MI HIPOTECA AHORA</p>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame22({ content, latestNews }: { content: any; latestNews?: Array<{ title: string; description: string; href: string }> }) {



  if (!content?.blog) return null;



  const fallábackItemás = content.blog.items || [];



  const displayItemás = latestNews?.length



    ? latestNews.slice(0, 3).map((entry, index) => ({



        title: entry.title,



        description: entry.description,



        image: fallábackItemás[index]?.image || fallábackItemás[0]?.image,



        cta: {



          label: fallábackItemás[index]?.cta?.label || "Ver noticia",



          href: entry.href



        }



      }))



    : fallábackItemás;



  return (



      <div className="bg-[#080813] content-stretch flex flex-col items-center mb-[-2px] py-[56px] md:py-[80px] relative shrink-0 w-full">



        <div className="relative shrink-0 w-full" data-name="Section">



          <div className="flex flex-col items-center size-full">



            <div className="content-stretch mx-auto flex max-w-[1460px] flex-col gap-[32px] md:gap-[40px] items-center px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] relative w-full">



              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">



                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[32px] md:text-[40px] text-center text-white w-full">



                  <p className="leading-[1.1]">{content.blog.title}</p>



                </div>



              </div>



            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] md:text-[18px] text-center text-white w-full max-w-[840px]">



              <p className="leading-[1.1]">{content.blog.subtitle}</p>



            </div>



            <div className="content-stretch grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] md:gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">



                {displayItemás.map((item: any, index: number) => (



                  <a



                    key={index}



                    href={item.cta?.href || "#"}



                    className="group content-stretch flex min-h-[440px] w-full flex-col gap-[20px] items-start relative shrink-0 rounded-[24px] no-underline transition-transform duration-300 hover:-translate-y-[4px]"



                    data-name="Blog card"



                  >



                    <div className="h-[240px] md:h-[280px] xl:h-[320px] relative rounded-[24px] w-full overflow-hidden">



                      <img alt={item.title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full transition-transform duration-500 ease-out group-hover:scale-[1.05]" src={item.image} />



                  </div>



                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] md:text-[28px] text-white w-[min-content]">



                    <p className="leading-[1.1]">{item.title}</p>



                  </div>



                  <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#b7b7b7] text-[16px] w-[min-content]">



                    <p className="leading-[1.1]">{item.description}</p>



                  </div>



                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap transition-colors duration-300 group-hover:text-[#c993ff]">



                      <p className="leading-[1.1] whitespace-pre">{item.cta?.label}</p>



                    </div>



                    <div className="transition-transform duration-300 group-hover:translate-x-[4px]">



                      <Container39 />



                    </div>



                  </div>



                </a>



              ))}



            </div>



            <a href={content.blog.cta?.href || "#"} className={`${MAIN_BUTTON_CLASS} shrink-0 w-full sm:w-auto`}>



              <p className={MAIN_BUTTON_TEXT_CLASS}>{content.blog.cta?.label}</p>



            </a>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame64() {



  return (



    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[495px]">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-white w-[min-content]">



        <p className="leading-[1.1]">Suscríbete a nuestro newsletter y descarga nuestra guía gratuita</p>



      </div>



      <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">



        <p className="leading-[20px]">Recibe información clara sobre hipotecas, decisiones financieras y oportunidades del mercado.</p>



      </div>



      <div className="bg-[#f4f5f9] h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Full name">



        <div className="overflow-clip relative rounded-[inherit] size-full">



          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.1] left-[15px] not-italic text-[#9d9ba8] text-[18px] top-[calc(50%-10px)] whitespace-nowrap">Email</p>



        </div>



        <div aria-hidden="true" className="absolute border border-[#dbdcde] border-solid inset-0 pointer-events-none rounded-[8px]" />



      </div>



      <div className={`${MAIN_BUTTON_CLASS} shrink-0`}>



        <p className={MAIN_BUTTON_TEXT_CLASS}>suscribirme y descargar</p>



      </div>



    </div>



  );



}



function Recurso1EfitecaCasa() {



  return (



    <div className="h-[517px] relative shrink-0 w-[561px]" data-name="Recurso 1Efiteca casa 2">



      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src="/images/imgRecurso1EfitecaCasa2.png" />



    </div>



  );



}



function Frame65() {



  return (



    <div className="content-stretch flex gap-[80px] items-center justify-center relative shrink-0 w-[1170px]">



      <Frame64 />



      <Recurso1EfitecaCasa />



    </div>



  );



}



function Frame1({ content }: { content: any }) {



  if (!content?.newsletter) return null;



  return (



    <div className="content-stretch flex flex-col gap-[10px] items-center mb-[-2px] overflow-clip py-[80px] px-[24px] relative shrink-0 w-full bg-[url('/images/frame7.png')] bg-cover bg-center bg-no-repeat">



      <div className="absolute flex h-[865.826px] items-center justify-center left-[-39px] top-[80px] w-[873.938px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>



        <div className="flex-none rotate-[-42.93deg]">



          <div className="h-[536px] relative w-[695px]">



            <div className="absolute inset-[-93.28%_-71.94%]">



              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1695 1536">



                <g filter="url(#filter0_f_1_1072)" id="Ellipse 3">



                  <ellipse cx="847.5" cy="768" fill="var(--fill-0, #4F3BF9)" rx="347.5" ry="268" />



                </g>



                <defs>



                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1536" id="filter0_f_1_1072" width="1695" x="0" y="0">



                    <feFlood floodOpacity="0" result="BackgroundImageFix" />



                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />



                    <feGaussianBlur result="effect1_foregroundBlur_1_1072" stdDeviation="250" />



                  </filter>



                </defs>



              </svg>



            </div>



          </div>



        </div>



      </div>



      <div className="absolute flex h-[768.768px] items-center justify-center left-[554px] top-[390px] w-[775.961px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>



        <div className="flex-none rotate-[-42.93deg]">



          <div className="h-[476px] relative w-[617px]">



            <div className="absolute inset-[-105.04%_-81.04%]">



              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1617 1476">



                <g filter="url(#filter0_f_1_1061)" id="Ellipse 2">



                  <ellipse cx="808.5" cy="738" fill="var(--fill-0, #4E9FC4)" rx="308.5" ry="238" />



                </g>



                <defs>



                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1476" id="filter0_f_1_1061" width="1617" x="0" y="0">



                    <feFlood floodOpacity="0" result="BackgroundImageFix" />



                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />



                    <feGaussianBlur result="effect1_foregroundBlur_1_1061" stdDeviation="250" />



                  </filter>



                </defs>



              </svg>



            </div>



          </div>



        </div>



      </div>



      <div className="content-stretch flex gap-[80px] items-center justify-center relative shrink-0 w-[1170px]">



        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[495px]">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[40px] text-white w-[min-content]">



            <p className="leading-[1.1]">{content.newsletter.title}</p>



          </div>



          <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">



            <p className="leading-[20px]">{content.newsletter.description}</p>



          </div>



          <div className="bg-[#f4f5f9] h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Full name">



            <div className="overflow-clip relative rounded-[inherit] size-full">



              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.1] left-[15px] not-italic text-[#9d9ba8] text-[18px] top-[calc(50%-10px)] whitespace-nowrap">{content.newsletter.emailPlaceholder || "Email"}</p>



            </div>



            <div aria-hidden="true" className="absolute border border-[#dbdcde] border-solid inset-0 pointer-events-none rounded-[8px]" />



          </div>



          <a href={content.newsletter.button?.href || "#"} className="bg-[#fcc63d] content-stretch flex items-center justify-center px-[40px] py-[19px] relative rounded-[33554400px] shrink-0 no-underline">



            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#0f172b] text-[18px] text-center tracking-[1.8px] uppercase whitespace-nowrap">{content.newsletter.button?.label}</p>



          </a>



        </div>



        <Recurso1EfitecaCasa />



      </div>



    </div>



  );



}



function Frame79() {



  return (



    <div className="bg-[#8949ff] content-stretch flex items-center justify-center px-[16px] py-[2px] relative rounded-[20px] shrink-0">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">



        <p className="leading-[1.1]">Barcelona</p>



      </div>



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di4() {



  return (



    <div className="h-[320px] relative rounded-[24px] w-full" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Map" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/barcelona.png" />



    </div>



  );



}



function Container42() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame78() {



  return (



    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[22px] w-[min-content]">



        <p className="leading-[1.1]">{`C/ d'Aragó, 383, Pl. 5ª, 08013 `}</p>



      </div>



      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



          <p className="leading-[1.1] whitespace-pre">{`Ver  en mapa`}</p>



        </div>



        <Container42 />



      </div>



    </div>



  );



}



function Frame80() {



  return (



    <div className="bg-[#8949ff] content-stretch flex items-center justify-center px-[16px] py-[2px] relative rounded-[20px] shrink-0">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">



        <p className="leading-[1.1]">Madrid</p>



      </div>



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di5() {



  return (



    <div className="h-[320px] relative rounded-[24px] w-full" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Map" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/madrid.png" />



    </div>



  );



}



function Container43() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame81() {



  return (



    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[22px] w-[min-content]">



        <p className="leading-[1.1]">Paseo de la Castellana, 193, 28046</p>



      </div>



      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



          <p className="leading-[1.1] whitespace-pre">{`Ver  en mapa`}</p>



        </div>



        <Container43 />



      </div>



    </div>



  );



}



function Frame82() {



  return (



    <div className="bg-[#8949ff] content-stretch flex items-center justify-center px-[16px] py-[2px] relative rounded-[20px] shrink-0">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">



        <p className="leading-[1.1]">Valencia</p>



      </div>



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di6() {



  return (



    <div className="h-[320px] relative rounded-[24px] w-full" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Map" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/valencia.png" />



    </div>



  );



}



function Container44() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame123() {



  return (



    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[22px] w-[min-content]">



        <p className="leading-[1.1]">Av. Corts Valencianes, 58, 46015</p>



      </div>



      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



          <p className="leading-[1.1] whitespace-pre">{`Ver  en mapa`}</p>



        </div>



        <Container44 />



      </div>



    </div>



  );



}



function Frame124() {



  return (



    <div className="bg-[#8949ff] content-stretch flex items-center justify-center px-[16px] py-[2px] relative rounded-[20px] shrink-0">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">



        <p className="leading-[1.1]">Marbella</p>



      </div>



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di7() {



  return (



    <div className="h-[320px] relative rounded-[24px] w-full" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Map" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/marbella.png" />



    </div>



  );



}



function Container45() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame125() {



  return (



    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">



      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[22px] w-[min-content]">



        <p className="leading-[1.1]">Av. Ricardo Soriano, 4, Pl. 6ª D, 29601</p>



      </div>



      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



          <p className="leading-[1.1] whitespace-pre">{`Ver  en mapa`}</p>



        </div>



        <Container45 />



      </div>



    </div>



  );



}



function Frame77() {



  return (



    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1440px]">



      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[330px]" data-name="Ubicaciones card">



        <Frame79 />



        <div className="flex items-center justify-center relative shrink-0 w-full">



          <div className="flex-none w-full">



            <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di4 />



          </div>



        </div>



        <Frame78 />



      </div>



      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[330px]" data-name="Ubicaciones card">



        <Frame80 />



        <div className="flex items-center justify-center relative shrink-0 w-full">



          <div className="flex-none w-full">



            <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di5 />



          </div>



        </div>



        <Frame81 />



      </div>



      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[330px]" data-name="Ubicaciones card">



        <Frame82 />



        <div className="flex items-center justify-center relative shrink-0 w-full">



          <div className="flex-none w-full">



            <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di6 />



          </div>



        </div>



        <Frame123 />



      </div>



      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[330px]" data-name="Ubicaciones card">



        <Frame124 />



        <div className="flex items-center justify-center relative shrink-0 w-full">



          <div className="flex-none w-full">



            <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di7 />



          </div>



        </div>



        <Frame125 />



      </div>



    </div>



  );



}



function Frame51({ content }: { content: any }) {



  if (!content?.locations) return null;



  return (



    <div className="bg-white mb-[-2px] relative shrink-0 w-full">



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[32px] md:gap-[40px] items-center px-[20px] md:px-[48px] xl:px-[230px] py-[56px] md:py-[80px] relative w-full">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[32px] md:text-[40px] text-center w-[min-content]">



            <p className="leading-[1.1]">{content.locations.title}</p>



          </div>



          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#080813] text-[16px] md:text-[18px] text-center w-full max-w-[840px]">



            <p className="leading-[1.1]">{content.locations.subtitle}</p>



          </div>



          <div className="content-stretch grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[24px] items-start justify-between relative shrink-0 w-full max-w-[1440px]">



            {(content.locations.items || []).slice(0, 4).map((item: any, index: number) => (



              <div key={index} className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Ubicaciones card">



                <div className="bg-[#8949ff] content-stretch flex items-center justify-center px-[16px] py-[2px] relative rounded-[20px] shrink-0">



                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">



                    <p className="leading-[1.1]">{item.city}</p>



                  </div>



                </div>



                <div className="h-[320px] relative rounded-[24px] w-full">



                  <img alt={item.city} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={item.image} />



                </div>



                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">



                  <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[22px] w-[min-content]">



                    <p className="leading-[1.1]">{item.address}</p>



                  </div>



                  <a href={item.cta?.href || "#"} className="content-stretch flex gap-[8px] items-center relative shrink-0 no-underline">



                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



                      <p className="leading-[1.1] whitespace-pre">{item.cta?.label}</p>



                    </div>



                    <Container42 />



                  </a>



                </div>



              </div>



            ))}



          </div>



        </div>



      </div>



    </div>



  );



}



function TextContainer3() {



  return (



    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[40px] text-center w-full">Preguntas frecuentes</p>



    </div>



  );



}



function Frame76() {



  return (



    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">



      <TextContainer3 />



    </div>



  );



}



function Frame23() {



  return (



    <div className="bg-[#fcc63d] content-stretch flex items-center p-[13px] relative rounded-[25px] shrink-0 size-[50px]">



      <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[25px]" />



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">



        <div className="absolute inset-[20.83%]" data-name="Icon">



          <div className="absolute inset-[-7.14%]">



            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">



              <path d="M8 1V15M1 8H15" id="Icon" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



            </svg>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame53() {



  return (



    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">



      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-h-px min-w-px not-italic relative text-[18px] text-left text-white">{`Lorem ipsum dolor sit amet consectetur. `}</p>



      <Frame23 />



    </div>



  );



}



function Frame24() {



  return (



    <div className="bg-[#fcc63d] content-stretch flex items-center p-[13px] relative rounded-[25px] shrink-0 size-[50px]">



      <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[25px]" />



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">



        <div className="absolute inset-[20.83%]" data-name="Icon">



          <div className="absolute inset-[-7.14%]">



            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">



              <path d="M8 1V15M1 8H15" id="Icon" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



            </svg>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame54() {



  return (



    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">



      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-h-px min-w-px not-italic relative text-[18px] text-left text-white">{`Lorem ipsum dolor sit amet consectetur. `}</p>



      <Frame24 />



    </div>



  );



}



function Frame25() {



  return (



    <div className="bg-[#fcc63d] content-stretch flex items-center p-[13px] relative rounded-[25px] shrink-0 size-[50px]">



      <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[25px]" />



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">



        <div className="absolute inset-[20.83%]" data-name="Icon">



          <div className="absolute inset-[-7.14%]">



            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">



              <path d="M8 1V15M1 8H15" id="Icon" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



            </svg>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame55() {



  return (



    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">



      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-h-px min-w-px not-italic relative text-[18px] text-left text-white">{`Lorem ipsum dolor sit amet consectetur. `}</p>



      <Frame25 />



    </div>



  );



}



function Frame26() {



  return (



    <div className="bg-[#fcc63d] content-stretch flex items-center p-[13px] relative rounded-[25px] shrink-0 size-[50px]">



      <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[25px]" />



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">



        <div className="absolute inset-[20.83%]" data-name="Icon">



          <div className="absolute inset-[-7.14%]">



            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">



              <path d="M8 1V15M1 8H15" id="Icon" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



            </svg>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame56() {



  return (



    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">



      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-h-px min-w-px not-italic relative text-[18px] text-left text-white">{`Lorem ipsum dolor sit amet consectetur. `}</p>



      <Frame26 />



    </div>



  );



}



function Frame27() {



  return (



    <div className="bg-[#fcc63d] content-stretch flex items-center p-[13px] relative rounded-[25px] shrink-0 size-[50px]">



      <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-0 pointer-events-none rounded-[25px]" />



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="plus">



        <div className="absolute inset-[20.83%]" data-name="Icon">



          <div className="absolute inset-[-7.14%]">



            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">



              <path d="M8 1V15M1 8H15" id="Icon" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



            </svg>



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame59() {



  return (



    <div className="content-stretch flex gap-[40px] items-center relative shrink-0 w-full">



      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-h-px min-w-px not-italic relative text-[18px] text-left text-white">{`Lorem ipsum dolor sit amet consectetur. `}</p>



      <Frame27 />



    </div>



  );



}



function Frame75() {



  const faqItemás = [



    { id: 'item-1', frame: <Frame53 />, content: "Analizamos tu historial financiero para entender queé tipo de hipoteca es la más viable para tu caso específico." },



    { id: 'item-2', frame: <Frame54 />, content: "Depende de la entidad, pero trabajamos para agilizar los procesos y obtener respuestas en tiempos récord." },



    { id: 'item-3', frame: <Frame55 />, content: "La estabilidad laboral y unos ingresos recurrentes son fundamentales para garantizar la aprobación del banco." },



    { id: 'item-4', frame: <Frame56 />, content: "Evaluamos las condiciones actuales de tu hipoteca y las comparamos con las mejores ofertas del mercado para ahorrarte dinero." },



    { id: 'item-5', frame: <Frame59 />, content: "Te acompañamos paso a paso, resolviendo tus dudas y encargándonos de la comunicación con el banco hasta la firma en notaría." },



  ];



  return (



    <Accordion.Root type="single" collapsible className="w-[787px] flex flex-col gap-[16px] items-start justify-center relative shrink-0">



      {faqItemás.map((item) => (



        <Accordion.Item key={item.id} value={item.id} className="w-full">



          <Accordion.Trigger className="w-full text-left focus:outline-none">



            <div className="bg-[#8949ff] content-stretch flex flex-col items-center justify-center px-[40px] py-[16px] relative rounded-[10px] shrink-0 w-full" data-name="FAQ">



              <div aria-hidden="true" className="absolute border border-[#8949ff] border-solid inset-0 pointer-events-none rounded-[10px]" />



              {item.frame}



            </div>



          </Accordion.Trigger>



          <Accordion.Content className="w-full bg-[#f7f5f9] rounded-b-[10px] mt-[-8px] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">



            <div className="p-[30px] font-['Inter:Regular',sans-serif] text-[18px] text-[#080813] leading-[1.4]">



              {item.content}



            </div>



          </Accordion.Content>



        </Accordion.Item>



      ))}



    </Accordion.Root>



  );



}



function Container46() {



  return (



    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Container">



      <Frame76 />



      <Frame75 />



    </div>



  );



}



export function FaqSection({ content, editable, backgroundColor = "#ecddee" }: { content: any; editable?: any; backgroundColor?: string }) {



  if (!content?.faq) return null;



  return (



    <section className="content-stretch flex flex-col items-center mb-[-2px] px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[56px] md:py-[80px] relative shrink-0 w-full bg-[#f9fafb]" style={{ backgroundColor: "#f9fafb" }} data-tina-field={fieldFor(editable, "faq")}>



      <div className="content-stretch mx-auto flex max-w-[1296px] flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Container">



        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">



          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Container">



            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[32px] md:text-[40px] text-center w-full" data-tina-field={fieldFor(editable?.faq, "title")}>{content.faq.title}</p>



          </div>



        </div>



        <Accordion.Root type="single" collapsible className="w-full flex flex-col gap-[22px] items-start justify-center relative shrink-0">



          {content.faq.items?.map((item: any, index: number) => (



            <Accordion.Item



              key={index}



              value={`item-${index + 1}`}



              className="group w-full overflow-hidden rounded-[24px] border border-[#8949ff] bg-[#8949ff] transition-colors duration-200 hover:bg-white hover:border-[#8949ff] data-[state=open]:bg-white data-[state=open]:border-[#8949ff]"



            >



              <Accordion.Header className="w-full">



                <Accordion.Trigger className="group flex w-full items-center gap-[18px] px-[20px] py-[20px] text-left focus:outline-none md:gap-[40px] md:px-[33px] md:py-[32px]">



                  <p



                    className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-h-px min-w-px not-italic relative text-[16px] md:text-[18px] text-white transition-colors duration-200 group-hover:text-[#8949ff] group-data-[state=open]:text-[#8949ff]"



                    data-tina-field={fieldFor(editable?.faq?.items?.[index], "question")}



                  >



                    {item.question}



                  </p>



                  <span className="flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full bg-[#fcc63d] text-[#101828]">



                    <span className="transition-transform duration-200 group-data-[state=open]:rotate-180">



                      <FaqChevronIcon />



                    </span>



                  </span>



                </Accordion.Trigger>



              </Accordion.Header>



              <Accordion.Content className="overflow-hidden">



                <div className="px-[20px] pb-[20px] md:px-[33px] md:pb-[26px]">



                  <div className="h-px w-full bg-[#c993ff]" />



                  <div className="pt-[18px] font-['Inter:Regular',sans-serif] text-[15px] md:text-[16px] text-[#364153] leading-[1.1]" data-tina-field={fieldFor(editable?.faq?.items?.[index], "answer")}>



                    {item.answer}



                  </div>



                </div>



              </Accordion.Content>



            </Accordion.Item>



          ))}



        </Accordion.Root>



      </div>



    </section>



  );



}



function Frame52({ content }: { content: any }) {



  return <FaqSection content={content} />;



}



function Frame126() {



  return (



    <div className="relative shrink-0 w-full">



      <div className="flex flex-col items-center size-full">



        <div className="content-stretch flex flex-col gap-[40px] items-center leading-[0] not-italic pr-[230px] relative text-[#080813] text-center w-full">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[40px] w-[min-content]">



            <p className="leading-[1.1]">Asesoría hipotecaria en las principales ciudades de España</p>



          </div>



          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px] whitespace-nowrap">



            <p className="leading-[1.1]">Atendemos de forma digital con acompañamiento personalizado durante todo el proceso.</p>



          </div>



        </div>



      </div>



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di8() {



  return (



    <div className="h-full relative rounded-[24px] w-[306.5px]" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Marbella" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/marbella.png" />



    </div>



  );



}



function Container47() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame129() {



  return (



    <div className="h-full relative shrink-0">



      <div className="flex flex-col justify-center size-full">



        <div className="content-stretch flex flex-col gap-[12px] h-full items-start justify-center py-[20px] relative">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8949ff] text-[28px] w-[min-content]">



            <p className="leading-[1.1]">Marbella</p>



          </div>



          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">



            <p className="leading-[1.1]">Te ayudamos a conseguir o mejorar tu hipoteca en Marbella con acompañamiento experto, análisis personalizado y coordinación integral para llegar a firma sin sorpresas ni retrasos innecesarios.</p>



          </div>



          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



              <p className="leading-[1.1]">Asesoría hipotecaria en Marbella</p>



            </div>



            <Container47 />



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame128() {



  return (



    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative">



      <div className="flex h-full items-center justify-center relative shrink-0">



        <div className="flex-none h-full rotate-180">



          <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di8 />



        </div>



      </div>



      <Frame129 />



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di9() {



  return (



    <div className="h-full relative rounded-[24px] w-[306.5px]" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Madrid" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/madrid.png" />



    </div>



  );



}



function Container48() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame131() {



  return (



    <div className="h-full relative shrink-0">



      <div className="flex flex-col justify-center size-full">



        <div className="content-stretch flex flex-col gap-[12px] h-full items-start justify-center py-[20px] relative">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8949ff] text-[28px] w-[min-content]">



            <p className="leading-[1.1]">Madrid</p>



          </div>



          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">



            <p className="leading-[1.1]">Si buscas comprar vivienda o mejorar tu hipoteca en Madrid, te guiamos con opciones claras, estrategia adecuada y acompañamiento completo hasta la firma final.</p>



          </div>



          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



              <p className="leading-[1.1]">Asesoría hipotecaria en Madrid</p>



            </div>



            <Container48 />



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame130() {



  return (



    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative">



      <div className="flex h-full items-center justify-center relative shrink-0">



        <div className="flex-none h-full rotate-180">



          <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di9 />



        </div>



      </div>



      <Frame131 />



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di10() {



  return (



    <div className="h-full relative rounded-[24px] w-[306.5px]" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Barcelona" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/barcelona.png" />



    </div>



  );



}



function Container49() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame133() {



  return (



    <div className="h-full relative shrink-0">



      <div className="flex flex-col justify-center size-full">



        <div className="content-stretch flex flex-col gap-[12px] h-full items-start justify-center py-[20px] relative">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8949ff] text-[28px] w-[min-content]">



            <p className="leading-[1.1]">Barcelona</p>



          </div>



          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">



            <p className="leading-[1.1]">En Barcelona analizamos tu perfil hipotecario para encontrar la mejor ruta posible, comparando opciones reales y coordinando el proceso hasta llegar a firma correctamente.</p>



          </div>



          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



              <p className="leading-[1.1]">Asesoría hipotecaria en Barcelona</p>



            </div>



            <Container49 />



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame132() {



  return (



    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative">



      <div className="flex h-full items-center justify-center relative shrink-0">



        <div className="flex-none h-full rotate-180">



          <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di10 />



        </div>



      </div>



      <Frame133 />



    </div>



  );



}



function Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di11() {



  return (



    <div className="h-full relative rounded-[24px] w-[306.5px]" data-name="AB6AXuDacuVQqh-eXYc-cZ_uvc6CUm4RleF3eMfNosUupEQUzTjd6n99-TdeyryPp9GagX_4ADe_PkplQKaJ5WxjBQdAziek6nDjDV8VDeOfCOz4YWI8iRML81cSz4f0XOWpsFWA6MtOe2_AdwA8FB8aqe5-t6BOWEoFjNpuXuwtIrqDKARCPf5ESS5OFwq5xUUi-6jQ8rC1kEc46TNqFdWwxo-pc4_Ncf7FTCj7XBn5JFfE8dE2Or8rcJImP0wjFIz6XuPuK-R1n1gdT5Di">



      <img alt="Valencia" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src="/images/valencia.png" />



    </div>



  );



}



function Container50() {



  return (



    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">



      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">



        <p className="leading-[24px]">arrow_forward</p>



      </div>



    </div>



  );



}



function Frame135() {



  return (



    <div className="h-full relative shrink-0">



      <div className="flex flex-col justify-center size-full">



        <div className="content-stretch flex flex-col gap-[12px] h-full items-start justify-center py-[20px] relative">



          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#8949ff] text-[28px] w-[min-content]">



            <p className="leading-[1.1]">Valencia</p>



          </div>



          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">



            <p className="leading-[1.1]">Te ayudamos a conseguir o mejorar tu hipoteca en Valencia con un proceso claro, opciones comparadas y acompañamiento experto desde el diagnóstico hasta la firma.</p>



          </div>



          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">



            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



              <p className="leading-[1.1]">Asesoría hipotecaria en Valencia</p>



            </div>



            <Container50 />



          </div>



        </div>



      </div>



    </div>



  );



}



function Frame134() {



  return (



    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative">



      <div className="flex h-full items-center justify-center relative shrink-0">



        <div className="flex-none h-full rotate-180">



          <Ab6AXuDacuVQqhEXYcCZUvc6CUm4RleF3EMfNosUupEqUzTjd6N99TdeyryPp9GagX4ADePkplQKaJ5WxjBQdAziek6NDjDv8VDeOfCOz4Ywi8IRml81CSz4F0XoWpsFwa6MtOe2AdwA8Fb8Aqe5T6BowEoFjNpuXuwtIrqDkarcPf5Ess5OFwq5XUUi6JQ8RC1KEc46TNqFdWwxoPc4Ncf7FtCj7XBn5JFfE8DE2Or8RcJImP0WjFIz6XuPuKR1N1GdT5Di11 />



        </div>



      </div>



      <Frame135 />



    </div>



  );



}



function Frame127() {



  const [emblaRef, emblaApi] = useEmblaCarousel({ 



    loop: true,



    align: 'start',



    slidesToScroll: 1



  });



  const [selectedIndex, setSelectedIndex] = useState(0);



  const onSelect = useCallback(() => {



    if (!emblaApi) return;



    setSelectedIndex(emblaApi.selectedScrollSnap());



  }, [emblaApi]);



  useEffect(() => {



    if (!emblaApi) return;



    onSelect();



    emblaApi.on('select', onSelect);



    emblaApi.on('reInit', onSelect);



  }, [emblaApi, onSelect]);



  const scrollTo = useCallback((index: number) => {



    if (emblaApi) emblaApi.scrollTo(index);



  }, [emblaApi]);



  return (



    <div className="content-stretch flex flex-col gap-[20px] w-full">



      <div className="h-[204px] relative shrink-0 w-full overflow-hidden" ref={emblaRef}>



        <div className="flex gap-[40px] items-start h-full">



          <div className="flex-[0_0_auto] min-w-0 bg-[#ecddee] flex flex-col gap-[16px] h-full items-start justify-center pr-[20px] relative rounded-[24px] shrink-0 ml-[230px]" data-name="SEO local card">



            <Frame128 />



          </div>



          <div className="flex-[0_0_auto] min-w-0 bg-[#ecddee] flex flex-col gap-[16px] h-full items-start justify-center pr-[20px] relative rounded-[24px] shrink-0" data-name="SEO local card">



            <Frame130 />



          </div>



          <div className="flex-[0_0_auto] min-w-0 bg-[#ecddee] flex flex-col gap-[16px] h-full items-start justify-center pr-[20px] relative rounded-[24px] shrink-0" data-name="SEO local card">



            <Frame132 />



          </div>



          <div className="flex-[0_0_auto] min-w-0 bg-[#ecddee] flex flex-col gap-[16px] h-full items-start justify-center pr-[20px] relative rounded-[24px] shrink-0" data-name="SEO local card">



            <Frame134 />



          </div>



        </div>



      </div>



      <div className="flex justify-center w-full mt-[10px]">



        <Group1 selectedIndex={selectedIndex} onDotClick={scrollTo} />



      </div>



    </div>



  );



}



function Group1({ selectedIndex, onDotClick }: { selectedIndex: number, onDotClick: (index: number) => void }) {



  const dots = [0, 1, 2, 3]; // Solamente hay 4 ciudades



  return (



    <div className="flex gap-[8px] items-center">



      {dots.map((index) => (



        <button



          key={index}



          onClick={() => onDotClick(index)}



          className={`transition-all duration-300 ${



            selectedIndex === index 



              ? 'bg-[#8949ff] w-[30px] h-[9px] rounded-[7px]' 



              : 'bg-[#ecddee] w-[9px] h-[9px] rounded-full'



          }`}



          aria-label={`Go to city ${index + 1}`}



        />



      ))}



    </div>



  );



}



export function Frame60({ content, editable }: { content: any; editable?: any }) {



  if (!content?.locations?.items?.length) return null;



  const cards = [



    {



      city: "Sevilla",



      summary: "Te ayudamos a conseguir o mejorar tu hipoteca en Sevilla con acompa\u00f1amiento experto, an\u00e1lisis personalizado y coordinaci\u00f3n integral para llegar a firma sin sorpresas ni retrasos innecesarios.",



      seoLabel: "Asesor\u00eda hipotecaria en Sevilla",



      image: "/images/locations/sevilla.png",



      cta: { href: "#map-sevilla" }



    },



    {



      city: "Madrid",



      summary: "Si buscas comprar vivienda o mejorar tu hipoteca en Madrid, te guiamos con opciones claras y acompa\u00f1amiento completo hasta la firma final.",



      seoLabel: "Asesor\u00eda hipotecaria en Madrid",



      image: "/images/locations/madrid.png",



      cta: { href: "#map-madrid" }



    },



    {



      city: "Barcelona",



      summary: "En Barcelona, contamos con una oficina presencial donde analizamos tu perfil hipotecario para encontrar la mejor ruta posible. Comparamos opciones reales y coordinamos el proceso hasta que llegues a la firma de manera correcta.",



      seoLabel: "Asesor\u00eda hipotecaria en Barcelona",



      image: "/images/locations/barcelona.png",



      cta: { href: "#map-barcelona" }



    },



    {



      city: "Valencia",



      summary: "Te ayudamos a conseguir o mejorar tu hipoteca en Valencia con un proceso claro, opciones comparadas y acompa\u00f1amiento experto desde el diagn\u00f3stico hasta la firma.",



      seoLabel: "Asesor\u00eda hipotecaria en Valencia",



      image: "/images/locations/valencia.png",



      cta: { href: "#map-valencia" }



    }



  ];



  const [emblaRef, emblaApi] = useEmblaCarousel({



    loop: true,



    align: 'start',



    slidesToScroll: 1



  });



  const [selectedIndex, setSelectedIndex] = useState(0);



  const onSelect = useCallback(() => {



    if (!emblaApi) return;



    setSelectedIndex(emblaApi.selectedScrollSnap());



  }, [emblaApi]);



  useEffect(() => {



    if (!emblaApi) return;



    onSelect();



    emblaApi.on('select', onSelect);



    emblaApi.on('reInit', onSelect);



    const autoScroll = window.setInterval(() => {



      emblaApi.scrollNext();



    }, 4500);



    return () => {



      window.clearInterval(autoScroll);



    };



  }, [emblaApi, onSelect]);



  const scrollTo = useCallback((index: number) => {



    if (emblaApi) emblaApi.scrollTo(index);



  }, [emblaApi]);



  return (



    <div className="content-stretch flex flex-col gap-[32px] md:gap-[40px] items-center mb-[-2px] py-[56px] md:py-[80px] px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] relative shrink-0 w-full">



      <div className="relative shrink-0 w-full">



        <div className="flex flex-col items-center size-full">



          <div className="content-stretch mx-auto flex max-w-[1460px] flex-col gap-[20px] md:gap-[40px] items-center leading-[0] not-italic pr-0 relative text-[#080813] text-center w-full">



            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center min-w-full relative shrink-0 text-[32px] md:text-[40px] w-[min-content]" data-tina-field={fieldFor(editable?.locations, "title")}>



              <p className="leading-[1.1]">Acompa&ntilde;amiento hipotecario en las principales ciudades de Espa&ntilde;a</p>



            </div>



            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] md:text-[18px] w-full max-w-[860px]" data-tina-field={fieldFor(editable?.locations, "subtitle")}>



              <p className="leading-[1.1]">Atendemos de forma digital con acompa&ntilde;amiento personalizado durante todo el proceso.</p>



            </div>



          </div>



        </div>



      </div>



      <div className="content-stretch mx-auto flex max-w-[1460px] flex-col gap-[20px] w-full">



        <div className="relative shrink-0 w-full overflow-hidden" ref={emblaRef}>



          <div className="flex items-stretch">



            {cards.map((item: any, index: number) => (



              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_760px] lg:flex-[0_0_760px] min-w-0 shrink-0 pr-[12px] md:pr-[40px]">



                <div className="bg-[#ecddee] flex h-auto md:h-full flex-col md:flex-row gap-[16px] items-stretch justify-start p-[12px] md:p-[16px] md:pr-[20px] relative rounded-[24px]" data-name="SEO local card">



                  <div className="content-stretch flex flex-col md:flex-row flex-auto md:flex-[1_0_0] gap-[16px] items-stretch min-h-px min-w-px relative">



                    <div className="flex h-[220px] md:h-[204px] w-full md:w-[306.5px] items-center justify-center relative shrink-0">



                      <div className="h-full overflow-hidden relative rounded-[24px] w-full" data-tina-field={fieldFor(editable?.locations?.items?.[index], "image")}>



                        <img alt={item.city} className="absolute inset-0 h-full w-full max-w-none object-cover rounded-[24px]" src={item.image} />



                      </div>



                    </div>



                    <div className="relative shrink-0 flex-1 min-w-0">



                      <div className="flex flex-col justify-center size-full">



                        <div className="content-stretch flex flex-col gap-[12px] h-full items-start justify-center py-[10px] md:py-[20px] relative">



                          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[24px] md:text-[28px] w-full" data-tina-field={fieldFor(editable?.locations?.items?.[index], "city")}>



                            <p className="leading-[1.1]">{item.city}</p>



                          </div>



                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#080813] text-[15px] w-full" data-tina-field={fieldFor(editable?.locations?.items?.[index], "summary")}>



                            <p className="leading-[1.1]">{item.summary || item.address}</p>



                          </div>



                          <a href={item.cta?.href || "#"} className="content-stretch flex gap-[8px] items-center relative shrink-0 no-underline" data-tina-field={fieldFor(editable?.locations?.items?.[index], "seoLabel")}>



                            <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">



                              <p className="leading-[1.1]">{item.seoLabel || item.cta?.label}</p>



                            </div>



                            <Container47 />



                          </a>



                        </div>



                      </div>



                    </div>



                  </div>



                </div>



              </div>



            ))}



          </div>



        </div>



        <div className="flex justify-center w-full mt-[10px]">



          <Group1 selectedIndex={selectedIndex} onDotClick={scrollTo} />



        </div>



      </div>



    </div>



  );



}



function Group() {



  return (



    <div className="absolute inset-[-0.02%_-0.01%_0.04%_0]" data-name="Group">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 332.835 79.188">



        <g id="Group">



          <path d={svgPaths.pfc0a270} fill="var(--fill-0, white)" id="Vector" />



          <path d={svgPaths.pe4e0900} fill="var(--fill-0, white)" id="Vector_2" />



          <path d={svgPaths.p376aa1f2} fill="var(--fill-0, white)" id="Vector_3" />



          <path d={svgPaths.p2ab10380} fill="var(--fill-0, white)" id="Vector_4" />



          <path d={svgPaths.p3b5843c0} fill="var(--fill-0, white)" id="Vector_5" />



          <path d={svgPaths.p65bbd80} fill="var(--fill-0, white)" id="Vector_6" />



          <path d={svgPaths.p7c64f80} fill="var(--fill-0, #FCC63D)" id="Vector_7" />



        </g>



      </svg>



    </div>



  );



}



function Capa1() {



  return (



    <div className="absolute contents inset-[-0.02%_-0.01%_0.04%_0]" data-name="Capa 1">



      <Group />



    </div>



  );



}



function Frame73() {



  return (



    <div className="content-stretch flex gap-[24px] items-start relative shrink-0">



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Whatsapp">



        <div className="absolute inset-[8.33%_8.75%_8.33%_8.33%]" data-name="icon">



          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9 20.0001">



            <path d={svgPaths.p30848300} fill="var(--fill-0, #FCC63D)" id="icon" />



          </svg>



        </div>



      </div>



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Linkedin">



        <div className="-translate-x-1/2 absolute aspect-[18/18] bottom-[12.5%] left-1/2 top-[12.5%]" data-name="Vector">



          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">



            <path d={svgPaths.p34481000} fill="var(--fill-0, #FCC63D)" id="Vector" />



          </svg>



        </div>



      </div>



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Instagram">



        <div className="-translate-y-1/2 absolute aspect-[20/20] left-[8.33%] right-[8.33%] top-1/2" data-name="Vector">



          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">



            <path d={svgPaths.p124a2170} fill="var(--fill-0, #FCC63D)" id="Vector" />



          </svg>



        </div>



      </div>



      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="facebook">



        <div className="-translate-y-1/2 absolute aspect-[20/19.950000762939453] left-[8.33%] right-[8.33%] top-[calc(50%-0.02px)]" data-name="Vector">



          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.95">



            <path d={svgPaths.paeb5680} fill="var(--fill-0, #FCC63D)" id="Vector" />



          </svg>



        </div>



      </div>



    </div>



  );



}



function Frame71() {



  return (



    <div className="content-stretch flex flex-col gap-[24px] md:gap-[40px] items-center md:items-start relative shrink-0">



      <div className="h-[56px] md:h-[79.206px] overflow-clip relative shrink-0 w-[236px] md:w-[332.818px]" data-name="Logo blanco">



        <Capa1 />



      </div>



      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]"></p>



      <Frame73 />



    </div>



  );



}



function Frame66() {



  return (



    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[18px] md:gap-[22px] items-center md:items-start relative shrink-0 text-[16px] text-white w-full">



      <p className="relative shrink-0 w-full text-center md:text-left">Soluciones de hipoteca</p>



      <p className="relative shrink-0 w-full text-center md:text-left">Simulador de hipoteca</p>



    </div>



  );



}



function Frame70() {



  return (



    <div className="content-stretch flex flex-col gap-[20px] md:gap-[40px] items-center md:items-start leading-[1.1] not-italic relative shrink-0 w-full md:w-[138px]">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#8949ff] text-[22px] w-full text-center md:text-left">Servicios</p>



      <Frame66 />



    </div>



  );



}



function Frame67() {



  return (



    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[18px] md:gap-[22px] items-center md:items-start relative shrink-0 text-[16px] text-white w-full">



      <p className="relative shrink-0 w-full text-center md:text-left">Sobre nosotros</p>



      <p className="relative shrink-0 w-full text-center md:text-left">Contacto</p>



      <p className="relative shrink-0 w-full text-center md:text-left">Blog</p>



    </div>



  );



}



function Frame68() {



  return (



    <div className="content-stretch flex flex-col gap-[20px] md:gap-[40px] items-center md:items-start leading-[1.1] not-italic relative shrink-0 w-full md:w-[138px]">



      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#8949ff] text-[22px] w-full text-center md:text-left">Empresa</p>



      <Frame67 />



    </div>



  );



}



function Frame69() {



  return (



    <div className="content-stretch flex flex-col gap-[20px] md:gap-[24px] items-center md:items-start relative shrink-0 w-full md:w-auto">



      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-w-full not-italic relative shrink-0 text-[#8949ff] text-[22px] w-[min-content] text-center md:text-left">Simulador</p>



      <div className={`${MAIN_BUTTON_CLASS} shrink-0 w-full sm:w-auto`}>



        <p className={MAIN_BUTTON_TEXT_CLASS}>Ver diagnóstico</p>



      </div>



    </div>



  );



}



function Frame72() {



  return (



    <div className="content-stretch flex flex-col md:flex-row gap-[32px] md:gap-[24px] items-center md:items-start justify-between relative shrink-0 w-full text-center md:text-left">



      <Frame71 />



      <Frame70 />



      <Frame68 />



      <Frame69 />



    </div>



  );



}



function getHeaderNavigation() {



  const pathname = typeof window !== "undefined" ? window.location.pathname : "/es/";



  const lang = pathname.startsWith("/en") ? "en" : "es";



  const prefix = `/${lang}`;



  return {



    home: `${prefix}/`,



    solutions: `${prefix}/soluciones-vivienda/`,



    simulator: `${prefix}/simulador-hipoteca/`,



    about: `${prefix}/sobre-nosotros/`,



    blog: `${prefix}/news/`,



    contact: `${prefix}/contacto/`



  };



}



const HEADER_GUTTER_CLASSES = "px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px]";



const HEADER_NAV_LINK_CLASS =



  "relative shrink-0 rounded-full px-[12px] py-[10px] no-underline text-inherit transition-colors duration-200 hover:bg-[#f7f3ff] hover:text-[#4f3bf9] focus-visible:bg-[#f7f3ff] focus-visible:text-[#4f3bf9]";



const HEADER_CTA_BUTTON_CLASS =



  "bg-[#fcc63d] inline-flex h-[52px] w-full items-center justify-center gap-[12px] rounded-full px-[28px] text-[16px] font-['Inter:Bold',sans-serif] font-bold leading-[20px] text-[#080813] no-underline transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#f6bf31] hover:shadow-[0px_16px_36px_rgba(252,198,61,0.28)] focus-visible:-translate-y-[1px] focus-visible:bg-[#f6bf31]";



const MAIN_BUTTON_CLASS =



  "bg-[#fcc63d] inline-flex min-h-[56px] items-center justify-center gap-[12px] rounded-full px-[20px] sm:px-[24px] md:px-[40px] py-[14px] md:py-[20px] shadow-[0px_25px_50px_0px_rgba(252,198,61,0.3)] no-underline transition-all duration-200 hover:bg-[#ffe07e] hover:shadow-[0px_25px_50px_0px_rgba(252,198,61,0.32)] focus-visible:bg-[#ffe07e]";



const MAIN_BUTTON_TEXT_CLASS =



  "font-['Inter:Bold',sans-serif] font-bold leading-[1.15] md:leading-[27px] tracking-[1.2px] md:tracking-[1.8px] uppercase text-[#101828] text-[14px] sm:text-[15px] md:text-[18px] text-center whitespace-normal";



function Img() {



  const links = getHeaderNavigation();



  return (



    <a className="block h-[40px] relative shrink-0 w-[167.719px]" data-name="img" href={links.home}>



      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src="/images/imgImg.png" />



    </a>



  );



}



function Frame136() {



  const links = getHeaderNavigation();



  const items = [



    { href: links.solutions, label: "Soluciones de vivienda" },



    { href: links.simulator, label: "Simulador de hipoteca" },



    { href: links.about, label: "Sobre nosotros" },



    { href: links.blog, label: "Blog" },



    { href: links.contact, label: "Contacto" }



  ];



  return (



    <div className="relative shrink-0">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[4px] lg:gap-[8px] items-center leading-[1.1] not-italic relative text-[#62748e] text-[15px] text-center whitespace-nowrap">



        {items.map((item) => (



          <a key={item.href} className={HEADER_NAV_LINK_CLASS} href={item.href}>



            {item.label}



          </a>



        ))}



      </div>



    </div>



  );



}



function ArrowRight() {



  return (



    <div className="relative size-[16px] shrink-0" data-name="ArrowRight">



      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">



        <g id="ArrowRight">



          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



          <path d={svgPaths.p1d405500} id="Vector_2" stroke="var(--stroke-0, #080813)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



        </g>



      </svg>



    </div>



  );



}



function Button() {



  const links = getHeaderNavigation();



  return (



    <a



      className={HEADER_CTA_BUTTON_CLASS}



      data-name="button"



      href={links.contact}



    >



      <span className="whitespace-nowrap">Contactar experto</span>



      <ArrowRight />



    </a>



  );



}



function Container51() {



  return (



    <div className="h-[52px] relative shrink-0 w-full max-w-[214px]" data-name="Container">



      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">



        <Button />



      </div>



    </div>



  );



}



function MobileMenuLink({



  href,



  label,



  onClick



}: {



  href: string;



  label: string;



  onClick: () => void;



}) {



  return (



    <a



      href={href}



      className="rounded-full px-[14px] py-[10px] text-[16px] font-['Inter:Bold',sans-serif] font-bold text-[#62748e] no-underline transition-colors duration-200 hover:bg-[#f7f3ff] hover:text-[#4f3bf9] focus-visible:bg-[#f7f3ff] focus-visible:text-[#4f3bf9]"



      onClick={onClick}



    >



      {label}



    </a>



  );



}



export function FigmaHeader() {



  const [isOpen, setIsOpen] = useState(false);



  const links = getHeaderNavigation();



  const mobileItemás = [



    { href: links.solutions, label: "Soluciones de vivienda" },



    { href: links.simulator, label: "Simulador de hipoteca" },



    { href: links.about, label: "Sobre nosotros" },



    { href: links.blog, label: "Blog" },



    { href: links.contact, label: "Contacto" }



  ];



  return (



    <div className="bg-white pointer-events-auto sticky top-0 w-full z-50 shadow-sm" data-name="div">



      <div className={`mx-auto flex h-[88px] w-full max-w-[1460px] items-center justify-between ${HEADER_GUTTER_CLASSES}`}>



        <Img />



        <div className="hidden md:block">



          <Frame136 />



        </div>



        <div className="hidden md:block">



          <Container51 />



        </div>



        <button



          type="button"



          className="md:hidden flex flex-col justify-center items-center gap-[5px] size-[44px]"



          aria-label="Abrir menú"



          aria-expanded={isOpen}



          onClick={() => setIsOpen((value) => !value)}



        >



          <span className={`block h-[2px] w-[22px] bg-[#080813] transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />



          <span className={`block h-[2px] w-[22px] bg-[#080813] transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />



          <span className={`block h-[2px] w-[22px] bg-[#080813] transition-transform duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />



        </button>



      </div>



      {isOpen ? (



        <div className="md:hidden border-t border-[#e5e7eb]">



          <div className={`mx-auto w-full max-w-[1460px] py-[20px] ${HEADER_GUTTER_CLASSES}`}>



            <div className="flex flex-col gap-[10px]">



              {mobileItemás.map((item) => (



                <MobileMenuLink key={item.href} href={item.href} label={item.label} onClick={() => setIsOpen(false)} />



              ))}



              <div className="pt-[8px]">



                <Container51 />



              </div>



            </div>



          </div>



        </div>



      ) : null}



    </div>



  );



}



function Frame49({ content, editable }: { content: any; editable?: any }) {



  if (!content?.metrics) return null;



  const items = content.metrics.items || [];



  return (



    <div className="bg-[#0f172b] content-stretch flex flex-col gap-[18px] md:gap-0 md:flex-row isolate items-center md:items-center justify-center overflow-hidden px-[24px] py-[28px] md:px-[56px] md:py-[48px] xl:px-[72px] xl:py-[56px] relative rounded-[32px] md:rounded-[60px] shrink-0 w-full max-w-[1460px]">



        {(items || []).slice(0, 3).map((item: any, index: number) => (



          <React.Fragment key={index}>



          <div className="content-stretch flex w-full md:flex-[1_0_0] flex-col gap-[8px] md:gap-[18px] items-center md:items-start leading-[1.1] min-h-px min-w-px not-italic relative text-center md:text-left py-[2px] md:py-[10px]" data-tina-field={fieldFor(editable?.metrics?.items?.[index], "value")}>



            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#c993ff] text-[44px] sm:text-[48px] md:text-[56px] tracking-[0.3px] md:tracking-[1px] w-full whitespace-nowrap text-center md:text-left">



              {item.value}



            </p>



            <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[14px] sm:text-[16px] md:text-[22px] text-white w-full max-w-[250px] leading-[1.25] text-center md:text-left" data-tina-field={fieldFor(editable?.metrics?.items?.[index], "title")}>



              {item.title}



            </p>



          </div>



          {index < Math.min(items.length, 3) - 1 ? (



            <div className="bg-[#744c98] h-px md:h-[158px] my-[8px] md:mx-[56px] md:my-0 shrink-0 w-full md:w-px" />



          ) : null}



        </React.Fragment>



      ))}



    </div>



  );



}



function GuidesSection({ content, editable }: { content: any; editable?: any }) {



  const guides = content?.guides;



  if (!guides) return null;



  return (



      <section className="bg-[#080813] content-stretch flex flex-col gap-[40px] items-start px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[56px] md:py-[80px] relative shrink-0 w-full">



        <div className="content-stretch mx-auto flex max-w-[1460px] flex-col gap-[40px] items-start relative shrink-0 w-full">



        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[32px] md:text-[40px] text-center text-white w-full" data-tina-field={fieldFor(editable?.guides, "title")}>



            {guides.title}



          </p>



        </div>



        <div className="content-stretch grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px] items-stretch relative shrink-0 w-full">



        {(guides.items || []).map((item: any, index: number) => (



          <article key={index} className="bg-white border border-[#bec5d2] border-solid content-stretch flex flex-col items-start overflow-hidden p-px relative rounded-[24px] md:rounded-[32px]" data-tina-field={fieldFor(editable?.guides?.items?.[index], "title")}>



            <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] md:p-[32px] relative shrink-0 w-full">



              <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#101828] text-[17px] md:text-[18px] w-full">



                {item.title}



              </p>



              <a href={item.cta?.href || "#"} className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full no-underline">



                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#8949ff] text-[15px] whitespace-nowrap">



                  {item.cta?.label}



                </p>



                <span aria-hidden="true" className="font-['Inter:Bold',sans-serif] text-[#8949ff] text-[15px]">&gt;</span>



              </a>



            </div>



            </article>



          ))}



        </div>



        </div>



      </section>



    );



  }



function AboutSection({ content, editable }: { content: any; editable?: any }) {



  const about = content?.about;



  if (!about) return null;



  const aboutImage = about.image || "/images/about-efiteca.png";



  return (



    <section id="sobre-nosotros" className="bg-white content-stretch flex flex-col items-start px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] pt-[56px] pb-[88px] md:py-[80px] relative shrink-0 w-full z-10">



      <div className="content-stretch mx-auto grid max-w-[1460px] grid-cols-1 gap-[32px] md:gap-[72px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center lg:gap-[96px] relative shrink-0 w-full">



        <div className="order-1 flex h-[320px] md:h-[447px] min-h-px min-w-px relative rounded-[32px] md:rounded-[40px] w-full overflow-hidden bg-[#f4f5f9]" data-tina-field={fieldFor(editable?.about, "image")}>



          <img alt="Equeipo de Efiteca acompañando una reunión hipotecaria" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] md:rounded-[40px] size-full" src={aboutImage} />



          <div className="absolute bg-white border border-[#f8fafc] border-solid content-stretch flex flex-col gap-[4px] items-start bottom-[16px] right-[16px] md:bottom-[48px] md:right-[48px] px-[20px] md:px-[25px] py-[20px] md:py-[25px] rounded-[24px] shadow-[0px_14px_50px_0px_rgba(0,0,0,0.12)] w-fit min-w-[172px] md:min-w-[210px] z-10">



            <p className="font-['Inter:Black',sans-serif] font-black leading-[16.5px] not-italic text-[#90a1b9] text-[11px] tracking-[1.1px] uppercase whitespace-nowrap">{about.badgeLabel}</p>



            <p className="font-['Inter:Black',sans-serif] font-black leading-[1.25] not-italic text-[#0f172b] text-[14px] md:text-[15px] whitespace-normal">{about.badgeText}</p>



          </div>



        </div>



        <div className="order-2 content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start min-h-px min-w-px pt-0 md:py-[40px] relative z-10" data-tina-field={fieldFor(editable?.about, "title")}>



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#101828] text-[28px] md:text-[40px] w-full">{about.title}</p>



          <div className="font-['Inter:Regular',sans-serif] font-normal not-italic relative shrink-0 text-[#101828] text-[16px] w-full whitespace-pre-wrap">



            <p className="leading-[1.25]">{about.description}</p>



          </div>



          <a href={about.button?.href || "#"} className={`${MAIN_BUTTON_CLASS} shrink-0 w-full sm:w-auto`}>



            <p className={MAIN_BUTTON_TEXT_CLASS}>{about.button?.label}</p>



            <ArrowRight />



          </a>



        </div>



      </div>



    </section>



  );



}



export default function Home({



  content,



  latestNews,



  data,



  query,



  variables



}: {



  content: any;



  latestNews?: Array<{ title: string; description: string; href: string }>;



  data?: any;



  query?: string;



  variables?: Record<string, any>;



}) {



  const tinaState = query && variables && data ? useTina({ query, variables, data }) : null;



  const page = tinaState?.data?.pages ?? content;



  const tinaPage = tinaState?.data?.pages ?? null;



  return (



    <div className="bg-white content-stretch flex flex-col items-center pb-[2px] relative size-full overflow-hidden" data-name="Home">



      <style>{`



        button, a[href][class*="rounded-full"], a[href][class*="rounded-["], .bg-[#8949ff], .bg-[#fcc63d], .cursor-pointer, [role="button"] {



          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;



        }



        button:hover, a[href][class*="rounded-full"]:hover, a[href][class*="rounded-["]:hover, .bg-[#8949ff]:hover, .bg-[#fcc63d]:hover, .cursor-pointer:hover, [role="button"]:hover {



          transform: scale(1.05);



          filter: brightness(1.15);



          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2) !important;



        }



        button:active, a[href][class*="rounded-full"]:active, a[href][class*="rounded-["]:active, .bg-[#8949ff]:active, .bg-[#fcc63d]:active, .cursor-pointer:active, [role="button"]:active {



          transform: scale(0.95);



        }



      `}</style>



      <div className="w-full">



        <HeroSection content={page} editable={tinaPage} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "services")}>



        <Frame18 content={page} />



      </div>



      <div className="w-full"> 



        <StaggeredMetricsSection content={page} editable={tinaPage} />



      </div>



      <div className="w-full">



        <Frame122 content={page} editable={tinaPage} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "steps")}>



        <StepTimelineSection content={page} editable={tinaPage} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "actionCta")}>



        <ActionCtaSection content={page} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "testimonials")}>



        <TestimonialsSection content={page} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "about")}>



        <AboutSection content={page} editable={tinaPage} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "partners")}>



        <Frame86 content={page} />



      </div>



      <div className="bg-white content-stretch flex flex-col items-center mb-[-2px] px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[56px] md:py-[80px] relative shrink-0 w-full" data-name="cifras" data-tina-field={fieldFor(tinaPage, "metrics")}> 



        <Frame49 content={page} editable={tinaPage} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "benefits")}>



        <BenefitsSection content={page} editable={tinaPage} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "contact")}>



        <Frame83 content={page} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "guides")}>



        <GuidesSection content={page} editable={tinaPage} />



      </div>



        <div className="w-full" data-tina-field={fieldFor(tinaPage, "blog")}>



          <Frame22 content={page} latestNews={latestNews} />



        </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "newsletter")}>



        <NewsletterSection content={page} />



      </div>



      <div className="w-full" data-tina-field={fieldFor(tinaPage, "faq")}>



        <Frame52 content={page} />



      </div>



      <div className="w-full">



        <Frame60 content={page} editable={tinaPage} />



      </div>



    </div>



  );



}



function HeroSection({ content, editable }: { content: any; editable?: any }) {



  if (!content?.hero) return null;



  return (



    <section className="mb-[-60px] relative shrink-0 w-full min-h-[680px] md:min-h-[847px] overflow-hidden bg-[#e6e2df] flex flex-col md:block">



      <img



        alt=""



        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full hidden md:block z-[0]"



        src={content.hero.background_desktop}



        data-tina-field={fieldFor(editable?.hero, "background_desktop")}



      />



      <img



        alt=""



        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full md:hidden z-[0]"



        src={content.hero.background_mobile || content.hero.background_desktop}



        data-tina-field={fieldFor(editable?.hero, "background_mobile")}



      />



      <div className="relative w-full max-w-[1460px] mx-auto flex flex-col xl:flex-row xl:items-center min-h-[766px] md:min-h-[847px] z-10 pt-[40px] md:pt-[60px] xl:pt-0 3xl:overflow-visible">



        {/* Family Cutouts overlays */}



        <div className="relative w-full h-[360px] md:h-[450px] xl:absolute xl:inset-0 xl:w-full xl:h-full z-[20] pointer-events-none flex justify-center xl:justify-end items-end">



          <img src="/images/hero-familia-mobile.png" className="w-[85%] h-auto md:hidden relative top-[36px] object-contain object-bottom drop-shadow-xl" alt="" />



          <img src="/images/hero-familia-desktop.png" className="hidden md:block xl:hidden w-auto h-full relative top-[20px] object-contain object-bottom drop-shadow-2xl" alt="" />



          <img src="/images/hero-familia-desktop.png" className="hidden xl:block absolute bottom-0 right-0 w-[50vw] max-w-[800px] h-auto max-h-[80%] object-contain drop-shadow-2xl mb-[60px] object-right-bottom" alt="" />



        </div>



        {/* Purple Text Panel */}



        <div className="relative w-full px-[20px] pb-[80px] pt-[19px] md:px-[48px] xl:px-[80px] md:pb-[80px] md:pt-[19px] z-[10] mt-0 flex flex-col justify-center pointer-events-none">



          <div className="bg-[linear-gradient(163deg,#8949FF_0%,#4F3BF9_100%)] rounded-[32px] p-[32px] pt-[40px] md:p-[56px] flex flex-col gap-[24px] md:gap-[40px] w-full lg:max-w-[800px] xl:max-w-[688px] mx-auto xl:mx-0 relative shadow-[0px_20px_50px_rgba(79,59,249,0.3)] pointer-events-auto mt-[10px] md:mt-0">



            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[36px] md:text-[48px] lg:text-[46px] xl:text-[56px] text-white tracking-[0.5px] md:tracking-[1px] w-full lg:max-w-[600px] xl:max-w-full text-center xl:text-left mx-auto xl:mx-0">



              <span className="text-[#fcc63d] block mb-2 xl:inline xl:mb-0" data-tina-field={fieldFor(editable?.hero, "title_part1")}>{content.hero.title_part1} </span>



              <span className="xl:ml-[10px]" data-tina-field={fieldFor(editable?.hero, "title_part2")}>{content.hero.title_part2}</span>



            </p>



            <p className="font-['Trueno:Light',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] md:text-[18px] text-white w-full lg:max-w-[560px] xl:max-w-[500px] text-center xl:text-left mx-auto xl:mx-0" data-tina-field={fieldFor(editable?.hero, "description")}>



              {content.hero.description}



            </p>



            <a href={content.hero.cta?.href || "#"} className={`${MAIN_BUTTON_CLASS} w-full sm:w-auto mt-[8px] mx-auto xl:mx-0`} data-tina-field={fieldFor(editable?.hero?.cta, "label")}>



              <p className={MAIN_BUTTON_TEXT_CLASS}>



                {content.hero.cta?.label}



              </p>



              <ArrowRight />



            </a>



          </div>



        </div>



      </div>



    </section>



  );



}



export function TestimonialsSection({ content, editable }: { content: any; editable?: any }) {



  if (!content?.testimonials) return null;



  const t = content.testimonials;



  const [mobileTestimonialsRef, mobileTestimonialsApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps", loop: false });



  const [mobileTestimonialsIndex, setMobileTestimonialsIndex] = useState(0);



  const items = t.items || [];



  const description = "Personas en situaciones reales lograron tomar decisiones con mayor claridad, mejorar condiciones o conseguir su hipoteca con acompañamiento experto y coordinación hasta la firma.";



  useEffect(() => {



    if (!mobileTestimonialsApi) return;



    const onSelect = () => setMobileTestimonialsIndex(mobileTestimonialsApi.selectedScrollSnap());



    onSelect();



    mobileTestimonialsApi.on("select", onSelect);



    mobileTestimonialsApi.on("reInit", onSelect);



  }, [mobileTestimonialsApi]);



  const scrollTestimonialTo = useCallback((index: number) => {



    if (mobileTestimonialsApi) mobileTestimonialsApi.scrollTo(index);



  }, [mobileTestimonialsApi]);



  const renderTestimonialCard = (item: any, idx: number) => (



    <div key={idx} className="min-w-0" data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "text")}>



      <article className="flex min-h-[320px] w-full flex-col justify-between rounded-[32px] border border-[#d9d9d9] bg-white px-[24px] py-[24px] md:min-h-[340px] md:px-[32px] md:py-[32px] xl:rounded-[40px] xl:px-[36px] xl:py-[34px]">



        <div className="flex flex-col gap-[20px] md:gap-[24px]">



          <div className="flex gap-[10px] text-[20px] leading-none text-[#fcc63d]">



            {renderStars(item.stars || 5)}



          </div>



          <p



            className="overflow-hidden font-['Inter:Bold',sans-serif] text-[18px] font-bold leading-[1.1] text-[#364153] md:text-[20px] xl:text-[22px]"



            style={{ display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical" }}



            data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "text")}



          >



            {item.text}



          </p>



        </div>



        <div className="flex items-center gap-[12px] pt-[20px]">



          <img



            src={item.image}



            alt={item.name}



            className="size-[46px] shrink-0 rounded-full object-cover bg-[#f2eff7]"



            data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "image")}



          />



          <div className="flex min-w-0 flex-col">



            <p className="font-['Inter:Bold',sans-serif] text-[16px] font-bold leading-[1.1] text-[#101828]" data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "name")}>



              {item.name}



            </p>



            <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.2] text-[#6a7282] md:text-[15px]" data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "role")}>



              {item.role}



            </p>



          </div>



        </div>



      </article>



    </div>



  );



  return (



    <section



      className="mb-[-2px] relative shrink-0 w-full bg-[#f9f6f3]"



      data-name="testimonios"



      data-tina-field={fieldFor(editable, "testimonials")}



    >



      <div className="mx-auto flex w-full max-w-[1460px] flex-col items-center gap-[40px] px-[20px] py-[56px] md:gap-[48px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px]">



        <div className="relative flex w-full max-w-[760px] flex-col items-center gap-[16px] text-center">



          <p className="relative w-full shrink-0 font-['Inter:Bold',sans-serif] text-[32px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.testimonials, "title")}>{t.title}</p>



          <p className="relative w-full shrink-0 font-['Inter:Regular',sans-serif] text-[15px] font-normal leading-[1.35] text-[#364153] md:text-[16px]" data-tina-field={fieldFor(editable?.testimonials, "description")}>{description}</p>



        </div>



        <div className="w-full max-w-[1180px] md:hidden">



          <div className="overflow-hidden" ref={mobileTestimonialsRef}>



            <div className="flex">



              {items.map((item: any, idx: number) => (



                <div key={idx} className="min-w-0 shrink-0 basis-full pr-[12px]">



                  {renderTestimonialCard(item, idx)}



                </div>



              ))}



            </div>



          </div>



          <div className="mt-[18px] flex justify-center">



            <CarouselDots count={items.length} selectedIndex={mobileTestimonialsIndex} onDotClick={scrollTestimonialTo} />



          </div>



        </div>



        <div className="hidden w-full max-w-[1180px] grid-cols-2 gap-[20px] md:grid xl:grid-cols-3">



          {items.map((item: any, idx: number) => renderTestimonialCard(item, idx))}



        </div>



      </div>



    </section>



  );



}



function TestimonialsSectionLegacy({ content, editable }: { content: any; editable?: any }) {



  if (!content?.testimonials) return null;



  const t = content.testimonials;



  const items = t.items || [];



  const description = "Personas en situaciones reales lograron tomar decisiones con mayor claridad, mejorar condiciones o conseguir su hipoteca con acompañamiento experto y coordinación hasta la firma.";



  return (



    <section



      className="mb-[-2px] relative shrink-0 w-full bg-[#f9f6f3]"



      data-name="testimonios"



      data-tina-field={fieldFor(editable, "testimonials")}



    >



      <div className="mx-auto flex w-full max-w-[1460px] flex-col items-center gap-[40px] px-[20px] py-[56px] md:gap-[48px] md:px-[40px] md:py-[80px] xl:px-[64px] 2xl:px-[80px]">



        <div className="relative flex w-full max-w-[760px] flex-col items-center gap-[16px] text-center">



          <p className="relative w-full shrink-0 font-['Inter:Bold',sans-serif] text-[32px] font-bold leading-[1.1] text-[#101828] md:text-[40px]" data-tina-field={fieldFor(editable?.testimonials, "title")}>{t.title}</p>



          <p className="relative w-full shrink-0 font-['Inter:Regular',sans-serif] text-[15px] font-normal leading-[1.35] text-[#364153] md:text-[16px]" data-tina-field={fieldFor(editable?.testimonials, "description")}>{description}</p>



        </div>



        <div className="grid w-full max-w-[1180px] grid-cols-1 gap-[20px] md:grid-cols-2 xl:grid-cols-3">



          {items.map((item: any, idx: number) => (



            <div key={idx} className="min-w-0" data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "text")}>



              <article className="flex min-h-[320px] w-full flex-col justify-between rounded-[32px] border border-[#d9d9d9] bg-white px-[24px] py-[24px] md:min-h-[340px] md:px-[32px] md:py-[32px] xl:rounded-[40px] xl:px-[36px] xl:py-[34px]">



                <div className="flex flex-col gap-[20px] md:gap-[24px]">



                  <div className="flex gap-[10px] text-[20px] leading-none text-[#fcc63d]">



                    {renderStars(item.stars || 5)}



                  </div>



                  <p



                    className="overflow-hidden font-['Inter:Bold',sans-serif] text-[18px] font-bold leading-[1.1] text-[#364153] md:text-[20px] xl:text-[22px]"



                    style={{ display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical" }}



                    data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "text")}



                  >



                    {item.text}



                  </p>



                </div>



                <div className="flex items-center gap-[12px] pt-[20px]">



                  <img



                    src={item.image}



                    alt={item.name}



                    className="size-[46px] shrink-0 rounded-full object-cover bg-[#f2eff7]"



                    data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "image")}



                  />



                  <div className="flex min-w-0 flex-col">



                    <p className="font-['Inter:Bold',sans-serif] text-[16px] font-bold leading-[1.1] text-[#101828]" data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "name")}>



                      {item.name}



                    </p>



                    <p className="font-['Inter:Regular',sans-serif] text-[14px] leading-[1.2] text-[#6a7282] md:text-[15px]" data-tina-field={fieldFor(editable?.testimonials?.items?.[idx], "role")}>



                      {item.role}



                    </p>



                  </div>



                </div>



              </article>



            </div>



          ))}



        </div>



      </div>



    </section>



  );



}



export function SharedHomeBenefitsBlock({



  title,



  description,



  ctaLabel,



  ctaHref,



  editable



}: {



  title: string;



  description: string;



  ctaLabel: string;



  ctaHref?: string;



  editable?: any;



}) {



  return (



    <section className="mb-[-2px] relative shrink-0 w-full pt-[40px] xl:pt-[80px]">



      <div className="w-full max-w-[1460px] mx-auto px-[20px] md:px-[40px] 2xl:px-[80px] pb-[40px] md:pb-[60px] xl:pb-[80px] pt-0">



        <div className="w-full flex flex-col xl:flex-row xl:items-end xl:justify-center">



          <div className="bg-[#fcc63d] w-full xl:w-[640px] px-[24px] md:px-[72px] py-[40px] md:py-[70px] flex items-center justify-center xl:justify-start order-2 xl:order-1 relative bg-[url('/images/frame7.png')] bg-cover bg-center bg-no-repeat shadow-xl xl:shadow-none rounded-b-[32px] md:rounded-b-[60px] xl:rounded-b-none xl:rounded-l-[60px] xl:h-[384px]">



            <div className="w-full content-stretch flex flex-col gap-[24px] md:gap-[40px] items-center xl:items-start relative shrink-0 h-full">



              <div className="content-stretch flex flex-col gap-[24px] md:gap-[40px] items-center xl:items-start relative shrink-0 w-full max-w-[572px]">



                <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[32px] md:text-[40px] text-center xl:text-left w-[min-content]" data-tina-field={fieldFor(editable, "title")}>



                  {title}



                </p>



                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[18px] md:text-[22px] text-center xl:text-left w-[min-content] whitespace-pre-wrap" data-tina-field={fieldFor(editable, "description")}>



                  {description}



                </p>



                <a href={ctaHref || "#"} className="bg-[#8949ff] content-stretch flex h-auto min-h-[52px] items-center justify-center px-[24px] md:px-[40px] py-[16px] relative rounded-full shrink-0 no-underline hover:scale-105 transition-transform w-[90%] sm:w-auto max-w-full" data-tina-field={fieldFor(editable?.button, "label")}>



                  <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.3] not-italic relative shrink-0 text-[13px] sm:text-[14px] md:text-[18px] text-center text-white tracking-[1px] md:tracking-[1.8px] uppercase whitespace-normal break-words max-w-[100%]">{ctaLabel}</p>



                </a>



              </div>



            </div>



          </div>



          <div className="w-full xl:w-[640px] flex-shrink-0 relative order-1 xl:order-2 shadow-xl xl:shadow-none rounded-t-[32px] md:rounded-t-[60px] xl:rounded-none xl:rounded-tr-[60px] xl:rounded-br-[60px] overflow-hidden xl:h-[468px]">



             <img src="/images/Persona-imagen-banner-mobile.png" className="w-full h-auto block md:hidden object-cover object-bottom" alt="" />



             <img src="/images/Persona-imagen-banner-tablet.png" className="hidden md:block xl:hidden w-full h-auto object-cover object-bottom" alt="" />



             <img src="/images/Persona-imagen-banner-desktop.png" className="hidden xl:block w-full h-[468px] object-cover object-right xl:rounded-tr-[60px] xl:rounded-br-[60px]" alt="" />



          </div>



        </div>



      </div>



    </section>



  );



}



function BenefitsSection({ content, editable }: { content: any; editable?: any }) {



  if (!content?.benefits) return null;



  return (



    <section className="bg-[#f7f5f9] mb-[-2px] relative shrink-0 w-full pt-[40px] xl:pt-[80px]">



      <div className="w-full max-w-[1460px] mx-auto px-[20px] md:px-[40px] 2xl:px-[80px] pb-[40px] md:pb-[60px] xl:pb-[80px] pt-0">



        <div className="w-full flex flex-col xl:flex-row xl:items-end xl:justify-center">



          <div className="bg-[#fcc63d] w-full xl:w-[640px] px-[24px] md:px-[72px] py-[40px] md:py-[70px] flex items-center justify-center xl:justify-start order-2 xl:order-1 relative shadow-xl xl:shadow-none rounded-b-[32px] md:rounded-b-[60px] xl:rounded-b-none xl:rounded-l-[60px] xl:h-[384px]">



            <div className="w-full content-stretch flex flex-col gap-[24px] md:gap-[40px] items-center xl:items-start relative shrink-0 h-full">



              <Frame5 content={content} editable={editable} />



            </div>



          </div>



          <div className="w-full xl:w-[640px] flex-shrink-0 relative order-1 xl:order-2 shadow-xl xl:shadow-none rounded-t-[32px] md:rounded-t-[60px] xl:rounded-none xl:rounded-tr-[60px] xl:rounded-br-[60px] overflow-hidden xl:h-[468px]">



             <img src="/images/Persona-imagen-banner-mobile.png" className="w-full h-auto block md:hidden object-cover object-bottom" alt="" />



             <img src="/images/Persona-imagen-banner-tablet.png" className="hidden md:block xl:hidden w-full h-auto object-cover object-bottom" alt="" />



             <img src="/images/Persona-imagen-banner-desktop.png" className="hidden xl:block w-full h-[468px] object-cover object-right xl:rounded-tr-[60px] xl:rounded-br-[60px]" alt="" />



          </div>



        </div>



      </div>



    </section>



  );



}



function NewsletterSection({ content }: { content: any }) {



  if (!content?.newsletter) return null;



  return (



      <section className="mb-[-2px] overflow-clip relative shrink-0 w-full bg-[url('/images/frame7.png')] bg-cover bg-center bg-no-repeat">



        <div className="w-full max-w-[1460px] mx-auto px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[56px] md:py-[80px] relative">



          <div className="content-stretch flex flex-col md:flex-row gap-[32px] lg:gap-[80px] items-center justify-center relative shrink-0 w-full">



            <div className="content-stretch flex flex-col gap-[24px] md:gap-[32px] items-start relative shrink-0 w-full lg:w-[495px]">



              <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[32px] md:text-[40px] text-white w-[min-content]">



                <p className="leading-[1.1]">{content.newsletter.title}</p>



              </div>



            <div className="flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] min-w-full relative shrink-0 text-[16px] text-white w-[min-content]">



              <p className="leading-[20px]">{content.newsletter.description}</p>



            </div>



              <div className="bg-[#f4f5f9] h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Full name">



                <div className="overflow-clip relative rounded-[inherit] size-full">



                  <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.1] left-[15px] not-italic text-[#9d9ba8] text-[18px] top-[calc(50%-10px)] whitespace-nowrap">{content.newsletter.emailPlaceholder || "Email"}</p>



                </div>



                <div aria-hidden="true" className="absolute border border-[#dbdcde] border-solid inset-0 pointer-events-none rounded-[8px]" />



              </div>



              <a href={content.newsletter.button?.href || "#"} className={`${MAIN_BUTTON_CLASS} shrink-0 w-full sm:w-auto`}>



                <p className={MAIN_BUTTON_TEXT_CLASS}>Suscribirme y Descargar</p>



              </a>



            </div>



          <div className="hidden lg:block">



            <Recurso1EfitecaCasa />



          </div>



        </div>



      </div>



    </section>



  );



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



    <div className="flex gap-[10px] items-center justify-center">



      {Array.from({ length: count }).map((_, index) => (



        <button



          key={index}



          onClick={() => onDotClick(index)}



          className={`transition-all duration-300 ${



            selectedIndex === index



              ? "bg-[#8949ff] w-[34px] h-[9px] rounded-[999px]"



              : "bg-[#d8d2e3] w-[9px] h-[9px] rounded-full"



          }`}



          aria-label={`Ir al testimonio ${index + 1}`}



          type="button"



        />



      ))}



    </div>



  );



}



export function FigmaFooter() {



  const links = getHeaderNavigation();



  return (



    <footer className="bg-[#080813] content-stretch flex flex-col gap-[40px] items-center overflow-hidden px-[20px] md:px-[40px] xl:px-[64px] 2xl:px-[80px] py-[80px] md:py-[120px] relative w-full text-left" data-name="Footer">



      <div className="absolute hidden md:block left-[75.26%] size-[806px] top-[79px] pointer-events-none">



        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 806 806">



          <circle cx="403" cy="403" fill="url(#footer_radial_1)" r="403" />



          <defs>



            <radialGradient cx="0" cy="0" gradientTransform="translate(403 403) rotate(90) scale(403)" gradientUnits="userSpaceOnUse" id="footer_radial_1" r="1">



              <stop stopColor="#4f3bf9" />



              <stop offset="1" stopColor="#3021ae" stopOpacity="0" />



            </radialGradient>



          </defs>



        </svg>



      </div>



      <div className="absolute hidden md:block left-[87.5%] size-[532px] top-[62px] pointer-events-none">



        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 532 532">



          <circle cx="266" cy="266" fill="url(#footer_radial_2)" r="266" />



          <defs>



            <radialGradient cx="0" cy="0" gradientTransform="translate(266 266) rotate(90) scale(266)" gradientUnits="userSpaceOnUse" id="footer_radial_2" r="1">



              <stop stopColor="#8949ff" />



              <stop offset="1" stopColor="#522c99" stopOpacity="0" />



            </radialGradient>



          </defs>



        </svg>



      </div>



        <div className="content-stretch grid grid-cols-1 gap-[40px] items-start relative shrink-0 w-full max-w-[1460px] md:grid-cols-[468px_minmax(0,1fr)_minmax(0,1fr)_minmax(260px,1fr)] md:gap-[49px]">



        <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">



          <div className="h-[56px] md:h-[79.206px] overflow-clip relative shrink-0 w-[236px] md:w-[332.818px]" data-name="Logo blanco">



            <Capa1 />



          </div>



          <p className="font-['Trueno:Light',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-white w-full">



            En Efiteca, somos expertos en transformar tu travesía hipotecaria en una experiencia digital sencilla, cómoda y transparente. Ofrecemos soluciones eficaces y personalizadas respaldadas por el Grupo Suncapital.



          </p>



          <Frame73 />



          <img



            alt="Registro oficial Banco de España número E377"



            className="h-[60.096px] object-contain relative shrink-0 w-[255px]"



            src="/images/footer-certification-white.png"



          />



        </div>



        <div className="content-stretch flex flex-col gap-[40px] items-start leading-[1.1] not-italic relative w-full">



          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#8949ff] text-[22px] w-full">Servicios</p>



          <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[22px] items-start relative shrink-0 text-[16px] text-white w-full">



            <a className="relative shrink-0 w-full no-underline" href={links.solutions}>Soluciones de hipoteca</a>



            <a className="relative shrink-0 w-full no-underline" href={links.simulator}>Simulador de hipoteca</a>



          </div>



        </div>



        <div className="content-stretch flex flex-col gap-[40px] items-start leading-[1.1] not-italic relative w-full">



          <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#8949ff] text-[22px] w-full">Empresa</p>



          <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[22px] items-start relative shrink-0 text-[16px] text-white w-full">



            <a className="relative shrink-0 w-full no-underline" href={links.about}>Sobre nosotros</a>



            <a className="relative shrink-0 w-full no-underline" href={links.contact}>Contacto</a>



            <a className="relative shrink-0 w-full no-underline" href={links.blog}>Blog</a>



          </div>



        </div>



        <div className="content-stretch flex flex-col gap-[24px] items-start relative w-full">



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#8949ff] text-[22px] w-full">Contacta</p>



          <a className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full text-white underline" href="mailto:clientes@efiteca.com">



            <svg aria-hidden="true" className="relative shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">



              <path d="M4 6h16v12H4V6Z" stroke="#ffffff" strokeWidth="2" />



              <path d="m4 7 8 6 8-6" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



            </svg>



            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] text-[16px] whitespace-nowrap">clientes@efiteca.com</span>



          </a>



          <a className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full text-white no-underline" href="mailto:info@efiteca.com">



            <svg aria-hidden="true" className="relative shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">



              <path d="M6.5 4.5h3l1.5 4-2 1.2c1 2.1 2.7 3.8 4.8 4.8l1.2-2 4 1.5v3c0 1.1-.9 2-2 2C10.4 19 5 13.6 5 7c0-1.1.4-2.5 1.5-2.5Z" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />



            </svg>



            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] text-[16px] whitespace-nowrap">info@efiteca.com</span>



          </a>



          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] relative shrink-0 text-[#8949ff] text-[22px] w-full">Simulador</p>



          <a className={`${MAIN_BUTTON_CLASS} shrink-0 w-full sm:w-auto`} href={links.simulator}>



            <span className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[#0f172b] text-[18px] text-center tracking-[1.8px] uppercase whitespace-nowrap">Ver diagnóstico</span>



          </a>



        </div>



      </div>



        <div className="h-0 relative shrink-0 w-full max-w-[1460px]">



        <div className="absolute inset-[-1px_0]">



          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 2">



            <path d="M1440 1H0" stroke="#828282" strokeWidth="2" />



          </svg>



        </div>



      </div>



        <div className="content-stretch flex flex-col gap-[16px] font-['Inter:Regular',sans-serif] font-normal items-start justify-between not-italic relative shrink-0 w-full max-w-[1460px] md:flex-row md:gap-[40px]">



        <p className="leading-[1.1] relative shrink-0 text-[16px] text-white">© Todos los derechos reservados.</p>



        <p className="leading-[1.1] relative shrink-0 text-[#bec5d2] text-[12px] md:text-right">Protección de Datos | Canal Ético y Reclamaciones | Aviso Legal</p>



      </div>



    </footer>



  );



}



