import React, { useState } from 'react';
import { INCLUDED_DELIVERABLES } from '../data/content';
import { 
  BookCheck, 
  History, 
  TrendingUp, 
  FileText, 
  Briefcase, 
  Layers, 
  Laptop, 
  ShieldCheck, 
  CheckCircle2,
  CalendarDays,
  Sparkles
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BookCheck,
  History,
  TrendingUp,
  FileText,
  Briefcase,
  Layers,
  Laptop,
  ShieldCheck
};

export const WhatsIncluded: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'core' | 'support' | 'systems'>('all');

  const filteredDeliverables = activeTab === 'all' 
    ? INCLUDED_DELIVERABLES 
    : INCLUDED_DELIVERABLES.filter(d => d.category === activeTab);

  return (
    <section id="whats-included" className="py-20 md:py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>WHAT’S INCLUDED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display text-stone-900 leading-tight">
            A full accounting cycle—{' '}
            <span className="text-amber-800">not a one-time cleanup.</span>
          </h2>
          <p className="text-lg text-stone-600 font-normal leading-relaxed">
            Train the GAAP™ is normally a <strong className="text-amber-900 font-semibold">12-month relationship</strong> so 
            we can see the business through monthly operations, year-end, tax-preparer handoff, and the clean start of the next year.
          </p>
        </div>

        {/* 12-Month Support Cycle Visual Roadmap Banner */}
        <div className="mb-14 p-6 sm:p-7 rounded-3xl bg-[#faf8f5] border border-amber-200 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 mb-4">
            <CalendarDays className="w-4 h-4 text-amber-700" />
            <span>The 12-Month Annual Accounting Arc</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-1">
              <span className="font-bold text-amber-800 block text-[11px] uppercase">Q1: Foundations & Cleanup</span>
              <p className="text-stone-600">Reconcile opening balance positions, clean chart of accounts, train the ACT™ method.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-1">
              <span className="font-bold text-amber-800 block text-[11px] uppercase">Q2: Consistency & SOPs</span>
              <p className="text-stone-600">Lock in recurring bank rules, build custom Virtual HQ™ manuals, streamline invoices.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-1">
              <span className="font-bold text-amber-800 block text-[11px] uppercase">Q3: Owner Radar & Margins</span>
              <p className="text-stone-600">Implement Job costing reviews, track vendor creep, establish monthly variances.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-stone-200 space-y-1">
              <span className="font-bold text-amber-800 block text-[11px] uppercase">Q4: Year-End & CPA Package</span>
              <p className="text-stone-600">Reconcile 1099s, close journals, compile tax-ready schedules for seamless CPA filing.</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {[
            { id: 'all', label: 'All 8 Deliverables' },
            { id: 'core', label: 'Core Accounting Review' },
            { id: 'support', label: 'Mentorship & Safety Net' },
            { id: 'systems', label: 'Virtual HQ™ & Systems' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Deliverables 8-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDeliverables.map((item) => {
            const Icon = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-stone-50/80 border border-stone-200 hover:border-amber-400 hover:bg-white hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 font-serif-display text-base">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200 space-y-1.5">
                  {item.bullets.slice(0, 2).map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
