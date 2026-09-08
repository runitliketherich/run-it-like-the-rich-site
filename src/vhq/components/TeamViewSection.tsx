import React from 'react';
import {
  Users,
  Shield,
  Lock,
  Unlock,
  CheckCircle2,
  FileText,
  Clock,
  ListTodo,
  FolderOpen,
  HelpCircle,
  Smartphone,
  ArrowRight,
} from 'lucide-react';

interface TeamViewSectionProps {
  onScrollToForm: () => void;
}

export const TeamViewSection: React.FC<TeamViewSectionProps> = ({ onScrollToForm }) => {
  const TEAM_ITEMS = [
    { title: 'My Tasks', desc: 'Clear list of individual action items, due dates, and priorities.' },
    { title: "Today's Work", desc: 'Operational checklists and daily procedures for the active shift.' },
    { title: 'Projects', desc: 'Milestone tracking and job files relevant only to their assigned projects.' },
    { title: 'Forms', desc: 'One-click intake for service logs, inspections, customer intake, and expenses.' },
    { title: 'Company Files', desc: 'Departmental folder access with zero risk of seeing confidential files.' },
    { title: 'SOPs & How-To', desc: 'Standard operating procedures, checklists, and equipment manuals.' },
    { title: 'Requests', desc: 'Clean submission flow for time-off, supply purchases, or manager escalation.' },
    { title: 'Schedules', desc: 'Clear roster and job calendar visibility without messy group text threads.' },
    { title: 'Status Updates', desc: 'Simple 30-second end-of-day work summaries submitted cleanly.' },
    { title: 'Quick Links', desc: 'Important portals, timecards, and software shortcuts.' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-blue-700" />
            <span>Gradual Rollout & Access Control</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            ADD THE TEAM WHEN YOU'RE READY.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A Virtual HQ does not require the entire company to change how they work on day one.
          </p>

          {/* Prominent Core Banner */}
          <div className="inline-block px-5 py-2 rounded-xl bg-slate-950 text-white font-mono text-xs sm:text-sm font-bold uppercase tracking-widest border border-slate-800 shadow-sm">
            RIGHT PEOPLE. RIGHT INFORMATION. RIGHT ACCESS.
          </div>
        </div>

        {/* 2-Column Comparison Layout: Owner Control vs Team Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Left Column: Staged Rollout Explanation */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-300/80 space-y-4">
              <h3 className="text-lg font-serif font-bold text-slate-950">
                Begin With Owner Control, Expand at Your Pace
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <div className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-slate-900">Start with the owner/manager view.</strong> Get instant clarity over operations, deadlines, and files for yourself first.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-slate-900">Then give team members access to the parts they need.</strong> Only provide access to specific logs, forms, or task lists.
                  </div>
                </div>

                <div className="flex items-start space-x-2.5">
                  <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-slate-900">Owner access remains strictly separate.</strong> Financials, bank accounts, and executive decisions stay completely private.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <button
                  onClick={onScrollToForm}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Map Your Team Access Structure
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Team View Visual Mockup */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-300 shadow-md overflow-hidden">
              
              {/* Team Portal Top Bar */}
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-xs font-serif font-bold">Virtual HQ™ / Simplified Team View</span>
                </div>
                <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-300">
                  <Lock className="w-3 h-3 text-teal-400" />
                  <span>Financials & Owner Vault Hidden</span>
                </div>
              </div>

              {/* Team Workspace Grid */}
              <div className="p-5 bg-slate-50/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-slate-800 font-serif">
                    What Team Members See:
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">10 Simplified Access Points</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {TEAM_ITEMS.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center space-x-2 mb-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                        <span className="text-xs font-bold text-slate-900">{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug pl-5.5">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2 text-slate-700">
                    <Smartphone className="w-4 h-4 text-teal-700" />
                    <span>Works smoothly on mobile devices for field teams and office staff alike.</span>
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
