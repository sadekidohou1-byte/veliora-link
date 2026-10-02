import React from 'react';
import { Shield, CheckCircle2, ChevronRight, Award, Compass, Search, FileText, Anchor } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/content';

interface WhoWeAreProps {
  onLearnMore?: () => void;
}

export const WhoWeAre: React.FC<WhoWeAreProps> = ({ onLearnMore }) => {
  const lifecycleSteps = [
    {
      num: '01',
      title: 'Supply & Demand Matching',
      desc: 'Identifying genuine allocations and qualified commercial buyers across regional and global markets.',
    },
    {
      num: '02',
      title: 'Commercial Negotiations',
      desc: 'Structuring pricing formulas, volume commitments, and risk management parameters.',
    },
    {
      num: '03',
      title: 'Documentation & Banking',
      desc: 'Executing Sales & Purchase Agreements (SPA), FCO, and prime bank instruments (DLC/SBLC).',
    },
    {
      num: '04',
      title: 'Logistics Coordination',
      desc: 'Charter party management, vessel scheduling, laycan agreements, and port clearance.',
    },
    {
      num: '05',
      title: 'Q&Q Inspection & Delivery',
      desc: 'SGS/Saybolt quality and quantity certification with final title handover.',
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Header Block with Energy Terminal Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-600 shrink-0" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-blue-950 break-words leading-tight sm:leading-none">
              A Trading Partner Built for Long-Term Commerce
            </h2>

            <p className="text-sm sm:text-lg text-slate-700 leading-relaxed font-medium">
              Veliora Links operates across local and international commodity markets, providing structured solutions for buyers, suppliers, distributors and commercial partners.
            </p>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Our business combines principal trading, commodity sourcing, procurement, marketing and distribution to create practical supply solutions for our clients.
            </p>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-4/3 group bg-slate-900">
              <img
                src={IMAGES.energy}
                alt="Energy terminal and bulk liquid storage infrastructure"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="font-mono text-amber-400 font-bold block text-[10px] uppercase tracking-wider">
                  PHYSICAL ASSETS & INFRASTRUCTURE
                </span>
                <span className="font-semibold text-slate-100">
                  Bulk Liquid Storage & Maritime Offtake Facilities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Lifecycle Stages Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                End-To-End Execution
              </span>
              <h3 className="text-lg sm:text-xl font-bold font-display text-blue-950 uppercase">
                The Complete Transaction Lifecycle
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              We work across every phase of the trade to ensure delivery integrity and risk mitigation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {lifecycleSteps.map((step) => (
              <div
                key={step.num}
                className="p-5 sm:p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2 sm:space-y-3"
              >
                <span className="font-mono text-xs font-bold text-amber-600 block">
                  {step.num}
                </span>
                <h4 className="text-sm font-bold font-display uppercase text-blue-950">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Value: Integrity (Institutional Banner) */}
        <div className="p-5 sm:p-10 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-amber-50 border border-amber-200 text-amber-700">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold font-display uppercase text-blue-950">
                  Our Core Value Is Integrity
                </h3>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed pl-4 border-l-4 border-amber-500">
                "We believe sustainable trading relationships are built on transparency, accountability, professionalism and consistent execution."
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In physical commodity and maritime trading, reliability is measured by performance. Every transaction executed through Veliora Links adheres to strict international compliance standards, independent inspection protocols, and verified contractual frameworks.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                Operational Pillars
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transparent Pricing & Allocations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Audited Banking & Letter of Credit Channels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SGS / Saybolt Independent Certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Communication: {COMPANY_INFO.phone}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
