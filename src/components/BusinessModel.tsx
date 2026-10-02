import React from 'react';
import { Briefcase, ShoppingCart, TrendingUp, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCUREMENT_CRITERIA } from '../data/content';

export const BusinessModel: React.FC = () => {
  const models = [
    {
      title: 'Principal Trading',
      badge: 'Direct Contracting',
      description: 'Buying and selling commodities directly as a principal counterparty to transactions. We take title and manage performance risk across maritime corridors.',
      icon: Briefcase,
    },
    {
      title: 'Procurement',
      badge: 'Client Sourcing',
      description: 'Sourcing commodities for commercial clients based on specific requirements across defined parameters: volume, quality, laycan and discharge terminals.',
      icon: ShoppingCart,
    },
    {
      title: 'Marketing',
      badge: 'Producer Representation',
      description: 'Assisting producers, refiners and cargo holders in identifying qualified commercial buyers and expanding market access across Africa and global destinations.',
      icon: TrendingUp,
    },
    {
      title: 'Distribution',
      badge: 'Supply Chain',
      description: 'Coordinating delivery and supply channels to ensure reliable product movement from loading terminals to inland and coastal storage infrastructure.',
      icon: Truck,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-widest">
            OUR BUSINESS MODEL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-blue-950">
            Four Core Commercial Activities
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A flexible commercial structure designed to create practical supply solutions for international trading counterparties.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-lg bg-blue-950 text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-blue-950">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                  <span>Structured Execution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* The 7 Procurement Criteria Matrix (Verbatim from prompt) */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-1">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              Sourcing Precision Matrix
            </span>
            <h3 className="text-2xl font-bold font-display uppercase text-blue-950">
              Procurement Parameters (7 Defined Criteria)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Every procurement assignment undertaken by Veliora Links is qualified and executed strictly according to 7 clear commercial parameters:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {PROCUREMENT_CRITERIA.map((criterion, cIdx) => (
              <div
                key={cIdx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2 hover:border-amber-400 transition-colors"
              >
                <div className="w-7 h-7 mx-auto rounded-full bg-blue-950 text-amber-400 text-xs font-mono font-bold flex items-center justify-center">
                  0{cIdx + 1}
                </div>
                <div className="font-display font-bold text-xs uppercase text-blue-950 tracking-wider">
                  {criterion.name}
                </div>
                <div className="text-[11px] text-slate-500 leading-snug">
                  {criterion.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-blue-950 text-white text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span>
              Need a structured allocation matching these exact 7 parameters?
            </span>
            <span className="text-amber-400 font-bold uppercase tracking-wider shrink-0">
              Direct Desk Execution: Commercial Compliance Guaranteed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
