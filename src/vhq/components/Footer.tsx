import React from 'react';
import { ArrowUp, ArrowRight, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface FooterProps {
  onScrollToForm: () => void;
  onScrollToFeatures: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToForm, onScrollToFeatures }) => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Positioning Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-serif font-bold text-base shadow-xs">
                HQ
              </div>
              <span className="text-xl font-serif font-bold text-white tracking-tight">
                Virtual HQ™
              </span>
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 text-teal-300 border border-teal-500/30">
                by {BRAND_CONFIG.provider}
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-serif font-bold text-slate-200">
                ONE PLACE TO SEE YOUR BUSINESS. AND KEEP IT MOVING.
              </p>
              <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                Virtual HQ™ gives owners and managers one internal place to see daily operations, upcoming deadlines, delegated tasks, progress, files, projects, financial information and the systems that keep the business running.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-1 text-xs text-slate-400">
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                <span>Owner-Controlled</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                <span>100% Data Custody</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  15 Modular Features
                </a>
              </li>
              <li>
                <a href="#owner-view" className="hover:text-white transition-colors">
                  Owner / Manager Cockpit
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works (Map / Build / Use)
                </a>
              </li>
              <li>
                <a href="#see-it-in-action" className="hover:text-white transition-colors">
                  See It In Action
                </a>
              </li>
              <li>
                <a href="#investment" className="hover:text-white transition-colors">
                  Launch Investment ($4,750)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Footer CTAs */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Take Action
            </h4>
            <p className="text-xs text-slate-400">
              Ready to create one dependable starting point for your business?
            </p>
            <div className="space-y-2.5 pt-1">
              <button
                onClick={onScrollToForm}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-500 transition-colors cursor-pointer shadow-sm text-center"
              >
                BUILD MY HQ
              </button>
              <button
                onClick={onScrollToFeatures}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer text-center"
              >
                EXPLORE FEATURES
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND_CONFIG.provider}. All rights reserved. Virtual HQ™ is a trademark of {BRAND_CONFIG.provider}.
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`mailto:${BRAND_CONFIG.email}`}
              className="inline-flex items-center space-x-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{BRAND_CONFIG.email}</span>
            </a>

            <button
              onClick={handleScrollTop}
              className="inline-flex items-center space-x-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
