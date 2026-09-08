import React, { useState } from 'react';
import { COMPARISON_POINTS } from '../data/mockData';
import { XCircle, CheckCircle, ArrowRightLeft, Sparkles, Scale } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Scale className="w-3.5 h-3.5 text-amber-700" />
            <span>WHAT A BUYER SHOULD SEE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            A company—not a job the seller built for themselves.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            Buyers pay premiums for transferable operating machines, not high-stress founder bottlenecks.
          </p>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          
          {/* Column 1: Owner-Dependent (Red Flag) */}
          <div className="rounded-2xl bg-rose-50/60 border border-rose-200 p-6 sm:p-8 flex flex-col justify-between relative shadow-xs">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-rose-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-700">
                    <XCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase text-rose-800 tracking-wider font-bold">
                      The Vulnerable Reality
                    </span>
                    <h3 className="text-xl font-serif-editorial font-bold text-slate-900">
                      OWNER-DEPENDENT
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-code font-bold bg-rose-100 text-rose-900 px-2.5 py-1 rounded border border-rose-300">
                  Multiple: 2.0x–3.0x
                </span>
              </div>

              <div className="space-y-4">
                {COMPARISON_POINTS.map((pt, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white border border-rose-100 shadow-xs">
                    <span className="text-[10px] uppercase font-mono-code text-slate-500 font-bold block mb-1">
                      {pt.topic}
                    </span>
                    <p className="text-xs text-rose-900 leading-relaxed flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">✕</span>
                      <span>{pt.ownerDependent}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200 text-center">
              <span className="text-xs text-rose-800 font-medium italic">
                Result: Painful due diligence, buyer retrades, large earnouts, and failed closings.
              </span>
            </div>
          </div>

          {/* Column 2: Transferable Enterprise (StoryBookExit Target) */}
          <div className="rounded-2xl bg-white border-2 border-amber-400 p-6 sm:p-8 flex flex-col justify-between relative shadow-md ring-1 ring-amber-400/20">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code uppercase text-amber-800 tracking-wider font-bold">
                      The StoryBookExit™ Model
                    </span>
                    <h3 className="text-xl font-serif-editorial font-bold text-slate-900">
                      TRANSFERABLE
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono-code bg-amber-100 text-amber-900 px-2.5 py-1 rounded border border-amber-300 font-bold">
                  Multiple: 5.0x–7.5x+
                </span>
              </div>

              <div className="space-y-4">
                {COMPARISON_POINTS.map((pt, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <span className="text-[10px] uppercase font-mono-code text-amber-800 font-bold block mb-1">
                      {pt.topic}
                    </span>
                    <p className="text-xs text-emerald-900 font-medium leading-relaxed flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">✓</span>
                      <span>{pt.transferable}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200 text-center">
              <span className="text-xs text-amber-900 font-bold italic">
                Result: Competitive bidding, institutional buyer trust, cash-at-close, and clean exit.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
