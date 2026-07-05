export interface ScorecardQuestion {
  id: string;
  category: 'A' | 'B' | 'C'; // Admin Systems, Books & Numbers, Compliance Calendar
  title: string;
  text: string;
  choices: {
    text: string;
    points: number;
    description: string;
  }[];
}

export interface StartHereCard {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  badge?: string;
}

export interface LauraOfferCard {
  id: string;
  title: string;
  description: string;
  bullet: string;
  buttonText: string;
  link: string;
  badge?: string;
}
