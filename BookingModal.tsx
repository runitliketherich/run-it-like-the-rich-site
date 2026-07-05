import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar as CalendarIcon, Clock, Sparkles, Check, CheckCircle2, ChevronRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICES = [
  { id: 'checkup', name: 'ABC Business Checkup', desc: 'Practical audit of admin, books, and compliance calendars.' },
  { id: 'qbo', name: 'QuickBooks Online Diagnostic', desc: 'Deep dive into transaction errors, ledger bugs, and reporting issues.' },
  { id: 'vhq', name: 'Virtual HQ Inquiry', desc: 'Discuss custom operating system and directory setups.' },
  { id: 'cleanup', name: 'Cleanup & Catch-Up Support', desc: 'Get hands-on help compiling files and reconciling past accounts.' }
];

const TIME_SLOTS = [
  '09:00 AM EST',
  '11:30 AM EST',
  '02:00 PM EST',
  '04:30 PM EST'
];

export default function BookingModal({ isOpen, onClose, initialService = 'checkup' }: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Form fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [quickbooks, setQuickbooks] = useState<string>('yes-messy');
  const [biggestPain, setBiggestPain] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Generate calendar days for mock selection (e.g., next 10 weekdays)
  const getUpcomingWeekdays = () => {
    const list = [];
    const date = new Date();
    let count = 0;
    while (count < 10) {
      date.setDate(date.getDate() + 1);
      const day = date.getDay();
      if (day !== 0 && day !== 6) { // Skip weekends
        const label = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        const val = date.toISOString().split('T')[0];
        list.push({ label, val });
        count++;
      }
    }
    return list;
  };

  const weekdays = getUpcomingWeekdays();

  const handleNextStep = () => {
    if (step === 1 && !selectedService) return;
    if (step === 2 && (!selectedDate || !selectedTime)) return;
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Success step
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    setSelectedService('checkup');
    setSelectedDate('');
    setSelectedTime('');
    setName('');
    setEmail('');
    setCompany('');
    setQuickbooks('yes-messy');
    setBiggestPain('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="booking-modal-overlay">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          id="booking-modal-backdrop"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white border border-ink/15 rounded-sm shadow-xl max-w-lg w-full overflow-hidden z-10 flex flex-col max-h-[90vh]"
          id="booking-modal-card"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-ink/12 bg-paper" id="booking-modal-header">
            <div className="flex items-center space-x-2" id="booking-title-icon-row">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="font-serif-display text-ink font-bold text-lg">Book a Business Checkup</span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-ink/60 hover:text-ink hover:bg-black/5 transition-all"
              id="btn-close-booking-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress indicators */}
          {step < 4 && (
            <div className="bg-white px-6 py-2 border-b border-ink/10 flex items-center justify-between text-[10px] font-mono font-bold tracking-wider" id="booking-progress-track">
              <span className={step >= 1 ? 'text-accent-dark' : 'text-ink/40'}>1. SERVICE</span>
              <ChevronRight className="w-3 h-3 text-ink/20" />
              <span className={step >= 2 ? 'text-accent-dark' : 'text-ink/40'}>2. DATE & TIME</span>
              <ChevronRight className="w-3 h-3 text-ink/20" />
              <span className={step >= 3 ? 'text-accent-dark' : 'text-ink/40'}>3. INTAKE</span>
            </div>
          )}

          {/* Scrollable Form Content */}
          <div className="p-6 overflow-y-auto flex-1 text-left bg-white" id="booking-modal-content-area">
            {step === 1 && (
              <div className="space-y-4" id="booking-step-1">
                <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-ink/40">Step 1: Choose Your Service</h4>
                <div className="space-y-3" id="booking-services-list">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.id}
                      onClick={() => setSelectedService(srv.id)}
                      className={`w-full text-left p-4 rounded-sm border transition-all flex flex-col ${
                        selectedService === srv.id 
                          ? 'border-accent bg-accent-light' 
                          : 'border-ink/8 bg-white hover:border-accent/40 hover:bg-paper'
                      }`}
                      id={`btn-service-opt-${srv.id}`}
                    >
                      <span className="text-sm font-semibold text-ink">{srv.name}</span>
                      <span className="text-xs text-ink/60 mt-1">{srv.desc}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6" id="booking-step-2">
                <div>
                  <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-ink/40 mb-3">Step 2a: Select an Upcoming Date</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2" id="booking-calendar-grid">
                    {weekdays.map((day) => (
                      <button
                        key={day.val}
                        onClick={() => setSelectedDate(day.val)}
                        className={`p-3 rounded-sm border text-center transition-all flex flex-col justify-center items-center ${
                          selectedDate === day.val 
                            ? 'border-accent bg-accent-light text-ink font-bold' 
                            : 'border-ink/8 bg-white text-ink/60 hover:text-ink hover:border-accent/40'
                        }`}
                        id={`btn-date-opt-${day.val}`}
                      >
                        <CalendarIcon className="w-3.5 h-3.5 mb-1 text-accent" />
                        <span className="text-xs font-semibold block">{day.label.split(',')[1].trim()}</span>
                        <span className="text-[9px] uppercase font-mono tracking-wider mt-0.5">{day.label.split(',')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-ink/40 mb-3">Step 2b: Select an Available Time Slot</h4>
                  <div className="grid grid-cols-2 gap-2" id="booking-timeslots-grid">
                    {TIME_SLOTS.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-sm border text-center transition-all flex items-center justify-center space-x-2 text-xs ${
                          selectedTime === time 
                            ? 'border-accent bg-accent-light text-ink font-bold' 
                            : 'border-ink/8 bg-white text-ink/60 hover:text-ink hover:border-accent/40'
                        }`}
                        id={`btn-time-opt-${time.replace(/\s+/g, '-')}`}
                      >
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>{time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4" id="booking-step-3-form">
                <h4 className="text-[10px] font-bold font-mono uppercase tracking-widest text-ink/40">Step 3: Business & Contact Details</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-grid-names">
                  <div>
                    <label className="block text-[10px] font-bold text-ink/50 uppercase tracking-wide mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 bg-white border border-ink/15 rounded-sm text-sm text-ink focus:outline-none focus:border-accent placeholder-ink/30"
                      id="input-booking-name"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-ink/50 uppercase tracking-wide mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme Ventures LLC"
                      className="w-full px-3.5 py-2.5 bg-white border border-ink/15 rounded-sm text-sm text-ink focus:outline-none focus:border-accent placeholder-ink/30"
                      id="input-booking-company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-ink/50 uppercase tracking-wide mb-1">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. jdoe@example.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-ink/15 rounded-sm text-sm text-ink focus:outline-none focus:border-accent placeholder-ink/30"
                    id="input-booking-email"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-ink/50 uppercase tracking-wide mb-1">Do you currently use QuickBooks Online?</label>
                  <select
                    value={quickbooks}
                    onChange={(e) => setQuickbooks(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-ink/15 rounded-sm text-sm text-ink focus:outline-none focus:border-accent"
                    id="select-booking-qbo"
                  >
                    <option value="yes-messy">Yes, but they are messy or behind</option>
                    <option value="yes-clean">Yes, and they are mostly reconciled</option>
                    <option value="no-other">No, we use spreadsheets/other software</option>
                    <option value="no-none">No active bookkeeping system in place</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-ink/50 uppercase tracking-wide mb-1">What is your biggest back-office bottleneck? (Optional)</label>
                  <textarea
                    rows={2}
                    value={biggestPain}
                    onChange={(e) => setBiggestPain(e.target.value)}
                    placeholder="e.g. Missing records, late tax filings, lost folders, owner stress..."
                    className="w-full px-3.5 py-2.5 bg-white border border-ink/15 rounded-sm text-sm text-ink focus:outline-none focus:border-accent placeholder-ink/30 resize-none"
                    id="textarea-booking-pain"
                  />
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="text-center py-8 flex flex-col items-center space-y-4" id="booking-success-view">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-500/20 flex items-center justify-center mb-2" id="success-ring">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-bounce" />
                </div>
                <h4 className="text-2xl font-serif-display text-ink font-bold">You are Booked!</h4>
                <p className="text-sm text-ink/70 max-w-sm leading-relaxed">
                  Excellent, {name}. Your free checkup is scheduled! An invitation has been dispatched to <strong className="text-ink font-semibold">{email}</strong> with a calendar invite and standard Zoom details.
                </p>

                <div className="bg-paper border border-ink/8 p-4 rounded-sm w-full max-w-sm text-left" id="success-booking-summary">
                  <div className="text-[10px] text-ink/40 font-mono tracking-widest uppercase mb-2 font-bold">Confirmed Details</div>
                  <div className="text-sm font-semibold text-ink mb-1">
                    {SERVICES.find(s => s.id === selectedService)?.name || 'Business Checkup'}
                  </div>
                  <div className="text-xs text-ink/70 flex items-center space-x-1.5 mt-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-accent" />
                    <span>{new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <div className="text-xs text-ink/70 flex items-center space-x-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>{selectedTime}</span>
                  </div>
                  <div className="text-xs text-ink/70 flex items-center space-x-1.5 mt-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Host: Laura, Back-Office Expert</span>
                  </div>
                </div>

                <p className="text-[10px] text-ink/50 max-w-xs leading-relaxed italic pt-2">
                  "Get ready to review your files, books, and compliance calendars. We will build clarity together."
                </p>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="px-6 py-4 border-t border-ink/10 bg-paper flex items-center justify-between" id="booking-modal-footer">
            {step < 4 ? (
              <>
                <button
                  onClick={handlePrevStep}
                  disabled={step === 1}
                  className={`text-[10px] font-mono uppercase tracking-widest px-4 py-2 rounded transition-all font-bold ${
                    step === 1 
                      ? 'text-ink/20 cursor-not-allowed bg-transparent' 
                      : 'text-ink/60 hover:text-ink bg-transparent hover:bg-black/5'
                  }`}
                  id="btn-prev-step-booking"
                >
                  Back
                </button>

                {step < 3 ? (
                  <button
                    onClick={handleNextStep}
                    disabled={(step === 2 && (!selectedDate || !selectedTime))}
                    className={`px-5 py-2.5 bg-ink text-paper hover:bg-accent font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all flex items-center space-x-2 ${
                      (step === 2 && (!selectedDate || !selectedTime))
                        ? 'opacity-30 cursor-not-allowed'
                        : ''
                    }`}
                    id="btn-next-step-booking"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !name || !email || !company}
                    className={`px-5 py-2.5 bg-[#C5A059] text-white hover:bg-[#A68045] font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all flex items-center space-x-2 ${
                      (isSubmitting || !name || !email || !company)
                        ? 'opacity-40 cursor-not-allowed'
                        : ''
                    }`}
                    id="btn-submit-booking-form"
                  >
                    {isSubmitting ? (
                      <span>Scheduling...</span>
                    ) : (
                      <>
                        <span>Confirm Appointment</span>
                        <Check className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                )}
              </>
            ) : (
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-ink text-paper hover:bg-accent font-semibold text-[10px] uppercase tracking-widest rounded-sm hover:text-white transition-all"
                id="btn-close-success-booking"
              >
                Close Window
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
