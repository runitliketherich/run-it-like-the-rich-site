import React from 'react';
import { PhoneCall, Sparkles, ArrowRight, ShieldCheck, Mail, Globe } from 'lucide-react';

interface FooterProps {
  onOpenConsult: () => void;
  onOpenDownpay: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsult, onOpenDownpay }) => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200 text-slate-600 text-xs">
      
      {/* Bottom CTA Highlight Box */}
      <div className="border-b border-stone-200 py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <span className="text-xs font-mono-code font-bold uppercase tracking-widest text-amber-800 mb-2 block">
            STORYBOOKEXIT™ SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            Build the business before the buyer arrives.
          </h2>
          <p className="mt-4 text-base text-slate-700 max-w-2xl mx-auto">
            Strengthen the earnings. Strengthen the team. Preserve the company knowledge. Reduce owner dependence. Organize the evidence.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenConsult}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md border border-amber-500"
            >
              <PhoneCall className="w-4 h-4 text-slate-950" />
              <span>Start with a readiness review</span>
            </button>
            <button
              onClick={onOpenDownpay}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 border border-slate-900 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Downpay & Lock Slot ($1,500)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 font-serif-editorial font-bold text-sm">
                SBE
              </div>
              <span className="font-serif-editorial font-bold text-lg text-slate-900">
                StoryBookExit<span className="text-amber-700">™</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Business value & exit readiness system for privately owned companies preparing for a 3–7 year runway.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a 
                href="mailto:support@thehq.online" 
                className="flex items-center gap-1.5 text-slate-700 hover:text-amber-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-700" />
                <span>support@thehq.online</span>
              </a>
              <a 
                href="https://TheHQ.online" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 text-slate-700 hover:text-amber-800 transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-amber-700" />
                <span>TheHQ.online</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-slate-800 block mb-2">
              System Navigation
            </span>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li><a href="/" className="hover:text-amber-800 transition-colors">Run It Like the Rich</a></li>
              <li><a href="/vhq" className="hover:text-amber-800 transition-colors">Virtual HQ™</a></li>
              <li><a href="/train-the-gaap" className="hover:text-amber-800 transition-colors">Train the GAAP™</a></li>
              <li><a href="#runway" className="hover:text-amber-800 transition-colors">3–7 Year Runway</a></li>
              <li><a href="#system" className="hover:text-amber-800 transition-colors">The 6 Core Pillars</a></li>
              <li><a href="#financial" className="hover:text-amber-800 transition-colors">The Financial Story</a></li>
              <li><a href="#virtual-hq" className="hover:text-amber-800 transition-colors">Virtual HQ™ Foundation</a></li>
              <li><a href="#roadmap" className="hover:text-amber-800 transition-colors">5-Stage Roadmap</a></li>
              <li><a href="#calculator" className="hover:text-amber-800 transition-colors">Valuation Simulator</a></li>
              <li><a href="#investment" className="hover:text-amber-800 transition-colors">Pricing & Investment</a></li>
            </ul>
          </div>

          {/* Legal / Disclaimer Column */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-slate-800 block mb-2">
              Professional Disclosure
            </span>
            <p className="text-[11px] text-slate-600 leading-relaxed bg-white p-3.5 rounded-lg border border-stone-200 shadow-xs">
              StoryBookExit™ provides financial and operational readiness support, documentation, systems improvement and coordination. It does not provide legal representation, investment banking, valuation opinions, attest services or substitute for licensed tax, legal or transaction professionals where those services are required.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} StoryBookExit™ • runitliketherich.com • TheHQ.online. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-700 cursor-pointer">Confidentiality Policy</span>
            <span>•</span>
            <span className="hover:text-slate-700 cursor-pointer">Terms of Engagement</span>
            <span>•</span>
            <span className="hover:text-slate-700 cursor-pointer">Due Diligence Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
