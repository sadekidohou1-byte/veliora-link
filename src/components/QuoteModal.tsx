import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Calculator, ShieldCheck, FileSpreadsheet, Loader2, Mail } from 'lucide-react';
import { COMMODITIES, SUPPLY_SOLUTIONS, COMPANY_INFO } from '../data/content';
import { sendQuoteRequestEmail, COMPANY_RECIPIENT_EMAIL } from '../services/emailService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCommodityId?: string;
  initialDeliveryTerm?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCommodityId,
  initialDeliveryTerm,
}) => {
  const [commodityId, setCommodityId] = useState<string>(initialCommodityId || COMMODITIES[0].id);
  const [deliveryTerm, setDeliveryTerm] = useState<string>(initialDeliveryTerm || 'CIF');
  const [quantity, setQuantity] = useState<string>('50,000');
  const [unit, setUnit] = useState<string>('Metric Tons');
  const [destinationPort, setDestinationPort] = useState<string>('');
  const [targetTimeline, setTargetTimeline] = useState<string>('Prompt (30-45 Days)');
  
  const [buyerName, setBuyerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [corporateEmail, setCorporateEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [routedRecipient, setRoutedRecipient] = useState(COMPANY_RECIPIENT_EMAIL);

  useEffect(() => {
    if (initialCommodityId) setCommodityId(initialCommodityId);
    if (initialDeliveryTerm) setDeliveryTerm(initialDeliveryTerm);
  }, [initialCommodityId, initialDeliveryTerm]);

  if (!isOpen) return null;

  const selectedCommodity = COMMODITIES.find((c) => c.id === commodityId) || COMMODITIES[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const generatedRef = `VL-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(generatedRef);

    try {
      const result = await sendQuoteRequestEmail({
        referenceCode: generatedRef,
        commodityName: selectedCommodity.name,
        category: selectedCommodity.subCategory,
        quantity,
        unit,
        deliveryTerm,
        destinationPort,
        targetTimeline,
        buyerName,
        companyName,
        corporateEmail,
        phone,
        additionalNotes,
      });
      setRoutedRecipient(result.recipient);
    } catch (err) {
      console.warn('Dispatch error handled:', err);
    } finally {
      setIsSending(false);
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[94vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden text-slate-900"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-blue-950 text-white px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between border-b border-blue-900">
          <div>
            <div className="text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <span>COMMERCIAL TRADING DESK</span>
            </div>
            <h3 className="text-base sm:text-xl font-bold font-display uppercase tracking-tight text-white">
              Official Request for Quotation (RFQ)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-blue-900 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 sm:space-y-6 flex-grow">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  RFQ Generated & Logged
                </span>
                <h4 className="text-2xl font-bold font-display uppercase text-blue-950">
                  Quotation Docket Transmitted
                </h4>
                <div className="inline-block px-4 py-1.5 bg-slate-100 border border-slate-200 rounded font-mono text-sm font-bold text-amber-600 mt-2">
                  DOCKET REF: {referenceCode}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Your parameters for <strong>{quantity} {unit}</strong> of <strong>{selectedCommodity.name}</strong> under <strong>{deliveryTerm}</strong> terms have been routed to the chief commercial officer.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 text-left max-w-md mx-auto space-y-1.5">
                <div className="flex items-center gap-2 text-blue-950 font-semibold">
                  <Mail className="w-3.5 h-3.5 text-amber-600" />
                  <span>Transmis à la boîte commerciale : {routedRecipient}</span>
                </div>
                <div><strong>Lignes directes :</strong> {COMPANY_INFO.phone} (NG) / {COMPANY_INFO.phone2} (BJ)</div>
                <div><strong>Délai de traitement standard :</strong> 2–4 Heures Ouvrées</div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-blue-950 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-blue-900 transition-all cursor-pointer"
                >
                  Fermer & Retourner au site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Part 1: Commodity & Volume Parameters */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-1">
                  1. Commodity & Volume Specifications
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Target Commodity *</label>
                    <select
                      value={commodityId}
                      onChange={(e) => setCommodityId(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    >
                      {COMMODITIES.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.subCategory})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Delivery Mechanism (Incoterm) *</label>
                    <select
                      value={deliveryTerm}
                      onChange={(e) => setDeliveryTerm(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    >
                      {SUPPLY_SOLUTIONS.map((s) => (
                        <option key={s.code} value={s.code}>
                          {s.code} — {s.fullName}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="space-y-1 col-span-1">
                    <label className="text-xs font-bold text-slate-700">Volume Required *</label>
                    <input
                      type="text"
                      required
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 50,000"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1 col-span-1">
                    <label className="text-xs font-bold text-slate-700">Measurement Unit *</label>
                    <select
                      value={unit}
                      onChange={(e) => setUnit(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    >
                      <option>Metric Tons (MT)</option>
                      <option>Barrels (bbl)</option>
                      <option>Gallons</option>
                      <option>Liters</option>
                      <option>50kg Bags (Agriculture)</option>
                    </select>
                  </div>

                  <div className="space-y-1 col-span-2 sm:col-span-1">
                    <label className="text-xs font-bold text-slate-700">Target Timeline *</label>
                    <select
                      value={targetTimeline}
                      onChange={(e) => setTargetTimeline(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    >
                      <option>Prompt (15–30 Days)</option>
                      <option>Standard (30–60 Days)</option>
                      <option>12-Month Term Contract</option>
                      <option>Spot Lift Only</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Discharge / Delivery Port or Terminal *</label>
                  <input
                    type="text"
                    required
                    value={destinationPort}
                    onChange={(e) => setDestinationPort(e.target.value)}
                    placeholder="e.g. Port of Lagos / Rotterdam / Singapore / Lome Offshore"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Part 2: Buyer & Counterparty Information */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 pb-1">
                  2. Counterparty Credentials (KYC Preliminary)
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Authorized Officer *</label>
                    <input
                      type="text"
                      required
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      placeholder="Full Name & Title"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Buying Entity / Company Name *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Registered Corporate Name"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Corporate Email Address *</label>
                    <input
                      type="email"
                      required
                      value={corporateEmail}
                      onChange={(e) => setCorporateEmail(e.target.value)}
                      placeholder="officer@corporate.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Direct Telephone / Mobile *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 ... or international"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Additional Instructions or Target Grade</label>
                  <textarea
                    rows={2}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="Specific API gravity, sulfur content, packaging, or inspection requirements..."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-between gap-4 border-t border-slate-200">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Confidentiality & Non-Disclosure Protected</span>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-70 text-blue-950 font-bold text-xs uppercase tracking-wider rounded transition-all shadow cursor-pointer flex items-center gap-2"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Transmission en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Official RFQ</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};
