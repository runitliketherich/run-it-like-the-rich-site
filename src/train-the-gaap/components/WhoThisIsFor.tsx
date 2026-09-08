import React from 'react';
import { UserCheck, HelpCircle, ArrowRight, ShieldAlert, CheckCircle, Sparkles, Building2, FileSpreadsheet, Users, Briefcase } from 'lucide-react';

interface WhoThisIsForProps {
  onOpenApply: () => void;
}

export const WhoThisIsFor: React.FC<WhoThisIsForProps> = ({ onOpenApply }) => {
  const commonRoles = [
    { title: 'Office Managers & Admins', desc: 'Started with scheduling, paperwork, and front-desk workflows; inherited the entire general ledger.' },
    { title: 'Operations & Project Leads', desc: 'Manages jobs, inventory, and purchase orders; tasked with job costing and subcontractor compliance.' },
    { title: 'Spouses & Family Members', desc: 'Stepped in to help protect cash flow and invoices in early days; now navigating complex compliance.' },
    { title: 'In-House Bookkeepers', desc: 'Reliable and dedicated daily data-entry team needing a seasoned CPA-level mentor to verify complex items.' },
  ];

  return (
    <section id="who-its-for" className="py-20 md:py-28 bg-[#faf8f5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>WHO THIS IS FOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold font-serif-display text-stone-900 leading-tight">
            They weren’t hired to run an accounting department.{' '}
            <span className="text-amber-800 italic">Somehow, that’s what happened.</span>
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-stone-700 leading-relaxed text-base sm:text-lg">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0 mt-1">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <p className="text-stone-800 font-medium">
                  They may have started by taking customer orders, creating invoices, reporting hours to payroll, 
                  organizing paperwork, or helping the owner.
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0 mt-1">
                  <Building2 className="w-4 h-4" />
                </div>
                <p className="text-stone-800 font-medium">
                  Then someone linked the bank account to QuickBooks and they taught themselves the rest.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 text-stone-900 space-y-3">
              <h3 className="font-bold text-lg font-serif-display text-amber-950 flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-800" />
                The Corporate Scope on One Trusted Shoulder
              </h3>
              <p className="text-stone-700 text-base">
                Now one trusted person may be handling work that a larger corporation spreads across{' '}
                <strong className="text-stone-900 font-semibold">accounting, payroll, administration, compliance, records, and operations</strong>.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-900 text-white border border-amber-800 shadow-md space-y-3">
              <div className="flex items-center gap-2 text-amber-200 text-sm font-bold uppercase tracking-wider">
                <CheckCircle className="w-4 h-4 text-amber-300" />
                <span>Our Clear Stance</span>
              </div>
              <p className="text-lg font-serif-display font-medium text-white leading-snug">
                We do not come in to replace them. We put experienced accounting support behind them.
              </p>
              <button
                onClick={onOpenApply}
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-200 hover:text-white pt-1 underline underline-offset-4 cursor-pointer"
              >
                Back up your team today <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Role Cards & Matrix Column */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Who We Mentored & Supported This Year
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commonRoles.map((role, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all space-y-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
                    0{i+1}
                  </div>
                  <h4 className="font-bold text-stone-900 font-serif-display text-base">
                    {role.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Loyalty vs Training Infobox */}
            <div className="p-6 rounded-2xl bg-white border border-amber-200/90 text-stone-800 shadow-sm">
              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Why Replacing Them Is Often a Mistake</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Hiring an outside bookkeeper without industry context often leads to mislabeled customer invoices, 
                    broken vendor rapport, and high turnover. Keeping your loyal team and elevating their accounting skills 
                    creates permanent institutional strength.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
