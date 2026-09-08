import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { OwnerManagerViewSection } from './components/OwnerManagerViewSection';
import { TeamViewSection } from './components/TeamViewSection';
import { BuildYourHqSection } from './components/BuildYourHqSection';
import { SeeItInActionCarousel } from './components/SeeItInActionCarousel';
import { VideoTourSection } from './components/VideoTourSection';
import { CustomizationSection } from './components/CustomizationSection';
import { ExampleTagsSection } from './components/ExampleTagsSection';
import { PricingSection } from './components/PricingSection';
import { LimitedLaunchSection } from './components/LimitedLaunchSection';
import { CallToActionSection } from './components/CallToActionSection';
import { LeadFormSection } from './components/LeadFormSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [selectedModulesFromBuilder, setSelectedModulesFromBuilder] = useState<string[]>([]);

  const scrollToForm = () => {
    const el = document.getElementById('intake');
    if (el) {
      const yOffset = -50;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      const yOffset = -60;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleBuildMyHqWithModules = (modules: string[]) => {
    setSelectedModulesFromBuilder(modules);
    scrollToForm();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF7] text-[#0F172A] font-sans antialiased selection:bg-[#0F766E] selection:text-white">
      
      {/* 1. Top Navigation */}
      <Navbar
        onScrollToForm={scrollToForm}
        onScrollToFeatures={scrollToFeatures}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* 2. Hero Section + Executive Dashboard Mockup */}
        <Hero
          onScrollToForm={scrollToForm}
          onScrollToFeatures={scrollToFeatures}
        />

        {/* 3. Problem: The Business is Running. But Where Do You Go to See It? */}
        <ProblemSection onScrollToForm={scrollToForm} />

        {/* 4. Owner / Manager View: Built First for the Owner & Manager */}
        <OwnerManagerViewSection onScrollToForm={scrollToForm} />

        {/* 5. Team View: Add the Team When You're Ready */}
        <TeamViewSection onScrollToForm={scrollToForm} />

        {/* 6. Build Your Virtual HQ: 15 Selectable Feature Cards */}
        <BuildYourHqSection onScrollToFormWithModules={handleBuildMyHqWithModules} />

        {/* 7. See It In Action: 9-Slide Horizontal Carousel with Browser Mockups */}
        <SeeItInActionCarousel onScrollToForm={scrollToForm} />

        {/* 8. Video Area: Take a 90-Second Tour */}
        <VideoTourSection onScrollToForm={scrollToForm} />

        {/* 9. Customization: Not an Off-the-Shelf System. Your System (Map It, Build It, Use It) */}
        <CustomizationSection onScrollToForm={scrollToForm} />

        {/* 10. Example Customization: What Could Go in Your HQ? (21 Interactive Tags) */}
        <ExampleTagsSection onScrollToForm={scrollToForm} />

        {/* 11. Investment: Virtual HQ™ Launch ($4,750 / Reserve for $250) */}
        <PricingSection onScrollToForm={scrollToForm} />

        {/* 12. Limited Launch: Launch Build Slots */}
        <LimitedLaunchSection onScrollToForm={scrollToForm} />

        {/* 13. Call to Action: Bring Us the Part of Your Business That Feels Scattered */}
        <CallToActionSection
          onScrollToForm={scrollToForm}
          onScrollToFeatures={scrollToFeatures}
        />

        {/* 14. Lead Intake Form: Let's Map Your Virtual HQ */}
        <LeadFormSection preselectedModules={selectedModulesFromBuilder} />

        {/* 15. FAQ: Owner-Focused Clear Answers */}
        <FaqSection onScrollToForm={scrollToForm} />

      </main>

      {/* 16. Footer: Virtual HQ™ by TheHQ.online */}
      <Footer
        onScrollToForm={scrollToForm}
        onScrollToFeatures={scrollToFeatures}
      />

      {/* 17. Mobile Floating Action Bar */}
      <MobileStickyBar
        onScrollToForm={scrollToForm}
        onScrollToFeatures={scrollToFeatures}
      />

    </div>
  );
}
