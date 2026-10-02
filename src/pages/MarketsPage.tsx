import React from 'react';
import { Globe2 } from 'lucide-react';
import { ValueCreation } from '../components/ValueCreation';
import { MARKETS_DATA, IMAGES } from '../data/content';
import { PageHero } from '../components/PageHero';

interface MarketsPageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

export const MarketsPage: React.FC<MarketsPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Hero with Dedicated Global Shipping Routes Banner */}
      <PageHero
        breadcrumb="Markets & Value Creation"
        categoryTag="GLOBAL COMMERCE · MARITIME CORRIDORS & REGIONAL HUBS"
        title="MARKETS & VALUE CREATION"
        subtitle="Connecting primary origin supply with high-demand commercial markets across Africa, the Middle East, Asia, Europe, and international discharge ports."
        imageSrc={IMAGES.marketsHero}
        imageAlt="Global maritime container port terminal and commercial shipping routes"
        onNavigateHome={() => onNavigate('home')}
        highlightStats={[
          { value: 'West Africa', label: 'Home Commercial Base' },
          { value: 'Middle East', label: 'Refinery & Bunkering' },
          { value: 'Asia & Europe', label: 'Discharge Markets' },
          { value: '24/7', label: 'Vessel Tracking' },
        ]}
      />

      {/* Value Creation Section */}
      <ValueCreation />

      {/* Regional Corridors Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <div className="max-w-3xl mb-12 space-y-2">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
            Geographic Coverage
          </span>
          <h2 className="text-3xl font-bold font-display text-blue-950 uppercase">
            Active Regional Trade Routes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MARKETS_DATA.map((market) => (
            <div
              key={market.region}
              className="p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm hover:shadow transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-blue-950 text-amber-400">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-display uppercase text-blue-950">
                  {market.region}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {market.focus}
              </p>
              <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-700">
                {market.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold font-display uppercase text-blue-950">
            Expand Your Market Access With Us
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Are you a producer seeking commercial off-takers or an institutional buyer expanding supply security?
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs uppercase tracking-wider rounded cursor-pointer shadow-sm transition-all"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
