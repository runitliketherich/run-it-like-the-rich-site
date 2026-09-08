import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'ecosystem' | 'method' | 'software' | 'pricing';
}

interface FaqSectionProps {
  onOpenApply: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenApply }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FaqItem[] = [
    {
      category: 'ecosystem',
      question: 'How does Train the GAAP™ fit into "Run It Like the Rich" and The Virtual HQ™?',
      answer: 'Train the GAAP™ is the signature accounting mentorship and ledger hygiene advisory program within the "Run It Like the Rich — Business Insider Shares" ecosystem. While Run It Like the Rich provides high-level executive financial strategy and The Virtual HQ™ (TheHQ.online) serves as the digital back-office SOP hub, Train the GAAP™ is the hands-on 1-on-1 mentorship led by Laura Poincot that trains, reviews, and protects your in-house bookkeeper.'
    },
    {
      category: 'method',
      question: 'Why should I keep my in-house bookkeeper instead of outsourcing to a firm?',
      answer: 'Your in-house staff possesses irreplaceable daily operational context: they know your vendors, your customers, your team culture, and the real-world stories behind transactions. Outsourced bookkeeping "factories" rotate low-level junior staff who don’t know your business and simply auto-categorize bank feeds blindly. Train the GAAP™ preserves your trusted person and equips them with CPA-caliber review, GAAP consistency, and a senior accounting safety net.'
    },
    {
      category: 'software',
      question: 'Do we have to change our accounting software?',
      answer: 'No. Your QuickBooks Online (QBO) setup continues seamlessly. We build on top of your existing workflows, establish clean chart-of-accounts conventions, and include access to The Virtual HQ™ foundation for document archiving and SOPs. If you have custom intake or specialized transaction flows, our optional QuickIN™ tool can be integrated to accelerate ledger entry.'
    },
    {
      category: 'method',
      question: 'Does Train the GAAP™ replace our CPA or tax preparer?',
      answer: 'No—in fact, your CPA will thank you. Train the GAAP™ focuses on monthly bookkeeping precision, reconciliations, and documentation. When tax season arrives, your CPA receives an organized, audit-ready year-end package with verified balance sheet schedules, eliminating costly CPA cleanup hours and panic before filing deadlines.'
    },
    {
      category: 'method',
      question: 'What exactly is the ACT™ Method?',
      answer: 'The ACT™ Method is our proprietary three-lens decision framework: Audit (verifying business purpose and backup documentation), Consistency (applying standardized categorizations and balance-sheet logic across all fiscal periods), and Tax & Treatment (flagging special rules like section 179 depreciation, owner draws vs. compensation, and 1099 compliance before transactions are posted).'
    },
    {
      category: 'method',
      question: 'How much time will this require from the business owner vs. the employee?',
      answer: 'The owner participates primarily in the initial onboarding kickoff and periodic executive reviews. The weekly review cycles, hands-on ledger training, and office documentation are conducted directly with your in-house bookkeeper or office manager, freeing up the owner’s valuable time while giving them total transparency.'
    },
    {
      category: 'pricing',
      question: 'Why are client openings strictly limited?',
      answer: 'Every engagement is personally led and reviewed by Laura Poincot (25+ years of small-to-midsize business accounting experience). Because we provide genuine, high-touch 1-on-1 review, weekly mentorship calls, and custom SOP development, we intentionally cap active client rosters to maintain exceptional quality and executive depth.'
    },
    {
      category: 'pricing',
      question: 'What is the investment and billing structure?',
      answer: 'The program includes an Initial Foundation & Ledger Review ($3,000–$5,000 one-time depending on transaction volume and historical cleanup) followed by Ongoing Guidance & Oversight ($1,100–$2,000/month). This covers weekly 1-on-1 mentorship, continuous transaction reviews, Virtual HQ™ setup, and year-end CPA coordination.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'ecosystem', label: 'Ecosystem & Vision' },
    { id: 'method', label: 'The ACT™ Method & Role' },
    { id: 'software', label: 'Software & QBO' },
    { id: 'pricing', label: 'Investment & Openings' },
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#faf8f5] text-stone-900 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold font-serif-display text-stone-900 leading-tight">
            Everything you need to know about{' '}
            <span className="text-amber-800">Train the GAAP™</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Clear answers about the mentorship relationship, our place in the Run It Like the Rich ecosystem, and how we protect your team.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-800 text-white shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 hover:border-stone-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-amber-300 shadow-md ring-1 ring-amber-400/20'
                    : 'bg-white/80 border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-display font-bold text-base sm:text-lg text-stone-900 pr-2">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm sm:text-base text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-amber-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-stone-900 text-base">Have a unique business or ledger scenario?</h4>
              <p className="text-xs sm:text-sm text-stone-600">
                Reach out directly to Laura Poincot’s team at <a href="mailto:support@thehq.online" className="text-amber-800 font-semibold underline">support@thehq.online</a> or submit an application.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenApply}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-semibold text-sm shadow-sm transition-all"
          >
            <span>Apply for an opening</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
