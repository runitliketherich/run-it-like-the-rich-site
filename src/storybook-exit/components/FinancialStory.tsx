import React from 'react';
import { DollarSign, CheckCheck, FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface FinancialStoryProps {
  onOpenConsult: () => void;
}

export const FinancialStory: React.FC<FinancialStoryProps> = ({ onOpenConsult }) => {
  const financialChecklist = [
    {
      title: 'Industry-appropriate Chart of Accounts',
      desc: 'Restructured into clean operational buckets that match standard M&A valuation models.'
    },
    {
      title: 'Consistent transaction treatment',
      desc: 'Uniform categorization across all historical years so margins can be compared reliably.'
    },
    {
      title: 'Gross margin that actually means something',
      desc: 'Accurate cost-of-goods allocation without arbitrary adjustments or hidden overhead.'
    },
    {
      title: 'Reconciled loans, payroll, equity & balance sheet',
      desc: 'Zero lingering mystery accounts, negative liabilities, or un-reconciled credit cards.'
    },
    {
      title: 'Support for owner adjustments and unusual items',
      desc: 'Granular receipts and documented workpapers for all EBITDA add-backs.'
    },
    {
      title: 'Books that can be understood alongside tax returns',
      desc: 'Clean M-1 reconciliation schedules connecting book net income directly to filed Form 1120S/1065.'
    }
  ];

  return (
    <section id="financial" className="py-20 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <DollarSign className="w-3.5 h-3.5 text-amber-700" />
            <span>THE FINANCIAL STORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            The buyer pays for earnings{' '}
            <span className="text-amber-800 italic">they can believe.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            StoryBookExit™ works with the accounting platform that fits the company. QuickBooks Online can remain the primary books. QuickIN™ can be included when it adds reporting, multi-entity visibility or financial-management value.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 6 Core Financial Checklist Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {financialChecklist.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-amber-400 transition-colors shadow-xs"
              >
                <div className="flex items-start gap-2.5 mb-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Platform Compatibility & Bookkeeper Harmony Card */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl bg-white border border-stone-200 shadow-sm relative">
              
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif-editorial font-bold text-slate-900">
                    Platform Flexibility
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Works seamlessly with your current software
                  </p>
                </div>
              </div>

              {/* QBO + QuickIN pill tags */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 bg-emerald-100 text-emerald-900 border border-emerald-300 text-[10px] font-mono-code uppercase font-bold rounded shrink-0 mt-0.5">
                    QBO Stays
                  </span>
                  <p className="text-xs text-slate-700">
                    No forced migration. We optimize and standardize your existing QuickBooks Online file.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-3">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-900 border border-blue-300 text-[10px] font-mono-code uppercase font-bold rounded shrink-0 mt-0.5">
                    QuickIN™
                  </span>
                  <p className="text-xs text-slate-700">
                    Optional advanced layer for multi-entity rollups, advanced dashboards, and management reporting.
                  </p>
                </div>
              </div>

              {/* Quality of Earnings quote */}
              <div className="mt-6 pt-5 border-t border-stone-200 text-center">
                <p className="text-xs italic text-slate-700">
                  “When private equity auditors examine your financial workpapers, every add-back has a dated receipt and business justification.”
                </p>
                <button
                  onClick={onOpenConsult}
                  className="mt-4 w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
                >
                  <span>Request a Financial Story Review</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
