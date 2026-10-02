import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Download, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onRequestQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'trading', name: 'Trading & Products' },
    { id: 'services', name: 'Our Services' },
    { id: 'supply-solutions', name: 'Supply Solutions' },
    { id: 'markets', name: 'Markets' },
    { id: 'compliance', name: 'Compliance' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleLink = (id: string) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-950 text-slate-300 border-t border-blue-900 text-xs">
      
      {/* Top Banner with Quote CTA */}
      <div className="bg-blue-900/40 border-b border-blue-900/60 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold font-display text-white uppercase tracking-wider">
              VELIORA LINKS — PHYSICAL COMMODITY & MARITIME TRADING
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              {COMPANY_INFO.missionStatement}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full md:w-auto shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="px-4 py-2.5 bg-blue-950 hover:bg-blue-900 text-amber-400 font-semibold rounded-lg border border-blue-800 flex items-center justify-center gap-2 tabular-nums text-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={onRequestQuote}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm cursor-pointer text-xs text-center"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Column 1 & 2: Brand Lockup & Value */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => handleLink('home')} className="text-left">
              <Logo variant="horizontal" theme="dark" />
            </button>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              International Trading • Supply • Procurement • Marketing
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Veliora Links facilitates the movement of commodities from source to market through structured trading, procurement and supply solutions. Built on integrity, transparency, and consistent execution.
            </p>
            <div className="pt-2 text-xs space-y-2.5 text-slate-300">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors group cursor-pointer"
                title="Call Nigeria Commercial Desk"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-white font-semibold group-hover:text-amber-400">NG: {COMPANY_INFO.phone}</span>
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors group cursor-pointer"
                title="Call Benin Operations Desk"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-white font-semibold group-hover:text-amber-400">BJ: {COMPANY_INFO.phone2}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors group cursor-pointer"
                title="Send an email to Veliora Links"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono text-slate-300 group-hover:text-amber-400">{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          {/* Column 3: Site Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pages Directory
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleLink(link.id)}
                    className="hover:text-amber-400 transition-colors block py-0.5 text-left cursor-pointer text-slate-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Commodity Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Trading Portfolios
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleLink('trading')} className="text-left hover:text-white">
                  <span className="text-white block font-semibold text-[11px] uppercase">Crude Oil</span>
                  Bonny Light, Forcados Light
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('trading')} className="text-left hover:text-white">
                  <span className="text-white block font-semibold text-[11px] uppercase">Refined Products</span>
                  AGO Diesel, Jet A1, JP54, Fuel Oil, Bitumen
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('trading')} className="text-left hover:text-white">
                  <span className="text-white block font-semibold text-[11px] uppercase">Gas Products</span>
                  LPG & LNG Cryogenic
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('trading')} className="text-left hover:text-white">
                  <span className="text-white block font-semibold text-[11px] uppercase">Agricultural</span>
                  Sugar ICUMSA 45, Parboiled Rice
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Delivery Structures */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Supply Solutions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300 font-mono">
              <li><button onClick={() => handleLink('supply-solutions')} className="hover:text-amber-400">FOB — Free On Board</button></li>
              <li><button onClick={() => handleLink('supply-solutions')} className="hover:text-amber-400">CIF — Cost, Insurance & Freight</button></li>
              <li><button onClick={() => handleLink('supply-solutions')} className="hover:text-amber-400">CIF ASWP — Any Safe World Port</button></li>
              <li><button onClick={() => handleLink('supply-solutions')} className="hover:text-amber-400">TTT — Tanker-To-Tanker (STS)</button></li>
              <li><button onClick={() => handleLink('supply-solutions')} className="hover:text-amber-400">TFD — Tank Farm Delivery</button></li>
              <li><button onClick={() => handleLink('supply-solutions')} className="hover:text-amber-400">TTO — Tanker Take Over</button></li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-400 italic">
              Governed under ICC Incoterms & Maritime Laws.
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, ZIP Download & Back to Top */}
       

      </div>
    </footer>
  );
};
