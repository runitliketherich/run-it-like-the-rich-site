import React from 'react';
import { Layers, Globe, ShieldCheck, ArrowUpRight, Sparkles, Building, BookOpen, Check } from 'lucide-react';

export const BrandEcosystem: React.FC = () => {
  const ecosystemItems = [
    {
      badge: 'Executive Publisher & Media',
      title: 'Run It Like the Rich™',
      subtitle: 'Business Insider Shares',
      url: 'https://runitliketherich.com',
      urlLabel: 'runitliketherich.com',
      desc: 'The masterclass series, strategic wealth insights, and insider executive playbooks for scaling private enterprise.',
      role: 'Macro Strategy & Executive Playbooks',
      highlight: false,
      color: 'border-stone-300 bg-stone-50/80',
      icon: BookOpen
    },
    {
      badge: 'Digital Operating System',
      title: 'The Virtual HQ™',
      subtitle: 'Back-Office Foundation',
      url: 'https://TheHQ.online',
      urlLabel: 'TheHQ.online',
      desc: 'The central digital headquarters housing your standard operating procedures (SOPs), document archives, and core team workflows.',
      role: 'Operational Architecture & SOP Hub',
      highlight: false,
      color: 'border-amber-200/80 bg-amber-50/30',
      icon: Globe
    },
    {
      badge: 'Signature Advisory Program',
      title: 'Train the GAAP™',
      subtitle: 'In-House Bookkeeper Mentorship',
      url: '#apply',
      urlLabel: 'Currently Featured',
      desc: '1-on-1 accounting oversight, ledger hygiene, and continuous safety net backing up your loyal in-house staff.',
      role: 'Ledger Review, Mentorship & CPA Handoff',
      highlight: true,
      color: 'border-amber-400/90 bg-white ring-2 ring-amber-500/20 shadow-md',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-stone-100/70 border-y border-stone-200 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            <span>The Unified Business Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif-display text-stone-900">
            Part of <span className="text-amber-800">Run It Like the Rich™</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            A coordinated ecosystem designed by <strong className="text-stone-900">Laura Poincot</strong> to unite high-level business strategy, 
            digital office operations at <strong className="text-stone-900">TheHQ.online</strong>, and meticulous accounting mentorship.
          </p>
        </div>

        {/* 3 Ecosystem Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ecosystemItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${item.color}`}
              >
                {item.highlight && (
                  <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 text-white text-[11px] font-bold tracking-wide shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Active Advisory</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100/70 px-2.5 py-1 rounded-md">
                      {item.badge}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-amber-100/60 flex items-center justify-center text-amber-800">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif-display text-stone-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-stone-500 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-stone-200/80 flex items-center justify-between text-xs">
                  <span className="font-medium text-stone-500">Function:</span>
                  {item.url.startsWith('http') ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 underline underline-offset-2 hover:translate-x-0.5 transition-all"
                    >
                      {item.urlLabel}
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="font-bold text-amber-800">
                      {item.role}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Callout */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-700">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <span>
              <strong className="text-stone-900">Seamless Integration:</strong> Train the GAAP™ works in tandem with your QuickBooks Online (QBO) setup, includes your <span className="font-semibold text-amber-900">The Virtual HQ™</span> documentation portal, and offers optional <span className="font-semibold text-amber-900">QuickIN™</span> fast-import capabilities.
            </span>
          </div>
          <a
            href="https://TheHQ.online"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-amber-800 hover:text-amber-900 font-bold underline flex items-center gap-1"
          >
            Explore TheHQ.online <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
