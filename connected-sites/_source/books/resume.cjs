const {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  BorderStyle, LevelFormat, convertInchesToTwip,
} = require("docx");
const fs = require("fs");

const NAVY = "0F2740";
const RED = "B3272D";
const INK = "22313F";

const rule = (space = 80) => new Paragraph({
  spacing: { before: space, after: 100 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: NAVY, space: 2 } },
  children: [new TextRun({ text: "", size: 2 })],
});

const H = (text) => new Paragraph({
  spacing: { before: 240, after: 90 }, keepNext: true,
  children: [new TextRun({ text, bold: true, size: 23, color: NAVY,
    font: "Georgia", characterSpacing: 24 })],
});

const P = (text, opts = {}) => new Paragraph({
  spacing: { after: opts.after ?? 120, line: 264 },
  children: [new TextRun({ text, size: 21, color: INK, font: "Georgia",
    bold: opts.bold, italics: opts.italics })],
});

const B = (text) => new Paragraph({
  numbering: { reference: "dash", level: 0 },
  spacing: { after: 70, line: 258 },
  children: [new TextRun({ text, size: 21, color: INK, font: "Georgia" })],
});

// a role line: title in navy bold, dates right-aligned via a tab
const ROLE = (title, context, dates) => [
  new Paragraph({
    spacing: { before: 190, after: 10 }, keepNext: true,
    children: [new TextRun({ text: title, bold: true, size: 22, color: NAVY, font: "Georgia" })],
  }),
  new Paragraph({
    spacing: { after: 90 }, keepNext: true,
    children: [
      new TextRun({ text: context, size: 20, color: "55636F", font: "Georgia", italics: true }),
      new TextRun({ text: "   ·   ", size: 20, color: "9AA7B2", font: "Georgia" }),
      new TextRun({ text: dates, size: 20, color: "55636F", font: "Georgia" }),
    ],
  }),
];

const TECH = (label, body) => new Paragraph({
  spacing: { after: 90, line: 258 },
  children: [
    new TextRun({ text: label + "  ", bold: true, size: 20, color: RED, font: "Georgia" }),
    new TextRun({ text: body, size: 20, color: INK, font: "Georgia" }),
  ],
});

const doc = new Document({
  numbering: {
    config: [{
      reference: "dash",
      levels: [{
        level: 0, format: LevelFormat.BULLET, text: "–", alignment: AlignmentType.LEFT,
        style: { paragraph: { indent: { left: convertInchesToTwip(0.25), hanging: convertInchesToTwip(0.17) } },
                 run: { color: RED, font: "Georgia" } },
      }],
    }],
  },
  styles: {
    default: {
      document: { run: { font: "Georgia", size: 21, color: INK } },
    },
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 900, bottom: 760, left: 1080, right: 1080 },
      },
    },
    children: [
      // ---------- header ----------
      new Paragraph({
        spacing: { after: 40 },
        children: [new TextRun({ text: "LAURA POINCOT", bold: true, size: 44,
          color: NAVY, font: "Georgia", characterSpacing: 36 })],
      }),
      new Paragraph({
        spacing: { after: 50 },
        children: [new TextRun({
          text: "Financial System Data Repair  ·  Multi-Entity Accounting  ·  Exit-Ready Books",
          size: 21, color: RED, font: "Georgia", bold: true })],
      }),
      new Paragraph({
        spacing: { after: 60 },
        children: [new TextRun({ text: "support@thehq.online  ·  Remote / Hybrid",
          size: 20, color: "55636F", font: "Georgia" })],
      }),
      rule(60),

      // ---------- profile ----------
      H("PROFILE"),
      P("Accounting professional, in accounting since 1999 \u2014 twenty-seven years, and almost all of it in house, as the accountant and operations manager inside the business rather than a visitor to it."),
      P("For fifteen of those years I worked for a group of self-made multi-millionaires: multi-entity partnerships spanning commercial real estate and development, the largest off-airport parking operation in Orlando, auto salvage, aviation services and aircraft rental, and more than 115 commercial properties whose owners I dealt with directly \u2014 which is where the industry range comes from."),
      P("I have not only used accounting systems, I have built them: general ledger systems, and the ledger side of software that had only an operational front end. That meant working with the coders and software inventors on which journal entries had to post, and when, for data to land in the general ledger correctly. Knowing how the modules flow is the key to cleaning anything up."),
      P("A strong database background takes that into the data itself: financial system data repair, balancing and historical cleanup at the record level. The last five years have been near-continuous system and digital document resets for owners preparing their companies for valuation and sale \u2014 and undoing the damage that QuickBooks Online\u2019s AI and automation features have done to books that were previously clean."),
      P("I have never been unable to fix a set of books.", { bold: true, after: 60 }),

      // ---------- what I do ----------
      H("WHAT I DO"),
      B("Financial system data repair: balancing, reconstruction and historical cleanup"),
      B("Multi-year cleanups — balance sheet, equity, intercompany and clearing accounts"),
      B("Diagnosing and correcting AI and automation damage in QuickBooks Online"),
      B("System selection, conversion, migration and implementation"),
      B("General ledger design, chart-of-accounts rebuilds and module mapping"),
      B("Point-of-sale, payroll, field-management and job-costing systems mapped into the financial system without cluttering the ledger"),
      B("Tax planning, tax credits and tax strategy for owner-led and multi-entity businesses"),
      B("Commercial lending \u2014 negotiating loans for operating companies and properties"),
      B("Commercial insurance, workers\u2019 compensation, licensing and multi-county regulatory requirements"),
      B("Valuation and exit readiness: books a buyer, lender or auditor can test"),
      B("Month-end close, reconciliation, management reporting and owner dashboards"),
      B("Tax-ready workpapers and CPA coordination — 1120, 1120S, 1065, Schedules C and E, K-1 flow-through"),
      B("Digital document resets: filing systems, access control, compliance calendars and written procedures"),
      B("Internal controls, theft and valuation-error detection, inventory and cost accounting"),

      // ---------- industries ----------
      H("INDUSTRIES SERVED"),
      P("Commercial real estate, property management and development  ·  Construction and specialty trades  ·  Restaurant and franchise  ·  Home and commercial services  ·  Food distribution and perishable manufacturing  ·  Aviation services and aircraft rental  ·  Vacation and short-term rental  ·  Parking and transportation  ·  Auto salvage  ·  Professional services firms", { after: 60 }),

      // ---------- experience ----------
      H("EXPERIENCE"),

      ...ROLE("Strategic Accountant / Accounting Systems Consultant",
              "Independent practice, referred by CPA firms", "Dec 2019 – Present"),
      B("Lead end-to-end engagements for owner-led companies, professional firms and real-estate portfolios: system setup or cleanup through monthly close, management reporting and tax-ready packages."),
      B("Reconstruct multi-year books; resolve balance-sheet, equity and intercompany issues; reconcile bank, credit card, loan, payroll and clearing accounts."),
      B("Correct automation and AI errors introduced by accounting platforms, then rebuild the rules and routines so they do not recur."),
      B("Prepare and review 1120S, 1065, Schedules C and E and K-1s supporting 1040s; coordinate directly with CPAs and tax preparers."),
      B("Implement QuickBooks Online and Desktop workflows, integrations, digital filing systems, compliance calendars and practical SOPs."),

      ...ROLE("Accountant / Property & Business Operations Manager",
              "Multi-entity partnerships owned by self-made millionaires \u2014 15\u201320 affiliated entities", "Feb 2007 – Mar 2020"),
      B("Managed full-cycle accounting and operational reporting across commercial real estate, property management, development, the largest off-airport parking operation in Orlando, auto salvage, and aviation services and aircraft rental."),
      B("Oversaw entity-level and consolidated cash flow, intercompany balances, AP, AR, payroll coordination, month-end close and owner reporting."),
      B("Handled accounting and administration for more than 115 commercial properties and dealt directly with their owners: rent billing, collections, CAM tracking, lease renewals, rent rolls and variance reporting for owners and lenders."),
      B("Managed sales tax, tangible personal property tax, real estate tax, business licenses and annual revenue-audit support under aviation-authority requirements."),
      B("Served as primary liaison to CPA firms, lenders and ownership, producing complete financial packages and partnership schedules."),

      ...ROLE("Accountant — Accounting & Inventory Control",
              "Food distribution and perishable manufacturing, $50M+ annual revenue", "Sep 1999 – Jan 2007"),
      B("Promoted within two years to lead financial operations at the primary facility, overseeing accounting for more than $50 million in annual revenue and expenses."),
      B("Managed month-end close, reconciliations, corporate reporting, inventory accounting, cost tracking and gross-margin analysis."),
      B("Built yield-tracking systems for beef and chicken production rooms to calculate product margins, commissions and operating performance."),
      B("Identified and corrected theft, inventory valuation errors and control weaknesses."),

      // ---------- technology ----------
      H("TECHNOLOGY"),
      TECH("Accounting / ERP:", "QuickBooks Online and Desktop, Xero, Sage Intacct, NetSuite, Restaurant365"),
      TECH("Property & field:", "Yardi, AppFolio, ServiceTitan, multiple POS systems"),
      TECH("Tax:", "ATX, Lacerte, ProSeries; 1120, 1120S, 1065, Schedule C, Schedule E, K-1"),
      TECH("Payroll:", "ADP RUN, Workforce Now and TotalSource, Gusto, Paychex, Paycor, Zenefits"),
      TECH("Data & conversion:", "System migrations and conversions, chart-of-accounts rebuilds, bulk imports and exports, historical data reconstruction and balancing"),
      TECH("Workflow:", "Google Workspace, Microsoft 365, ClickUp, Asana, Trello, Slack, Microsoft Teams; SOPs, digital file systems, compliance calendars"),

      // ---------- education ----------
      H("EDUCATION"),
      P("University of Central Florida  —  Bachelor's Accounting Program", { after: 0 }),
    ],
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync("/home/claude/run-it-like-the-rich-site/connected-sites/_source/books/Laura-Poincot-Resume.docx", buf);
  console.log("written");
});
