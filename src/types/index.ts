export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'ai' | 'data' | 'other';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai' | 'other';
  proficiency: number; // 1-5 scale
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface AboutData {
  bio: string;
  interests: string[];
  education: {
    degree: string;
    institution: string;
    year: string;
  };
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  email: string;
  socialLinks: SocialLink[];
}
