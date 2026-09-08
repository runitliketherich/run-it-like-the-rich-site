import { ActExample, IncludedDeliverable, StepItem } from '../types';

export const ACT_EXAMPLES: ActExample[] = [
  {
    id: 't-mobile',
    title: 'Mobile Carrier & Communications',
    vendor: 'T-Mobile Wireless',
    amount: '$485.20 / mo',
    badge: 'Recurring Utilities',
    context: 'Monthly autopay debited from primary business operating checking account.',
    auditQuestion: 'Can you support it? What is the business purpose? Would someone understand it next year?',
    auditExplanation: 'Owner & key office team mobile devices; online PDF statements downloaded & tagged in Virtual HQ™.',
    consistencyQuestion: 'Can this safely follow the same rule every time—or does it include unusual add-ons?',
    consistencyExplanation: 'Consistent monthly plan for team, but watch for new device purchases or equipment financing billed together.',
    taxTreatmentQuestion: 'Expense or asset? Payroll or contractor? Capitalize or expense?',
    taxTreatmentExplanation: 'Telephone & Internet operating expense; verify personal use policy or reimbursement limits with owner.',
    ruleConclusion: 'Automate matching rule for baseline monthly service; flag any invoice spikes >$50 for itemized device review.'
  },
  {
    id: 'gas-station',
    title: 'Gas Station & Fuel Purchase',
    vendor: 'Shell Oil / Speedway',
    amount: '$112.45',
    badge: 'Mixed-Use Vendor',
    context: 'Debit card swipe by field manager on Friday afternoon.',
    auditQuestion: 'Can you support it? What is the business purpose?',
    auditExplanation: 'Receipt required. Did this purchase include company fleet fuel, or convenience store snacks/drinks/cash back?',
    consistencyQuestion: 'Can this safely follow an auto-categorization rule every time?',
    consistencyExplanation: 'DO NOT blindly auto-rule to "Auto Fuel". Gas stations frequently contain personal convenience purchases, gift cards, or cash back.',
    taxTreatmentQuestion: 'Expense or Owner Draw? Fuel expense or employee meal?',
    taxTreatmentExplanation: 'Properly split receipt: Fleet Vehicle Fuel (business expense) vs. Non-deductible snacks/meals or Owner Draw.',
    ruleConclusion: 'Think before creating the rule! Require receipt backup for all convenience-store and fuel vendors.'
  },
  {
    id: 'home-depot',
    title: 'Hardware & Materials Supplier',
    vendor: 'The Home Depot',
    amount: '$3,850.00',
    badge: 'Asset vs Expense',
    context: 'Large commercial card charge during warehouse upgrade and project job run.',
    auditQuestion: 'Is there an itemized invoice linked to job/class?',
    auditExplanation: 'Attach the full 3-page receipt with itemized SKU descriptions and assign to Job #104 / Warehouse Repair.',
    consistencyQuestion: 'Is Home Depot always "Supplies"?',
    consistencyExplanation: 'Never auto-rule Home Depot to "Office Supplies" or "Materials". Purchases range from consumable screws ($15) to capital machinery ($3,800+).',
    taxTreatmentQuestion: 'Current period repair expense or capitalized depreciable fixed asset?',
    taxTreatmentExplanation: 'De minimis safe harbor threshold ($2,500) evaluation: Items over threshold require balance sheet fixed-asset review before tax filing.',
    ruleConclusion: 'Classify under Job Cost Materials vs Fixed Asset; flag capital purchases for CPA year-end depreciation schedule.'
  },
  {
    id: 'software-saas',
    title: 'Cloud Software Subscription',
    vendor: 'Adobe Systems / HubSpot',
    amount: '$1,800.00 (Annual)',
    badge: 'Prepaid & Subscriptions',
    context: 'Annual upfront software renewal charged to corporate credit card.',
    auditQuestion: 'Are all seats actively allocated to current employees?',
    auditExplanation: 'Contract agreement and invoice attached showing billing period (Nov 1 to Oct 31).',
    consistencyQuestion: 'Does this service renew annually or monthly?',
    consistencyExplanation: 'Annual lump-sum payment vs monthly recurring operating expense.',
    taxTreatmentQuestion: 'Prepaid expense amortization vs direct software expense?',
    taxTreatmentExplanation: 'Determine whether material prepaid expense adjustment is required at year-end for clean CPA closing.',
    ruleConclusion: 'Document annual term in Virtual HQ™ calendar; record proper amortized period.'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Review & Reconcile',
    tagline: 'Establish the ground truth',
    description: 'We review the books and reconcile back to the prior year-end position so the current year starts from a dependable foundation.',
    takeaway: 'Ties prior tax return to current books without rolling forward historical errors.'
  },
  {
    number: '02',
    title: 'Find What’s Off',
    tagline: 'Surgical diagnostic inspection',
    description: 'Margins, payroll, job cost, vendor treatment, balance-sheet accounts, classifications, missing information and recurring problems.',
    takeaway: 'Uncovers hidden balance sheet bloat, misclassified contractor payments, and leakages.'
  },
  {
    number: '03',
    title: 'Train on Real Work',
    tagline: 'Practical application on company data',
    description: 'We explain corrections using the company’s actual transactions, reports and workflows—not generic classroom examples.',
    takeaway: 'Your team learns directly inside their familiar QBO or ledger with real context.'
  },
  {
    number: '04',
    title: 'Simplify the Workflow',
    tagline: 'Eliminate friction & manual steps',
    description: 'Remove unnecessary steps, connect operations to accounting, improve procedures and automate repeatable work where it is safe.',
    takeaway: 'Replaces messy spreadsheet side-hustles with streamlined, repeatable checklists.'
  },
  {
    number: '05',
    title: 'Review the Business',
    tagline: 'Strategic financial intelligence',
    description: 'Do we still need this? Why did the cost change? Why did margin move? Are we rebuilding a report manually every month?',
    takeaway: 'Transforms the back office from data entry clerks into the owner’s strategic radar.'
  },
  {
    number: '06',
    title: 'Build Confidence',
    tagline: 'Permanent in-house autonomy',
    description: 'The goal is an internal person who understands what the numbers mean, knows the procedure and knows when to ask for help.',
    takeaway: 'Eliminates owner anxiety; empowers your trusted staff with executive-level backup.'
  }
];

export const OWNER_RADAR_QUESTIONS = [
  {
    id: 'q1',
    question: 'Do we still need this expense?',
    description: 'Spot forgotten SaaS tools, duplicate subscriptions, and legacy vendor retainers that outlived their utility.',
    impact: 'Average client uncovers $4,000–$18,000 in annual recurring savings.'
  },
  {
    id: 'q2',
    question: 'Did this vendor or contract increase?',
    description: 'Catch price creeps, stealth index escalations, and unannounced rate hikes before they compound over quarters.',
    impact: 'Ensures vendor billing matches approved contracts and PO terms.'
  },
  {
    id: 'q3',
    question: 'Are we paying twice for the same function?',
    description: 'Identify overlapping software (e.g., e-sign in CRM vs standalone tool) or redundant service vendors.',
    impact: 'Streamlines tech stack overhead and administrative clutter.'
  },
  {
    id: 'q4',
    question: 'Why is payroll growing faster than sales?',
    description: 'Analyze loaded payroll vs revenue trends, overtime anomalies, and labor utilization by department or job.',
    impact: 'Protects operating margins before payroll imbalances threaten cash flow.'
  },
  {
    id: 'q5',
    question: 'Why did gross margin change?',
    description: 'Drill down into job costing, materials cost shifts, freight surcharges, and direct labor allocation.',
    impact: 'Gives the owner actionable pricing power on bids and customer contracts.'
  },
  {
    id: 'q6',
    question: 'Can this report or process take fewer steps?',
    description: 'Eradicate double-entry between CRM, inventory, and accounting through clean procedural links.',
    impact: 'Reclaims 8–15 hours weekly of administrative burden for your internal team.'
  }
];

export const INCLUDED_DELIVERABLES: IncludedDeliverable[] = [
  {
    id: 'full-review',
    title: 'Full books review',
    summary: 'Chart of Accounts, bank/credit cards, payroll, loans, balance sheet, classes, job cost and recurring treatment.',
    bullets: [
      'Comprehensive ledger hygiene audit',
      'Balance sheet account tie-outs',
      'Loan amortization schedule verification',
      'Proper class & location categorization'
    ],
    iconName: 'BookCheck',
    category: 'core'
  },
  {
    id: 'prior-year',
    title: 'Prior-year reconciliation',
    summary: 'Tie the current books back to the prior year-end position and identify differences that should not keep rolling forward.',
    bullets: [
      'Match Retained Earnings to filed tax returns',
      'Clear phantom uncleared checks & old deposits',
      'Eliminate chronic balance roll-forward errors',
      'Clean baseline established for year-to-date'
    ],
    iconName: 'History',
    category: 'core'
  },
  {
    id: 'weekly-monthly-support',
    title: 'Weekly → monthly support',
    summary: 'More frequent help while fixing and training; less intervention as the team and system become stronger.',
    bullets: [
      'Direct mentorship on live transactions',
      'Regular screen-share coaching sessions',
      'Gradual graduation to self-sufficient review',
      'Prompt resolution of complex accounting questions'
    ],
    iconName: 'TrendingUp',
    category: 'support'
  },
  {
    id: 'procedures-training',
    title: 'Procedures & training',
    summary: 'Create practical checklists, instructions, workflows and training around the work the team actually performs.',
    bullets: [
      'Custom Standard Operating Procedures (SOPs)',
      'Month-end close checklists tailored to your entity',
      'Step-by-step documentation for invoice & payroll flow',
      'Built-in institutional memory protection'
    ],
    iconName: 'FileText',
    category: 'systems'
  },
  {
    id: 'year-end-tax-handoff',
    title: 'Year-end & tax handoff',
    summary: 'Reconcile year-end, prepare the accounting package for the CPA or tax preparer and work through closing adjustments.',
    bullets: [
      'Complete CPA-ready workpaper binder',
      '1099-NEC & 1099-MISC vendor prep audit',
      'Year-end adjusting journal entry coordination',
      'Significant reduction in CPA cleanup billing fees'
    ],
    iconName: 'Briefcase',
    category: 'core'
  },
  {
    id: 'virtual-hq-foundation',
    title: 'Virtual HQ™ foundation',
    summary: 'A permanent home for accounting procedures, compliance, tax records, training, calendars, links and back-office documentation.',
    bullets: [
      'Centralized digital operational headquarters',
      'Secure corporate records & compliance repository',
      'Vendor contracts & tax document vault',
      'Standardized back-office operational backbone'
    ],
    iconName: 'Layers',
    category: 'systems'
  },
  {
    id: 'qbo-quickin',
    title: 'QBO or QuickIN™',
    summary: 'QuickBooks Online can continue. QuickIN™ is available when it provides a reporting, multi-entity or financial-management advantage.',
    bullets: [
      'No disruptive software migration required',
      'Optimized QBO workflows and bank feed rules',
      'QuickIN™ access for multi-entity consolidation',
      'Flexible tooling built around business needs'
    ],
    iconName: 'Laptop',
    category: 'systems'
  },
  {
    id: 'experienced-backup',
    title: 'Experienced backup',
    summary: 'Questions, unusual transactions, system problems and “I haven’t seen this before” moments have somewhere to go.',
    bullets: [
      'Direct line to 25+ years of CFO/accounting mastery',
      'Safety net for owner and internal team',
      'Emergency intervention when systems stall',
      'Confidence knowing you never face IRS or CPA alone'
    ],
    iconName: 'ShieldCheck',
    category: 'support'
  }
];

export const COMPARISON_POINTS = [
  {
    aspect: 'Staff Relationship',
    traditional: 'Replaces or ignores your loyal internal staff; forces rigid impersonal ticket queues.',
    trainTheGaap: 'Celebrates & elevates your trusted team with 1-on-1 mentorship, training, and executive backup.'
  },
  {
    aspect: 'Business Context',
    traditional: 'Treats transactions as generic numbers without understanding customer or vendor relationships.',
    trainTheGaap: 'Pairs 25+ years of accounting expertise with your staff’s unmatched institutional knowledge.'
  },
  {
    aspect: 'Documentation & SOPs',
    traditional: 'Keeps procedures proprietary inside their agency so you can never leave.',
    trainTheGaap: 'Builds your permanent Virtual HQ™ foundation so your company owns its SOPs and workflows forever.'
  },
  {
    aspect: 'Year-End CPA Handoff',
    traditional: 'Dumps messy unreviewed files on your CPA, triggering thousands in surprise CPA cleanup bills.',
    trainTheGaap: 'Delivers a reconciled, CPA-ready package with clear workpapers and closing entry coordination.'
  },
  {
    aspect: 'Strategic Impact',
    traditional: 'Passive data entry after the fact; no proactive warning of cost creep or margin decay.',
    trainTheGaap: 'Transforms books into the Owner’s Eyes & Ears to proactively optimize margins and cash flow.'
  }
];
