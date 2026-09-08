import React, { useState, useEffect } from 'react';
import { ShieldCheck, ChevronRight, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenApply: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply }) => {
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
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Who It’s For', href: '#who-its-for' },
    { label: 'The ACT™ Method', href: '#the-act-method' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'What’s Included', href: '#whats-included' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200 text-stone-900 shadow-sm py-2.5'
          : 'bg-[#faf8f5]/95 backdrop-blur-sm border-b border-stone-200/80 text-stone-900 py-3.5'
      }`}
    >
      {/* Top micro-announcement bar */}
      <div className="bg-amber-100/90 text-amber-950 text-xs py-1.5 px-4 text-center font-medium tracking-wide border-b border-amber-200">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider bg-amber-800 text-amber-50">
            Business Insider Shares
          </span>
          <span className="font-semibold text-stone-900">Run It Like the Rich™</span>
          <span className="text-amber-700">•</span>
          <span>Led by Laura Poincot (25+ yrs)</span>
          <span className="hidden sm:inline text-amber-700">•</span>
          <a
            href="https://TheHQ.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 font-bold text-amber-900 underline underline-offset-2 hover:text-amber-700 transition-colors"
          >
            TheHQ.online <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-amber-800 border border-amber-700 flex items-center justify-center text-amber-200 font-bold font-brand-badge text-lg shadow-sm group-hover:bg-amber-900 transition-colors">
              TG
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-display text-lg sm:text-xl font-bold tracking-tight text-stone-900">
                  Train the GAAP™
                </span>
              </div>
              <span className="text-[11px] text-stone-500 font-medium tracking-wide flex items-center gap-1">
                by The Virtual HQ™ <span className="text-amber-700">•</span> <span className="text-stone-500 hidden sm:inline">TheHQ.online</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-stone-600 hover:text-amber-800 transition-colors tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Status Badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-[12px] text-amber-900 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>Limited Client Openings</span>
            </div>

            <button
              onClick={onOpenApply}
              id="nav-apply-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-sm active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Apply for an opening</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-stone-800 font-semibold hover:bg-stone-50 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-stone-600 px-1">
              <span>Openings: <strong>Limited Active Roster</strong></span>
              <a href="https://TheHQ.online" target="_blank" rel="noopener noreferrer" className="text-amber-800 font-bold underline">
                TheHQ.online
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="w-full py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Apply for an opening</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
