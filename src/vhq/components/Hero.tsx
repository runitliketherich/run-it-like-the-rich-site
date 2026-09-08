import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { HeroDashboardMockup } from './HeroDashboardMockup';
import { BRAND_CONFIG } from '../config';

interface HeroProps {
  onScrollToForm: () => void;
  onScrollToFeatures: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToForm, onScrollToFeatures }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-18 lg:pb-28 bg-[#FBFBF7] border-b border-slate-200/80 overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Messaging & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Top Category Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide border border-slate-800 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              <span className="font-mono uppercase text-[11px] text-teal-300">
                INTERNAL BUSINESS COMMAND CENTER
              </span>
            </div>

            {/* Large Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-serif font-bold text-slate-950 tracking-tight leading-[1.08]">
              ONE PLACE TO SEE YOUR BUSINESS. <br />
              <span className="text-teal-700">AND KEEP IT MOVING.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
              Virtual HQ™ gives owners and managers one internal place to see daily operations, upcoming deadlines, delegated tasks, progress, files, projects, financial information and the systems that keep the business running.
            </p>

            {/* Supporting Line */}
            <div className="p-3.5 rounded-xl bg-slate-100/90 border border-slate-300/80 text-xs sm:text-sm font-medium text-slate-800 space-y-1">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Start with the features you need.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Customize it around your business.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Add your team when you're ready.</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[48px]"
              >
                <span>BUILD MY VIRTUAL HQ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToFeatures}
                className="inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-2xs hover:border-slate-400 transition-all cursor-pointer min-h-[48px]"
              >
                <span>EXPLORE THE FEATURES</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              </button>
            </div>

            {/* Trust / Positioning Line */}
            <div className="pt-2 flex items-center text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-teal-700 mr-2 shrink-0" />
              <span>{BRAND_CONFIG.positioning}</span>
            </div>

          </div>

          {/* Right Column: High-Fidelity Interactive Dashboard Visual */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/20 to-slate-400/20 blur-xl opacity-60"></div>
              <div className="relative">
                <HeroDashboardMockup />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
