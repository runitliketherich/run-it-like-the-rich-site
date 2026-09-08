import React from 'react';
import { CheckCircle2, ShieldCheck, ArrowRight, HelpCircle, Sparkles, Layers, Sliders } from 'lucide-react';
import { BRAND_CONFIG } from '../config';

interface PricingSectionProps {
  onScrollToForm: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onScrollToForm }) => {
  const CORE_LAUNCH_INCLUSIONS = [
    'Operational Systems Mapping & Architecture',
    'Executive Owner / Manager Command Center',
    'Role-based access & team view permissions',
    'Company Quick Links & Software Launchpad',
    'Organized Company File Center & Custody',
    'Business-specific Live Lists, Logs & Trackers',
    'Clean Intake Forms (leads, service, requests)',
    'Core SOPs, checklists & template library',
    'Branding, Portfolio & Content Organizer',
  ];

  return (
    <section id="investment" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      {/* Anchor for backward compatibility with any #pricing links */}
      <div id="pricing" className="-mt-20 pt-20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-400" />
            <span>Transparent Investment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            Virtual HQ™ Launch — ${BRAND_CONFIG.launchPrice.toLocaleString()}
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed">
            Your company-owned command center, built around the systems, files, responsibilities, and information your business already uses.
          </p>
        </div>

        {/* Main Investment Card */}
        <div className="rounded-3xl bg-[#F8FAFC] border-2 border-slate-900 shadow-xl overflow-hidden mb-8">
          
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col: What's Available & Scope */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  Full Implementation
                </span>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-slate-950">
                    ${BRAND_CONFIG.launchPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold font-mono text-slate-500 uppercase">
                    One-Time Project Investment
                  </span>
                </div>
              </div>

              {/* Clarification Callout */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div className="font-serif font-bold text-slate-950 text-sm flex items-center space-x-1.5">
                  <Sliders className="w-4 h-4 text-teal-700" />
                  <span>Everything shown on this page is available within the Virtual HQ Launch.</span>
                </div>
                <p className="text-slate-600">
                  Your business may not need every room on day one. We configure the rooms, views, forms, lists, and links that solve the problems you need under control now.
                </p>
              </div>

              {/* Inclusions List */}
              <div className="space-y-3 pt-1">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Core Implementation Areas:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800">
                  {CORE_LAUNCH_INCLUSIONS.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Reservation Callout & Action */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-slate-300 shadow-sm space-y-5 text-center sm:text-left">
              
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Reserve Your Opening
                </div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  RESERVE WITH ${BRAND_CONFIG.depositPrice}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Reserve a build opening with ${BRAND_CONFIG.depositPrice}. Applied to your project investment. After the Virtual HQ Map, we confirm your company’s setup and launch plan.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 leading-relaxed text-left">
                <strong className="text-slate-900 font-semibold block mb-0.5">Scope Transparency:</strong>
                Custom third-party integrations, heavy data cleanup, multi-location builds, and advanced automation can still be quoted separately after mapping. Otherwise, “systems help” becomes a very expensive mystery box.
              </div>

              <button
                onClick={onScrollToForm}
                className="w-full py-4 px-4 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer text-center min-h-[44px]"
              >
                MAP MY VIRTUAL HQ
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>$250 deposit fully applied to your $4,750 investment</span>
              </div>

            </div>

          </div>

        </div>

        {/* Second Area: Custom Scopes / Multi-Location */}
        <div className="p-6 rounded-2xl bg-[#FBFBF7] border border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif font-bold text-base sm:text-lg text-slate-950">
              EXPANDED OR MULTI-LOCATION BUILDS?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Multi-entity operations, heavy migration, and custom API connections are quoted transparently based on your actual operational requirements.
            </p>
          </div>

          <button
            onClick={onScrollToForm}
            className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-wider border border-slate-300 shadow-2xs hover:border-slate-400 transition-all shrink-0 cursor-pointer min-h-[44px]"
          >
            <span>MAP MY OPERATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
