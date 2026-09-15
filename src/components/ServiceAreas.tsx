import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICE_AREAS } from '../data/cleaningData';
import { MapPin, Search, CheckCircle2, AlertCircle, Building } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  const [zipInput, setZipInput] = useState('');
  const [searchResult, setSearchResult] = useState<{ covered: boolean; message: string } | null>(null);

  const checkCoverage = (query: string) => {
    if (!query.trim()) return;

    const trimmed = query.trim().toLowerCase();
    const found = SERVICE_AREAS.some(area => 
      area.code.toLowerCase().includes(trimmed) || 
      area.area.toLowerCase().includes(trimmed)
    );

    if (found) {
      setSearchResult({
        covered: true,
        message: `Area "${query.toUpperCase()}" is actively serviced by our dedicated daily white-glove crew!`
      });
    } else {
      setSearchResult({
        covered: false,
        message: `Postal area "${query.toUpperCase()}" is currently on our priority expansion list. A private custom crew can be deployed upon direct concierge inquiry.`
      });
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    checkCoverage(zipInput);
  };

  const handleMetroClick = (code: string) => {
    setZipInput(code);
    checkCoverage(code);
  };

  return (
    <section id="areas" className="py-28 px-4 sm:px-6 bg-monolith-900 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase">
              05 / GEOGRAPHIC COVERAGE
            </span>
            <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white tracking-tight mt-2">
              SERVICE REGIONS
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md mt-4 md:mt-0">
            Dedicated white-glove mobile crews operating in prime metropolitan centers and luxury residential enclaves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Postal Code Lookup */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-10 rounded-3xl">
            <span className="font-mono text-xs font-bold text-sanctuary-400 px-3 py-1 rounded-md bg-sanctuary-500/10 border border-sanctuary-500/20 inline-block mb-4">
              CREW DISPATCH VERIFIER
            </span>

            <h3 className="text-2xl font-bold text-white mb-2">Check Instant Coverage</h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Enter your zip code, city, or neighborhood to verify immediate daily crew deployment.
            </p>

            <form onSubmit={handleSearch} className="space-y-4 mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. 90210, Tribeca, Beverly Hills, Miami..."
                  value={zipInput}
                  onChange={(e) => {
                    setZipInput(e.target.value);
                    setSearchResult(null);
                  }}
                  className="w-full px-5 py-3.5 bg-monolith-800 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 text-xs tracking-wider focus:outline-none focus:border-sanctuary-400 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-4 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 rounded-xl font-bold text-xs flex items-center justify-center transition-colors"
                  aria-label="Search coverage"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>

              {searchResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-2xl text-xs flex items-start gap-3 border ${
                    searchResult.covered
                      ? 'bg-sanctuary-500/10 border-sanctuary-500/30 text-sanctuary-300'
                      : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                  }`}
                >
                  {searchResult.covered ? (
                    <CheckCircle2 className="w-4 h-4 text-sanctuary-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <span>{searchResult.message}</span>
                </motion.div>
              )}
            </form>

            {/* Quick Test Chips */}
            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                QUICK-TEST TOP REGIONS:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['90210', '10013', '33139', '98101', '81611'].map(code => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => handleMetroClick(code)}
                    className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white transition-colors"
                  >
                    ZIP {code}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Metro Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                onClick={() => handleMetroClick(area.code)}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/5 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-sanctuary-400 px-2.5 py-1 rounded-md bg-sanctuary-500/10 border border-sanctuary-500/20">
                      ZIP {area.code}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sanctuary-400 animate-pulse" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{area.area}</h4>
                </div>
                <span className="text-[11px] font-mono text-slate-400 block mt-4">
                  {area.status}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
