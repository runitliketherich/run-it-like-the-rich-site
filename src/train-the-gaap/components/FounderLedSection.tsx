import React from 'react';
import { Award, UserCheck, ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';

interface FounderLedSectionProps {
  onOpenApply: () => void;
}

export const FounderLedSection: React.FC<FounderLedSectionProps> = ({ onOpenApply }) => {
  return (
    <section className="py-20 md:py-28 bg-[#faf8f5] text-stone-900 border-b border-stone-200 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-200/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Metric & Badge Card */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative p-8 rounded-3xl bg-white border border-stone-200 shadow-xl space-y-4 max-w-md w-full">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
                  FOUNDER-LED
                </span>
                <Award className="w-6 h-6 text-amber-800" />
              </div>

              <div className="py-4 border-y border-stone-200">
                <span className="text-7xl sm:text-8xl font-bold font-serif-display text-amber-800 block">
                  25+
                </span>
                <span className="text-sm font-bold tracking-wider uppercase text-stone-800">
                  Years Direct Advisory Experience
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-stone-600">
                <p className="flex items-center gap-2 text-stone-800 font-medium">
                  <UserCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct 1-on-1 access with Laura Poincot</span>
                </p>
                <p className="flex items-center gap-2 text-stone-800 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict capacity caps to preserve quality</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: The Mentorship Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>UNCOMPROMISED ATTENTION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display text-stone-900 leading-tight">
              Personally reviewed and trained by{' '}
              <span className="text-amber-800">Laura Poincot.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              <p>
                Initial openings are intentionally limited because review, oversight, and training are currently provided directly by Laura.
              </p>
              <p>
                The long-term goal is to develop a small group of experienced Train the GAAP™ mentors from people who master the method and want to help train the next generation.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenApply}
                className="px-7 py-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-base shadow-sm transition-all text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply for a limited opening</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-500 text-center sm:text-left">
                Intentionally capped client roster for active quarter.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
