import React from 'react';
import { AlertCircle, Calendar, CheckCheck, Clock, TrendingUp, XCircle, CheckCircle, ArrowRight } from 'lucide-react';

interface WhyStartEarlyProps {
  onOpenConsult: () => void;
}

export const WhyStartEarly: React.FC<WhyStartEarlyProps> = ({ onOpenConsult }) => {
  return (
    <section className="py-20 bg-stone-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Argument */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>WHY START YEARS EARLY?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
              You cannot manufacture five years of clean history{' '}
              <span className="text-amber-800 italic">six months before a sale.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
              <p>
                Buyers do not only evaluate last year’s profit. They evaluate whether the earnings are repeatable, whether the team is solid, whether the systems are dependable and whether the company can keep operating after the seller leaves.
              </p>
              <p>
                Those qualities are built over time. Clean books, consistent margins, documented procedures, customer history, team depth and owner independence become more believable when a buyer can see years of evidence.
              </p>
              <p className="font-semibold text-slate-900 bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                StoryBookExit™ makes exit readiness part of running the business—not a frantic project after the buyer arrives.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenConsult}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 border border-amber-500 rounded-lg transition-all shadow-sm cursor-pointer"
              >
                <span>Assess Your Exit Runway Stage</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: High-contrast comparison timeline graphic */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-sm space-y-6">
              
              {/* Panic Exit Reality */}
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>The "6-Month Panic Sale" Trap</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Scrambling to explain 3 years of undocumented personal add-backs</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Owner works 60 hrs/week; buyer fears complete business collapse</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-rose-600 font-bold">•</span>
                    <span>Quality of Earnings (QoE) auditor cuts EBITDA by 25–40%</span>
                  </li>
                </ul>
              </div>

              {/* StoryBookExit 3-7 Year Compound Advantage */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>The StoryBookExit™ 3–7 Year Advantage</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>3 to 7 years of fully reconciled, audited-quality financial history</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Documented Virtual HQ™ SOPs operated autonomously by trained staff</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Defended higher multiple with zero due diligence price reductions</span>
                  </li>
                </ul>
              </div>

              {/* Multiplier Impact callout */}
              <div className="pt-2 text-center border-t border-stone-200">
                <div className="text-[11px] uppercase tracking-wider font-mono-code text-slate-600 font-semibold">
                  Average Valuation Multiple Spread
                </div>
                <div className="mt-1 flex items-center justify-center gap-4 text-sm">
                  <span className="text-slate-500 line-through">2.8x EBITDA (Friction)</span>
                  <span className="text-amber-800 font-bold text-lg">5.5x–7.0x+ (StoryBook)</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
