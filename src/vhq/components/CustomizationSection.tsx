import React from 'react';
import {
  Wrench,
  Building,
  Truck,
  Briefcase,
  Store,
  Layers,
  Compass,
  Hammer,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface CustomizationSectionProps {
  onScrollToForm: () => void;
}

export const CustomizationSection: React.FC<CustomizationSectionProps> = ({
  onScrollToForm,
}) => {
  const BUSINESS_EXAMPLES = [
    { type: 'General Contractor', needs: 'Job stages, sub agreements, permit deadlines, photo logs' },
    { type: 'Property Company', needs: 'Lease expiries, tenant maintenance requests, unit keys, vendor contacts' },
    { type: 'Wholesale / Distributor', needs: 'PO status, inventory reorders, fleet maintenance, vendor pricelists' },
    { type: 'Professional Office', needs: 'Client files, billing pulses, compliance deadlines, recurring SOPs' },
  ];

  const STEPS = [
    {
      number: '1',
      title: 'MAP IT',
      desc: 'We identify the systems, files, responsibilities, recurring processes and information the owner needs visibility into.',
    },
    {
      number: '2',
      title: 'BUILD IT',
      desc: 'We assemble the right Virtual HQ modules and customize them around the business.',
    },
    {
      number: '3',
      title: 'USE IT',
      desc: 'The owner gets one dependable starting point and can gradually bring the team into the system.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-teal-400" />
            <span>Tailored Implementation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight">
            NOT AN OFF-THE-SHELF SYSTEM. <br />
            <span className="text-teal-800">YOUR SYSTEM.</span>
          </h2>

          <div className="text-base sm:text-lg text-slate-600 font-normal space-y-2 max-w-2xl mx-auto leading-relaxed">
            <p className="font-semibold text-slate-800">Every business operates differently.</p>
            <p>
              A contractor does not need the same HQ as a property company. A distributor does not need the same HQ as a professional office. A multi-location business does not need the same system as an owner-operated company.
            </p>
            <p className="text-slate-900 font-serif font-bold pt-1">
              We start with the way your business actually works. Then we determine what belongs in your HQ.
            </p>
          </div>
        </div>

        {/* Business Industry Differences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {BUSINESS_EXAMPLES.map((b, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-teal-600 transition-colors space-y-2"
            >
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-800">
                {b.type}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {b.needs}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Step Turnkey Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#FBFBF7] border border-slate-300 shadow-2xs space-y-4 relative"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-950 text-white flex items-center justify-center font-mono font-bold text-base">
                  {step.number}
                </div>
                <h3 className="font-serif font-bold text-xl text-slate-950 tracking-tight">
                  {step.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>

              <div className="pt-2 flex items-center space-x-1.5 text-xs font-semibold text-teal-800">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Zero workflow disruption</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onScrollToForm}
            className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            <span>MAP YOUR CUSTOM VIRTUAL HQ</span>
            <ArrowRight className="w-4 h-4 text-teal-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
