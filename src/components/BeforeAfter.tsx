import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BEFORE_AFTER_ITEMS, BeforeAfterItem } from '../data/cleaningData';
import { MoveHorizontal, CheckCircle } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [sliderPositions, setSliderPositions] = useState<{ [key: string]: number }>({
    'penthouse-living': 50,
    'minimalist-kitchen': 50,
    'executive-office': 50,
    'spa-bathroom': 50
  });

  const categories = ['ALL', 'Living', 'Kitchen', 'Workspace', 'Bath'];

  const filteredItems = activeCategory === 'ALL' 
    ? BEFORE_AFTER_ITEMS 
    : BEFORE_AFTER_ITEMS.filter(item => item.category === activeCategory);

  const handleSliderChange = (id: string, value: number) => {
    setSliderPositions(prev => ({ ...prev, [id]: value }));
  };

  return (
    <section id="before-after" className="py-28 px-4 sm:px-6 bg-monolith-800 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8">
          <div>
            <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase">
              02 / VISUAL PROOF OF IMPACT
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mt-2">
              TRANSFORMATION GALLERY
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest transition-all ${
                  activeCategory === cat
                    ? 'bg-sanctuary-500 text-monolith-900 font-bold shadow-lg shadow-sanctuary-500/20'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="wait">
            {filteredItems.map((item: BeforeAfterItem) => {
              const sliderPos = sliderPositions[item.id] || 50;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-5 sm:p-8 rounded-3xl flex flex-col justify-between"
                >
                  {/* Interactive Slider Container */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-white/10 group select-none">
                    
                    {/* Clean Image (Base) */}
                    <img
                      src={item.afterImg}
                      alt={`${item.title} After Cleaning`}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute top-3.5 right-3.5 z-10 px-3 py-1 rounded-full bg-sanctuary-500/90 text-monolith-900 text-[10px] font-mono font-bold tracking-widest uppercase">
                      AFTER
                    </div>

                    {/* Messy Image (Clipped Layer) */}
                    <div
                      className="absolute inset-y-0 left-0 overflow-hidden"
                      style={{ width: `${sliderPos}%` }}
                    >
                      <img
                        src={item.beforeImg}
                        alt={`${item.title} Before Cleaning`}
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                        style={{ width: '100%' }}
                      />
                      <div className="absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/30 text-red-200 text-[10px] font-mono font-bold tracking-widest uppercase">
                        BEFORE
                      </div>
                    </div>

                    {/* Divider Bar */}
                    <div
                      className="absolute inset-y-0 z-20 w-0.5 bg-white shadow-lg pointer-events-none"
                      style={{ left: `${sliderPos}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-monolith-900 shadow-xl flex items-center justify-center border border-sanctuary-500">
                        <MoveHorizontal className="w-4 h-4 text-sanctuary-700" />
                      </div>
                    </div>

                    {/* Range Input Overlay */}
                    <input
                      type="range"
                      min="5"
                      max="95"
                      value={sliderPos}
                      onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                      aria-label={`Comparison slider for ${item.title}`}
                    />
                  </div>

                  {/* Preset Toggles for Mobile Convenience */}
                  <div className="flex items-center justify-between mb-4 px-1 text-xs">
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleSliderChange(item.id, 95)}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-mono ${sliderPos > 85 ? 'bg-white/20 text-white font-bold' : 'bg-white/5 text-slate-400 hover:text-white'}`}
                      >
                        BEFORE
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSliderChange(item.id, 50)}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-mono ${sliderPos >= 45 && sliderPos <= 55 ? 'bg-sanctuary-500/20 text-sanctuary-300 font-bold' : 'bg-white/5 text-slate-400 hover:text-white'}`}
                      >
                        SPLIT
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSliderChange(item.id, 5)}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-mono ${sliderPos < 15 ? 'bg-sanctuary-500 text-monolith-900 font-bold' : 'bg-white/5 text-slate-400 hover:text-white'}`}
                      >
                        AFTER
                      </button>
                    </div>
                    <span className="text-[10px] font-mono text-sanctuary-400 font-semibold">
                      {Math.round(100 - sliderPos)}% PURIFIED
                    </span>
                  </div>

                  {/* Card Content */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-mono text-sanctuary-400 uppercase tracking-widest">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 text-sm mb-4 font-normal">{item.description}</p>

                    {/* Highlight Pills */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                      {item.highlights.map((hl, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sanctuary-500/10 border border-sanctuary-500/20 text-sanctuary-300 text-[11px] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-400" />
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
