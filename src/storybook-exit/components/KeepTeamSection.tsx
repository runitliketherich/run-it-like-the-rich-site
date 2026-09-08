import React from 'react';
import { Users2, UserCheck, GraduationCap, GitMerge, FileArchive, ShieldCheck, HeartHandshake } from 'lucide-react';

export const KeepTeamSection: React.FC = () => {
  const teamPillars = [
    {
      title: 'Current bookkeeper stays',
      subtitle: 'Preserve existing relationships',
      desc: 'Unless the owner specifically wants full-service bookkeeping, the existing person continues doing the work in their familiar environment.',
      icon: UserCheck,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20'
    },
    {
      title: 'Train where needed',
      subtitle: 'Close the GAAP™ support',
      desc: 'Close the GAAP™ support can be layered in when the internal person needs accounting review, training, procedures or experienced backup.',
      icon: GraduationCap,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10 border-blue-500/20'
    },
    {
      title: 'Improve the handoffs',
      subtitle: 'Connect disparate systems',
      desc: 'Connect operations, payroll, accounting, reporting and owner information so the same facts do not have to be rebuilt every single month.',
      icon: GitMerge,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Make knowledge transferable',
      subtitle: 'Protect institutional memory',
      desc: 'Document what key employees know so the company retains the process and execution even when people eventually change or retire.',
      icon: FileArchive,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20'
    }
  ];

  return (
    <section className="py-20 bg-stone-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-300 text-emerald-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
            <span>HUMAN CAPITAL & STAFF CONTINUITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            Keep the team.{' '}
            <span className="text-emerald-800 italic">Strengthen the system.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            StoryBookExit™ does not automatically replace your bookkeeper or staff. The people who already know the business may be some of its most important assets. We work with them, strengthen the workflow around them and document the knowledge they have built.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.title}
                className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between hover:border-emerald-400 transition-all hover:shadow-md shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center border bg-emerald-50 border-emerald-200 text-emerald-800 mb-4">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <span className="text-[11px] font-mono-code text-slate-500 font-bold uppercase tracking-wider block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-lg font-serif-editorial font-bold text-slate-900 mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
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
