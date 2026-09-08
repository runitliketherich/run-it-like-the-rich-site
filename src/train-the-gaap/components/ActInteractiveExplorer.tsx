import React, { useState } from 'react';
import { ACT_EXAMPLES } from '../data/content';
import { CheckCircle2, HelpCircle, FileText, ArrowRight, ShieldCheck, AlertTriangle, Lightbulb } from 'lucide-react';

export const ActInteractiveExplorer: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(ACT_EXAMPLES[0].id);

  const activeExample = ACT_EXAMPLES.find((ex) => ex.id === selectedId) || ACT_EXAMPLES[0];

  return (
    <div className="rounded-2xl bg-white border border-stone-300 shadow-md overflow-hidden">
      {/* Interactive Selector Header */}
      <div className="bg-[#f5f2eb] text-stone-900 p-5 sm:p-6 border-b border-stone-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
              <Lightbulb className="w-4 h-4 text-amber-700" />
              <span>Interactive ACT™ Practice Lab</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-serif-display text-stone-900 mt-1">
              Select a Real Transaction Scenario to Apply ACT™:
            </h3>
          </div>
          <span className="text-xs text-stone-700 bg-white px-3 py-1.5 rounded-full border border-stone-300 font-mono-code font-semibold shadow-xs">
            Live Ledger Simulation
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
          {ACT_EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setSelectedId(ex.id)}
              className={`text-left p-3 rounded-xl text-xs transition-all border cursor-pointer ${
                selectedId === ex.id
                  ? 'bg-amber-800 border-amber-800 text-white font-bold shadow-sm'
                  : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-700'
              }`}
            >
              <div className="truncate font-semibold">{ex.vendor}</div>
              <div className={`text-[10px] mt-0.5 ${selectedId === ex.id ? 'text-amber-200' : 'text-stone-500'}`}>
                {ex.badge}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Transaction Details Bar */}
      <div className="bg-amber-50/70 border-b border-amber-200/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wide text-amber-900">Active Transaction:</span>
          <span className="font-bold text-stone-900 font-serif-display text-base">{activeExample.vendor}</span>
          <span className="font-mono-code text-xs px-2.5 py-0.5 rounded-md bg-amber-200/80 text-amber-900 font-bold">
            {activeExample.amount}
          </span>
        </div>
        <p className="text-xs text-stone-600 italic">
          Context: {activeExample.context}
        </p>
      </div>

      {/* The ACT Deep-Dive Columns */}
      <div className="p-6 sm:p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar A */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 relative">
            <div className="w-9 h-9 rounded-xl bg-amber-800 text-white font-bold font-serif-display text-lg flex items-center justify-center shadow-xs">
              A
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide font-serif-display">
                Audit Check
              </h4>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                {activeExample.auditQuestion}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-800 leading-relaxed font-medium">
              {activeExample.auditExplanation}
            </div>
          </div>

          {/* Pillar C */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 relative">
            <div className="w-9 h-9 rounded-xl bg-stone-200 border border-stone-300 text-stone-900 font-bold font-serif-display text-lg flex items-center justify-center shadow-xs">
              C
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide font-serif-display">
                Consistency Rule
              </h4>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                {activeExample.consistencyQuestion}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-800 leading-relaxed font-medium">
              {activeExample.consistencyExplanation}
            </div>
          </div>

          {/* Pillar T */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 relative">
            <div className="w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 text-amber-900 font-bold font-serif-display text-lg flex items-center justify-center shadow-xs">
              T
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide font-serif-display">
                Tax & Treatment
              </h4>
              <p className="text-xs text-stone-500 font-medium mt-0.5">
                {activeExample.taxTreatmentQuestion}
              </p>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-800 leading-relaxed font-medium">
              {activeExample.taxTreatmentExplanation}
            </div>
          </div>

        </div>

        {/* Conclusion / Trained Eye Insight */}
        <div className="p-5 rounded-2xl bg-amber-900 text-white border border-amber-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] uppercase font-bold text-amber-200 tracking-wider">
                The Trained Action & Automation Rule
              </span>
              <p className="text-xs sm:text-sm text-stone-100 font-medium mt-0.5">
                {activeExample.ruleConclusion}
              </p>
            </div>
          </div>
          <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-amber-950 text-amber-200 border border-amber-700/80 text-xs font-bold">
            Safe To Automate
          </span>
        </div>
      </div>

    </div>
  );
};
