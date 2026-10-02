import React from 'react';
import { ShieldCheck, Scale, FileCheck, Lock } from 'lucide-react';
import { COMPLIANCE_STANDARDS, IMAGES } from '../data/content';
import { PageHero } from '../components/PageHero';

interface CompliancePageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

export const CompliancePage: React.FC<CompliancePageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Hero with Dedicated Maritime Inspection & Integrity Banner */}
      <PageHero
        breadcrumb="Compliance & Integrity"
        categoryTag="CORE INSTITUTIONAL VALUE · INTEGRITY & DUE DILIGENCE"
        title="COMPLIANCE & INTEGRITY"
        subtitle="Our core value is Integrity. We believe sustainable trading relationships are built on transparency, strict KYC / AML standards, independent inspection (SGS / Saybolt) and consistent execution."
        imageSrc={IMAGES.complianceHero}
        imageAlt="Maritime surveyor quality testing, naval inspection and banking compliance"
        onNavigateHome={() => onNavigate('home')}
        highlightStats={[
          { value: 'SGS & Saybolt', label: 'Independent Q&Q' },
          { value: 'KYC / AML', label: 'Banking Vetting' },
          { value: 'Zero Tolerance', label: 'Compliance Standard' },
          { value: 'Escrow / DLC', label: 'Payment Security' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        
        {/* Core Value Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-blue-950 text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold font-display text-blue-950 uppercase">
              The Integrity Standard
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
            In international commodity trading, reliability and trust are paramount. Veliora Links operates exclusively through audited banking channels, verifiable allocations, and internationally recognized legal frameworks to protect our commercial partners.
          </p>
        </div>

        {/* 4 Compliance Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPLIANCE_STANDARDS.map((std) => (
            <div
              key={std.title}
              className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow transition-shadow space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-display text-blue-950 uppercase">
                  {std.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {std.description}
              </p>
            </div>
          ))}
        </div>

        {/* 5-Stage Standard Operating Procedure (SOP) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              Standard Operating Procedure (SOP)
            </span>
            <h3 className="text-2xl font-bold font-display text-blue-950">
              International Transaction Lifecycle
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2">
            <div className="p-5 rounded-lg bg-white border border-slate-200 text-xs space-y-2 shadow-sm">
              <span className="font-mono text-amber-600 font-bold block">01. INQUIRY</span>
              <span className="font-bold text-blue-950 block">LOI / ICPO & KYC</span>
              <span className="text-slate-600 block text-[11px] leading-relaxed">
                Receipt of formal Letter of Intent (LOI) or ICPO accompanied by verified Corporate Information Sheet (CIS).
              </span>
            </div>

            <div className="p-5 rounded-lg bg-white border border-slate-200 text-xs space-y-2 shadow-sm">
              <span className="font-mono text-amber-600 font-bold block">02. CONTRACT</span>
              <span className="font-bold text-blue-950 block">FCO & SPA Agreement</span>
              <span className="text-slate-600 block text-[11px] leading-relaxed">
                Issuance of Full Corporate Offer (FCO), contract negotiations, and formal execution of Sales & Purchase Agreement (SPA).
              </span>
            </div>

            <div className="p-5 rounded-lg bg-white border border-slate-200 text-xs space-y-2 shadow-sm">
              <span className="font-mono text-amber-600 font-bold block">03. INSTRUMENT</span>
              <span className="font-bold text-blue-950 block">Bank Guarantee / DLC</span>
              <span className="text-slate-600 block text-[11px] leading-relaxed">
                Transmission of confirmed, irrevocable Documentary Letter of Credit (DLC/MT700) or SBLC (MT760) from a prime international bank.
              </span>
            </div>

            <div className="p-5 rounded-lg bg-white border border-slate-200 text-xs space-y-2 shadow-sm">
              <span className="font-mono text-amber-600 font-bold block">04. VALIDATION</span>
              <span className="font-bold text-blue-950 block">POP & Vessel NOR</span>
              <span className="text-slate-600 block text-[11px] leading-relaxed">
                Bank-to-bank delivery of Proof of Product (POP), charter party agreement, and vessel Notice of Readiness (NOR).
              </span>
            </div>

            <div className="p-5 rounded-lg bg-white border border-slate-200 text-xs space-y-2 shadow-sm">
              <span className="font-mono text-amber-600 font-bold block">05. SETTLEMENT</span>
              <span className="font-bold text-blue-950 block">SGS Q&Q & Title</span>
              <span className="text-slate-600 block text-[11px] leading-relaxed">
                Independent inspection (SGS/Saybolt) completed; title transfer executed and payment released against standard shipping documents.
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Action Footer */}
      <div className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl font-bold font-display uppercase text-blue-950">
            Initiate Due Diligence & Trade Protocols
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Submit your corporate credential inquiry to our compliance and legal department.
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
