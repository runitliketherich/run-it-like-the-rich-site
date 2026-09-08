import React, { useState } from 'react';
import { VIRTUAL_HQ_MODULES } from '../data/mockData';
import { 
  Building2, History, Users, FolderKanban, FileCode2, 
  ShieldCheck, TrendingUp, Handshake, LockKeyhole, 
  Check, Layers, Sparkles, ExternalLink 
} from 'lucide-react';

interface VirtualHQSectionProps {
  onOpenConsult: () => void;
}

export const VirtualHQSection: React.FC<VirtualHQSectionProps> = ({ onOpenConsult }) => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('timeline');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'History': return History;
      case 'Users': return Users;
      case 'FolderKanban': return FolderKanban;
      case 'FileCode2': return FileCode2;
      case 'ShieldCheck': return ShieldCheck;
      case 'TrendingUp': return TrendingUp;
      case 'Handshake': return Handshake;
      case 'LockKeyhole': return LockKeyhole;
      default: return Building2;
    }
  };

  const selectedModule = VIRTUAL_HQ_MODULES.find(m => m.id === selectedModuleId) || VIRTUAL_HQ_MODULES[0];
  const SelectedIcon = getIcon(selectedModule.iconName);

  return (
    <section id="virtual-hq" className="py-20 bg-stone-100/70 border-y border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-300 text-blue-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>VIRTUAL HQ™ FOUNDATION INCLUDED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            Rebuild the organizational value the physical main office used to provide.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            The old office accumulated company knowledge in filing cabinets, project folders, binders, calendars, conversations and people. Remote work scattered that information.{' '}
            <strong className="text-slate-950 font-bold">Virtual HQ™ gives it a controlled digital home again.</strong>
          </p>
        </div>

        {/* 8 Module Interactive Vault Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: 8 Module Buttons */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {VIRTUAL_HQ_MODULES.map((mod) => {
              const IconComponent = getIcon(mod.iconName);
              const isSelected = mod.id === selectedModuleId;
              return (
                <button
                  key={mod.id}
                  id={`vhq-tab-${mod.id}`}
                  onClick={() => setSelectedModuleId(mod.id)}
                  className={`text-left p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-amber-500 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-stone-100 text-slate-600'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className={`text-xs font-bold ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                      {mod.name}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {mod.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right: Live Interactive Virtual HQ Vault Detail Screen */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-sm relative">
              
              <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800">
                    <SelectedIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono-code text-amber-800 font-bold tracking-wider">
                      Virtual HQ™ Module
                    </span>
                    <h3 className="text-xl font-serif-editorial font-bold text-slate-900">
                      {selectedModule.name}
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-900 font-mono-code font-bold">
                  Foundation Active
                </span>
              </div>

              {/* Tagline & Description */}
              <div className="mb-5">
                <p className="text-xs font-bold text-amber-900 mb-1">
                  {selectedModule.tagline}
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedModule.description}
                </p>
              </div>

              {/* Sample Items in Vault */}
              <div className="mb-5">
                <h4 className="text-[11px] uppercase font-mono-code text-slate-600 font-bold mb-2">
                  Sample Digital Assets In This Vault:
                </h4>
                <div className="space-y-1.5">
                  {selectedModule.sampleItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-md bg-stone-50 border border-stone-200 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buyer Value Banner */}
              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                <span className="text-[11px] font-bold text-blue-900 block mb-0.5">
                  Buyer & Due Diligence Impact:
                </span>
                <p className="text-xs text-slate-700">
                  {selectedModule.buyerValue}
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Foundation Notice Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-stone-200 text-center max-w-4xl mx-auto shadow-xs">
          <p className="text-xs text-slate-600 leading-relaxed">
            <strong className="text-slate-900 font-bold">Included foundation, not an unlimited custom build.</strong> Larger company-wide portals, advanced automations, custom apps and extensive migrations can be added at a preferred StoryBookExit™ client rate.
          </p>
        </div>

      </div>
    </section>
  );
};
