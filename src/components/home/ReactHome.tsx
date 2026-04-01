import React, { useState, useCallback, useEffect } from 'react';
import { svgPaths } from '../../data/svgData';
import useEmblaCarousel from 'embla-carousel-react';
import * as Accordion from '@radix-ui/react-accordion';




























function Frame74({ content }: { content: any }) {
  if (!content?.hero) return null;
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[590px] items-start justify-center pl-[40px] pr-[200px] relative rounded-[20px] shrink-0 w-[688px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px]">
        {content.hero.background_layer_1 && <img alt="" className="absolute max-w-none object-cover opacity-60 rounded-[20px] size-full" src={content.hero.background_layer_1} />}
        {content.hero.background_layer_2 && <img alt="" className="absolute max-w-none object-cover rounded-[20px] size-full" src={content.hero.background_layer_2} />}
      </div>
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

function Frame({ content }: { content: any }) {
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
    <div className="content-stretch flex flex-col gap-[24px] items-start leading-[1.1] not-italic relative shrink-0 text-[#080813] text-center w-full">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[40px] w-full">{content.services.title}</p>
      <p className="font-['Trueno:Light',sans-serif] relative shrink-0 text-[18px] w-full">{content.services.description}</p>
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
    <div className="relative shrink-0 w-[1300px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <Frame2 content={content} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">
        <p className="leading-[24px]">arrow_forward</p>
      </div>
    </div>
  );
}

function Frame113({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[165px] items-start justify-center left-[18px] p-[16px] rounded-[16px] top-[298px] w-[287px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">{item.description}</p>
      <a href={item.button?.href || "#"} className="content-stretch flex gap-[8px] items-center relative shrink-0 no-underline group hover:scale-105 transition-transform">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.1]">{item.button?.label}</p>
        </div>
        <Container />
      </a>
    </div>
  );
}

function Frame111({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="h-[479px] relative rounded-[20px] shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={item.image} />
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
      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">
        <p className="leading-[24px]">arrow_forward</p>
      </div>
    </div>
  );
}

function Frame114({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[165px] items-start justify-center left-[18px] p-[16px] rounded-[16px] top-[298px] w-[287px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">{item.description}</p>
      <a href={item.button?.href || "#"} className="content-stretch flex gap-[8px] items-center relative shrink-0 no-underline group hover:scale-105 transition-transform">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.1]">{item.button?.label}</p>
        </div>
        <Container1 />
      </a>
    </div>
  );
}

function Frame112({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="h-[479px] relative rounded-[20px] shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[137.58%] left-[-123.38%] max-w-none top-[-37.58%] w-[306.04%]" src={item.image} />
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
      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">
        <p className="leading-[24px]">arrow_forward</p>
      </div>
    </div>
  );
}

function Frame117({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[165px] items-start justify-center left-[18px] p-[16px] rounded-[16px] top-[298px] w-[287px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">{item.description}</p>
      <a href={item.button?.href || "#"} className="content-stretch flex gap-[8px] items-center relative shrink-0 no-underline group hover:scale-105 transition-transform">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.1]">{item.button?.label}</p>
        </div>
        <Container2 />
      </a>
    </div>
  );
}

function Frame116({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="h-[479px] relative rounded-[20px] shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[118.79%] left-[-90.84%] max-w-none top-[-18.79%] w-[264.21%]" src={item.image} />
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
      <div className="flex flex-col material-icons justify-center leading-[0] not-italic relative shrink-0 size-[24px] text-[#8949ff] text-[24px] text-center">
        <p className="leading-[24px]">arrow_forward</p>
      </div>
    </div>
  );
}

function Frame119({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] h-[165px] items-start justify-center left-[18px] p-[16px] rounded-[16px] top-[298px] w-[287px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[15px] w-[min-content]">{item.description}</p>
      <a href={item.button?.href || "#"} className="content-stretch flex gap-[8px] items-center relative shrink-0 no-underline group hover:scale-105 transition-transform">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#8949ff] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.1]">{item.button?.label}</p>
        </div>
        <Container3 />
      </a>
    </div>
  );
}

function Frame118({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="h-[479px] relative rounded-[20px] shrink-0 w-full">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[117.95%] left-[-91.59%] max-w-none top-[-14.82%] w-[262.05%]" src={item.image} />
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
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative">
        <div className="content-stretch flex flex-col gap-[16px] h-[557px] items-start relative shrink-0 w-[323px]" data-name="Component 7">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[28px] w-full">{items[0]?.title}</p>
          <Frame111 item={items[0]} />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] h-[557px] items-start relative shrink-0 w-[323px]" data-name="Component 8">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[28px] w-full">{items[1]?.title}</p>
          <Frame112 item={items[1]} />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] h-[557px] items-start relative shrink-0 w-[323px]" data-name="Component 9">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[28px] w-full">{items[2]?.title}</p>
          <Frame116 item={items[2]} />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] h-[557px] items-start relative shrink-0 w-[323px]" data-name="Component 10">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[28px] w-full">{items[3]?.title}</p>
          <Frame118 item={items[3]} />
        </div>
      </div>
    </div>
  );
}

function Frame18({ content }: { content: any }) {
  if (!content) return null;
  return (
    <div className="mb-[-60px] relative rounded-[60px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[60px]">
        <div className="absolute inset-0 overflow-hidden rounded-[60px]">
          <img alt="" className="absolute h-[299.1%] left-[-0.14%] max-w-none top-[-166.27%] w-[100.14%]" src={content.hero?.images?.[1]} />
        </div>
        <div className="absolute bg-[#f7f5f9] inset-0 rounded-[60px]" />
      </div>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[60px] items-center px-[231px] py-[80px] relative w-full">
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

function BackgroundBorder({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="bg-[#f7f5f9] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[10px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[9px] relative size-full">
          <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
            <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={item.image} />
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#9d9ba8] text-[18px]">
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

function Frame97({ content }: { content: any }) {
  if (!content?.whoIsItFor) return null;
  const items = content.whoIsItFor.items || [];
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[1280px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[#080813] text-[40px] text-center w-full">{content.whoIsItFor.title}</p>
      <div className="content-stretch flex gap-[24px] h-[90px] items-start relative shrink-0 w-full">
        <BackgroundBorder item={items[0]} />
        <BackgroundBorder item={items[1]} />
        <BackgroundBorder item={items[2]} />
        <BackgroundBorder item={items[3]} />
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start py-[40px] relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[40px] text-center w-full">
        <p className="leading-[1.1]">¿Para quién son nuestros servicios?</p>
      </div>
      <Frame97 />
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
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Analizamos tu situación actual y objetivo hipotecario para entender si existe una ruta viable y qué opciones pueden aplicarse a tu perfil.</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Gestionamos la comunicación entre entidades para asegurar que el proceso avance correctamente y llegues a firma sin retrasos ni sorpresas.</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Evaluamos tu perfil financiero y laboral para determinar qué bancos podrían aprobar tu solicitud y bajo qué condiciones realistas posibles.</p>
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
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[15px] w-full">Definimos el camino más conveniente según tu perfil, priorizando viabilidad, tiempos de aprobación y condiciones sostenibles en el largo plazo.</p>
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
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[40px] w-full">
        <p className="leading-[1.1]">Conoce nuestro paso a paso</p>
      </div>
      <Frame63 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[80px] items-center justify-center py-[40px] relative shrink-0 w-full" data-name="Container">
      <img alt="" className="h-[481px] object-cover rounded-[24px] shrink-0 w-[452px]" src="/images/box.png" />
      <Container5 />
    </div>
  );
}

function StaggeredMetricsSection() {
  return (
    <div className="mb-[-2px] relative shrink-0 w-full " data-name="Staggered Metrics Section">
      <div className="content-stretch flex flex-col items-start px-[240px] py-[80px] relative w-full ">
        <Frame62 />
        <Container4 />
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full ">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] not-italic relative shrink-0 text-[40px] text-center text-white w-full">Conoce nuestros beneficios</p>
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
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1300px]">
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

function Container6() {
  return (
    <div className="content-stretch flex gap-[24px] h-[194px] items-start relative shrink-0 w-[1280px]" data-name="Container">
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
      <Container15 />
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

function Frame95() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full bg-[url('/images/frame7.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[230px] py-[80px] relative size-full">
          <Frame19 />
          <Container6 />
          <Frame96 />
        </div>
      </div>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-2px] relative shrink-0 w-full">
      <Frame95 />
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
      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate quam aliquam lacus. Quis elit sed pharetra facilisis.</p>
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
      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate quam aliquam lacus. Quis elit sed pharetra facilisis.</p>
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
      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate quam aliquam lacus. Quis elit sed pharetra facilisis.</p>
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
      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate quam aliquam lacus. Quis elit sed pharetra facilisis.</p>
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
      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#9d9ba8] text-[16px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Gravida amet tempus id tincidunt in lorem sem tincidunt. Tincidunt vitae tellus consectetur dui morbi vulputate quam aliquam lacus. Quis elit sed pharetra facilisis.</p>
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
  return (
    <div className="mb-[-2px] relative shrink-0 w-full">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[230px] py-[80px] relative w-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[572px]">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[40px] text-center w-[min-content]">{content.partners.title}</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[18px] text-center w-[min-content]">{content.partners.description}</p>
          </div>
          <div className="bg-white content-stretch flex gap-[80px] items-center relative shrink-0 overflow-x-auto no-scrollbar w-full justify-center">
            {content.partners.items?.map((partner: any, idx: number) => (
              <div key={idx} className="h-[28px] relative shrink-0" data-name="span">
                <p className="font-['Inter:Black',sans-serif] font-black leading-[28px] not-italic text-[#9d9ba8] text-[20px] tracking-[-1px] whitespace-nowrap uppercase">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="content-stretch flex flex-col items-center not-italic relative shrink-0">
      <p className="font-['Inter:Light',sans-serif] font-light leading-none relative shrink-0 text-[#8949ff] text-[150px] lg:text-[199.847px] text-center whitespace-nowrap">{item.value}</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-w-full relative shrink-0 text-[#828282] text-[22px] w-[min-content] text-center">{item.title}</p>
    </div>
  );
}

function Frame29({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[40px] h-full items-start justify-end leading-[1.1] not-italic relative shrink-0 w-[219.667px]">
      <p className="relative shrink-0 text-[#8949ff] text-[56px] tracking-[1px] whitespace-nowrap">{item.value}</p>
      <p className="min-w-full relative shrink-0 text-[#9d9ba8] text-[22px] w-[min-content]">{item.title}</p>
    </div>
  );
}

function Frame30({ item }: { item: any }) {
  if (!item) return null;
  return (
    <div className="content-stretch flex flex-col font-['Inter:Bold',sans-serif] font-bold gap-[40px] h-full items-start justify-end leading-[1.1] not-italic relative shrink-0 w-[219.667px]">
      <p className="relative shrink-0 text-[#8949ff] text-[56px] tracking-[1px] whitespace-nowrap">{item.value}</p>
      <p className="min-w-full relative shrink-0 text-[#9d9ba8] text-[22px] w-[min-content]">{item.title}</p>
    </div>
  );
}

function Frame5({ content }: { content: any }) {
  if (!content?.benefits) return null;
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[572px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[40px] text-center w-[min-content]">{content.benefits.title}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.1] min-w-full not-italic relative shrink-0 text-[#080813] text-[22px] text-center w-[min-content] whitespace-pre-wrap">
        {content.benefits.description}
      </p>
      <a href={content.benefits.ctaLink} className="bg-[#8949ff] content-stretch flex items-center justify-center px-[40px] py-[19px] relative rounded-[33554400px] shrink-0 no-underline hover:scale-105 transition-transform">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[1.8px] uppercase whitespace-nowrap">{content.benefits.ctaText}</p>
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

function Frame87({ content }: { content: any }) {
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
      <Recurso2EfitecaELinea />
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
  return <div className="absolute blur-[120px] h-[1291.797px] left-[266px] rounded-[33554400px] top-[464px] w-[1121.594px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1121.6 1291.8\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -85.538 -85.538 0 560.8 645.9)\\'><stop stop-color=\\'rgba(137,73,255,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(108,66,252,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(79,59,249,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />;
}

function Container24() {
  return <div className="absolute bg-[rgba(255,255,255,0.6)] h-[673px] left-0 top-0 w-[1920px]" data-name="Container" />;
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
      <div className="bg-[#fcc63d] content-stretch flex items-center justify-center px-[40px] py-[19px] relative rounded-[33554400px] shrink-0">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#0f172b] text-[18px] text-center tracking-[1.8px] uppercase whitespace-nowrap">ENVIAR</p>
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

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center mb-[-2px] py-[80px] relative shrink-0 w-full">
      <Container23 />
      <Container24 />
      <Container25 />
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

function Frame22() {
  return (
    <div className="bg-[#080813] content-stretch flex flex-col items-center mb-[-2px] py-[80px] relative shrink-0 w-[1920px]">
      <Section />
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
      <div className="bg-[#fcc63d] content-stretch flex items-center justify-center px-[40px] py-[19px] relative rounded-[33554400px] shrink-0">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#0f172b] text-[18px] text-center tracking-[1.8px] uppercase whitespace-nowrap">suscribirme y descargar</p>
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

function Frame1() {
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
      <Frame65 />
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

function Frame51() {
  return (
    <div className="bg-white mb-[-2px] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center px-[230px] py-[80px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#080813] text-[40px] text-center w-[min-content]">
            <p className="leading-[1.1]">Conoce nuestras ubicaciones</p>
          </div>
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#080813] text-[18px] text-center whitespace-nowrap">
            <p className="leading-[1.1]">Atendemos de forma digital con acompañamiento personalizado durante todo el proceso.</p>
          </div>
          <Frame77 />
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
  const faqItems = [
    { id: 'item-1', frame: <Frame53 />, content: "Analizamos tu historial financiero para entender qué tipo de hipoteca es la más viable para tu caso específico." },
    { id: 'item-2', frame: <Frame54 />, content: "Depende de la entidad, pero trabajamos para agilizar los procesos y obtener respuestas en tiempos récord." },
    { id: 'item-3', frame: <Frame55 />, content: "La estabilidad laboral y unos ingresos recurrentes son fundamentales para garantizar la aprobación del banco." },
    { id: 'item-4', frame: <Frame56 />, content: "Evaluamos las condiciones actuales de tu hipoteca y las comparamos con las mejores ofertas del mercado para ahorrarte dinero." },
    { id: 'item-5', frame: <Frame59 />, content: "Te acompañamos paso a paso, resolviendo tus dudas y encargándonos de la comunicación con el banco hasta la firma en notaría." },
  ];

  return (
    <Accordion.Root type="single" collapsible className="w-[787px] flex flex-col gap-[16px] items-start justify-center relative shrink-0">
      {faqItems.map((item) => (
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

function Frame52() {
  return (
    <div className="bg-[#ecddee] content-stretch flex flex-col items-center mb-[-2px] px-[230px] py-[80px] relative shrink-0 w-[1920px]">
      <Container46 />
    </div>
  );
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

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center mb-[-2px] py-[80px] relative shrink-0 w-full">
      <Frame126 />
      <Frame127 />
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
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <div className="h-[79.206px] overflow-clip relative shrink-0 w-[332.818px]" data-name="Logo blanco">
        <Capa1 />
      </div>
      <p className="font-['Trueno:Light',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[16px] text-white w-[min-content]"></p>
      <Frame73 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[22px] items-start relative shrink-0 text-[16px] text-white w-full">
      <p className="relative shrink-0 w-full">Soluciones de hipoteca</p>
      <p className="relative shrink-0 w-full">Simulador de hipoteca</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start leading-[1.1] not-italic relative shrink-0 w-[138px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#8949ff] text-[22px] w-full">Servicios</p>
      <Frame66 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[22px] items-start relative shrink-0 text-[16px] text-white w-full">
      <p className="relative shrink-0 w-full">Sobre nosotros</p>
      <p className="relative shrink-0 w-full">Contacto</p>
      <p className="relative shrink-0 w-full">Blog</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start leading-[1.1] not-italic relative shrink-0 w-[138px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#8949ff] text-[22px] w-full">Empresa</p>
      <Frame67 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[180px] items-start relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[1.1] min-w-full not-italic relative shrink-0 text-[#8949ff] text-[22px] w-[min-content]">Simulador</p>
      <div className="bg-[#fcc63d] content-stretch flex items-center justify-center px-[40px] py-[19px] relative rounded-[33554400px] shrink-0">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[27px] not-italic relative shrink-0 text-[#0f172b] text-[18px] text-center tracking-[1.8px] uppercase whitespace-nowrap">Ver diagnóstico</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <Frame71 />
      <Frame70 />
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Img() {
  return (
    <div className="h-[40px] relative shrink-0 w-[167.719px]" data-name="img">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src="/images/imgImg.png" />
    </div>
  );
}

function Frame136() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[40px] items-center leading-[1.1] not-italic relative text-[#62748e] text-[15px] text-center whitespace-nowrap">
        <p className="relative shrink-0">{`Soluciones de vivienda `}</p>
        <p className="relative shrink-0">Simulador de hipoteca</p>
        <p className="relative shrink-0">Sobre nosotros</p>
        <p className="relative shrink-0">Blog</p>
        <p className="relative shrink-0">Contacto</p>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="absolute left-[160.3px] size-[16px] top-[18px]" data-name="ArrowRight">
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
  return (
    <div className="bg-[#fcc63d] flex-[1_0_0] h-[52px] min-h-px min-w-px relative rounded-[16px]" data-name="button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[92.5px] not-italic text-[#080813] text-[16px] text-center top-[15px] whitespace-nowrap">{`Asesor Experto `}</p>
        <ArrowRight />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[52px] relative shrink-0 w-[208.297px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Button />
      </div>
    </div>
  );
}

export function FigmaHeader() {
  return (
    <div className="bg-white flex justify-between h-[80px] items-center px-[40px] pointer-events-auto sticky top-0 w-full z-50 shadow-sm" data-name="div">
      <Img />
      <Frame136 />
      <Container51 />
    </div>
  );
}

function Frame49({ content }: { content: any }) {
  if (!content?.metrics) return null;
  const items = content.metrics.items || [];
  return (
    <div className="content-stretch flex flex-col items-center gap-[60px] w-full">
      <div className="content-stretch flex gap-[80px] items-center justify-center w-full">
        {items[0] && <Frame28 item={items[0]} />}
        {items[1] && <Frame29 item={items[1]} />}
        {items[2] && <Frame30 item={items[2]} />}
      </div>
    </div>
  );
}

export default function Home({ content }: { content: any }) {
  return (
    <div className="bg-white content-stretch flex flex-col items-center pb-[2px] relative size-full overflow-hidden" data-name="Home">
      <style>{`
        button, .bg-[#8949ff], .bg-[#fcc63d], .cursor-pointer, [role="button"] {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        button:hover, .bg-[#8949ff]:hover, .bg-[#fcc63d]:hover, .cursor-pointer:hover, [role="button"]:hover {
          transform: scale(1.05);
          filter: brightness(1.15);
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.2) !important;
        }
        button:active, .bg-[#8949ff]:active, .bg-[#fcc63d]:active, .cursor-pointer:active, [role="button"]:active {
          transform: scale(0.95);
        }
      `}</style>
      <Frame content={content} />
      <Frame18 content={content} />
      <StaggeredMetricsSection content={content} />
      <Frame122 content={content} />
      <Frame21 content={content} />
      <Frame86 content={content} />
      <div className="bg-white content-stretch flex flex-col items-center mb-[-2px] px-[250px] py-[80px] relative shrink-0 w-[1920px]" data-name="cifras">
        <Frame49 content={content} />
      </div>
      <Frame85 content={content} />
      <Frame83 content={content} />
      <Frame22 content={content} />
      <Frame1 content={content} />
      <Frame51 content={content} />
      <Frame52 content={content} />
      <Frame60 content={content} />
      
    </div>
  );
}
export function FigmaFooter() {
  return (
    <footer className="bg-[#080813] relative overflow-hidden px-[20px] sm:px-[60px] md:px-[120px] lg:px-[240px] py-[80px] md:py-[120px] w-full" data-name="Footer">
      
        <div className="absolute left-[1445px] size-[806px] top-[79px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 806 806">
            <circle cx="403" cy="403" fill="url(#footer_radial_1)" id="Ellipse 2" r="403" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(403 403) rotate(90) scale(403)" gradientUnits="userSpaceOnUse" id="footer_radial_1" r="1">
                <stop stopColor="#4F3BF9" />
                <stop offset="1" stopColor="#3021AE" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <Frame72 />
        <div className="h-0 mt-[80px] mb-[60px] relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 2">
              <path d="M1440 1H0" id="Vector 453" stroke="var(--stroke-0, #828282)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[1680px] size-[532px] top-[62px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 532 532">
            <circle cx="266" cy="266" fill="url(#footer_radial_2)" id="Ellipse 1" r="266" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(266 266) rotate(90) scale(266)" gradientUnits="userSpaceOnUse" id="footer_radial_2" r="1">
                <stop stopColor="#8949FF" />
                <stop offset="1" stopColor="#522C99" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      
    </footer>
  );
}