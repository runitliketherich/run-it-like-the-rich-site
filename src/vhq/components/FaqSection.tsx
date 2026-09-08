import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingData';
import { BRAND_CONFIG } from '../config';

interface FaqSectionProps {
  onScrollToForm: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onScrollToForm }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight">
            Clear Answers for Business Owners
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Everything you need to know about how a Virtual HQ™ is structured, deployed, and controlled.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white border-teal-600 shadow-sm ring-1 ring-teal-600/20'
                    : 'bg-white border-slate-300/80 hover:border-slate-400'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold font-serif text-slate-950 pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-300 text-center space-y-3 shadow-2xs">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Have a question about a specific workflow in your business?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${BRAND_CONFIG.email}`}
              className="inline-flex items-center space-x-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Email: {BRAND_CONFIG.email}</span>
            </a>
            <button
              onClick={onScrollToForm}
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-teal-800 hover:underline cursor-pointer"
            >
              <span>Or map your business directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
