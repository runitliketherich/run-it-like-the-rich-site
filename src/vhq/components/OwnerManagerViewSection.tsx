import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  DollarSign,
  TrendingUp,
  FolderLock,
  ListChecks,
  ExternalLink,
  ArrowRight,
  Eye,
  FileCheck,
} from 'lucide-react';

interface OwnerManagerViewSectionProps {
  onScrollToForm: () => void;
}

export const OwnerManagerViewSection: React.FC<OwnerManagerViewSectionProps> = ({ onScrollToForm }) => {
  const OWNER_PILLARS = [
    { title: "Today's priorities", desc: 'Clear visibility on urgent approvals and items requiring owner intervention.' },
    { title: 'Delegated tasks', desc: 'Monitor task handoffs, responsible parties, and deliverable due dates.' },
    { title: 'Deadlines & renewals', desc: 'Never miss business licenses, corporate registrations, or insurance renewals.' },
    { title: 'Project progress', desc: 'High-level milestone percentages across all active business jobs and contracts.' },
    { title: 'Team status', desc: 'Know who is active and what is waiting on your review without asking repeatedly.' },
    { title: 'Compliance & Legal', desc: 'Central check-offs for permits, state filings, audits, and insurance.' },
    { title: 'Financial information', desc: 'Current cash pulse, outstanding client invoices, and pending payables.' },
    { title: 'KPIs that matter', desc: 'Target figures customized specifically to your operational model.' },
    { title: 'Organized files', desc: 'Instant 5-second access to company contracts, policies, and vital records.' },
    { title: 'Forms & Intake', desc: 'Clean, formatted entry points for leads, customer requests, and employee logs.' },
    { title: 'Company links', desc: 'One-click launchpad for banking, payroll, CRM, and portal logins.' },
    { title: 'Recurring responsibilities', desc: 'Weekly, monthly, and quarterly operational checklists that run automatically.' },
  ];

  return (
    <section id="owner-view" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5 text-teal-400" />
            <span>Executive Command Center</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            BUILT FIRST FOR THE OWNER & MANAGER
          </h2>

          <p className="text-lg sm:text-xl text-teal-900 font-serif font-semibold">
            Open one screen and see what needs your attention.
          </p>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            The goal is not more reporting. The goal is faster visibility and better control.
          </p>
        </div>

        {/* Two-Column Showcase: Interactive Pillars + Realistic Cockpit Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 12 Brought-Together Pillars Grid */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-300/80 shadow-2xs">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                Your Virtual HQ Brings Together:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {OWNER_PILLARS.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-teal-600 transition-colors"
                  >
                    <div className="flex items-center space-x-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span className="text-xs font-bold text-slate-900">{pillar.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-snug pl-5">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-between">
              <div className="text-xs text-teal-950 font-medium">
                Ready to see your business from one unified screen?
              </div>
              <button
                onClick={onScrollToForm}
                className="inline-flex items-center space-x-1 text-xs font-bold text-teal-800 hover:text-teal-900 hover:underline cursor-pointer"
              >
                <span>Build My HQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Owner Mockup */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white border border-slate-300 shadow-lg overflow-hidden">
              
              {/* Browser Header */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span>
                  </div>
                  <span className="text-xs font-serif font-bold pl-2">Owner Cockpit</span>
                </div>
                <span className="text-[11px] font-mono text-teal-300 bg-slate-800 px-2 py-0.5 rounded">
                  Confidential • Owner Access Only
                </span>
              </div>

              {/* Mockup Body */}
              <div className="p-5 space-y-4 bg-slate-50/50">
                
                {/* Urgent Alert Banner */}
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0" />
                    <span className="text-xs font-bold text-amber-900">
                      2 Approvals Pending • City Permit Renewal Due (12 Days)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-800 font-bold underline cursor-pointer">
                    View Alert
                  </span>
                </div>

                {/* KPI Pulse Row */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[10px] text-slate-500 font-mono uppercase">Cash In Bank</div>
                    <div className="text-base font-bold font-serif text-slate-900">$184,200</div>
                    <div className="text-[9px] text-emerald-600 font-bold">+5.2% vs target</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[10px] text-slate-500 font-mono uppercase">Open Invoices</div>
                    <div className="text-base font-bold font-serif text-slate-900">$42,850</div>
                    <div className="text-[9px] text-slate-500">4 clients</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="text-[10px] text-slate-500 font-mono uppercase">Active Jobs</div>
                    <div className="text-base font-bold font-serif text-teal-700">8 In Flight</div>
                    <div className="text-[9px] text-teal-600 font-bold">100% on schedule</div>
                  </div>
                </div>

                {/* Delegation & Review Feed */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900 font-serif">
                      Delegated Items & Shift Submissions
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">Real-time sync</span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between p-1.5 rounded bg-slate-50">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="font-medium text-slate-800">Job #104 Site Inspection Photos</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">Logged by Chris</span>
                    </div>

                    <div className="flex items-center justify-between p-1.5 rounded bg-slate-50">
                      <div className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span className="font-medium text-slate-800">Commercial Quote #882 ($18.5k)</span>
                      </div>
                      <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 rounded font-mono">
                        Awaiting Owner Sign-Off
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quick File Vault & Portal Links */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FolderLock className="w-3.5 h-3.5 text-teal-700" />
                      <span className="font-medium text-slate-800">Company Master Files</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileCheck className="w-3.5 h-3.5 text-teal-700" />
                      <span className="font-medium text-slate-800">HR Policies & Forms</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
