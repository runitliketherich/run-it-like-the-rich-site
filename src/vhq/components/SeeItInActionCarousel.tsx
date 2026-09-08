import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  CheckCircle2,
  Calendar,
  Users,
  FolderKanban,
  FolderLock,
  DollarSign,
  ListChecks,
  UserCheck,
  Smartphone,
  ShieldCheck,
  AlertTriangle,
  FileText,
  Clock,
  TrendingUp,
  Activity,
} from 'lucide-react';
import { CAROUSEL_SLIDES } from '../data/landingData';

interface SeeItInActionCarouselProps {
  onScrollToForm: () => void;
}

export const SeeItInActionCarousel: React.FC<SeeItInActionCarouselProps> = ({
  onScrollToForm,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-advance every 6 seconds, stops when paused (hovered or interacted)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const currentSlide = CAROUSEL_SLIDES[currentIndex];

  return (
    <section
      id="see-it-in-action"
      className="py-16 sm:py-24 bg-white border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
            <Eye className="w-3.5 h-3.5 text-teal-400" />
            <span>Interactive Interface Walkthrough</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            SEE WHAT A VIRTUAL HQ CAN LOOK LIKE
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Real operating center views customized to what your business actually tracks and manages.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Slide Card */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#F8FAFC] border border-slate-300/80 shadow-lg overflow-hidden">
            
            {/* Slide Header: Title, Category & Badge */}
            <div className="bg-slate-900 px-5 sm:px-8 py-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono text-teal-400 font-bold">
                  {currentIndex + 1} / {CAROUSEL_SLIDES.length}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  {currentSlide.title}
                </h3>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {currentSlide.category}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800">
                  {currentSlide.badge}
                </span>
              </div>
            </div>

            {/* Slide Description Sub-bar */}
            <div className="bg-slate-100 px-5 sm:px-8 py-3 border-b border-slate-200 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
              {currentSlide.shortExplanation}
            </div>

            {/* Slide Mockup Canvas Area */}
            <div className="p-4 sm:p-8 bg-[#F1F5F9]/60 min-h-[380px] flex items-center justify-center">
              
              {/* SLIDE 1: OWNER DASHBOARD */}
              {currentSlide.mockupType === 'owner' && (
                <div className="w-full bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
                      <span className="font-serif font-bold text-slate-900">Executive Pulse: Today's Priorities</span>
                    </div>
                    <span className="text-xs font-mono text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      3 Urgent Actions
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
                      <div className="font-bold text-amber-900">Sign Permit Application</div>
                      <div className="text-[11px] text-amber-800">City zoning approval due 5 PM</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-900">Review Sales Proposal #41</div>
                      <div className="text-[11px] text-slate-500">$34,000 commercial job</div>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-900">Payroll Release</div>
                      <div className="text-[11px] text-slate-500">14 hourly employees ready</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-medium">Quick Links: QuickBooks Online • Business Bank • Google Shared Drive • CRM</span>
                    <span className="text-teal-700 font-bold font-mono">1-Click Launch</span>
                  </div>
                </div>
              )}

              {/* SLIDE 2: TEAM STATUS BOARD */}
              {currentSlide.mockupType === 'team' && (
                <div className="w-full bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-serif font-bold text-slate-900">Active Team Workload & Shift Handoffs</span>
                    <span className="text-xs font-mono text-slate-500">6 Members Logged In</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    {[
                      { name: 'Sarah Miller', role: 'Sales Lead', task: '3 Client callbacks completed • Quote sent to Metro Hospital', status: 'Active', badge: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
                      { name: 'David Vance', role: 'Field Tech', task: 'Site inspection completed on Job #204 • Uploaded 8 job photos', status: 'Review Needed', badge: 'bg-amber-50 text-amber-800 border-amber-200' },
                      { name: 'Elena Rostova', role: 'Office Mgr', task: 'Invoiced 4 completed work orders ($14,200 total)', status: 'Done', badge: 'bg-teal-50 text-teal-800 border-teal-200' },
                    ].map((m, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-slate-900">{m.name} <span className="text-slate-500 font-normal text-[11px]">({m.role})</span></div>
                          <div className="text-slate-600 text-[11px] mt-0.5">{m.task}</div>
                        </div>
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${m.badge}`}>
                          {m.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 3: PROJECT CENTER */}
              {currentSlide.mockupType === 'projects' && (
                <div className="w-full bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="font-serif font-bold text-slate-900">Active Jobs & Deliverable Tracking</span>
                    <span className="text-xs font-mono text-teal-700 font-bold">4 Live Projects</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <div className="flex justify-between font-medium text-slate-800 mb-1">
                        <span>Highland Plaza Renovation (Lead: Dave)</span>
                        <span className="font-mono text-teal-700">85% Complete • Due in 6 Days</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-teal-600 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-medium text-slate-800 mb-1">
                        <span>Westgate Logistics Warehouse Upgrade</span>
                        <span className="font-mono text-teal-700">45% Complete • On Schedule</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-teal-600 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 4: FILE CENTER */}
              {currentSlide.mockupType === 'files' && (
                <div className="w-full bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-serif font-bold text-slate-900">Company Master Digital Vault</span>
                    <span className="font-mono text-slate-500">Sub-5s File Retrieval</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="font-medium text-slate-800">01_Corporate_Legal & Bylaws</span>
                      <FolderLock className="w-3.5 h-3.5 text-teal-700" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="font-medium text-slate-800">02_Insurance_Policies_2026</span>
                      <FolderLock className="w-3.5 h-3.5 text-teal-700" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="font-medium text-slate-800">03_Master_Customer_Agreements</span>
                      <FolderLock className="w-3.5 h-3.5 text-teal-700" />
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="font-medium text-slate-800">04_Employee_Handbooks_SOPs</span>
                      <FolderLock className="w-3.5 h-3.5 text-teal-700" />
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 5: COMPLIANCE CALENDAR */}
              {currentSlide.mockupType === 'compliance' && (
                <div className="w-full bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-serif font-bold text-slate-900">Compliance & Regulatory Calendar</span>
                    <span className="font-mono text-teal-700 font-bold">Zero Missed Deadlines</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-amber-900">State Annual Corporate Report</div>
                        <div className="text-[11px] text-amber-800">Filing fee: $150 • Registered Agent</div>
                      </div>
                      <span className="font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">
                        12 Days Left
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">Commercial Fleet Insurance Renewal</div>
                        <div className="text-[11px] text-slate-500">6 Vehicles • Policy #GL-8891</div>
                      </div>
                      <span className="font-mono font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                        21 Days Left
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 6: FINANCIAL & KPI FEED */}
              {currentSlide.mockupType === 'financial' && (
                <div className="w-full bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-serif font-bold text-slate-900">Owner Financial & KPI Pulse</span>
                    <span className="text-xs font-mono text-emerald-700 font-bold">Month-to-Date Sync</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="text-[10px] text-slate-500 font-mono">Revenue MTD</div>
                      <div className="text-base font-bold font-serif text-slate-900">$78,400</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="text-[10px] text-slate-500 font-mono">Outstanding A/R</div>
                      <div className="text-base font-bold font-serif text-amber-800">$28,150</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="text-[10px] text-slate-500 font-mono">Avg Job Margin</div>
                      <div className="text-base font-bold font-serif text-emerald-700">38.4%</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="text-[10px] text-slate-500 font-mono">Pipeline Value</div>
                      <div className="text-base font-bold font-serif text-slate-900">$142,000</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 7: LIVE LISTS */}
              {currentSlide.mockupType === 'lists' && (
                <div className="w-full bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-serif font-bold text-slate-900">Fleet & Equipment Maintenance Log</span>
                    <span className="font-mono text-slate-500">Live Custom List</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="font-medium text-slate-800">Ford Transit 250 (Van #02)</span>
                      <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">Inspection Passed</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                      <span className="font-medium text-slate-800">Hydraulic Lift #01</span>
                      <span className="text-[10px] font-mono text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">Service Due in 100 hrs</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 8: HR CENTER */}
              {currentSlide.mockupType === 'hr' && (
                <div className="w-full bg-white rounded-xl border border-slate-300 p-5 shadow-sm space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-serif font-bold text-slate-900">Employee Directory & Onboarding Checklist</span>
                    <span className="font-mono text-slate-500">12 Active Staff</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-900">New Hire Onboarding: Jordan K.</div>
                      <div className="text-[11px] text-teal-700 font-mono mt-1">4 of 6 steps completed (W-4, I-9, Direct Deposit)</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-900">Company Handbook & Policies</div>
                      <div className="text-[11px] text-slate-500 mt-1">Updated Jan 2026 • 100% staff signed off</div>
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 9: MOBILE TEAM VIEW */}
              {currentSlide.mockupType === 'mobile' && (
                <div className="w-full max-w-sm mx-auto bg-white rounded-2xl border-2 border-slate-800 p-4 shadow-md space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                    <span className="font-serif font-bold text-slate-900">Virtual HQ™ Mobile</span>
                    <span className="text-[10px] font-mono text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">Field Access</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="font-bold text-slate-800">Job #108: Service Call Check-In</div>
                    <button className="mt-2 w-full py-1.5 bg-teal-700 text-white rounded font-bold text-[11px]">
                      Submit Completion Log & Photos
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Navigation Controls Bar */}
            <div className="bg-white px-4 sm:px-8 py-3.5 sm:py-4 border-t border-slate-200 flex items-center justify-between gap-2">
              <button
                onClick={handlePrev}
                className="inline-flex items-center space-x-1 sm:space-x-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 px-2.5 sm:px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer min-h-[44px]"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden xs:inline sm:inline">Prev</span>
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto py-1">
                {CAROUSEL_SLIDES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => {
                      setIsPaused(true);
                      setCurrentIndex(dotIdx);
                    }}
                    className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer min-h-[24px] flex items-center justify-center ${
                      currentIndex === dotIdx ? 'w-5 sm:w-6 bg-teal-700' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  >
                    <span className="sr-only">Slide {dotIdx + 1}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center space-x-1 sm:space-x-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 px-2.5 sm:px-3 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer min-h-[44px]"
                aria-label="Next slide"
              >
                <span className="hidden xs:inline sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Swipe indicator hint for touch screens */}
          <div className="sm:hidden text-center mt-2 text-[11px] font-mono text-slate-400 flex items-center justify-center space-x-1">
            <span>← Swipe horizontally to explore views →</span>
          </div>

          {/* Under-Carousel Button */}
          <div className="mt-6 sm:mt-8 text-center">
            <button
              onClick={onScrollToForm}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <Eye className="w-4 h-4 text-teal-400" />
              <span>SEE A VIRTUAL HQ DEMO</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
