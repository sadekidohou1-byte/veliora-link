import React from 'react';
import { ChevronRight, Phone, Mail } from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { COMPANY_INFO } from '../data/content';
import { Logo } from '../components/Logo';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onRequestQuote }) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Banner & Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <button onClick={() => onNavigate('home')} className="hover:text-blue-950 transition-colors">
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-700 font-semibold">Contact</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-display uppercase tracking-tight text-blue-950">
            CONTACT COMMERCIAL DESK
          </h1>
          <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
            Direct communication with our trading principals, logistics coordinators, and maritime operations desk.
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <ContactSection onRequestQuote={onRequestQuote} />

      {/* Brand Identity Footer Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-4">
            <Logo variant="compact" theme="light" />
            <div>
              <div className="text-sm font-bold text-blue-950 uppercase font-display">
                VELIORA LINKS COMMERCIAL OPERATIONS
              </div>
              <div className="text-xs text-slate-500">
                Operating in the oil, gas, and diesel sectors in Africa and global discharge ports.
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 hover:text-amber-600 border border-slate-300 text-blue-950 text-xs font-bold rounded-lg tabular-nums shadow-sm flex items-center justify-center gap-2 transition-colors"
              title="Call Nigeria Desk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>NG: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 hover:text-amber-600 border border-slate-300 text-blue-950 text-xs font-bold rounded-lg tabular-nums shadow-sm flex items-center justify-center gap-2 transition-colors"
              title="Call Bénin Desk"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>BJ: {COMPANY_INFO.phone2}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="px-4 py-2.5 bg-white hover:bg-slate-100 hover:text-amber-600 border border-slate-300 text-blue-950 text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
              title="Send an email to Veliora Links"
            >
              <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-blue-950 text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm cursor-pointer transition-colors text-center"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
