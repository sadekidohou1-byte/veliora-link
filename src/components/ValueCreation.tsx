import React from 'react';
import { Network, Search, Layers, ShoppingBag, Globe, ArrowRight } from 'lucide-react';
import { VALUE_CREATION_ITEMS } from '../data/content';

export const ValueCreation: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    'Market Access': Network,
    'Sourcing': Search,
    'Structured Trading': Layers,
    'Procurement': ShoppingBag,
    'Market Development': Globe,
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-widest">
            HOW WE CREATE VALUE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-blue-950">
            Connecting Supply With Genuine Demand
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Delivering tangible commercial advantages across the international supply chain.
          </p>
        </div>

        {/* 5 Value Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_CREATION_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.title] || Network;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-950 text-amber-400 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold font-display uppercase tracking-tight text-blue-950">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-amber-600">
                  <span>Commercial Impact</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
