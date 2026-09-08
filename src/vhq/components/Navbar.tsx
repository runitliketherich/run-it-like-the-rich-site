import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface NavbarProps {
  onScrollToForm: () => void;
  onScrollToFeatures: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onScrollToForm,
  onScrollToFeatures,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0F172A]/95 backdrop-blur-md border-b border-slate-800 shadow-md text-white'
          : 'bg-[#0F172A] border-b border-slate-800 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-2.5 text-left group cursor-pointer focus:outline-none min-h-[44px]"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-600 group-hover:bg-teal-500 text-white flex items-center justify-center font-serif font-bold text-base shadow-xs transition-colors shrink-0">
                HQ
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-1.5">
                  <span className="font-serif font-bold text-lg sm:text-xl tracking-tight text-white">
                    Virtual HQ™
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-800 text-teal-300 border border-teal-500/30">
                    by {BRAND_CONFIG.provider}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-medium hidden sm:inline-block">
                  Internal Business Command Center
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold text-slate-300">
            <button
              onClick={() => scrollToSection('features')}
              className="hover:text-white transition-colors cursor-pointer py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="hover:text-white transition-colors cursor-pointer py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('see-it-in-action')}
              className="hover:text-white transition-colors cursor-pointer py-2"
            >
              See It In Action
            </button>
            <button
              onClick={() => scrollToSection('investment')}
              className="hover:text-white transition-colors cursor-pointer py-2"
            >
              Investment
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="hover:text-white transition-colors cursor-pointer py-2"
            >
              FAQ
            </button>
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onScrollToFeatures}
              className="px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer min-h-[44px] inline-flex items-center"
            >
              SEE WHAT'S POSSIBLE
            </button>
            <button
              onClick={onScrollToForm}
              className="inline-flex items-center space-x-1.5 bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl shadow-sm transition-all hover:shadow cursor-pointer min-h-[44px]"
            >
              <span>BUILD MY VIRTUAL HQ</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Quick Action + Menu Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onScrollToForm}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-teal-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-xs"
            >
              Build HQ
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-slate-950/80 backdrop-blur-md lg:hidden flex flex-col justify-between overflow-y-auto">
          <div className="bg-[#0A1128] border-b border-slate-800 px-5 pt-4 pb-8 space-y-5 shadow-2xl">
            <div className="flex flex-col space-y-1 text-sm font-medium text-slate-200 divide-y divide-slate-800/80">
              <button
                onClick={() => scrollToSection('features')}
                className="text-left py-3.5 hover:text-teal-300 transition-colors flex items-center justify-between"
              >
                <span>15 Modular Features</span>
                <span className="text-[11px] font-mono text-slate-400">01</span>
              </button>
              <button
                onClick={() => scrollToSection('owner-view')}
                className="text-left py-3.5 hover:text-teal-300 transition-colors flex items-center justify-between"
              >
                <span>Owner & Manager View</span>
                <span className="text-[11px] font-mono text-slate-400">02</span>
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left py-3.5 hover:text-teal-300 transition-colors flex items-center justify-between"
              >
                <span>How It Works (Map / Build / Use)</span>
                <span className="text-[11px] font-mono text-slate-400">03</span>
              </button>
              <button
                onClick={() => scrollToSection('see-it-in-action')}
                className="text-left py-3.5 hover:text-teal-300 transition-colors flex items-center justify-between"
              >
                <span>See It In Action</span>
                <span className="text-[11px] font-mono text-slate-400">04</span>
              </button>
              <button
                onClick={() => scrollToSection('investment')}
                className="text-left py-3.5 hover:text-teal-300 transition-colors flex items-center justify-between"
              >
                <span>Launch Investment ($4,750)</span>
                <span className="text-[11px] font-mono text-slate-400">05</span>
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left py-3.5 hover:text-teal-300 transition-colors flex items-center justify-between"
              >
                <span>FAQ</span>
                <span className="text-[11px] font-mono text-slate-400">06</span>
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToForm();
                }}
                className="w-full py-4 text-center text-xs font-bold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-500 rounded-xl shadow-lg flex items-center justify-center space-x-2 min-h-[48px]"
              >
                <span>MAP MY VIRTUAL HQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onScrollToFeatures();
                }}
                className="w-full py-3.5 text-center text-xs font-bold text-slate-300 bg-slate-850 hover:bg-slate-800 rounded-xl border border-slate-800 min-h-[44px]"
              >
                EXPLORE 15 MODULES
              </button>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="inline-flex items-center space-x-1.5 text-slate-300 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>{BRAND_CONFIG.email}</span>
              </a>
              <span className="text-[10px] font-mono text-teal-300">
                100% Owner Custody
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
