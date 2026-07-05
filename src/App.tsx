import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Calculator, 
  CheckCircle, 
  TrendingUp, 
  ShieldCheck, 
  BookOpen, 
  Video, 
  Download, 
  ShoppingBag, 
  PhoneCall, 
  Check, 
  ExternalLink,
  ChevronRight,
  Folder,
  FileText,
  Lock,
  Calendar,
  AlertCircle,
  HelpCircle,
  Users,
  Facebook,
  Linkedin,
  Instagram,
  Youtube
} from 'lucide-react';

import Navbar from './components/Navbar';
import Scorecard from './components/Scorecard';
import BookingModal from './components/BookingModal';
import NewsletterModal from './components/NewsletterModal';
import TaglineEngine from './components/TaglineEngine';

import { START_HERE_CARDS, LAURA_OFFERS } from './data';

export default function App() {
  // Modal states
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [bookingService, setBookingService] = useState<string>('checkup');
  const [newsletterOpen, setNewsletterOpen] = useState<boolean>(false);
  const [newsletterTitle, setNewsletterTitle] = useState<string>('Join the Weekly Reset');
  const [newsletterDesc, setNewsletterDesc] = useState<string>('Weekly owner ideas, money routines, clean books, and back-office guidelines delivered direct.');

  // Custom Toast State
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Interactive UI states
  const [activeVhqTab, setActiveVhqTab] = useState<string>('admin');

  const showToast = (message: string) => {
    setToastMessage(message);
    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 4500);
    return () => clearTimeout(timer);
  };

  const openBooking = (serviceId: string = 'checkup') => {
    setBookingService(serviceId);
    setBookingOpen(true);
  };

  const openNewsletter = (title?: string, desc?: string) => {
    if (title) setNewsletterTitle(title);
    if (desc) setNewsletterDesc(desc);
    setNewsletterOpen(true);
  };

  const handleScrollTo = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mock downloads data
  const DOWNLOADABLE_TOOLS = [
    { id: 'scorecard-pdf', name: 'ABC Owner Scorecard PDF', price: 'FREE', desc: 'The offline audit sheets and scoring rubric for team resets.', type: 'PDF Checklist' },
    { id: 'cash-snap', name: 'Weekly Cash Flow Snapshot Tracker', price: '$29', desc: 'A simple spreadsheet model to monitor weekly tax reserves, net burn, and owner allocations.', type: 'Excel/Sheets' },
    { id: 'compliance-cal', name: '12-Month Compliance Calendar Roadmap', price: '$19', desc: 'Pre-mapped deadlines for annual reports, payroll tax, 1099s, and insurance renewals.', type: 'ICS / PDF' },
    { id: 'google-drive-sop', name: 'The Virtual HQ Google Drive Folder Structure', price: '$49', desc: 'A downloadable skeleton template to structure your admin files in Google Drive instantly.', type: 'Drive Template' }
  ];

  // Mock merch data
  const MERCH_ITEMS = [
    { id: 'm1', name: '“Simple Systems. Clean Books.” Desk Notebook', price: '$18', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400', desc: 'Premium hard-cover lined canvas journal for weekly planning blocks.' },
    { id: 'm2', name: '“Run the business from facts, not fog” Mug', price: '$15', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400', desc: 'Heavyweight matte black ceramic mug designed for owner routines.' },
    { id: 'm3', name: 'The Owner Compliance Slate Rules Card', price: '$12', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400', desc: 'Heavy solid metal card summarizing your weekly metrics and reminders.' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-accent selection:text-white">
      {/* Dynamic Nav Bar */}
      <Navbar onOpenBooking={openBooking} onOpenNewsletter={() => openNewsletter()} />

      {/* 1. HERO SECTION */}
      <header className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-paper overflow-hidden" id="hero">
        {/* Abstract structural grid line backgrounds */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" id="hero-background-grid">
          <div className="absolute top-0 left-1/4 w-px h-full bg-accent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-accent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-accent" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-accent" />
          <div className="absolute top-2/3 left-0 w-full h-px bg-accent" />
        </div>

        {/* Ambient background blur */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[140px] pointer-events-none" id="ambient-radial" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10" id="hero-content">
          {/* Subtle gold badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-accent-light border border-accent/20 rounded-full mb-6" id="hero-mini-badge">
            <Sparkles className="w-3.5 h-3.5 text-accent-dark" />
            <span className="font-mono text-[9px] tracking-widest uppercase text-accent-dark font-bold">The Back-Office Reset for Small Businesses</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif-display text-ink font-bold tracking-tight leading-[1.1] mb-6" id="hero-headline">
            Run It Like <br className="sm:hidden" />
            <span className="text-accent">the Rich</span>
          </h1>

          <p className="text-xl md:text-2xl font-serif text-ink/80 italic tracking-wide mb-3" id="hero-subheadline">
            “Simple systems. Clean books. Compliance under control.”
          </p>

          <p className="text-sm md:text-base text-ink/60 max-w-2xl mx-auto leading-relaxed mb-10 font-sans" id="hero-body">
            A practical back-office reset for small business owners who built their business before they built their back office. Clean up scattered files, messy books, and late reminders starting today.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto mb-12" id="hero-ctas">
            <a
              href="#scorecard"
              onClick={(e) => handleScrollTo('scorecard-section', e)}
              className="w-full sm:w-auto px-6 py-4 bg-ink hover:bg-accent text-paper hover:text-white font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all shadow-md flex items-center justify-center space-x-2"
              id="btn-hero-scorecard"
            >
              <span>Free Owner Scorecard</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#downloads"
              onClick={(e) => handleScrollTo('start-here', e)}
              className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-paper border border-ink/15 text-ink font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2"
              id="btn-hero-tools"
            >
              <span>Shop Owner Tools</span>
            </a>
            <a
              href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-black/5 border border-dashed border-ink/20 hover:border-accent text-ink/70 hover:text-ink font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all flex items-center justify-center space-x-2"
              id="btn-hero-booking"
            >
              <PhoneCall className="w-3.5 h-3.5 text-accent" />
              <span>Book a Checkup</span>
            </a>
          </div>

          {/* Credibility line */}
          <div className="border-t border-ink/8 pt-8 max-w-md mx-auto" id="hero-credibility">
            <p className="text-[10px] font-mono text-ink/40 uppercase tracking-widest leading-relaxed font-bold">
              Built from 25+ years of hands-on accounting, operations, compliance, and owner support experience.
            </p>
          </div>
        </div>
      </header>


      {/* 2. WHAT THIS IS SECTION */}
      <section className="py-20 md:py-28 bg-white border-y border-ink/8 relative" id="what-this-is">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="what-this-is-grid">
            
            {/* Title & Body Column */}
            <div className="lg:col-span-5 space-y-6 text-left" id="what-this-is-left-col">
              <span className="font-mono text-xs tracking-wider uppercase text-accent-dark font-bold block">The Premise</span>
              <h2 className="text-3xl md:text-4xl font-serif-display text-ink font-bold tracking-tight leading-tight" id="what-this-is-heading">
                You do not need more chaos. <br className="hidden md:inline" />
                You need a system.
              </h2>
              <div className="space-y-4 text-ink/60 text-sm leading-relaxed" id="what-this-is-body">
                <p>
                  Most owners do not have a business problem. They have a back-office problem. The sales are happening, the customers are there, the work is getting done — but the admin, books, documents, reports, and compliance are scattered.
                </p>
                <p>
                  <strong className="text-ink font-semibold">Run It Like the Rich</strong> helps owners clean up the operating backbone of the business so they can make better decisions, stay compliant, and stop guessing.
                </p>
              </div>

              {/* Bottom Mini KPI */}
              <div className="pt-6 border-t border-ink/10" id="what-this-is-bullet-stat">
                <p className="font-mono text-[10px] text-ink/40 uppercase tracking-widest font-bold">The Result</p>
                <p className="text-lg font-serif-display text-ink font-bold mt-1">Full back-office control in weeks, not years.</p>
              </div>
            </div>

            {/* Three Cards Column */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6" id="what-this-is-cards-col">
              {/* Card 1 */}
              <div className="bg-paper border border-ink/10 p-6 rounded-sm text-left space-y-4 group hover:border-accent transition-all" id="what-is-card-1">
                <div className="w-10 h-10 rounded-sm bg-accent-light border border-accent/20 flex items-center justify-center text-accent-dark" id="what-is-card-1-icon">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif-display text-ink font-bold" id="what-is-card-1-title">Simple Systems</h3>
                <p className="text-xs text-ink/60 leading-relaxed" id="what-is-card-1-body">
                  Consolidated directories, clean password management, simple shared inbox structures, and absolute routine playbooks.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-paper border border-ink/10 p-6 rounded-sm text-left space-y-4 group hover:border-accent transition-all" id="what-is-card-2">
                <div className="w-10 h-10 rounded-sm bg-accent-light border border-accent/20 flex items-center justify-center text-accent-dark" id="what-is-card-2-icon">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif-display text-ink font-bold" id="what-is-card-2-title">Clear Numbers</h3>
                <p className="text-xs text-ink/60 leading-relaxed" id="what-is-card-2-body">
                  Weekly-reconciled QuickBooks files, tax reserve buckets, cash snapshot rituals, and structured owner draws.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-paper border border-ink/10 p-6 rounded-sm text-left space-y-4 group hover:border-accent transition-all" id="what-is-card-3">
                <div className="w-10 h-10 rounded-sm bg-accent-light border border-accent/20 flex items-center justify-center text-accent-dark" id="what-is-card-3-icon">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif-display text-ink font-bold" id="what-is-card-3-title">Compliance Calendar</h3>
                <p className="text-xs text-ink/60 leading-relaxed" id="what-is-card-3-body">
                  A locked compliance calendar for corporate filings, licenses, sales tax, 1099s, and critical insurance deadlines.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. THE ABC METHOD SECTION */}
      <section className="py-20 md:py-28 bg-paper" id="the-abc-method">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          
          <span className="font-mono text-xs tracking-wider uppercase text-accent-dark font-semibold block mb-2">The Framework</span>
          <h2 className="text-3xl md:text-5xl font-serif-display text-ink font-bold tracking-tight mb-4" id="abc-method-heading">
            Start with your ABCs.
          </h2>
          <p className="text-ink/60 text-sm max-w-xl mx-auto leading-relaxed mb-16 font-sans" id="abc-method-intro">
            The ABC Owner Reset focuses on the three areas that quietly control the stability, sanity, and value of your business.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20" id="abc-method-cards-grid">
            {/* A Card */}
            <div className="bg-white border border-ink/8 p-8 rounded-sm relative overflow-hidden group hover:border-accent transition-all duration-300" id="abc-card-a">
              {/* Visual Number Backdrop */}
              <div className="absolute top-4 right-6 text-7xl font-sans font-extrabold text-ink/[0.02] group-hover:text-accent/[0.04] select-none transition-colors">A</div>
              
              <div className="flex items-center space-x-3 mb-6" id="abc-card-a-title-row">
                <div className="w-10 h-10 rounded-sm bg-accent-light border border-accent/20 flex items-center justify-center font-mono font-bold text-accent-dark">A</div>
                <h3 className="text-lg font-serif-display text-ink font-bold">Admin Systems</h3>
              </div>

              <p className="text-xs md:text-sm text-ink/60 leading-relaxed" id="abc-card-a-body">
                Files, emails, passwords, vendors, documents, workflows, and owner routines organized into one clear structure. Consolidate scattered folders into an operational command center.
              </p>
            </div>

            {/* B Card */}
            <div className="bg-white border border-ink/8 p-8 rounded-sm relative overflow-hidden group hover:border-accent transition-all duration-300" id="abc-card-b">
              {/* Visual Number Backdrop */}
              <div className="absolute top-4 right-6 text-7xl font-sans font-extrabold text-ink/[0.02] group-hover:text-accent/[0.04] select-none transition-colors">B</div>

              <div className="flex items-center space-x-3 mb-6" id="abc-card-b-title-row">
                <div className="w-10 h-10 rounded-sm bg-accent-light border border-accent/20 flex items-center justify-center font-mono font-bold text-accent-dark">B</div>
                <h3 className="text-lg font-serif-display text-ink font-bold">Books & Numbers</h3>
              </div>

              <p className="text-xs md:text-sm text-ink/60 leading-relaxed" id="abc-card-b-body">
                QuickBooks, reconciliations, cash snapshots, reports, owner pay, draws, tax buckets, and the numbers that actually matter. Track profitability and allocate reserves instantly on schedule.
              </p>
            </div>

            {/* C Card */}
            <div className="bg-white border border-ink/8 p-8 rounded-sm relative overflow-hidden group hover:border-accent transition-all duration-300" id="abc-card-c">
              {/* Visual Number Backdrop */}
              <div className="absolute top-4 right-6 text-7xl font-sans font-extrabold text-ink/[0.02] group-hover:text-accent/[0.04] select-none transition-colors">C</div>

              <div className="flex items-center space-x-3 mb-6" id="abc-card-c-title-row">
                <div className="w-10 h-10 rounded-sm bg-accent-light border border-accent/20 flex items-center justify-center font-mono font-bold text-accent-dark">C</div>
                <h3 className="text-lg font-serif-display text-ink font-bold">Compliance Calendar</h3>
              </div>

              <p className="text-xs md:text-sm text-ink/60 leading-relaxed" id="abc-card-c-body">
                Annual reports, payroll tax, sales tax, 1099s, licenses, insurance, renewals, and deadlines before they become expensive surprises. Maintain elite legal and corporate safety.
              </p>
            </div>
          </div>


          {/* 7. FREE RESOURCE DIAGNOSTIC MODULE (INTERACTIVE SCORECARD) */}
          <div className="max-w-3xl mx-auto pt-8 border-t border-ink/10" id="scorecard-section">
            <div className="text-center mb-8" id="scorecard-intro-text">
              <span className="font-mono text-[9px] tracking-widest uppercase text-accent-dark bg-accent-light px-3 py-1 rounded-full border border-accent/20 inline-block mb-3 font-bold">Diagnostic Tool</span>
              <h3 className="text-2xl md:text-3xl font-serif-display text-ink font-bold tracking-tight">Evaluate Your Back-Office Health</h3>
              <p className="text-xs text-ink/60 mt-2 max-w-md mx-auto leading-relaxed">
                Use our real interactive scorecard below. Complete the questions to reveal your specific ABC breakdown grade and action plan.
              </p>
            </div>

            {/* Render interactive component */}
            <Scorecard onOpenBooking={() => openBooking('checkup')} />
          </div>

        </div>
      </section>


      {/* 4. START HERE SECTION */}
      <section className="py-20 md:py-28 bg-white border-y border-ink/8" id="start-here">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16" id="start-here-headers">
            <span className="font-mono text-xs tracking-wider uppercase text-accent-dark font-semibold block mb-2">First Steps</span>
            <h2 className="text-3xl md:text-4xl font-serif-display text-ink font-bold tracking-tight" id="start-here-heading">
              Start simple. Pick one door.
            </h2>
            <p className="text-xs text-ink/60 mt-3 leading-relaxed">
              You don’t have to fix everything today. Choose the entry path that matches your current priorities, whether it’s reading lessons, shopping template tools, or booking an audit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch" id="start-here-grid">
            {/* Card 1: Read the Newsletter */}
            <div className="bg-paper border border-ink/10 p-6 rounded-sm flex flex-col justify-between hover:border-accent transition-all text-left" id="card-start-newsletter">
              <div className="space-y-4" id="card-start-newsletter-body">
                <div className="flex items-center justify-between" id="card-start-newsletter-header">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 bg-accent-light text-accent-dark border border-accent/15 rounded-sm font-bold">Weekly</span>
                  <BookOpen className="w-4 h-4 text-ink/40" />
                </div>
                <h3 className="text-base font-serif-display text-ink font-bold">Read the Newsletter</h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  Weekly owner reset ideas, business systems, money routines, and Run It Like the Rich lessons.
                </p>
              </div>
              <a 
                href="https://runitliketherich.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 bg-white hover:bg-paper border border-ink/15 text-accent-dark hover:text-accent font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all text-center block"
                id="btn-link-substack"
              >
                Read on Substack
              </a>
            </div>

            {/* Card 2: Watch the Videos */}
            <div className="bg-paper border border-ink/10 p-6 rounded-sm flex flex-col justify-between hover:border-accent transition-all text-left" id="card-start-youtube">
              <div className="space-y-4" id="card-start-youtube-body">
                <div className="flex items-center justify-between" id="card-start-youtube-header">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 bg-accent-light text-accent-dark border border-accent/15 rounded-sm font-bold">Free Video</span>
                  <Video className="w-4 h-4 text-ink/40" />
                </div>
                <h3 className="text-base font-serif-display text-ink font-bold">Watch the Videos</h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  Short lessons on business systems, books, compliance, and owner discipline. Watch step-by-step back-office walk-throughs.
                </p>
              </div>
              <a 
                href="https://www.youtube.com/@RunItLikeTheRich"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 bg-white hover:bg-paper border border-ink/15 text-ink/70 hover:text-ink font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all text-center block"
                id="btn-link-youtube"
              >
                Watch on YouTube
              </a>
            </div>

            {/* Card 3: Download Owner Tools */}
            <div className="bg-paper border border-ink/10 p-6 rounded-sm flex flex-col justify-between hover:border-accent transition-all text-left" id="card-start-downloads">
              <div className="space-y-4" id="card-start-downloads-body">
                <div className="flex items-center justify-between" id="card-start-downloads-header">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 bg-accent-light text-accent-dark border border-accent/15 rounded-sm font-bold">Saves Hours</span>
                  <Download className="w-4 h-4 text-ink/40" />
                </div>
                <h3 className="text-base font-serif-display text-ink font-bold">Download Owner Tools</h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  Scorecards, checklists, templates, cash snapshots, compliance calendars, and starter kits to configure your folders.
                </p>
              </div>
              <a 
                href="#downloads" 
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('owner-tools-downloads-shop');
                }}
                className="mt-6 w-full py-2.5 bg-ink text-paper hover:bg-accent hover:text-white font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all text-center block"
                id="btn-link-downloads"
              >
                Shop Downloads
              </a>
            </div>

            {/* Card 4: Shop the Motto */}
            <div className="bg-paper border border-ink/10 p-6 rounded-sm flex flex-col justify-between hover:border-accent transition-all text-left" id="card-start-merch">
              <div className="space-y-4" id="card-start-merch-body">
                <div className="flex items-center justify-between" id="card-start-merch-header">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 bg-accent-light text-accent-dark border border-accent/15 rounded-sm font-bold">Gear</span>
                  <ShoppingBag className="w-4 h-4 text-ink/40" />
                </div>
                <h3 className="text-base font-serif-display text-ink font-bold">Shop the Motto</h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  Run It Like the Rich merch, owner rules, notebooks, mugs, shirts, and business mindset products.
                </p>
              </div>
              <a 
                href="#merch" 
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollTo('merch-shop-showcase');
                }}
                className="mt-6 w-full py-2.5 bg-white hover:bg-paper border border-ink/15 text-ink/70 hover:text-ink font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all text-center block"
                id="btn-link-merch"
              >
                Shop Merch
              </a>
            </div>

            {/* Card 5: Book a Business Checkup */}
            <div className="bg-paper border border-ink/10 p-6 rounded-sm flex flex-col justify-between hover:border-accent transition-all text-left" id="card-start-booking">
              <div className="space-y-4" id="card-start-booking-body">
                <div className="flex items-center justify-between" id="card-start-booking-header">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-500/15 rounded-sm font-bold">1-on-1</span>
                  <PhoneCall className="w-4 h-4 text-ink/40" />
                </div>
                <h3 className="text-base font-serif-display text-ink font-bold">Book a Business Checkup</h3>
                <p className="text-xs text-ink/60 leading-relaxed">
                  Get help reviewing your books, admin systems, compliance, and back-office structure directly.
                </p>
              </div>
              <a 
                href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 bg-transparent border border-dashed border-ink/20 hover:border-accent text-accent-dark hover:text-accent font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all text-center block font-bold"
                id="btn-link-booking"
              >
                Book a Call
              </a>
            </div>
          </div>


          {/* MOCK DIGITAL DOWNLOADS DRAWER/PREVIEW (HIGH CRAFT INTERACTION) */}
          <div className="mt-16 pt-12 border-t border-ink/10 text-left" id="owner-tools-downloads-shop">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8" id="tools-shop-header-row">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-accent-dark font-bold block mb-1">Owner Digital Downloads</span>
                <h3 className="text-xl md:text-2xl font-serif-display text-ink font-bold">Configure Your Workspace Instantly</h3>
              </div>
              <p className="text-xs text-ink/60 max-w-sm leading-relaxed">
                Get immediate access to standard structure frameworks, spreadsheets, and calendar reminders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4" id="tools-downloads-grid">
              {DOWNLOADABLE_TOOLS.map((tool) => (
                <div 
                  key={tool.id} 
                  className="bg-paper border border-ink/10 p-5 rounded-sm flex flex-col justify-between hover:border-accent transition-all"
                  id={`tool-item-${tool.id}`}
                >
                  <div className="space-y-3" id={`tool-content-${tool.id}`}>
                    <div className="flex items-center justify-between text-[9px] font-mono font-bold" id={`tool-meta-${tool.id}`}>
                      <span className="text-accent-dark uppercase tracking-wider">{tool.type}</span>
                      <span className="text-ink/50">{tool.price}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-ink leading-snug">{tool.name}</h4>
                    <p className="text-xs text-ink/60 leading-relaxed">{tool.desc}</p>
                  </div>
                  <button
                    onClick={() => {
                      openNewsletter(`Download: ${tool.name}`, `Subscribe to join 'Run It Like the Rich' weekly resets and instantly unlock your download copy of the ${tool.name}.`);
                    }}
                    className="mt-5 w-full py-2 bg-white hover:bg-paper border border-ink/15 text-accent-dark hover:text-accent text-[9px] uppercase tracking-widest font-bold transition-all flex items-center justify-center space-x-1.5 rounded-sm"
                    id={`btn-purchase-tool-${tool.id}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{tool.price === 'FREE' ? 'Download Free' : `Buy Template`}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>


          {/* MOCK MERCH SHOWCASE (HIGH CRAFT INTERACTION) */}
          <div className="mt-16 pt-12 border-t border-ink/10 text-left" id="merch-shop-showcase">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8" id="merch-header-row">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-accent-dark font-bold block mb-1">Brand Shop</span>
                <h3 className="text-xl md:text-2xl font-serif-display text-ink font-bold">Shop the Motto</h3>
              </div>
              <p className="text-xs text-ink/60 max-w-sm leading-relaxed">
                Surround yourself with physical artifacts of business discipline. Designed for the active, focused owner.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="merch-items-grid">
              {MERCH_ITEMS.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-paper border border-ink/10 rounded-sm overflow-hidden group hover:border-accent transition-all flex flex-col justify-between"
                  id={`merch-item-${item.id}`}
                >
                  <div className="relative aspect-video bg-paper overflow-hidden" id={`merch-img-container-${item.id}`}>
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-ink text-paper font-mono font-bold text-[10px] rounded-sm border border-ink/10">
                      {item.price}
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between" id={`merch-body-${item.id}`}>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-ink leading-snug">{item.name}</h4>
                      <p className="text-xs text-ink/60 leading-relaxed">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => {
                        showToast(`"${item.name}" has been added to your checkout cart. (Simulated Shop Integration)`);
                      }}
                      className="mt-5 w-full py-2.5 bg-white hover:bg-paper border border-ink/15 text-accent-dark hover:text-accent text-[9px] font-mono font-bold uppercase tracking-widest rounded-sm transition-all"
                      id={`btn-purchase-merch-${item.id}`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* INTERACTIVE TAGLINE ENGINE SECTION */}
      <TaglineEngine />


      {/* 5. WORK WITH LAURA SECTION */}
      <section className="py-20 md:py-28 bg-paper" id="work-with-laura">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          
          <div className="text-left max-w-xl mb-16" id="work-with-laura-headers">
            <span className="font-mono text-xs tracking-wider uppercase text-accent-dark font-bold block mb-2">Hands-on Support</span>
            <h2 className="text-3xl md:text-5xl font-serif-display text-ink font-bold tracking-tight" id="work-with-laura-heading">
              Work with Laura
            </h2>
            <p className="text-sm text-ink/60 mt-4 leading-relaxed" id="work-with-laura-intro">
              For owners who want more than a download, Laura offers practical, high-impact back-office reviews, diagnostic reporting, and custom operational architecture setup support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch" id="work-with-laura-offers-grid">
            {LAURA_OFFERS.map((offer) => (
              <div 
                key={offer.id}
                className="bg-white border border-ink/10 p-6 rounded-sm flex flex-col justify-between hover:border-accent transition-all duration-300 relative group"
                id={`offer-card-${offer.id}`}
              >
                {/* Visual Accent */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4" id={`offer-card-body-${offer.id}`}>
                  <div className="flex items-center justify-between" id={`offer-card-header-${offer.id}`}>
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2.5 py-0.5 bg-accent-light text-accent-dark border border-accent/15 rounded-sm font-bold">
                      {offer.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-serif-display text-ink font-bold leading-snug">{offer.title}</h3>
                  
                  <p className="text-xs text-ink/60 leading-relaxed">
                    {offer.description}
                  </p>

                  <div className="pt-4 border-t border-ink/10 text-xs text-ink/60 space-y-2" id={`offer-card-details-${offer.id}`}>
                    <div className="flex items-start space-x-1.5">
                      <span className="text-accent font-semibold">•</span>
                      <span>{offer.bullet}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8" id={`offer-card-action-${offer.id}`}>
                  <a
                    href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-ink hover:bg-accent text-paper hover:text-white font-mono text-[9px] uppercase tracking-widest rounded-sm transition-all text-center font-bold block"
                    id={`btn-action-offer-${offer.id}`}
                  >
                    {offer.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 6. THE VIRTUAL HQ CONNECTION SECTION */}
      <section className="py-20 md:py-28 bg-white border-y border-ink/8 relative" id="virtual-hq">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" id="vhq-background-art">
          <div className="absolute top-0 right-10 w-96 h-96 border border-accent rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="vhq-grid">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 text-left space-y-6" id="vhq-left-col">
              <span className="font-mono text-xs tracking-wider uppercase text-accent-dark font-bold block">The Strategy</span>
              <h2 className="text-3xl md:text-4xl font-serif-display text-ink font-bold tracking-tight leading-tight" id="vhq-heading">
                The philosophy is Run It Like the Rich. <br className="sm:inline" />
                The system is The Virtual HQ.
              </h2>
              <p className="text-ink/60 text-sm leading-relaxed" id="vhq-body-text">
                Run It Like the Rich teaches the habits, systems, and numbers owners need. The Virtual HQ turns those ideas into a simple, standardized digital operating hub where the business can actually run cleaner, scale easier, and preserve asset value.
              </p>

              <a
                href="https://sites.google.com/thehq.online/run-it-like-the-rich/hq-home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-ink hover:bg-accent text-paper hover:text-white font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all"
                id="btn-see-virtual-hq"
              >
                <span>See The Virtual HQ</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Interactive Mock Workspace Column (HIGH CRAFT) */}
            <div className="lg:col-span-7" id="vhq-mock-workspace">
              <div className="bg-white border border-ink/15 rounded-sm overflow-hidden shadow-xl text-left" id="vhq-mock-window">
                
                {/* Mock Window Top Bar */}
                <div className="bg-paper px-4 py-3 border-b border-ink/10 flex items-center justify-between" id="vhq-window-topbar">
                  <div className="flex items-center space-x-1.5" id="vhq-window-dots">
                    <div className="w-3 h-3 rounded-full bg-red-400/40" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/40" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
                  </div>
                  <span className="text-[9px] font-mono text-ink/40 uppercase tracking-widest flex items-center space-x-1 font-bold">
                    <Lock className="w-3 h-3 mr-1 text-accent" />
                    <span>secure.thehq.online/workspace</span>
                  </span>
                  <span className="text-[10px] text-emerald-600 font-mono font-bold" id="vhq-sync-status">● Sync Active</span>
                </div>

                {/* Workspace Split Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 text-sm h-[320px] border-b border-ink/10" id="vhq-window-layout">
                  
                  {/* Left Sidebar Menu */}
                  <div className="md:col-span-4 bg-paper border-r border-ink/10 p-4 space-y-4" id="vhq-window-sidebar">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-ink/40 font-bold block">OPERATIONAL HUB</span>
                    <div className="space-y-1.5" id="vhq-sidebar-links">
                      <button 
                        onClick={() => setActiveVhqTab('admin')}
                        className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-sm text-left text-xs transition-all ${activeVhqTab === 'admin' ? 'bg-accent-light text-accent-dark border-l-2 border-accent font-semibold' : 'text-ink/60 hover:bg-black/5 hover:text-ink'}`}
                      >
                        <Folder className="w-3.5 h-3.5" />
                        <span>01 - Admin Systems</span>
                      </button>
                      <button 
                        onClick={() => setActiveVhqTab('financials')}
                        className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-sm text-left text-xs transition-all ${activeVhqTab === 'financials' ? 'bg-accent-light text-accent-dark border-l-2 border-accent font-semibold' : 'text-ink/60 hover:bg-black/5 hover:text-ink'}`}
                      >
                        <Folder className="w-3.5 h-3.5" />
                        <span>02 - Books & Numbers</span>
                      </button>
                      <button 
                        onClick={() => setActiveVhqTab('compliance')}
                        className={`w-full flex items-center space-x-2 px-2.5 py-1.5 rounded-sm text-left text-xs transition-all ${activeVhqTab === 'compliance' ? 'bg-accent-light text-accent-dark border-l-2 border-accent font-semibold' : 'text-ink/60 hover:bg-black/5 hover:text-ink'}`}
                      >
                        <Folder className="w-3.5 h-3.5" />
                        <span>03 - Compliance Cal</span>
                      </button>
                    </div>
                  </div>

                  {/* Right File Viewer */}
                  <div className="md:col-span-8 p-5 bg-white overflow-y-auto" id="vhq-window-viewer">
                    <AnimatePresence mode="wait">
                      
                      {activeVhqTab === 'admin' && (
                        <motion.div
                          key="admin-tab"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-3"
                          id="vhq-admin-folder-list"
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-ink/10" id="vhq-admin-folder-header">
                            <span className="text-[10px] font-mono text-ink/50 uppercase font-bold">Directory: 01_ADMIN_SYSTEMS</span>
                            <span className="text-[10px] text-ink/40 font-mono">4 Objects</span>
                          </div>
                          
                          <div className="space-y-2" id="vhq-admin-files">
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>Master_Vendor_Contract_Directory.xlsx</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">1.2 MB</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>System_Passwords_Safe_Link.url</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">12 KB</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>Weekly_Owner_Routine_Playbook.pdf</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">450 KB</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeVhqTab === 'financials' && (
                        <motion.div
                          key="books-tab"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-3"
                          id="vhq-books-folder-list"
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-ink/10" id="vhq-books-folder-header">
                            <span className="text-[10px] font-mono text-ink/50 uppercase font-bold">Directory: 02_BOOKS_NUMBERS</span>
                            <span className="text-[10px] text-ink/40 font-mono">3 Objects</span>
                          </div>
                          
                          <div className="space-y-2" id="vhq-books-files">
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>QuickBooks_Online_Audit_SOP.docx</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">98 KB</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>Cash_Flow_Weekly_Snapshot.xlsx</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">1.8 MB</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>Owner_Draw_Salary_Schedule.pdf</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">140 KB</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {activeVhqTab === 'compliance' && (
                        <motion.div
                          key="compliance-tab"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="space-y-3"
                          id="vhq-compliance-folder-list"
                        >
                          <div className="flex items-center justify-between pb-2 border-b border-ink/10" id="vhq-compliance-folder-header">
                            <span className="text-[10px] font-mono text-ink/50 uppercase font-bold">Directory: 03_COMPLIANCE</span>
                            <span className="text-[10px] text-ink/40 font-mono">3 Objects</span>
                          </div>
                          
                          <div className="space-y-2" id="vhq-compliance-files">
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>Annual_State_Filing_Routine.pdf</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">220 KB</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>Compliance_Timeline_Import.ics</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">80 KB</span>
                            </div>
                            <div className="flex items-center justify-between p-2.5 bg-paper rounded-sm hover:border-accent border border-ink/5 cursor-pointer transition-all">
                              <span className="flex items-center space-x-2 text-xs text-ink font-medium">
                                <FileText className="w-3.5 h-3.5 text-accent" />
                                <span>IRS_1099_Filing_Checklist.docx</span>
                              </span>
                              <span className="text-[9px] font-mono text-ink/40">110 KB</span>
                            </div>
                          </div>
                        </motion.div>
                      )}

                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 7. FREE RESOURCE CTA */}
      <section className="py-20 bg-paper relative" id="free-resource-cta">
        <div className="max-w-4xl mx-auto px-6 text-center" id="free-resource-container">
          <div className="bg-white border border-ink/10 p-8 md:p-12 rounded-sm relative overflow-hidden shadow-sm" id="free-resource-box">
            {/* Soft gold gradient glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
            
            <span className="font-mono text-xs text-accent-dark uppercase tracking-wider block mb-2 font-semibold">Immediate Assessment</span>
            <h3 className="text-2xl md:text-3xl font-serif-display text-ink font-bold mb-4" id="free-cta-heading">Not sure where to start?</h3>
            <p className="text-ink/60 text-sm max-w-lg mx-auto leading-relaxed mb-8" id="free-cta-body">
              Start with the free ABC Owner Scorecard. It will help you see where your business is strong, where it is scattered, and what needs your attention first.
            </p>

            <button
              onClick={() => handleScrollTo('scorecard-section')}
              className="px-6 py-3.5 bg-ink hover:bg-accent text-paper hover:text-white font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all"
              id="btn-free-cta-scorecard"
            >
              Get the Free ABC Owner Scorecard
            </button>
          </div>
        </div>
      </section>


      {/* 8. FINAL CTA SECTION */}
      <section className="py-24 md:py-32 bg-white border-t border-ink/10 text-center relative" id="final-cta">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" id="final-background-grid">
          <div className="absolute top-0 left-1/3 w-px h-full bg-accent" />
          <div className="absolute top-0 left-2/3 w-px h-full bg-accent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-accent" />
        </div>

        <div className="max-w-3xl mx-auto px-6 relative z-10" id="final-cta-content">
          <span className="font-mono text-xs tracking-wider uppercase text-accent-dark font-semibold block mb-4">Take Action Today</span>
          <h2 className="text-3xl md:text-5xl font-serif-display text-ink font-bold tracking-tight mb-4" id="final-cta-heading">
            Run the business from facts, not fog.
          </h2>
          <p className="text-ink/60 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-10" id="final-cta-body">
            Build the system. Clean up the numbers. Control the calendar. That is how owners stop reacting and start running the business with absolute discipline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto" id="final-cta-buttons">
            <button
              onClick={() => handleScrollTo('scorecard-section')}
              className="w-full sm:w-auto px-6 py-3.5 bg-ink hover:bg-accent text-paper hover:text-white font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all"
              id="btn-final-scorecard"
            >
              Get the Free Scorecard
            </button>
            <button
              onClick={() => handleScrollTo('start-here')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-paper border border-ink/15 text-ink font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all"
              id="btn-final-tools"
            >
              Shop Owner Tools
            </button>
            <a
              href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-transparent hover:bg-black/5 border border-dashed border-ink/20 hover:border-accent text-ink/75 hover:text-ink font-semibold text-[10px] uppercase tracking-widest rounded-sm transition-all text-center block"
              id="btn-final-booking"
            >
              Book a Business Checkup
            </a>
          </div>
        </div>
      </section>


      {/* 9. FOOTER SECTION */}
      <footer className="bg-ink border-t border-ink/10 py-16 text-left" id="footer">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-12 border-b border-white/10" id="footer-top-grid">
            
            {/* Brand Signature and tagline */}
            <div className="md:col-span-5 space-y-4" id="footer-col-brand">
              <span className="font-serif-display text-paper font-bold text-xl block" id="footer-logo">
                Run It Like <span className="text-accent">the Rich</span>
              </span>
              <p className="text-[10px] text-paper/40 leading-relaxed font-mono uppercase tracking-widest font-bold" id="footer-tagline">
                Simple systems. Clean books. Compliance under control.
              </p>
              <p className="text-xs text-paper/60 max-w-sm leading-relaxed" id="footer-description">
                We empower business operators with high-impact systems audits, operational standard folder frameworks, and clean hands-on financial support.
              </p>
            </div>

            {/* Link group 1 */}
            <div className="md:col-span-3 space-y-3 text-xs" id="footer-col-navigation">
              <h4 className="font-mono text-[9px] uppercase text-paper/40 font-bold tracking-widest">Resources & Education</h4>
              <ul className="space-y-2 text-paper/75" id="footer-links-edu">
                <li>
                  <a 
                    href="https://runitliketherich.substack.com/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent hover:underline transition-all"
                    id="lnk-footer-newsletter"
                  >
                    Newsletter (Substack)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/@RunItLikeTheRich"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent hover:underline transition-all text-left block"
                    id="lnk-footer-youtube"
                  >
                    YouTube Lessons
                  </a>
                </li>
                <li>
                  <a 
                    href="https://sites.google.com/thehq.online/run-it-like-the-rich/hq-home" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent hover:underline transition-all"
                    id="lnk-footer-vhq"
                  >
                    The Virtual HQ Operating Hub
                  </a>
                </li>
              </ul>
            </div>

            {/* Link group 2 */}
            <div className="md:col-span-4 space-y-3 text-xs" id="footer-col-shop">
              <h4 className="font-mono text-[9px] uppercase text-paper/40 font-bold tracking-widest">Store & Support</h4>
              <ul className="space-y-2 text-paper/75" id="footer-links-shop">
                <li>
                  <a 
                    href="#downloads" 
                    onClick={(e) => { e.preventDefault(); handleScrollTo('owner-tools-downloads-shop'); }}
                    className="hover:text-accent hover:underline transition-all"
                    id="lnk-footer-downloads"
                  >
                    Digital Downloads & Templates
                  </a>
                </li>
                <li>
                  <a 
                    href="#merch" 
                    onClick={(e) => { e.preventDefault(); handleScrollTo('merch-shop-showcase'); }}
                    className="hover:text-accent hover:underline transition-all"
                    id="lnk-footer-merch"
                  >
                    Owner Motto Merch Shop
                  </a>
                </li>
                <li>
                  <a 
                    href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent hover:underline transition-all"
                    id="lnk-footer-booking"
                  >
                    Book a Call (Laura Checkup)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent hover:underline transition-all"
                    id="lnk-footer-contact"
                  >
                    Contact Support / Inquiry
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-paper/40 gap-4" id="footer-copyright-row">
            <p id="copyright-text">
              &copy; {new Date().getFullYear()} Run It Like the Rich. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6 text-paper/60" id="footer-social-links">
              <a href="https://runitliketherich.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300" aria-label="Substack">
                <BookOpen className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@RunItLikeTheRich" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583470245237#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/run-it-like-the-rich-with-laura-poincot/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/runitliketherich/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-all duration-300" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center space-x-4" id="footer-privacy-terms">
              <button onClick={() => showToast("Simulated Link: Privacy Policy is being configured.")} className="hover:text-accent transition-all">Privacy Policy</button>
              <span>&bull;</span>
              <button onClick={() => showToast("Simulated Link: Terms of Service are being configured.")} className="hover:text-accent transition-all">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* RENDER MODALS */}
      <BookingModal 
        isOpen={bookingOpen} 
        onClose={() => setBookingOpen(false)} 
        initialService={bookingService} 
      />

      <NewsletterModal
        isOpen={newsletterOpen}
        onClose={() => setNewsletterOpen(false)}
        presetTitle={newsletterTitle}
        presetDesc={newsletterDesc}
      />

      {/* Custom Elegance Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[100] max-w-sm bg-ink text-paper border border-accent/20 px-5 py-4 rounded-sm shadow-xl flex items-start space-x-3 text-left"
            id="toast-notification"
          >
            <Sparkles className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[9px] font-bold tracking-widest uppercase font-mono text-accent">Notification</p>
              <p className="text-xs text-paper/80 mt-1 font-medium leading-relaxed">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
