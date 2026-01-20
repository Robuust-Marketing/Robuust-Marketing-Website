// Case Study type definitions for portfolio

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: number;
  featured: boolean;
  thumbnail: string;
  heroImage: string;
  tags: string[]; // e.g., ['WordPress', 'E-commerce', 'Branding']
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  services: string[]; // Service IDs used in this project
  testimonial?: CaseStudyTestimonial;
  gallery: string[];
  url?: string;
}

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}
