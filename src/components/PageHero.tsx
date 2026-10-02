import React from 'react';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle: string;
  categoryTag?: string;
  breadcrumb: string;
  onNavigateHome: () => void;
  imageSrc: string;
  imageAlt?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
  };
  highlightStats?: Array<{
    label: string;
    value: string;
  }>;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  categoryTag = 'VELIORA LINKS · MARITIME & ENERGY TRADING',
  breadcrumb,
  onNavigateHome,
  imageSrc,
  imageAlt = 'Maritime commodity operations',
  actionButton,
  highlightStats,
}) => {
  return (
    <section className="relative bg-slate-950 overflow-hidden text-white border-b border-slate-800">
      
      {/* Background Photography with Institutional Navy Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageSrc}
          alt={imageAlt}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1920&q=80';
          }}
          className="w-full h-full object-cover object-center opacity-40 scale-105 contrast-105 brightness-95"
        />
        {/* Subtle dual-layer gradient: ensures maximum readability on text while keeping rich maritime imagery */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-blue-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="max-w-3xl space-y-3.5 sm:space-y-4">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide text-slate-300">
            <button
              onClick={onNavigateHome}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-400 font-bold uppercase">{breadcrumb}</span>
          </div>

          {/* Institutional Metadata Tag */}
          <div className="text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-amber-400 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] break-words">
            {categoryTag}
          </div>

          {/* Main Display Headline */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white uppercase leading-tight sm:leading-[1.1] drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] break-words">
            {title}
          </h1>

          {/* Explanatory Subtitle */}
          <p className="text-xs sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] max-w-2xl">
            {subtitle}
          </p>

          {/* Optional Action Button */}
          {actionButton && (
            <div className="pt-2">
              <button
                onClick={actionButton.onClick}
                className="w-full sm:w-auto px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>{actionButton.label}</span>
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          )}

        </div>

        {/* Optional Highlight Stats Bar */}
        {highlightStats && highlightStats.length > 0 && (
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-blue-900/60 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
            {highlightStats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5 bg-blue-950/40 sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border border-blue-800/30 sm:border-none">
                <div className="text-sm sm:text-lg font-bold font-mono text-amber-400 truncate">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-300 uppercase tracking-wider truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
