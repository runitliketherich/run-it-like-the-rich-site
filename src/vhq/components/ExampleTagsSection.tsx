import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';
import { CUSTOMIZATION_TAGS } from '../data/landingData';

interface ExampleTagsSectionProps {
  onScrollToForm: () => void;
}

export const ExampleTagsSection: React.FC<ExampleTagsSectionProps> = ({ onScrollToForm }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FBFBF7] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Tailored Operational Scope</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight">
            WHAT COULD GO IN YOUR HQ?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Click on any operational areas your company actively checks, tracks, or needs visibility into:
          </p>
        </div>

        {/* 21 Interactive Tags Grid */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
          {CUSTOMIZATION_TAGS.map((tag, idx) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={idx}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-teal-700 text-white shadow-sm ring-2 ring-teal-700/30'
                    : 'bg-white text-slate-800 border border-slate-300/80 hover:border-slate-400 shadow-2xs'
                }`}
              >
                <span>{tag}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>

        {/* Finishing Statement */}
        <div className="pt-4 max-w-2xl mx-auto space-y-4">
          <p className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug">
            If it's part of running your business, let's see whether it belongs in your HQ.
          </p>

          <button
            onClick={onScrollToForm}
            className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-teal-800 hover:text-teal-950 hover:underline cursor-pointer"
          >
            <span>Tell us what you want to bring under control</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
