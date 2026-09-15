import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { SERVICES_DATA, PACKAGES_DATA, CALCULATOR_ADDONS, COMPANY_CONTACT } from '../data/cleaningData';

export interface BookingEstimateConfig {
  sqft: number;
  tier: string;
  frequency: string;
  addons: string[];
  total: number;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelection?: string;
  estimateConfig?: BookingEstimateConfig | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSelection,
  estimateConfig
}) => {
  const [selectedType, setSelectedType] = useState<string>('residential');
  const [selectedPackage, setSelectedPackage] = useState<string>(initialSelection || 'signature');
  const [sqft, setSqft] = useState<number>(2400);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (estimateConfig) {
      setSqft(estimateConfig.sqft);
      setSelectedPackage(estimateConfig.tier);
    } else if (initialSelection) {
      setSelectedPackage(initialSelection);
    }
  }, [initialSelection, estimateConfig]);

  if (!isOpen) return null;

  const basePrice = estimateConfig
    ? estimateConfig.total
    : Math.round(sqft * 0.15 + (selectedPackage === 'signature' ? 180 : selectedPackage === 'residence-membership' ? 450 : 80));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-monolith-950/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-monolith-900 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 my-8 overflow-hidden max-h-[92vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase mb-2">
                RESERVATION & ESTIMATE CONFIRMATION
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6">
                Reserve Sanctuary Service
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Property Type Selection */}
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                    1. Property Classification
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedType('residential')}
                      className={`p-3.5 rounded-2xl border text-xs font-bold tracking-wider transition-all ${
                        selectedType === 'residential'
                          ? 'bg-sanctuary-500/20 border-sanctuary-400 text-white'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      RESIDENTIAL ESTATE
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedType('commercial')}
                      className={`p-3.5 rounded-2xl border text-xs font-bold tracking-wider transition-all ${
                        selectedType === 'commercial'
                          ? 'bg-sanctuary-500/20 border-sanctuary-400 text-white'
                          : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                      }`}
                    >
                      COMMERCIAL / GALLERY
                    </button>
                  </div>
                </div>

                {/* Square Footage Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-mono text-slate-400 uppercase">
                      2. Estimated Residence Area
                    </label>
                    <span className="text-sm font-bold font-mono text-sanctuary-400">{sqft.toLocaleString()} SQFT</span>
                  </div>
                  <input
                    type="range"
                    min="600"
                    max="10000"
                    step="100"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2 bg-monolith-800 rounded-lg appearance-none cursor-pointer accent-sanctuary-500"
                    aria-label="Estimated area in square feet"
                  />
                </div>

                {/* Live Estimate Card */}
                <div className="p-4 rounded-2xl bg-sanctuary-500/10 border border-sanctuary-500/20 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">ESTIMATED INVESTMENT</span>
                    <span className="text-2xl font-extrabold text-white">RM {basePrice}</span>
                  </div>
                  <span className="text-[11px] font-mono text-sanctuary-400 font-semibold">
                    Rate Guaranteed
                  </span>
                </div>

                {/* Contact & Dispatch Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="client-name" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      id="client-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Alexander Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-monolith-800 border border-white/10 rounded-xl text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-sanctuary-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="client-email" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      id="client-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="vance@residence.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-monolith-800 border border-white/10 rounded-xl text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-sanctuary-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="client-phone" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Phone Number
                    </label>
                    <input
                      id="client-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder={`e.g. ${COMPANY_CONTACT.phone}`}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-monolith-800 border border-white/10 rounded-xl text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-sanctuary-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="client-date" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Preferred Date
                    </label>
                    <input
                      id="client-date"
                      name="preferredDate"
                      type="date"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-3 bg-monolith-800 border border-white/10 rounded-xl text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-sanctuary-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="client-access" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      Access Method
                    </label>
                    <select
                      id="client-access"
                      name="accessMethod"
                      className="w-full px-4 py-3 bg-monolith-800 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-sanctuary-400"
                    >
                      <option value="smart-lock">Encrypted Smart Lock Code</option>
                      <option value="concierge">Building Concierge Key</option>
                      <option value="onsite-staff">On-Site Household Staff</option>
                      <option value="lockbox">Secure Lockbox</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="client-region" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                      City / Metropolitan Hub
                    </label>
                    <select
                      id="client-region"
                      name="region"
                      className="w-full px-4 py-3 bg-monolith-800 border border-white/10 rounded-xl text-white text-xs focus:outline-none focus:border-sanctuary-400"
                    >
                      <option value="kl-damansara">Damansara Heights / Mont Kiara, KL</option>
                      <option value="kl-bangsar">Bangsar / Kenny Hills, KL</option>
                      <option value="penang">Tanjung Tokong / Gurney, Penang</option>
                      <option value="jb">Iskandar Puteri, Johor Bahru</option>
                      <option value="beverly-hills">Beverly Hills / Bel Air, CA</option>
                      <option value="tribeca">Tribeca / SoHo, NY</option>
                    </select>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="client-notes" className="block text-xs font-mono text-slate-400 uppercase mb-1">
                    Special Surface Notes (Optional)
                  </label>
                  <textarea
                    id="client-notes"
                    name="notes"
                    rows={2}
                    placeholder="e.g. Unsealed marble island in kitchen, oiled walnut stairs, gate code required..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-4 py-2.5 bg-monolith-800 border border-white/10 rounded-xl text-white placeholder:text-slate-600 text-xs focus:outline-none focus:border-sanctuary-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 font-bold text-xs tracking-widest uppercase rounded-full transition-all shadow-xl shadow-sanctuary-500/20 flex items-center justify-center gap-2"
                >
                  <span>SUBMIT RESERVATION REQUEST</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] font-mono text-center text-slate-500">
                  Protected by 256-bit encryption. Zero unsolicited promotional communications.
                </p>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sanctuary-500/20 text-sanctuary-400 flex items-center justify-center mb-6 border border-sanctuary-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Reservation Request Received</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto mb-8 font-normal leading-relaxed">
                Thank you, <span className="text-white font-semibold">{name}</span>. Our concierge director will reach you within 60 minutes at <span className="text-sanctuary-400 font-mono">{email}</span> to confirm property blueprint details, material sensitivities, and crew dispatch for <span className="text-white font-semibold">{preferredDate}</span>.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 font-bold text-xs tracking-widest uppercase rounded-full transition-colors"
              >
                RETURN TO SANCTUARY
              </button>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
