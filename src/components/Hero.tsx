import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MoveHorizontal, Shield, Star, CheckCircle } from 'lucide-react';

const cleanImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80';
const dirtyImage = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => { isDragging.current = true; };

  const handleMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
    setSliderPosition(pct);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: TouchEvent) => { e.preventDefault(); handleMove(e.touches[0].clientX); };
    const onEnd = () => { isDragging.current = false; };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onEnd);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onEnd);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-monolith-900 relative overflow-hidden flex items-center scroll-mt-0">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sanctuary-500/4 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-sanctuary-600/3 rounded-full blur-[100px]" />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '80px 80px'}} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full py-24 md:py-32 lg:pt-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column: Copy */}
          <motion.div
            className="lg:col-span-5 flex flex-col"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sanctuary-500/10 border border-sanctuary-500/20 text-sanctuary-400 text-[11px] font-mono tracking-widest uppercase mb-8 self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-400 animate-pulse" />
              <span>ARCHITECTURAL PURITY PROTOCOL</span>
            </div>

            <h1 className="font-sans font-extrabold text-5xl sm:text-6xl xl:text-7xl tracking-tightest leading-[1.04] text-white mb-6">
              CLEAN <br />
              <span className="text-accent-gradient">CHANGES</span> <br />
              EVERYTHING.
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-lg">
              Ultra-minimalist residential &amp; commercial sanctuary cleaning. We eliminate spatial chaos and microscopic pollutants to reveal timeless architectural clarity.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-xl shadow-sanctuary-500/25 flex items-center justify-center gap-3 group"
              >
                <span>RESERVE SANCTUARY</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#estimator"
                className="px-7 py-4 border border-white/15 hover:border-white/40 text-white font-semibold text-xs tracking-widest uppercase rounded-full transition-all flex items-center justify-center hover:bg-white/5"
              >
                ESTIMATE COST
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle className="w-4 h-4 text-sanctuary-400 shrink-0" />
                <span>100% Organic Enzyme</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-sanctuary-400 shrink-0" />
                <span>Bonded &amp; Insured RM 5M</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Star className="w-4 h-4 text-sanctuary-400 shrink-0" />
                <span>5.0 · 400+ Estates</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Drag-to-Clean Visual */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-center w-full"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-full relative group">
              {/* Visual Instruction Badge */}
              <div className="hidden sm:flex absolute -top-4 left-1/2 -translate-x-1/2 z-30 bg-monolith-800/90 border border-sanctuary-500/40 text-sanctuary-300 text-[10px] font-mono tracking-widest px-4 py-1.5 rounded-full shadow-2xl items-center gap-2 backdrop-blur-md pointer-events-none whitespace-nowrap">
                <MoveHorizontal className="w-3.5 h-3.5 animate-pulse text-sanctuary-400" />
                <span>DRAG SLIDER TO REVEAL RESTORATION</span>
              </div>

              {/* Container for Split Slider */}
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                style={{ touchAction: 'none' }}
                className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-ew-resize select-none glass-panel"
              >
                {/* After / Clean Image (Base Layer) */}
                <img
                  src={cleanImage}
                  alt="Pristine Clean Minimalist Living Sanctuary"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  loading="eager"
                />
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-10 px-3 py-1 rounded-full bg-sanctuary-500/90 backdrop-blur-md text-monolith-900 font-mono text-[9px] sm:text-[10px] font-bold tracking-widest uppercase shadow-lg">
                  AFTER: SANCTUARY RESTORED
                </div>

                {/* Before / Messy Image (Clipped Layer) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={dirtyImage}
                    alt="Untidy Cluttered Living Room Before Cleaning"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
                    style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                    loading="eager"
                  />
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/30 backdrop-blur-md text-red-200 font-mono text-[9px] sm:text-[10px] font-bold tracking-widest uppercase shadow-lg">
                    BEFORE: SPATIAL NOISE
                  </div>
                </div>

                {/* Slider Divider Bar */}
                <div
                  className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white text-monolith-900 shadow-2xl flex items-center justify-center border-2 border-sanctuary-500">
                    <MoveHorizontal className="w-5 h-5 text-sanctuary-700" />
                  </div>
                </div>
              </div>

              {/* Mobile & Desktop Preset Quick Toggles */}
              <div className="mt-4 flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSliderPosition(95)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider transition-colors ${
                      sliderPosition > 85 ? 'bg-white/15 text-white font-bold' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    VIEW BEFORE
                  </button>
                  <button
                    type="button"
                    onClick={() => setSliderPosition(50)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider transition-colors ${
                      sliderPosition >= 40 && sliderPosition <= 60 ? 'bg-sanctuary-500/20 text-sanctuary-300 font-bold border border-sanctuary-500/30' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    50/50 SPLIT
                  </button>
                  <button
                    type="button"
                    onClick={() => setSliderPosition(5)}
                    className={`px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wider transition-colors ${
                      sliderPosition < 15 ? 'bg-sanctuary-500 text-monolith-900 font-bold' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    VIEW AFTER
                  </button>
                </div>

                <span className="text-[11px] font-mono text-sanctuary-400 font-semibold ml-auto">
                  {Math.round(100 - sliderPosition)}% PURIFIED
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
