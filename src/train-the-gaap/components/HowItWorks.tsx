import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight, ShieldAlert, Sparkles, FileText, BarChart3, Lock } from 'lucide-react';

interface HowItWorksProps {
  onOpenApply: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenApply }) => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#faf8f5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display text-stone-900 leading-tight">
            Fix it. Explain it. Document it.{' '}
            <span className="text-amber-800 block sm:inline">Stop fixing the same thing again.</span>
          </h2>
          <p className="text-lg text-stone-600 font-normal leading-relaxed">
            A continuous 6-stage transformation engineered to transition your trusted in-house bookkeeper from anxiety to complete operational mastery.
          </p>
        </div>

        {/* 6 Step Interactive / High-Craft Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {HOW_IT_WORKS_STEPS.map((step) => (
            <div
              key={step.number}
              className="relative p-7 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif-display font-bold text-amber-800 font-mono-code">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-semibold text-stone-600 uppercase tracking-wider bg-stone-100 px-2.5 py-1 rounded-md">
                    Phase {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-stone-900 font-serif-display group-hover:text-amber-800 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 tracking-wide mt-0.5">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Takeaway footer */}
              <div className="pt-3 border-t border-stone-100 flex items-start gap-2 text-xs text-stone-800 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{step.takeaway}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Action */}
        <div className="p-8 rounded-3xl bg-white border border-amber-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold font-serif-display text-stone-900">
              Ready to give your team the accounting backup they deserve?
            </h4>
            <p className="text-sm text-stone-600">
              Engagements start with a comprehensive ledger diagnostic and year-end reconciliation.
            </p>
          </div>
          <button
            onClick={onOpenApply}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-sm transition-all cursor-pointer flex items-center gap-2"
          >
            <span>Apply for an opening</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
