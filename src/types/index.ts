export type CommodityCategory = 'energy' | 'agriculture' | 'general';

export interface CommodityItem {
  id: string;
  name: string;
  category: CommodityCategory;
  subCategory: string;
  description: string;
  commonSpecs: string[];
  unit: string;
  minimumVolume?: string;
  deliveryTerms: string[];
}

export interface SupplySolution {
  code: string;
  name: string;
  fullName: string;
  description: string;
  applicability: string;
  keyFeatures: string[];
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  commodityId: string;
  customProduct?: string;
  quantity: string;
  unit: string;
  deliveryTerm: string;
  destinationPort: string;
  timeline: string;
  paymentMethod: string;
  specifications: string;
  additionalNotes?: string;
}
