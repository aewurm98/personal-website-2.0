import { SiteConfig, HeroData, AboutData, Experience, Skill, Project } from '@/types';

export const siteConfig: SiteConfig = {
  title: 'Alex Wurm | Graduate Student & Entrepreneur',
  description: 'Personal  website showcasing professional experience, technical skills, projects, and interests in tech and entrepreneurship.',
  author: 'Alex Wurm',
  url: 'https://alexwurm.com',
  email: 'alexwurm@stanford.edu',
  phone: '+1 (914) 815-2447',
  location: 'Stanford, CA',
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
  ],
  sections: {
    hero: {
      title: 'Welcome',
      greeting: "Hi, I'm",
      buttons: {
        viewWork: 'View Projects',
        contact: 'Get In Touch'
      }
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'A selection of personal project I have worked on.',
      categories: {
        all: 'All Projects',
        web: 'Web Development',
        mobile: 'Mobile Apps',
        ai: 'AI/ML',
        data: 'Data Science',
        other: 'Other'
      },
      viewAll: 'View All Projects →',
      viewDetails: 'View Details →'
    },
    experience: {
      title: 'Experience & Skills',
      subtitle: 'My professional journey and areas of expertise.',
      headings: {
        workExperience: 'Work Experience',
        internships: 'Internship Experience',
        technicalSkills: 'Technical Skills'
      }
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know my background, interests and ambitions.',
      headings: {
        whoIAm: 'Who I Am',
        interests: 'Areas of Interest',
        education: 'Education',
        experience: 'Experience'
      }
    },
    contact: {
      title: 'Get In Touch',
      subtitle: "Where to find me.",
      form: {
        title: 'Send a Message',
        description: "Fill out the form below and I'll get back to you as soon as possible.",
        labels: {
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message'
        },
        placeholders: {
          name: 'Your name',
          email: 'your.email@example.com',
          subject: "What's this about?",
          message: 'Tell me about your project or opportunity...'
        },
        submitButton: 'Send Message'
      },
      connect: {
        title: "Let's Connect",
        description: "I'm always interested in hearing about new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!"
      },
      status: {
        title: 'Current Status',
        text: 'Available for new opportunities',
        tags: ['Open to Work', 'Internships', 'Projects', 'Advisory', 'Investments']
      },
      contactMethods: {
        email: 'Email',
        phone: 'Phone',
        location: 'Location'
      }
    }
  }
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
  education: [
    {
      degree: 'Master of Business Administration',
      institution: 'Stanford Graduate School of Business',
      year: '2027',
      institutionUrl: 'https://www.gsb.stanford.edu',
      institutionLogo: '/images/stanford-gsb-logo.png'
    },
    {
      degree: 'Bachelor of Science, Chemical & Biomolecular Engineering',
      institution: 'Cornell University',
      year: '2020',
      institutionUrl: 'https://www.cornell.edu',
      institutionLogo: '/images/cornell-logo.png'
    }
  ],
  stats: [
    { value: '5+', label: 'Years Experience' },
    { value: '30+', label: 'Software Companies Evaluated' },
    { value: '4,000+', label: 'Programming Hours' },
    { value: '5', label: 'Board Advisor Roles' }
  ]
};

export const internships: Experience[] = [
  {
    id: 'i1',
    company: 'Kindeva Drug Delivery',
    companyUrl: 'https://www.kindevadd.com/',
    companyLogo: '/images/kindeva.png',
    position: 'Strategy & Operations Associate',
    location: 'St. Paul, MN',
    startDate: 'July 2020',
    endDate: 'September 2020',
    current: false,
    description: [],
    technologies: []
  },
  {
    id: 'i2',
    company: 'PepsiCo',
    companyUrl: 'https://www.pepsico.com/',
    companyLogo: '/images/pepsico.png',
    position: 'Commercialization Engineering Intern',
    location: 'White Plains, NY',
    startDate: 'May 2019',
    endDate: 'August 2019',
    current: false,
    description: [],
    technologies: []
  },
  {
    id: 'i3',
    company: 'Procter & Gamble',
    companyUrl: 'https://us.pg.com/',
    companyLogo: '/images/procter_and_gamble.png',
    position: 'Process Engineering Intern',
    location: 'Cincinnati, OH',
    startDate: 'May 2018',
    endDate: 'August 2018',
    current: false,
    description: [],
    technologies: []
  },

  {
    id: 'i4',
    company: 'LogicPrep Education',
    companyUrl: 'https://logic-prep-cbxu.squarespace.com/',
    companyLogo: '/images/logicprep.png',
    position: 'Database Management Intern',
    location: 'Armonk, NY',
    startDate: 'April 2016',
    endDate: 'January 2018',
    current: false,
    description: [],
    technologies: []
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Serent Capital',
    companyUrl: 'https://serentcapital.com',
    companyLogo: '/images/serent.png',
    position: 'Technology Investing Associate',
    location: 'Austin, TX',
    startDate: 'July 2023',
    endDate: 'August 2025',
    current: false,
    description: [
      'Diligenced 30+ enterprise software companies and closed 4 transactions from $10M - $100M',
      'Advised 5 portfolio company boards on product, go-to-market strategy and org design',
      'Ran 100s of customer interviews, benchmarking exercises and finanial models to evaluate investment opportunities'
    ],
    technologies: ['Financial Modeling', 'Market Research', 'Due Diligence', 'Investment Analysis']
  },
  {
    id: '2',
    company: 'Voyage SMS',
    companyUrl: 'https://voyagesms.com',
    companyLogo: '/images/voyage.png',
    position: 'Head of Growth | Product Manager',
    location: 'Los Angeles, CA',
    startDate: 'April 2022',
    endDate: 'March 2023',
    current: false,
    description: [
      'Led product & growth strategy for B2B SaaS platform serving 500+ enterprise clients',
      'Managed 9-person cross-functional team to launch new product features, build sales pipeline and manage client relationships',
      'Owned $1M+/yr P&L and managed technical projects involving engineering, QA and marketing'
    ],
    technologies: ['Product Strategy', 'Team Leadership', 'Analytics', 'SaaS']
  },
  {
    id: '3',
    company: 'Bain & Company',
    companyUrl: 'https://www.bain.com',
    companyLogo: '/images/bain.png',
    position: 'Senior Associate Consultant',
    location: 'Chicago, IL',
    startDate: 'September 2020',
    endDate: 'August 2022',
    current: false,
    description: [
      'Advised Fortune 500 clients on agile growth methods and innovation strategies',
      'Partnered with stakeholders across business units to deliver $100Ms in operating efficiencies',
      'Developed data analytics products to enhance client decision-making'
    ],
    technologies: ['Strategy Consulting', 'Financial Analysis', 'Data Analytics', 'Project Management']
  }
];

export const skills: Skill[] = [
  // Finance Skills
  {
    name: 'Financial modeling',
    category: 'finance',
    proficiency: 'Expert',
    tools: [
      { name: 'Microsoft Excel', icon: 'excel' },
      { name: 'PowerBI', icon: 'powerbi' },
      { name: 'Tableau', icon: 'tableau' },
      { name: 'Looker', icon: 'looker' },
      { name: 'QuickBooks', icon: 'quickbooks' },
      { name: 'Pitchbook', icon: 'pitchbook' },
      { name: 'Capital IQ', icon: 'capitaliq' }
    ]
  },
  {
    name: 'Data visualization',
    category: 'finance',
    proficiency: 'Proficient',
    tools: [
      { name: 'Microsoft Excel', icon: 'excel' },
      { name: 'PowerBI', icon: 'powerbi' },
      { name: 'Tableau', icon: 'tableau' },
      { name: 'Looker', icon: 'looker' }
    ]
  },
  {
    name: 'Financial statement analysis',
    category: 'finance',
    proficiency: 'Expert',
    tools: [
      { name: 'Microsoft Excel', icon: 'excel' },
      { name: 'QuickBooks', icon: 'quickbooks' },
      { name: 'Pitchbook', icon: 'pitchbook' },
      { name: 'Capital IQ', icon: 'capitaliq' }
    ]
  },

  // Operations Skills
  {
    name: 'Agile/scrum',
    category: 'operations',
    proficiency: 'Proficient',
    tools: [
      { name: 'Trello', icon: 'trello' },
      { name: 'Asana', icon: 'asana' },
      { name: 'ClickUp', icon: 'clickup' },
      { name: 'Jira', icon: 'jira' }
    ]
  },
  {
    name: 'Go-to-market',
    category: 'operations',
    proficiency: 'Expert',
    tools: [
      { name: 'Linear', icon: 'linear' },
      { name: 'Google Analytics', icon: 'google-analytics' },
      { name: 'Salesforce', icon: 'salesforce' },
      { name: 'Hubspot', icon: 'hubspot' }
    ]
  },
  {
    name: 'Performance management',
    category: 'operations',
    proficiency: 'Proficient',
    tools: [
      { name: 'Linear', icon: 'linear' },
      { name: 'Google Analytics', icon: 'google-analytics' },
      { name: 'Salesforce', icon: 'salesforce' },
      { name: 'Hubspot', icon: 'hubspot' }
    ]
  },

  // Development Skills
  {
    name: 'Frontend',
    category: 'development',
    proficiency: 'Proficient',
    tools: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'React', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' }
    ]
  },
  {
    name: 'Database',
    category: 'development',
    proficiency: 'Proficient',
    tools: [
      { name: 'SQL', icon: 'sql' },
      { name: 'Java', icon: 'java' }
    ]
  },
  {
    name: 'AI/ML',
    category: 'development',
    proficiency: 'Intermediate',
    tools: [
      { name: 'Python', icon: 'python' },
      { name: 'Jupyter', icon: 'jupyter' }
    ]
  },
  {
    name: 'Data science',
    category: 'development',
    proficiency: 'Expert',
    tools: [
      { name: 'Python', icon: 'python' },
      { name: 'Matlab', icon: 'matlab' }
    ]
  },
  {
    name: 'Code management',
    category: 'development',
    proficiency: 'Intermediate',
    tools: [
      { name: 'Git', icon: 'git' }
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'old-website',
    title: 'Previous Version of my Website',
    description: 'Original ReactJS website built based on learnings from The Odin Project.',
    longDescription: `As a Product Manager at Voyage, I wanted to develop full-stack development skills 
    to better engage with the engineering team. I taught myself HTML/CSS, Javascript and ReactJS to build a personal website where I
    could showcase future projects and continue upskilling.`,
    image: '/images/projects/react_website_development_stock_photo.jpg',
    technologies: ['HTML/CSS', 'Javascript', 'React', 'git'],
    category: 'web',
    githubUrl: 'https://github.com/aewurm98/alex_wurm_personal_website_1.0',
    liveUrl: 'https://v1.alexwurm.com/',
    featured: false,
    date: '2022-04'
  },
  {
    id: '2',
    slug: 'sports-statistics',
    title: 'NBA Stats in Python',
    description: 'Full-stack e-commerce solution with advanced features and modern UI.',
    longDescription: `A longtime fan of the NBA and a data nerd, I decided to use the 
    python programming skills I was working on while at Voyage to analyze NBA team and 
    player statistics.`,
     image: '/images/projects/nba_players_stock_photo.jpeg',
    technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Jupyter','scikit-learn'],
    category: 'data',
    githubUrl: 'https://github.com/aewurm98/ecommerce-platform',
    
    featured: true,
    date: '2022-07'
  },
  {
    id: '3',
    slug: 'kaytoo-app',
    title: 'Kaytoo, Inc.',
    description: 'NLP-based habit-building and accountability mobileapp.',
    longDescription: `During COVID lockdown, I worked with two college friends to build
    a habit-building and accountability app. Before the popularization of ChatGPT and 
    LLMs, we investigate Natural Language Processing as a tool to improve personalized
    goal and tactic suggestions.`,
     image: '/images/projects/kaytoo_mockups.png',
    technologies: ['HTML/CSS', 'SwiftUI', 'Notion', 'InVision', 'HuggingFace'],
    category: 'mobile',
    githubUrl: 'https://github.com/aewurm98/kaytoo-app.github.io',
    liveUrl: 'https://kaytoo.alexwurm.com/',
    featured: true,
    date: '2021-09'
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
    githubUrl: 'https://github.com/aewurm98/fitness-app',
    liveUrl: 'https://fitness.alexwurm.com',
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
    githubUrl: 'https://github.com/aewurm98/ml-pipeline',
    liveUrl: 'https://ml-pipeline.alexwurm.com',
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
    githubUrl: 'https://github.com/aewurm98/task-management',
    liveUrl: 'https://tasks.alexwurm.com',
    featured: false,
    date: '2023-04'
  }
];
