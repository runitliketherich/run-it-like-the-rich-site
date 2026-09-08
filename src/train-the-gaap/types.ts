export interface ApplicationFormData {
  businessName: string;
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  roleInCompany: string;
  bookkeeperRole: string; // e.g. Office Manager, Dedicated Bookkeeper, Owner/Spouse, Admin Assistant
  bookkeeperName: string;
  currentSoftware: string; // QuickBooks Online, QuickBooks Desktop, QuickIN, Spreadsheets, Other
  numberOfEntities: string; // 1, 2-3, 4+
  annualRevenue: string; // Under $1M, $1M - $3M, $3M - $10M, $10M+
  primaryPainPoints: string[];
  engagementGoal: string;
  preferredStartDate: string;
  additionalNotes: string;
}

export interface ActExample {
  id: string;
  title: string;
  vendor: string;
  amount: string;
  context: string;
  auditQuestion: string;
  auditExplanation: string;
  consistencyQuestion: string;
  consistencyExplanation: string;
  taxTreatmentQuestion: string;
  taxTreatmentExplanation: string;
  ruleConclusion: string;
  badge: string;
}

export interface StepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  takeaway: string;
}

export interface IncludedDeliverable {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  iconName: string;
  category: 'core' | 'support' | 'systems';
}

export interface TestimonialPillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}
