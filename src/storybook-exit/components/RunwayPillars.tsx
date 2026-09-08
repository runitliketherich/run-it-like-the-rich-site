import React from 'react';
import { DollarSign, Cog, Users2, FileCheck2, Quote, CheckCircle2 } from 'lucide-react';

export const RunwayPillars: React.FC = () => {
  const pillars = [
    {
      title: 'Financial Story',
      icon: DollarSign,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
      tag: 'Repeatable Cash Flow',
      items: ['Books & reconciled balance sheets', 'Defensible gross margins', 'Tax-to-books historical continuity', 'Normalized owner add-backs', 'Working capital predictability']
    },
    {
      title: 'Operating Story',
      icon: Cog,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20',
      tag: 'Systematic Execution',
      items: ['Documented core processes & SOPs', 'Historical projects & client records', 'Centralized vendor contracts & renewals', 'Digital systems & workflows', 'Company history & IP preservation']
    },
    {
      title: 'Team Story',
      icon: Users2,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      tag: 'Autonomous Organization',
      items: ['Clear role definitions & KPIs', 'Secondary backup coverage matrix', 'Step-by-step procedures in daily use', 'Owner disengagement protocols', 'Institutional knowledge capture']
    },
    {
      title: 'Buyer Evidence',
      icon: FileCheck2,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
      tag: 'Pre-Packaged Diligence',
      items: ['Pre-indexed digital data room', 'Evidence prepared years ahead', 'Immediate responses to buyer Q&A', 'Clean lender underwriting package', 'Zero post-LOI renegotiations']
    }
  ];

  return (
    <section id="runway" className="py-20 bg-stone-100/70 border-y border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span>BUILT FOR A 3–7 YEAR RUNWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            The offer is not the finish line.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            A buyer still has to believe the earnings, understand the team, verify the systems, review the contracts and see how the company operates without the owner holding everything together.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:border-amber-400 transition-all hover:shadow-md shadow-xs group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border bg-amber-50 border-amber-200 text-amber-800">
                      <Icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <span className="text-[11px] font-mono-code font-bold text-slate-600 bg-stone-100 px-2.5 py-1 rounded-md border border-stone-200">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                    {pillar.tag}
                  </span>
                  <h3 className="text-xl font-serif-editorial font-bold text-slate-900 mb-4">
                    {pillar.title}
                  </h3>

                  <ul className="space-y-2.5 pt-2 border-t border-stone-100">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Callout Banner */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-amber-50/80 via-white to-amber-50/80 border border-amber-300 text-center overflow-hidden shadow-sm">
            <Quote className="w-16 h-16 text-amber-600/15 absolute -top-2 left-6 pointer-events-none" />
            <p className="text-xl sm:text-2xl md:text-3xl font-serif-editorial font-semibold italic text-slate-900 tracking-tight leading-snug">
              “Due diligence should confirm the story you built—not rewrite it.”
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-amber-800 font-mono-code font-bold">
              <span>StoryBookExit™ Core Principle</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
