import React from 'react';
import { Globe2, ShieldCheck, FileCheck2, Scale, Building2, Anchor } from 'lucide-react';
import { MARKETS_DATA, COMPLIANCE_STANDARDS } from '../data/content';

export const MarketsAndCompliance: React.FC = () => {
  return (
    <>
      {/* MARKETS SECTION */}
      <section id="markets" className="py-24 bg-slate-950 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 flex items-center gap-2">
              <span>Geographic Reach</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Commercial Corridors</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-white mb-4">
              COMMERCIAL MARKETS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Veliora Link facilitates trade flows across established international trade routes, connecting primary resource origins with qualified commercial off-takers.
            </p>
          </div>

          {/* Regional Markets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {MARKETS_DATA.map((market) => (
              <div
                key={market.region}
                className="p-7 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-lg group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800 text-amber-400">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display uppercase text-white group-hover:text-amber-400 transition-colors">
                    {market.region}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {market.focus}
                </p>

                <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] block">
                    Operational Highlights:
                  </span>
                  <ul className="space-y-1">
                    {market.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Client Profiles We Serve */}
          <div className="p-8 rounded-xl bg-slate-900/50 border border-slate-800">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Qualified Commercial Counterparties
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3 rounded bg-slate-950 border border-slate-800 text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Refineries & Blenders</span>
                <span className="text-slate-400">Crude oil & middle distillate feedstocks</span>
              </div>
              <div className="p-3 rounded bg-slate-950 border border-slate-800 text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Power & Utilities</span>
                <span className="text-slate-400">Fuel oil, diesel generation, LPG & LNG</span>
              </div>
              <div className="p-3 rounded bg-slate-950 border border-slate-800 text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Wholesalers & Distributors</span>
                <span className="text-slate-400">Terminal off-takers, bulk rice & sugar</span>
              </div>
              <div className="p-3 rounded bg-slate-950 border border-slate-800 text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Maritime & Aviation</span>
                <span className="text-slate-400">Bunkering fuels, Jet A1 & JP54 aviation</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* COMPLIANCE SECTION */}
      <section id="compliance" className="py-24 bg-slate-900 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-3 flex items-center gap-2">
              <span>Risk Management</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Transactional Governance</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-white mb-4">
              COMPLIANCE & INTEGRITY
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Integrity is our defining principle. We safeguard our clients, partners, and institutions through uncompromising adherence to international trade law, compliance vetting, and verified documentation.
            </p>
          </div>

          {/* Compliance Standards Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {COMPLIANCE_STANDARDS.map((std, idx) => (
              <div
                key={std.title}
                className="p-7 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-amber-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display uppercase text-white">
                    {std.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {std.description}
                </p>
              </div>
            ))}
          </div>

          {/* Standard Transaction Process Chain */}
          <div className="p-8 rounded-xl bg-slate-950 border border-slate-800 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Structured Transaction Workflow
              </span>
              <h3 className="text-xl font-bold font-display text-white">
                Standard International Operating Procedure (SOP)
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-2">
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="font-mono text-amber-400 font-bold">STAGE 01</span>
                <span className="font-semibold text-white block">LOI / ICPO & KYC</span>
                <span className="text-slate-400 block text-[11px]">Buyer issues formal Letter of Intent or Irrevocable Corporate Purchase Order with verifiable CIS.</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="font-mono text-amber-400 font-bold">STAGE 02</span>
                <span className="font-semibold text-white block">FCO & Contract (SPA)</span>
                <span className="text-slate-400 block text-[11px]">Seller issues Full Corporate Offer; bilateral Sales & Purchase Agreement executed and lodged with banks.</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="font-mono text-amber-400 font-bold">STAGE 03</span>
                <span className="font-semibold text-white block">Financial Instrument</span>
                <span className="text-slate-400 block text-[11px]">Buyer issues operative Documentary Letter of Credit (DLC) or Standby LC (MT760) from top-tier bank.</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="font-mono text-amber-400 font-bold">STAGE 04</span>
                <span className="font-semibold text-white block">Proof of Product (POP)</span>
                <span className="text-slate-400 block text-[11px]">Seller bank transmits certified Proof of Product (POP), charter party, and vessel NOR to buyer bank.</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1.5">
                <span className="font-mono text-amber-400 font-bold">STAGE 05</span>
                <span className="font-semibold text-white block">SGS Q&Q & Title</span>
                <span className="text-slate-400 block text-[11px]">Independent inspection conducted; title transferred; settlement executed via MT103 against shipping docs.</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-4">
              <span>Governed by International Maritime Organization (IMO) & ICC Uniform Customs and Practice (UCP 600).</span>
              <span className="text-amber-400 font-medium">Compliance Officer Hotline: +234 703 277 7070</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};
