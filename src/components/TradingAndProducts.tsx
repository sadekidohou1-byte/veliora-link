import React, { useState } from 'react';
import { Fuel, Wheat, ArrowUpRight, Check, Info } from 'lucide-react';
import { COMMODITIES } from '../data/content';
import { CommodityItem } from '../types';

interface TradingAndProductsProps {
  onSelectProductForQuote?: (commodityId: string) => void;
}

export const TradingAndProducts: React.FC<TradingAndProductsProps> = ({ onSelectProductForQuote }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'energy' | 'agriculture'>('all');
  const [selectedProduct, setSelectedProduct] = useState<CommodityItem | null>(null);

  const filteredCommodities = COMMODITIES.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2 sm:space-y-3">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-2">
              <span>WHAT WE TRADE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-blue-950">
              Trading Portfolios & Physical Products
            </h2>
            <p className="text-xs sm:text-base text-slate-600">
              Structured supply lines for commercial clients, government agencies, refiners, and bulk wholesale distributors.
            </p>
          </div>

          {/* Segmented Filter Buttons (Responsive on mobile) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 w-full sm:w-auto overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap text-center ${
                activeCategory === 'all'
                  ? 'bg-blue-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-blue-950'
              }`}
            >
              All Portfolios
            </button>
            <button
              onClick={() => setActiveCategory('energy')}
              className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap ${
                activeCategory === 'energy'
                  ? 'bg-blue-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-blue-950'
              }`}
            >
              <Fuel className="w-3.5 h-3.5 shrink-0" />
              <span>Energy & Petroleum</span>
            </button>
            <button
              onClick={() => setActiveCategory('agriculture')}
              className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap ${
                activeCategory === 'agriculture'
                  ? 'bg-blue-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-blue-950'
              }`}
            >
              <Wheat className="w-3.5 h-3.5 shrink-0" />
              <span>Agricultural</span>
            </button>
          </div>
        </div>

        {/* Catalog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCommodities.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              {/* Product Header */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded">
                    {item.subCategory}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.unit}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-blue-950 group-hover:text-amber-600 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Specifications Bullet points */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Technical Standards:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600 font-mono">
                    {item.commonSpecs.slice(0, 3).map((spec: string, sIdx: number) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Delivery Terms & Action */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
                <div className="text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">Terms: </span>
                  <span>{item.deliveryTerms.join(', ')}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="p-2 text-slate-600 hover:text-blue-950 hover:bg-slate-200 rounded transition-colors text-xs font-semibold cursor-pointer"
                    title="View Technical Specs"
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => onSelectProductForQuote && onSelectProductForQuote(item.id)}
                    className="px-3.5 py-1.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center gap-1 transition-all cursor-pointer shadow-sm"
                  >
                    <span>Quote</span>
                    <ArrowUpRight className="w-3 h-3 text-amber-400" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Verbatim Disclaimer & Commercial Scope Note from Prompt */}
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm space-y-2">
          <div className="flex items-center gap-2 font-bold text-blue-950 uppercase">
            <Info className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Commercial Transaction Terms & Qualification Notice</span>
          </div>
          <p className="leading-relaxed">
            * <strong>Energy & Petroleum:</strong> Availability, specifications, origin and delivery structures are subject to transaction requirements and allocation schedules.
          </p>
          <p className="leading-relaxed">
            * <strong>Agricultural Commodities:</strong> We work directly with wholesalers, commercial users, state distribution bodies, and institutional buyers.
          </p>
        </div>

      </div>

      {/* Technical Spec Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                  Technical Specifications
                </span>
                <h3 className="text-xl font-bold font-display uppercase text-blue-950">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-700 uppercase">
                Detailed Grade Matrix
              </span>
              <ul className="space-y-2 text-xs text-slate-700 font-mono bg-slate-50 p-4 rounded-lg border border-slate-200">
                {selectedProduct.commonSpecs.map((spec: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <p><strong>Category:</strong> {selectedProduct.subCategory}</p>
              <p><strong>Standard Delivery Terms:</strong> {selectedProduct.deliveryTerms.join(' • ')}</p>
              <p><strong>Inspection Standards:</strong> SGS / Saybolt Q&Q testing at load and discharge port.</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const id = selectedProduct.id;
                  setSelectedProduct(null);
                  if (onSelectProductForQuote) onSelectProductForQuote(id);
                }}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs uppercase tracking-wider rounded shadow cursor-pointer"
              >
                Request Official Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
