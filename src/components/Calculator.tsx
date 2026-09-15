import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CALCULATOR_ADDONS, CalculatorAddon } from '../data/cleaningData';
import { Calculator as CalcIcon, Sparkles, Check, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface CalculatorProps {
  onOpenBookingWithEstimate: (config: {
    sqft: number;
    tier: string;
    frequency: string;
    addons: string[];
    total: number;
  }) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ onOpenBookingWithEstimate }) => {
  const [sqft, setSqft] = useState<number>(2800);
  const [selectedTier, setSelectedTier] = useState<string>('signature');
  const [frequency, setFrequency] = useState<string>('biweekly'); // 'onetime' | 'biweekly' | 'monthly'
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['marble-seal']);

  // Base rates per sqft
  const tierRates: Record<string, { base: number; perSqft: number; label: string }> = {
    essential: { base: 120, perSqft: 0.11, label: 'Essential Sanctuary' },
    signature: { base: 180, perSqft: 0.15, label: 'Signature Restoration' },
    estate: { base: 360, perSqft: 0.22, label: 'Private Estate Membership' }
  };

  // Frequency discounts
  const discountMultiplier: Record<string, number> = {
    onetime: 1.0,
    biweekly: 0.85, // 15% discount
    monthly: 0.90   // 10% discount
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculate total
  const tierConfig = tierRates[selectedTier] || tierRates.signature;
  const rawSubtotal = tierConfig.base + sqft * tierConfig.perSqft;
  const discountedSubtotal = rawSubtotal * discountMultiplier[frequency];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = CALCULATOR_ADDONS.find(a => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const finalEstimate = Math.round(discountedSubtotal + addonsTotal);
  const savings = Math.round(rawSubtotal - discountedSubtotal);

  const handleProceed = () => {
    onOpenBookingWithEstimate({
      sqft,
      tier: selectedTier,
      frequency,
      addons: selectedAddons,
      total: finalEstimate
    });
  };

  return (
    <section id="estimator" className="py-28 px-6 bg-monolith-900 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sanctuary-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase">
              02.1 / INTERACTIVE ESTIMATOR
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mt-2">
              SPATIAL INVESTMENT CALCULATOR
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            Configure your residence parameters, material requirements, and preferred cadence for an instant transparent estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8 glass-panel p-6 sm:p-10 rounded-3xl">
            
            {/* 1. Square Footage Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  1. Residence Area
                </span>
                <span className="text-base font-bold font-mono text-white bg-white/5 border border-white/10 px-3 py-1 rounded-xl">
                  {sqft.toLocaleString()} SQ. FT.
                </span>
              </div>
              <input
                type="range"
                min="800"
                max="12000"
                step="100"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2.5 bg-monolith-700 rounded-lg appearance-none cursor-ew-resize accent-sanctuary-400 transition-all"
                aria-label="Residence Area Square Footage Slider"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                <span>800 SQFT (Penthouse Studio)</span>
                <span>12,000+ SQFT (Private Estate)</span>
              </div>
            </div>

            {/* 2. Service Tier Selector */}
            <div>
              <span className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                2. Select Restoration Tier
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'essential', label: 'Essential', sub: 'Routine Upkeep' },
                  { id: 'signature', label: 'Signature', sub: 'Deep Architectural' },
                  { id: 'estate', label: 'Estate Membership', sub: 'Dedicated Staff' }
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSelectedTier(tier.id)}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      selectedTier === tier.id
                        ? 'bg-sanctuary-500/15 border-sanctuary-400 text-white shadow-lg shadow-sanctuary-500/10'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <span className="block font-bold text-sm text-white mb-0.5">{tier.label}</span>
                    <span className="block text-[11px] font-mono text-slate-400">{tier.sub}</span>
                    {selectedTier === tier.id && (
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-sanctuary-400 shadow-[0_0_8px_rgba(105,142,127,0.8)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Frequency & Savings Selector */}
            <div>
              <span className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                3. Maintenance Cadence
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'onetime', label: 'One-Time Clean', tag: 'Standard Rate' },
                  { id: 'biweekly', label: 'Bi-Weekly Upkeep', tag: 'Save 15%', popular: true },
                  { id: 'monthly', label: 'Monthly Reset', tag: 'Save 10%' }
                ].map((freq) => (
                  <button
                    key={freq.id}
                    type="button"
                    onClick={() => setFrequency(freq.id)}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      frequency === freq.id
                        ? 'bg-sanctuary-500/20 border-sanctuary-400 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {freq.popular && (
                      <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-sanctuary-500 text-monolith-900 text-[9px] font-mono font-bold tracking-widest uppercase">
                        POPULAR
                      </span>
                    )}
                    <span className="block font-bold text-xs text-white mb-1">{freq.label}</span>
                    <span className="text-[11px] font-mono text-sanctuary-300 font-medium">
                      {freq.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Luxury Add-ons */}
            <div>
              <span className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">
                4. Architectural Specialty Enhancements (Optional)
              </span>
              <div className="space-y-2.5">
                {CALCULATOR_ADDONS.map((addon: CalculatorAddon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-sanctuary-500/10 border-sanctuary-400/60 text-white'
                          : 'bg-white/5 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-lg flex items-center justify-center transition-colors ${
                            isChecked
                              ? 'bg-sanctuary-500 text-monolith-900'
                              : 'border border-white/20 bg-white/5'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <span className="block text-xs sm:text-sm font-bold text-white">
                            {addon.name}
                          </span>
                          <span className="block text-[11px] text-slate-400 font-normal">
                            {addon.description}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-sanctuary-300 whitespace-nowrap ml-4">
                        +RM {addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Instant Quote Breakdown Card */}
          <div className="lg:col-span-5 sticky top-28 glass-panel p-6 sm:p-10 rounded-3xl border border-sanctuary-500/30 shadow-2xl">
            <div className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase mb-4">
              ESTIMATED INVESTMENT BREAKDOWN
            </div>

            <div className="pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                  RM {finalEstimate}
                </span>
                <span className="text-slate-400 font-mono text-xs">
                  {frequency === 'onetime' ? '/ session' : '/ visit'}
                </span>
              </div>
              {savings > 0 && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sanctuary-500/15 text-sanctuary-300 text-xs font-mono">
                  <span>Cadence savings applied: -RM {savings}</span>
                </div>
              )}
            </div>

            {/* Detailed Itemization */}
            <div className="py-6 border-b border-white/10 space-y-3 text-xs font-mono">
              <div className="flex justify-between text-slate-300">
                <span>Selected Tier</span>
                <span className="text-white font-bold">{tierConfig.label}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Area Coverage</span>
                <span className="text-white font-bold">{sqft.toLocaleString()} SQ. FT.</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Cadence</span>
                <span className="text-white font-bold">
                  {frequency === 'biweekly' ? 'Bi-Weekly (15% OFF)' : frequency === 'monthly' ? 'Monthly (10% OFF)' : 'Single Session'}
                </span>
              </div>
              {selectedAddons.length > 0 && (
                <div className="flex justify-between text-slate-300 pt-2 border-t border-white/5">
                  <span>Specialty Add-ons</span>
                  <span className="text-sanctuary-300 font-bold">+{selectedAddons.length} Selected (RM {addonsTotal})</span>
                </div>
              )}
            </div>

            {/* Trust Points */}
            <div className="py-5 space-y-2 text-xs text-slate-400 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-400 shrink-0" />
                <span>RM 5,000,000 Commercial Insurance Included</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-400 shrink-0" />
                <span>100% Non-Toxic Enzyme Guarantee</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-6">
              <button
                onClick={handleProceed}
                className="w-full py-4 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl shadow-sanctuary-500/25 flex items-center justify-center gap-3 group"
              >
                <span>LOCK IN THIS ESTIMATE & RESERVE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-center text-[10px] font-mono text-slate-500 mt-3">
                No immediate payment required. Concierge verifies property blueprints prior to dispatch.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
