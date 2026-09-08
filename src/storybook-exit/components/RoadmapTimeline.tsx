import React, { useState } from 'react';
import { ROADMAP_STAGES } from '../data/mockData';
import { RoadmapStage } from '../types';
import { 
  Compass, Layers, CheckCircle2, Briefcase, Award, 
  Calendar, Check, MessageSquareQuote, ShieldCheck, ArrowRight 
} from 'lucide-react';

interface RoadmapTimelineProps {
  onOpenConsult: () => void;
}

export const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ onOpenConsult }) => {
  const [activeStageId, setActiveStageId] = useState<string>('stage_5_7');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return Compass;
      case 'Layers': return Layers;
      case 'CheckCircle2': return CheckCircle2;
      case 'Briefcase': return Briefcase;
      case 'Award': return Award;
      default: return Calendar;
    }
  };

  const activeStage = ROADMAP_STAGES.find(s => s.id === activeStageId) || ROADMAP_STAGES[0];
  const ActiveIcon = getIcon(activeStage.iconName);

  return (
    <section id="roadmap" className="py-20 bg-stone-100/70 border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span>THE 3–7 YEAR ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            Improve the company in stages.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            The exact sequence depends on the business, but the goal is always to move from cleanup and owner dependence toward proof, transferability and buyer readiness.
          </p>
        </div>

        {/* Interactive Horizontal Stage Timeline Buttons */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {ROADMAP_STAGES.map((stage, idx) => {
            const isSelected = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                id={`roadmap-nav-${stage.id}`}
                onClick={() => setActiveStageId(stage.id)}
                className={`flex-1 min-w-[180px] p-3.5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-white border-amber-500 text-slate-900 shadow-md ring-1 ring-amber-400/50'
                    : 'bg-white/80 border-stone-200 text-slate-600 hover:border-stone-300 hover:text-slate-900 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono-code font-bold ${isSelected ? 'text-amber-800' : 'text-slate-500'}`}>
                    {stage.period}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono-code">
                    0{idx + 1}
                  </span>
                </div>
                <div className={`text-xs font-bold font-serif-editorial ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-9 shadow-sm relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Stage Core Details */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono-code uppercase text-amber-800 tracking-wider font-bold">
                    Timeline Phase • {activeStage.period}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-editorial font-bold text-slate-900">
                    {activeStage.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-bold text-slate-900 mb-2">
                {activeStage.subtitle}
              </p>
              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-sans">
                {activeStage.description}
              </p>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Key Milestones & Deliverables in this Stage:
                </h4>
                <div className="space-y-2">
                  {activeStage.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Buyer's Future Perspective & Deal Team Sync */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Buyer Perspective Callout */}
              <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-300 relative">
                <div className="flex items-center gap-2 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
                  <MessageSquareQuote className="w-4 h-4 text-amber-700" />
                  <span>Buyer’s Due Diligence Impression</span>
                </div>
                <p className="text-xs sm:text-sm italic text-slate-800 leading-relaxed font-serif-editorial">
                  {activeStage.buyerPerspective}
                </p>
              </div>

              {/* Primary Focus Area */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                <span className="text-[11px] font-mono-code uppercase text-slate-500 font-bold block mb-1">
                  Primary Focus Architecture
                </span>
                <span className="text-xs font-bold text-slate-900">
                  {activeStage.focusArea}
                </span>
              </div>

              {/* Consultation trigger */}
              <div className="pt-2">
                <button
                  onClick={onOpenConsult}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors border border-slate-900 shadow-xs"
                >
                  <span>Map Your Timeline with StoryBookExit™</span>
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
