import React from 'react';
import { ActInteractiveExplorer } from './ActInteractiveExplorer';
import { ArrowRight, CheckCircle2, Shield, AlertCircle, ArrowDown } from 'lucide-react';

export const ActMethod: React.FC = () => {
  const stepsFlow = [
    { label: 'Recognize', desc: 'Identify the transaction event' },
    { label: 'ACT™', desc: 'Apply Audit, Consistency & Tax lenses', highlight: true },
    { label: 'Classify', desc: 'Assign correct ledger & class' },
    { label: 'Document', desc: 'Attach receipt & memo in Virtual HQ™' },
    { label: 'Automate', desc: 'Lock in safe recurring rule' }
  ];

  return (
    <section id="the-act-method" className="py-20 md:py-28 bg-[#faf8f5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>THE TRAIN THE GAAP™ METHOD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif-display text-stone-900 leading-tight">
            Before you automate a transaction,{' '}
            <span className="text-amber-800">ACT™ on it.</span>
          </h2>
          <p className="text-lg text-stone-600 font-normal leading-relaxed">
            We teach the person closest to the transactions to become the owner’s trained eyes and ears—not merely the person who enters transactions.
          </p>
        </div>

        {/* 3 Core ACT Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar A: Audit */}
          <div className="relative p-7 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 transition-all space-y-4 shadow-sm hover:shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-amber-800 text-white font-bold font-serif-display text-3xl flex items-center justify-center shadow-sm">
              A
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-900 font-serif-display">Audit</h3>
              <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mt-0.5">
                Proof & Business Purpose
              </p>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong className="text-stone-950">Can you support it? What is the business purpose? Would someone understand it next year?</strong>{' '}
              Add a brief memo and keep the backup in The Virtual HQ™.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950">
              <span className="font-bold text-amber-800 uppercase text-[10px] tracking-wider block mb-1">Example</span>
              <strong>T-Mobile</strong> → Owner & office phones; online statements available.
            </div>
          </div>

          {/* Pillar C: Consistency */}
          <div className="relative p-7 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 transition-all space-y-4 shadow-sm hover:shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-stone-100 border border-stone-300 text-amber-900 font-bold font-serif-display text-3xl flex items-center justify-center shadow-sm">
              C
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-900 font-serif-display">Consistency</h3>
              <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mt-0.5">
                Safe Rules vs. Mixed Purchases
              </p>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong className="text-stone-950">Can this safely follow the same rule every time—or does the vendor sometimes include personal, mixed, or unusual purchases?</strong>
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950">
              <span className="font-bold text-amber-800 uppercase text-[10px] tracking-wider block mb-1">Example</span>
              <strong>Gas station</strong> → Fuel, personal purchase, cash, food, or mixed use? Think before creating the rule.
            </div>
          </div>

          {/* Pillar T: Tax & Treatment */}
          <div className="relative p-7 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 transition-all space-y-4 shadow-sm hover:shadow-md">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 font-bold font-serif-display text-3xl flex items-center justify-center shadow-sm">
              T
            </div>
            <div>
              <h3 className="text-2xl font-bold text-stone-900 font-serif-display">Tax & Treatment</h3>
              <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mt-0.5">
                Category vs. Structural Entry
              </p>
            </div>
            <p className="text-sm text-stone-700 leading-relaxed">
              <strong className="text-stone-950">Expense or asset? Payroll or contractor? Owner activity? Capitalize or expense?</strong>{' '}
              Know when the transaction needs more than a simple category.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950">
              <span className="font-bold text-amber-800 uppercase text-[10px] tracking-wider block mb-1">Principle</span>
              The goal is not to turn staff into tax experts. It is to teach them <em>when to stop and ask</em>.
            </div>
          </div>

        </div>

        {/* Workflow Ribbon */}
        <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-white border border-stone-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-800">The 5-Stage Transaction Pipeline</span>
            <h4 className="text-lg font-bold font-serif-display text-stone-900 mt-1">
              How Every Transaction Moves to Clean Automation
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {stepsFlow.map((step, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl text-center space-y-1 transition-all ${
                  step.highlight
                    ? 'bg-amber-100/80 border-2 border-amber-600 text-amber-950 shadow-sm'
                    : 'bg-stone-50 border border-stone-200 text-stone-700'
                }`}
              >
                <div className="text-[10px] font-mono-code text-stone-500 font-bold">Stage 0{idx+1}</div>
                <div className="font-bold text-base font-serif-display text-stone-900">{step.label}</div>
                <div className="text-[11px] text-stone-600 leading-tight">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Sandbox */}
        <div className="space-y-4">
          <ActInteractiveExplorer />
        </div>

      </div>
    </section>
  );
};
