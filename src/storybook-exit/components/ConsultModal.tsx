import React, { useState } from 'react';
import { ConsultationFormData, OrderConfirmation } from '../types';
import { 
  X, PhoneCall, Calendar, Clock, CheckCircle2, 
  Building, User, Mail, Phone, ArrowRight, ArrowLeft, 
  Sparkles, Download, FileText, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (confirmation: OrderConfirmation) => void;
}

export const ConsultModal: React.FC<ConsultModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [confirmedData, setConfirmedData] = useState<OrderConfirmation | null>(null);

  const [formData, setFormData] = useState<ConsultationFormData>({
    companyName: '',
    ownerName: '',
    email: '',
    phone: '',
    annualRevenue: '$1M – $3M',
    industry: 'Services & Consulting',
    exitTimeline: '3–5 years',
    accountingPlatform: 'QuickBooks Online (QBO)',
    currentBookkeeperStatus: 'Internal bookkeeper / staff',
    ownerDependenceLevel: 5,
    booksCleanlinessLevel: 6,
    teamDepthLevel: 5,
    primaryConcern: 'Owner does too much daily execution & books need cleanup for future sale',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '10:00 AM EST',
    timezone: 'Eastern Time (US & Canada)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleChange = (field: keyof ConsultationFormData, val: any) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.companyName || !formData.ownerName || !formData.email || !formData.phone) {
        alert('Please fill in your company and contact information.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      handleSubmitBooking();
    }
  };

  const handleSubmitBooking = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const conf: OrderConfirmation = {
        id: `SBE-REV-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'consultation',
        timestamp: new Date().toISOString(),
        customerName: formData.ownerName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        details: {
          appointmentDate: formData.preferredDate,
          appointmentTime: formData.preferredTime,
          timezone: formData.timezone,
          targetRunway: formData.exitTimeline
        }
      };
      setConfirmedData(conf);
      setStep(4);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
      onSuccess(conf);
    }, 800);
  };

  const handleDownloadCalendar = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//StoryBookExit//Readiness Review//EN
BEGIN:VEVENT
SUMMARY:StoryBookExit™ 3–7 Year Exit Readiness Review
DESCRIPTION:Review of financial story, Virtual HQ™ foundation, owner-dependence score, and multi-year runway roadmap with StoryBookExit advisors.
DTSTART:${formData.preferredDate.replace(/-/g, '')}T140000Z
DTEND:${formData.preferredDate.replace(/-/g, '')}T144500Z
LOCATION:Zoom / Private Advisory Room (link sent to ${formData.email})
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `StoryBookExit-Readiness-Review-${formData.preferredDate}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono-code text-amber-800 tracking-wider font-bold block">
                Complimentary 45-Minute Strategic Audit
              </span>
              <h3 className="text-xl font-serif-editorial font-bold text-slate-900">
                Request a StoryBookExit™ Review
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="px-6 py-3 bg-stone-50/80 border-b border-stone-200 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono-code text-[11px] font-bold ${
                step === 1 ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-stone-200 text-slate-600'
              }`}>1</span>
              <span className={step === 1 ? 'text-slate-900 font-semibold' : 'text-slate-500'}>Company Profile</span>
            </div>
            <div className="h-[1px] w-6 bg-stone-300" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono-code text-[11px] font-bold ${
                step === 2 ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-stone-200 text-slate-600'
              }`}>2</span>
              <span className={step === 2 ? 'text-slate-900 font-semibold' : 'text-slate-500'}>Readiness Diagnostic</span>
            </div>
            <div className="h-[1px] w-6 bg-stone-300" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono-code text-[11px] font-bold ${
                step === 3 ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-stone-200 text-slate-600'
              }`}>3</span>
              <span className={step === 3 ? 'text-slate-900 font-semibold' : 'text-slate-500'}>Select Time</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Company Profile */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Industrial Solutions LLC"
                    value={formData.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Owner / Principal Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robert Sterling"
                    value={formData.ownerName}
                    onChange={(e) => handleChange('ownerName', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Direct Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="robert@apexsolutions.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 392-1049"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Approx. Annual Revenue
                  </label>
                  <select
                    value={formData.annualRevenue}
                    onChange={(e) => handleChange('annualRevenue', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-xs"
                  >
                    <option value="Under $1M">Under $1M</option>
                    <option value="$1M – $3M">$1M – $3M</option>
                    <option value="$3M – $7M">$3M – $7M</option>
                    <option value="$7M – $15M">$7M – $15M</option>
                    <option value="$15M+">$15M+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Exit / Transition Horizon
                  </label>
                  <select
                    value={formData.exitTimeline}
                    onChange={(e) => handleChange('exitTimeline', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-xs"
                  >
                    <option value="5–7 years">5–7 years (Ideal runway)</option>
                    <option value="3–5 years">3–5 years (High urgency value build)</option>
                    <option value="2–3 years">2–3 years (Rapid proof phase)</option>
                    <option value="12–24 months">12–24 months (Pre-market prep)</option>
                    <option value="Undecided / Long-term holding">Undecided / Independence focused</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-colors shadow-xs border border-amber-500"
                >
                  <span>Continue to Diagnostic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Readiness Diagnostic */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-5">
              
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Current Accounting Platform
                </label>
                <select
                  value={formData.accountingPlatform}
                  onChange={(e) => handleChange('accountingPlatform', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-xs"
                >
                  <option value="QuickBooks Online (QBO)">QuickBooks Online (QBO) — We will keep it</option>
                  <option value="QuickBooks Desktop / Enterprise">QuickBooks Desktop / Enterprise</option>
                  <option value="Xero / Other Cloud">Xero / Other Cloud</option>
                  <option value="NetSuite / Sage / ERP">NetSuite / Sage / ERP</option>
                  <option value="Spreadsheets / Inconsistent">Spreadsheets / Inconsistent</option>
                </select>
              </div>

              {/* Owner Dependence Slider */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-slate-800">
                    Owner Operational Bottleneck Score:
                  </span>
                  <span className="text-xs font-mono-code font-bold text-amber-800">
                    {formData.ownerDependenceLevel}/10
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mb-2">
                  (1 = Business completely halts without owner, 10 = Owner is absent 60 days with zero issues)
                </p>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={formData.ownerDependenceLevel}
                  onChange={(e) => handleChange('ownerDependenceLevel', Number(e.target.value))}
                  className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
              </div>

              {/* Books Cleanliness Slider */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 shadow-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-semibold text-slate-800">
                    Financial & Add-Back Clarity:
                  </span>
                  <span className="text-xs font-mono-code font-bold text-amber-800">
                    {formData.booksCleanlinessLevel}/10
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mb-2">
                  (1 = Disorganized receipts/tax only, 10 = Multi-year reconciled books ready for audit)
                </p>
                <input
                  type="range"
                  min={1}
                  max={10}
                  value={formData.booksCleanlinessLevel}
                  onChange={(e) => handleChange('booksCleanlinessLevel', Number(e.target.value))}
                  className="w-full h-2 bg-stone-300 rounded-lg appearance-none cursor-pointer accent-amber-600"
                />
              </div>

              {/* Primary Concern */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Biggest bottleneck or priority before a sale/transition:
                </label>
                <input
                  type="text"
                  value={formData.primaryConcern}
                  onChange={(e) => handleChange('primaryConcern', e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-xs"
                />
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-colors shadow-xs border border-amber-500"
                >
                  <span>Select Time Slot</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: Select Time Slot */}
          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => handleChange('preferredDate', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Timezone
                  </label>
                  <select
                    value={formData.timezone}
                    onChange={(e) => handleChange('timezone', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-xs"
                  >
                    <option value="Eastern Time (US & Canada)">Eastern Time (EST)</option>
                    <option value="Central Time (US & Canada)">Central Time (CST)</option>
                    <option value="Mountain Time (US & Canada)">Mountain Time (MST)</option>
                    <option value="Pacific Time (US & Canada)">Pacific Time (PST)</option>
                    <option value="UK / Europe (GMT/CET)">UK / Europe (GMT/CET)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Select Consultation Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['09:30 AM', '11:00 AM', '01:30 PM', '03:30 PM'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => handleChange('preferredTime', t)}
                      className={`p-2.5 rounded-lg border text-xs font-mono-code text-center cursor-pointer transition-all ${
                        formData.preferredTime === t
                          ? 'bg-amber-400 text-slate-950 font-bold border-amber-500 shadow-xs'
                          : 'bg-white border-stone-300 text-slate-700 hover:border-amber-400'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary of review inclusions */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-slate-700 space-y-1.5">
                <span className="font-semibold text-amber-900 block mb-1">
                  What Will Happen During Your Review:
                </span>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Review your 4 story pillars (Financial, Operating, Team, Evidence)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Evaluate current multiple discount vs transferable target</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Determine fit for Initial Foundation Build ($3,000–$5,000)</span>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all shadow-md border border-amber-500"
                >
                  {isSubmitting ? (
                    <span>Confirming Appointment...</span>
                  ) : (
                    <>
                      <span>Confirm & Schedule Review</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* STEP 4: Success Confirmation */}
          {step === 4 && confirmedData && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono-code text-amber-800 font-bold uppercase tracking-wider block mb-1">
                  Confirmation #{confirmedData.id}
                </span>
                <h3 className="text-2xl font-serif-editorial font-bold text-slate-900">
                  StoryBookExit™ Review Scheduled!
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  A calendar invite and private Zoom briefing link have been sent to <strong className="text-slate-900">{formData.email}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-slate-900 font-mono-code">
                    {formData.preferredDate} at {formData.preferredTime}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-slate-500">Company:</span>
                  <span className="font-semibold text-slate-900">{formData.companyName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Advisor Lead:</span>
                  <span className="text-amber-800 font-medium">StoryBookExit™ Senior Partner</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 border border-stone-300 cursor-pointer shadow-xs"
                >
                  <Download className="w-4 h-4 text-amber-700" />
                  <span>Add to Calendar (.ics)</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold flex items-center justify-center gap-2 cursor-pointer border border-amber-500 shadow-xs"
                >
                  <span>Done / Back to Overview</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
