import React, { useState, useEffect } from 'react';
import { ShieldCheck, PhoneCall, ArrowRight, Sparkles, Menu, X, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenConsult: () => void;
  onOpenDownpay: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsult, onOpenDownpay }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '3–7 Year Runway', href: '#runway' },
    { label: 'The 6 Pillars', href: '#system' },
    { label: 'Financial Story', href: '#financial' },
    { label: 'Virtual HQ™', href: '#virtual-hq' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Investment', href: '#investment' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 py-3 shadow-sm' 
          : 'bg-stone-50/80 backdrop-blur-xs py-4 border-b border-stone-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tag */}
          <a href="#" className="flex items-center gap-3 group" id="brand-logo-link">
            <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800 font-serif-editorial font-bold text-xl shadow-xs group-hover:border-amber-500 transition-colors">
              SBE
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-editorial font-bold text-xl text-slate-900 tracking-tight">
                  StoryBookExit<span className="text-amber-700 text-sm">™</span>
                </span>
                <span className="hidden sm:inline-flex text-[10px] uppercase font-mono-code tracking-wider bg-stone-100 text-slate-700 px-1.5 py-0.5 rounded border border-stone-300 font-semibold">
                  TheHQ.online
                </span>
              </div>
              <p className="text-[11px] text-slate-600 font-sans tracking-wide">
                Business Value • Exit Readiness • Owner Independence
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-800 transition-colors text-xs font-semibold uppercase tracking-wider text-slate-700"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="header-consult-btn"
              onClick={onOpenConsult}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-stone-100 border border-stone-300 hover:border-slate-400 rounded-lg transition-all shadow-xs cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
              <span>Consult First</span>
            </button>
            <button
              id="header-downpay-btn"
              onClick={onOpenDownpay}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 border border-amber-500 rounded-lg transition-all shadow-sm font-sans cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Downpay / Lock Slot</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white border border-stone-300 text-slate-700 hover:text-slate-950 cursor-pointer shadow-xs"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white border border-stone-200 rounded-xl shadow-xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-slate-700 hover:bg-stone-100 rounded-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-stone-200 flex flex-col gap-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenConsult(); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 rounded-lg cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4 text-amber-700" />
                  <span>Request StoryBookExit™ Review</span>
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenDownpay(); }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg cursor-pointer shadow-xs"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Downpay & Reserve Build Slot ($1,500)</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
