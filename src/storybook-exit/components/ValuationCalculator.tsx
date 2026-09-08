import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, ArrowRight, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';

interface ValuationCalculatorProps {
  onOpenConsult: () => void;
  onOpenDownpay: () => void;
}

export const ValuationCalculator: React.FC<ValuationCalculatorProps> = ({ onOpenConsult, onOpenDownpay }) => {
  const [ebitda, setEbitda] = useState<number>(1000000); // $1M default
  const [ownerIndependence, setOwnerIndependence] = useState<number>(4); // 1-10
  const [booksQuality, setBooksQuality] = useState<number>(5); // 1-10
  const [teamDepth, setTeamDepth] = useState<number>(4); // 1-10

  // Calculate base multiple (2.2x to 3.8x based on current readiness)
  const currentReadinessScore = (ownerIndependence + booksQuality + teamDepth) / 30; // 0 to 1
  const currentMultiple = Number((2.2 + currentReadinessScore * 1.8).toFixed(1));
  const currentValuation = Math.round(ebitda * currentMultiple);

  // Calculate StoryBookExit target multiple (5.2x to 7.0x depending on base scale)
  const optimizedMultiple = Number((5.5 + (ebitda > 2000000 ? 1.0 : 0.4)).toFixed(1));
  // Additional 12% EBITDA expansion from plugging cost leaks
  const optimizedEbitda = Math.round(ebitda * 1.12);
  const optimizedValuation = Math.round(optimizedEbitda * optimizedMultiple);

  const valueSpread = optimizedValuation - currentValuation;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculator" className="py-20 bg-stone-100/70 border-t border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-amber-700" />
            <span>EXIT VALUATION & MULTIPLE SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-editorial font-bold text-slate-900 tracking-tight leading-tight">
            See how transferability multiplies your exit value.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-sans leading-relaxed">
            Buyers penalize owner bottlenecks with 40–60% valuation discounts. Discover the equity created over a 3–7 year StoryBookExit™ runway.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-sm">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* EBITDA / SDE Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Current Adjusted EBITDA / SDE:
                  </label>
                  <span className="text-sm font-mono-code font-bold text-amber-800">
                    {formatCurrency(ebitda)}
                  </span>
                </div>
                <input
                  type="range"
                  min={250000}
                  max={5000000}
                  step={50000}
                  value={ebitda}
                  onChange={(e) => setEbitda(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono-code mt-1 font-semibold">
                  <span>$250k</span>
                  <span>$2.5M</span>
                  <span>$5M+</span>
                </div>
              </div>

              {/* Owner Independence */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-700">
                    Owner Independence (Can business run 30 days without you?):
                  </label>
                  <span className="text-xs font-mono-code text-slate-800 font-bold">
                    {ownerIndependence}/10
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={ownerIndependence}
                  onChange={(e) => setOwnerIndependence(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                  <span>1 (Owner does all)</span>
                  <span>10 (100% Autonomous)</span>
                </div>
              </div>

              {/* Books & Financial History */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-700">
                    Books & Add-Back Verification Quality:
                  </label>
                  <span className="text-xs font-mono-code text-slate-800 font-bold">
                    {booksQuality}/10
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={booksQuality}
                  onChange={(e) => setBooksQuality(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                  <span>1 (Rough / Tax Only)</span>
                  <span>10 (Audited & Reconciled)</span>
                </div>
              </div>

              {/* Team Depth */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-700">
                    Team Depth & SOP Documentation:
                  </label>
                  <span className="text-xs font-mono-code text-slate-800 font-bold">
                    {teamDepth}/10
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={teamDepth}
                  onChange={(e) => setTeamDepth(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-medium">
                  <span>1 (Tribal memory)</span>
                  <span>10 (Full Virtual HQ™ SOPs)</span>
                </div>
              </div>

            </div>

            {/* Right Output Dashboard */}
            <div className="lg:col-span-6 bg-stone-50 rounded-xl border border-stone-200 p-6 sm:p-7 flex flex-col justify-between">
              
              <div className="space-y-4">
                
                {/* Current Baseline Card */}
                <div className="p-4 rounded-xl bg-white border border-stone-200 flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-[11px] font-mono-code text-slate-500 block uppercase font-bold">
                      Current Unprepared Valuation
                    </span>
                    <div className="text-xs text-rose-700 font-semibold mt-0.5">
                      Estimated Multiple: {currentMultiple}x EBITDA
                    </div>
                  </div>
                  <div className="text-lg font-serif-editorial font-bold text-slate-800">
                    {formatCurrency(currentValuation)}
                  </div>
                </div>

                {/* StoryBookExit Target Card */}
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-300 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono-code text-amber-900 block uppercase font-bold">
                      StoryBookExit™ Target Valuation
                    </span>
                    <div className="text-xs text-emerald-800 font-semibold mt-0.5">
                      Transferable Multiple: {optimizedMultiple}x EBITDA (+12% margin expansion)
                    </div>
                  </div>
                  <div className="text-xl font-serif-editorial font-bold text-slate-950">
                    {formatCurrency(optimizedValuation)}
                  </div>
                </div>

                {/* Value Spread Banner */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-center">
                  <span className="text-[10px] uppercase font-mono-code text-emerald-900 tracking-wider font-bold block">
                    Potential Equity Value Unlocked:
                  </span>
                  <div className="text-3xl sm:text-4xl font-serif-editorial font-bold text-emerald-800 mt-1">
                    +{formatCurrency(valueSpread)}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={onOpenConsult}
                  className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs border border-amber-500"
                >
                  <span>Verify In Readiness Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenDownpay}
                  className="flex-1 py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-slate-900 shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Downpay & Lock Build</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
