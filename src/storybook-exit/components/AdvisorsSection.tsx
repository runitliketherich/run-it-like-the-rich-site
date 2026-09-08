import React from 'react';
import { Briefcase, Scale, Calculator, Landmark, ShieldCheck, CheckCircle } from 'lucide-react';

export const AdvisorsSection: React.FC = () => {
  const advisors = [
    {
      title: 'Your CPA & Tax Strategist',
      desc: 'We reconcile books with returns and prepare documented add-back schedules so tax strategy never confuses due diligence.',
      icon: Calculator
    },
    {
      title: 'M&A Legal Counsel',
      desc: 'We organize client contracts, employee IP agreements, vendor leases, and corporate minutes inside Virtual HQ™ beforehand.',
      icon: Scale
    },
    {
      title: 'Brokers & Investment Bankers',
      desc: 'We hand your intermediary a pre-packaged CIM and data room, enabling them to market at premium multiples with high conviction.',
      icon: Briefcase
    },
    {
      title: 'QoE Providers & Underwriters',
      desc: 'We provide multi-year audited-grade support schedules so third-party diligence validates earnings without haircutting your valuation.',
      icon: Landmark
    }
  ];

  return (
    <section className="py-20 bg-stone-100/70 border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
            <span>ADVISOR COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            We prepare the company your deal team will eventually represent.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            StoryBookExit™ does not replace M&A counsel, your CPA, a business broker, investment banker, valuation professional or Quality of Earnings provider. We help build and organize the financial and operational evidence those professionals will eventually need.
          </p>
        </div>

        {/* 4 Professional Alignment Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((adv) => {
            const Icon = adv.icon;
            return (
              <div 
                key={adv.title}
                className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs hover:border-amber-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-serif-editorial font-bold text-slate-900 mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
