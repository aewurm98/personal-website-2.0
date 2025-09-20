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
  companyUrl?: string;
  companyLogo?: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface SkillTool {
  name: string;
  icon?: string;
}

export interface Skill {
  name: string;
  category: 'finance' | 'operations' | 'development';
  proficiency: 'Novice' | 'Fair' | 'Intermediate' | 'Proficient' | 'Expert';
  tools: SkillTool[];
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
  description: string;
  interests: string[];
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    institutionUrl?: string;
    institutionLogo?: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export interface SectionConfig {
  title: string;
  subtitle?: string;
  headings?: Record<string, string>;
  buttons?: Record<string, string>;
  labels?: Record<string, string>;
  placeholders?: Record<string, string>;
}

export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
  sections: {
    hero: SectionConfig & {
      greeting: string;
      buttons: {
        viewWork: string;
        contact: string;
      };
    };
    about: SectionConfig & {
      headings: {
        whoIAm: string;
        interests: string;
        education: string;
        experience: string;
      };
    };
    projects: SectionConfig & {
      categories: {
        all: string;
        web: string;
        mobile: string;
        ai: string;
        data: string;
        other: string;
      };
      viewAll: string;
      viewDetails: string;
    };
    experience: SectionConfig & {
      headings: {
        workExperience: string;
        internships: string;
        technicalSkills: string;
      };
    };
    contact: SectionConfig & {
      form: {
        title: string;
        description: string;
        labels: {
          name: string;
          email: string;
          subject: string;
          message: string;
        };
        placeholders: {
          name: string;
          email: string;
          subject: string;
          message: string;
        };
        submitButton: string;
      };
      connect: {
        title: string;
        description: string;
      };
      status: {
        title: string;
        text: string;
        tags: string[];
      };
      contactMethods: {
        email: string;
        phone: string;
        location: string;
      };
    };
  };
}
