export interface LeadFormData {
  // Contact details
  name: string;
  company: string;
  email: string;
  phone: string;
  areasToControl: string[];
  teamSize: string;
  selectedModules?: string[];

  // About Your Business
  industry: string;
  yearsOperating: string;
  taxStructure: string;
  taxStructureOther?: string;
  futurePlans: string[];
  futurePlansOther?: string;
  sellingTimeline?: string;

  // Your Current Systems
  usesGoogleWorkspace: 'Yes' | 'No' | 'Not sure' | '';
  googleWorkspaceSubscription: string;
  googleWorkspaceSubscriptionOther?: string;
  googleWorkspaceTools: string[];
  googleWorkspaceToolsOther?: string;

  // Business systems and names/notes
  businessSystems: Record<string, string>;

  // Key operational reflection questions
  systemsWorkingWell: string;
  systemsToReplaceOrEliminate: string;

  // Legacy field support
  operationalHeadache?: string;
}

export interface FeatureCardItem {
  id: string;
  cardNumber: number;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge?: string;
  highlights?: string[];
  isCustom?: boolean;
}

export interface CarouselSlide {
  id: string;
  title: string;
  shortExplanation: string;
  category: string;
  badge: string;
  mockupType: 'owner' | 'team' | 'projects' | 'files' | 'compliance' | 'financial' | 'lists' | 'hr' | 'mobile';
}

export interface FaqItem {
  question: string;
  answer: string;
}
