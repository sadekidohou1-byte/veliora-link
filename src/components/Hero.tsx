import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Anchor, ShieldCheck, Ship, Globe2 } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../data/content';

interface HeroProps {
  onRequestQuote: () => void;
  onExploreBusiness: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onExploreBusiness }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative bg-slate-900 overflow-hidden text-white border-b border-slate-200">
      
      {/* Background Video & Photography with subtle corporate gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Video Element (Supports MP4 or WebM dropped in /public/videos/) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={IMAGES.hero}
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-1000 scale-105 contrast-105 brightness-95 ${
            videoLoaded ? 'opacity-85' : 'opacity-0'
          }`}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
        </video>

        {/* Fallback Static Image (Displays if video is loading or absent) */}
        <img
          src={IMAGES.hero}
          alt="Maritime vessel and energy terminal"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1920&q=80';
          }}
          className={`w-full h-full object-cover object-center opacity-60 scale-105 absolute inset-0 ${
            videoLoaded ? '-z-10' : 'z-0'
          }`}
        />

        {/* Subtle cinematic gradient: ensures text readability on the left while leaving the video crisp & clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-950/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-24 lg:py-32">
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          
          {/* Header Metadata (Clean Text without pill, wraps neatly on mobile) */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-amber-400 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <span>VELIORA LINKS</span>
            <span aria-hidden="true" className="text-amber-500">·</span>
            <span>Maritime & Energy Sectors in Africa</span>
            <span aria-hidden="true" className="hidden sm:inline text-amber-500">·</span>
            <span className="hidden sm:inline">Global Port Destinations</span>
          </div>

          {/* Main Headline verbatim from prompt */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase leading-[1.12] sm:leading-[1.08] drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] break-words">
            GLOBAL COMMERCE.<br />
            RELIABLE SUPPLY.<br />
            <span className="text-amber-400">BUILT ON INTEGRITY.</span>
          </h1>

          {/* Subheading verbatim from prompt */}
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-slate-100 font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            <p>
              Veliora Links is an international trading, supply, procurement and marketing company serving commercial clients across energy, petroleum, agricultural and general commodities.
            </p>
            <p className="text-slate-200 text-xs sm:text-base">
              We facilitate the movement of commodities from source to market through structured trading, procurement and supply solutions.
            </p>
          </div>

          {/* Prominent Action Buttons (Stretches to 100% on mobile, inline on desktop) */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={onExploreBusiness}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-white hover:bg-slate-100 text-blue-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Our Business</span>
              <ChevronRight className="w-4 h-4 text-amber-600 stroke-[3]" />
            </button>
            <button
              onClick={onRequestQuote}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Submit an Enquiry</span>
              <ArrowRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>

        </div>

        {/* 4 Corporate Trust Indicators (1 column on mobile, 2 on tablet, 4 on desktop) */}
        <div className="mt-10 sm:mt-16 pt-5 sm:pt-6 border-t border-blue-900/50 bg-blue-950/60 backdrop-blur-md p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-blue-800/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left shadow-xl">
          
          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 drop-shadow-sm">
              <Ship className="w-4 h-4 shrink-0" />
              <span>Maritime Delivery</span>
            </div>
            <p className="text-xs text-slate-200">
              FOB, CIF, CIF ASWP, TTT, TFD & TTO mechanisms.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 drop-shadow-sm">
              <Anchor className="w-4 h-4 shrink-0" />
              <span>African Energy</span>
            </div>
            <p className="text-xs text-slate-200">
              Crude oil, AGO diesel, Jet A1 & LNG off-takes.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 drop-shadow-sm">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Integrity & KYC</span>
            </div>
            <p className="text-xs text-slate-200">
              Full banking compliance & SGS / Saybolt Q&Q testing.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5 drop-shadow-sm">
              <Globe2 className="w-4 h-4 shrink-0" />
              <span>Direct Trading Desk</span>
            </div>
            <p className="text-xs text-slate-200 font-mono font-medium truncate">
              {COMPANY_INFO.phone}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
