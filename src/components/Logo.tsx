import React, { useState } from 'react';
import logoAsset from '../assets/images/veliora_logo_mark_1790845296954.jpg';

export const LOGO_IMAGE_SRC = logoAsset || '/images/veliora_logo_mark_1790845296954.jpg';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'horizontal';
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'horizontal',
  theme = 'light'
}) => {
  const [imageError, setImageError] = useState(false);

  // Compact variant for badges or mobile headers
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm shrink-0">
          {!imageError ? (
            <img
              src={LOGO_IMAGE_SRC}
              alt="Veliora Links Logo"
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-950 text-amber-500 font-bold text-xs">
              VL
            </div>
          )}
        </div>
        <div className="flex flex-col">
          <span className={`font-display font-black text-lg tracking-wider leading-none ${theme === 'dark' ? 'text-white' : 'text-blue-950'}`}>
            VELIORA
          </span>
          <span className="font-display text-[9px] font-black tracking-[0.25em] text-amber-600 uppercase mt-0.5 leading-none">
            LINKS
          </span>
        </div>
      </div>
    );
  }

  // Full presentation variant
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white text-slate-900 shadow-lg border border-slate-200 ${className}`}>
        <div className="w-44 sm:w-56 max-w-full rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-950 mb-5 relative group">
          <img
            src={LOGO_IMAGE_SRC}
            alt="Veliora Links - Official Logo"
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-1.5 w-full">
          <div className="font-display font-black text-3xl sm:text-4xl tracking-tight text-blue-950">
            VELIORA
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 sm:w-16 h-0.5 bg-amber-500"></span>
            <span className="font-display font-black text-base sm:text-lg tracking-[0.25em] text-amber-600 uppercase">
              LINKS
            </span>
            <span className="w-12 sm:w-16 h-0.5 bg-amber-500"></span>
          </div>

          <p className="font-sans font-medium text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed pt-2">
            VELIORA LINKS is a maritime company operating in the oil, gas, and diesel sectors in Africa.
          </p>
        </div>
      </div>
    );
  }

  // Default: Horizontal Header Variant (Clean Institutional Vitol / Trafigura Style)
  return (
    <div className={`inline-flex items-center gap-3 group ${className}`}>
      {/* Official Emblem Logo Badge */}
      <div className="relative w-11 h-11 rounded-lg overflow-hidden border border-slate-200 bg-white shadow-sm shrink-0 group-hover:border-amber-500 transition-colors">
        {!imageError ? (
          <img
            src={LOGO_IMAGE_SRC}
            alt="Veliora Links Logo"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue-950 text-amber-500 font-bold text-sm">
            VL
          </div>
        )}
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col text-left">
        <span className={`font-display font-black text-xl tracking-tight leading-none group-hover:text-amber-600 transition-colors ${theme === 'dark' ? 'text-white' : 'text-blue-950'}`}>
          VELIORA
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[1.5px] w-2.5 bg-amber-500"></span>
          <span className="font-display text-[10px] font-black tracking-[0.22em] text-amber-600 uppercase leading-none">
            LINKS
          </span>
          <span className="h-[1.5px] w-2.5 bg-amber-500"></span>
        </div>
      </div>
    </div>
  );
};
