import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface BlogPostProps {
  title: string;
  category: string;
  publishedAt: string;
  excerpt: string;
  image?: string;
  children: React.ReactNode;
  relatedPosts?: Array<{
    slug: string;
    title: string;
    excerpt: string;
    lang: string;
    image?: string;
  }>;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const BRAND_PURPLE = '#8948ff';
const BRAND_YELLOW = '#fcc63d';
const BRAND_DARK = '#080813';
const BRAND_INK = '#0b0b13';

function useToc(articleRef: React.RefObject<HTMLElement | null>) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!articleRef.current) return;
    const headings = Array.from(articleRef.current.querySelectorAll('h2, h3'));
    const items: TocItem[] = headings.map((h) => {
      if (!h.id) {
        h.id = h.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') ?? '';
      }
      return { id: h.id, text: h.textContent ?? '', level: Number(h.tagName[1]) };
    });
    setToc(items);
  }, [articleRef]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveId(e.target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );
    document.querySelectorAll('h2[id], h3[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  return { toc, activeId };
}

export const ReactBlogPost: React.FC<BlogPostProps> = ({
  title,
  category,
  publishedAt,
  excerpt,
  image,
  children,
  relatedPosts = [],
}) => {
  const articleRef = useRef<HTMLElement>(null);
  const { toc, activeId } = useToc(articleRef);

  const lang = typeof window !== 'undefined'
    ? (window.location.pathname.startsWith('/en') ? 'en' : 'es')
    : 'es';

  const categoryLabel: Record<string, string> = {
    corporate: 'Corporativo',
    market: 'Mercado',
    insight: 'Análisis',
  };

  return (
    <div style={{ backgroundColor: '#f1f2f4', minHeight: '100vh' }}>
      <a href="https://wa.link/rmtjml" target="_blank" rel="noopener noreferrer" className="fixed bottom-[24px] right-[24px] z-40 inline-flex items-center gap-[8px] rounded-full bg-[#25d366] px-[20px] py-[12px] text-[15px] font-bold text-white no-underline shadow-[0px_8px_24px_rgba(37,211,102,0.4)] transition-all duration-300 hover:bg-[#1db954] hover:shadow-[0px_12px_32px_rgba(37,211,102,0.65)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]" aria-hidden="true"><path d="M12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 13.66 3.45 15.22 4.23 16.56L3 21L7.58 19.8C8.9 20.58 10.4 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 8.8C9 12.07 11.74 14.8 15 14.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /><path d="M14.2 11.4L15.9 10.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
        WhatsApp
      </a>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden bg-[#7c42f3] px-[20px] pt-[120px] pb-[56px] md:px-[40px] md:pt-[140px] md:pb-[72px] xl:px-[160px] 2xl:px-[160px]">
        <img src="/images/about-hero-texture.webp" alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_24%_112%,rgba(8,8,19,0.42),transparent_34%)]" />
        <img src="/images/about-hero-outline.svg" alt="" className="pointer-events-none absolute bottom-[-232px] right-[-300px] hidden w-[900px] max-w-none opacity-80 lg:block xl:bottom-[-280px] xl:right-[-220px] xl:w-[1040px]" />

        <div className="relative z-10">
          {/* Breadcrumbs — auto-generated from title + lang */}
          <nav aria-label="Breadcrumb" className="mb-[24px]">
            <ol className="flex flex-wrap items-center gap-[6px] text-[13px]">
              <li>
                <a href={`/${lang}/`} className="text-white/60 hover:text-white transition-colors no-underline">
                  {lang === 'en' ? 'Home' : 'Inicio'}
                </a>
              </li>
              <li aria-hidden="true" className="text-white/30">›</li>
              <li>
                <a href={`/${lang}/news/`} className="text-white/60 hover:text-white transition-colors no-underline">
                  Blog
                </a>
              </li>
              <li aria-hidden="true" className="text-white/30">›</li>
              <li>
                <span className="text-white/90 line-clamp-1" aria-current="page">{title}</span>
              </li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-[12px] mb-[20px]">
              <div className="inline-flex items-center gap-[10px] rounded-full border border-[#c993ff] bg-white/10 px-[16px] py-[8px]">
                <span className="h-[8px] w-[8px] rounded-full bg-[#fcc63d]" />
                <span className="text-[12px] font-bold text-[#fcc63d] uppercase tracking-[0.18em]">
                  {categoryLabel[category] ?? category}
                </span>
              </div>
              <span className="text-white/50 text-[13px]">{publishedAt}</span>
            </div>

            <h1 className="text-[32px] md:text-[52px] font-bold text-white leading-[1.08] mb-[20px] max-w-[820px]">
              {title}
            </h1>

            <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.5] max-w-[680px]">
              {excerpt}
            </p>

            <p className="mt-[16px] text-[13px] text-white/35">
              Lectura: ~6 min · {categoryLabel[category] ?? category}
            </p>
          </motion.div>
        </div>

        {image && (
          <div className="relative z-10 mt-[48px] w-full overflow-hidden rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.3)]">
            <img
              src={image}
              alt={title}
              className="w-full h-[260px] md:h-[420px] xl:h-[520px] object-cover object-[50%_40%]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        )}
      </header>

      {/* ── MAIN GRID ────────────────────────────────────────────────── */}
      <div className="px-[20px] py-[56px] md:px-[40px] md:py-[72px] xl:px-[160px] 2xl:px-[160px]">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_220px] gap-12 xl:gap-16">

          {/* LEFT SIDEBAR — Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-10">
              {toc.length > 0 && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: `${BRAND_INK}60` }}>
                    Contenido
                  </p>
                  <nav className="space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm leading-snug transition-all duration-200 py-1 border-l-2 pl-3 ${
                          item.level === 3 ? 'ml-3 text-[0.8rem]' : ''
                        }`}
                        style={{
                          borderColor: activeId === item.id ? BRAND_PURPLE : 'transparent',
                          color: activeId === item.id ? BRAND_PURPLE : `${BRAND_INK}60`,
                          fontWeight: activeId === item.id ? 600 : 400,
                        }}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* CTA sidebar card */}
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: '#ffffff', boxShadow: '0 10px 30px rgba(16,23,20,0.06)' }}
              >
                <p className="text-sm font-bold text-[#0b0b13] mb-1">¿Necesitas asesoría?</p>
                <p className="text-xs leading-relaxed mb-4" style={{ color: `${BRAND_INK}60` }}>
                  Habla con un experto hipotecario de Efiteca hoy mismo.
                </p>
                <a
                  href={`/${lang}/contacto/`}
                  className="text-xs font-bold uppercase tracking-wider transition-opacity hover:opacity-70"
                  style={{ color: BRAND_PURPLE }}
                >
                  Contactar →
                </a>
              </div>
            </div>
          </aside>

          {/* CENTER — Article */}
          <main>
            <article
              ref={articleRef}
              className="prose prose-slate prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-[#0b0b13]
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-8
                prose-p:text-[#0b0b13]/75 prose-p:leading-relaxed
                prose-img:rounded-3xl prose-img:shadow-lg prose-img:w-full
                prose-blockquote:border-l-4 prose-blockquote:not-italic prose-blockquote:bg-[#8948ff]/5 prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-2xl
                prose-strong:text-[#0b0b13] prose-strong:font-bold
                prose-a:text-[#8948ff] prose-a:no-underline hover:prose-a:underline
                prose-code:bg-[#f1f2f4] prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-[#8948ff]
                prose-code:before:content-none prose-code:after:content-none"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {children}
            </article>

            {/* ── NEWSLETTER BLOCK ─────────────────────────────────────── */}
            <div
              className="mt-20 p-8 md:p-12 rounded-[2rem] relative overflow-hidden"
              style={{ backgroundColor: BRAND_DARK }}
            >
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${BRAND_PURPLE}30, transparent 70%)`,
                  transform: 'translate(30%, -30%)',
                }}
              />
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: BRAND_YELLOW }}>
                  Newsletter
                </p>
                <h3 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Mantente informado
                </h3>
                <p className="text-white/60 mb-8 max-w-md">
                  Recibe las últimas noticias y guías sobre el mercado hipotecario directamente en tu correo.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ '--tw-ring-color': `${BRAND_PURPLE}50` } as React.CSSProperties}
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-2xl font-bold transition-all"
                    style={{
                      backgroundColor: BRAND_YELLOW,
                      color: '#0f172b',
                      boxShadow: '0 25px 50px 0px rgba(252,198,61,0.25)',
                    }}
                  >
                    Suscribirme
                  </button>
                </form>
              </div>
            </div>
          </main>

          {/* RIGHT SIDEBAR — Author & Share */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-10">
              {/* Author */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: `${BRAND_INK}60` }}>
                  Autoría
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
                    style={{ backgroundColor: BRAND_YELLOW, color: BRAND_INK }}
                  >
                    EF
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: BRAND_INK }}>Equipo Efiteca</p>
                    <p className="text-xs" style={{ color: `${BRAND_INK}50` }}>Expertos hipotecarios</p>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: `${BRAND_INK}60` }}>
                  Compartir
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      label: 'LinkedIn',
                      icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z',
                      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`,
                    },
                    {
                      label: 'Twitter/X',
                      icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
                      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(title)}`,
                    },
                    {
                      label: 'WhatsApp',
                      icon: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z',
                      href: `https://wa.me/?text=${encodeURIComponent(`${title} — ${typeof window !== 'undefined' ? window.location.href : ''}`)}`,
                    },
                  ].map(({ label, icon, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm font-medium transition-all group"
                      style={{ color: `${BRAND_INK}60` }}
                      aria-label={`Compartir en ${label}`}
                    >
                      <div
                        className="w-9 h-9 rounded-full border flex items-center justify-center transition-all group-hover:border-[#8948ff] group-hover:text-[#8948ff]"
                        style={{ borderColor: `${BRAND_INK}15` }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
                        </svg>
                      </div>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* ── RELATED POSTS ─────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section
          className="py-20 border-t"
          style={{ backgroundColor: '#ffffff', borderColor: `${BRAND_INK}08` }}
        >
          <div className="px-[20px] md:px-[40px] xl:px-[160px] 2xl:px-[160px]">
            <h2 className="text-3xl font-bold mb-12" style={{ color: BRAND_INK, fontFamily: 'Inter, sans-serif' }}>
              Sigue leyendo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <a
                  key={post.slug}
                  href={`/${post.lang}/news/${post.slug}/`}
                  className="group flex flex-col rounded-[1.5rem] overflow-hidden transition-all"
                  style={{ backgroundColor: '#f1f2f4', boxShadow: '0 10px 30px rgba(16,23,20,0.05)' }}
                >
                  <div className="aspect-video overflow-hidden bg-white/50">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-4xl"
                        style={{ background: `linear-gradient(135deg, ${BRAND_PURPLE}15, ${BRAND_YELLOW}15)` }}
                      >
                        🏠
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-lg font-bold line-clamp-2 mb-2 transition-colors group-hover:text-[#8948ff]"
                      style={{ color: BRAND_INK, fontFamily: 'Inter, sans-serif' }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-sm line-clamp-2" style={{ color: `${BRAND_INK}60` }}>
                      {post.excerpt}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
