import React from 'react';
import { ArrowRight, Fuel, Wheat, Ship } from 'lucide-react';
import { Hero } from '../components/Hero';
import { COMPANY_INFO } from '../data/content';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="space-y-0 bg-white">
      {/* Hero Section */}
      <Hero
        onRequestQuote={onRequestQuote}
        onExploreBusiness={() => onNavigate('trading')}
      />

      {/* Overview Grid of the 3 Key Business Portfolios (Clean Corporate Style) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1.5">
                Commercial Scope
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-blue-950">
                Core Trading Portfolios
              </h3>
            </div>
            <button
              onClick={() => onNavigate('trading')}
              className="text-xs text-blue-950 hover:text-amber-600 font-bold flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>View All Grades & Specifications</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Crude Oil & Refined */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="p-3 w-fit rounded-lg bg-blue-950 text-amber-400">
                <Fuel className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold font-display uppercase text-blue-950">
                Energy & Petroleum
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Crude oil grades including Nigerian Bonny Light (BLCO) and Forcados Light, alongside high-spec refined products: AGO Diesel, Jet A1, JP54, Fuel Oil, D6, and Bitumen.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('trading')}
                  className="text-xs text-blue-950 hover:text-amber-600 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>E</span>
                </button>
              </div>
            </div>

            {/* Agricultural Bulk */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="p-3 w-fit rounded-lg bg-blue-950 text-amber-400">
                <Wheat className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold font-display uppercase text-blue-950">
                Agricultural Commodities
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Refined White Cane Sugar ICUMSA 45, commercial grade sugars, and premium parboiled and long-grain rice shipments for institutional distributors and wholesalers.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('trading')}
                  className="text-xs text-blue-950 hover:text-amber-600 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Explore Agriculture Products →</span>
                </button>
              </div>
            </div>

            {/* Supply Solutions & Incoterms */}
            <div className="p-8 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="p-3 w-fit rounded-lg bg-blue-950 text-amber-400">
                <Ship className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold font-display uppercase text-blue-950">
                Supply Solutions
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Transactions structured under verified commercial delivery mechanisms: FOB, CIF, CIF ASWP, TTT (Tanker-To-Tanker), TFD (Tank Farm Delivery), and TTO (Tanker Take Over).
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('supply-solutions')}
                  className="text-xs text-blue-950 hover:text-amber-600 font-bold flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Explore 6 Delivery Mechanisms →</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Call to Action Banner (Clean Deep Navy Vitol Style) */}
      <section className="py-20 bg-blue-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">
            Immediate Commercial Engagement
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            Ready to Structure a Commodity Transaction?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Contact our desk directly at <strong className="text-white font-mono">{COMPANY_INFO.phone}</strong> or submit an official request for quotation with custom volume, specification, and delivery terms.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onRequestQuote}
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs uppercase tracking-wider rounded shadow-md cursor-pointer transition-all"
            >
              REQUEST A QUOTE
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs uppercase tracking-wider rounded border border-blue-800 cursor-pointer transition-all"
            >
              Contact Desk
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
