import React, { useState } from 'react';
import { SYSTEM_PILLARS } from '../data/mockData';
import { ChevronRight, CheckCircle2, Award, FileSpreadsheet, ShieldAlert, Sparkles } from 'lucide-react';

interface SystemSixProps {
  onOpenConsult: () => void;
}

export const SystemSix: React.FC<SystemSixProps> = ({ onOpenConsult }) => {
  const [activeTab, setActiveTab] = useState(0);
  const activePillar = SYSTEM_PILLARS[activeTab];

  return (
    <section id="system" className="py-20 bg-stone-100/70 border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <span>THE STORYBOOKEXIT™ SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            Build the story. Prove it.{' '}
            <span className="text-amber-800 italic">Make it transferable.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            We work on the same areas a future buyer will eventually investigate—but while the owner still has time to improve them.
          </p>
        </div>

        {/* 6 Pillars Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 6 Pillar Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SYSTEM_PILLARS.map((pillar, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={pillar.number}
                  id={`system-tab-${pillar.number}`}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-amber-500 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-white/80 border-stone-200 hover:bg-white hover:border-stone-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span className={`text-sm font-mono-code font-bold px-2 py-1 rounded-md border ${
                      isSelected 
                        ? 'bg-amber-400 text-slate-950 border-amber-500' 
                        : 'bg-stone-100 text-slate-600 border-stone-200'
                    }`}>
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className={`text-base font-serif-editorial font-bold ${isSelected ? 'text-slate-950' : 'text-slate-800'}`}>
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {pillar.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform shrink-0 ${isSelected ? 'text-amber-800 translate-x-1' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Deep Dive Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm relative">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-stone-200 pb-5 mb-6">
                <div>
                  <span className="text-xs font-mono-code font-bold text-amber-800 uppercase tracking-wider block mb-1">
                    Pillar {activePillar.number} of 06
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900">
                    {activePillar.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800 font-mono-code font-bold text-lg shadow-xs">
                  {activePillar.number}
                </div>
              </div>

              {/* Core Description */}
              <p className="text-base text-slate-700 font-sans leading-relaxed mb-6">
                {activePillar.shortDesc}
              </p>

              {/* Actionable Implementation Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  What StoryBookExit™ Builds & Tightens:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Valuation & Artifact Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 border-t border-stone-200">
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                    <Award className="w-3.5 h-3.5 text-amber-700" />
                    <span>Valuation & Sale Impact</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    {activePillar.impactOnValuation}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 mb-1">
                    <FileSpreadsheet className="w-3.5 h-3.5 text-blue-700" />
                    <span>Permanent Key Artifact</span>
                  </div>
                  <p className="text-xs text-slate-700">
                    {activePillar.keyArtifact}
                  </p>
                </div>
              </div>

              {/* Action prompt */}
              <div className="mt-6 pt-4 flex items-center justify-between border-t border-stone-100">
                <span className="text-xs text-slate-500 font-medium">
                  Included in StoryBookExit™ Foundation
                </span>
                <button
                  onClick={onOpenConsult}
                  className="text-xs font-bold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Review in consultation</span>
                  <span>→</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
