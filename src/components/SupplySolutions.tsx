import React from 'react';
import { Ship, Anchor, Building2, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SUPPLY_SOLUTIONS, IMAGES } from '../data/content';

interface SupplySolutionsProps {
  onRequestQuoteWithTerm?: (term: string) => void;
}

export const SupplySolutions: React.FC<SupplySolutionsProps> = ({ onRequestQuoteWithTerm }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-2">
            <Ship className="w-4 h-4 text-amber-600" />
            <span>OUR SUPPLY SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-blue-950">
            Commercial & Delivery Mechanisms
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
            Veliora Links can structure transactions using various commercial and delivery mechanisms, depending on the commodity and transaction.
          </p>
        </div>

        {/* 6 Delivery Mechanisms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPLY_SOLUTIONS.map((item) => (
            <div
              key={item.code}
              className="bg-white p-7 rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-black text-blue-950 group-hover:text-amber-600 transition-colors">
                    {item.code}
                  </span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded uppercase tracking-wider">
                    Incoterm / Maritime
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold font-display text-blue-950 uppercase">
                    {item.fullName}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded border border-slate-100 space-y-1">
                  <div><strong>Application:</strong> {item.applicability}</div>
                  {item.keyFeatures.length > 0 && (
                    <div><strong>Key Feature:</strong> {item.keyFeatures[0]}</div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  ICC Uniform Rules
                </span>
                <button
                  onClick={() => onRequestQuoteWithTerm && onRequestQuoteWithTerm(item.code)}
                  className="text-xs font-bold text-blue-950 hover:text-amber-600 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Structure with {item.code}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Flexibility Statement from Prompt with Maritime Photography */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 text-white relative">
          <div className="absolute inset-0 z-0">
            <img
              src={IMAGES.shipping}
              alt="Global container port and commercial maritime fleet"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/95 to-blue-950/80" />
          </div>

          <div className="relative z-10 p-8 sm:p-10 space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 text-amber-400 font-bold uppercase text-xs tracking-widest">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Commercial Flexibility & Maritime Law Alignment</span>
            </div>
            <blockquote className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed italic border-l-4 border-amber-500 pl-4">
              "Other transaction structures may be considered where commercially appropriate and legally permissible."
            </blockquote>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether your organization requires coastal lightering, offshore transshipment via STS operations, or dedicated tank storage releases in major bunkering hubs, our desk coordinates with port state authorities, maritime insurers (P&I clubs), and certified inspection bodies.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
