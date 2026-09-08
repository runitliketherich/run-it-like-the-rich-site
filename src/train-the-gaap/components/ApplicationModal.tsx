import React, { useState } from 'react';
import { ApplicationFormData } from '../types';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  ShieldCheck, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INITIAL_FORM_DATA: ApplicationFormData = {
  businessName: '',
  applicantName: '',
  applicantEmail: '',
  applicantPhone: '',
  roleInCompany: 'Owner / CEO',
  bookkeeperRole: 'Office Manager',
  bookkeeperName: '',
  currentSoftware: 'QuickBooks Online (QBO)',
  numberOfEntities: '1 Entity',
  annualRevenue: '$1M – $3M',
  primaryPainPoints: ['Prior-year reconciliation uncertainty', 'Lack of documented SOPs & checklists'],
  engagementGoal: 'Back up our loyal internal bookkeeper and clean up our chart of accounts for tax season.',
  preferredStartDate: 'Within 2–4 Weeks',
  additionalNotes: ''
};

export const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCheckboxToggle = (item: string) => {
    setFormData((prev) => {
      const exists = prev.primaryPainPoints.includes(item);
      if (exists) {
        return { ...prev, primaryPainPoints: prev.primaryPainPoints.filter((p) => p !== item) };
      } else {
        return { ...prev, primaryPainPoints: [...prev.primaryPainPoints, item] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleCopySummary = () => {
    const summary = `
Train the GAAP™ Application Details:
----------------------------------
Company: ${formData.businessName || 'N/A'}
Contact: ${formData.applicantName} (${formData.roleInCompany})
Email: ${formData.applicantEmail}
Phone: ${formData.applicantPhone || 'N/A'}
Bookkeeper Role: ${formData.bookkeeperRole} (Name: ${formData.bookkeeperName || 'Internal Staff'})
Current Ledger: ${formData.currentSoftware}
Entities: ${formData.numberOfEntities} | Revenue: ${formData.annualRevenue}
Key Needs: ${formData.primaryPainPoints.join(', ')}
Target Start: ${formData.preferredStartDate}
Notes: ${formData.additionalNotes || 'None'}
    `.trim();

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-stone-200 shadow-2xl text-stone-900 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-amber-800 text-white p-6 border-b border-amber-900 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-900 border border-amber-700 flex items-center justify-center text-amber-200 font-bold font-brand-badge text-base">
              TG
            </div>
            <div>
              <h3 className="font-serif-display text-lg font-bold text-white">
                Apply for a Limited Client Opening
              </h3>
              <p className="text-xs text-amber-200 font-medium">
                Train the GAAP™ • Led by Laura Poincot (The Virtual HQ™)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-amber-200 hover:text-white hover:bg-amber-900/60 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (if not submitted) */}
        {!isSubmitted && (
          <div className="bg-amber-50/70 px-6 py-3 border-b border-amber-200/80 flex items-center justify-between text-xs text-stone-700 font-medium">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-700'}`}>
                1
              </span>
              <span>Team & Setup</span>
            </div>
            <div className="h-[1px] w-8 bg-stone-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-700'}`}>
                2
              </span>
              <span>Challenges & Scope</span>
            </div>
            <div className="h-[1px] w-8 bg-stone-300 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 3 ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-700'}`}>
                3
              </span>
              <span>Review & Submit</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          
          {isSubmitted ? (
            /* Confirmation State */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-bold font-serif-display text-stone-900">
                  Application Received!
                </h4>
                <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-stone-900">{formData.applicantName}</strong>. 
                  Laura Poincot and The Virtual HQ™ team will review your bookkeeping configuration and reach out within 
                  <strong> 1 business day</strong> to coordinate your diagnostic kickoff.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs space-y-2 text-stone-700">
                <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                  <span className="font-bold text-stone-900 uppercase">Application Snapshot</span>
                  <span className="text-emerald-700 font-bold">Priority Review Status</span>
                </div>
                <div><strong>Business:</strong> {formData.businessName || 'Private Enterprise'}</div>
                <div><strong>Current Bookkeeper:</strong> {formData.bookkeeperRole} ({formData.bookkeeperName || 'Internal Staff'})</div>
                <div><strong>Software:</strong> {formData.currentSoftware} • {formData.numberOfEntities}</div>
                <div><strong>Target Start:</strong> {formData.preferredStartDate}</div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleCopySummary}
                  className="px-5 py-2.5 rounded-xl border border-stone-300 bg-white hover:bg-stone-50 text-stone-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Application Copy'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* STEP 1: Team & Software Setup */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-stone-200 pb-3">
                    <h4 className="text-base font-bold text-stone-900 font-serif-display">
                      Step 1: Your Business & Current Bookkeeper Setup
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Tell us about your organization and the trusted in-house staff member doing the daily entries.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Acme Services LLC"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Current Accounting Software *
                      </label>
                      <select
                        value={formData.currentSoftware}
                        onChange={(e) => setFormData({ ...formData, currentSoftware: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      >
                        <option>QuickBooks Online (QBO)</option>
                        <option>QuickBooks Desktop</option>
                        <option>Xero</option>
                        <option>Spreadsheets / Excel</option>
                        <option>Other System</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Role of Person Doing The Books *
                      </label>
                      <select
                        value={formData.bookkeeperRole}
                        onChange={(e) => setFormData({ ...formData, bookkeeperRole: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      >
                        <option>Office Manager</option>
                        <option>Admin Assistant / Front Desk</option>
                        <option>Operations / Project Lead</option>
                        <option>Spouse / Family Member</option>
                        <option>Dedicated In-House Bookkeeper</option>
                        <option>Business Owner Themselves</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Their First Name (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.bookkeeperName}
                        onChange={(e) => setFormData({ ...formData, bookkeeperName: e.target.value })}
                        placeholder="e.g. Sarah"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Number of Legal Entities
                      </label>
                      <select
                        value={formData.numberOfEntities}
                        onChange={(e) => setFormData({ ...formData, numberOfEntities: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      >
                        <option>1 Entity</option>
                        <option>2 Entities</option>
                        <option>3–5 Entities</option>
                        <option>6+ Entities (Holding + Operating)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Approximate Annual Revenue
                      </label>
                      <select
                        value={formData.annualRevenue}
                        onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      >
                        <option>Under $500k</option>
                        <option>$500k – $1M</option>
                        <option>$1M – $3M</option>
                        <option>$3M – $7M</option>
                        <option>$7M – $15M+</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <span>Next: Challenges & Scope</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Challenges & Priorities */}
              {step === 2 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-stone-200 pb-3">
                    <h4 className="text-base font-bold text-stone-900 font-serif-display">
                      Step 2: Accounting Needs & Priority Areas
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Select what you want Laura Poincot and Train the GAAP™ to address first.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-2">
                      Select Primary Areas for Support (Check all that apply):
                    </label>
                    
                    {[
                      'Prior-year reconciliation uncertainty & cleanup',
                      'Chart of Accounts hygiene & cleanup',
                      'Training staff on the ACT™ classification method',
                      'Lack of documented SOPs & closing checklists in Virtual HQ™',
                      'Owner draws, distributions & personal expense separation',
                      'Job costing, class tracking & project margin visibility',
                      '1099 compliance & tax preparer year-end package handoff',
                      'Optional QuickIN™ bank feed integration & automation'
                    ].map((item, idx) => (
                      <label 
                        key={idx} 
                        className={`flex items-start gap-3 p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          formData.primaryPainPoints.includes(item)
                            ? 'bg-amber-50 border-amber-300 text-stone-900 font-medium'
                            : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-white'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.primaryPainPoints.includes(item)}
                          onChange={() => handleCheckboxToggle(item)}
                          className="mt-0.5 text-amber-800 rounded focus:ring-amber-500"
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Preferred Target Start Date
                    </label>
                    <select
                      value={formData.preferredStartDate}
                      onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                    >
                      <option>Immediately / Priority Opening</option>
                      <option>Within 2–4 Weeks</option>
                      <option>Next Month / Upcoming Quarter</option>
                      <option>Prior to Year-End Tax Deadlines</option>
                    </select>
                  </div>

                  <div className="pt-3 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-600 hover:bg-stone-50 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <span>Next: Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submit */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="border-b border-stone-200 pb-3">
                    <h4 className="text-base font-bold text-stone-900 font-serif-display">
                      Step 3: Contact & Application Verification
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Where should Laura’s team send the preliminary diagnostic findings and schedule call?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.applicantName}
                        onChange={(e) => setFormData({ ...formData, applicantName: e.target.value })}
                        placeholder="e.g. Robert Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Your Role in Company
                      </label>
                      <select
                        value={formData.roleInCompany}
                        onChange={(e) => setFormData({ ...formData, roleInCompany: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      >
                        <option>Owner / CEO / Founder</option>
                        <option>Managing Partner / CFO</option>
                        <option>Chief Operating Officer</option>
                        <option>In-House Staff Applying</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.applicantEmail}
                        onChange={(e) => setFormData({ ...formData, applicantEmail: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                        Direct Phone / Mobile
                      </label>
                      <input
                        type="tel"
                        value={formData.applicantPhone}
                        onChange={(e) => setFormData({ ...formData, applicantPhone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase mb-1">
                      Additional Context or Specific Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      placeholder="Any specific tax deadlines, past-due cleanups, or software nuances..."
                      className="w-full px-3.5 py-2 rounded-xl border border-stone-300 bg-stone-50 focus:bg-white focus:border-amber-700 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Summary Callout */}
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-stone-700 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <span>
                      <strong>Founder Confidentiality:</strong> Your books, employee names, and financials remain strictly confidential under NDA. 
                      Coordination is handled through <strong>The Virtual HQ™</strong> security protocols.
                    </span>
                  </div>

                  <div className="pt-3 flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 rounded-xl border border-stone-300 text-stone-600 hover:bg-stone-50 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Submit Application</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>
      </div>

    </div>
  );
};
