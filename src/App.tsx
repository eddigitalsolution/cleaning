import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Calculator } from './components/Calculator';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Packages } from './components/Packages';
import { ServiceAreas } from './components/ServiceAreas';
import { FAQ } from './components/FAQ';
import { BookingModal, BookingEstimateConfig } from './components/BookingModal';
import { LegalModal, LegalTab } from './components/LegalModal';
import { PhilosophyModal } from './components/PhilosophyModal';
import { Footer } from './components/Footer';
import { ArrowRight } from 'lucide-react';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedInitial, setSelectedInitial] = useState<string | undefined>(undefined);
  const [activeEstimate, setActiveEstimate] = useState<BookingEstimateConfig | null>(null);

  // Legal Modal states
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<LegalTab>('privacy');

  // Philosophy Modal state
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);

  const handleOpenBooking = (initialPkgOrService?: string) => {
    setActiveEstimate(null);
    setSelectedInitial(initialPkgOrService);
    setIsBookingOpen(true);
  };

  const handleOpenBookingWithEstimate = (config: BookingEstimateConfig) => {
    setSelectedInitial(config.tier);
    setActiveEstimate(config);
    setIsBookingOpen(true);
  };

  const handleOpenLegal = (tab: LegalTab) => {
    setLegalTab(tab);
    setIsLegalOpen(true);
  };

  const handleOpenPhilosophy = () => {
    setIsPhilosophyOpen(true);
  };

  return (
    <div className="min-h-screen bg-monolith-900 text-slate-100 font-sans selection:bg-sanctuary-500 selection:text-monolith-900 overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenPhilosophy={handleOpenPhilosophy}
      />

      {/* Main Content Sections */}
      <main>
        {/* 00 / Hero Section with Interactive Drag & Preset Scrubber */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 01 / Curated Services Grid */}
        <Services onOpenBooking={(id) => handleOpenBooking(id)} />

        {/* 02 / Interactive Before & After Transformation Gallery */}
        <BeforeAfter />

        {/* Live Interactive Spatial Estimator & Cost Calculator */}
        <Calculator onOpenBookingWithEstimate={handleOpenBookingWithEstimate} />

        {/* 03 / The 4-Step Methodology & Ritual */}
        <Process />

        {/* Verified Client Testimonials & Publication Recognition */}
        <Testimonials />

        {/* 04 / Sanctuary Maintenance Packages & Tiers */}
        <Packages onOpenBooking={(id) => handleOpenBooking(id)} />

        {/* 05 / Geographic Metropolitan Coverage */}
        <ServiceAreas />

        {/* 06 / Frequently Asked Questions */}
        <FAQ />

        {/* High-Impact Final CTA */}
        <section className="py-28 px-4 sm:px-6 bg-gradient-to-b from-monolith-800 to-monolith-950 border-t border-white/10 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-sanctuary-500/5 blur-[160px] pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="text-sanctuary-400 font-mono text-xs font-bold tracking-widest uppercase block mb-4">
              SPATIAL PERFECTION AWAITS
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              EXPERIENCE THE DIFFERENCE <br />
              <span className="text-accent-gradient">PURE CLARITY</span> MAKES.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-xl mx-auto mb-10 font-normal leading-relaxed">
              Book your white-glove architectural sanctuary evaluation today. Restore your living or work environment to pristine, noise-free perfection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => handleOpenBooking()}
                className="w-full sm:w-auto px-10 py-5 bg-sanctuary-500 hover:bg-sanctuary-400 text-monolith-900 font-bold text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-2xl shadow-sanctuary-500/25 inline-flex items-center justify-center gap-3 group"
              >
                <span>RESERVE SANCTUARY NOW</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleOpenPhilosophy}
                className="w-full sm:w-auto px-8 py-5 border border-white/15 hover:border-white/40 text-white font-semibold text-xs tracking-widest uppercase rounded-full transition-all hover:bg-white/5"
              >
                READ OUR STORY
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with active legal links and philosophy trigger */}
      <Footer
        onOpenLegal={handleOpenLegal}
        onOpenPhilosophy={handleOpenPhilosophy}
      />

      {/* Booking Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSelection={selectedInitial}
        estimateConfig={activeEstimate}
      />

      {/* Legal & Compliance Modal (Privacy Policy, Terms, Security Matrix) */}
      <LegalModal
        isOpen={isLegalOpen}
        initialTab={legalTab}
        onClose={() => setIsLegalOpen(false)}
      />

      {/* Philosophy & Heritage Modal */}
      <PhilosophyModal
        isOpen={isPhilosophyOpen}
        onClose={() => setIsPhilosophyOpen(false)}
        onOpenBooking={() => {
          setIsPhilosophyOpen(false);
          handleOpenBooking();
        }}
      />
    </div>
  );
}

export default App;
