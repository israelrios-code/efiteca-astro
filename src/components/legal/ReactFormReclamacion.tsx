import React, { useState } from 'react';

export const ReactFormReclamacion: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // TODO: Replace with real API endpoint call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const inputClass =
    'w-full px-5 py-4 bg-[#f1f2f4] border border-[#0b0b13]/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#8948ff]/30 focus:border-[#8948ff] transition-all text-[#0b0b13] placeholder:text-[#0b0b13]/40';

  if (status === 'success') {
    return (
      <div className="text-center p-12 bg-white rounded-[2rem]" style={{ boxShadow: '0 18px 60px rgba(16,23,20,0.08)' }}>
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: 'rgba(47,102,84,0.1)', color: '#2f6654' }}
        >
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-[#0b0b13] mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          Reclamación Enviada
        </h2>
        <p className="text-[#0b0b13]/70 mb-8 max-w-md mx-auto">
          Hemos recibido tu reclamación correctamente. Recibirás un acuse de recibo en un máximo de{' '}
          <strong>5 días hábiles</strong> y resolveremos tu caso en un máximo de <strong>1 mes</strong>.
        </p>
        <button
          type="button"
          onClick={() => { setStatus('idle'); setFileName(''); }}
          className="px-8 py-3 font-bold rounded-full transition-all"
          style={{
            backgroundColor: '#8948ff',
            color: '#ffffff',
            boxShadow: '0 25px 50px 0px rgba(252,198,61,0.3)',
          }}
        >
          Enviar otra reclamación
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#0b0b13]/70 ml-1" htmlFor="rc-nombre">
            Nombre <span className="text-[#8948ff]">*</span>
          </label>
          <input id="rc-nombre" required className={inputClass} type="text" placeholder="Ej. Juan" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-[#0b0b13]/70 ml-1" htmlFor="rc-apellidos">
            Apellidos <span className="text-[#8948ff]">*</span>
          </label>
          <input id="rc-apellidos" required className={inputClass} type="text" placeholder="Ej. García López" />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#0b0b13]/70 ml-1" htmlFor="rc-correo">
          Correo Electrónico <span className="text-[#8948ff]">*</span>
        </label>
        <input id="rc-correo" required className={inputClass} type="email" placeholder="juan.garcia@gmail.com" />
      </div>

      {/* Relacion */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#0b0b13]/70 ml-1" htmlFor="rc-relacion">
          Relación con la empresa <span className="text-[#8948ff]">*</span>
        </label>
        <div className="relative">
          <select
            id="rc-relacion"
            required
            defaultValue=""
            className={`${inputClass} appearance-none pr-10 cursor-pointer`}
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="cliente">Cliente</option>
            <option value="empleado">Empleado / Ex-empleado</option>
            <option value="proveedor">Proveedor</option>
            <option value="tercero">Tercero afectado</option>
            <option value="otro">Otro</option>
          </select>
          {/* Custom chevron */}
          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg className="w-4 h-4 text-[#0b0b13]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Detalle */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#0b0b13]/70 ml-1" htmlFor="rc-detalle">
          Detalle de la reclamación <span className="text-[#8948ff]">*</span>
        </label>
        <textarea
          id="rc-detalle"
          required
          minLength={20}
          rows={6}
          className={`${inputClass} resize-none`}
          placeholder="Describe detalladamente el motivo de tu reclamación, incluyendo quién es la persona responsable de la infracción..."
        />
        <p className="text-xs text-[#0b0b13]/40 ml-1">Mínimo 20 caracteres.</p>
      </div>

      {/* File upload */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-bold text-[#0b0b13]/70 ml-1">
          Adjuntar documentación <span className="text-[#0b0b13]/40 font-normal">(opcional)</span>
        </label>
        <label
          htmlFor="rc-archivo"
          className="relative cursor-pointer w-full px-5 py-5 bg-[#f1f2f4] border-2 border-dashed border-[#0b0b13]/10 rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-[#8948ff]/5 hover:border-[#8948ff]/30"
        >
          <svg className="w-5 h-5 text-[#8948ff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span className="text-sm text-[#0b0b13]/60">
            {fileName ? (
              <span className="text-[#8948ff] font-medium">{fileName}</span>
            ) : (
              <>
                <span className="text-[#8948ff] font-bold">Seleccionar archivo</span>
                {' '}o arrastra aquí
              </>
            )}
          </span>
          <input
            id="rc-archivo"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
            className="sr-only"
            onChange={handleFileChange}
          />
        </label>
        <p className="text-xs text-[#0b0b13]/40 ml-1">Formatos: PDF, JPG, PNG, DOC. Máx. 10 MB.</p>
      </div>

      {/* Privacy notice */}
      <p className="text-xs text-[#0b0b13]/50 leading-relaxed">
        La información que nos proporciones será tratada de forma confidencial por SUNCAPITAL VALUE ADDED I, S.L. con el único fin de gestionar tu reclamación, conforme a nuestra{' '}
        <a href="/es/proteccion-de-datos/" className="text-[#8948ff] hover:underline">Política de Privacidad</a>.
      </p>

      {/* Submit CTA — Pill Amarillo del UI KIT */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-5 font-bold text-lg rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          backgroundColor: '#fcc63d',
          color: '#0f172b',
          boxShadow: '0 25px 50px 0px rgba(252,198,61,0.3)',
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : (
          'Enviar Reclamación'
        )}
      </button>
    </form>
  );
};
