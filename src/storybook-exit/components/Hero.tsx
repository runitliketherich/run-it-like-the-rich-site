import React from 'react';
import { PhoneCall, Sparkles, ArrowRight, ShieldCheck, Check, Clock, TrendingUp, Users, Building2 } from 'lucide-react';

interface HeroProps {
  onOpenConsult: () => void;
  onOpenDownpay: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsult, onOpenDownpay }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-stone-100/60 via-stone-50 to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-amber-200/30 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-100/40 blur-[100px] rounded-full pointer-events-none -z-10" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle, #0f172a 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-widest shadow-xs mb-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          <span>BUSINESS VALUE • EXIT READINESS • OWNER INDEPENDENCE</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-[1.12] max-w-5xl mx-auto">
          Don’t wait until you’re ready to sell.{' '}
          <span className="text-amber-800 italic">
            Build a business worth buying.
          </span>
        </h1>

        {/* Subtitle / Value proposition */}
        <p className="mt-6 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto font-sans font-normal leading-relaxed">
          <strong className="text-slate-950 font-semibold">StoryBookExit™</strong> is a 3–7 year value-building system for privately owned businesses. We strengthen the financial story, operating systems, team, company knowledge and buyer-readiness long before due diligence begins.
        </p>

        {/* CTAs with downpay and consult options */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md sm:max-w-xl mx-auto">
          <button
            id="hero-request-review-btn"
            onClick={onOpenConsult}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 border border-amber-500 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-slate-950" />
            <span>Request a StoryBookExit™ review</span>
          </button>

          <button
            id="hero-downpay-reserve-btn"
            onClick={onOpenDownpay}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-900 bg-white hover:bg-stone-50 border border-stone-300 hover:border-amber-500 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-amber-600 group-hover:rotate-12 transition-transform" />
            <span>Downpay & Lock Build Slot ($1,500)</span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Secondary anchor helper */}
        <div className="mt-4">
          <a 
            href="#runway" 
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-800 transition-colors uppercase tracking-wider font-semibold"
          >
            <span>See how it works</span>
            <span>→</span>
          </a>
        </div>

        {/* 4 Core Inclusions Check Badges */}
        <div className="mt-12 pt-8 border-t border-stone-200 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-stone-200 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">QBO can continue</span>
                <span className="text-[10px] text-slate-600">Keep your accounting platform</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-stone-200 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Virtual HQ™ included</span>
                <span className="text-[10px] text-slate-600">Digital operating center</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-stone-200 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">QuickIN™ optional</span>
                <span className="text-[10px] text-slate-600">Multi-entity & reporting</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white border border-stone-200 shadow-xs">
              <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Existing team stays</span>
                <span className="text-[10px] text-slate-600">We strengthen, not replace</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
