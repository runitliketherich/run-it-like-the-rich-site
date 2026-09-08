import React, { useState } from 'react';
import { DownpaymentFormData, OrderConfirmation } from '../types';
import { 
  X, Sparkles, ShieldCheck, CheckCircle2, CreditCard, 
  Building2, ArrowRight, ArrowLeft, Lock, FileText, Check, Download 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DownpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (confirmation: OrderConfirmation) => void;
}

export const DownpayModal: React.FC<DownpayModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [confirmedData, setConfirmedData] = useState<OrderConfirmation | null>(null);

  const [formData, setFormData] = useState<DownpaymentFormData>({
    tier: 'foundation_standard',
    paymentMode: 'downpayment_retainer', // $1,500 vs full
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    estimatedRevenue: '$1M – $3M',
    targetRunway: '3–5 years',
    accountingSystem: 'QuickBooks Online (QBO)',
    existingBookkeeperName: 'Current internal bookkeeper',
    keepBookkeeper: true,
    virtualHqAdminName: '',
    paymentMethod: 'card',
    cardName: '',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '888',
    billingAddress: '',
    agreedToTerms: true
  });

  if (!isOpen) return null;

  const standardTotal = 3500;
  const enterpriseTotal = 5000;
  const totalAmount = formData.tier === 'foundation_standard' ? standardTotal : enterpriseTotal;
  const amountToPayNow = formData.paymentMode === 'downpayment_retainer' ? 1500 : totalAmount;
  const amountDueLater = totalAmount - amountToPayNow;

  const handleChange = (field: keyof DownpaymentFormData, val: any) => {
    setFormData(prev => ({ ...prev, [field]: val }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone) {
        alert('Please fill out the required company and contact information.');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      handleCompletePayment();
    }
  };

  const handleCompletePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const conf: OrderConfirmation = {
        id: `SBE-DEP-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'downpayment',
        timestamp: new Date().toISOString(),
        customerName: formData.contactName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        details: {
          tierName: formData.tier === 'foundation_standard' ? 'StoryBookExit™ Standard Foundation Build' : 'StoryBookExit™ Enterprise Foundation Build',
          amountPaid: amountToPayNow,
          amountDueLater: amountDueLater,
          targetRunway: formData.targetRunway,
          nextMilestoneDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
        }
      };
      setConfirmedData(conf);
      setStep(4);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 }
      });
      onSuccess(conf);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center text-amber-900">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono-code text-amber-800 tracking-wider font-bold block">
                Direct Runway Enrollment
              </span>
              <h3 className="text-xl font-serif-editorial font-bold text-slate-900">
                Downpay & Lock Your Build Slot
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
              <span className={step === 1 ? 'text-slate-900 font-semibold' : 'text-slate-500'}>Select Package</span>
            </div>
            <div className="h-[1px] w-6 bg-stone-300" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono-code text-[11px] font-bold ${
                step === 2 ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-stone-200 text-slate-600'
              }`}>2</span>
              <span className={step === 2 ? 'text-slate-900 font-semibold' : 'text-slate-500'}>Intake Details</span>
            </div>
            <div className="h-[1px] w-6 bg-stone-300" />
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono-code text-[11px] font-bold ${
                step === 3 ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-stone-200 text-slate-600'
              }`}>3</span>
              <span className={step === 3 ? 'text-slate-900 font-semibold' : 'text-slate-500'}>Secure Lock-In</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {/* STEP 1: Select Tier and Deposit Mode */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-6">
              
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                  Choose Foundation Build Tier:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Standard Foundation */}
                  <div
                    onClick={() => handleChange('tier', 'foundation_standard')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.tier === 'foundation_standard'
                        ? 'bg-amber-50/50 border-amber-500 ring-1 ring-amber-400/40 shadow-xs'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">Standard Foundation</span>
                      <span className="text-sm font-serif-editorial font-bold text-amber-800">$3,500</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Single operating entity. Financial baseline, Chart of Accounts cleanup, Virtual HQ™ core foundation & 3–7 year roadmap.
                    </p>
                  </div>

                  {/* Enterprise Foundation */}
                  <div
                    onClick={() => handleChange('tier', 'foundation_enterprise')}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.tier === 'foundation_enterprise'
                        ? 'bg-amber-50/50 border-amber-500 ring-1 ring-amber-400/40 shadow-xs'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">Enterprise / Multi-Entity</span>
                      <span className="text-sm font-serif-editorial font-bold text-amber-800">$5,000</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed">
                      Multi-entity holding company or complex divisions. Advanced QuickIN™ consolidation & custom due diligence data room.
                    </p>
                  </div>

                </div>
              </div>

              {/* Payment Mode (Downpay $1,500 vs Full) */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
                  Select Payment Arrangement:
                </label>
                <div className="space-y-3">
                  
                  <div
                    onClick={() => handleChange('paymentMode', 'downpayment_retainer')}
                    className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      formData.paymentMode === 'downpayment_retainer'
                        ? 'bg-amber-50/60 border-amber-500 ring-1 ring-amber-400/40 shadow-xs'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        formData.paymentMode === 'downpayment_retainer' ? 'border-amber-500 bg-amber-400 text-slate-950' : 'border-stone-400'
                      }`}>
                        {formData.paymentMode === 'downpayment_retainer' && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          Pay $1,500 Downpayment Retainer Now
                        </span>
                        <span className="text-[11px] text-slate-600">
                          Locks your onboarding sprint slot immediately. Remaining balance (${amountDueLater.toLocaleString()}) billed upon kickoff.
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-mono-code font-bold text-amber-800 shrink-0">$1,500</span>
                  </div>

                  <div
                    onClick={() => handleChange('paymentMode', 'full_upfront')}
                    className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                      formData.paymentMode === 'full_upfront'
                        ? 'bg-amber-50/60 border-amber-500 ring-1 ring-amber-400/40 shadow-xs'
                        : 'bg-stone-50 border-stone-200 hover:border-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        formData.paymentMode === 'full_upfront' ? 'border-amber-500 bg-amber-400 text-slate-950' : 'border-stone-400'
                      }`}>
                        {formData.paymentMode === 'full_upfront' && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-900 block">
                          Pay Full Build Upfront (${totalAmount.toLocaleString()})
                        </span>
                        <span className="text-[11px] text-slate-600">
                          Complete one-time setup paid in full with expedited queue priority.
                        </span>
                      </div>
                    </div>
                    <span className="text-sm font-mono-code font-bold text-amber-800 shrink-0">${totalAmount.toLocaleString()}</span>
                  </div>

                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-colors shadow-xs border border-amber-500"
                >
                  <span>Continue to Company Intake</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 2: Company Intake */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Legal Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Industrial Systems Inc"
                    value={formData.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Authorized Signer / Owner *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={formData.contactName}
                    onChange={(e) => handleChange('contactName', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
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
                    placeholder="marcus@apexsystems.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 482-9901"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Current Bookkeeper / Staff Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah Jenkins (Bookkeeper)"
                    value={formData.existingBookkeeperName}
                    onChange={(e) => handleChange('existingBookkeeperName', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Target Runway Timeline
                  </label>
                  <select
                    value={formData.targetRunway}
                    onChange={(e) => handleChange('targetRunway', e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-amber-500 shadow-xs"
                  >
                    <option value="5–7 years">5–7 years</option>
                    <option value="3–5 years">3–5 years</option>
                    <option value="2–3 years">2–3 years</option>
                    <option value="12–24 months">12–24 months</option>
                  </select>
                </div>
              </div>

              {/* Team Retention Confirmation */}
              <div className="p-3.5 rounded-lg bg-emerald-50 border border-emerald-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-800">
                  <strong>Existing staff continuity:</strong> StoryBookExit™ will integrate with and empower your existing bookkeeper and managers rather than replacing them.
                </span>
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
                  <span>Review & Lock In (${amountToPayNow.toLocaleString()})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* STEP 3: Secure Payment Simulation */}
          {step === 3 && (
            <form onSubmit={handleNext} className="space-y-5">
              
              {/* Summary of charges */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 shadow-xs">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Package:</span>
                  <span className="font-semibold text-slate-900">
                    {formData.tier === 'foundation_standard' ? 'Standard Foundation Build' : 'Enterprise Multi-Entity Build'}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Total Setup Investment:</span>
                  <span className="text-slate-700 font-mono-code">${totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-bold border-t border-stone-200 pt-2">
                  <span className="text-amber-800">Due Today (Downpayment):</span>
                  <span className="text-amber-800 font-mono-code">${amountToPayNow.toLocaleString()}</span>
                </div>
                {amountDueLater > 0 && (
                  <div className="text-[11px] text-slate-600">
                    Remaining balance of ${amountDueLater.toLocaleString()} scheduled upon kickoff review.
                  </div>
                )}
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Payment Method:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => handleChange('paymentMethod', 'card')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      formData.paymentMethod === 'card' ? 'bg-amber-400 border-amber-500 text-slate-950 shadow-xs' : 'bg-white border-stone-300 text-slate-700 hover:border-stone-400'
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleChange('paymentMethod', 'ach')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      formData.paymentMethod === 'ach' ? 'bg-amber-400 border-amber-500 text-slate-950 shadow-xs' : 'bg-white border-stone-300 text-slate-700 hover:border-stone-400'
                    }`}
                  >
                    <span>Bank ACH / Wire</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleChange('paymentMethod', 'invoice')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer transition-all ${
                      formData.paymentMethod === 'invoice' ? 'bg-amber-400 border-amber-500 text-slate-950 shadow-xs' : 'bg-white border-stone-300 text-slate-700 hover:border-stone-400'
                    }`}
                  >
                    <span>Company Invoice</span>
                  </button>
                </div>
              </div>

              {/* Card Inputs */}
              {formData.paymentMethod === 'card' && (
                <div className="space-y-3 p-4 rounded-xl bg-stone-50 border border-stone-200">
                  <div>
                    <label className="block text-[11px] font-mono-code uppercase text-slate-600 mb-1">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder={formData.contactName || "Marcus Vance"}
                      defaultValue={formData.contactName}
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded text-xs text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-code uppercase text-slate-600 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full px-3 py-2 bg-white border border-stone-300 rounded text-xs text-slate-900 font-mono-code"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono-code uppercase text-slate-600 mb-1">
                        Expiry
                      </label>
                      <input
                        type="text"
                        defaultValue="12/28"
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded text-xs text-slate-900 font-mono-code"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-code uppercase text-slate-600 mb-1">
                        CVC / CVV
                      </label>
                      <input
                        type="text"
                        defaultValue="888"
                        className="w-full px-3 py-2 bg-white border border-stone-300 rounded text-xs text-slate-900 font-mono-code"
                      />
                    </div>
                  </div>
                </div>
              )}

              {formData.paymentMethod === 'ach' && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-slate-700 space-y-2">
                  <span className="font-semibold text-amber-900 block">Bank ACH / Wire Instructions</span>
                  <p>Upon confirming, an encrypted ACH transfer link and wire instructions for StoryBookExit LLC / TheHQ.online will be sent to <strong>{formData.email}</strong>.</p>
                </div>
              )}

              {formData.paymentMethod === 'invoice' && (
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-slate-700 space-y-2">
                  <span className="font-semibold text-amber-900 block">Net-15 Corporate Invoice</span>
                  <p>A formal invoice with PO support will be generated and emailed to <strong>{formData.email}</strong> with your slot reserved immediately.</p>
                </div>
              )}

              {/* Agreement */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="agree-terms"
                  checked={formData.agreedToTerms}
                  onChange={(e) => handleChange('agreedToTerms', e.target.checked)}
                  className="mt-1 accent-amber-600"
                />
                <label htmlFor="agree-terms" className="text-[11px] text-slate-600">
                  I agree to the StoryBookExit™ terms of engagement and authorize the ${amountToPayNow.toLocaleString()} downpayment deposit to secure our onboarding slot.
                </label>
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
                  disabled={isProcessing}
                  className="px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold rounded-lg text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all shadow-md border border-amber-500"
                >
                  {isProcessing ? (
                    <span>Processing Downpayment...</span>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Authorize ${amountToPayNow.toLocaleString()} & Lock Slot</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

          {/* STEP 4: Success Confirmation */}
          {step === 4 && confirmedData && (
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center mx-auto shadow-sm">
                <Sparkles className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono-code text-amber-800 font-bold uppercase tracking-wider block mb-1">
                  Deposit Confirmed • {confirmedData.id}
                </span>
                <h3 className="text-2xl font-serif-editorial font-bold text-slate-900">
                  Build Slot Reserved Successfully!
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Thank you, <strong className="text-slate-900">{formData.contactName}</strong>. Your Initial Foundation & Readiness Build slot is locked for <strong className="text-slate-900">{formData.companyName}</strong>.
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-slate-500">Amount Paid Today:</span>
                  <span className="font-semibold text-amber-800 font-mono-code text-sm">
                    ${confirmedData.details.amountPaid?.toLocaleString()}
                  </span>
                </div>
                {confirmedData.details.amountDueLater && confirmedData.details.amountDueLater > 0 ? (
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-slate-500">Remaining Build Balance:</span>
                    <span className="text-slate-600 font-mono-code">${confirmedData.details.amountDueLater.toLocaleString()}</span>
                  </div>
                ) : null}
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-slate-500">Kickoff Date:</span>
                  <span className="font-semibold text-slate-900 font-mono-code">{confirmedData.details.nextMilestoneDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lead Advisor:</span>
                  <span className="text-amber-800 font-medium">StoryBookExit™ Principal Lead</span>
                </div>
              </div>

              {/* Next Steps Checklist */}
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
                <span className="font-semibold text-slate-900 block">Immediate Next Steps:</span>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Onboarding intake dossier emailed to {formData.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Virtual HQ™ secure sandbox provisioned for your team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Initial 1-on-1 financial baseline alignment call</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer border border-amber-500 shadow-xs"
                >
                  <span>Done / View Dashboard</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
