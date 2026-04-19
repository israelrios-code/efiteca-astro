import React from 'react';

interface ReactLegalPageProps {
  title: string;
  children: React.ReactNode;
}

export const ReactLegalPage: React.FC<ReactLegalPageProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-[#f9f6f3]">
      <a href="https://wa.link/rmtjml" target="_blank" rel="noopener noreferrer" className="fixed bottom-[24px] right-[24px] z-40 inline-flex items-center gap-[8px] rounded-full bg-[#25d366] px-[20px] py-[12px] text-[15px] font-bold text-white no-underline shadow-[0px_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:-translate-y-[2px]">
        <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true"><path d="M12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 13.66 3.45 15.22 4.23 16.56L3 21L7.58 19.8C8.9 20.58 10.4 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 8.8C9 12.07 11.74 14.8 15 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M14.2 11.4L15.9 10.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        WhatsApp
      </a>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#7c42f3] px-[20px] py-[72px] md:px-[40px] md:py-[110px] xl:px-[160px] 2xl:px-[160px]">
        <img src="/images/about-hero-texture.webp" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_24%_112%,rgba(8,8,19,0.42),transparent_34%)]" />
        <img src="/images/about-hero-outline.svg" alt="" className="pointer-events-none absolute bottom-[-232px] right-[-300px] hidden w-[900px] max-w-none opacity-80 lg:block xl:bottom-[-280px] xl:right-[-220px] xl:w-[1040px]" />
        <div className="relative z-10 mx-auto max-w-[1460px] text-center">
          <div className="inline-flex items-center gap-[10px] rounded-full border border-[#c993ff] bg-white/10 px-[16px] py-[8px] mb-[24px]">
            <span className="h-[8px] w-[8px] rounded-full bg-[#fcc63d]" />
            <span className="text-[12px] font-bold leading-[1.1] text-[#fcc63d] uppercase tracking-[0.18em]">Efiteca · Legal</span>
          </div>
          <h1 className="text-[38px] md:text-[56px] font-bold text-white leading-[1.05] mb-[24px]">
            {title}
          </h1>
          <div className="w-[64px] h-[4px] mx-auto rounded-full bg-[#fcc63d]" />
        </div>
      </section>

      {/* Content */}
      <section className="px-[20px] py-[56px] md:px-[40px] md:py-[80px] xl:px-[160px] 2xl:px-[160px]">
        <div className="w-full rounded-[32px] bg-white px-[28px] py-[40px] md:px-[56px] md:py-[64px] shadow-[0_18px_60px_rgba(16,24,40,0.07)]">
          <article className="prose prose-slate prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-[#101828]
            prose-h2:text-[24px] prose-h2:mt-[40px] prose-h2:mb-[16px]
            prose-h3:text-[18px] prose-h3:mt-[28px] prose-h3:mb-[12px]
            prose-p:text-[#374151] prose-p:leading-[1.7]
            prose-li:text-[#374151]
            prose-strong:text-[#101828] prose-strong:font-bold
            prose-a:text-[#7c42f3] prose-a:no-underline hover:prose-a:underline
            prose-table:border-collapse prose-th:bg-[#f9f6f3] prose-th:p-3 prose-td:p-3 prose-td:border prose-td:border-[#e5e7eb]
            prose-code:bg-[#f3f0ff] prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-[#7c42f3] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
            [&_table]:block [&_table]:w-full [&_table]:overflow-x-auto [&_table]:whitespace-nowrap">
            {children}
          </article>
        </div>
      </section>
    </div>
  );
};
