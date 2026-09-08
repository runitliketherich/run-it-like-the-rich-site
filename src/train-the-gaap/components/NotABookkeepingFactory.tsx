import React from 'react';
import { COMPARISON_POINTS } from '../data/content';
import { Users, XCircle, CheckCircle2, Shield, HeartHandshake, Sparkles } from 'lucide-react';

export const NotABookkeepingFactory: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#faf8f5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>NOT A BOOKKEEPING FACTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display text-stone-900 leading-tight">
            Your current person stays{' '}
            <span className="text-amber-800 italic">unless you want full service.</span>
          </h2>
          <p className="text-lg text-stone-600 font-normal leading-relaxed">
            Full-service bookkeeping is available, but it is not the default. We work with the bookkeeper, office manager, accounting staff, operations team, and CPA already supporting the business.
          </p>
        </div>

        {/* Emphasized Statement Card */}
        <div className="mb-14 p-8 rounded-3xl bg-amber-900 text-white border border-amber-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-800 border border-amber-700 flex items-center justify-center text-amber-200 shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-amber-100">
                Keep the people who know the company.
              </h3>
              <p className="text-sm sm:text-base text-amber-200/90 mt-1">
                Strengthen the system, procedures, and oversight around them.
              </p>
            </div>
          </div>
          <span className="shrink-0 px-4 py-2 rounded-xl bg-amber-950/80 border border-amber-700/80 text-xs font-bold text-amber-200 tracking-wide uppercase">
            Mentorship Model
          </span>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="rounded-2xl bg-white border border-stone-200 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
            
            {/* Column 1: Typical Bookkeeping Factory */}
            <div className="p-6 sm:p-8 space-y-6 bg-stone-50/70">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
                <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 font-serif-display text-lg">
                    Typical Bookkeeping Agency
                  </h4>
                  <p className="text-xs text-stone-500 font-medium">Impersonal, outsourced transaction churning</p>
                </div>
              </div>

              <div className="space-y-4">
                {COMPARISON_POINTS.map((point, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block">
                      {point.aspect}
                    </span>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{point.traditional}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Train the GAAP™ Model */}
            <div className="p-6 sm:p-8 space-y-6 bg-white">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-200">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900 font-serif-display text-lg flex items-center gap-2">
                    Train the GAAP™ with The Virtual HQ™
                  </h4>
                  <p className="text-xs text-amber-800 font-semibold">1-on-1 mentorship, continuous review & internal retention</p>
                </div>
              </div>

              <div className="space-y-4">
                {COMPARISON_POINTS.map((point, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                      {point.aspect}
                    </span>
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point.trainTheGaap}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
