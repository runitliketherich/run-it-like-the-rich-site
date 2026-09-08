import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RunwayPillars } from './components/RunwayPillars';
import { WhyStartEarly } from './components/WhyStartEarly';
import { SystemSix } from './components/SystemSix';
import { FinancialStory } from './components/FinancialStory';
import { VirtualHQSection } from './components/VirtualHQSection';
import { KeepTeamSection } from './components/KeepTeamSection';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ValuationCalculator } from './components/ValuationCalculator';
import { InvestmentPricing } from './components/InvestmentPricing';
import { AdvisorsSection } from './components/AdvisorsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ConsultModal } from './components/ConsultModal';
import { DownpayModal } from './components/DownpayModal';
import { ReceiptModal } from './components/ReceiptModal';
import { OrderConfirmation } from './types';
import { Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isConsultOpen, setIsConsultOpen] = useState<boolean>(false);
  const [isDownpayOpen, setIsDownpayOpen] = useState<boolean>(false);
  const [recentOrder, setRecentOrder] = useState<OrderConfirmation | null>(null);
  const [isReceiptOpen, setIsReceiptOpen] = useState<boolean>(false);

  const handleOrderSuccess = (confirmation: OrderConfirmation) => {
    setRecentOrder(confirmation);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 flex flex-col selection:bg-amber-500/20 selection:text-amber-900">
      
      {/* Persistent Top Notification Banner when booking/deposit occurs */}
      {recentOrder && (
        <div className="bg-amber-50 border-b border-amber-300 py-2.5 px-4 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
              <span className="text-slate-700">
                Active Record: <strong className="text-slate-900">{recentOrder.companyName}</strong> ({recentOrder.id})
              </span>
            </div>
            <button
              onClick={() => setIsReceiptOpen(true)}
              className="inline-flex items-center gap-1 text-amber-800 hover:text-amber-900 font-semibold cursor-pointer underline underline-offset-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Confirmed Record</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Header */}
      <Header
        onOpenConsult={() => setIsConsultOpen(true)}
        onOpenDownpay={() => setIsDownpayOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenConsult={() => setIsConsultOpen(true)}
          onOpenDownpay={() => setIsDownpayOpen(true)}
        />

        <RunwayPillars />

        <WhyStartEarly
          onOpenConsult={() => setIsConsultOpen(true)}
        />

        <SystemSix
          onOpenConsult={() => setIsConsultOpen(true)}
        />

        <FinancialStory
          onOpenConsult={() => setIsConsultOpen(true)}
        />

        <VirtualHQSection
          onOpenConsult={() => setIsConsultOpen(true)}
        />

        <KeepTeamSection />

        <RoadmapTimeline
          onOpenConsult={() => setIsConsultOpen(true)}
        />

        <ComparisonMatrix />

        <ValuationCalculator
          onOpenConsult={() => setIsConsultOpen(true)}
          onOpenDownpay={() => setIsDownpayOpen(true)}
        />

        <InvestmentPricing
          onOpenConsult={() => setIsConsultOpen(true)}
          onOpenDownpay={() => setIsDownpayOpen(true)}
        />

        <AdvisorsSection />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsult={() => setIsConsultOpen(true)}
        onOpenDownpay={() => setIsDownpayOpen(true)}
      />

      {/* Modals */}
      <ConsultModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        onSuccess={handleOrderSuccess}
      />

      <DownpayModal
        isOpen={isDownpayOpen}
        onClose={() => setIsDownpayOpen(false)}
        onSuccess={handleOrderSuccess}
      />

      <ReceiptModal
        confirmation={recentOrder}
        onClose={() => setIsReceiptOpen(false)}
      />

    </div>
  );
}
