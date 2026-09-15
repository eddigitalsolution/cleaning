import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Lock, CheckCircle2 } from 'lucide-react';

export type LegalTab = 'privacy' | 'terms' | 'security';

interface LegalModalProps {
  isOpen: boolean;
  initialTab?: LegalTab;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab);

  // Sync tab when opened
  React.useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  if (!isOpen) return null;

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
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-monolith-900 border border-white/10 rounded-3xl shadow-2xl z-10 my-8 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-monolith-800/60">
            <div>
              <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase block mb-1">
                COMPLIANCE & LEGAL FRAMEWORK
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Trust & Security Standards
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-white/10 bg-monolith-800/30 px-6 sm:px-8 gap-2 sm:gap-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`py-4 px-3 sm:px-4 text-xs font-bold font-mono uppercase tracking-widest flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'privacy'
                  ? 'border-sanctuary-400 text-sanctuary-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-4 h-4" />
              PRIVACY POLICY
            </button>

            <button
              onClick={() => setActiveTab('terms')}
              className={`py-4 px-3 sm:px-4 text-xs font-bold font-mono uppercase tracking-widest flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'terms'
                  ? 'border-sanctuary-400 text-sanctuary-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              TERMS OF SERVICE
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`py-4 px-3 sm:px-4 text-xs font-bold font-mono uppercase tracking-widest flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                activeTab === 'security'
                  ? 'border-sanctuary-400 text-sanctuary-300'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              SECURITY MATRIX & NDAs
            </button>
          </div>

          {/* Tab Contents */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed font-normal">
            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-sanctuary-500/10 border border-sanctuary-500/20 text-sanctuary-300 text-xs font-mono">
                  ZERO-DATA RETENTION GUARANTEE • EFFECTIVE DATE: JANUARY 2026
                </div>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">1. Architectural Confidentiality & Media Zero-Tolerance</h3>
                  <p>
                    Sanctuary Architectural Restoration LLC enforces an unconditional zero-photography and zero-recording protocol inside all client premises. Our technicians carry Faraday-shielded equipment pouches during in-residence appointments. No images, videos, audio, or spatial geometry of client estates are ever captured, stored, or transmitted.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">2. Ephemeral Access Credentials</h3>
                  <p>
                    Smart lock codes, gate passes, and temporary access credentials shared through our concierge portal are encrypted via 256-bit AES encryption and automatically purged from our servers within 120 minutes following the conclusion of the scheduled cleaning service.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">3. Personal & Contact Information</h3>
                  <p>
                    We never sell, rent, monetize, or disclose client names, resident identities, or property locations to third-party advertisers or data brokers. Data collected is strictly utilized for concierge scheduling and billing verification.
                  </p>
                </section>
              </div>
            )}

            {activeTab === 'terms' && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-sanctuary-500/10 border border-sanctuary-500/20 text-sanctuary-300 text-xs font-mono">
                  WHITE-GLOVE SERVICE LEVEL AGREEMENT (SLA) • TERMS OF ENGAGEMENT
                </div>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">1. White-Glove Architectural Guarantee</h3>
                  <p>
                    Every surface treated by Sanctuary is inspected using high-intensity UV and raking inspection light. If any area does not meet your exacting architectural standards, our concierge director will dispatch a dedicated detail technician within 24 hours at zero additional charge.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">2. Cancellation & Rescheduling Policy</h3>
                  <p>
                    We understand the dynamic schedules of our clients. Residential and commercial reservations may be rescheduled or canceled without penalty up to 24 hours prior to the dispatch window. Emergency same-day bookings are subject to crew availability.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-lg font-bold text-white tracking-tight">3. Material Safety & Specialty Care</h3>
                  <p>
                    Our technicians are certified in identifying and treating rare and sensitive materials including Calacatta marble, unlacquered brass, oiled walnut, matte limestone, Venetian plaster, and museum-grade acoustic fabric.
                  </p>
                </section>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-sanctuary-500/10 border border-sanctuary-500/20 text-sanctuary-300 text-xs font-mono">
                  RM 5,000,000 COMMERCIAL UMBRELLA POLICY • BIOMETRIC BACKGROUND AUDITED
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="glass-panel p-5 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 text-sanctuary-400 mb-2 font-mono text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>RM 5,000,000 UMBRELLA COVERAGE</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Underwritten by A++ rated underwriters covering high-value architectural art, sculpture, delicate millwork, and fine furnishings.
                    </p>
                  </div>

                  <div className="glass-panel p-5 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 text-sanctuary-400 mb-2 font-mono text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>LEGALLY BINDING NDAs</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      100% of staff sign custom Non-Disclosure Agreements with strict financial penalties for breach of privacy or discretion.
                    </p>
                  </div>

                  <div className="glass-panel p-5 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 text-sanctuary-400 mb-2 font-mono text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>DIRECT W-2 EMPLOYEES ONLY</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Zero subcontracting or third-party gig labor. Every technician undergoes multi-state criminal background checks and 10-panel drug screening.
                    </p>
                  </div>

                  <div className="glass-panel p-5 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-2 text-sanctuary-400 mb-2 font-mono text-xs font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>KEY CUSTODY SECURITY</span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Keys and electronic fobs are transported in tamper-evident sealed pouches tracked with physical chain-of-custody logging.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 pt-2 border-t border-white/10">
                  Custom Certificates of Insurance (COIs) naming your family trust, property management LLC, or landlord as additional insured can be issued within 2 hours of booking.
                </p>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-white/10 bg-monolith-800/60 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              SANCTUARY ARCHITECTURAL RESTORATION LLC
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 rounded-full font-bold text-xs tracking-widest uppercase transition-colors"
            >
              ACKNOWLEDGE & CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
