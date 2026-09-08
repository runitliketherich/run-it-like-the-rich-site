import React from 'react';
import {
  Mail,
  Folder,
  MessageSquare,
  Layers,
  Table,
  Calendar,
  Users,
  DollarSign,
  FileText,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { SCATTERED_SOURCES } from '../data/landingData';

interface ProblemSectionProps {
  onScrollToForm: () => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onScrollToForm }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mail': return Mail;
      case 'Folder': return Folder;
      case 'MessageSquare': return MessageSquare;
      case 'Layers': return Layers;
      case 'Table': return Table;
      case 'Calendar': return Calendar;
      case 'Users': return Users;
      case 'DollarSign': return DollarSign;
      case 'FileText': return FileText;
      case 'Smartphone': return Smartphone;
      default: return Layers;
    }
  };

  return (
    <section id="problem" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>The Visibility Challenge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            THE BUSINESS IS RUNNING. <br />
            <span className="text-slate-700">BUT WHERE DO YOU GO TO SEE IT?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            As businesses grow, critical operational information becomes scattered across a dozen disconnected silos.
          </p>
        </div>

        {/* Scattered Systems Flowing into 1 Unified Virtual HQ Visual */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-300/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: 10 Scattered Information Sources */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center justify-between pb-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">
                  Scattered Across 10+ Places
                </span>
                <span className="text-[11px] text-slate-500 font-medium">Daily friction</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {SCATTERED_SOURCES.map((source, idx) => {
                  const IconComponent = getIcon(source.icon);
                  return (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center space-x-2.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {source.name}
                        </div>
                        <div className="text-[10px] text-slate-500 truncate font-mono">
                          {source.count}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Middle: Conversion Funnel / Stream */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 lg:py-0">
              <div className="flex lg:flex-col items-center space-x-2 lg:space-x-0 lg:space-y-2">
                <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-slate-300 to-teal-600"></div>
                <div className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center shadow-md">
                  <ArrowRight className="w-5 h-5 rotate-90 lg:rotate-0" />
                </div>
                <div className="hidden lg:block w-px h-12 bg-gradient-to-b from-teal-600 to-slate-300"></div>
              </div>
              <span className="text-[11px] font-mono text-teal-800 font-bold uppercase mt-2 text-center">
                Organized into
              </span>
            </div>

            {/* Right: The Virtual HQ Single Operating Destination */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-serif font-bold text-sm">
                    HQ
                  </div>
                  <div>
                    <div className="font-serif font-bold text-white text-base">Your Virtual HQ™</div>
                    <div className="text-[11px] text-teal-300 font-mono">1 Dependable Starting Point</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                  Live Hub
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Daily Operations & Priorities</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Upcoming Deadlines & Compliance</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Delegated Tasks & Team Status</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-300 font-medium">Financial Information & Critical Files</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Takeaway Card */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#FBFBF7] border border-slate-300 text-center space-y-4">
          <div className="space-y-2">
            <p className="text-lg sm:text-xl font-serif font-bold text-slate-950">
              The problem isn't always missing information.
            </p>
            <p className="text-base sm:text-lg text-teal-800 font-serif font-semibold">
              The problem is that the owner has no single place to see it.
            </p>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Virtual HQ gives the business a dependable internal starting point — removing the morning panic of checking 10 apps, chasing employees, and searching lost email threads.
          </p>
        </div>

      </div>
    </section>
  );
};
