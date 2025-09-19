import { SiteConfig, HeroData, AboutData, Experience, Skill, Project } from '@/types';

export const siteConfig: SiteConfig = {
  title: 'Alex Wurm | Graduate Student & Entrepreneur',
  description: 'Personal  website showcasing professional experience, technical skills, projects, and interests in tech and entrepreneurship.',
  author: 'Alex Wurm',
  url: 'https://alexwurm.com',
  email: 'alexwurm@stanford.edu',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/aewurm98',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alex-wurm',
      icon: 'linkedin'
    },
    {
      name: 'X',
      url: 'https://x.com/alexwurm_',
      icon: 'X'
    }
  ]
};

export const heroData: HeroData = {
  name: 'Alex Wurm',
  title: 'MBA Candidate @ Stanford GSB',
  subtitle: 'Investor, Advisor & AI Enthusiast',
  description: 'Building technology solutions that leverage AI to enhance individual health & wellness and business operations.',
  image: '/images/profile.jpg'
};

export const aboutData: AboutData = {
  description: `I'm an MBA student with a passion for software, digital health & artificial intelligence. 
  With 5+ years of experience in consulting, startups & private equity investing, I specialize in building scalable products & business models.
  I am interested in Summer 2026 roles where I can leverage my technical & financial expertise to innovate in enterprise tech & healthcare.`,
  interests: [
    'Machine Learning & AI',
    'Web Development',
    'Natural Language Processing',
    'B2B Healthcare IT',
    'Precision Drug Discovery',
    'Internet of Medical Things'
  ],
  education: {
    degree: 'Master of Science in Computer Science',
    school: 'Stanford University',
    year: '2024'
  },
  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '30+', label: 'Software Companies Evaluated' },
    { value: '4,000+', label: 'Programming' },
    { value: '5', label: 'Board Advisor Roles' }
  ]
};

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Inc.',
    position: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    startDate: '2023-01',
    endDate: '2024-06',
    current: false,
    description: [
      'Led development of microservices architecture serving 1M+ users',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored 3 junior developers and conducted code reviews'
    ],
    technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    id: '2',
    company: 'AI Startup',
    position: 'Machine Learning Engineer',
    location: 'Palo Alto, CA',
    startDate: '2022-06',
    endDate: '2022-12',
    current: false,
    description: [
      'Developed computer vision models achieving 95% accuracy',
      'Optimized model inference time by 40% using TensorRT',
      'Collaborated with research team on novel ML architectures'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Docker', 'AWS']
  },
  {
    id: '3',
    company: 'University Research Lab',
    position: 'Research Assistant',
    location: 'Stanford, CA',
    startDate: '2022-01',
    current: true,
    description: [
      'Conducting research on transformer architectures for NLP tasks',
      'Published 2 papers in top-tier conferences (ACL, EMNLP)',
      'Developing open-source tools for the research community'
    ],
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'Docker', 'Git']
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', proficiency: 5, icon: 'react' },
  { name: 'TypeScript', category: 'frontend', proficiency: 5, icon: 'typescript' },
  { name: 'Next.js', category: 'frontend', proficiency: 4, icon: 'nextjs' },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 4, icon: 'tailwind' },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 5, icon: 'nodejs' },
  { name: 'Python', category: 'backend', proficiency: 5, icon: 'python' },
  { name: 'Express.js', category: 'backend', proficiency: 4, icon: 'express' },
  { name: 'FastAPI', category: 'backend', proficiency: 4, icon: 'fastapi' },
  
  // Database
  { name: 'PostgreSQL', category: 'database', proficiency: 4, icon: 'postgresql' },
  { name: 'MongoDB', category: 'database', proficiency: 3, icon: 'mongodb' },
  { name: 'Redis', category: 'database', proficiency: 3, icon: 'redis' },
  
  // DevOps
  { name: 'Docker', category: 'devops', proficiency: 4, icon: 'docker' },
  { name: 'AWS', category: 'devops', proficiency: 4, icon: 'aws' },
  { name: 'Kubernetes', category: 'devops', proficiency: 3, icon: 'kubernetes' },
  
  // AI/ML
  { name: 'TensorFlow', category: 'ai', proficiency: 4, icon: 'tensorflow' },
  { name: 'PyTorch', category: 'ai', proficiency: 4, icon: 'pytorch' },
  { name: 'Scikit-learn', category: 'ai', proficiency: 4, icon: 'scikit' },
  
  // Other
  { name: 'Git', category: 'other', proficiency: 5, icon: 'git' },
  { name: 'Linux', category: 'other', proficiency: 4, icon: 'linux' }
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'ai-chat-assistant',
    title: 'AI Chat Assistant',
    description: 'Intelligent chatbot powered by transformer models with real-time conversation capabilities.',
    longDescription: `A sophisticated AI chat assistant that leverages state-of-the-art transformer models 
    to provide intelligent, context-aware responses. Features include real-time conversation processing, 
    sentiment analysis, and multi-language support. The system is built with a microservices architecture 
    ensuring scalability and reliability.`,
    image: '/images/projects/ai-chat.jpg',
    technologies: ['Python', 'PyTorch', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    category: 'ai',
    githubUrl: 'https://github.com/alexwurm/ai-chat-assistant',
    liveUrl: 'https://ai-chat.alexwurm.dev',
    featured: true,
    date: '2024-03'
  },
  {
    id: '2',
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with advanced features and modern UI.',
    longDescription: `A comprehensive e-commerce platform built with modern web technologies. 
    Features include user authentication, product management, shopping cart functionality, 
    payment processing, and admin dashboard. The platform is optimized for performance 
    and includes advanced features like real-time inventory tracking and analytics.`,
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'AWS'],
    category: 'web',
    githubUrl: 'https://github.com/alexwurm/ecommerce-platform',
    liveUrl: 'https://ecommerce.alexwurm.dev',
    featured: true,
    date: '2024-01'
  },
  {
    id: '3',
    slug: 'data-visualization-dashboard',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for real-time data visualization and analytics.',
    longDescription: `An interactive data visualization dashboard that provides real-time insights 
    through dynamic charts and graphs. The dashboard supports multiple data sources, 
    custom filtering, and export capabilities. Built with D3.js for advanced visualizations 
    and real-time data streaming capabilities.`,
    image: '/images/projects/dashboard.jpg',
    technologies: ['React', 'D3.js', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
    category: 'data',
    githubUrl: 'https://github.com/alexwurm/data-dashboard',
    liveUrl: 'https://dashboard.alexwurm.dev',
    featured: false,
    date: '2023-11'
  },
  {
    id: '4',
    slug: 'mobile-fitness-app',
    title: 'Fitness Tracking App',
    description: 'Cross-platform mobile app for fitness tracking and workout planning.',
    longDescription: `A comprehensive fitness tracking mobile application built with React Native. 
    Features include workout planning, progress tracking, nutrition logging, and social features. 
    The app integrates with wearable devices and provides personalized recommendations 
    based on user data and goals.`,
    image: '/images/projects/fitness-app.jpg',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo', 'Node.js'],
    category: 'mobile',
    githubUrl: 'https://github.com/alexwurm/fitness-app',
    liveUrl: 'https://fitness.alexwurm.dev',
    featured: false,
    date: '2023-08'
  },
  {
    id: '5',
    slug: 'machine-learning-pipeline',
    title: 'ML Pipeline Framework',
    description: 'Automated machine learning pipeline for model training and deployment.',
    longDescription: `A comprehensive machine learning pipeline framework that automates the entire 
    ML workflow from data preprocessing to model deployment. Features include automated 
    hyperparameter tuning, model versioning, A/B testing capabilities, and monitoring. 
    Built with scalability and reproducibility in mind.`,
    image: '/images/projects/ml-pipeline.jpg',
    technologies: ['Python', 'TensorFlow', 'Kubernetes', 'Airflow', 'MLflow', 'Docker'],
    category: 'ai',
    githubUrl: 'https://github.com/alexwurm/ml-pipeline',
    liveUrl: 'https://ml-pipeline.alexwurm.dev',
    featured: true,
    date: '2023-06'
  },
  {
    id: '6',
    slug: 'task-management-system',
    title: 'Task Management System',
    description: 'Collaborative task management platform with real-time updates.',
    longDescription: `A collaborative task management system designed for teams and organizations. 
    Features include real-time collaboration, task assignment, progress tracking, 
    file sharing, and comprehensive reporting. The platform supports multiple project 
    types and integrates with popular productivity tools.`,
    image: '/images/projects/task-management.jpg',
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis', 'AWS'],
    category: 'web',
    githubUrl: 'https://github.com/alexwurm/task-management',
    liveUrl: 'https://tasks.alexwurm.dev',
    featured: false,
    date: '2023-04'
  }
];
