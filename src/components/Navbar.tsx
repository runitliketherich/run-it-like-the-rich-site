import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (service?: string) => void;
  onOpenNewsletter: () => void;
}

export default function Navbar({ onOpenBooking, onOpenNewsletter }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (hash: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border-[#121212]/10 py-3 shadow-sm' 
            : 'bg-transparent border-transparent py-5'
        }`}
        id="main-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between" id="navbar-container">
          {/* Brand Signature */}
          <a href="#" className="flex items-center space-x-2 group" id="brand-logo-link">
            <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/40 flex items-center justify-center transition-all group-hover:bg-[#C5A059]/20" id="brand-logo-graphic">
              <span className="font-serif text-[#C5A059] font-extrabold text-sm">$</span>
            </div>
            <span className="font-serif text-[#121212] font-extrabold tracking-tight text-lg md:text-xl" id="brand-logo-text">
              Run It Like <span className="text-[#C5A059]">the Rich</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-widest font-semibold" id="desktop-nav-links">
            <a href="#what-this-is" className="text-[#121212]/70 hover:text-[#C5A059] transition-colors" id="nav-lnk-about">
              The Method
            </a>
            <a href="#scorecard-section" className="text-[#121212]/70 hover:text-[#C5A059] transition-colors" id="nav-lnk-scorecard">
              Owner Scorecard
            </a>
            <a href="#start-here" className="text-[#121212]/70 hover:text-[#C5A059] transition-colors" id="nav-lnk-resources">
              Owner Tools
            </a>
            <a href="#work-with-laura" className="text-[#121212]/70 hover:text-[#C5A059] transition-colors" id="nav-lnk-laura">
              Work With Laura
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4" id="desktop-nav-cta">
            <a
              href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#121212] hover:bg-[#C5A059] text-[#FBFBF9] font-semibold text-[10px] uppercase tracking-widest rounded transition-all flex items-center space-x-2 text-center"
              id="nav-btn-booking"
            >
              <span>Book a Checkup</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg text-[#121212]/70 hover:text-[#121212] hover:bg-black/5 transition-all"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Sliding Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#FBFBF9] pt-24 px-6 flex flex-col justify-between pb-10" id="mobile-menu-overlay">
          <div className="space-y-6 text-left" id="mobile-nav-links">
            <button
              onClick={() => handleMobileLinkClick('#what-this-is')}
              className="block w-full text-left text-2xl font-serif text-[#121212] hover:text-[#C5A059]"
              id="mobile-lnk-about"
            >
              The Method
            </button>
            <button
              onClick={() => handleMobileLinkClick('#scorecard-section')}
              className="block w-full text-left text-2xl font-serif text-[#121212] hover:text-[#C5A059]"
              id="mobile-lnk-scorecard"
            >
              Owner Scorecard
            </button>
            <button
              onClick={() => handleMobileLinkClick('#start-here')}
              className="block w-full text-left text-2xl font-serif text-[#121212] hover:text-[#C5A059]"
              id="mobile-lnk-resources"
            >
              Owner Tools
            </button>
            <button
              onClick={() => handleMobileLinkClick('#work-with-laura')}
              className="block w-full text-left text-2xl font-serif text-[#121212] hover:text-[#C5A059]"
              id="mobile-lnk-laura"
            >
              Work With Laura
            </button>
            <button
              onClick={() => handleMobileLinkClick('#virtual-hq')}
              className="block w-full text-left text-2xl font-serif text-[#121212] hover:text-[#C5A059]"
              id="mobile-lnk-virtualhq"
            >
              The Virtual HQ
            </button>
          </div>

          <div className="space-y-3" id="mobile-nav-cta">
            <a
              href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-[#121212] hover:bg-[#C5A059] text-white font-semibold text-xs uppercase tracking-widest rounded text-center flex items-center justify-center space-x-2 block"
              id="mobile-btn-booking"
            >
              <span>Book a Business Checkup</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://runitliketherich.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-transparent border border-[#121212]/15 hover:bg-black/5 text-[#121212] font-semibold text-xs uppercase tracking-widest rounded text-center block"
              id="mobile-btn-newsletter"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      )}
    </>
  );
}
