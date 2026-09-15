import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const PhilosophyModal: React.FC<PhilosophyModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
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
          className="relative w-full max-w-3xl max-h-[90vh] bg-monolith-900 border border-white/10 rounded-3xl shadow-2xl z-10 my-8 overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-center justify-between bg-monolith-800/60">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sanctuary-500/10 border border-sanctuary-500/30 flex items-center justify-center">
                <div className="w-2 h-2 bg-sanctuary-400 rotate-45" />
              </div>
              <div>
                <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase block mb-0.5">
                  OUR PHILOSOPHY & HERITAGE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  The Sanctuary Standard
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Architectural Clarity Over Chemical Masking
              </h3>
              <p>
                Sanctuary was founded with a singular conviction: luxury environments should never be assaulted with harsh commercial bleach, volatile ammonia, or overpowering artificial perfumes. Modern architectural homes utilize porous natural stones, unvarnished hardwoods, and sensitive metals that standard janitorial products permanently ruin.
              </p>
              <p>
                We spent three years collaborating with biochemical researchers and architectural preservationists to develop proprietary pH-balanced enzymatic formulations. Our solutions break down organic matter, allergens, and micro-particulates into inert water vapor and elemental CO₂—leaving zero toxic residue.
              </p>
            </div>

            {/* Three Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="glass-panel p-5 rounded-2xl border border-white/5">
                <span className="font-mono text-xs font-bold text-sanctuary-400 block mb-2">01 / SAFETY</span>
                <h4 className="font-bold text-white text-sm mb-1">Zero Chemical Toxicity</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Safe for bare feet, newborns, and companion animals. Zero synthetic VOCs or respiratory irritants.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/5">
                <span className="font-mono text-xs font-bold text-sanctuary-400 block mb-2">02 / SCIENCE</span>
                <h4 className="font-bold text-white text-sm mb-1">Museum Material Care</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Precision handling of honed limestone, Calacatta marble, raw cedar, and unsealed brass fixtures.
                </p>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-white/5">
                <span className="font-mono text-xs font-bold text-sanctuary-400 block mb-2">03 / TRUST</span>
                <h4 className="font-bold text-white text-sm mb-1">Absolute Discretion</h4>
                <p className="text-xs text-slate-400 leading-normal">
                  Bonded direct W-2 employees bound by lifelong NDAs, Faraday key custody, and biometric auditing.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-sanctuary-950/80 to-monolith-800 border border-sanctuary-500/20">
              <p className="text-xs sm:text-sm text-sanctuary-300 italic">
                “When you enter a Sanctuary-restored home, you don’t smell cleaning chemicals. You simply experience silence, pristine light reflection, and deep architectural breathability.”
              </p>
              <span className="block text-[11px] font-mono text-slate-400 mt-2 uppercase tracking-wider">
                — Julian Saint-Claire, Chief Architectural Officer
              </span>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-white/10 bg-monolith-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">
              EXPERIENCE ARCHITECTURAL CALM
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold text-xs tracking-widest uppercase transition-colors"
              >
                CLOSE
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 sm:flex-none px-6 py-2.5 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 rounded-full font-bold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2"
              >
                <span>BOOK SANCTUARY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
