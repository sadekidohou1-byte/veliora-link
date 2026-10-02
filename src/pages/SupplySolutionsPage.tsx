import React from 'react';
import { SupplySolutions } from '../components/SupplySolutions';
import { PageHero } from '../components/PageHero';
import { IMAGES } from '../data/content';

interface SupplySolutionsPageProps {
  onNavigate: (page: string) => void;
  onRequestQuoteWithTerm: (term: string) => void;
}

export const SupplySolutionsPage: React.FC<SupplySolutionsPageProps> = ({ 
  onNavigate, 
  onRequestQuoteWithTerm 
}) => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Page Hero with Dedicated Maritime Shipping Image Banner */}
      <PageHero
        breadcrumb="Supply Solutions"
        categoryTag="MARITIME LOGISTICS & TRANSACTION STRUCTURES"
        title="OUR SUPPLY SOLUTIONS"
        subtitle="Structuring transactions using rigorous international maritime mechanisms: FOB, CIF, CIF ASWP, TTT (Tanker-to-Tanker), TFD, and TTO."
        imageSrc={IMAGES.solutionsHero}
        imageAlt="Ocean cargo ship and maritime delivery mechanisms"
        onNavigateHome={() => onNavigate('home')}
        highlightStats={[
          { value: 'FOB & CIF', label: 'Incoterms Standard' },
          { value: 'TTT & TTO', label: 'Tanker Operations' },
          { value: 'ASWP', label: 'Safe World Ports' },
          { value: 'SGS / Saybolt', label: 'Testing Protocol' },
        ]}
      />

      {/* Main Delivery Structures */}
      <SupplySolutions onRequestQuoteWithTerm={onRequestQuoteWithTerm} />

    </div>
  );
};
