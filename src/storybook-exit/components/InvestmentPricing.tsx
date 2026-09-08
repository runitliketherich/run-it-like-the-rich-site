import React from 'react';
import { DollarSign, Check, PhoneCall, Sparkles, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

interface InvestmentPricingProps {
  onOpenConsult: () => void;
  onOpenDownpay: () => void;
}

export const InvestmentPricing: React.FC<InvestmentPricingProps> = ({ onOpenConsult, onOpenDownpay }) => {
  return (
    <section id="investment" className="py-20 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <DollarSign className="w-3.5 h-3.5 text-amber-700" />
            <span>TRANSPARENT VALUE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            Heavy work upfront.{' '}
            <span className="text-amber-800 italic">Affordable oversight for the years that follow.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            StoryBookExit™ is designed to remain useful for several years, so the ongoing quarterly investment is intentionally different from a full monthly controller or bookkeeping service.
          </p>
        </div>

        {/* Best Fit Banner */}
        <div className="max-w-3xl mx-auto mb-12 p-3.5 rounded-xl bg-white border border-stone-200 text-center flex items-center justify-center gap-2 text-xs text-slate-700 shadow-xs">
          <Clock className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong className="text-slate-950">Best fit:</strong> privately owned businesses roughly 3–7 years from a possible sale, transition, recapitalization or major financing event.
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Initial Foundation & Readiness Build */}
          <div className="rounded-2xl bg-white border-2 border-amber-400 p-7 sm:p-8 flex flex-col justify-between relative shadow-md ring-1 ring-amber-400/20">
            
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md font-mono-code border border-amber-500">
              Phase 1: Build
            </div>

            <div>
              <span className="text-xs font-mono-code uppercase text-amber-800 tracking-wider font-bold block mb-1">
                One-Time Sprint Setup
              </span>
              <h3 className="text-2xl font-serif-editorial font-bold text-slate-900 mb-2">
                Initial Foundation & Readiness Build
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-950">
                  $3,000–$5,000
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  (or $1,500 downpayment to lock slot)
                </span>
              </div>

              <p className="text-xs text-slate-700 mb-6 leading-relaxed">
                Comprehensive deep dive to clean the financial records, install the Virtual HQ™ operating foundation, establish the team backup matrix, and build the 3–7 year roadmap.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-stone-200">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Financial baseline & Chart of Accounts restructuring</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Team and owner-dependency review & bottleneck audit</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Workflow, contracts, and systems assessment</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Initial multi-year exit readiness roadmap</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Virtual HQ™ StoryBookExit foundation deployment</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row gap-3">
              <button
                id="pricing-downpay-btn"
                onClick={onOpenDownpay}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm border border-amber-500"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Downpay & Lock Slot ($1,500)</span>
              </button>
              <button
                id="pricing-consult-btn-1"
                onClick={onOpenConsult}
                className="py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-stone-100 hover:bg-stone-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-stone-300"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
                <span>Consult First</span>
              </button>
            </div>

          </div>

          {/* Card 2: Ongoing StoryBookExit™ Review */}
          <div className="rounded-2xl bg-white border border-stone-200 p-7 sm:p-8 flex flex-col justify-between relative shadow-xs">
            
            <div className="absolute -top-3.5 right-6 bg-stone-100 text-slate-700 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full border border-stone-300 font-mono-code">
              Phase 2: Runway Oversight
            </div>

            <div>
              <span className="text-xs font-mono-code uppercase text-slate-500 tracking-wider font-bold block mb-1">
                Multi-Year Guidance
              </span>
              <h3 className="text-2xl font-serif-editorial font-bold text-slate-900 mb-2">
                Ongoing StoryBookExit™ Review
              </h3>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl sm:text-4xl font-serif-editorial font-bold text-slate-950">
                  $1,200–$1,800
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  / quarter
                </span>
              </div>

              <p className="text-xs text-slate-700 mb-6 leading-relaxed">
                Strategic quarterly checkpoints to verify books, review efficiency metrics, track owner disengagement progress, and keep evidence pre-packaged for future buyers.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-stone-200">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Quarterly financial quality & margin defense audits</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Systems, SOPs & team backup progress validation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Owner-dependency reduction tracking & action items</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Tax-planning & add-back coordination with your CPA</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Prioritized next-quarter execution roadmap</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-200">
              <button
                id="pricing-consult-btn-2"
                onClick={onOpenConsult}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer border border-slate-900 shadow-xs"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Request a StoryBookExit™ Readiness Review</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
