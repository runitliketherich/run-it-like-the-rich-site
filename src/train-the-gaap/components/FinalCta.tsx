import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onOpenApply: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenApply }) => {
  return (
    <section className="py-24 md:py-32 bg-white text-stone-900 relative overflow-hidden border-b border-stone-200">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-amber-200/30 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative space-y-8">
        
        {/* Brand Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>TRAIN THE GAAP™</span>
        </div>

        {/* Big Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-serif-display text-stone-900 leading-tight">
          They already know your business.{' '}
          <span className="text-amber-800 block sm:inline">
            Give them the support to understand the books behind it.
          </span>
        </h2>

        {/* 4 Action Taglines */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-semibold text-stone-700 py-2">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Review the work
          </span>
          <span className="text-stone-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Teach the accounting
          </span>
          <span className="text-stone-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Improve the system
          </span>
          <span className="text-stone-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Back up the team
          </span>
        </div>

        {/* Action Button & Subtext */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <button
            onClick={onOpenApply}
            id="bottom-apply-btn"
            className="px-10 py-5 rounded-2xl bg-amber-800 hover:bg-amber-900 active:scale-[0.99] text-white font-bold text-lg shadow-xl shadow-amber-900/20 transition-all flex items-center gap-3 cursor-pointer"
          >
            <span>Apply for a limited opening</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <p className="text-xs sm:text-sm text-stone-500 max-w-md">
            Directly supervised by Laura Poincot (25+ yrs). Part of the <strong className="text-stone-800">Run It Like the Rich™</strong> business series by <strong className="text-stone-800">The Virtual HQ™ (TheHQ.online)</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
