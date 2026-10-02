import React from 'react';
import { WhoWeAre } from '../components/WhoWeAre';
import { COMPANY_INFO, IMAGES } from '../data/content';
import { PageHero } from '../components/PageHero';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Hero with Dedicated Maritime Image Banner */}
      <PageHero
        breadcrumb="About Us"
        categoryTag="WHO WE ARE · MARITIME & ENERGY SECTORS IN AFRICA"
        title="ABOUT VELIORA LINKS"
        subtitle="A physical trading partner built on integrity and consistent execution across energy, petroleum, agricultural and general bulk commodities."
        imageSrc={IMAGES.aboutHero}
        imageAlt="Veliora Links maritime trading operations and vessel bridge"
        onNavigateHome={() => onNavigate('home')}
        actionButton={{
          label: 'Request a Quotation',
          onClick: onRequestQuote,
        }}
        highlightStats={[
          { value: 'Africa & Global', label: 'Commercial Coverage' },
          { value: 'Crude & AGO', label: 'Core Energy Streams' },
          { value: 'FOB / CIF', label: 'Delivery Standard' },
          { value: '100% Vetted', label: 'Compliance & KYC' },
        ]}
      />

      {/* Main Who We Are Section */}
      <WhoWeAre onLearnMore={() => onNavigate('services')} />

      {/* Bottom CTA Strip */}
      <div className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold font-display uppercase text-blue-950">
            Partner With Veliora Links
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Whether you require a trading principal, procurement coordination, or structured marketing access, our desk is available for discussion.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onRequestQuote}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs uppercase tracking-wider rounded cursor-pointer shadow-sm transition-all"
            >
              REQUEST A QUOTE
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-blue-950 font-bold text-xs uppercase tracking-wider rounded border border-slate-300 cursor-pointer shadow-sm transition-all"
            >
              Contact Desk
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
