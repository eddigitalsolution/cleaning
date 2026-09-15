import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA, ServiceItem } from '../data/cleaningData';
import { Home, Building2, Sparkles, Wrench, ArrowUpRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-5 h-5 text-sanctuary-400" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-sanctuary-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-sanctuary-400" />;
      default: return <Wrench className="w-5 h-5 text-sanctuary-400" />;
    }
  };

  return (
    <section id="services" className="py-28 px-4 sm:px-6 bg-monolith-900 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase">
              01 / ARCHITECTURAL OFFERINGS
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mt-2">
              CURATED SERVICES
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            Engineered specifically for luxury residential estates, executive office environments, and sensitive architectural spaces.
          </p>
        </div>

        {/* Editorial Asymmetric Layout */}
        {SERVICES_DATA.length > 0 && (
          <div className="space-y-6">
            {/* First card - full width hero treatment */}
            <motion.div
              key={SERVICES_DATA[0].id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel glass-panel-hover rounded-3xl relative overflow-hidden group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Left: large number + service info */}
                <div className="lg:col-span-8 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-sanctuary-500/10 border border-sanctuary-500/20 flex items-center justify-center">
                          {getIcon(SERVICES_DATA[0].iconName)}
                        </div>
                        <span className="font-mono text-xs font-bold text-sanctuary-400 px-3 py-1 rounded-md bg-sanctuary-500/10 border border-sanctuary-500/20">
                          01
                        </span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-widest text-slate-300">
                        {SERVICES_DATA[0].tag}
                      </span>
                    </div>

                    <span className="text-xs font-mono text-sanctuary-400 uppercase tracking-widest">{SERVICES_DATA[0].subtitle}</span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1 mb-4">{SERVICES_DATA[0].title}</h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 font-normal max-w-xl">
                      {SERVICES_DATA[0].description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {SERVICES_DATA[0].features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-xs text-slate-300 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-sanctuary-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">STARTING FROM</span>
                      <span className="text-3xl font-bold text-white">{SERVICES_DATA[0].priceStart}</span>
                    </div>
                    <button
                      onClick={() => onOpenBooking(SERVICES_DATA[0].id)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sanctuary-500 hover:bg-sanctuary-400 text-xs font-bold tracking-widest text-monolith-900 uppercase transition-all duration-300 shadow-lg shadow-sanctuary-500/20 group"
                    >
                      REQUEST SERVICE
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right: specs panel */}
                <div className="lg:col-span-4 bg-sanctuary-500/5 border-t lg:border-t-0 lg:border-l border-white/8 p-8 sm:p-10 flex flex-col justify-center gap-8">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1.5">CREW SIZE</span>
                    <span className="text-sm font-mono text-slate-200 font-bold">{SERVICES_DATA[0].crewSize}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1.5">DURATION</span>
                    <span className="text-sm font-mono text-slate-200 font-bold">{SERVICES_DATA[0].duration}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1.5">SURFACE FOCUS</span>
                    <span className="text-sm font-mono text-slate-200 font-bold">{SERVICES_DATA[0].surfaceFocus}</span>
                  </div>
                  {/* Large decorative number */}
                  <div className="mt-auto pt-8 text-right">
                    <span className="font-mono font-extrabold text-7xl sm:text-8xl text-sanctuary-500/10 select-none leading-none">01</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Remaining cards - 3-col or 2-col grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {SERVICES_DATA.slice(1).map((service: ServiceItem, index: number) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel glass-panel-hover p-7 sm:p-8 rounded-3xl relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-sanctuary-500/10 border border-sanctuary-500/20 flex items-center justify-center">
                          {getIcon(service.iconName)}
                        </div>
                        <span className="font-mono text-[11px] font-bold text-sanctuary-400 px-2 py-0.5 rounded bg-sanctuary-500/10 border border-sanctuary-500/20">
                          0{index + 2}
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-widest text-slate-400">
                        {service.tag}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-sanctuary-400 uppercase tracking-widest">{service.subtitle}</span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-1 mb-3">{service.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5 font-normal">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-sanctuary-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase block">FROM</span>
                      <span className="text-xl font-bold text-white">{service.priceStart}</span>
                    </div>
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 group-hover:bg-sanctuary-500 text-[11px] font-bold tracking-widest text-white group-hover:text-monolith-900 uppercase transition-all duration-300"
                    >
                      REQUEST
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
