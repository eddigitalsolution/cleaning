import React from 'react';
import { motion } from 'framer-motion';
import { PACKAGES_DATA, PackageItem } from '../data/cleaningData';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface PackagesProps {
  onOpenBooking: (packageId?: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenBooking }) => {
  return (
    <section id="packages" className="py-28 px-4 sm:px-6 bg-monolith-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase">
              04 / TRANSPARENT PRICING & TIERS
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mt-2">
              SANCTUARY PACKAGES
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            Tailored maintenance tiers designed for modern residences, private penthouses, and executive estates.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES_DATA.map((pkg: PackageItem, index: number) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-sanctuary-950/90 to-monolith-900 border-2 border-sanctuary-500 shadow-2xl shadow-sanctuary-500/10 scale-100 lg:-translate-y-2'
                  : 'glass-panel glass-panel-hover'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-sanctuary-500 text-monolith-900 text-[10px] font-mono font-bold tracking-widest uppercase shadow-lg whitespace-nowrap">
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm font-normal mb-6 min-h-[40px] leading-relaxed">{pkg.tagline}</p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{pkg.price}</span>
                  <span className="text-slate-400 font-mono text-xs">{pkg.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-xs text-slate-300 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-sanctuary-500/20 text-sanctuary-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking(pkg.id)}
                className={`w-full py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 group ${
                  pkg.highlighted
                    ? 'bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 shadow-xl shadow-sanctuary-500/20'
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                <span>{pkg.ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
