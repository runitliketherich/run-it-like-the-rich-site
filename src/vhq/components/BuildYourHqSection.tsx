import React, { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FolderLock,
  ShieldCheck,
  CheckSquare,
  Compass,
  DollarSign,
  BarChart3,
  UserCheck,
  ListChecks,
  FileSpreadsheet,
  BookOpen,
  Palette,
  Sparkles,
  Check,
  Plus,
  ArrowRight,
  Sliders,
} from 'lucide-react';
import { FEATURE_CARDS } from '../data/landingData';
import { FeatureCardItem } from '../types';

interface BuildYourHqSectionProps {
  onScrollToFormWithModules: (selectedIds: string[]) => void;
}

export const BuildYourHqSection: React.FC<BuildYourHqSectionProps> = ({
  onScrollToFormWithModules,
}) => {
  // Default selected modules
  const [selectedModules, setSelectedModules] = useState<string[]>([
    'owner-dashboard',
    'file-center',
    'quick-links',
    'tasks-followup',
  ]);

  const toggleModule = (id: string) => {
    if (selectedModules.includes(id)) {
      setSelectedModules(selectedModules.filter((m) => m !== id));
    } else {
      setSelectedModules([...selectedModules, id]);
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutDashboard': return LayoutDashboard;
      case 'Users': return Users;
      case 'FolderKanban': return FolderKanban;
      case 'FolderLock': return FolderLock;
      case 'ShieldCheck': return ShieldCheck;
      case 'CheckSquare': return CheckSquare;
      case 'Compass': return Compass;
      case 'DollarSign': return DollarSign;
      case 'BarChart3': return BarChart3;
      case 'UserCheck': return UserCheck;
      case 'ListChecks': return ListChecks;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'BookOpen': return BookOpen;
      case 'Palette': return Palette;
      case 'Sparkles': return Sparkles;
      default: return LayoutDashboard;
    }
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-[#FBFBF7] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-teal-700" />
            <span>Modular Command Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            CHOOSE WHAT BELONGS IN YOUR HQ.
          </h2>

          <div className="text-base sm:text-lg text-slate-600 font-normal space-y-1">
            <p>Start with what your business needs now.</p>
            <p className="font-semibold text-slate-800">Add modules as your business grows.</p>
          </div>

          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono">
            <span>{selectedModules.length} Modules Selected for Your Custom Build</span>
          </div>
        </div>

        {/* 14 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {FEATURE_CARDS.map((card) => {
            const isSelected = selectedModules.includes(card.id);
            const IconComponent = getIcon(card.iconName);

            return (
              <div
                key={card.id}
                onClick={() => toggleModule(card.id)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative group ${
                  card.isCustom
                    ? isSelected
                      ? 'bg-amber-50/70 border-amber-400 ring-2 ring-amber-400/30 shadow-sm'
                      : 'bg-gradient-to-br from-amber-50/30 to-white border-amber-200/80 hover:border-amber-300 shadow-2xs'
                    : isSelected
                    ? 'bg-white border-teal-600 ring-2 ring-teal-600/20 shadow-md'
                    : 'bg-white border-slate-300/80 hover:border-slate-400 shadow-2xs'
                }`}
              >
                <div>
                  {/* Top Row: Card Number & Toggle Indicator */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                          card.isCustom
                            ? 'bg-amber-100 text-amber-900'
                            : isSelected
                            ? 'bg-teal-700 text-white'
                            : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        CARD {card.cardNumber}
                      </span>
                    </div>

                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-teal-600 text-white'
                          : 'bg-slate-100 text-slate-400 border border-slate-200 group-hover:border-slate-300'
                      }`}
                    >
                      {isSelected ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3 h-3" />}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1 mb-2.5">
                    <h3 className="font-serif font-bold text-base text-slate-950 group-hover:text-teal-900 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wide">
                      {card.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Highlights List */}
                {card.highlights && (
                  <div className="pt-3 border-t border-slate-100 mt-auto space-y-1">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-1">
                      Includes:
                    </div>
                    <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
                      {card.highlights.map((h, hIdx) => (
                        <span key={hIdx} className="truncate">• {h}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-lg sm:text-xl font-serif font-bold text-white">
              Ready to assemble your custom Virtual HQ?
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              You’ve highlighted {selectedModules.length} modules. We will map them specifically to how your business operates.
            </p>
          </div>

          <button
            onClick={() => onScrollToFormWithModules(selectedModules)}
            className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all shrink-0 cursor-pointer min-h-[48px]"
          >
            <span>BUILD MY HQ</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
