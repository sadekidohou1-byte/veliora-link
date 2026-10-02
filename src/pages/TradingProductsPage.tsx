import React from 'react';
import { TradingAndProducts } from '../components/TradingAndProducts';
import { PageHero } from '../components/PageHero';
import { IMAGES } from '../data/content';

interface TradingProductsPageProps {
  onNavigate: (page: string) => void;
  onSelectProductForQuote: (commodityId: string) => void;
}

export const TradingProductsPage: React.FC<TradingProductsPageProps> = ({ 
  onNavigate, 
  onSelectProductForQuote 
}) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Hero with Dedicated Energy Terminal Image Banner */}
      <PageHero
        breadcrumb="Trading & Products"
        categoryTag="COMMODITY PORTFOLIO · ENERGY & AGRICULTURAL BULK"
        title="TRADING & PRODUCTS"
        subtitle="Physical supply portfolios across Crude Oil, Refined Petroleum Products, Gas, and Agricultural Bulk Commodities delivered to global discharge ports."
        imageSrc={IMAGES.tradingHero}
        imageAlt="Energy terminal, crude oil tanker, and refined petroleum infrastructure"
        onNavigateHome={() => onNavigate('home')}
        highlightStats={[
          { value: 'Crude Oil', label: 'BLCO & Forcados' },
          { value: 'Refined Fuels', label: 'AGO, Jet A1 & D6' },
          { value: 'Gas & LNG', label: 'LPG, LNG & Propane' },
          { value: 'Agri Bulk', label: 'Sugar ICUMSA 45 & Rice' },
        ]}
      />

      {/* Main Catalog */}
      <TradingAndProducts onSelectProductForQuote={onSelectProductForQuote} />

    </div>
  );
};
