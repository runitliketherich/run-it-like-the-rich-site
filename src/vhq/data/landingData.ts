import { FeatureCardItem, CarouselSlide, FaqItem } from '../types';

export const SCATTERED_SOURCES = [
  { name: 'Email', icon: 'Mail', count: '14 Unread Threads' },
  { name: 'Cloud Files', icon: 'Folder', count: '6 Shared Folders' },
  { name: 'Text Messages', icon: 'MessageSquare', count: '8 Group Chats' },
  { name: 'Software', icon: 'Layers', count: '5 Logins' },
  { name: 'Spreadsheets', icon: 'Table', count: '12 Files' },
  { name: 'Calendars', icon: 'Calendar', count: '3 Schedules' },
  { name: 'Employee Knowledge', icon: 'Users', count: 'Unwritten SOPs' },
  { name: 'Accounting Systems', icon: 'DollarSign', count: 'Separate Portal' },
  { name: 'Paper & Notes', icon: 'FileText', count: 'Desk Sticky Notes' },
  { name: 'Apps', icon: 'Smartphone', count: '7 Mobile Apps' },
];

export const FEATURE_CARDS: FeatureCardItem[] = [
  {
    id: 'owner-dashboard',
    cardNumber: 1,
    title: 'OWNER DASHBOARD',
    tagline: 'Executive Command Center',
    description: 'One-screen view of priorities, deadlines, alerts, business activity and what needs attention.',
    iconName: 'LayoutDashboard',
    badge: 'Core Foundation',
    highlights: ["Today's priorities", 'Overdue alerts', 'Urgent items', 'Daily business pulse'],
  },
  {
    id: 'team-status',
    cardNumber: 2,
    title: 'TEAM STATUS',
    tagline: 'Work Visibility Without Micromanagement',
    description: 'See responsibilities, work status, open items and progress without constantly asking for updates.',
    iconName: 'Users',
    badge: 'Team Alignment',
    highlights: ['Active assignees', 'Items awaiting review', 'Open workload', 'Shift handoffs'],
  },
  {
    id: 'projects',
    cardNumber: 3,
    title: 'PROJECTS',
    tagline: 'Milestone & Job Tracking',
    description: 'Track jobs, projects, milestones, deadlines, responsibilities and progress.',
    iconName: 'FolderKanban',
    highlights: ['Milestone deadlines', 'Job stages', 'Lead assignees', 'Deliverable status'],
  },
  {
    id: 'file-center',
    cardNumber: 4,
    title: 'FILE CENTER',
    tagline: 'Organized Digital Custody',
    description: "A simple company file center connected to the business's organized digital files.",
    iconName: 'FolderLock',
    badge: 'Standard Inclusion',
    highlights: ['Organized taxonomy', '5-second file retrieval', 'Secure company custody', 'Client vaults'],
  },
  {
    id: 'compliance-center',
    cardNumber: 5,
    title: 'COMPLIANCE CENTER',
    tagline: 'Zero-Miss Deadlines',
    description: 'Licenses, renewals, registrations, filings, insurance, deadlines and completion check-offs.',
    iconName: 'ShieldCheck',
    highlights: ['License renewals', 'Insurance expiries', 'Annual filings', 'Audit check-offs'],
  },
  {
    id: 'tasks-followup',
    cardNumber: 6,
    title: 'TASKS & FOLLOW-UP',
    tagline: 'Accountability Engine',
    description: 'Assign work, track due dates, monitor progress and see what is overdue.',
    iconName: 'CheckSquare',
    highlights: ['Delegated tasks', 'Due date monitors', 'Follow-up cues', 'Completion logs'],
  },
  {
    id: 'quick-links',
    cardNumber: 7,
    title: 'QUICK LINKS',
    tagline: 'Company Launchpad',
    description: "One place for the company's important websites, systems, portals and frequently used resources.",
    iconName: 'Compass',
    badge: 'Standard Inclusion',
    highlights: ['Bank portals', 'Accounting links', 'CRM & ERP shortcuts', 'Vendor portals'],
  },
  {
    id: 'financial-feed',
    cardNumber: 8,
    title: 'FINANCIAL FEED',
    tagline: 'Owner Operating Pulse',
    description: "Important financial information brought into the owner's operating view.",
    iconName: 'DollarSign',
    highlights: ['Cash flow snapshot', 'Invoices out', 'Payables pending', 'Revenue run-rate'],
  },
  {
    id: 'kpi-dashboard',
    cardNumber: 9,
    title: 'KPI DASHBOARD',
    tagline: 'Metrics That Matter',
    description: 'Show the numbers that actually matter to this particular business.',
    iconName: 'BarChart3',
    highlights: ['Sales volume', 'Lead conversion', 'Job margin', 'Customer retention'],
  },
  {
    id: 'hr-center',
    cardNumber: 10,
    title: 'HR CENTER',
    tagline: 'People & Policy Hub',
    description: 'Employee information, onboarding, company forms, policies, documents and HR resources.',
    iconName: 'UserCheck',
    highlights: ['Employee directory', 'Onboarding checklists', 'Company policies', 'Emergency contacts'],
  },
  {
    id: 'live-lists-logs',
    cardNumber: 11,
    title: 'LIVE LISTS & LOGS',
    tagline: 'Custom Operational Data',
    description: 'Create business-specific live lists such as Customers, Vendors, Vehicles, Equipment, Inventory, Properties, Locations, Jobs, Service Calls, Maintenance, Purchase Requests, Sales Leads, Inspections, and Deliveries.',
    iconName: 'ListChecks',
    highlights: ['Equipment & Fleet', 'Properties & Jobs', 'Vendors & Inventory', 'Service Logs'],
  },
  {
    id: 'forms-intake',
    cardNumber: 12,
    title: 'FORMS & INTAKE',
    tagline: 'Clean Data Entry',
    description: "Simple forms that allow information to be added to the company's live systems without messy formatting errors.",
    iconName: 'FileSpreadsheet',
    highlights: ['New customer / Lead', 'Service & Maintenance', 'Purchase requests', 'Expense logs'],
  },
  {
    id: 'templates-sops',
    cardNumber: 13,
    title: 'TEMPLATES & SOPs',
    tagline: 'Standard Operating Hub',
    description: 'Keep company templates, checklists, instructions, procedures and frequently used forms easy to find.',
    iconName: 'BookOpen',
    highlights: ['Process checklists', 'Document templates', 'How-to guides', 'Training manuals'],
  },
  {
    id: 'branding-portfolio',
    cardNumber: 14,
    title: 'BRANDING, PORTFOLIO & CONTENT CENTER',
    tagline: 'Keep the business story consistent.',
    description: 'A central place for approved logos, brand colors, photos, service descriptions, case studies, testimonials, brochures, proposals, social content, portfolio work, and marketing files.',
    iconName: 'Palette',
    badge: 'Brand & Market Hub',
    highlights: [
      'Brand assets and approved logo files',
      'Photo, video, and project portfolio library',
      'Service descriptions and proposal language',
      'Testimonials, reviews, and case studies',
      'Content calendar and ready-to-use post ideas',
      'Marketing links, logins, and vendor contacts',
    ],
  },
  {
    id: 'custom-module',
    cardNumber: 15,
    title: 'CUSTOM MODULE',
    tagline: 'SOMETHING UNIQUE TO YOUR BUSINESS?',
    description: 'If your company repeatedly tracks it, checks it, updates it or needs to find it, we can explore putting it inside your Virtual HQ.',
    iconName: 'Sparkles',
    badge: 'Tailored Scope',
    isCustom: true,
    highlights: ['Industry-specific logs', 'Unique workflows', 'Multi-location hubs', 'Proprietary processes'],
  },
];

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 'owner-dashboard',
    title: 'Owner Dashboard',
    category: 'Executive View',
    badge: 'Morning Cockpit',
    shortExplanation: 'See active priorities, pending approvals, urgent deadlines, and high-level business pulse on a single clean screen.',
    mockupType: 'owner',
  },
  {
    id: 'team-status',
    title: 'Team Status Board',
    category: 'Operations',
    badge: 'Daily Alignment',
    shortExplanation: 'Monitor who is working on what, open workloads, and work submitted for review without interrupting your team.',
    mockupType: 'team',
  },
  {
    id: 'project-center',
    title: 'Project Center',
    category: 'Delivery',
    badge: 'Job Tracking',
    shortExplanation: 'Track active projects, milestone dates, lead technicians/managers, and deliverable readiness at a glance.',
    mockupType: 'projects',
  },
  {
    id: 'file-center',
    title: 'Company File Center',
    category: 'Custody',
    badge: 'Document Vault',
    shortExplanation: 'Organized company file structure that lets anyone with permission locate any key document in under 5 seconds.',
    mockupType: 'files',
  },
  {
    id: 'compliance-calendar',
    title: 'Compliance & Renewals',
    category: 'Legal & Risk',
    badge: 'Zero-Miss',
    shortExplanation: 'Automatic tracking for business licenses, certificates of insurance, annual state filings, and permits.',
    mockupType: 'compliance',
  },
  {
    id: 'financial-kpi',
    title: 'Financial & KPI Feed',
    category: 'Executive',
    badge: 'Pulse Metrics',
    shortExplanation: 'Brings critical numbers, cash balance, invoices out, and custom performance metrics directly into your operating view.',
    mockupType: 'financial',
  },
  {
    id: 'live-lists',
    title: 'Live Operational Lists',
    category: 'Custom Data',
    badge: 'Fleet & Assets',
    shortExplanation: 'Dynamic lists for vehicles, equipment, inventory, service calls, and vendors customized to your business terms.',
    mockupType: 'lists',
  },
  {
    id: 'hr-center',
    title: 'HR & Onboarding Center',
    category: 'People',
    badge: 'Staff Hub',
    shortExplanation: 'Centralized employee rosters, new hire onboarding checklists, company handbook, and emergency protocols.',
    mockupType: 'hr',
  },
  {
    id: 'mobile-view',
    title: 'Mobile Team View',
    category: 'Field Access',
    badge: 'Responsive',
    shortExplanation: 'Clean, role-restricted mobile interface for field staff or on-the-go managers to log updates and check tasks.',
    mockupType: 'mobile',
  },
];

export const CUSTOMIZATION_TAGS = [
  'Customer Calls',
  'Sales Leads',
  'Daily Sales',
  'Inventory',
  'Properties',
  'Vehicles',
  'Equipment',
  'Maintenance',
  'Jobs',
  'Work Orders',
  'Inspections',
  'Vendor Information',
  'Renewals',
  'Employee Onboarding',
  'Job Photos',
  'Purchase Requests',
  'Training',
  'Recurring Tasks',
  'Financial KPIs',
  'Locations',
  'Service Calls',
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'DO I HAVE TO USE EVERY MODULE?',
    answer: 'No. Start with the features that make sense for your business.',
  },
  {
    question: 'DOES MY WHOLE TEAM HAVE TO USE IT?',
    answer: 'No. Many businesses can begin with an owner/manager view and add team access as they are ready.',
  },
  {
    question: 'CAN WE ADD FEATURES LATER?',
    answer: 'Yes. The system should be designed so additional modules and business processes can be incorporated over time.',
  },
  {
    question: 'CAN IT WORK WITH SYSTEMS WE ALREADY USE?',
    answer: 'The Virtual HQ can organize access to and, where practical, connect information from existing business systems. The exact setup depends on the software and workflow.',
  },
  {
    question: 'CAN YOU CUSTOMIZE IT FOR MY INDUSTRY?',
    answer: 'Yes. The purpose is to structure the HQ around the way the business actually operates rather than force every business into the same template.',
  },
  {
    question: 'IS THIS AN ERP OR CRM?',
    answer: 'No. A Virtual HQ can include simple CRM-like, project, tracking and operational functions, but the goal is different: create one owner-controlled internal operating center.',
  },
];

export const FORM_AREAS_OPTIONS = [
  'Files',
  'Team / Tasks',
  'Projects',
  'Compliance',
  'Financials / KPIs',
  'HR',
  'Forms / Lists',
  'Daily Operations',
  'Something Else',
];

export const TEAM_SIZE_OPTIONS = [
  '1',
  '2–5',
  '6–15',
  '16–30',
  '30+',
];

export const YEARS_OPERATING_OPTIONS = [
  'Less than 1 year',
  '1–3 years',
  '4–7 years',
  '8–15 years',
  '16+ years',
];

export const TAX_STRUCTURE_OPTIONS = [
  'Sole proprietor / Schedule C',
  'Single-member LLC',
  'Partnership / LLC taxed as a partnership (Form 1065)',
  'S corporation (Form 1120-S)',
  'C corporation (Form 1120)',
  'Nonprofit',
  'Not sure',
  'Other',
];

export const FUTURE_PLANS_OPTIONS = [
  'Grow the current location or operation',
  'Add employees',
  'Add locations, territories, or service areas',
  'Expand services or product lines',
  'Improve margins and owner visibility',
  'Build a business that is easier to manage without me',
  'Prepare for financing or investment',
  'Prepare to sell, transition, or retire',
  'No major change planned; I want better control of what is already here',
  'Other',
];

export const SELLING_TIMELINE_OPTIONS = [
  'Within 1–3 years',
  'Within 3–5 years',
  'Within 5–10 years',
  'More than 10 years away',
  'Exploring options only',
];

export const GOOGLE_WORKSPACE_SUBSCRIPTION_OPTIONS = [
  'Business Starter',
  'Business Standard',
  'Business Plus',
  'Enterprise',
  'Google Workspace for Nonprofits',
  'Not sure',
  'Other',
];

export const GOOGLE_WORKSPACE_TOOLS_OPTIONS = [
  'Gmail',
  'Google Drive',
  'Google Calendar',
  'Google Sheets',
  'Google Docs',
  'Google Forms',
  'Google Sites',
  'Google Chat / Meet',
  'Google Tasks / Keep',
  'Gemini / NotebookLM',
  'Other',
];

export interface BusinessSystemArea {
  id: string;
  label: string;
  placeholder: string;
}

export const BUSINESS_SYSTEM_AREAS: BusinessSystemArea[] = [
  { id: 'bookkeeping', label: 'Bookkeeping / accounting', placeholder: 'e.g. QuickBooks, Xero, CPA portal' },
  { id: 'payroll', label: 'Payroll', placeholder: 'e.g. Gusto, ADP, Paychex' },
  { id: 'scheduling', label: 'Time tracking / scheduling', placeholder: 'e.g. TSheets, Deputy, When I Work' },
  { id: 'field_ops', label: 'Field operations / job management', placeholder: 'e.g. ServiceTitan, Jobber, Housecall Pro' },
  { id: 'inventory', label: 'Inventory', placeholder: 'e.g. Fishbowl, spreadsheets, warehouse log' },
  { id: 'estimates', label: 'Estimates / proposals', placeholder: 'e.g. Proposify, PandaDoc, custom template' },
  { id: 'invoicing', label: 'Invoicing / accounts receivable', placeholder: 'e.g. QuickBooks, Stripe, manual invoicing' },
  { id: 'crm', label: 'Client management / CRM', placeholder: 'e.g. HubSpot, Pipedrive, spreadsheet' },
  { id: 'pos', label: 'POS / credit-card processing', placeholder: 'e.g. Square, Clover, merchant terminal' },
  { id: 'banking', label: 'Bank / bill pay / expense management', placeholder: 'e.g. Chase, Relay, Ramp, Bill.com' },
  { id: 'hr', label: 'HR / onboarding / employee records', placeholder: 'e.g. BambooHR, shared folder, paper file' },
  { id: 'storage', label: 'File storage / document signing', placeholder: 'e.g. Google Drive, Dropbox, DocuSign' },
  { id: 'other', label: 'Other software, portals, or spreadsheets', placeholder: 'e.g. custom industry portal, spreadsheets' },
];
