import React from 'react';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { LegalTab } from './LegalModal';
import { COMPANY_CONTACT } from '../data/cleaningData';

interface FooterProps {
  onOpenLegal: (tab: LegalTab) => void;
  onOpenPhilosophy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenPhilosophy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-monolith-950 text-slate-400 pt-20 pb-12 border-t border-white/8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top CTA Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-16 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-7 rounded-full border border-sanctuary-500/40 flex items-center justify-center bg-sanctuary-500/10">
                <div className="w-2 h-2 bg-sanctuary-400 rotate-45" />
              </div>
              <span className="font-sans font-extrabold tracking-widest text-xl text-white">SANCTUARY</span>
            </div>
            <h3 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
              CLEAN CHANGES EVERYTHING.
            </h3>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-sanctuary-500/10 border border-sanctuary-500/20 text-sanctuary-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-sanctuary-400 animate-pulse" />
              <span>LIVE: CREWS ACTIVE IN 6 METROS</span>
            </div>

            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors group shrink-0"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16 border-b border-white/5 text-xs">
          
          <div>
            <span className="font-mono text-sanctuary-400 uppercase tracking-widest block mb-4">HEADQUARTERS</span>
            <ul className="space-y-3 font-normal">
              <li className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-sanctuary-400 shrink-0 mt-0.5" />
                <span>Damansara Heights, Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-sanctuary-400 shrink-0" />
                <a href={COMPANY_CONTACT.telLink} className="hover:text-white transition-colors">
                  {COMPANY_CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-sanctuary-400 shrink-0" />
                <a href="mailto:concierge@sanctuaryclean.com" className="hover:text-white transition-colors">
                  concierge@sanctuaryclean.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-sanctuary-400 uppercase tracking-widest block mb-4">OFFERINGS</span>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-white transition-colors">Architectural Sanctuary Clean</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Corporate Monolith Office</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Post-Construction Detail</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Move-In Restoration Baseline</a></li>
              <li><a href="#estimator" className="hover:text-white text-sanctuary-300 transition-colors">Spatial Calculator &amp; Quote</a></li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-sanctuary-400 uppercase tracking-widest block mb-4">SECURITY &amp; COMPLIANCE</span>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onOpenLegal('security')}
                  className="hover:text-white transition-colors text-left"
                >
                  RM 5M Umbrella Commercial Insurance
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('security')}
                  className="hover:text-white transition-colors text-left"
                >
                  Full NDA &amp; Discretion Protocols
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenPhilosophy}
                  className="hover:text-white transition-colors text-left text-sanctuary-300"
                >
                  Museum Material Science &amp; Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  White-Glove Guarantee SLA
                </button>
              </li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-sanctuary-400 uppercase tracking-widest block mb-4">METROPOLITAN HUBS</span>
            <p className="text-slate-400 leading-relaxed font-normal mb-4">
              Beverly Hills &middot; Bel Air &middot; Tribeca &middot; Hudson Yards &middot; Star Island Miami &middot; Bellevue WA &middot; Pacific Heights SF &middot; Damansara KL &middot; Aspen CO
            </p>
            <a
              href="#areas"
              className="text-sanctuary-300 hover:text-white font-mono text-[11px] underline underline-offset-4"
            >
              Check Instant Coverage in Your Area &rarr;
            </a>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>&copy; {new Date().getFullYear()} SANCTUARY ARCHITECTURAL RESTORATION LLC. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer uppercase tracking-wider"
            >
              PRIVACY POLICY
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer uppercase tracking-wider"
            >
              TERMS OF SERVICE
            </button>
            <button
              onClick={() => onOpenLegal('security')}
              className="hover:text-slate-300 transition-colors cursor-pointer uppercase tracking-wider"
            >
              SECURITY MATRIX
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
