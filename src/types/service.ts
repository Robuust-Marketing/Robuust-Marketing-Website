// Service type definitions for 10 Robuust Marketing services

export interface Service {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  technologies: string[];
  addOnPrice?: number;
  featured: boolean;
  caseStudies: string[]; // Slug references to case studies
}

export type ServiceId =
  | "design"
  | "development"
  | "hosting"
  | "maintenance"
  | "tracking"
  | "email-marketing"
  | "online-marketing"
  | "branding"
  | "seo"
  | "crm";
