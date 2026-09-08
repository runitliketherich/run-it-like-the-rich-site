import React from 'react';
import { OrderConfirmation } from '../types';
import { X, CheckCircle2, Download, Printer, ShieldCheck, Sparkles, Building2, Calendar, FileText } from 'lucide-react';

interface ReceiptModalProps {
  confirmation: OrderConfirmation | null;
  onClose: () => void;
}

export const ReceiptModal: React.FC<ReceiptModalProps> = ({ confirmation, onClose }) => {
  if (!confirmation) return null;

  const isDeposit = confirmation.type === 'downpayment';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white border border-stone-200 rounded-2xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-stone-200 bg-stone-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-900 font-serif-editorial font-bold">
              SBE
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono-code text-amber-800 tracking-wider font-bold block">
                Official Document & Record
              </span>
              <h3 className="text-xl font-serif-editorial font-bold text-slate-900">
                {isDeposit ? 'Deposit & Reservation Receipt' : 'Readiness Review Confirmation'}
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

        {/* Printable Receipt Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center justify-between p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div>
              <span className="text-[10px] font-mono-code text-slate-500 uppercase font-bold">Document ID</span>
              <div className="text-sm font-mono-code font-bold text-amber-800">{confirmation.id}</div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono-code text-slate-500 uppercase font-bold">Date Issued</span>
              <div className="text-xs text-slate-700 font-mono-code">
                {new Date(confirmation.timestamp).toLocaleDateString()}
              </div>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-slate-500">Client Organization:</span>
              <span className="font-semibold text-slate-900">{confirmation.companyName}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-slate-500">Principal Signer:</span>
              <span className="font-semibold text-slate-900">{confirmation.customerName}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200 pb-2">
              <span className="text-slate-500">Email:</span>
              <span className="text-slate-700 font-mono-code">{confirmation.email}</span>
            </div>
            {confirmation.phone && (
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-slate-500">Phone:</span>
                <span className="text-slate-700 font-mono-code">{confirmation.phone}</span>
              </div>
            )}

            {isDeposit ? (
              <>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="text-amber-800 font-semibold">{confirmation.details.tierName}</span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-slate-500">Retainer Paid:</span>
                  <span className="text-emerald-700 font-bold font-mono-code text-sm">
                    ${confirmation.details.amountPaid?.toLocaleString()} USD
                  </span>
                </div>
                {confirmation.details.amountDueLater ? (
                  <div className="flex justify-between border-b border-stone-200 pb-2">
                    <span className="text-slate-500">Balance Due at Kickoff:</span>
                    <span className="text-slate-600 font-mono-code">
                      ${confirmation.details.amountDueLater?.toLocaleString()} USD
                    </span>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-slate-500">Appointment Date:</span>
                  <span className="text-slate-900 font-mono-code font-bold">
                    {confirmation.details.appointmentDate} at {confirmation.details.appointmentTime}
                  </span>
                </div>
                <div className="flex justify-between border-b border-stone-200 pb-2">
                  <span className="text-slate-500">Timezone:</span>
                  <span className="text-slate-700">{confirmation.details.timezone}</span>
                </div>
              </>
            )}
          </div>

          <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 text-[11px] text-slate-600 leading-relaxed">
            StoryBookExit™ is a service of runitliketherich.com and TheHQ.online. For questions regarding your engagement or documentation, please contact <strong className="text-slate-800">support@thehq.online</strong>.
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer border border-stone-300 shadow-xs"
            >
              <Printer className="w-3.5 h-3.5 text-amber-700" />
              <span>Print Document</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg text-xs font-bold cursor-pointer border border-amber-500 shadow-xs"
            >
              <span>Close</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
