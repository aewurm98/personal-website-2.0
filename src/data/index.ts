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
      title: 'Projects',
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
      'Led diligence on 25+ enterprise software companies and closed 4 transactions from $10M - $100M',
      'Advised 5 portfolio company boards on product, go-to-market strategy and org design',
      'Ran 100s of customer interviews, benchmarking exercises and financial models to evaluate investment opportunities'
    ],
    technologies: ['Financial Modeling', 'Market Research', 'Private Equity Diligence', 'Corporate Valuation', 'Deal Sourcing', 'M&A']
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
      'Led product & growth strategy for B2B SaaS platform serving 400+ enterprise clients',
      'Managed 9-person cross-functional team to launch new product features, build sales pipeline and manage client relationships',
      'Owned $1M+/yr P&L and managed technical projects involving engineering, QA and marketing'
    ],
    technologies: ['Product Strategy', 'Management', 'Performance Marketing', 'Revenue Operations', 'Data Analysis']
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
      'Conducted 15+ commercial due diligences and catalyzed two $5B+ SaaS private equity acquisitions',
      'Developed BI products to enhance client decision-making and capture $100Ms in operating efficiencies'
    ],
    technologies: ['Strategy Consulting', 'Financial Analysis', 'Project Management', 'Business Operations']
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
    description: 'Original website built based on learnings from The Odin Project.',
    longDescription: `As a Product Manager at Voyage, I wanted to develop full-stack development skills 
    to better engage with the engineering team. I taught myself HTML/CSS, Javascript and ReactJS to build a personal website where I
    could showcase future projects and continue upskilling.`,
    image: '/images/projects/react_website_development_stock_photo.jpg',
    technologies: ['HTML/CSS', 'Javascript', 'React', 'git'],
    category: 'web',
    githubUrl: 'https://github.com/aewurm98/alex_wurm_personal_website_1.0',
    liveUrl: 'https://v1.alexwurm.com/',
    featured: false,
    date: '2022-04-15',
    features: [
      'Responsive design',
      'Interactive UI',
      'Custom CSS',
      'GitHub Pages ',
      'React components',
      'Git version control'
    ]
  },
  {
    id: '2',
    slug: 'sports-statistics',
    title: 'NBA Stats in Python',
    description: 'Advanced analytics and machine learning exercises on NBA team and player data.',
    longDescription: `A longtime fan of the NBA and a data nerd, I decided to use the 
    python programming skills I was working on while at Voyage to analyze NBA team and 
    player statistics.`,
     image: '/images/projects/nba_players_stock_photo.jpeg',
    technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Jupyter','scikit-learn'],
    category: 'data',
    githubUrl: 'https://github.com/aewurm98/alex_wurm_nba_stats_with_python',
    
    featured: true,
    date: '2022-07-15',
    features: [
      'Web scraping',
      'Pandas data analysis',
      'ML with scikit-learn',
      'Jupyter notebooks',
      'Statistical modeling',
      'Data visualization'
    ]
  },
  {
    id: '3',
    slug: 'kaytoo-app',
    title: 'Kaytoo, Inc.',
    description: 'NLP-based habit-building and accountability mobile app.',
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
    date: '2021-09-15',
    features: [
      'NLP-powered suggestions',
      'Habit tracking dashboard',
      'User authentication',
      'Push notifications',
      'Progress analytics',
      'Social features'
    ]
  },
  {
    id: '4',
    slug: 'github-rag',
    title: 'GitHub RAG Chat',
    description: 'AI-powered chat interface for exploring GitHub repositories using RAG.',
    longDescription: `An intelligent chat application that uses Retrieval-Augmented Generation (RAG) 
    to help users explore and understand GitHub repositories. Built with Lovable, this tool allows 
    you to have natural conversations about codebases, ask questions about implementation details, 
    and get contextual answers powered by AI.`,
    image: '/images/projects/github-project-image.png',
    technologies: ['React', 'TypeScript', 'Lovable', 'RAG', 'OpenAI', 'Supabase'],
    category: 'ai',
    githubUrl: 'https://github.com/aewurm98/github-rag-chat',
    liveUrl: 'https://github-rag.alexwurm.com/',
    featured: true,
    date: '2025-11-15',
    features: [
      'RAG-powered exploration',
      'Natural language queries',
      'Context-aware responses',
      'Repository indexing',
      'Real-time chat interface',
      'Supabase vector storage'
    ]
  },
  {
    id: '5',
    slug: 'job-app-suite',
    title: 'Job App Suite',
    description: 'AI-powered job application toolkit with dashboard tracking and tailored content generation.',
    longDescription: `A comprehensive job application management platform designed to streamline the job search process. 
    Features include application tracking dashboards, resume and cover letter storage, AI-powered content generation 
    for tailored applications, and progress analytics to optimize your job search strategy.`,
    image: '/images/projects/job-app-suite.jpg',
    technologies: ['React', 'TypeScript', 'Supabase', 'OpenAI', 'Tailwind CSS'],
    category: 'web',
    featured: false,
    status: 'in-progress',
    date: '2026-01-15',
    features: [
      'App tracking dashboard',
      'Resume + cover letter storage',
      'AI-powered content generation',
      'Progress analytics',
      'Job posting integration',
      'Tailored app suggestions'
    ]
  },
  {
    id: '6',
    slug: 'skiconnect',
    title: 'SkiConnect',
    description: 'Social ski trip planning app with trail maps, conditions tracking, and group coordination.',
    longDescription: `A social application for planning ski trips with friends. Integrates real-time location data 
    with trail maps and snow conditions, coordinates group logistics through calendar invites, and helps 
    friends find each other on the mountain. Built for skiers who want to maximize their time on the slopes.`,
    image: '/images/projects/skiconnect.png',
    technologies: ['React Native', 'TypeScript', 'Supabase', 'MapBox', 'Weather API'],
    category: 'mobile',
    featured: false,
    status: 'in-progress',
    date: '2026-01-15',
    features: [
      'Real-time location tracking',
      'Interactive trail maps',
      'Live snow conditions',
      'Group coordination tools',
      'Calendar integration',
      'Friend finder on mountain'
    ]
  }
];
