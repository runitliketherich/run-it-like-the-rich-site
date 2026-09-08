import React, { useState } from 'react';
import {
  AlertTriangle,
  Calendar,
  Users,
  FolderKanban,
  DollarSign,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  FileText,
  Activity,
  Layers,
  Filter,
} from 'lucide-react';

export const HeroDashboardMockup: React.FC = () => {
  const [mobileFilter, setMobileFilter] = useState<'all' | 'today' | 'upcoming' | 'team' | 'projects' | 'financial' | 'files'>('all');

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-slate-300/80 shadow-xl overflow-hidden font-sans text-slate-800 transition-all">
      
      {/* Operating Center Window Header */}
      <div className="bg-slate-900 px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
          </div>
          <div className="h-4 w-px bg-slate-800 mx-1"></div>
          <div className="flex items-center space-x-1.5 text-xs text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-serif font-bold text-white tracking-tight">Virtual HQ™</span>
            <span className="text-slate-500 font-mono text-[10px] sm:text-[11px] truncate max-w-[110px] sm:max-w-none">
              / Executive Operating View
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] text-slate-400 font-mono shrink-0">
          <span className="px-2 py-0.5 rounded bg-slate-800 text-teal-300 border border-teal-500/20">
            Owner Mode
          </span>
          <span className="hidden sm:inline">09:30 AM</span>
        </div>
      </div>

      {/* Quick Launchpad Links Bar */}
      <div className="bg-slate-50 px-3 sm:px-4 py-2 border-b border-slate-200 flex items-center justify-between overflow-x-auto text-xs gap-2 sm:gap-3 no-scrollbar">
        <div className="flex items-center space-x-1.5 shrink-0">
          <span className="font-bold text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-mono">
            QUICK LINKS:
          </span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 shrink-0 py-0.5">
          {[
            { name: 'Accounting', icon: DollarSign, url: 'QuickBooks / Ledger' },
            { name: 'Payroll', icon: Users, url: 'Gusto / ADP' },
            { name: 'Bank', icon: ShieldCheck, url: 'Operating Account' },
            { name: 'Drive', icon: FileText, url: 'Company Vault' },
            { name: 'CRM', icon: Activity, url: 'Customer Pipeline' },
          ].map((link, idx) => (
            <div
              key={idx}
              className="inline-flex items-center space-x-1 px-2 sm:px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[10px] sm:text-[11px] font-medium shadow-2xs hover:bg-slate-100 hover:border-slate-300 cursor-pointer transition-colors whitespace-nowrap"
              title={`Direct link to ${link.url}`}
            >
              <link.icon className="w-3 h-3 text-teal-700 shrink-0" />
              <span>{link.name}</span>
              <ExternalLink className="w-2.5 h-2.5 text-slate-400 ml-0.5 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Filter Tabs (visible on small screens) */}
      <div className="lg:hidden bg-slate-100/90 px-3 py-1.5 border-b border-slate-200 flex items-center space-x-1.5 overflow-x-auto text-[11px] font-mono no-scrollbar">
        <span className="text-slate-400 font-bold uppercase text-[9px] shrink-0 mr-1 flex items-center">
          <Filter className="w-2.5 h-2.5 mr-0.5" /> View:
        </span>
        {[
          { id: 'all', label: 'All Feeds' },
          { id: 'today', label: 'Today (3)' },
          { id: 'upcoming', label: 'Upcoming' },
          { id: 'team', label: 'Team (4)' },
          { id: 'financial', label: 'Financial' },
          { id: 'files', label: 'Files' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setMobileFilter(tab.id as any)}
            className={`px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
              mobileFilter === tab.id
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Grid: 6 Core Operational Cards */}
      <div className="p-3 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5 bg-[#FAFAF8]">
        
        {/* CARD 1: TODAY - 3 items need attention */}
        {(mobileFilter === 'all' || mobileFilter === 'today') && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-amber-200/90 shadow-2xs space-y-2.5 sm:space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 shrink-0">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-serif text-slate-900 uppercase tracking-wide">
                    TODAY
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-amber-700 font-semibold">
                    3 items need attention
                  </div>
                </div>
              </div>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            </div>

            <div className="space-y-1.5 sm:space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-amber-50/60 border border-amber-200/80 flex items-center justify-between gap-2">
                <span className="font-medium text-slate-800 text-[11px] sm:text-xs truncate">Review Apex Electrical proposal</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-amber-800 font-bold bg-amber-100 px-1.5 py-0.5 rounded shrink-0">High</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2">
                <span className="text-slate-700 text-[11px] sm:text-xs truncate">Approve payroll batch (12 staff)</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-slate-500 shrink-0">By 2 PM</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2">
                <span className="text-slate-700 text-[11px] sm:text-xs truncate">Customer callback: Miller HVAC</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-teal-700 font-semibold shrink-0">Logged</span>
              </div>
            </div>
          </div>
        )}

        {/* CARD 2: UPCOMING - Renewals & Compliance */}
        {(mobileFilter === 'all' || mobileFilter === 'upcoming') && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-200 shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-serif text-slate-900 uppercase tracking-wide">
                    UPCOMING
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    Compliance & Deadlines
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-400">Next 30d</span>
            </div>

            <div className="space-y-1.5 sm:space-y-2 text-xs">
              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-medium text-slate-800 text-[11px] sm:text-xs truncate">Business license renewal</div>
                  <div className="text-[10px] text-slate-500 truncate">City Commercial Registry</div>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold font-mono text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded shrink-0">
                  12 days
                </span>
              </div>

              <div className="p-2 sm:p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <div className="font-medium text-slate-800 text-[11px] sm:text-xs truncate">Insurance renewal</div>
                  <div className="text-[10px] text-slate-500 truncate">General Liability & Auto</div>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold font-mono text-teal-800 bg-teal-50 border border-teal-200 px-1.5 py-0.5 rounded shrink-0">
                  21 days
                </span>
              </div>
            </div>
          </div>
        )}

        {/* CARD 3: TEAM STATUS */}
        {(mobileFilter === 'all' || mobileFilter === 'team') && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200 shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-serif text-slate-900 uppercase tracking-wide">
                    TEAM
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-blue-700 font-semibold">
                    4 active • 2 need review
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-slate-100 gap-2">
                <div className="flex items-center space-x-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span className="font-medium text-slate-800 text-[11px] sm:text-xs truncate">Marcus (Operations)</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono shrink-0">Job #108</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-slate-100 gap-2">
                <div className="flex items-center space-x-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span className="font-medium text-slate-800 text-[11px] sm:text-xs truncate">Sarah (Sales Lead)</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono shrink-0">3 Quotes</span>
              </div>
              <div className="flex items-center justify-between py-1 gap-2">
                <div className="flex items-center space-x-1.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                  <span className="font-medium text-slate-800 text-[11px] sm:text-xs truncate">Dave (Technician)</span>
                </div>
                <span className="text-[9px] sm:text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded font-mono shrink-0">
                  Log Sub.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* CARD 4: PROJECTS */}
        {(mobileFilter === 'all' || mobileFilter === 'projects') && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center border border-indigo-200 shrink-0">
                  <FolderKanban className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-serif text-slate-900 uppercase tracking-wide">
                    PROJECTS
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    3 active jobs
                  </div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">All On Track</span>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <div className="flex justify-between text-slate-700 mb-1 text-[11px] sm:text-xs">
                  <span className="font-medium truncate pr-2">Midtown Warehouse Retrofit</span>
                  <span className="font-mono text-slate-500 shrink-0">75%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-slate-700 mb-1 text-[11px] sm:text-xs">
                  <span className="font-medium truncate pr-2">Oakridge Commercial HVAC</span>
                  <span className="font-mono text-slate-500 shrink-0">40%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CARD 5: FINANCIAL - Current Month Snapshot */}
        {(mobileFilter === 'all' || mobileFilter === 'financial') && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200 shrink-0">
                  <TrendingUp className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-serif text-slate-900 uppercase tracking-wide">
                    FINANCIAL
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    Current month snapshot
                  </div>
                </div>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">+14% MoM</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono uppercase">Invoices Out</div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 font-serif">$42,850</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400">4 pending</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                <div className="text-[9px] sm:text-[10px] text-slate-500 font-mono uppercase">Collected MTD</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-700 font-serif">$68,400</div>
                <div className="text-[9px] sm:text-[10px] text-slate-400">Target: $80k</div>
              </div>
            </div>
          </div>
        )}

        {/* CARD 6: FILE & RECURRING LOGS */}
        {(mobileFilter === 'all' || mobileFilter === 'files') && (
          <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-xs font-bold font-serif text-slate-900 uppercase tracking-wide">
                    FILE ROOM & SOPS
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    Organized Company Vault
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="p-1.5 rounded-lg bg-slate-50 flex items-center justify-between text-slate-700 gap-2">
                <span className="truncate font-medium text-[11px] sm:text-xs">01_Master_Insurance_Policy.pdf</span>
                <span className="text-[9px] sm:text-[10px] text-teal-700 font-mono shrink-0">5s access</span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 flex items-center justify-between text-slate-700 gap-2">
                <span className="truncate font-medium text-[11px] sm:text-xs">02_Subcontractor_Agreements</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono shrink-0">Updated</span>
              </div>
              <div className="p-1.5 rounded-lg bg-slate-50 flex items-center justify-between text-slate-700 gap-2">
                <span className="truncate font-medium text-[11px] sm:text-xs">03_Vehicle_Inspection_SOP</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono shrink-0">Active</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Footer Status Bar */}
      <div className="bg-slate-900 px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] text-slate-400 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">6 operational feeds synchronized • 0 scattered tabs</span>
        </div>
        <span className="text-teal-300 font-mono text-[10px] hidden sm:inline shrink-0">
          Virtual HQ™ Operating Center
        </span>
      </div>

    </div>
  );
};
