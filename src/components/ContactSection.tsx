import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { sendContactInquiryEmail, COMPANY_RECIPIENT_EMAIL } from '../services/emailService';

interface ContactSectionProps {
  onRequestQuote: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Commodity Trading Inquiry',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await sendContactInquiryEmail(formData);
    } catch (err) {
      console.warn('Contact email error:', err);
    } finally {
      setIsSending(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-12 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-2 sm:space-y-3">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-widest flex items-center gap-2">
            <Phone className="w-4 h-4 text-amber-600 shrink-0" />
            <span>COMMERCIAL DESK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-display uppercase tracking-tight text-blue-950 break-words leading-tight sm:leading-none">
            Direct Trading Inquiries & Execution Desk
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            Engage directly with our commercial desk regarding spot allocations, term contracts, or vessel chartering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card (Official Hotlines) */}
            <div className="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-blue-950 text-white space-y-5 sm:space-y-6 shadow-lg border border-blue-900">
              <div className="flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-widest">
                  Official Trading Hotlines
                </span>
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
              </div>

              {/* Line 1: Nigeria */}
              <div className="space-y-2 border-b border-blue-900/80 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                    Commercial Desk (Nigeria)
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 bg-blue-900/60 px-2 py-0.5 rounded">
                    +234 Desk
                  </span>
                </div>
                <div className="text-lg sm:text-2xl font-mono font-bold tracking-tight text-white truncate">
                  {COMPANY_INFO.phone}
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Call Nigeria Desk</span>
                </a>
              </div>

              {/* Line 2: Benin */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                    Operations Desk (Bénin)
                  </span>
                  <span className="text-[10px] font-mono text-amber-400 bg-blue-900/60 px-2 py-0.5 rounded">
                    +229 Desk
                  </span>
                </div>
                <div className="text-lg sm:text-2xl font-mono font-bold tracking-tight text-white truncate">
                  {COMPANY_INFO.phone2}
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phone2.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
                >
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>Call Bénin Desk</span>
                </a>
              </div>
            </div>

            {/* Email & Hub Coordinates */}
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-slate-200 text-amber-600 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-blue-950">Electronic Inquiries</div>
                  <div className="text-xs text-slate-600 font-mono mt-0.5">{COMPANY_INFO.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-slate-200 text-amber-600 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-blue-950">Operating Centers</div>
                  <div className="text-xs text-slate-600 mt-0.5">{COMPANY_INFO.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-white border border-slate-200 text-amber-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase text-blue-950">Desk Availability</div>
                  <div className="text-xs text-slate-600 mt-0.5">{COMPANY_INFO.hours}</div>
                </div>
              </div>
            </div>

            {/* Quote Action Trigger */}
            <div className="p-6 rounded-xl bg-amber-50 border border-amber-200 space-y-3">
              <h4 className="text-sm font-bold uppercase text-blue-950">
                Need a Structured Term Sheet?
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                Use our structured Quotation Engine to specify your exact commodity, volume in metric tons or barrels, and target Incoterm (FOB/CIF).
              </p>
              <button
                onClick={onRequestQuote}
                className="w-full py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded text-center transition-colors cursor-pointer shadow-sm"
              >
                Open Quotation Builder
              </button>
            </div>

          </div>

          {/* Right Column: Formal Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display uppercase text-blue-950">
                  Inquiry Dispatched to Commercial Desk
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you. Your commercial requirement has been logged and routed to <strong>{COMPANY_RECIPIENT_EMAIL}</strong>. An allocation manager will review your parameters and follow up shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-blue-950 text-xs font-bold uppercase rounded border border-slate-200 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display uppercase text-blue-950">
                    Commercial Desk Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500">
                    Submit your corporate background and commodity inquiries directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adebayo Adebisi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Corporate Entity *</label>
                    <input
                      type="text"
                      required
                      placeholder="Company or Group Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Direct Telephone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 ... or international"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Inquiry Scope</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  >
                    <option>Crude Oil Sourcing (Bonny Light / Forcados)</option>
                    <option>Refined Petroleum Products (AGO Diesel / Jet A1 / Fuel Oil)</option>
                    <option>Agricultural Commodities (Sugar ICUMSA 45 / Rice)</option>
                    <option>Maritime Vessel Chartering & Logistics (STS/TTT)</option>
                    <option>Producer Representation & Cargo Marketing</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Specific Requirement Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify target commodity, estimated volume, preferred delivery term (FOB/CIF) and discharge port..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-70 text-blue-950 font-bold text-xs uppercase tracking-wider rounded shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSending ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Transmission en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Commercial Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
