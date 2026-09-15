import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA, FAQItem } from '../data/cleaningData';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Safety & Non-Toxic', 'Security & NDAs', 'Operations', 'Equipment'];

  const filteredFaqs = activeCategory === 'ALL'
    ? FAQ_DATA
    : FAQ_DATA.filter(item => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-28 px-4 sm:px-6 bg-monolith-800 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase">
            06 / CLARITY & PROTOCOLS
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mt-2 mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Everything you need to know regarding our security protocols, non-toxic chemical formulations, and key access standards.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
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

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((item: FAQItem) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="glass-panel rounded-2xl overflow-hidden border border-white/10 transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-sanctuary-400 uppercase tracking-widest shrink-0 hidden sm:inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {item.question}
                      </h3>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-300">
                      {isOpen ? <Minus className="w-4 h-4 text-sanctuary-400" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-7 pt-2 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-white/5 font-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
