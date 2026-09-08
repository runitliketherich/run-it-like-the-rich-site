import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Lock,
  Mail,
  Building2,
  Phone,
  User,
  Sliders,
  AlertCircle,
  Sparkles,
  Check,
  Briefcase,
  Calendar,
  Layers,
  FileText,
  HelpCircle,
  Trash2,
  Compass,
} from 'lucide-react';
import {
  FORM_AREAS_OPTIONS,
  TEAM_SIZE_OPTIONS,
  YEARS_OPERATING_OPTIONS,
  TAX_STRUCTURE_OPTIONS,
  FUTURE_PLANS_OPTIONS,
  SELLING_TIMELINE_OPTIONS,
  GOOGLE_WORKSPACE_SUBSCRIPTION_OPTIONS,
  GOOGLE_WORKSPACE_TOOLS_OPTIONS,
  BUSINESS_SYSTEM_AREAS,
} from '../data/landingData';
import { BRAND_CONFIG, GOOGLE_APPS_SCRIPT_ENDPOINT } from '../config';
import { LeadFormData } from '../types';

interface LeadFormSectionProps {
  preselectedModules?: string[];
}

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({
  preselectedModules = [],
}) => {
  const [formData, setFormData] = useState<LeadFormData>({
    // Contact Info
    name: '',
    company: '',
    email: '',
    phone: '',
    areasToControl: ['Files', 'Team / Tasks', 'Daily Operations'],
    teamSize: '2–5',
    selectedModules: preselectedModules,

    // About Your Business
    industry: '',
    yearsOperating: '4–7 years',
    taxStructure: 'S corporation (Form 1120-S)',
    taxStructureOther: '',
    futurePlans: ['Improve margins and owner visibility'],
    futurePlansOther: '',
    sellingTimeline: '',

    // Your Current Systems
    usesGoogleWorkspace: 'Yes',
    googleWorkspaceSubscription: 'Business Standard',
    googleWorkspaceSubscriptionOther: '',
    googleWorkspaceTools: ['Gmail', 'Google Drive', 'Google Calendar', 'Google Sheets', 'Google Docs'],
    googleWorkspaceToolsOther: '',

    // Business systems (system name / notes keyed by area id)
    businessSystems: {
      bookkeeping: '',
      payroll: '',
      scheduling: '',
      field_ops: '',
      inventory: '',
      estimates: '',
      invoicing: '',
      crm: '',
      pos: '',
      banking: '',
      hr: '',
      storage: '',
      other: '',
    },

    // Operational reflection questions
    systemsWorkingWell: '',
    systemsToReplaceOrEliminate: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleArea = (area: string) => {
    if (formData.areasToControl.includes(area)) {
      setFormData({
        ...formData,
        areasToControl: formData.areasToControl.filter((a) => a !== area),
      });
    } else {
      setFormData({
        ...formData,
        areasToControl: [...formData.areasToControl, area],
      });
    }
  };

  const toggleFuturePlan = (plan: string) => {
    if (formData.futurePlans.includes(plan)) {
      setFormData({
        ...formData,
        futurePlans: formData.futurePlans.filter((p) => p !== plan),
      });
    } else {
      setFormData({
        ...formData,
        futurePlans: [...formData.futurePlans, plan],
      });
    }
  };

  const toggleGwTool = (tool: string) => {
    if (formData.googleWorkspaceTools.includes(tool)) {
      setFormData({
        ...formData,
        googleWorkspaceTools: formData.googleWorkspaceTools.filter((t) => t !== tool),
      });
    } else {
      setFormData({
        ...formData,
        googleWorkspaceTools: [...formData.googleWorkspaceTools, tool],
      });
    }
  };

  const handleSystemChange = (areaId: string, value: string) => {
    setFormData({
      ...formData,
      businessSystems: {
        ...formData.businessSystems,
        [areaId]: value,
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (GOOGLE_APPS_SCRIPT_ENDPOINT && GOOGLE_APPS_SCRIPT_ENDPOINT.trim().length > 0) {
      try {
        await fetch(GOOGLE_APPS_SCRIPT_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });
        setStatus('success');
      } catch (err: any) {
        console.error('Submission error:', err);
        setStatus('error');
        setErrorMessage('Submission error occurred. You can also email us directly at ' + BRAND_CONFIG.email);
      }
    } else {
      // Smooth preview completion
      setTimeout(() => {
        setStatus('success');
      }, 700);
    }
  };

  const handleReset = () => {
    setStatus('idle');
  };

  const hasRetirementPlan =
    formData.futurePlans.includes('Prepare to sell, transition, or retire') ||
    Boolean(formData.sellingTimeline);

  return (
    <section id="intake" className="py-16 sm:py-24 bg-[#FBFBF7] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Exact Requested Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
            <Sliders className="w-3.5 h-3.5 text-teal-400" />
            <span>Operations & Systems Mapping</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            Let’s Map Your Virtual HQ
          </h2>

          <p className="text-sm sm:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Tell us how your business currently runs, where information gets lost, and what you need to see from one place. We will map the systems you already use and outline the right headquarters for your operation.
          </p>
        </div>

        {/* Main Form Container */}
        <div className="rounded-3xl bg-white border border-slate-300 shadow-xl overflow-hidden p-6 sm:p-10">
          
          {status === 'success' ? (
            <div className="py-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-700 border-2 border-teal-200 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
                  Virtual HQ Assessment & Systems Map Received
                </h3>
                <p className="text-sm text-slate-600 max-w-xl mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name || 'Business Owner'}</strong>. We have logged the operational blueprint for <strong className="text-slate-900">{formData.company || 'your business'}</strong>.
                </p>
              </div>

              {/* Assessment Summary Box */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-xl mx-auto text-left text-xs space-y-3">
                <div className="font-bold text-slate-900 font-serif text-sm border-b border-slate-200 pb-2 flex items-center justify-between">
                  <span>Executive Discovery Blueprint</span>
                  <span className="text-[11px] font-mono text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-medium">Ready for Review</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                  <div><strong className="text-slate-900">Industry:</strong> {formData.industry || 'Not specified'}</div>
                  <div><strong className="text-slate-900">Operating:</strong> {formData.yearsOperating}</div>
                  <div><strong className="text-slate-900">Tax Structure:</strong> {formData.taxStructure}</div>
                  <div><strong className="text-slate-900">Team Size:</strong> {formData.teamSize} people</div>
                  <div><strong className="text-slate-900">Google Workspace:</strong> {formData.usesGoogleWorkspace}</div>
                  <div><strong className="text-slate-900">Subscription:</strong> {formData.googleWorkspaceSubscription}</div>
                </div>

                {formData.futurePlans.length > 0 && (
                  <div className="pt-2 border-t border-slate-200 text-slate-700">
                    <strong className="text-slate-900 block mb-1">3–7 Year Trajectory:</strong>
                    <div className="flex flex-wrap gap-1">
                      {formData.futurePlans.map((p, idx) => (
                        <span key={idx} className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {formData.systemsToReplaceOrEliminate && (
                  <div className="pt-2 border-t border-slate-200 text-slate-700">
                    <strong className="text-slate-900 block mb-0.5">Software / Systems to Reduce or Replace:</strong>
                    <p className="italic text-slate-600 bg-white p-2 rounded border border-slate-200">{formData.systemsToReplaceOrEliminate}</p>
                  </div>
                )}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`mailto:${BRAND_CONFIG.email}?subject=Virtual%20HQ%20Systems%20Map%20-%20${encodeURIComponent(formData.company || 'My Business')}`}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-400" />
                  <span>Email Directly: {BRAND_CONFIG.email}</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 underline cursor-pointer"
                >
                  Edit or submit another view
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* SECTION 1: Contact Details */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="font-serif font-bold text-lg text-slate-950 flex items-center space-x-2">
                    <User className="w-4 h-4 text-teal-700" />
                    <span>Contact Information</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Where we should send your company's mapped layout and confirmation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                      Your Name <span className="text-teal-700">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Michael Scott"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                      Company Name <span className="text-teal-700">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Mechanical Solutions"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                      Email Address <span className="text-teal-700">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. owner@apexmechanical.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 min-h-[44px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (555) 234-5678"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 min-h-[44px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Team Size Selection */}
                <div className="space-y-2 pt-2">
                  <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                    How many people may eventually use the Virtual HQ?
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {TEAM_SIZE_OPTIONS.map((size, idx) => {
                      const isSelected = formData.teamSize === size;
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setFormData({ ...formData, teamSize: size })}
                          className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer min-h-[44px] ${
                            isSelected
                              ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SECTION 2: About Your Business (New Section) */}
              <div className="space-y-6 pt-2">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="font-serif font-bold text-lg text-slate-950 flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-teal-700" />
                    <span>About Your Business</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Helps us structure the right room types, legal retention, and executive visibility.
                  </p>
                </div>

                {/* Industry Input */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                    What industry is your business in? <span className="text-teal-700">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    placeholder="e.g. Commercial HVAC, General Contracting, Specialty Dental, Property Management..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 min-h-[44px]"
                  />
                </div>

                {/* Operating Duration */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                    How long has the business been operating?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {YEARS_OPERATING_OPTIONS.map((years, idx) => {
                      const isSelected = formData.yearsOperating === years;
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setFormData({ ...formData, yearsOperating: years })}
                          className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer min-h-[44px] ${
                            isSelected
                              ? 'bg-teal-700 text-white border-teal-700 shadow-2xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {years}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tax Structure */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                    What is the company’s tax structure? <span className="text-slate-400 font-normal normal-case">(Form you file return on)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {TAX_STRUCTURE_OPTIONS.map((tax, idx) => {
                      const isSelected = formData.taxStructure === tax;
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setFormData({ ...formData, taxStructure: tax })}
                          className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer min-h-[44px] ${
                            isSelected
                              ? 'bg-teal-50 border-teal-700 text-teal-950 ring-1 ring-teal-700/30'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <span>{tax}</span>
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center border shrink-0 ml-2 ${
                              isSelected ? 'bg-teal-700 border-teal-700 text-white' : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {formData.taxStructure === 'Other' && (
                    <div className="pt-2">
                      <input
                        type="text"
                        value={formData.taxStructureOther || ''}
                        onChange={(e) => setFormData({ ...formData, taxStructureOther: e.target.value })}
                        placeholder="Please specify tax structure..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                      />
                    </div>
                  )}
                </div>

                {/* Future 3-7 Years Plans */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                    What does the business expect to do in the next 3–7 years? <span className="text-slate-400 font-normal normal-case">(Check all that apply)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {FUTURE_PLANS_OPTIONS.map((plan, idx) => {
                      const isChecked = formData.futurePlans.includes(plan);
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => toggleFuturePlan(plan)}
                          className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer min-h-[44px] ${
                            isChecked
                              ? 'bg-teal-50 border-teal-700 text-teal-950 ring-1 ring-teal-700/30'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          <span className="pr-2">{plan}</span>
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                              isChecked ? 'bg-teal-700 border-teal-700 text-white' : 'border-slate-300 bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {formData.futurePlans.includes('Other') && (
                    <div className="pt-2">
                      <input
                        type="text"
                        value={formData.futurePlansOther || ''}
                        onChange={(e) => setFormData({ ...formData, futurePlansOther: e.target.value })}
                        placeholder="Please specify other plan or intention..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                      />
                    </div>
                  )}
                </div>

                {/* Selling / Transitioning Timeline */}
                <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-2">
                  <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-800">
                    If selling, transitioning, or retiring is part of the plan, when might that happen?
                  </label>
                  <p className="text-[11px] text-slate-500">
                    A clean Virtual HQ significantly increases company valuation by proving the business runs smoothly without the owner in the day-to-day weeds.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-1">
                    {SELLING_TIMELINE_OPTIONS.map((time, idx) => {
                      const isSelected = formData.sellingTimeline === time;
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setFormData({ ...formData, sellingTimeline: isSelected ? '' : time })}
                          className={`p-2.5 rounded-xl border text-center text-xs font-medium transition-all cursor-pointer min-h-[44px] flex items-center justify-center ${
                            isSelected
                              ? 'bg-slate-900 text-white border-slate-900 shadow-2xs font-bold'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SECTION 3: Focus Areas to Bring Under Control */}
              <div className="space-y-3 pt-2">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="font-serif font-bold text-lg text-slate-950 flex items-center space-x-2">
                    <Sliders className="w-4 h-4 text-teal-700" />
                    <span>What Would You Most Like to Bring Under Control?</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    Check all priority departments or headaches you want organized first.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {FORM_AREAS_OPTIONS.map((area, idx) => {
                    const isChecked = formData.areasToControl.includes(area);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => toggleArea(area)}
                        className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer min-h-[44px] ${
                          isChecked
                            ? 'bg-teal-50 border-teal-700 text-teal-950 ring-1 ring-teal-700/30'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{area}</span>
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ml-2 ${
                            isChecked ? 'bg-teal-700 border-teal-700 text-white' : 'border-slate-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 4: Your Current Systems (Replaced Section) */}
              <div className="space-y-6 pt-2">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="font-serif font-bold text-lg text-slate-950 flex items-center space-x-2">
                    <Layers className="w-4 h-4 text-teal-700" />
                    <span>Your Current Systems</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    We map around the tools your business already pays for and knows how to use.
                  </p>
                </div>

                {/* Google Workspace question 1: Do you currently use Google Workspace? */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                    Do you currently use Google Workspace?
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Yes', 'No', 'Not sure'] as const).map((opt, idx) => {
                      const isSelected = formData.usesGoogleWorkspace === opt;
                      return (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setFormData({ ...formData, usesGoogleWorkspace: opt })}
                          className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all cursor-pointer min-h-[44px] ${
                            isSelected
                              ? 'bg-teal-700 text-white border-teal-700 shadow-2xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Google Workspace question 2 & 3: if yes */}
                {formData.usesGoogleWorkspace === 'Yes' && (
                  <div className="p-4 rounded-2xl bg-teal-50/40 border border-teal-200 space-y-4">
                    {/* Which subscription */}
                    <div className="space-y-2">
                      <label className="block text-xs font-bold font-mono uppercase tracking-wider text-teal-950">
                        If yes, which Google Workspace subscription do you have?
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {GOOGLE_WORKSPACE_SUBSCRIPTION_OPTIONS.map((sub, idx) => {
                          const isSelected = formData.googleWorkspaceSubscription === sub;
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => setFormData({ ...formData, googleWorkspaceSubscription: sub })}
                              className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer min-h-[44px] flex items-center justify-between ${
                                isSelected
                                  ? 'bg-teal-700 text-white border-teal-700 font-bold'
                                  : 'bg-white border-teal-200 text-slate-800 hover:border-teal-300'
                              }`}
                            >
                              <span className="truncate">{sub}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 shrink-0 ml-1 text-white" />}
                            </button>
                          );
                        })}
                      </div>

                      {formData.googleWorkspaceSubscription === 'Other' && (
                        <div className="pt-1">
                          <input
                            type="text"
                            value={formData.googleWorkspaceSubscriptionOther || ''}
                            onChange={(e) => setFormData({ ...formData, googleWorkspaceSubscriptionOther: e.target.value })}
                            placeholder="Specify subscription..."
                            className="w-full px-3.5 py-2 rounded-xl border border-teal-300 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-teal-700/20"
                          />
                        </div>
                      )}
                    </div>

                    {/* Which Google Workspace tools */}
                    <div className="space-y-2 pt-2 border-t border-teal-200/70">
                      <label className="block text-xs font-bold font-mono uppercase tracking-wider text-teal-950">
                        Which Google Workspace tools does your business currently use? <span className="text-teal-700 font-normal normal-case">(Check all that apply)</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                        {GOOGLE_WORKSPACE_TOOLS_OPTIONS.map((tool, idx) => {
                          const isChecked = formData.googleWorkspaceTools.includes(tool);
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => toggleGwTool(tool)}
                              className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between cursor-pointer min-h-[44px] ${
                                isChecked
                                  ? 'bg-white border-teal-700 text-teal-950 shadow-2xs ring-1 ring-teal-700/30'
                                  : 'bg-teal-50/50 border-teal-200 text-slate-700 hover:border-teal-300'
                              }`}
                            >
                              <span>{tool}</span>
                              <div
                                className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ml-1.5 ${
                                  isChecked ? 'bg-teal-700 border-teal-700 text-white' : 'border-teal-300 bg-white'
                                }`}
                              >
                                {isChecked && <Check className="w-3 h-3" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      {formData.googleWorkspaceTools.includes('Other') && (
                        <div className="pt-1">
                          <input
                            type="text"
                            value={formData.googleWorkspaceToolsOther || ''}
                            onChange={(e) => setFormData({ ...formData, googleWorkspaceToolsOther: e.target.value })}
                            placeholder="Specify other Google tools..."
                            className="w-full px-3.5 py-2 rounded-xl border border-teal-300 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-teal-700/20"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Which systems does your business currently use? (Table / Area list) */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-700">
                      Which systems does your business currently use?
                    </label>
                    <p className="text-xs text-slate-500">
                      Check any that apply, then list the system name in the space provided.
                    </p>
                  </div>

                  <div className="border border-slate-300 rounded-2xl overflow-hidden shadow-2xs divide-y divide-slate-200">
                    <div className="bg-slate-100 px-4 py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600">
                      <div className="sm:col-span-5">Business area</div>
                      <div className="sm:col-span-7">System name / notes</div>
                    </div>

                    {BUSINESS_SYSTEM_AREAS.map((area) => {
                      const currentValue = formData.businessSystems[area.id] || '';
                      return (
                        <div
                          key={area.id}
                          className="p-3 sm:px-4 sm:py-2.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:items-center hover:bg-slate-50/80 transition-colors"
                        >
                          <div className="sm:col-span-5 font-medium text-xs text-slate-900 flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                            <span>{area.label}</span>
                          </div>
                          <div className="sm:col-span-7">
                            <input
                              type="text"
                              value={currentValue}
                              onChange={(e) => handleSystemChange(area.id, e.target.value)}
                              placeholder={area.placeholder}
                              className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700 min-h-[38px]"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SECTION 5: Strategic Reflection Questions */}
              <div className="space-y-6 pt-2">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="font-serif font-bold text-lg text-slate-950 flex items-center space-x-2">
                    <Compass className="w-4 h-4 text-teal-700" />
                    <span>Operational Fit & Software Reduction</span>
                  </h3>
                  <p className="text-xs text-slate-500">
                    These two questions ensure we protect what works and build internal solutions for what frustrates you.
                  </p>
                </div>

                {/* Question 1: Systems working well */}
                <div className="space-y-2">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-800">
                      Which systems are working well and should stay in place?
                    </label>
                    <p className="text-xs text-slate-500 mt-0.5">
                      List any tools your team relies on and wants connected to the Virtual HQ.
                    </p>
                  </div>
                  <textarea
                    rows={2}
                    value={formData.systemsWorkingWell}
                    onChange={(e) => setFormData({ ...formData, systemsWorkingWell: e.target.value })}
                    placeholder="e.g. QuickBooks is dialed in with our bookkeeper; ServiceTitan stays for field dispatch; we just need easier owner access to invoices and summaries..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                  />
                </div>

                {/* Question 2: Systems to reduce or replace */}
                <div className="space-y-2">
                  <div>
                    <label className="block text-xs font-bold font-mono uppercase tracking-wider text-slate-800">
                      Is there a system, spreadsheet, manual process, or paid subscription you would like to reduce, replace, or eliminate if a better internal solution can be built?
                    </label>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tell us what it is, what it costs if known, and what is frustrating about it.
                    </p>
                  </div>
                  <textarea
                    rows={3}
                    value={formData.systemsToReplaceOrEliminate}
                    onChange={(e) => setFormData({ ...formData, systemsToReplaceOrEliminate: e.target.value })}
                    placeholder="e.g. We pay $350/mo for an over-complicated CRM nobody logs into, and 3 people are tracking equipment on separate Excel sheets on their laptops..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-700/20 focus:border-teal-700"
                  />
                </div>
              </div>

              {/* Error Box if needed */}
              {status === 'error' && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 min-h-[48px]"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Mapping Operations...' : 'LET’S MAP YOUR VIRTUAL HQ'}</span>
                </button>

                <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500 text-center">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>100% Confidential • Direct Owner Privacy • Applied to Your $4,750 Project Investment</span>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
