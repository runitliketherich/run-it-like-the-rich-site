import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CallToActionSectionProps {
  onScrollToForm: () => void;
  onScrollToFeatures: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  onScrollToForm,
  onScrollToFeatures,
}) => {
  const SCATTERED_ITEMS = [
    'Files.',
    'Deadlines.',
    'Projects.',
    'Team updates.',
    'Compliance.',
    'Financial information.',
    'Forms.',
    'Lists.',
    'Daily operations.',
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-300 text-xs font-mono font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span>Virtual HQ™ Command Center</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            BRING US THE PART OF YOUR BUSINESS THAT FEELS SCATTERED.
          </h2>
        </div>

        {/* Scattered items list */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:text-base font-serif font-medium text-slate-300 max-w-2xl mx-auto">
          {SCATTERED_ITEMS.map((item, idx) => (
            <span key={idx} className="text-teal-200">
              {item}
            </span>
          ))}
        </div>

        {/* Core Subtitle */}
        <p className="text-base sm:text-xl font-serif text-slate-200 font-semibold max-w-xl mx-auto">
          Let's put it somewhere you can actually see and manage it.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onScrollToForm}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer min-h-[48px]"
          >
            <span>BUILD MY VIRTUAL HQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onScrollToFeatures}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs uppercase tracking-wider border border-slate-800 transition-all cursor-pointer min-h-[48px]"
          >
            <span>SHOW ME WHAT'S POSSIBLE</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        {/* Small trust note */}
        <div className="pt-2 flex items-center justify-center space-x-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>Owner-controlled • 100% data custody in your accounts</span>
        </div>

      </div>
    </section>
  );
};
