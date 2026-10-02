/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

// Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TradingProductsPage } from './pages/TradingProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { SupplySolutionsPage } from './pages/SupplySolutionsPage';
import { MarketsPage } from './pages/MarketsPage';
import { CompliancePage } from './pages/CompliancePage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteCommodityId, setQuoteCommodityId] = useState<string | undefined>(undefined);
  const [quoteDeliveryTerm, setQuoteDeliveryTerm] = useState<string | undefined>(undefined);

  // Sync with browser URL hash for real page routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const validPages = [
        'home',
        'about',
        'trading',
        'services',
        'supply-solutions',
        'markets',
        'compliance',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else if (!hash) {
        setActivePage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToPage = (pageId: string) => {
    setActivePage(pageId);
    window.location.hash = `#/${pageId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (commodityId?: string, deliveryTerm?: string) => {
    setQuoteCommodityId(commodityId);
    setQuoteDeliveryTerm(deliveryTerm);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setQuoteCommodityId(undefined);
    setQuoteDeliveryTerm(undefined);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-500 selection:text-blue-950">
      
      {/* Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateToPage}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Main Page Content Router */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigateToPage}
            onRequestQuote={() => handleOpenQuote()}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigate={navigateToPage}
            onRequestQuote={() => handleOpenQuote()}
          />
        )}

        {activePage === 'trading' && (
          <TradingProductsPage
            onNavigate={navigateToPage}
            onSelectProductForQuote={(id) => handleOpenQuote(id)}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={navigateToPage}
            onRequestQuote={() => handleOpenQuote()}
          />
        )}

        {activePage === 'supply-solutions' && (
          <SupplySolutionsPage
            onNavigate={navigateToPage}
            onRequestQuoteWithTerm={(term) => handleOpenQuote(undefined, term)}
          />
        )}

        {activePage === 'markets' && (
          <MarketsPage
            onNavigate={navigateToPage}
            onRequestQuote={() => handleOpenQuote()}
          />
        )}

        {activePage === 'compliance' && (
          <CompliancePage
            onNavigate={navigateToPage}
            onRequestQuote={() => handleOpenQuote()}
          />
        )}

        {activePage === 'contact' && (
          <ContactPage
            onNavigate={navigateToPage}
            onRequestQuote={() => handleOpenQuote()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateToPage}
        onRequestQuote={() => handleOpenQuote()}
      />

      {/* Quote / Commercial Enquiry Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        initialCommodityId={quoteCommodityId}
        initialDeliveryTerm={quoteDeliveryTerm}
      />
    </div>
  );
}
