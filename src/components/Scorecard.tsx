import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCORECARD_QUESTIONS } from '../data';
import { ScorecardQuestion } from '../types';
import { 
  CheckCircle, 
  AlertTriangle, 
  ShieldAlert, 
  ArrowRight, 
  RotateCcw, 
  Sparkles,
  BookOpen,
  Calendar,
  FileText
} from 'lucide-react';

interface ScorecardProps {
  onOpenBooking: () => void;
}

export default function Scorecard({ onOpenBooking }: ScorecardProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(-1); // -1 is intro state
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [selectedChoices, setSelectedChoices] = useState<Record<string, number>>({});

  const totalQuestions = SCORECARD_QUESTIONS.length;

  const handleStart = () => {
    setCurrentIdx(0);
    setAnswers({});
    setSelectedChoices({});
  };

  const handleSelectAnswer = (questionId: string, points: number, choiceIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: points }));
    setSelectedChoices(prev => ({ ...prev, [questionId]: choiceIndex }));

    // Auto advance with a tiny delay for visual satisfaction
    setTimeout(() => {
      setCurrentIdx(prev => prev + 1);
    }, 280);
  };

  const handlePrevious = () => {
    if (currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentIdx(-1);
    setAnswers({});
    setSelectedChoices({});
  };

  // Calculations
  const getCategoryScore = (cat: 'A' | 'B' | 'C') => {
    return SCORECARD_QUESTIONS
      .filter(q => q.category === cat)
      .reduce((sum, q) => sum + (answers[q.id] || 0), 0);
  };

  const scoreA = getCategoryScore('A');
  const scoreB = getCategoryScore('B');
  const scoreC = getCategoryScore('C');
  const totalScore = scoreA + scoreB + scoreC;
  const maxScore = totalQuestions * 5; // 45 points maximum

  // Results Profiling
  let profileTitle = '';
  let profileDescription = '';
  let profileColorClass = '';
  let profileIcon = null;

  if (totalScore >= 40) {
    profileTitle = 'The Wealthy Operator';
    profileDescription = 'Your back-office is highly disciplined. Your records are clean, your state filings are on schedule, and you run the business from facts, not guesswork. You are built to scale or sell.';
    profileColorClass = 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5';
    profileIcon = <CheckCircle className="w-10 h-10 text-emerald-500" id="icon-wealthy-operator" />;
  } else if (totalScore >= 25) {
    profileTitle = 'The Growing Hustler';
    profileDescription = 'You have a solid sales foundation, but administrative friction and back-office blind spots are quietly leaking profit, time, and sanity. You run parts of the business from memory, creating unnecessary risk.';
    profileColorClass = 'text-amber-500 border-amber-500/20 bg-amber-500/5';
    profileIcon = <AlertTriangle className="w-10 h-10 text-amber-500" id="icon-growing-hustler" />;
  } else {
    profileTitle = 'Administrative Fog';
    profileDescription = 'Your operating systems are scattered, your books are behind, and compliance deadlines are ticking time bombs. You are working too hard in the business to build systems for the business.';
    profileColorClass = 'text-rose-500 border-rose-500/20 bg-rose-500/5';
    profileIcon = <ShieldAlert className="w-10 h-10 text-rose-500" id="icon-admin-fog" />;
  }

  // Find lowest category to offer helpful dynamic tips
  const categories = [
    { key: 'A', name: 'Admin Systems', score: scoreA, icon: <FileText className="w-5 h-5 text-amber-600" /> },
    { key: 'B', name: 'Books & Numbers', score: scoreB, icon: <BookOpen className="w-5 h-5 text-amber-600" /> },
    { key: 'C', name: 'Compliance Calendar', score: scoreC, icon: <Calendar className="w-5 h-5 text-amber-600" /> }
  ];
  const lowestCategory = [...categories].sort((a, b) => a.score - b.score)[0];

  const currentQuestion: ScorecardQuestion | undefined = SCORECARD_QUESTIONS[currentIdx];

  return (
    <div className="bg-white border border-ink/15 rounded-sm overflow-hidden shadow-sm" id="scorecard-container">
      {/* HEADER SECTION */}
      <div className="border-b border-ink/15 bg-paper px-6 py-4 flex items-center justify-between" id="scorecard-header">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" id="live-indicator-dot"></div>
          <span className="font-mono text-[10px] tracking-widest text-ink/60 uppercase font-semibold">Interactive Diagnostics</span>
        </div>
        {currentIdx >= 0 && currentIdx < totalQuestions && (
          <div className="text-right" id="progress-text-container">
            <span className="font-mono text-xs text-accent-dark font-semibold">Question {currentIdx + 1} of {totalQuestions}</span>
          </div>
        )}
      </div>

      {/* INNER CARD BODY */}
      <div className="p-6 md:p-8 min-h-[420px] flex flex-col justify-between" id="scorecard-body-wrapper">
        <AnimatePresence mode="wait">
          {/* INTRO SCREEN */}
          {currentIdx === -1 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="text-center py-6 flex flex-col items-center"
              id="scorecard-intro-view"
            >
              <div className="w-16 h-16 rounded-full bg-accent-light border border-accent/30 flex items-center justify-center mb-6" id="intro-shield-container">
                <Sparkles className="w-7 h-7 text-accent" id="sparkles-hero-icon" />
              </div>
              <h3 className="text-2xl font-serif-display text-ink font-bold tracking-tight mb-3" id="scorecard-intro-title">
                The ABC Owner Scorecard
              </h3>
              <p className="text-ink/70 text-sm max-w-lg mb-8 leading-relaxed" id="scorecard-intro-desc">
                Find out exactly where your business stands. Rate your back office across 9 specific operational benchmarks in Admin, Books, and Compliance. Takes less than 2 minutes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-xl mb-8 text-left" id="intro-features-grid">
                <div className="bg-white p-4 rounded-sm border border-ink/8" id="intro-feat-admin">
                  <div className="text-accent-dark font-semibold text-[10px] font-mono uppercase tracking-wider mb-1">A — Admin</div>
                  <div className="text-xs text-ink/60">File hierarchy, passwords, and active owner operating systems.</div>
                </div>
                <div className="bg-white p-4 rounded-sm border border-ink/8" id="intro-feat-books">
                  <div className="text-accent-dark font-semibold text-[10px] font-mono uppercase tracking-wider mb-1">B — Books</div>
                  <div className="text-xs text-ink/60">QBO health, reliable accounting, and proactive margin tracking.</div>
                </div>
                <div className="bg-white p-4 rounded-sm border border-ink/8" id="intro-feat-compliance">
                  <div className="text-accent-dark font-semibold text-[10px] font-mono uppercase tracking-wider mb-1">C — Compliance</div>
                  <div className="text-xs text-ink/60">Tax timelines, active state licenses, and corporate safety.</div>
                </div>
              </div>

              <button
                onClick={handleStart}
                className="px-8 py-3.5 bg-ink hover:bg-accent text-paper font-semibold rounded-sm transition-all duration-300 flex items-center space-x-2 text-xs uppercase tracking-widest"
                id="btn-start-scorecard"
              >
                <span>Diagnose Your Business Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {/* QUESTION SCREENS */}
          {currentIdx >= 0 && currentIdx < totalQuestions && currentQuestion && (
            <motion.div
              key={`q-${currentQuestion.id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col justify-between h-full"
              id={`scorecard-question-${currentQuestion.id}`}
            >
              <div>
                {/* Category Badge */}
                <div className="flex items-center space-x-2 mb-4" id="category-badge-row">
                  <span className="px-2.5 py-1 bg-accent-light text-accent-dark border border-accent/20 rounded-full text-[9px] font-mono tracking-widest uppercase font-bold">
                    {currentQuestion.category === 'A' ? 'A — Admin Systems' : currentQuestion.category === 'B' ? 'B — Books & Numbers' : 'C — Compliance Calendar'}
                  </span>
                  <span className="text-ink/30 font-mono text-[10px]">•</span>
                  <span className="text-ink/60 text-xs font-semibold">{currentQuestion.title}</span>
                </div>

                <h4 className="text-xl md:text-2xl font-serif-display text-ink font-bold tracking-tight mb-6 leading-snug" id="question-headline">
                  {currentQuestion.text}
                </h4>

                <div className="space-y-3" id="choices-list-container">
                  {currentQuestion.choices.map((choice, idx) => {
                    const isSelected = selectedChoices[currentQuestion.id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(currentQuestion.id, choice.points, idx)}
                        className={`w-full text-left p-4 rounded-sm border transition-all duration-200 flex flex-col md:flex-row md:items-center md:justify-between group ${
                          isSelected 
                            ? 'bg-accent-light border-accent shadow-sm' 
                            : 'bg-white border-ink/8 hover:border-accent/40 hover:bg-paper'
                        }`}
                        id={`btn-choice-${currentQuestion.id}-${idx}`}
                      >
                        <div className="flex-1 pr-4" id="choice-text-col">
                          <span className="block text-sm font-semibold text-ink group-hover:text-accent-dark transition-colors">
                            {choice.text}
                          </span>
                          <span className="block text-xs text-ink/60 mt-1 leading-relaxed">
                            {choice.description}
                          </span>
                        </div>
                        <div className="mt-2 md:mt-0 flex items-center space-x-2 self-start md:self-center" id="choice-score-indicator">
                          <span className={`text-[9px] font-bold font-mono px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            choice.points === 5 
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-500/10' 
                              : choice.points === 2 
                                ? 'bg-amber-50 text-amber-700 border border-amber-500/10' 
                                : 'bg-rose-50 text-rose-700 border border-rose-500/10'
                          }`}>
                            +{choice.points} pts
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Back button and bottom tracking progress bar */}
              <div className="mt-8 pt-4 border-t border-ink/10 flex items-center justify-between" id="question-footer-row">
                <button
                  onClick={handlePrevious}
                  disabled={currentIdx === 0}
                  className={`text-[10px] font-mono tracking-widest uppercase py-1 px-3 rounded transition-colors ${
                    currentIdx === 0 
                      ? 'text-ink/30 cursor-not-allowed' 
                      : 'text-ink/60 hover:text-ink hover:font-bold'
                  }`}
                  id="btn-prev-question"
                >
                  ← Back
                </button>

                {/* Micro progress line */}
                <div className="w-24 md:w-48 bg-ink/10 h-1 rounded-full overflow-hidden" id="progressbar-track">
                  <div 
                    className="bg-accent h-full transition-all duration-300" 
                    style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                    id="progressbar-fill"
                  ></div>
                </div>
              </div>
            </motion.div>
          )}

          {/* RESULTS SCREEN */}
          {currentIdx === totalQuestions && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="py-2"
              id="scorecard-results-view"
            >
              {/* Overall Profile Ribbon */}
              <div className={`border p-5 rounded-sm mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                totalScore >= 40 
                  ? 'border-emerald-500/20 bg-emerald-50/30 text-emerald-800' 
                  : totalScore >= 25 
                    ? 'border-amber-500/20 bg-amber-50/30 text-amber-800' 
                    : 'border-rose-500/20 bg-rose-50/30 text-rose-800'
              }`} id="result-profile-ribbon">
                <div className="flex items-center space-x-4" id="profile-text-wrapper">
                  <div className="flex-shrink-0">{profileIcon}</div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-ink/60 font-bold">Your Business Profile</span>
                    <h4 className="text-xl font-serif-display text-ink font-bold leading-tight mt-0.5">{profileTitle}</h4>
                  </div>
                </div>
                <div className="text-left md:text-right" id="profile-score-banner">
                  <span className="font-mono text-xs text-ink/60 block font-semibold">Overall Score</span>
                  <span className="text-3xl font-serif-display text-ink font-extrabold">{totalScore}<span className="text-lg text-ink/40 font-sans"> / {maxScore}</span></span>
                </div>
              </div>

              {/* Dynamic summary intro text */}
              <p className="text-ink/80 text-sm mb-8 leading-relaxed italic border-l-2 border-accent pl-4" id="result-dynamic-intro">
                "{profileDescription}"
              </p>

              {/* Category Breakdown */}
              <h5 className="font-serif-display text-ink text-base font-bold mb-4" id="category-breakdown-title">Diagnostic Breakdown</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" id="category-breakdown-grid">
                {/* ADMIN */}
                <div className="bg-white border border-ink/8 p-4 rounded-sm flex flex-col justify-between" id="cat-breakdown-a">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider font-bold text-ink/60 block mb-1">A — ADMIN SYSTEMS</span>
                    <span className="text-lg font-serif-display text-ink font-bold">{scoreA}<span className="text-xs text-ink/40 font-sans"> / 15</span></span>
                  </div>
                  <div className="mt-4" id="bar-score-a">
                    <div className="w-full bg-ink/8 h-1 rounded-full overflow-hidden">
                      <div className="bg-accent-dark h-full" style={{ width: `${(scoreA / 15) * 100}%` }}></div>
                    </div>
                    <span className="text-[10px] text-ink/60 mt-2 block font-medium">
                      {scoreA >= 13 ? 'Excellent structure' : scoreA >= 7 ? 'Loose, has friction' : 'Scattered memory-driven'}
                    </span>
                  </div>
                </div>

                {/* BOOKS */}
                <div className="bg-white border border-ink/8 p-4 rounded-sm flex flex-col justify-between" id="cat-breakdown-b">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider font-bold text-ink/60 block mb-1">B — BOOKS & NUMBERS</span>
                    <span className="text-lg font-serif-display text-ink font-bold">{scoreB}<span className="text-xs text-ink/40 font-sans"> / 15</span></span>
                  </div>
                  <div className="mt-4" id="bar-score-b">
                    <div className="w-full bg-ink/8 h-1 rounded-full overflow-hidden">
                      <div className="bg-accent-dark h-full" style={{ width: `${(scoreB / 15) * 100}%` }}></div>
                    </div>
                    <span className="text-[10px] text-ink/60 mt-2 block font-medium">
                      {scoreB >= 13 ? 'Audit-ready fact-driven' : scoreB >= 7 ? 'Lagging, has issues' : 'Blind spot risk'}
                    </span>
                  </div>
                </div>

                {/* COMPLIANCE */}
                <div className="bg-white border border-ink/8 p-4 rounded-sm flex flex-col justify-between" id="cat-breakdown-c">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider font-bold text-ink/60 block mb-1">C — COMPLIANCE</span>
                    <span className="text-lg font-serif-display text-ink font-bold">{scoreC}<span className="text-xs text-ink/40 font-sans"> / 15</span></span>
                  </div>
                  <div className="mt-4" id="bar-score-c">
                    <div className="w-full bg-ink/8 h-1 rounded-full overflow-hidden">
                      <div className="bg-accent-dark h-full" style={{ width: `${(scoreC / 15) * 100}%` }}></div>
                    </div>
                    <span className="text-[10px] text-ink/60 mt-2 block font-medium">
                      {scoreC >= 13 ? 'Disciplined routine' : scoreC >= 7 ? 'Standard calendars' : 'Ticking penalty surprise'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dynamic Action Plan Block */}
              <div className="bg-accent-light border border-accent/20 p-6 rounded-sm mb-8" id="result-action-plan-container">
                <div className="flex items-center space-x-2 mb-3" id="lowest-cat-header">
                  {lowestCategory.icon}
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent-dark font-bold">Priority Reset Area: {lowestCategory.name}</span>
                </div>
                <h6 className="text-base text-ink font-serif-display font-bold mb-2" id="action-title">
                  {lowestCategory.key === 'A' && 'Build Your Virtual Command Center'}
                  {lowestCategory.key === 'B' && 'Establish Financial Guardrails & Proactive Tracking'}
                  {lowestCategory.key === 'C' && 'Create Your 12-Month Compliance Blueprint'}
                </h6>
                <p className="text-xs text-ink/70 mb-4 leading-relaxed" id="action-body">
                  {lowestCategory.key === 'A' && 'Your lowest score is in Admin. Having scattered passwords, loose files, and operating entirely from memory acts as a massive daily drag on your time. You need a dedicated, structured Virtual HQ folder and passwords protocol immediately.'}
                  {lowestCategory.key === 'B' && 'Your lowest score is in Books & Numbers. Operating without clean, weekly-updated bookkeeping is like driving in heavy fog. You cannot make reliable tax, payroll, or draw decisions. Let\'s resolve this with a clean QuickBooks cleanup.'}
                  {lowestCategory.key === 'C' && 'Your lowest score is in Compliance. Missing deadlines like sales tax filings, corporate annual reports, or payroll renewals leads to expensive state penalties and corporate status suspensions. You need a centralized compliance timeline.'}
                </p>

                <div className="space-y-2" id="reco-bullets">
                  <div className="flex items-start space-x-2 text-xs text-ink/80" id="bullet-reco-1">
                    <span className="text-accent font-semibold mt-0.5">✓</span>
                    <span>
                      {lowestCategory.key === 'A' && 'Audit all storage paths and consolidate key links into a single pinned dashboard.'}
                      {lowestCategory.key === 'B' && 'Run a full diagnostic check on your QBO file to locate and clear ledger bugs.'}
                      {lowestCategory.key === 'C' && 'Generate a 12-month compliance roadmap highlighting your exact state/federal requirements.'}
                    </span>
                  </div>
                  <div className="flex items-start space-x-2 text-xs text-ink/80" id="bullet-reco-2">
                    <span className="text-accent font-semibold mt-0.5">✓</span>
                    <span>
                      {lowestCategory.key === 'A' && 'Establish a structured 1-hour weekly routine block strictly for administrative resets.'}
                      {lowestCategory.key === 'B' && 'Setup dedicated checking buckets for automated tax reserve allocations.'}
                      {lowestCategory.key === 'C' && 'Put automatic reminders in place exactly 30 days prior to state renewal due dates.'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Call to Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-ink/10 pt-6" id="results-cta-buttons-container">
                <a
                  href="https://calendly.com/thehq-support/how-can-i-help-books-beyond-business-support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-ink text-paper font-semibold hover:bg-accent hover:text-white rounded-sm transition-all flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest text-center block"
                  id="btn-results-booking"
                >
                  <span>Book a Free Checkup Call</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-paper text-ink/70 hover:text-ink border border-ink/15 font-semibold rounded-sm transition-all flex items-center justify-center space-x-2 text-[10px] uppercase tracking-widest"
                  id="btn-results-retry"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Scorecard</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
