import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowRight, X, Menu } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/cleaningData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPhilosophy: () => void;
}

const navLinks = [
  { label: 'SERVICES', href: '#services', id: 'services' },
  { label: 'GALLERY', href: '#before-after', id: 'before-after' },
  { label: 'PROCESS', href: '#process', id: 'process' },
  { label: 'ESTIMATOR', href: '#estimator', id: 'estimator' },
  { label: 'PACKAGES', href: '#packages', id: 'packages' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
];

const mobileNavLinks = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'SERVICES', href: '#services', id: 'services' },
  { label: 'GALLERY', href: '#before-after', id: 'before-after' },
  { label: 'PROCESS', href: '#process', id: 'process' },
  { label: 'ESTIMATOR', href: '#estimator', id: 'estimator' },
  { label: 'PACKAGES', href: '#packages', id: 'packages' },
  { label: 'SERVICE AREAS', href: '#areas', id: 'areas' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenPhilosophy }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      // Detect active section
      const sections = ['home', 'services', 'before-after', 'process', 'estimator', 'packages', 'areas', 'faq'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace('#', '');
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-monolith-900/96 backdrop-blur-md py-3 border-b border-white/8 shadow-xl shadow-black/30'
          : 'bg-gradient-to-b from-monolith-950/85 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Brand Logo -> direct #home scroll */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          className="flex items-center gap-3 group shrink-0"
          aria-label="Sanctuary Home"
        >
          <div className="w-9 h-9 rounded-full border border-sanctuary-500/40 flex items-center justify-center bg-sanctuary-500/10 group-hover:border-sanctuary-400 group-hover:bg-sanctuary-500/20 transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-sanctuary-400 rotate-45 group-hover:scale-110 group-hover:rotate-[60deg] transition-all duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-extrabold tracking-widest text-base md:text-lg text-white group-hover:text-sanctuary-300 transition-colors leading-none">
              SANCTUARY
            </span>
            <span className="text-[8.5px] tracking-widest text-sanctuary-400 uppercase font-mono hidden md:inline-block mt-0.5">
              ARCHITECTURAL RESTORATION
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7 2xl:gap-9">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-[11px] font-semibold tracking-widest uppercase whitespace-nowrap transition-all relative py-1.5 ${
                  isActive
                    ? 'text-sanctuary-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sanctuary-400 rounded-full shadow-[0_0_8px_rgba(105,142,127,0.8)]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Group - Desktop */}
        <div className="hidden xl:flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenPhilosophy}
            className="text-[11px] font-semibold tracking-widest uppercase whitespace-nowrap text-slate-400 hover:text-white transition-colors py-1.5"
          >
            OUR STORY
          </button>

          <a
            href={COMPANY_CONTACT.telLink}
            className="hidden 2xl:flex items-center gap-2 text-[11px] font-mono text-slate-300 hover:text-sanctuary-300 transition-colors px-3 py-1.5 rounded-full border border-white/10 hover:border-sanctuary-500/40"
          >
            <Phone className="w-3.5 h-3.5 text-sanctuary-400" />
            <span>{COMPANY_CONTACT.phone}</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-[11px] font-bold tracking-widest text-monolith-900 uppercase bg-sanctuary-500 hover:bg-sanctuary-400 rounded-full overflow-hidden transition-all duration-300 shadow-lg shadow-sanctuary-500/25 hover:shadow-sanctuary-400/35"
          >
            <span className="relative z-10 flex items-center gap-2">
              RESERVE
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={onOpenBooking}
            className="px-4 py-2 text-[11px] font-bold tracking-wider text-monolith-900 uppercase bg-sanctuary-500 hover:bg-sanctuary-400 rounded-full transition-colors"
          >
            RESERVE
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none transition-colors"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-[60px] bg-black/60 backdrop-blur-sm z-40 xl:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="xl:hidden fixed inset-x-0 top-[60px] bg-monolith-900 border-b border-white/10 shadow-2xl z-50 max-h-[calc(100vh-64px)] overflow-y-auto"
            >
              <div className="px-4 py-4 flex flex-col gap-0.5">
                {mobileNavLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`text-[11px] font-semibold tracking-widest py-3 px-4 rounded-xl flex items-center justify-between transition-colors ${
                        isActive
                          ? 'text-sanctuary-300 bg-sanctuary-500/10 font-bold'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sanctuary-400" />}
                    </a>
                  );
                })}

                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenPhilosophy(); }}
                  className="text-[11px] font-semibold tracking-widest text-left py-3 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                >
                  OUR STORY &amp; PHILOSOPHY
                </button>

                <div className="pt-4 mt-2 space-y-3 border-t border-white/10">
                  <a
                    href={COMPANY_CONTACT.telLink}
                    className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-sanctuary-400" />
                    <span>CONCIERGE: {COMPANY_CONTACT.phone}</span>
                  </a>

                  <button
                    onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                    className="w-full py-3.5 text-[11px] font-bold tracking-widest text-monolith-900 uppercase bg-sanctuary-500 hover:bg-sanctuary-400 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-sanctuary-500/20 transition-colors"
                  >
                    <span>RESERVE SANCTUARY NOW</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
