import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { Logo } from './Logo';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onRequestQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onRequestQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Corporate Hotline & Market Hours Bar */}
      <div className="bg-blue-950 text-xs text-slate-200 py-1.5 sm:py-2 px-3 sm:px-6 lg:px-8 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="font-semibold text-white tracking-wide text-[11px] sm:text-xs truncate">
              Maritime Trading Desk
            </span>
            <span className="hidden md:inline text-blue-300">·</span>
            <span className="hidden md:inline text-slate-300 truncate">West Africa & Global Hubs</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs shrink-0">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1 sm:gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-semibold tabular-nums"
              title="Nigeria Commercial Desk"
            >
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <span className="text-blue-400/60 hidden sm:inline">|</span>
            <a 
              href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, '')}`} 
              className="hidden lg:flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-semibold tabular-nums"
              title="Benin / West Africa Operations"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{COMPANY_INFO.phone2}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Header (Clean Vitol / Trafigura Style) */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm' 
            : 'bg-white border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo Mark */}
          <button 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2 group focus:outline-none cursor-pointer shrink-0"
          >
            <Logo variant="horizontal" theme="light" />
          </button>

          {/* 8 Main Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-[13px] font-semibold tracking-wide">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2 transition-all relative cursor-pointer ${
                    isActive
                      ? 'text-blue-950 font-bold'
                      : 'text-slate-600 hover:text-blue-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Medium screen navigation */}
          <div className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-semibold text-slate-700">
            {navLinks.slice(0, 5).map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`transition-colors cursor-pointer ${activePage === link.id ? 'text-blue-950 font-bold underline decoration-amber-500 underline-offset-8' : 'hover:text-blue-900'}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-xs text-amber-600 font-bold hover:underline"
            >
              More ({navLinks.length - 5})
            </button>
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onRequestQuote}
              className="hidden sm:inline-flex px-3.5 sm:px-5 py-2 sm:py-2.5 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-[11px] sm:text-xs uppercase tracking-wider rounded transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap cursor-pointer items-center gap-1.5"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-blue-950 stroke-[2.5]" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-blue-950 rounded-lg border border-slate-200 hover:bg-slate-50 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 sm:px-6 py-5 space-y-4 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest">
                Site Pages Directory
              </span>
              <span className="text-[11px] text-slate-500 font-medium">8 Sections</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                    activePage === link.id
                      ? 'bg-amber-50 text-blue-950 border border-amber-300'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-950'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </button>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-blue-950 text-xs font-bold tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Nigeria Desk: {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200 text-blue-950 text-xs font-bold tabular-nums"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Bénin Desk: {COMPANY_INFO.phone2}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestQuote();
                }}
                className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-xs uppercase tracking-wider rounded-lg text-center shadow mt-1 cursor-pointer"
              >
                REQUEST A QUOTE
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
