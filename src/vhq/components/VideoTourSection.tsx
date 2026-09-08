import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle2, X, Monitor, ShieldCheck } from 'lucide-react';

interface VideoTourSectionProps {
  onScrollToForm: () => void;
}

export const VideoTourSection: React.FC<VideoTourSectionProps> = ({ onScrollToForm }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Monitor className="w-3.5 h-3.5 text-teal-700" />
            <span>90-Second System Overview</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
            TAKE A 90-SECOND TOUR
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            See how an executive Virtual HQ brings daily operations, deadlines, and team handoffs into one screen.
          </p>
        </div>

        {/* Video Placeholder Box with Dashboard Poster Style */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden aspect-video max-h-[460px] w-full flex items-center justify-center group">
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>

          {/* Realistic Dashboard Background Poster */}
          <div className="absolute inset-0 p-6 sm:p-10 opacity-30 flex flex-col justify-between select-none pointer-events-none">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-serif font-bold text-white text-lg">Virtual HQ™ / Executive Center</span>
              <span className="text-xs font-mono text-teal-400">Owner View Active</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 bg-slate-900 rounded-xl border border-slate-800 p-3">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Today's Priorities</div>
                <div className="text-lg font-serif font-bold text-white mt-1">3 Action Items</div>
              </div>
              <div className="h-24 bg-slate-900 rounded-xl border border-slate-800 p-3">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Compliance</div>
                <div className="text-lg font-serif font-bold text-teal-300 mt-1">12 Days to Renewal</div>
              </div>
              <div className="h-24 bg-slate-900 rounded-xl border border-slate-800 p-3">
                <div className="text-[10px] text-slate-500 uppercase font-mono">Team Sync</div>
                <div className="text-lg font-serif font-bold text-white mt-1">4 Active Jobs</div>
              </div>
            </div>
            <div className="text-xs text-slate-600 font-mono">Ready for Google Vids / YouTube / Vimeo embed</div>
          </div>

          {/* Central Play Button */}
          <div className="relative z-10 text-center space-y-4">
            <button
              onClick={() => setIsPlaying(true)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-teal-600 hover:bg-teal-500 text-white flex items-center justify-center shadow-xl transform group-hover:scale-105 transition-all cursor-pointer mx-auto ring-4 ring-teal-500/30"
              aria-label="Play 90-second tour video"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
            </button>

            <div className="space-y-1">
              <div className="text-white font-serif font-bold text-base sm:text-lg">
                Watch the Virtual HQ™ Quick Tour
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Duration: 1:30 • No Software Jargon
              </div>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Video Demonstration</span>
            <span className="text-teal-400">TheHQ.online</span>
          </div>
        </div>

      </div>

      {/* Interactive Tour Modal if user clicks play */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
                <h3 className="font-serif font-bold text-base">Virtual HQ™ Walkthrough Preview</h3>
              </div>
              <button
                onClick={() => setIsPlaying(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
              <p className="font-serif font-bold text-white text-base">
                How Virtual HQ™ Operates in 3 Quick Points:
              </p>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>1. One Morning Cockpit:</strong> You open a single secure screen to see priorities, delegated tasks, and compliance deadlines without digging through email.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>2. Modular & Custom:</strong> You choose the exact cards you need (Jobs, Fleet, Renewals, Invoices) and skip what you don't.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span><strong>3. Rollout Control:</strong> Start with just you, then grant simplified team access to individual logs when you're ready.</span>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-2">
              <button
                onClick={() => setIsPlaying(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold"
              >
                Close Preview
              </button>
              <button
                onClick={() => {
                  setIsPlaying(false);
                  onScrollToForm();
                }}
                className="px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold uppercase tracking-wider"
              >
                Map My Virtual HQ
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
