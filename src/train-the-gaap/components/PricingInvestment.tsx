import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Calculator, Sparkles, HelpCircle, Layers } from 'lucide-react';

interface PricingInvestmentProps {
  onOpenApply: () => void;
}

export const PricingInvestment: React.FC<PricingInvestmentProps> = ({ onOpenApply }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#faf8f5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>INVESTMENT & ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display text-stone-900 leading-tight">
            Built to strengthen{' '}
            <span className="text-amber-800 italic">your existing team.</span>
          </h2>
          <p className="text-lg text-stone-600 font-normal leading-relaxed">
            Final pricing depends on number of entities, team members, accounting complexity, transaction volume, job costing, and the amount of cleanup required.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Tier 1: Initial Foundation */}
          <div className="lg:col-span-6 rounded-3xl bg-white border border-stone-200 shadow-sm p-8 sm:p-9 flex flex-col justify-between space-y-6 hover:border-amber-400 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 bg-stone-100 px-3 py-1 rounded-full">
                  Phase 1 Foundation
                </span>
                <span className="text-xs text-stone-500 font-medium">One-time Investment</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif-display text-stone-900">
                  INITIAL FOUNDATION
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold font-serif-display text-stone-900">
                    $3,000–$5,000
                  </span>
                </div>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Review, reconciliation, workflow assessment, procedures, training plan, and Virtual HQ™ back-office foundation.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">What’s Delivered in Phase 1:</h4>
                <div className="space-y-2.5 text-sm text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Prior year-end balance sheet reconciliation and tax tie-out</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Full Chart of Accounts and transaction classification audit</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Customized Virtual HQ™ operational documentation vault</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Tailored in-house staff onboarding and ACT™ training blueprint</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenApply}
              className="w-full py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request a limited opening</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tier 2: Ongoing Guidance & Oversight */}
          <div className="lg:col-span-6 rounded-3xl bg-white border-2 border-amber-600 ring-4 ring-amber-500/10 shadow-lg p-8 sm:p-9 flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                  Phase 2 Mentorship & Oversight
                </span>
                <span className="text-xs text-amber-900 font-bold font-mono-code">12-Month Standard</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif-display text-stone-900">
                  ONGOING GUIDANCE & OVERSIGHT
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-bold font-serif-display text-amber-800">
                    $1,100–$2,000
                  </span>
                  <span className="text-stone-500 text-base font-normal">/ month</span>
                </div>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Based on team size, complexity, frequency of review, and support needs.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">Ongoing Mentorship & Safety Net:</h4>
                <div className="space-y-2.5 text-sm text-stone-700">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Weekly to monthly 1-on-1 mentorship sessions with Laura</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Live oversight on unusual transactions, job costing & vendor contracts</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Monthly close reviews and owner strategic radar checks</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Full year-end tax prep package & CPA closing adjustment coordination</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenApply}
              className="w-full py-4 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request a limited opening</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Engagement Term Policy Note */}
        <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-stone-800 text-sm leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-950">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>Standard Engagement Terms & Cycle</span>
          </div>
          <p className="text-stone-700">
            <strong>12-month standard engagement.</strong> Shorter engagements may be accepted when they continue through 
            <strong> March 15</strong> and include the year-end reconciliation and CPA/tax-preparer handoff cycle.
          </p>
        </div>

      </div>
    </section>
  );
};
