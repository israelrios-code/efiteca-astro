import React from 'react';
import { motion } from 'motion/react';

/**
 * React404 — Página 404 del UI KIT de Efiteca.
 * Detecta el idioma del pathname para construir los CTAs dinámicamente.
 * Hero con gradiente púrpura oficial + botón Pill Amarillo con glow.
 */
export const React404: React.FC = () => {
  // Detect lang client-side (SSR defaults to /es)
  const lang = typeof window !== 'undefined'
    ? (window.location.pathname.startsWith('/en') ? 'en' : 'es')
    : 'es';

  const copy = {
    es: {
      subtitle: '¡Ups! Esta página se quedó fuera de mercado.',
      body: 'La ruta que buscas no existe o ha sido movida. No te preocupes, te ayudamos a recalcular el camino y encontrar la hipoteca que necesitas.',
      cta1: 'Volver al Inicio',
      cta2: 'Ver Soluciones',
    },
    en: {
      subtitle: 'Oops! This page has left the market.',
      body: "The page you're looking for doesn't exist or has been moved. Don't worry, let's help you find the right path.",
      cta1: 'Back to Home',
      cta2: 'View Solutions',
    },
  }[lang];

  const prefix = `/${lang}`;

  return (
    <div
      className="min-h-[90vh] flex flex-col items-center justify-center relative overflow-hidden text-center"
      style={{
        background:
          'radial-gradient(circle at 20% 50%, rgba(137,72,255,0.14), transparent 40%), radial-gradient(circle at 80% 50%, rgba(79,59,255,0.10), transparent 40%), #080813',
      }}
    >
      {/* Decorative blurs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[80px] pointer-events-none" style={{ backgroundColor: 'rgba(137,72,255,0.15)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: 'rgba(252,198,61,0.08)' }} />

      <div className="relative z-10 px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated 404 number */}
          <div
            className="text-[clamp(100px,20vw,200px)] font-bold leading-none"
            style={{
              fontFamily: 'Inter, sans-serif',
              background: 'linear-gradient(135deg, #8948ff 0%, #4f3bff 50%, #8948ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            404
          </div>

          {/* Divider */}
          <div className="w-24 h-1 mx-auto my-6 rounded-full" style={{ backgroundColor: '#fcc63d' }} />

          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            {copy.subtitle}
          </h1>

          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md mx-auto">
            {copy.body}
          </p>

          {/* CTA Buttons — UI KIT Pill */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary: Pill Amarillo */}
            <a
              href={`${prefix}/`}
              className="px-10 py-4 font-bold rounded-full transition-all text-base"
              style={{
                backgroundColor: '#fcc63d',
                color: '#0f172b',
                boxShadow: '0 25px 50px 0px rgba(252,198,61,0.3)',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {copy.cta1}
            </a>

            {/* Secondary: Outline Púrpura */}
            <a
              href={`${prefix}/soluciones-vivienda/`}
              className="px-10 py-4 font-bold rounded-full transition-all hover:bg-white/5 text-base"
              style={{
                border: '2px solid #8948ff',
                color: '#8948ff',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {copy.cta2}
            </a>
          </div>
        </motion.div>

        {/* Floating house icon */}
        <motion.div
          className="mt-20"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-20 h-20 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.18, color: '#8948ff' }}
          >
            <path d="M3 12L12 3L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};
