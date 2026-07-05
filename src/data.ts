import { ScorecardQuestion, StartHereCard, LauraOfferCard } from './types';

export const SCORECARD_QUESTIONS: ScorecardQuestion[] = [
  {
    id: 'a1',
    category: 'A',
    title: 'File & Information Structure',
    text: 'Where are your critical files, emails, passwords, and vendor agreements stored?',
    choices: [
      {
        text: 'Scattered across multiple systems',
        points: 0,
        description: 'Files are on desktops, in email threads, or physical paper. Finding documents takes major effort.'
      },
      {
        text: 'In the cloud, but unorganized',
        points: 2,
        description: 'We use Google Drive/Dropbox, but there is no clear folder naming convention or structural hierarchy.'
      },
      {
        text: 'Structured command center',
        points: 5,
        description: 'Everything is in a shared virtual hub with clear guidelines, active folder structures, and password security.'
      }
    ]
  },
  {
    id: 'a2',
    category: 'A',
    title: 'Owner Routines',
    text: 'How do you handle your weekly and monthly admin routines (reconciliations, billing, reviewing records)?',
    choices: [
      {
        text: 'Reactive and from memory',
        points: 0,
        description: 'Tasks are done when things break, when invoices are overdue, or when tax deadlines force them.'
      },
      {
        text: 'Periodic, but inconsistent',
        points: 2,
        description: 'I try to handle admin monthly, but it easily slips by several weeks if I get busy.'
      },
      {
        text: 'Scheduled, locked routines',
        points: 5,
        description: 'Admin block is scheduled on my calendar every week. Reconciliations and reports happen like clockwork.'
      }
    ]
  },
  {
    id: 'a3',
    category: 'A',
    title: 'Operations Documentation',
    text: 'Are your standard workflows, key contact lists, and system procedures documented?',
    choices: [
      {
        text: 'Completely undocumented',
        points: 0,
        description: 'Operational routines are inside my head or my employees\' heads. If someone leaves, systems break.'
      },
      {
        text: 'Loosely or outdated notes',
        points: 2,
        description: 'We have some scattered word docs or notes, but they are incomplete and rarely updated.'
      },
      {
        text: 'Clean operational hub',
        points: 5,
        description: 'All essential procedures and emergency guidelines are cleanly documented in our digital headquarters.'
      }
    ]
  },
  {
    id: 'b1',
    category: 'B',
    title: 'Bookkeeping Health',
    text: 'How current and accurate are your QuickBooks Online or accounting system records?',
    choices: [
      {
        text: 'Months behind or tax-only cleanup',
        points: 0,
        description: 'Books are neglected during the year and hastily cleaned up once a year for the tax preparer.'
      },
      {
        text: 'Reconciled, but with messy details',
        points: 2,
        description: 'Reconciliations occur, but we have suspense accounts, uncategorized transactions, or old unmatched rules.'
      },
      {
        text: 'Weekly reconciled and clean',
        points: 5,
        description: 'Reconciled weekly or monthly with absolute precision, correct categories, and zero lingering mystery balances.'
      }
    ]
  },
  {
    id: 'b2',
    category: 'B',
    title: 'Cash & Tax Management',
    text: 'How do you track cash flow, owner salary/draws, and impending tax liabilities?',
    choices: [
      {
        text: 'Bank-balance bookkeeping',
        points: 0,
        description: 'I look at the bank login balance to decide if we are healthy, and frequently get surprised by tax bills.'
      },
      {
        text: 'Manual trackers or spreadsheet summaries',
        points: 2,
        description: 'I use a custom spreadsheet to project taxes and track pay, but it is manual and occasionally falls behind.'
      },
      {
        text: 'Structured allocation system',
        points: 5,
        description: 'We allocate tax percentages immediately, pay the owner on structure, and run a reliable cash cushion.'
      }
    ]
  },
  {
    id: 'b3',
    category: 'B',
    title: 'Financial Fluency',
    text: 'How confidently do you read your Profit & Loss and Balance Sheet to make decisions?',
    choices: [
      {
        text: 'Never look or don\'t trust them',
        points: 0,
        description: 'I rarely open the financial statements, or I do not believe the numbers reflect my actual business reality.'
      },
      {
        text: 'Understand the basics, look occasionally',
        points: 2,
        description: 'I understand top-line revenue and net income, but struggle to parse what the statements show about cash flow.'
      },
      {
        text: 'Proactive review from facts',
        points: 5,
        description: 'I read both statements monthly. I know my cost of goods sold, gross margins, and make pricing decisions on hard facts.'
      }
    ]
  },
  {
    id: 'c1',
    category: 'C',
    title: 'Compliance Calendar',
    text: 'How do you track annual state reports, sales tax, payroll tax, 1099s, and key renewals?',
    choices: [
      {
        text: 'Reactive to mail/notifications',
        points: 0,
        description: 'We wait for physical letters or emails from agencies. Sometimes we incur late fees or missed deadlines.'
      },
      {
        text: 'Unstructured calendar entries',
        points: 2,
        description: 'We put dates on standard personal calendars, but without organized checklist steps or reminders.'
      },
      {
        text: 'Absolute compliance schedule',
        points: 5,
        description: 'A bulletproof compliance calendar tracks every corporate, tax, and insurance deadline with 30-day lead times.'
      }
    ]
  },
  {
    id: 'c2',
    category: 'C',
    title: 'Legal & Corporate Hygiene',
    text: 'What is the state of your corporate records, operating agreements, and active contracts?',
    choices: [
      {
        text: 'Outdated or non-existent',
        points: 0,
        description: 'We haven\'t written corporate minutes in years, operating agreements are unsigned, and contracts are oral.'
      },
      {
        text: 'Partial templates, rarely audited',
        points: 2,
        description: 'We have basic agreements from incorporation, but they haven\'t been updated to reflect current state law or operations.'
      },
      {
        text: 'Active compliance & active files',
        points: 5,
        description: 'All operating agreements, corporate resolutions, vendor agreements, and active licenses are current and stored safely.'
      }
    ]
  },
  {
    id: 'c3',
    category: 'C',
    title: 'Audit & Due Diligence Readiness',
    text: 'How quickly could you supply a bank, auditor, or buyer with pristine, audit-ready files?',
    choices: [
      {
        text: 'Weeks of stressful cleanup',
        points: 0,
        description: 'Absolute panic. It would take a massive, expensive effort with an accountant to pull files together.'
      },
      {
        text: 'A few stressful days',
        points: 2,
        description: 'We have most records, but they are stored in various accounts, physical drawers, and require manual merging.'
      },
      {
        text: 'Instant, audit-ready command',
        points: 5,
        description: 'Total calm. Our structured file hub allows us to bundle and share comprehensive, pristine reports instantly.'
      }
    ]
  }
];

export const START_HERE_CARDS: StartHereCard[] = [
  {
    id: 'newsletter',
    title: 'Read the Newsletter',
    description: 'Weekly owner reset ideas, business systems, money routines, and Run It Like the Rich lessons.',
    buttonText: 'Read on Substack',
    link: '#newsletter',
    badge: 'Weekly'
  },
  {
    id: 'videos',
    title: 'Watch the Videos',
    description: 'Short lessons on business systems, books, compliance, and owner discipline.',
    buttonText: 'Watch on YouTube',
    link: '#youtube',
    badge: 'Free Video'
  },
  {
    id: 'downloads',
    title: 'Download Owner Tools',
    description: 'Scorecards, checklists, templates, cash snapshots, compliance calendars, and starter kits.',
    buttonText: 'Shop Digital Downloads',
    link: '#downloads',
    badge: 'Saves Hours'
  },
  {
    id: 'motto',
    title: 'Shop the Motto',
    description: 'Run It Like the Rich merch, owner rules, notebooks, mugs, shirts, and business mindset products.',
    buttonText: 'Shop Merch',
    link: '#merch',
    badge: 'Gear'
  },
  {
    id: 'booking',
    title: 'Book a Business Checkup',
    description: 'Get help reviewing your books, admin systems, compliance, and back-office structure.',
    buttonText: 'Book a Call',
    link: '#booking',
    badge: '1-on-1'
  }
];

export const LAURA_OFFERS: LauraOfferCard[] = [
  {
    id: 'checkup',
    title: 'ABC Business Checkup',
    description: 'A practical, exhaustive review of your current back-office structure to locate costly blindspots.',
    bullet: 'Deep-dive review of files, admin tools, active books, reports, and compliance liabilities.',
    buttonText: 'Book a Business Checkup',
    link: '#booking',
    badge: 'Most Popular'
  },
  {
    id: 'qbo',
    title: 'QBO Diagnostic',
    description: 'A focused, expert QuickBooks Online audit to pinpoint reconcile errors, red flags, and tax issues.',
    bullet: 'Identifies cleanup priorities, inventory mistakes, uncleared ledger entries, and reporting bugs.',
    buttonText: 'Book a QBO Review',
    link: '#booking',
    badge: 'For Messy Books'
  },
  {
    id: 'vhq',
    title: 'Virtual HQ Setup',
    description: 'Establish a custom-tailored digital command center designed for your daily and annual operations.',
    bullet: 'A clean operating hub for passwords, workflows, documents, compliance calendars, and routine scripts.',
    buttonText: 'Ask About Virtual HQ',
    link: '#virtualhq',
    badge: 'Complete System'
  },
  {
    id: 'cleanup',
    title: 'Cleanup & Catch-Up Support',
    description: 'Get clean, accurate bookkeeping records and file structures ready ahead of taxes or lending needs.',
    bullet: 'Direct hands-on reconciliation, document sourcing, and corporate hygiene cleanup.',
    buttonText: 'Request Help',
    link: '#contact',
    badge: 'Done-For-You'
  }
];
