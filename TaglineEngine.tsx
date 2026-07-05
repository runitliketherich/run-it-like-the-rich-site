import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  BookOpen, 
  Coffee, 
  Image as ImageIcon, 
  Shirt, 
  Search, 
  ArrowRight,
  RefreshCw,
  Info,
  HelpCircle,
  FileText
} from 'lucide-react';

export interface Tagline {
  id: string;
  text: string;
  category: 'mindset' | 'systems' | 'money' | 'books' | 'florida' | 'work-wife';
  categoryLabel: string;
  voice: string;
  keywords: string[];
}

const TAGLINES_DATABASE: Tagline[] = [
  // Systems & Simplicity
  {
    id: 'sys1',
    text: "Keep it lean, keep it clean—Run it like the rich.",
    category: 'systems',
    categoryLabel: 'Systems & Simplicity',
    voice: 'Simple Systems',
    keywords: ['lean', 'clean', 'simple', 'mess', 'organize', 'waste', 'clutter']
  },
  {
    id: 'sys2',
    text: "Automate the ordinary—Run it like the rich.",
    category: 'systems',
    categoryLabel: 'Systems & Simplicity',
    voice: 'Systems Rule',
    keywords: ['automate', 'ordinary', 'routine', 'software', 'manual', 'automatic', 'tasks']
  },
  {
    id: 'sys3',
    text: "Make it simple, make it scale—Run it like the rich.",
    category: 'systems',
    categoryLabel: 'Systems & Simplicity',
    voice: 'Scale Method',
    keywords: ['scale', 'simple', 'grow', 'process', 'complexity', 'trap']
  },
  {
    id: 'sys4',
    text: "Fewer clicks, fuller coffers—Run it like the rich.",
    category: 'systems',
    categoryLabel: 'Systems & Simplicity',
    voice: 'Efficiency Habit',
    keywords: ['clicks', 'coffers', 'revenue', 'save', 'time', 'click', 'clicks']
  },
  {
    id: 'sys5',
    text: "Process beats panic—Run it like the rich.",
    category: 'systems',
    categoryLabel: 'Systems & Simplicity',
    voice: 'Calm Operator',
    keywords: ['process', 'panic', 'stress', 'emergency', 'fire', 'crisis', 'accidental']
  },
  {
    id: 'sys6',
    text: "Document once, win daily—Run it like the rich.",
    category: 'systems',
    categoryLabel: 'Systems & Simplicity',
    voice: 'SOP Guide',
    keywords: ['document', 'sop', 'write', 'win', 'daily', 'procedures', 'training']
  },
  {
    id: 'sys7',
    text: "Tight systems, bright margins—Run it like the rich.",
    category: 'systems',
    categoryLabel: 'Systems & Simplicity',
    voice: 'Margin Standard',
    keywords: ['tight', 'margins', 'profit', 'edges', 'systems']
  },
  {
    id: 'sys8',
    text: "Build repeats, not regrets—Run it like the rich.",
    category: 'systems',
    categoryLabel: 'Systems & Simplicity',
    voice: 'Repeatable Systems',
    keywords: ['repeats', 'repeat', 'regrets', 'mistakes', 'errors', 'rebuild', 'checklist']
  },

  // Money & Margins
  {
    id: 'mon1',
    text: "Do less, earn more—Run it like the rich.",
    category: 'money',
    categoryLabel: 'Money & Margins',
    voice: 'Wealth Mindset',
    keywords: ['do less', 'earn', 'more', 'work', 'labor', 'income', 'leverage']
  },
  {
    id: 'mon2',
    text: "Cut waste, grow wealth—Run it like the rich.",
    category: 'money',
    categoryLabel: 'Money & Margins',
    voice: 'Wealth Habit',
    keywords: ['cut', 'waste', 'grow', 'wealth', 'save', 'subscriptions', 'leaks', 'money']
  },
  {
    id: 'mon3',
    text: "Tight edges, fat margins—Run it like the rich.",
    category: 'money',
    categoryLabel: 'Money & Margins',
    voice: 'Business Math',
    keywords: ['margins', 'fat', 'edges', 'price', 'pricing', 'charge', 'profit', 'cogs']
  },
  {
    id: 'mon4',
    text: "Price right, sleep tight—Run it like the rich.",
    category: 'money',
    categoryLabel: 'Money & Margins',
    voice: 'Pricing Courage',
    keywords: ['price', 'sleep', 'pricing', 'charge', 'undervalue', 'cheap', 'anxiety']
  },
  {
    id: 'mon5',
    text: "Dollars love discipline—Run it like the rich.",
    category: 'money',
    categoryLabel: 'Money & Margins',
    voice: 'Owner Standard',
    keywords: ['dollars', 'discipline', 'budget', 'routine', 'money', 'habits', 'reconcile']
  },
  {
    id: 'mon6',
    text: "Quiet hustle, loud margins—Run it like the rich.",
    category: 'money',
    categoryLabel: 'Money & Margins',
    voice: 'Underground Rich',
    keywords: ['quiet', 'loud', 'hustle', 'margins', 'profit', 'brag', 'results']
  },
  {
    id: 'mon7',
    text: "Plan it, price it, profit—Run it like the rich.",
    category: 'money',
    categoryLabel: 'Money & Margins',
    voice: 'Profit Plan',
    keywords: ['plan', 'price', 'profit', 'forecast', 'strategy', 'numbers']
  },

  // Books & Compliance
  {
    id: 'bks1',
    text: "Clean books, big looks—Run it like the rich.",
    category: 'books',
    categoryLabel: 'Books & Compliance',
    voice: 'Clean Records',
    keywords: ['books', 'clean', 'look', 'accounting', 'audits', 'reports', 'financials']
  },
  {
    id: 'bks2',
    text: "The rich don't wing it—they reconcile it—Run it like the rich.",
    category: 'books',
    categoryLabel: 'Books & Compliance',
    voice: 'Owner Reconcile',
    keywords: ['wing it', 'reconcile', 'bank', 'quickbooks', 'qbo', 'ledgers', 'balance']
  },
  {
    id: 'bks3',
    text: "Cash talks—let it lead—Run it like the rich.",
    category: 'books',
    categoryLabel: 'Books & Compliance',
    voice: 'Cashflow First',
    keywords: ['cash', 'talks', 'lead', 'cashflow', 'burn rate', 'liquidity', 'money']
  },
  {
    id: 'bks4',
    text: "Invoice on time, sleep on time—Run it like the rich.",
    category: 'books',
    categoryLabel: 'Books & Compliance',
    voice: 'AR Automation',
    keywords: ['invoice', 'time', 'sleep', 'billing', 'accounts receivable', 'late', 'pay']
  },
  {
    id: 'bks5',
    text: "Close the tiny gaps; avoid the big costs—Run it like the rich.",
    category: 'books',
    categoryLabel: 'Books & Compliance',
    voice: 'Due Diligence',
    keywords: ['close', 'gaps', 'costs', 'fines', 'penalties', 'irs', 'audit', 'tax']
  },
  {
    id: 'bks6',
    text: "Month closed, mind clear—Run it like the rich.",
    category: 'books',
    categoryLabel: 'Books & Compliance',
    voice: 'Close Routine',
    keywords: ['month', 'closed', 'clear', 'routine', 'calm', 'reports', 'ready']
  },

  // Mindset & Mastery
  {
    id: 'mst1',
    text: "Curiosity pays interest—Run it like the rich.",
    category: 'mindset',
    categoryLabel: 'Mindset & Mastery',
    voice: 'Curious Mind',
    keywords: ['curiosity', 'interest', 'learn', 'knowledge', 'education', 'skills']
  },
  {
    id: 'mst2',
    text: "Calm mind, sharp moves—Run it like the rich.",
    category: 'mindset',
    categoryLabel: 'Mindset & Mastery',
    voice: 'Calm Strategy',
    keywords: ['calm', 'mind', 'sharp', 'moves', 'decisions', 'panic', 'hustle', 'frenzy']
  },
  {
    id: 'mst3',
    text: "Discipline is mental wealth—Run it like the rich.",
    category: 'mindset',
    categoryLabel: 'Mindset & Mastery',
    voice: 'Owner Discipline',
    keywords: ['discipline', 'wealth', 'mental', 'habits', 'consistent', 'routine']
  },
  {
    id: 'mst4',
    text: "See the win early—Run it like the rich.",
    category: 'mindset',
    categoryLabel: 'Mindset & Mastery',
    voice: 'Visionary',
    keywords: ['win', 'early', 'visualize', 'goals', 'target', 'results', 'outcome']
  },
  {
    id: 'mst5',
    text: "Slow is smooth, smooth is fast—Run it like the rich.",
    category: 'mindset',
    categoryLabel: 'Mindset & Mastery',
    voice: 'Tactical Speed',
    keywords: ['slow', 'smooth', 'fast', 'rushed', 'hurry', 'errors', 'hiring', 'quality']
  },
  {
    id: 'mst6',
    text: "Rejection is data, not destiny—Run it like the rich.",
    category: 'mindset',
    categoryLabel: 'Mindset & Mastery',
    voice: 'Bounce Back',
    keywords: ['rejection', 'data', 'destiny', 'sales', 'failed', 'lead', 'client', 'refused']
  },

  // Florida Old-Timer
  {
    id: 'flo1',
    text: "LLCs are umbrellas, not trophies. Use them where it rains—Run it like the rich.",
    category: 'florida',
    categoryLabel: 'Florida Old-Timer',
    voice: 'Old-Timer Wisdom',
    keywords: ['llc', 'umbrella', 'trophies', 'personal', 'business', 'entity', 'taxes', 'irs', 'asset']
  },
  {
    id: 'flo2',
    text: "Reconcile like it's church—weekly, faithfully, and without excuses—Run it like the rich.",
    category: 'florida',
    categoryLabel: 'Florida Old-Timer',
    voice: 'Old-Timer Books',
    keywords: ['church', 'reconcile', 'weekly', 'faithfully', 'excuses', 'books', 'discipline']
  },
  {
    id: 'flo3',
    text: "Sloppy books are unpaid bills hiding in disguise—Run it like the rich.",
    category: 'florida',
    categoryLabel: 'Florida Old-Timer',
    voice: 'Old-Timer Warning',
    keywords: ['sloppy', 'books', 'unpaid', 'bills', 'disguise', 'leak', 'fees', 'accidental']
  },
  {
    id: 'flo4',
    text: "If a man won't sweep his own jobsite, he won't protect your money—Run it like the rich.",
    category: 'florida',
    categoryLabel: 'Florida Old-Timer',
    voice: 'Old-Timer Grit',
    keywords: ['sweep', 'jobsite', 'money', 'character', 'clean', 'employees', 'trust', 'hiring']
  },
  {
    id: 'flo5',
    text: "Son, cashflow is the fuel gauge of the plane—don't you dare take off without checking it twice—Run it like the rich.",
    category: 'florida',
    categoryLabel: 'Florida Old-Timer',
    voice: 'Old-Timer Cash',
    keywords: ['son', 'cashflow', 'plane', 'fuel', 'reconcile', 'payroll', 'bank', 'check']
  },
  {
    id: 'flo6',
    text: "Don’t partner with someone who talks big in the tiki hut but vanishes when the shovel hits roots—Run it like the rich.",
    category: 'florida',
    categoryLabel: 'Florida Old-Timer',
    voice: 'Old-Timer Partnership',
    keywords: ['partner', 'tiki hut', 'shovel', 'roots', 'big talk', 'excuses', 'contracts']
  },

  // Work Wife Wisdom
  {
    id: 'ww1',
    text: "Behind every calm owner is a work wife who kept the paperwork from exploding—Run it like the rich.",
    category: 'work-wife',
    categoryLabel: 'Work Wife Wisdom',
    voice: 'Work Wife Voice',
    keywords: ['work wife', 'backbone', 'papers', 'calm owner', 'exploding', 'admin', 'office']
  },
  {
    id: 'ww2',
    text: "We keep the papers straight so he can keep the business standing—Run it like the rich.",
    category: 'work-wife',
    categoryLabel: 'Work Wife Wisdom',
    voice: 'Work Wife Role',
    keywords: ['papers', 'straight', 'standing', 'backbone', 'protect', 'reputation']
  },
  {
    id: 'ww3',
    text: "Clean books are how you sleep. Messy books are how you pray—Run it like the rich.",
    category: 'work-wife',
    categoryLabel: 'Work Wife Wisdom',
    voice: 'Work Wife Peace',
    keywords: ['sleep', 'pray', 'messy', 'books', 'accounting', 'reconcile', 'fear', 'audit']
  },
  {
    id: 'ww4',
    text: "Give people clarity and trust — they'll give you their backbone—Run it like the rich.",
    category: 'work-wife',
    categoryLabel: 'Work Wife Wisdom',
    voice: 'Work Wife Team',
    keywords: ['clarity', 'trust', 'backbone', 'empower', 'micromanage', 'oversight', 'delegation']
  },
  {
    id: 'ww5',
    text: "Discretion is non-negotiable. Lock it behind your ribs and speak it to no one—Run it like the rich.",
    category: 'work-wife',
    categoryLabel: 'Work Wife Wisdom',
    voice: 'Work Wife Honor',
    keywords: ['discretion', 'secrets', 'trust', 'privacy', 'ribs', 'payroll', 'troubles']
  }
];

const PRESETS = [
  { label: 'Zombie Apps & Money Leaks', text: 'I feel like we are bleeding cash on software we do not use, and our monthly expenses are totally out of control.' },
  { label: 'Messy Reconciliations', text: 'Our QuickBooks Online is a complete disaster, books are months behind and I am terrified of the tax season.' },
  { label: 'Overwhelmed and Micromanaging', text: 'I am working eighty hours a week, checking everyone\'s simple tasks, and I cannot step away from the office for a single day.' },
  { label: 'Unclear Profit & Pricing', text: 'We have lots of sales and top-line revenue, but somehow at the end of the month, the bank account is empty.' },
  { label: 'Cocommingled Accounts & IRS', text: 'I occasionally use my personal card for business transactions and do not have agreements signed, and I am worried about audits.' }
];

export default function TaglineEngine() {
  const [inputText, setInputText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeTagline, setActiveTagline] = useState<Tagline>(TAGLINES_DATABASE[0]);
  const [activeMerchTab, setActiveMerchTab] = useState<'notebook' | 'mug' | 'poster' | 'shirt'>('notebook');
  const [isMatching, setIsMatching] = useState<boolean>(false);
  const [matchingProgress, setMatchingProgress] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [customMerchColor, setCustomMerchColor] = useState<string>('#121212'); // Slate black default

  // Search filter
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle preset click
  const handleApplyPreset = (presetText: string) => {
    setInputText(presetText);
    triggerMatching(presetText);
  };

  // Tagline matching logic (enhanced with local weighting)
  const triggerMatching = (textToMatch: string) => {
    if (!textToMatch.trim()) return;
    setIsMatching(true);
    setMatchingProgress(0);

    // Simulated high-craft analytical delay
    const interval = setInterval(() => {
      setMatchingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            performMatch(textToMatch);
          }, 200);
          return 100;
        }
        return prev + 10;
      });
    }, 40);
  };

  const performMatch = (text: string) => {
    const lowerText = text.toLowerCase();
    let bestMatch = TAGLINES_DATABASE[0];
    let maxScore = -1;

    TAGLINES_DATABASE.forEach(tagline => {
      let score = 0;
      tagline.keywords.forEach(keyword => {
        if (lowerText.includes(keyword)) {
          score += 3; // Word hit
        }
      });
      // Category matches
      if (tagline.category === 'money' && (lowerText.includes('bleed') || lowerText.includes('cash') || lowerText.includes('profit') || lowerText.includes('expensive') || lowerText.includes('margin'))) {
        score += 1;
      }
      if (tagline.category === 'systems' && (lowerText.includes('manual') || lowerText.includes('automate') || lowerText.includes('work') || lowerText.includes('time') || lowerText.includes('efficient'))) {
        score += 1;
      }
      if (tagline.category === 'books' && (lowerText.includes('reconcile') || lowerText.includes('quickbooks') || lowerText.includes('qbo') || lowerText.includes('tax') || lowerText.includes('audit'))) {
        score += 1;
      }

      if (score > maxScore) {
        maxScore = score;
        bestMatch = tagline;
      }
    });

    setActiveTagline(bestMatch);
    setIsMatching(false);
  };

  // Categories list
  const categories = useMemo(() => {
    const list = [
      { id: 'all', label: 'All Taglines' },
      { id: 'systems', label: 'Systems & Simplicity' },
      { id: 'money', label: 'Money & Margins' },
      { id: 'books', label: 'Books & Compliance' },
      { id: 'mindset', label: 'Mindset & Mastery' },
      { id: 'florida', label: 'Florida Old-Timer' },
      { id: 'work-wife', label: 'Work Wife Wisdom' }
    ];
    return list;
  }, []);

  // Filtered taglines for the explorer grid
  const filteredTaglines = useMemo(() => {
    return TAGLINES_DATABASE.filter(tagline => {
      const matchesCategory = selectedCategory === 'all' || tagline.category === selectedCategory;
      const matchesSearch = tagline.text.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tagline.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tagline.keywords.some(k => k.includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle clipboard copy
  const handleCopy = () => {
    const hashtags = getHashtagsForCategory(activeTagline.category);
    const textToCopy = `"${activeTagline.text}"\n\n${hashtags}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getHashtagsForCategory = (cat: string) => {
    switch (cat) {
      case 'systems':
        return '#RunItLikeTheRich #SystemsThinking #Automation #SmallBusiness #Operations';
      case 'money':
        return '#RunItLikeTheRich #Margins #Profitability #FinancialClarity #OwnerMindset';
      case 'books':
        return '#RunItLikeTheRich #Bookkeeping #QuickBooksOnline #TaxSeason #Reconcile';
      case 'florida':
        return '#RunItLikeTheRich #OldFlorida #ContractorLife #BusinessWisdom';
      case 'work-wife':
        return '#RunItLikeTheRich #WorkWife #OperationsWizard #BehindTheScenes';
      default:
        return '#RunItLikeTheRich #Entrepreneurship #SmallBusiness #Leadership';
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-ink/8 text-left" id="tagline-engine-section">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12" id="tagline-engine-header">
          <span className="font-mono text-xs tracking-wider uppercase text-accent-dark font-bold block mb-2">Interactive Brand Center</span>
          <h2 className="text-3xl md:text-5xl font-serif-display text-ink font-bold tracking-tight">
            The Tagline Engine
          </h2>
          <p className="text-sm text-ink/60 mt-4 leading-relaxed">
            Match your business challenges, draft social posts, or content topics to the perfect witty tagline ending in <strong className="text-ink">Run It Like the Rich</strong>. Instantly visualize your custom motto embossed on premium notebooks, mugs, posters, and team apparel.
          </p>
        </div>

        {/* Content & Matching Workspace Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start" id="tagline-engine-workspace">
          
          {/* Left Column: Context Matching Tool */}
          <div className="lg:col-span-5 space-y-6" id="tagline-engine-left">
            <div className="bg-paper border border-ink/12 p-6 rounded-sm space-y-5 shadow-sm" id="matching-tool-card">
              <div className="flex items-center space-x-2" id="matching-tool-card-title">
                <Sparkles className="w-4 h-4 text-accent" />
                <h3 className="font-serif-display text-base font-bold text-ink">Contextual Motto Matcher</h3>
              </div>
              
              <div className="space-y-2" id="matching-input-container">
                <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink/50 block">Your Content or Challenge</label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste a draft LinkedIn post, an email, or describe a current frustration in your back-office (e.g., 'reconciling takes hours' or 'hiring help but they don't do the job right')..."
                  className="w-full h-32 p-3 bg-white border border-ink/15 rounded-sm text-xs text-ink placeholder-ink/40 focus:border-accent focus:outline-none transition-all resize-none"
                  id="tagline-matcher-textarea"
                />
              </div>

              {/* Action Button */}
              <button
                onClick={() => triggerMatching(inputText)}
                disabled={isMatching || !inputText.trim()}
                className="w-full py-3 bg-ink hover:bg-accent text-paper hover:text-white font-mono text-[10px] uppercase tracking-widest rounded-sm transition-all text-center font-bold flex items-center justify-center space-x-2 disabled:bg-ink/30 disabled:text-paper/50 disabled:cursor-not-allowed"
                id="btn-trigger-matching"
              >
                {isMatching ? (
                  <>
                    <RefreshCw className="w-4.5 h-4.5 animate-spin" />
                    <span>Analyzing Context ({matchingProgress}%)</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4.5 h-4.5" />
                    <span>Analyze & Match Tagline</span>
                  </>
                )}
              </button>

              {/* Presets / Prompts */}
              <div className="space-y-2.5 pt-2 border-t border-ink/8" id="matching-presets">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-ink/40 block">Or Try a Common Challenge Prompt:</span>
                <div className="flex flex-wrap gap-2" id="presets-links-container">
                  {PRESETS.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => handleApplyPreset(preset.text)}
                      className="px-2.5 py-1.5 bg-white hover:bg-ink hover:text-paper border border-ink/10 hover:border-ink rounded-sm text-[10px] text-ink/75 transition-all text-left font-medium"
                      id={`preset-btn-${index}`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Active Motto Card */}
            <div className="bg-ink text-paper p-6 rounded-sm relative overflow-hidden" id="current-active-motto-card">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent opacity-5 blur-xl rounded-full" />
              
              <div className="space-y-4 relative" id="active-motto-display">
                <div className="flex items-center justify-between" id="active-motto-header">
                  <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 bg-paper/10 text-paper/85 rounded-sm border border-paper/10">
                    {activeTagline.categoryLabel}
                  </span>
                  <span className="text-[9px] font-mono text-paper/50 font-bold uppercase tracking-widest">
                    Voice: {activeTagline.voice}
                  </span>
                </div>

                <div className="py-2" id="active-motto-text-block">
                  <p className="text-base md:text-lg font-serif-display italic font-medium leading-relaxed text-paper">
                    "{activeTagline.text}"
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-paper/10" id="active-motto-actions">
                  <div className="flex items-center space-x-2 text-[10px] text-paper/60 font-mono" id="active-motto-merch-hint">
                    <Info className="w-3.5 h-3.5 text-accent" />
                    <span>Embarks beautifully on print & merch!</span>
                  </div>
                  
                  <button
                    onClick={handleCopy}
                    className="self-end sm:self-auto px-4 py-2 bg-paper text-ink hover:bg-accent hover:text-white font-mono text-[9px] font-bold uppercase tracking-wider rounded-sm transition-all flex items-center space-x-1.5"
                    id="btn-copy-motto"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Social Post</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Craft Live Merch & Print Visualizer */}
          <div className="lg:col-span-7 space-y-6" id="tagline-engine-right">
            
            <div className="bg-paper border border-ink/15 rounded-sm overflow-hidden shadow-md" id="merch-visualizer-container">
              
              {/* Tab Selector & Controls */}
              <div className="bg-paper px-6 py-4 border-b border-ink/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4" id="visualizer-header">
                
                {/* Product Select Tabs */}
                <div className="flex items-center space-x-1" id="visualizer-product-tabs">
                  <button
                    onClick={() => setActiveMerchTab('notebook')}
                    className={`px-3 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all ${activeMerchTab === 'notebook' ? 'bg-ink text-paper' : 'text-ink/65 hover:bg-black/5 hover:text-ink'}`}
                    id="tab-select-notebook"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Owner's Notebook</span>
                    <span className="sm:hidden">Notebook</span>
                  </button>
                  <button
                    onClick={() => setActiveMerchTab('mug')}
                    className={`px-3 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all ${activeMerchTab === 'mug' ? 'bg-ink text-paper' : 'text-ink/65 hover:bg-black/5 hover:text-ink'}`}
                    id="tab-select-mug"
                  >
                    <Coffee className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Ceramic Mug</span>
                    <span className="sm:hidden">Mug</span>
                  </button>
                  <button
                    onClick={() => setActiveMerchTab('poster')}
                    className={`px-3 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all ${activeMerchTab === 'poster' ? 'bg-ink text-paper' : 'text-ink/65 hover:bg-black/5 hover:text-ink'}`}
                    id="tab-select-poster"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Shop Wall Poster</span>
                    <span className="sm:hidden">Poster</span>
                  </button>
                  <button
                    onClick={() => setActiveMerchTab('shirt')}
                    className={`px-3 py-2 rounded-sm text-xs font-mono font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-all ${activeMerchTab === 'shirt' ? 'bg-ink text-paper' : 'text-ink/65 hover:bg-black/5 hover:text-ink'}`}
                    id="tab-select-shirt"
                  >
                    <Shirt className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Crew T-Shirt</span>
                    <span className="sm:hidden">T-Shirt</span>
                  </button>
                </div>

                {/* Color Selector Accent */}
                <div className="flex items-center space-x-2" id="merch-color-picker">
                  <span className="text-[10px] font-mono tracking-wide uppercase text-ink/40 font-bold">Color:</span>
                  <div className="flex items-center space-x-1.5" id="color-dots-row">
                    <button 
                      onClick={() => setCustomMerchColor('#121212')} 
                      className={`w-4.5 h-4.5 rounded-full bg-[#121212] border transition-all ${customMerchColor === '#121212' ? 'border-accent scale-110 shadow-sm' : 'border-ink/20'}`}
                      aria-label="Slate Charcoal"
                    />
                    <button 
                      onClick={() => setCustomMerchColor('#4A3728')} 
                      className={`w-4.5 h-4.5 rounded-full bg-[#4A3728] border transition-all ${customMerchColor === '#4A3728' ? 'border-accent scale-110 shadow-sm' : 'border-ink/20'}`}
                      aria-label="Leather Brown"
                    />
                    <button 
                      onClick={() => setCustomMerchColor('#1C2E24')} 
                      className={`w-4.5 h-4.5 rounded-full bg-[#1C2E24] border transition-all ${customMerchColor === '#1C2E24' ? 'border-accent scale-110 shadow-sm' : 'border-ink/20'}`}
                      aria-label="Pine Green"
                    />
                    <button 
                      onClick={() => setCustomMerchColor('#C5A059')} 
                      className={`w-4.5 h-4.5 rounded-full bg-[#C5A059] border transition-all ${customMerchColor === '#C5A059' ? 'border-[#121212] scale-110 shadow-sm' : 'border-ink/20'}`}
                      aria-label="Gold Sand"
                    />
                  </div>
                </div>
              </div>

              {/* Stage Canvas */}
              <div className="p-8 bg-neutral-100 flex items-center justify-center relative min-h-[380px] overflow-hidden" id="visualizer-stage-canvas">
                
                {/* Background Grid Pattern for Premium Studio Vibe */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                <AnimatePresence mode="wait">
                  
                  {/* NOTEBOOK VISUALIZER */}
                  {activeMerchTab === 'notebook' && (
                    <motion.div
                      key="notebook-preview"
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-64 h-80 rounded-r-lg shadow-2xl flex flex-col justify-between p-6 border-l-8 select-none border-black/35"
                      style={{ 
                        backgroundColor: customMerchColor,
                        color: customMerchColor === '#C5A059' ? '#121212' : '#FBFBF9',
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.35), inset -2px 0 10px rgba(255,255,255,0.06)'
                      }}
                      id="visual-notebook-motto"
                    >
                      {/* Notebook bookmark band / elastic band */}
                      <div className="absolute right-8 top-0 bottom-0 w-3.5 bg-black/15 shadow-sm pointer-events-none" />
                      
                      {/* Gold bookmark ribbon */}
                      <div className="absolute left-1/4 top-0 w-2.5 h-12 bg-accent shadow-sm" style={{ top: '-4px' }} />

                      <div className="space-y-4 text-left" id="nb-top-logo-block">
                        <span className="font-mono text-[8px] tracking-widest uppercase font-bold opacity-45">
                          OWNER MINDSET SERIES
                        </span>
                        <div className="w-6 h-1 bg-accent/40 rounded-sm" />
                      </div>

                      {/* Tagline emboss text */}
                      <div className="my-auto space-y-4 pr-3 text-left" id="nb-middle-text-block">
                        <p className={`font-serif-display font-medium leading-relaxed tracking-tight ${customMerchColor === '#C5A059' ? 'text-black/85' : 'text-accent/95'}`} style={{ fontSize: activeTagline.text.length > 70 ? '11px' : '13px' }}>
                          "{activeTagline.text}"
                        </p>
                      </div>

                      <div className="flex items-end justify-between border-t border-white/10 pt-4" id="nb-footer-block" style={{ borderTopColor: customMerchColor === '#C5A059' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
                        <span className="font-mono text-[8px] tracking-widest uppercase font-bold opacity-35">
                          RUN IT LIKE THE RICH
                        </span>
                        <span className="font-mono text-[7px] font-bold opacity-20">No. {activeTagline.id.toUpperCase()}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* CERAMIC MUG VISUALIZER */}
                  {activeMerchTab === 'mug' && (
                    <motion.div
                      key="mug-preview"
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-52 h-52 select-none"
                      id="visual-mug-motto"
                    >
                      {/* Mug shadow */}
                      <div className="absolute -bottom-4 left-6 right-6 h-6 bg-black/15 blur-md rounded-full pointer-events-none" />

                      {/* Mug handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-28 rounded-r-3xl border-[16px] pointer-events-none" 
                        style={{ 
                          borderColor: customMerchColor,
                          transform: 'translateY(-50%) translateX(24px) rotate(5deg)',
                          boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.15)'
                        }} 
                      />

                      {/* Mug body */}
                      <div className="relative w-full h-full rounded-2xl flex flex-col justify-between p-6 border border-white/10"
                        style={{ 
                          backgroundColor: customMerchColor,
                          color: customMerchColor === '#C5A059' ? '#121212' : '#FBFBF9',
                          boxShadow: 'inset -20px 0 30px rgba(0,0,0,0.25), inset 10px 0 20px rgba(255,255,255,0.06), 0 15px 30px rgba(0,0,0,0.15)'
                        }}
                      >
                        <div className="flex justify-start opacity-40" id="mug-logo-line">
                          <span className="font-mono text-[7px] tracking-widest uppercase font-bold">THE BACK-OFFICE RIGOR</span>
                        </div>

                        {/* Centered text print block */}
                        <div className="text-left py-2 pr-2" id="mug-print-content">
                          <p className={`font-mono text-center font-bold uppercase tracking-wider leading-relaxed ${customMerchColor === '#C5A059' ? 'text-black' : 'text-paper'}`} style={{ fontSize: activeTagline.text.length > 70 ? '8px' : '9px' }}>
                            {activeTagline.text}
                          </p>
                        </div>

                        <div className="flex justify-center border-t pt-3 opacity-30" id="mug-footer-line" style={{ borderTopColor: customMerchColor === '#C5A059' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
                          <span className="font-mono text-[7px] font-bold">RUN IT LIKE THE RICH</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SHOP WALL POSTER VISUALIZER */}
                  {activeMerchTab === 'poster' && (
                    <motion.div
                      key="poster-preview"
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-64 h-80 bg-stone-50 p-6 border-8 border-[#3d2b1f] shadow-2xl flex flex-col justify-between select-none"
                      style={{ 
                        boxShadow: '0 30px 60px -15px rgba(0,0,0,0.4), inset 0 0 40px rgba(0,0,0,0.02)'
                      }}
                      id="visual-poster-motto"
                    >
                      {/* Frame shadow overlay */}
                      <div className="absolute inset-0 border border-white/10 pointer-events-none" />

                      <div className="border border-ink/10 h-full flex flex-col justify-between p-4" id="poster-inner-matting">
                        
                        <div className="flex items-center justify-between border-b border-ink/10 pb-3" id="poster-header">
                          <span className="font-mono text-[7px] tracking-widest uppercase font-bold text-ink/40">
                            RULE NO. {activeTagline.id.toUpperCase()}
                          </span>
                          <span className="font-mono text-[7px] font-bold text-accent-dark px-1.5 py-0.5 bg-accent-light border border-accent/15 rounded-sm">
                            {activeTagline.categoryLabel.toUpperCase()}
                          </span>
                        </div>

                        {/* Classic Swiss design editorial typography */}
                        <div className="text-left my-auto space-y-4" id="poster-body">
                          <h4 className="font-serif-display italic font-medium leading-relaxed text-ink text-sm md:text-base tracking-tight">
                            "{activeTagline.text}"
                          </h4>
                          <div className="w-10 h-0.5 bg-accent" />
                        </div>

                        <div className="border-t border-ink/10 pt-3 flex items-center justify-between" id="poster-footer">
                          <div className="space-y-0.5" id="poster-credit">
                            <p className="font-mono text-[7px] font-bold text-ink/70">RUN IT LIKE THE RICH</p>
                            <p className="font-mono text-[6px] text-ink/40 uppercase tracking-widest">Aesthetic Back-Office Series</p>
                          </div>
                          <span className="font-mono text-[7px] text-ink/30 font-bold">2026 EDITION</span>
                        </div>

                      </div>
                    </motion.div>
                  )}

                  {/* CREW T-SHIRT VISUALIZER */}
                  {activeMerchTab === 'shirt' && (
                    <motion.div
                      key="shirt-preview"
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -15, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-64 h-64 flex items-center justify-center select-none"
                      id="visual-shirt-motto"
                    >
                      {/* Stylized vector folded t-shirt */}
                      <svg 
                        viewBox="0 0 100 100" 
                        className="w-full h-full drop-shadow-xl"
                        style={{ fill: customMerchColor }}
                      >
                        {/* T-shirt background contour */}
                        <path d="M 50 12 L 78 18 L 88 36 L 76 42 L 72 34 L 72 88 L 28 88 L 28 34 L 24 42 L 12 36 L 22 18 Z" />
                        {/* Collar cut */}
                        <path d="M 40 12 A 10 10 0 0 0 60 12 Z" fill="#e5e5e5" opacity="0.3" />
                        <path d="M 38 12 A 12 12 0 0 0 62 12 Z" fill="none" stroke="#121212" strokeWidth="1" opacity="0.15" />
                        
                        {/* Folded shadows */}
                        <path d="M 28 34 L 28 88" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
                        <path d="M 72 34 L 72 88" stroke="rgba(0,0,0,0.15)" strokeWidth="1.5" />
                      </svg>

                      {/* Overlayed text print area */}
                      <div className="absolute top-[32%] left-[25%] right-[25%] max-h-[100px] flex flex-col justify-center items-center pointer-events-none" id="shirt-print-overlay">
                        <span className={`font-mono text-[5px] tracking-wider uppercase font-bold mb-1 opacity-40 ${customMerchColor === '#C5A059' ? 'text-black' : 'text-paper'}`}>
                          CREW SPECIFICATION
                        </span>
                        
                        <p className={`font-serif-display italic font-medium text-center tracking-tight text-xs scale-90 ${customMerchColor === '#C5A059' ? 'text-black' : 'text-accent'}`} style={{ fontSize: activeTagline.text.length > 70 ? '5.5px' : '7px', lineHeight: '1.25' }}>
                          "{activeTagline.text}"
                        </p>

                        <div className={`mt-2 w-4 h-[1px] ${customMerchColor === '#C5A059' ? 'bg-black/20' : 'bg-paper/20'}`} />
                        <span className={`font-mono text-[4.5px] uppercase font-bold tracking-widest mt-1.5 opacity-30 ${customMerchColor === '#C5A059' ? 'text-black' : 'text-paper'}`}>
                          RUN IT LIKE THE RICH
                        </span>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Action and Download guidelines for Print Items */}
              <div className="bg-paper border border-ink/10 rounded-sm p-5" id="tagline-merch-guide">
                <h5 className="font-sans font-medium text-xs text-ink uppercase tracking-wider mb-2">Print & Merch Guidelines</h5>
                <p className="text-xs text-ink/60 leading-relaxed mb-3">
                  This tagline is optimized for high-contrast typographic printing. Pair with standard serifs (e.g. <span className="font-mono text-[10px]">Playfair</span>) for the quote, and clean monospaced fonts (e.g. <span className="font-mono text-[10px]">JetBrains Mono</span>) for the signature block.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2" id="merch-action-buttons">
                  <button
                    onClick={() => showToast(`Successfully generated hi-res vector print template for "${activeTagline.text}". (Simulated download)`)}
                    className="flex-1 py-2 bg-ink hover:bg-accent text-paper hover:text-white font-mono text-[9px] uppercase tracking-widest font-bold transition-all text-center rounded-sm"
                    id="btn-download-vector"
                  >
                    Download Vector (.SVG)
                  </button>
                  <button
                    onClick={() => showToast(`Redirecting to Printful/Printify custom merchandise builder with "${activeTagline.text}" loaded. (Simulated integration)`)}
                    className="flex-1 py-2 bg-transparent hover:bg-paper border border-ink/15 text-ink/75 hover:text-ink font-mono text-[9px] uppercase tracking-widest font-bold transition-all text-center rounded-sm"
                    id="btn-send-to-printify"
                  >
                    Send to Printify
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Tagline Explorer Section */}
        <div className="mt-16 pt-12 border-t border-ink/10" id="tagline-explorer-drawer">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8" id="explorer-header-row">
            <div>
              <h3 className="text-xl md:text-2xl font-serif-display text-ink font-bold">The Complete Motto & Tagline Bank</h3>
              <p className="text-xs text-ink/60 mt-1 leading-relaxed">
                Browse, search, or filter all 100+ witty brand taglines and rules to use in your social channels or printing templates.
              </p>
            </div>

            {/* Simple Search bar */}
            <div className="relative w-full md:w-72" id="explorer-search-bar">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="w-3.5 h-3.5 text-ink/40" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search taglines or keywords..."
                className="w-full pl-9 pr-4 py-2 bg-paper border border-ink/15 rounded-sm text-xs text-ink placeholder-ink/40 focus:border-accent focus:outline-none transition-all"
                id="input-tagline-search"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-ink/8 pb-4 mb-6" id="explorer-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider transition-all border ${selectedCategory === cat.id ? 'bg-accent-light text-accent-dark border-accent/30 font-extrabold' : 'bg-transparent text-ink/60 border-transparent hover:bg-black/5 hover:text-ink'}`}
                id={`cat-tab-select-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="explorer-taglines-grid">
            {filteredTaglines.length > 0 ? (
              filteredTaglines.map((tagline) => (
                <div
                  key={tagline.id}
                  onClick={() => {
                    setActiveTagline(tagline);
                    // Scroll back to card display area if mobile
                    const element = document.getElementById('current-active-motto-card');
                    if (element && window.innerWidth < 768) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`p-4 border rounded-sm transition-all cursor-pointer text-left flex flex-col justify-between space-y-3 ${activeTagline.id === tagline.id ? 'border-accent bg-accent-light/30 ring-1 ring-accent/15' : 'border-ink/10 bg-white hover:border-ink/20 hover:bg-paper'}`}
                  id={`grid-tagline-item-${tagline.id}`}
                >
                  <p className="text-xs text-ink font-serif-display italic font-medium leading-relaxed">
                    "{tagline.text}"
                  </p>
                  <div className="flex items-center justify-between text-[8px] font-mono text-ink/40 pt-2 border-t border-ink/5" id={`grid-item-footer-${tagline.id}`}>
                    <span className="uppercase font-bold tracking-wider">{tagline.categoryLabel}</span>
                    <span className="font-bold">No. {tagline.id.toUpperCase()}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center space-y-3 bg-paper border border-dashed border-ink/15 rounded-sm" id="no-taglines-found">
                <HelpCircle className="w-8 h-8 text-ink/30 mx-auto" />
                <p className="text-sm font-serif-display italic text-ink/50">No taglines match your search query.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                  className="px-3 py-1.5 bg-ink text-paper font-mono text-[9px] uppercase tracking-widest font-bold rounded-sm transition-all"
                  id="btn-reset-explorer"
                >
                  Reset Explorer
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

// Global utility helper inside client scope for interactive alerts without breaking flow
function showToast(message: string) {
  // Simple custom visual notification box in browser
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-6 right-6 bg-[#121212] text-[#FBFBF9] border border-[#C5A059]/40 px-5 py-3.5 rounded shadow-xl text-xs font-mono font-bold tracking-wider z-50 animate-bounce flex items-center space-x-2';
  toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}
