import React from 'react';
import { Search, GraduationCap, Wrench, Shield, Quote, Clock, Award } from 'lucide-react';

export const FounderCallout: React.FC = () => {
  const pillars = [
    {
      title: 'Review',
      subtitle: 'Books & workflow',
      icon: Search,
      desc: 'Deep ledger hygiene, reconcile prior-year positions, and diagnose recurring bottlenecks in the daily workflow.'
    },
    {
      title: 'Teach',
      subtitle: 'Accounting foundations',
      icon: GraduationCap,
      desc: 'Master the ACT™ method, proper transaction classification, and why specific entries matter to the balance sheet.'
    },
    {
      title: 'Improve',
      subtitle: 'Processes & reporting',
      icon: Wrench,
      desc: 'Cut out redundant steps, link operations to financial reports, and build custom month-end SOPs in Virtual HQ™.'
    },
    {
      title: 'Back Up',
      subtitle: 'Your trusted team',
      icon: Shield,
      desc: 'A dedicated safety net for unusual transactions, vendor contract questions, and seamless CPA year-end handoff.'
    }
  ];

  return (
    <section className="relative py-16 bg-[#f7f5ef] border-b border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>LIMITED OPENINGS • PERSONAL FOUNDER OVERSIGHT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-stone-900">
            Personally led by <span className="text-amber-800">Laura Poincot</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            <span className="text-amber-900 font-semibold">25+ years</span> working directly with small and midsize business owners, 
            cleaning up books, fixing systems, and supporting the people who actually keep the office moving.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="relative group p-6 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 group-hover:bg-amber-100 group-hover:border-amber-300 flex items-center justify-center text-amber-800 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-stone-900 font-serif-display group-hover:text-amber-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800 tracking-wide uppercase">
                    {pillar.subtitle}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editorial Pull Quote */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl bg-white border border-amber-200/90 p-8 sm:p-10 text-center shadow-md">
            <Quote className="w-10 h-10 text-amber-300 mx-auto mb-4" />
            <blockquote className="text-xl sm:text-2xl font-serif-display font-medium text-stone-900 leading-snug italic max-w-3xl mx-auto">
              “You can teach accounting and systems. You cannot manufacture years of loyalty, trust, and knowledge of the business.”
            </blockquote>
            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 bg-amber-400" />
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-amber-900 uppercase">
                Laura Poincot <span className="text-stone-500 font-normal normal-case">• Founder, The Virtual HQ™ (TheHQ.online)</span>
              </p>
              <div className="h-[1px] w-8 bg-amber-400" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
