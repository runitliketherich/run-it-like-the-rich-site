import React, { useState } from 'react';
import { Mail, Globe, ArrowUpRight, ShieldCheck, CheckCircle2, Send, Sparkles, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
    // Persist or log locally
    try {
      const existing = JSON.parse(localStorage.getItem('tg_subscribers') || '[]');
      existing.push({ email, date: new Date().toISOString() });
      localStorage.setItem('tg_subscribers', JSON.stringify(existing));
    } catch {
      // safe fallback
    }
  };

  return (
    <footer className="bg-[#f5f3ed] text-stone-800 border-t border-stone-300/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Newsletter Card: "Accounting Tips & Insights" */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-amber-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Newsletter Copy */}
            <div className="lg:col-span-6 space-y-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Executive Newsletter</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-display text-stone-900">
                Accounting Tips & Insights
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl">
                Get tactical weekly guidance on GAAP compliance, bookkeeper oversight, cash flow safeguards, and internal controls for growing private companies.
              </p>
              <p className="text-xs text-amber-800/90 font-semibold flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Includes free download: The 12-Point Month-End Closing Checklist</span>
              </p>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="lg:col-span-6">
              {subscribed ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-start gap-4 animate-fadeIn">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="font-bold text-base">You’re subscribed!</h4>
                    <p className="text-sm text-emerald-800">
                      Thank you for joining. Look for our latest Accounting Tips & Insights and your month-end checklist at <span className="font-semibold">{email}</span>.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    <div className="relative flex-grow">
                      <Mail className="w-5 h-5 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your work email..."
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-amber-600 focus:bg-white focus:ring-2 focus:ring-amber-500/20 text-stone-900 text-sm placeholder:text-stone-400 outline-none transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-800 hover:bg-amber-900 active:scale-[0.98] text-white font-bold text-sm shadow-sm transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span>Subscribe</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-red-600 font-medium pl-1">
                      {errorMsg}
                    </p>
                  )}

                  <div className="flex items-center gap-2 text-[11px] text-stone-500 pl-1">
                    <Lock className="w-3 h-3 text-stone-400" />
                    <span>Zero spam. Direct insights from Laura Poincot. Unsubscribe anytime.</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-800 border border-amber-700 flex items-center justify-center text-amber-200 font-bold font-brand-badge text-lg shadow-sm">
                TG
              </div>
              <div>
                <h3 className="font-serif-display text-xl font-bold text-stone-900">
                  Train the GAAP™
                </h3>
                <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider">
                  Accounting mentorship & back-office support
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-600 max-w-md leading-relaxed">
              Backing up your loyal internal team with experienced 1-on-1 accounting review, 
              systems training, and back-office documentation.
            </p>

            <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-700 space-y-1 max-w-md">
              <p className="font-bold text-stone-900">The Business Insider Shares Ecosystem:</p>
              <p>
                Part of the <a href="https://runitliketherich.com" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-800 hover:text-amber-900 underline">Run It Like the Rich™</a> series by <a href="https://TheHQ.online" target="_blank" rel="noopener noreferrer" className="font-bold text-amber-800 hover:text-amber-900 underline">The Virtual HQ™ (TheHQ.online)</a>.
              </p>
            </div>
          </div>

          {/* Direct Contact & Quick Links Column */}
          <div className="md:col-span-6 flex flex-col md:items-end space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center md:justify-end gap-2 text-stone-800 font-medium">
                <Mail className="w-4 h-4 text-amber-700" />
                <a href="mailto:support@thehq.online" className="hover:text-amber-900 underline transition-colors">
                  support@thehq.online
                </a>
                <span className="text-stone-300">•</span>
                <Globe className="w-4 h-4 text-amber-700" />
                <a href="https://TheHQ.online" target="_blank" rel="noopener noreferrer" className="hover:text-amber-900 underline transition-colors">
                  TheHQ.online
                </a>
              </div>
            </div>

            <div className="flex flex-wrap md:justify-end gap-x-5 gap-y-2 text-xs font-semibold text-stone-600">
              <a href="/" className="hover:text-amber-800 transition-colors">Run It Like the Rich</a>
              <a href="/vhq" className="hover:text-amber-800 transition-colors">Virtual HQ™</a>
              <a href="/storybook-exit" className="hover:text-amber-800 transition-colors">StoryBookExit™</a>
              <a href="#who-its-for" className="hover:text-amber-800 transition-colors">Who It’s For</a>
              <a href="#the-act-method" className="hover:text-amber-800 transition-colors">The ACT™ Method</a>
              <a href="#how-it-works" className="hover:text-amber-800 transition-colors">How It Works</a>
              <a href="#whats-included" className="hover:text-amber-800 transition-colors">What’s Included</a>
              <a href="#pricing" className="hover:text-amber-800 transition-colors">Investment</a>
              <a href="#faq" className="hover:text-amber-800 transition-colors text-amber-800">FAQ</a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 text-[11px] sm:text-xs text-stone-600 leading-relaxed space-y-1">
          <p className="font-semibold text-stone-900">Professional Coordination Notice:</p>
          <p>
            Train the GAAP™ provides accounting support, training, workflow improvement, and CPA coordination. 
            Legal and tax matters requiring licensed counsel or formal tax-preparer attestation are referred to or coordinated with the appropriate certified professional.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-stone-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} The Virtual HQ™. All rights reserved. Train the GAAP™ is a trademark of The Virtual HQ™.</p>
          <p className="flex items-center gap-1 font-medium">
            <span>Run It Like the Rich™ — Business Insider Shares</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
