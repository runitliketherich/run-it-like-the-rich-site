import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Users, Sparkles, FileCheck, Layers, Award, Building, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onOpenApply: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#faf8f5] text-stone-900 border-b border-stone-200">
      {/* Subtle warm architectural grid & glow */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-200/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-amber-100/50 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Narrative & Actions */}
          <div className="lg:col-span-7 space-y-7">
            {/* Category / Scope Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>RUN IT LIKE THE RICH™ • BUSINESS INSIDER SHARES</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold font-serif-display leading-[1.15] tracking-tight text-stone-900">
              Keep the person you trust.{' '}
              <span className="text-amber-800">
                Give them the accounting backup they deserve.
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-lg sm:text-xl text-stone-700 leading-relaxed font-normal max-w-2xl">
              The person doing your books may have started with customer orders, invoicing, and paperwork. 
              Then the business grew around them. <strong className="text-stone-900 font-semibold">Train the GAAP™</strong> (by The Virtual HQ™) puts 
              experienced accounting review, training, and systems support behind that trusted person—without replacing them unless you want full service.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenApply}
                id="hero-apply-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-800 hover:bg-amber-900 active:scale-[0.99] text-white font-bold text-base shadow-lg shadow-amber-900/20 transition-all cursor-pointer"
              >
                <span>Apply for a limited opening</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 hover:text-stone-900 font-semibold text-base shadow-sm transition-all"
              >
                <span>See how it works</span>
                <span className="text-amber-800 font-bold">→</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-5 border-t border-stone-200 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-sm text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>QBO can continue</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Virtual HQ™ foundation included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>QuickIN™ optional</span>
              </div>
            </div>
          </div>

          {/* Right Column: Systems Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-stone-200 p-6 sm:p-7 shadow-xl space-y-6">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-stone-900 font-serif-display">The Virtual HQ™ Blueprint</h3>
                    <p className="text-xs text-amber-800 font-semibold">In-House Loyalty + Expert Review</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-[11px] font-bold text-emerald-800">
                  Active Mentorship
                </span>
              </div>

              {/* Visual System Stack */}
              <div className="space-y-3">
                {/* Layer 1: Your Trusted Staff */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">Your Trusted In-House Staff</h4>
                      <p className="text-[11px] text-stone-500">Deep company knowledge, trust & daily context</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100/80 border border-amber-300 px-2 py-0.5 rounded">
                    Kept In Place
                  </span>
                </div>

                {/* Connection Indicator */}
                <div className="flex items-center justify-center py-0.5">
                  <div className="flex items-center gap-2 text-stone-400 text-xs">
                    <div className="h-3 w-[1px] bg-amber-400" />
                    <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">Backed up & Supervised by</span>
                    <div className="h-3 w-[1px] bg-amber-400" />
                  </div>
                </div>

                {/* Layer 2: Train the GAAP Advisory */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-300/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-800 text-amber-200 flex items-center justify-center">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">Train the GAAP™ Advisory</h4>
                      <p className="text-[11px] text-stone-600">Laura Poincot (25+ yrs) • Review, Teach & Improve</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
                    Active Oversight
                  </span>
                </div>

                {/* Connection Indicator */}
                <div className="flex items-center justify-center py-0.5">
                  <div className="flex items-center gap-2 text-stone-400 text-xs">
                    <div className="h-3 w-[1px] bg-amber-400" />
                    <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">Documented Inside</span>
                    <div className="h-3 w-[1px] bg-amber-400" />
                  </div>
                </div>

                {/* Layer 3: The Virtual HQ Hub */}
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-200 text-stone-800 flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-stone-900">The Virtual HQ™ (TheHQ.online)</h4>
                      <p className="text-[11px] text-stone-500">Document storage, SOP manual & company archives</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-stone-700 bg-stone-200 px-2 py-0.5 rounded">
                    Included
                  </span>
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Award className="w-4 h-4 text-amber-700" />
                  Audit-Ready Year-End Books
                </span>
                <span className="text-stone-700 font-bold">CPA Approved</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
