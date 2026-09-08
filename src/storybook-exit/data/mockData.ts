import { RoadmapStage, SystemPillar, VirtualHqModule } from '../types';

export const SYSTEM_PILLARS: SystemPillar[] = [
  {
    number: '01',
    title: 'Financial Quality',
    shortDesc: 'Clean books, meaningful margins, reconciled balance sheet accounts, consistent transaction treatment, tax-to-books continuity and support for material adjustments.',
    details: [
      'Industry-standard, clean Chart of Accounts structure',
      'Balance sheet accounts, payroll liabilities, equity & debt fully reconciled',
      'Consistent transaction and expense categorization across multi-year timeline',
      'Tax-to-books continuity documentation with clear add-back support schedules'
    ],
    impactOnValuation: 'Eliminates QoE write-downs and purchase price renegotiations.',
    keyArtifact: 'Financial StoryBook™ & Adjusted EBITDA Workpapers'
  },
  {
    number: '02',
    title: 'Profit & Efficiency',
    shortDesc: 'Look for cost leaks, duplicated work, unnecessary software, vendor increases, margin pressure and processes that consume time without creating value.',
    details: [
      'Identification and plugging of recurring software & vendor cost leaks',
      'Gross margin optimization to prove sustainable pricing power',
      'Elimination of duplicated administrative and operational work',
      'Working capital cycle tuning to maximize cash flow predictability'
    ],
    impactOnValuation: 'Expands baseline EBITDA to compound overall exit valuation.',
    keyArtifact: 'Margin Defense & Vendor Matrix'
  },
  {
    number: '03',
    title: 'Team Strength',
    shortDesc: 'Clarify responsibilities, improve communication, create backup coverage, document procedures and strengthen the people a buyer will inherit.',
    details: [
      'Clear cross-training matrices and secondary backup coverage for all roles',
      'Standard operating procedures (SOPs) documented by current staff',
      'Elimination of single-point-of-failure key person dependencies',
      'Retention architecture for vital management and technical staff'
    ],
    impactOnValuation: 'Assures private equity and strategic buyers that the company will not collapse post-sale.',
    keyArtifact: 'Team Capability & Succession Roster'
  },
  {
    number: '04',
    title: 'Owner Independence',
    shortDesc: 'Move the owner gradually from operator to leader and expert of the brand while the company learns to function without constant owner intervention.',
    details: [
      'Systematic delegation of daily customer escalations and operational approvals',
      'Owner transition to strategic executive leadership & brand evangelist',
      'Measurable reduction of owner working hours required for daily execution',
      'Autonomous management operating cadences and decision protocols'
    ],
    impactOnValuation: 'Upgrades your multiple from an owner-operator discount (2.5x) to an enterprise asset (5x–7x+).',
    keyArtifact: 'Owner Disengagement Scorecard & Protocol'
  },
  {
    number: '05',
    title: 'Company Memory',
    shortDesc: 'Preserve project history, decisions, procedures, contracts, people, records and operating knowledge so the business does not live only inside individual heads.',
    details: [
      'Centralized digital archive of past projects, client files, and milestone logs',
      'Institutional knowledge capture before long-tenured employees retire or leave',
      'Organized legal contracts, vendor renewal dates, and compliance records',
      'Digital Virtual HQ™ operational hub accessible across the enterprise'
    ],
    impactOnValuation: 'Protects proprietary operational IP and slashes buyer training risk.',
    keyArtifact: 'Virtual HQ™ Institutional Knowledge Vault'
  },
  {
    number: '06',
    title: 'Buyer Readiness',
    shortDesc: 'Organize the financial and operational evidence that helps advisors, lenders and buyers understand what the company earns and how it operates.',
    details: [
      'Pre-indexed virtual due diligence data room built over years, not weeks',
      'Clear, defended historical add-backs ready for Quality of Earnings audits',
      'Verified customer concentration and recurring revenue retention metrics',
      'Seamless alignment with your CPA, M&A attorney, and business broker'
    ],
    impactOnValuation: 'Accelerates closing time by 60% and prevents buyer retrades.',
    keyArtifact: 'Pre-Packaged StoryBookExit™ Deal Data Room'
  }
];

export const VIRTUAL_HQ_MODULES: VirtualHqModule[] = [
  {
    id: 'timeline',
    name: 'Company Timeline',
    tagline: 'Important history, changes, decisions and milestones',
    description: 'A chronological digital log of key corporate events, pivots, acquisitions, leadership changes, and growth milestones that proves longevity and stability to prospective acquirers.',
    sampleItems: ['Corporate founding & entity restructurings', 'Major software & equipment investments', 'Annual strategic roadmap achievements', 'Leadership promotions & team milestones'],
    buyerValue: 'Provides instant context on organizational maturity and steady execution over time.',
    iconName: 'History'
  },
  {
    id: 'team',
    name: 'Team & Roles',
    tagline: 'People, responsibilities, backup coverage and key-person knowledge',
    description: 'Dynamic organizational chart detailing job responsibilities, skills inventories, primary/secondary backup assignments, and compensation history.',
    sampleItems: ['Role responsibility profiles & KPIs', 'Cross-training & backup coverage matrix', 'Key-person knowledge capture briefs', 'Contractor and vendor contact rosters'],
    buyerValue: 'Proves the company is not dependent on any single employee or the founder.',
    iconName: 'Users'
  },
  {
    id: 'projects',
    name: 'Projects & Workflows',
    tagline: 'Active work, historical projects, notes and supporting files',
    description: 'Centralized registry of client deliverables, internal initiatives, operational improvements, and historical project post-mortems.',
    sampleItems: ['Active client delivery tracker', 'Historical major project archives', 'Workflow handoff specifications', 'Resource allocation histories'],
    buyerValue: 'Demonstrates disciplined project delivery and repeatable execution.',
    iconName: 'FolderKanban'
  },
  {
    id: 'procedures',
    name: 'Procedures & SOPs',
    tagline: 'How the company actually gets important work done',
    description: 'Step-by-step operating documentation created and maintained by the people who do the work, ensuring zero loss of operational capability upon ownership transfer.',
    sampleItems: ['Core billing & invoicing workflows', 'Client onboarding & service delivery steps', 'Quality assurance checklists', 'Crisis management & operational contingencies'],
    buyerValue: 'Guarantees seamless training and continuity for incoming post-acquisition leadership.',
    iconName: 'FileCode2'
  },
  {
    id: 'contracts',
    name: 'Contracts & Compliance',
    tagline: 'Renewals, obligations, records and supporting evidence',
    description: 'Searchable repository of customer agreements, vendor service contracts, leases, IP assignments, corporate resolutions, and regulatory compliance records.',
    sampleItems: ['Master service agreements (MSAs) & Statements of Work', 'Vendor contracts & price lock schedules', 'Key employee non-compete/IP agreements', 'State registrations & corporate minutes'],
    buyerValue: 'Removes legal ambiguity and avoids last-minute due diligence scrambling.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'financial',
    name: 'Financial & Tax History',
    tagline: 'Reports, returns, workpapers and important financial support',
    description: 'Multi-year reconciled historical financials, federal and state tax returns, CPA workpapers, debt amortization schedules, and normalized EBITDA adjustment schedules.',
    sampleItems: ['5-Year reconciled P&L, Balance Sheets, Cash Flow', 'Tax returns matched to audited/reviewed books', 'Owner discretionary add-back justification sheets', 'Working capital & seasonality trend reports'],
    buyerValue: 'Builds ironclad credibility with Quality of Earnings (QoE) auditors and bank underwriters.',
    iconName: 'TrendingUp'
  },
  {
    id: 'customer',
    name: 'Customer & Vendor History',
    tagline: 'Relationships, recurring information and institutional knowledge',
    description: 'Long-term relationship logs, historical purchasing volumes, vendor price concessions, and customer retention metrics that prove high customer loyalty.',
    sampleItems: ['Top 20 customer longevity & churn metrics', 'Vendor contract terms & rebate histories', 'Customer satisfaction & recurring contract logs', 'Referral partner networks and agreements'],
    buyerValue: 'Verifies customer lifetime value and validates lack of severe customer concentration.',
    iconName: 'Handshake'
  },
  {
    id: 'due_diligence',
    name: 'Due Diligence Structure',
    tagline: 'An organized foundation for future buyer and advisor requests',
    description: 'A pre-indexed, secure digital data room organized into standard M&A categories, ready to be handed to your broker, CPA, or investment banker when the time comes.',
    sampleItems: ['M&A standard index checklist (120+ items)', 'Clean folder hierarchy matching investment bank requirements', 'Confidentiality watermarking & role permissions', 'Q&A tracking log template for buyer inquiries'],
    buyerValue: 'Transforms a 6-month painful diligence nightmare into a smooth, 30-day confirmatory audit.',
    iconName: 'LockKeyhole'
  }
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    id: 'stage_5_7',
    period: '5–7 YEARS',
    title: 'Build the Foundation',
    subtitle: 'Assess, baseline, and eliminate fundamental operational drag',
    description: 'Baseline the books, systems, team and owner dependence. Fix the biggest accounting and operational weaknesses. Start establishing clean historical transaction logs.',
    deliverables: [
      'Comprehensive financial quality and Chart of Accounts cleanup',
      'Initial Owner Dependence Audit and daily bottleneck analysis',
      'Virtual HQ™ digital operating workspace deployment',
      'Establishment of tax-to-books continuity protocols'
    ],
    buyerPerspective: '“We see a company that made the conscious decision years ago to operate with institutional discipline.”',
    focusArea: 'Accounting integrity & basic operating systems',
    iconName: 'Compass'
  },
  {
    id: 'stage_3_5',
    period: '3–5 YEARS',
    title: 'Strengthen the Business',
    subtitle: 'Expand margins, build management depth, and solidify procedures',
    description: 'Improve gross and net margins, streamline workflows, document procedures, develop management depth, increase recurring revenue visibility, and capture company documentation.',
    deliverables: [
      'Core SOP documentation across all operational departments',
      'Cross-training and secondary backup matrix for all roles',
      'Vendor negotiations and cost-leak elimination to widen EBITDA',
      'Management team empowerment for daily autonomous operations'
    ],
    buyerPerspective: '“The business runs on reliable processes, not on founder heroism or unwritten tribal habits.”',
    focusArea: 'Team empowerment, SOPs & margin expansion',
    iconName: 'Layers'
  },
  {
    id: 'stage_2_3',
    period: '2–3 YEARS',
    title: 'Prove It Works',
    subtitle: 'Demonstrate multi-year consistency and complete owner independence',
    description: 'Build comparative multi-year financial history, demonstrate team independence while the owner takes extended time away, address working-capital issues, and organize evidence.',
    deliverables: [
      'Owner 30-day complete operational absence test (business grows without you)',
      'Multi-year consistent financial and margin trend documentation',
      'Working capital optimization to smooth cash cycle',
      'Institutional knowledge repository audit in Virtual HQ™'
    ],
    buyerPerspective: '“The numbers have 36 months of proven backing. The team operates seamlessly without the founder.”',
    focusArea: 'Multi-year proof & autonomous management',
    iconName: 'CheckCircle2'
  },
  {
    id: 'stage_12_24',
    period: '12–24 MONTHS',
    title: 'Prepare for Market',
    subtitle: 'Pre-package the deal room and align with transaction advisors',
    description: 'Review likely buyer questions, add-backs, contracts, liabilities, customer concentration and due-diligence files with your CPA, attorney, and M&A broker.',
    deliverables: [
      'Pre-packaged Due Diligence Data Room assembled and verified',
      'Defense dossiers for all historical owner adjustments and add-backs',
      'Customer contract review for transferability and assignability clauses',
      'Coordination meetings with chosen broker / M&A intermediary'
    ],
    buyerPerspective: '“This due diligence room is cleaner than 99% of privately held companies in this revenue bracket.”',
    focusArea: 'Deal packaging & advisor alignment',
    iconName: 'Briefcase'
  },
  {
    id: 'stage_transaction',
    period: 'TRANSACTION',
    title: 'Defend the Story',
    subtitle: 'Confirm what you built without due diligence write-downs or retrades',
    description: 'Help organize and support the financial and operating evidence while the CPA, attorney, broker, QoE provider, and lender do their jobs seamlessly.',
    deliverables: [
      'Rapid turnaround on buyer due diligence Q&A requests (<24 hours)',
      'Bulletproof defense against Quality of Earnings adjustments',
      'Smooth management presentations highlighting team depth',
      'Seamless closing and handover with zero seller remorse'
    ],
    buyerPerspective: '“Due diligence confirmed everything presented. We will pay full agreed enterprise valuation without renegotiation.”',
    focusArea: 'QoE defense, lender verification & closing',
    iconName: 'Award'
  }
];

export const COMPARISON_POINTS = [
  {
    topic: 'Owner Involvement',
    ownerDependent: 'Owner answers every client and staff question daily; approvals stall when owner is away.',
    transferable: 'Owner leads strategically; company functions and delivers without constant founder intervention.'
  },
  {
    topic: 'Company Knowledge',
    ownerDependent: 'Key procedures, client quirks, and operational knowledge live only inside people’s heads.',
    transferable: 'Centralized SOPs, past project records, and company timeline documented in Virtual HQ™.'
  },
  {
    topic: 'Financial Records',
    ownerDependent: 'Books need lengthy verbal explanations, fuzzy add-backs, and reconciliations are months behind.',
    transferable: 'Multi-year clean books, reconciled balance sheets, and verified tax-to-books continuity.'
  },
  {
    topic: 'Profit Margins',
    ownerDependent: 'Margins fluctuate wildly; pricing is ad-hoc; vendor inflation eats into cash flow unnoticed.',
    transferable: 'Gross margin is rigorously defended, vendor contracts audited, and unit economics are transparent.'
  },
  {
    topic: 'Files & Contracts',
    ownerDependent: 'Customer contracts, IP assignments, and vendor agreements are scattered across emails and desks.',
    transferable: 'Organized, searchable legal & operational repository structured for rapid buyer audit.'
  },
  {
    topic: 'Team Backup',
    ownerDependent: 'Critical operations depend on one or two irreplaceable people who hold all leverage.',
    transferable: 'Clear roles, documented cross-training matrices, and reliable secondary backup for all functions.'
  },
  {
    topic: 'Due Diligence Reality',
    ownerDependent: 'Due diligence becomes an agonizing 6-month reconstruction project with massive re-trades.',
    transferable: 'Due diligence is a 30-day confirmatory review that confirms the premium story you built.'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Do I have to fire or replace my existing bookkeeper or CPA?',
    a: 'Absolutely not! StoryBookExit™ is designed to work with your current bookkeeper, internal team, and CPA. We do not replace your staff—we give them the institutional structure, Close the GAAP™ procedural support, and review frameworks to make their work bulletproof for future buyers.'
  },
  {
    q: 'Why does StoryBookExit™ recommend starting 3–7 years early?',
    a: 'You cannot manufacture 5 years of clean financial history, documented procedures, and verified owner independence in 6 months. Sophisticated buyers inspect multi-year trends. Starting early allows you to fix margin leaks, build clean comparative books, and prove your team can run the business without you.'
  },
  {
    q: 'What is included in the Virtual HQ™ Foundation?',
    a: 'Virtual HQ™ is the organized digital center for your company knowledge. It includes structured modules for Company Timeline, Team & Roles, Projects, Procedures/SOPs, Contracts & Compliance, Financial & Tax History, Customer & Vendor records, and a pre-indexed Due Diligence Data Room.'
  },
  {
    q: 'Can we keep using QuickBooks Online (QBO)?',
    a: 'Yes. QuickBooks Online can remain your primary accounting platform. We optimize your Chart of Accounts, transaction treatment, balance sheet reconciliations, and add-back schedules. QuickIN™ is an optional layer for advanced multi-entity visibility or specialized financial management.'
  },
  {
    q: 'How does StoryBookExit™ work with my future M&A broker or deal team?',
    a: 'We build and organize the evidence that your CPA, M&A attorney, business broker, investment banker, and Quality of Earnings (QoE) providers will eventually need. When you enter the market, your deal team gets a clean, defended dossier that accelerates closing and protects your valuation.'
  },
  {
    q: 'Can I consult first before committing, or downpay directly to reserve a build slot?',
    a: 'Yes! You can schedule a complimentary 30-minute StoryBookExit™ Readiness Review consultation with our senior advisors, or you can directly lock in your Initial Foundation Build slot online with a $1,500 downpayment deposit.'
  }
];
