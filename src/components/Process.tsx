import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/cleaningData';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-28 px-4 sm:px-6 bg-monolith-900 relative overflow-hidden scroll-mt-20">
      {/* Decorative vertical line far right */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sanctuary-500/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-white/10 pb-8">
          <div>
            <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase">
              03 / METHODOLOGY &amp; RITUAL
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mt-2">
              THE 4-STEP RITUAL
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            A scientific, non-toxic protocol designed to eliminate microscopic pollutants without compromising delicate architectural surfaces.
          </p>
        </div>

        {/* Connected Timeline Layout */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] h-px bg-gradient-to-r from-transparent via-sanctuary-500/30 to-transparent pointer-events-none z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Step Number Node (sits on the connector line on desktop) */}
                <div className="relative z-10 flex flex-col">
                  {/* Number bubble */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-[52px] h-[52px] rounded-full border border-sanctuary-500/40 bg-monolith-900 flex items-center justify-center shrink-0 group-hover:border-sanctuary-400 group-hover:bg-sanctuary-500/10 transition-all duration-300">
                      <span className="font-mono text-base font-extrabold text-sanctuary-400 group-hover:text-sanctuary-300 transition-colors">
                        {step.step}
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-white/5 lg:hidden" />
                  </div>

                  {/* Card body */}
                  <div className="border-l-2 border-sanctuary-500/20 group-hover:border-sanctuary-500/50 transition-colors pl-5 pb-6">
                    <span className="text-[10px] font-mono text-sanctuary-400 uppercase tracking-widest block mb-2">
                      {step.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-normal">
                      {step.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-[10px] font-mono text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-400/60" />
                      <span>WHITE-GLOVE STANDARD</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl border border-sanctuary-500/20 bg-sanctuary-500/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono font-bold text-sanctuary-400 uppercase block mb-1">
              ZERO CHEMICAL RESIDUE GUARANTEE
            </span>
            <h4 className="text-lg font-bold text-white">100% Bio-Enzymatic Botanical Formulations</h4>
            <p className="text-slate-400 text-xs sm:text-sm mt-0.5 max-w-2xl">
              Our plant-based enzymes break down organic matter into neutral water vapor and CO₂, with zero harsh bleach or synthetic fragrances.
            </p>
          </div>
          <a
            href="#packages"
            className="px-6 py-3 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 font-bold text-xs tracking-widest uppercase rounded-full transition-colors whitespace-nowrap"
          >
            VIEW PACKAGES
          </a>
        </motion.div>

      </div>
    </section>
  );
};
