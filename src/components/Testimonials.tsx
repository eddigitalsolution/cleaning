import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/cleaningData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-28 px-4 sm:px-6 bg-monolith-800 relative overflow-hidden scroll-mt-20">
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-sanctuary-500/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/10 pb-8">
          <div>
            <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase">
              03.1 / REPUTATION &amp; PROVEN TRACK RECORD
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mt-2">
              CLIENT TESTIMONIALS
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            Trusted by architects, private estate managers, and discerning residents across Malaysia and the United States.
          </p>
        </div>

        {/* Press / Publication Trust Bar - single scrolling row */}
        <div className="mb-14 py-4 px-6 sm:px-8 rounded-2xl glass-panel overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-sanctuary-400 font-bold whitespace-nowrap shrink-0">
              RECOGNIZED FOR EXCELLENCE:
            </span>
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-slate-300 font-bold tracking-widest text-[11px] uppercase">
              <span className="hover:text-white transition-colors cursor-default">ARCHITECTURAL DIGEST</span>
              <span className="hover:text-white transition-colors cursor-default">ROBB REPORT</span>
              <span className="hover:text-white transition-colors cursor-default">DWELL RESIDENCES</span>
              <span className="hover:text-white transition-colors cursor-default">WALLPAPER* DESIGN</span>
            </div>
          </div>
        </div>

        {/* Testimonials — Featured + 2 column layout */}
        <div className="space-y-6">
          
          {/* Featured testimonial - full width */}
          {TESTIMONIALS_DATA[0] && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass-panel glass-panel-hover p-8 sm:p-10 lg:p-12 rounded-3xl relative overflow-hidden group"
            >
              {/* Large decorative quote mark */}
              <div className="absolute top-6 right-8 text-[120px] font-serif leading-none text-sanctuary-500/8 select-none pointer-events-none hidden sm:block">
                "
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono font-bold text-sanctuary-400">VERIFIED CLIENT</span>
                    <span className="w-1 h-1 rounded-full bg-sanctuary-500/50" />
                    <span className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-sanctuary-400 text-xs">★</span>
                      ))}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-wider text-slate-300 ml-2">
                      {TESTIMONIALS_DATA[0].projectType}
                    </span>
                  </div>

                  <blockquote className="text-slate-200 text-lg sm:text-xl leading-relaxed font-light italic mb-0">
                    "{TESTIMONIALS_DATA[0].quote}"
                  </blockquote>
                </div>

                <div className="lg:w-56 shrink-0 lg:border-l lg:border-white/10 lg:pl-12 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10">
                  <h4 className="font-bold text-white text-base mb-1">{TESTIMONIALS_DATA[0].author}</h4>
                  <p className="text-xs text-sanctuary-400 font-mono mb-0.5">{TESTIMONIALS_DATA[0].role}</p>
                  <p className="text-[11px] text-slate-500 font-mono">{TESTIMONIALS_DATA[0].location}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Side-by-side secondary testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS_DATA.slice(1).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-sanctuary-400">VERIFIED</span>
                      <span className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-sanctuary-400 text-[10px]">★</span>
                        ))}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-wider text-slate-300">
                      {item.projectType}
                    </span>
                  </div>

                  <blockquote className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal italic mb-6">
                    "{item.quote}"
                  </blockquote>
                </div>

                <div className="pt-5 border-t border-white/10">
                  <h4 className="font-bold text-white text-sm mb-0.5">{item.author}</h4>
                  <p className="text-xs text-sanctuary-400 font-mono">{item.role}</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
