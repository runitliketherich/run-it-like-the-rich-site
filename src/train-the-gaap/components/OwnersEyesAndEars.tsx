import React, { useState } from 'react';
import { OWNER_RADAR_QUESTIONS } from '../data/content';
import { CheckCircle2, TrendingUp, HelpCircle, Eye, DollarSign, Sparkles, ChevronDown } from 'lucide-react';

export const OwnersEyesAndEars: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<string>(OWNER_RADAR_QUESTIONS[0].id);

  return (
    <section className="py-20 md:py-28 bg-white text-stone-900 border-b border-stone-200 relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-100/40 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5 text-amber-700" />
            <span>THE OWNER’S EYES & EARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display text-stone-900 leading-tight">
            Don’t just record what the business did.{' '}
            <span className="text-amber-800 block sm:inline">Use the books to help the business do better.</span>
          </h2>
          <p className="text-lg text-stone-600 font-normal leading-relaxed">
            When your internal bookkeeper is trained to think like an owner, every transaction becomes a checkpoint for margin protection and profit efficiency.
          </p>
        </div>

        {/* 6 Questions Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OWNER_RADAR_QUESTIONS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveQuestion(item.id)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer space-y-4 ${
                activeQuestion === item.id
                  ? 'bg-amber-50/70 border-amber-400 shadow-md ring-1 ring-amber-400/30'
                  : 'bg-stone-50/70 hover:bg-white hover:shadow-sm border-stone-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 mt-0.5 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold font-serif-display text-stone-900 leading-snug">
                  {item.question}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-10">
                {item.description}
              </p>

              <div className="pt-3 border-t border-stone-200 pl-10 text-[11px] font-semibold text-amber-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Executive Impact: {item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#faf8f5] border border-amber-200/90 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-800 text-amber-200 flex items-center justify-center font-serif-display font-bold text-lg shrink-0">
              HQ
            </div>
            <p className="text-sm text-stone-700">
              <strong className="text-stone-900">Custom Executive Dashboard:</strong> Monthly key variance tracking and balance-sheet integrity schedules are documented inside <span className="text-amber-800 font-semibold">The Virtual HQ™</span>.
            </p>
          </div>
          <span className="text-xs font-bold text-amber-900 uppercase tracking-wide bg-amber-100 px-3 py-1.5 rounded-lg shrink-0">
            Included in 12-Month Arc
          </span>
        </div>

      </div>
    </section>
  );
};
