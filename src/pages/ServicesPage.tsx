import React from 'react';
import { BusinessModel } from '../components/BusinessModel';
import { PageHero } from '../components/PageHero';
import { IMAGES } from '../data/content';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Hero with Dedicated Offshore & Terminal Operations Banner */}
      <PageHero
        breadcrumb="Our Services"
        categoryTag="BUSINESS MODEL & CORE CAPABILITIES"
        title="OUR SERVICES & BUSINESS MODEL"
        subtitle="Principal Trading, Structured Procurement, Producer Representation & Marketing, and End-to-End Maritime Distribution across Africa and global hubs."
        imageSrc={IMAGES.servicesHero}
        imageAlt="Offshore energy terminal, maritime transshipment and trading operations"
        onNavigateHome={() => onNavigate('home')}
        actionButton={{
          label: 'Request a Quote',
          onClick: onRequestQuote,
        }}
        highlightStats={[
          { value: 'Principal', label: 'Direct Trading Desk' },
          { value: 'Procurement', label: 'Structured Sourcing' },
          { value: 'Distribution', label: 'Vessel STS & Ports' },
          { value: 'Marketing', label: 'Cargo Off-Take' },
        ]}
      />

      {/* Main Business Model */}
      <BusinessModel />

      {/* Action Footer */}
      <div className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold font-display uppercase text-blue-950">
            Have a Specific Procurement Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Submit your defined parameters (Product, Specification, Volume, Destination, and Target Timeline) for structured execution.
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
