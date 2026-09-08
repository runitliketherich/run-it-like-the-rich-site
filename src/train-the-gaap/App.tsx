import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandEcosystem } from './components/BrandEcosystem';
import { FounderCallout } from './components/FounderCallout';
import { WhoThisIsFor } from './components/WhoThisIsFor';
import { ActMethod } from './components/ActMethod';
import { HowItWorks } from './components/HowItWorks';
import { OwnersEyesAndEars } from './components/OwnersEyesAndEars';
import { NotABookkeepingFactory } from './components/NotABookkeepingFactory';
import { WhatsIncluded } from './components/WhatsIncluded';
import { PricingInvestment } from './components/PricingInvestment';
import { FaqSection } from './components/FaqSection';
import { FounderLedSection } from './components/FounderLedSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ApplicationModal } from './components/ApplicationModal';

export default function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState<boolean>(false);

  const handleOpenApply = () => {
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-amber-700 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenApply={handleOpenApply} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onOpenApply={handleOpenApply} />

        {/* 2. Run It Like the Rich / Business Insider Shares / The Virtual HQ Brand Ecosystem */}
        <div id="ecosystem">
          <BrandEcosystem />
        </div>

        {/* 3. Founder Limited Openings & 4 Pillars Callout */}
        <FounderCallout />

        {/* 4. Who This Is For */}
        <WhoThisIsFor onOpenApply={handleOpenApply} />

        {/* 5. The Train the GAAP Method (The ACT Method & Interactive Sandbox) */}
        <ActMethod />

        {/* 6. How It Works (6-Stage Cycle) */}
        <HowItWorks onOpenApply={handleOpenApply} />

        {/* 7. The Owner's Eyes & Ears */}
        <OwnersEyesAndEars />

        {/* 8. Not a Bookkeeping Factory (Comparison) */}
        <NotABookkeepingFactory />

        {/* 9. What's Included (12-Month Relationship & 8 Core Modules) */}
        <WhatsIncluded />

        {/* 10. Investment & Pricing */}
        <PricingInvestment onOpenApply={handleOpenApply} />

        {/* 11. Frequently Asked Questions */}
        <FaqSection onOpenApply={handleOpenApply} />

        {/* 12. Founder-Led 25+ Years Statement */}
        <FounderLedSection onOpenApply={handleOpenApply} />

        {/* 13. Final Call To Action */}
        <FinalCta onOpenApply={handleOpenApply} />
      </main>

      {/* Footer with 'Accounting Tips & Insights' Newsletter Subscription */}
      <Footer />

      {/* Interactive Application Modal */}
      <ApplicationModal isOpen={isApplyModalOpen} onClose={handleCloseApply} />
    </div>
  );
}
