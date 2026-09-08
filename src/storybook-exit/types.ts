export interface ConsultationFormData {
  companyName: string;
  ownerName: string;
  email: string;
  phone: string;
  annualRevenue: string;
  industry: string;
  exitTimeline: string; // '1-2 years' | '3-5 years' | '5-7 years' | '10+ years' | 'Undecided'
  accountingPlatform: string;
  currentBookkeeperStatus: string;
  ownerDependenceLevel: number; // 1-10
  booksCleanlinessLevel: number; // 1-10
  teamDepthLevel: number; // 1-10
  primaryConcern: string;
  preferredDate: string;
  preferredTime: string;
  timezone: string;
  notes?: string;
}

export interface DownpaymentFormData {
  tier: 'foundation_standard' | 'foundation_enterprise';
  paymentMode: 'downpayment_retainer' | 'full_upfront';
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  website?: string;
  estimatedRevenue: string;
  targetRunway: string;
  accountingSystem: string;
  existingBookkeeperName: string;
  keepBookkeeper: boolean;
  virtualHqAdminName: string;
  paymentMethod: 'card' | 'ach' | 'invoice';
  cardName?: string;
  cardNumber?: string;
  cardExp?: string;
  cardCvc?: string;
  billingAddress?: string;
  agreedToTerms: boolean;
}

export interface OrderConfirmation {
  id: string;
  type: 'consultation' | 'downpayment';
  timestamp: string;
  customerName: string;
  companyName: string;
  email: string;
  phone: string;
  details: {
    tierName?: string;
    amountPaid?: number;
    amountDueLater?: number;
    appointmentDate?: string;
    appointmentTime?: string;
    timezone?: string;
    targetRunway?: string;
    nextMilestoneDate?: string;
  };
}

export interface RoadmapStage {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  buyerPerspective: string;
  focusArea: string;
  iconName: string;
}

export interface SystemPillar {
  number: string;
  title: string;
  shortDesc: string;
  details: string[];
  impactOnValuation: string;
  keyArtifact: string;
}

export interface VirtualHqModule {
  id: string;
  name: string;
  tagline: string;
  description: string;
  sampleItems: string[];
  buyerValue: string;
  iconName: string;
}
