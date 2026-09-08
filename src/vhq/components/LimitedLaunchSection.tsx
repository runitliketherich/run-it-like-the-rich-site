import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { LAUNCH_SLOTS_CONFIG } from '../config';

interface LimitedLaunchSectionProps {
  onScrollToForm: () => void;
}

export const LimitedLaunchSection: React.FC<LimitedLaunchSectionProps> = ({
  onScrollToForm,
}) => {
  const { totalSlots, claimedSlots, remainingSlots, batchLabel } = LAUNCH_SLOTS_CONFIG;
  const progressPercent = Math.round((claimedSlots / totalSlots) * 100);

  return (
    <section className="py-14 bg-[#FBFBF7] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-300 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left Text */}
          <div className="space-y-3 text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-bold uppercase">
              <span>{batchLabel}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              LAUNCH BUILD SLOTS
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed">
              We are currently accepting a limited number of businesses for customized Virtual HQ builds while expanding the system.
            </p>

            {/* Clean Progress Meter (No fake timers) */}
            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between text-xs font-mono text-slate-700">
                <span className="font-bold text-teal-800">{remainingSlots} of {totalSlots} Launch Slots Remaining</span>
                <span className="text-slate-500">{claimedSlots} Reserved</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
                <div
                  className="h-full bg-teal-600 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Right Action */}
          <div className="shrink-0 w-full sm:w-auto text-center">
            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
            >
              <span>RESERVE A BUILD</span>
              <ArrowRight className="w-4 h-4 text-teal-400" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
