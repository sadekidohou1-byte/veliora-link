import { CommodityItem, SupplySolution } from '../types';

import logoAsset from '../assets/images/veliora_logo_mark_1790845296954.jpg';
import heroAsset from '../assets/images/hero_maritime_energy_1790842923558.jpg';
import energyAsset from '../assets/images/energy_terminal_storage_1790842938855.jpg';
import agricultureAsset from '../assets/images/agricultural_sugar_rice_1790842950202.jpg';
import shippingAsset from '../assets/images/global_shipping_port_1790842961744.jpg';

export const COMPANY_INFO = {
  name: 'VELIORA LINKS',
  tagline: 'International Trading • Supply • Procurement • Marketing',
  missionStatement: 'VELIORA LINKS is a maritime company operating in the oil, gas, and diesel sectors in Africa.',
  phone: '+234 703 277 7070',
  phone2: '+229 01 40 67 44 44',
  phoneFormatted: '+234 703 277 7070',
  phone2Formatted: '+229 01 40 67 44 44',
  email: 'Velioralink@gmail.com',
  address: 'Commercial Trading Desk & Maritime Operations, West Africa & Global Hubs',
  hours: 'Monday – Friday: 08:00 – 18:00 (GMT+1) • Operations: 24/7 Monitoring',
};

export const IMAGES = {
  logo: logoAsset || '/images/veliora_logo_mark_1790845296954.jpg',
  hero: heroAsset || '/images/hero_maritime_energy_1790842923558.jpg',
  energy: energyAsset || '/images/energy_terminal_storage_1790842938855.jpg',
  agriculture: agricultureAsset || '/images/agricultural_sugar_rice_1790842950202.jpg',
  shipping: shippingAsset || '/images/global_shipping_port_1790842961744.jpg',
  aboutHero: heroAsset || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1920&q=80',
  tradingHero: energyAsset || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80',
  solutionsHero: shippingAsset || 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1920&q=80',
  servicesHero: energyAsset || 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1920&q=80',
  marketsHero: shippingAsset || 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80',
  complianceHero: heroAsset || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
};

export const COMMODITIES: CommodityItem[] = [
  // Energy & Petroleum - Crude Oil
  {
    id: 'bonny-light',
    name: 'Bonny Light Crude Oil (BLCO)',
    category: 'energy',
    subCategory: 'Crude Oil',
    description: 'Premier Nigerian light sweet crude oil characterized by low sulfur content and high API gravity, optimized for yielding premium gasoline, diesel and jet fuel.',
    commonSpecs: [
      'API Gravity: 35.3° – 37.0° API',
      'Sulfur Content: 0.14% – 0.16% wt max',
      'Pour Point: Below 5°C',
      'Water & Sediment (BS&W): 0.5% max',
      'Reid Vapor Pressure: 6.52 psi'
    ],
    unit: 'Barrels (BBL)',
    minimumVolume: '1,000,000 to 2,000,000 BBL trial / contractual lifts',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP', 'TTT', 'TTO']
  },
  {
    id: 'forcados-light',
    name: 'Forcados Light Crude Oil',
    category: 'energy',
    subCategory: 'Crude Oil',
    description: 'Sweet Nigerian crude oil with excellent distillate properties, high middle distillate yield, and superior refining throughput properties.',
    commonSpecs: [
      'API Gravity: 29.5° – 31.0° API',
      'Sulfur Content: 0.18% wt max',
      'Viscosity: 4.8 cSt @ 50°C',
      'Pour Point: -15°C',
      'Acidity (TAN): 0.28 mg KOH/g'
    ],
    unit: 'Barrels (BBL)',
    minimumVolume: '1,000,000 BBL',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP', 'TTT', 'TTO']
  },
  {
    id: 'other-crude',
    name: 'Other Available Crude Grades',
    category: 'energy',
    subCategory: 'Crude Oil',
    description: 'Custom sourcing of light and medium commercial crude grades from verified international concession holders and authorized allocations.',
    commonSpecs: [
      'Origin-specific assay provided upon LOI/ICPO submission',
      'SGS / Saybolt verifiable Q&Q inspection at loading port',
      'Standard maritime chartering specifications'
    ],
    unit: 'Barrels (BBL)',
    minimumVolume: '500,000 – 2,000,000 BBL',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP', 'TTT', 'TTO']
  },

  // Refined Petroleum Products
  {
    id: 'ago-diesel',
    name: 'AGO / Diesel Fuel (EN590 10PPM / 50PPM / 500PPM)',
    category: 'energy',
    subCategory: 'Refined Petroleum Products',
    description: 'Automotive Gas Oil (AGO) meeting stringent EN590 European and international environmental standards for commercial transport, industrial power, and bunkering.',
    commonSpecs: [
      'Cetane Number: 51 min',
      'Density @ 15°C: 820 – 845 kg/m³',
      'Flash Point: > 55°C',
      'Sulfur: 10 PPM ultra-low sulfur or 50/500 PPM commercial',
      'Cold Filter Plugging Point (CFPP): Grade specific'
    ],
    unit: 'Metric Tons (MT)',
    minimumVolume: '20,000 – 100,000 MT per month',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP', 'TTT', 'TFD']
  },
  {
    id: 'jet-a1',
    name: 'Aviation Kerosene Jet A-1',
    category: 'energy',
    subCategory: 'Refined Petroleum Products',
    description: 'High-purity commercial aviation turbine fuel formulated to DEF STAN 91-091 and ASTM D1655 specifications for international commercial airlines and logistics hubs.',
    commonSpecs: [
      'Freeze Point: -47°C max',
      'Flash Point: 38°C min',
      'Specific Gravity @ 15°C: 0.775 – 0.840 kg/L',
      'Net Heat of Combustion: 42.8 MJ/kg min',
      'Thermal Stability (JFTOT): Pass at 260°C'
    ],
    unit: 'Barrels (BBL) / Metric Tons',
    minimumVolume: '500,000 – 2,000,000 BBL',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP', 'TTO', 'TFD']
  },
  {
    id: 'jp54',
    name: 'Aviation Kerosene Colonial Grade JP54',
    category: 'energy',
    subCategory: 'Refined Petroleum Products',
    description: 'Colonial grade turbine fuel designated for pipeline conveyance and specialized commercial aviation and industrial power generation facilities.',
    commonSpecs: [
      'Gravity API @ 60°F: 37 – 51',
      'Flash Point: 100°F (38°C) min',
      'Freeze Point: -40°F (-40°C) max',
      'Total Acidity: 0.015 mg KOH/g max',
      'Doctor Test: Negative'
    ],
    unit: 'Barrels (BBL)',
    minimumVolume: '1,000,000 – 5,000,000 BBL contract',
    deliveryTerms: ['FOB', 'CIF', 'TFD', 'TTO']
  },
  {
    id: 'fuel-oil',
    name: 'Fuel Oil (CST 180 / CST 380 / M100)',
    category: 'energy',
    subCategory: 'Refined Petroleum Products',
    description: 'Heavy residual fuel oil grades widely utilized for maritime bunker fuel, thermal power generation, and heavy industrial boiler operations.',
    commonSpecs: [
      'Kinematic Viscosity @ 50°C: 180 or 380 mm²/s max',
      'Density @ 15°C: 991.0 kg/m³ max',
      'Flash Point: 60°C min',
      'Sulfur Content: ISO 8217 compliant',
      'Calorific Value: ~40.5 MJ/kg'
    ],
    unit: 'Metric Tons (MT)',
    minimumVolume: '30,000 – 100,000 MT',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP', 'TTT', 'TFD']
  },
  {
    id: 'd6-virgin-oil',
    name: 'Virgin Fuel Oil D6',
    category: 'energy',
    subCategory: 'Refined Petroleum Products',
    description: 'Residual fuel grade primarily deployed as feedstocks for power plants and secondary processing, structured under commercial international sales contracts.',
    commonSpecs: [
      'API Gravity: 15 – 26',
      'Flash Point: > 140°F (60°C)',
      'Water & Sediment: 1.0% max',
      'Sulfur Content: 0.5% – 1.0% max',
      'Calorific Value: 18,000 BTU/lb min'
    ],
    unit: 'Gallons / Barrels',
    minimumVolume: '50,000,000 – 200,000,000 Gallons',
    deliveryTerms: ['FOB', 'CIF', 'TTO', 'TFD']
  },
  {
    id: 'bitumen-asphalt',
    name: 'Bitumen / Asphalt (Penetration Grade 60/70 & 80/100)',
    category: 'energy',
    subCategory: 'Refined Petroleum Products',
    description: 'High-performance petroleum bitumen engineered for heavy highway paving, airport runway construction, waterproofing, and civil infrastructure projects.',
    commonSpecs: [
      'Penetration @ 25°C (100g, 5s): 60 – 70 dmm (or 80 – 100 dmm)',
      'Softening Point: 49°C – 56°C',
      'Ductility @ 25°C: > 100 cm',
      'Loss on Heating: 0.2% max',
      'Flash Point (Cleveland Open): > 250°C'
    ],
    unit: 'Metric Tons (MT) in Drums / Polybags / Bulk Bitutainers',
    minimumVolume: '1,000 – 20,000 MT',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP', 'TFD']
  },

  // Gas
  {
    id: 'lpg',
    name: 'Liquefied Petroleum Gas (LPG)',
    category: 'energy',
    subCategory: 'Gas',
    description: 'Commercial propane and butane mixtures supplied via specialized gas carriers for domestic distribution, industrial heating, and automotive autogas.',
    commonSpecs: [
      'Composition: Propane 30%–70% / Butane 70%–30% blend as requested',
      'Vapor Pressure @ 37.8°C: 1,430 kPa max',
      'Moisture Content: Free of entrained water',
      'Total Sulfur: 30 PPM max',
      'Volatile Residue: Compliant with ASTM D2158'
    ],
    unit: 'Metric Tons (MT)',
    minimumVolume: '5,000 – 30,000 MT pressurized / refrigerated vessels',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP', 'TTT']
  },
  {
    id: 'lng',
    name: 'Liquefied Natural Gas (LNG)',
    category: 'energy',
    subCategory: 'Gas',
    description: 'Cryogenic methane liquefied at -162°C for long-distance maritime transport to regasification terminals and utility power grids.',
    commonSpecs: [
      'Methane Content (CH4): 88% – 95% mol',
      'Ethane (C2H6): 4% – 8% mol',
      'Gross Heating Value: 1,000 – 1,150 BTU/scf',
      'Temperature: -160°C to -162°C at atmospheric pressure',
      'Strict boil-off management compliance'
    ],
    unit: 'Metric Tons (MT) / MMBtu',
    minimumVolume: 'Full Cargo parcels (60,000 – 150,000 m³)',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP']
  },

  // Agricultural Commodities - Sugar
  {
    id: 'sugar-icumsa-45',
    name: 'Refined White Cane Sugar ICUMSA 45',
    category: 'agriculture',
    subCategory: 'Sugar',
    description: 'The global benchmark for highest-grade sparkling white refined cane sugar, fit for direct human consumption and demanding food & beverage manufacturing.',
    commonSpecs: [
      'ICUMSA Rating: Max 45 RBU (Attenuation Index Units)',
      'Polarization @ 20°C: 99.80% minimum',
      'Moisture Content: 0.04% max',
      'Ash Content: 0.04% max',
      'Solubility: 100% dry and free flowing',
      'Granulation: Fine to medium crystal',
      'Radiation: Normal without presence of Cesium or Iodine'
    ],
    unit: 'Metric Tons (MT) in 50kg export bags or bulk sling bags',
    minimumVolume: '12,500 – 50,000 MT monthly / spot contracts',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP']
  },
  {
    id: 'sugar-refined-commercial',
    name: 'Refined Sugar & Other Commercially Available Grades',
    category: 'agriculture',
    subCategory: 'Sugar',
    description: 'Commercial cane and beet sugar varieties including ICUMSA 100, ICUMSA 150 (white crystal sugar), and VHP Raw Sugar (ICUMSA 600-1200) for refinery feedstocks.',
    commonSpecs: [
      'Polarization: 99.20% – 99.70% min according to grade',
      'Moisture: 0.08% max',
      'Color: Sparkling white to golden raw cane crystal',
      'Packaging: 50kg woven polypropylene bags with inner polyethylene liner'
    ],
    unit: 'Metric Tons (MT)',
    minimumVolume: '5,000 – 25,000 MT',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP']
  },

  // Agricultural Commodities - Rice
  {
    id: 'parboiled-rice',
    name: 'Parboiled Rice (5%, 10%, 100% Broken)',
    category: 'agriculture',
    subCategory: 'Rice',
    description: 'Nutrient-rich, steamed and milled parboiled grain rice prized for high cooking firmness, consistent kernel length, and extended shelf stability.',
    commonSpecs: [
      'Broken Grains: 5% max (or customer specific 10%, 25%, 100%)',
      'Moisture Content: 14% maximum',
      'Average Grain Length: 6.0 mm – 6.6 mm',
      'Foreign Matter: 0.1% max',
      'Paddy Kernels: 2 grains per kg max',
      'Crop Year: Current / Fresh harvest'
    ],
    unit: 'Metric Tons (MT) in 25kg / 50kg bags',
    minimumVolume: '5,000 – 25,000 MT bulk / containerized',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP']
  },
  {
    id: 'long-grain-rice',
    name: 'Long Grain White Rice & Custom Specifications',
    category: 'agriculture',
    subCategory: 'Rice',
    description: 'Premium polished non-basmati and specialty long grain rice milled to custom buyer specifications for commercial distribution and institutional tenders.',
    commonSpecs: [
      'Milling Degree: Well milled, double polished, sortexed',
      'Grain Length: 6.2 mm – 7.0 mm',
      'Moisture: 14% max',
      'Chalky Kernels: 3% max',
      'Damaged / Discolored: 1.0% max',
      'Certifications: Phytosanitary & SGS inspection certificates included'
    ],
    unit: 'Metric Tons (MT)',
    minimumVolume: '2,500 – 20,000 MT',
    deliveryTerms: ['FOB', 'CIF', 'CIF ASWP']
  }
];

export const SUPPLY_SOLUTIONS: SupplySolution[] = [
  {
    code: 'FOB',
    name: 'Free On Board',
    fullName: 'Free On Board (Named Port of Shipment)',
    description: 'The seller delivers the goods on board the vessel nominated by the buyer at the named port of shipment. The risk of loss or damage transfers to the buyer once the goods are on board.',
    applicability: 'Maritime petroleum lifts, bulk grain chartering, and offshore terminal loadings where the buyer controls freight chartering.',
    keyFeatures: [
      'Buyer nominates and arranges sea vessel charter',
      'Seller manages export clearance, loading formalities and terminal port handling',
      'Title and risk transfer over vessel manifold / ship rail'
    ]
  },
  {
    code: 'CIF',
    name: 'Cost, Insurance & Freight',
    fullName: 'Cost, Insurance & Freight (Named Port of Destination)',
    description: 'The seller contracts and pays for transportation, ocean freight, and cargo insurance to the agreed destination discharge port. Seller clears goods for export.',
    applicability: 'Standard international trade contracts across energy and agricultural commodities, giving the buyer predictable landed port costs.',
    keyFeatures: [
      'Seller pays maritime freight and marine transit insurance to destination',
      'Risk transfers upon loading on board vessel; cost coverage extends to discharge port',
      'Comprehensive SGS inspection and full shipping documents delivered to buyer bank'
    ]
  },
  {
    code: 'CIF ASWP',
    name: 'CIF — Any Safe World Port',
    fullName: 'Cost, Insurance & Freight — Any Safe World Port',
    description: 'Specialized international trading mechanism where the contract price covers freight and insurance delivered to any designated safe international seaport globally without restricted sanction hurdles.',
    applicability: 'Institutional commodity contracts, large-scale refined fuels (AGO, Jet A1) and sugar/rice bulk shipments requiring destination flexibility.',
    keyFeatures: [
      'Global destination flexibility under standard maritime charter parties',
      'Discharge port must guarantee safe berth, draft, and navigation access',
      'Guaranteed delivery backed by documentary letters of credit and inspection'
    ]
  },
  {
    code: 'TTT',
    name: 'Tanker-To-Tanker (STS)',
    fullName: 'Tanker-To-Tanker / Ship-to-Ship (STS) Transfer',
    description: 'Direct maritime transshipment of crude oil or refined petroleum products between two sea-going vessels positioned alongside each other in international waters or designated anchorage areas.',
    applicability: 'Crude oil parcels (Bonny Light, Forcados), deepwater transshipment, lightening operations, and regional offshore distribution hubs.',
    keyFeatures: [
      'Conducted in designated maritime anchorage under OCIMF / ICS safety guidelines',
      'Full Q&Q dip inspection conducted on mother vessel and receiving vessel manifolds',
      'Rapid turnaround avoiding congested onshore port queue times'
    ]
  },
  {
    code: 'TFD',
    name: 'Tank Farm Delivery',
    fullName: 'Tank Farm Delivery / Shore Tank Transfer',
    description: 'Commercial delivery directly into an onshore shore tank, storage depot, or licensed commercial tank farm terminal specified by the buyer.',
    applicability: 'Refined fuels (Diesel AGO, Jet Fuel, Bitumen, LPG) for regional storage operators, fuel distributors, and domestic marketing companies.',
    keyFeatures: [
      'Direct pipeline injection into buyer bonded or commercial tank farm',
      'Shore tank dip inspection before and after pumping for exact custody transfer',
      'Title transfer upon completion of pipeline injection into designated tank'
    ]
  },
  {
    code: 'TTO',
    name: 'Tanker Take Over',
    fullName: 'Tanker Take Over / Vessel Cargo Custody Transfer',
    description: 'The buyer acquires full title and custody of the commodity already loaded on board an active sea-going tanker vessel, assuming the remaining voyage charter or directing the vessel to a new destination.',
    applicability: 'Afloat cargoes of crude oil or refined products on high seas or approaching designated territorial waters.',
    keyFeatures: [
      'Vessel charter party and bill of lading novation / reassignment',
      'Immediate delivery timeline without waiting for origin refinery loading windows',
      'Verification of vessel NOR (Notice of Readiness), Q&Q inspection and CPA'
    ]
  }
];

export const BUSINESS_MODEL_PILLARS = [
  {
    title: 'PRINCIPAL TRADING',
    subtitle: 'Direct Commercial Participation',
    description: 'Where appropriate, Veliora Link participates directly in commodity transactions as a seller or trading principal. We structure transactions based on available supply, buyer requirements, contractual terms and applicable compliance requirements.',
    detail: 'As a principal, we take an active commercial position, deploying working capital and executing bilateral sales and purchase agreements with verifiable counterparties.'
  },
  {
    title: 'PROCUREMENT',
    subtitle: 'Targeted Sourcing & Coordination',
    description: 'Where a client has a specific requirement, we identify and coordinate suitable sourcing opportunities based on: Product | Specification | Quantity | Origin | Destination | Timeline | Delivery Terms.',
    detail: 'Our procurement desk screens global refiners, primary producers and allocation holders to ensure strict product conformity and competitive commercial pricing.'
  },
  {
    title: 'MARKETING',
    subtitle: 'Commercial Channel Access',
    description: 'We support producers, suppliers and commodity owners seeking access to qualified commercial markets.',
    detail: 'We connect commodity assets with genuine, solvent demand across West Africa, the Middle East, Asia and Europe through established buyer networks.'
  },
  {
    title: 'DISTRIBUTION',
    subtitle: 'Integrated Logistics & Delivery',
    description: 'We coordinate supply and delivery solutions through appropriate logistics and distribution channels.',
    detail: 'From ocean tanker chartering and coastal barge transshipment to bonded terminal storage and customs release, we streamline physical execution.'
  }
];

export const PROCUREMENT_CRITERIA = [
  { name: 'Product', detail: 'Specific crude, refined fuel, gas, or bulk agricultural commodity.' },
  { name: 'Specification', detail: 'Exact chemical and physical benchmarks (API, Sulfur, ICUMSA, Moisture).' },
  { name: 'Quantity', detail: 'Verified spot allocation volume or multi-month lifting schedule.' },
  { name: 'Origin', detail: 'Approved producing basin, refinery origin, or export country.' },
  { name: 'Destination', detail: 'Discharge port, safe anchorage, or bonded onshore tank farm.' },
  { name: 'Timeline', detail: 'Target laycan window, loading schedule, or delivery deadline.' },
  { name: 'Delivery Terms', detail: 'Commercial Incoterm mechanism (FOB, CIF, CIF ASWP, TTT, TFD, TTO).' }
];

export const VALUE_CREATION_ITEMS = [
  {
    title: 'Market Access',
    description: 'Connecting supply with genuine commercial demand across verified buyer and distributor networks.'
  },
  {
    title: 'Sourcing',
    description: 'Identifying appropriate commodity sources based on exact client specifications and quality standards.'
  },
  {
    title: 'Structured Trading',
    description: 'Developing commercially viable transaction structures, bank payment mechanics, and contract terms.'
  },
  {
    title: 'Procurement',
    description: 'Finding products that meet defined quantity, specification, and timely delivery requirements.'
  },
  {
    title: 'Market Development',
    description: 'Expanding sustainable trading corridors, terminal partnerships, and long-term supply relationships.'
  }
];

export const VALUE_CREATION_PILLARS = [
  {
    title: 'MARKET ACCESS',
    description: 'Connecting supply with genuine commercial demand.',
    summary: 'Bridging the gap between primary resource holders and verified end-users, industrial consumers, and licensed commercial distributors.'
  },
  {
    title: 'SOURCING',
    description: 'Identifying appropriate commodity sources based on client specifications.',
    summary: 'Rigorous vetting of crude origins, refinery yields, agricultural milling standards, and physical export certifications.'
  },
  {
    title: 'STRUCTURED TRADING',
    description: 'Developing commercially appropriate transaction structures.',
    summary: 'Crafting workable payment instruments (LC, SBLC MT760, Escrow), Incoterm logistics, and legally sound bilateral contract terms.'
  },
  {
    title: 'PROCUREMENT',
    description: 'Finding products that meet defined quantity, specification and delivery requirements.',
    summary: 'Custom order fulfillment tailored to refinery inputs, aviation schedules, food processing requirements, and sovereign tenders.'
  },
  {
    title: 'MARKET DEVELOPMENT',
    description: 'Expanding sustainable trading corridors and distribution pipelines.',
    summary: 'Cultivating enduring multi-year commercial partnerships built on reliable volume delivery, transparency, and market intelligence.'
  }
];

export const MARKETS_DATA = [
  {
    region: 'West Africa & Gulf of Guinea',
    focus: 'Crude Oil Exports (Bonny Light, Forcados), Refined Petroleum Import & Distribution (AGO, Jet A1), Bulk Sugar & Parboiled Rice distribution.',
    features: ['Offshore STS anchoring operations', 'Direct terminal coastal supplies', 'Local distribution partner networks']
  },
  {
    region: 'Middle East & Arab Gulf',
    focus: 'Refined petroleum products trading (AGO, Fuel Oil, Bitumen), LPG/LNG cargo transshipment, bunker fuel provisioning.',
    features: ['Strategic bunkering hubs', 'High-volume refinery partnerships', 'Commercial trading desks']
  },
  {
    region: 'Asia & Far East Trade Corridors',
    focus: 'Crude oil parcel flows, industrial gas (LNG/LPG), large-volume ICUMSA 45 sugar and long-grain rice shipments.',
    features: ['Deepwater VLCC discharge ports', 'Industrial energy off-takers', 'Agricultural bulk processing mills']
  },
  {
    region: 'Europe & Mediterranean',
    focus: 'Low-sulfur diesel fuel (EN590 10PPM), aviation fuels, specialized bitumen grades, and international chartering routes.',
    features: ['Strict compliance with ARA standards', 'REACH & international environmental criteria', 'First-class banking jurisdictions']
  }
];

export const COMPLIANCE_STANDARDS = [
  {
    title: 'Know Your Customer (KYC) & AML',
    description: 'Strict adherence to international Anti-Money Laundering (AML) and Counter-Terrorism Financing standards. Every counterparty must undergo thorough identity and beneficial ownership verification before entering trade negotiations.'
  },
  {
    title: 'Independent Inspection (SGS / Saybolt)',
    description: 'All physical commodity movements are inspected by internationally accredited independent testing authorities (SGS, Saybolt, Intertek) at loading and discharge ports for Quality & Quantity (Q&Q) verification.'
  },
  {
    title: 'Standard International Procedures',
    description: 'Transactions adhere strictly to international commodity trading protocols (LOI / ICPO -> FCO -> Contract / SPA -> Banking Instrument -> POP & Q&Q Inspection -> Title Transfer & Payment).'
  },
  {
    title: 'Sanctions & Legal Compliance',
    description: 'Zero tolerance for sanctioned entities, blacklisted vessels, or illicit trade routes. All operations conform to maritime laws, IMO standards, and ICC (International Chamber of Commerce) Uniform Rules.'
  }
];
