export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Marketing Strategy' | 'Social Impact & Digital Platform' | 'Event Marketing & Sponsorship' | 'Branding & Stakeholder Management' | 'Organisational Behaviour';
  period: string;
  summary: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  caseStudy: {
    problem: string;
    research: string;
    strategy: string;
    execution: string;
    outcome: string;
  };
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  category: 'Executive Education' | 'Business Analytics' | 'Financial Markets' | 'Wealth Management';
  description: string;
  skillsGained: string[];
  imagePath?: string;
  hasDocument: boolean;
}

export interface MetricItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  category: string;
  detail: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
}
