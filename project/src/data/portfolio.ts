export const personal = {
  name: 'Chakir Bahmed',
  title: 'Data Science & AI Engineer',
  location: 'Casablanca, Morocco',
  email: 'chakirbahmed1@gmail.com',
  phone: '+212 688666804',
  github: 'https://github.com/chakir-bahmed',
  linkedin: 'https://linkedin.com/in/chakir-bahmed',
  summary:
    'Data Science & AI Engineer passionate about transforming data into business value through machine learning, predictive modeling, and intelligent systems.',
  bio: 'I am a Data Science & Artificial Intelligence Engineer dedicated to building data-driven solutions that create real business impact. With hands-on experience in machine learning, predictive modeling, and large language models, I specialize in turning complex datasets into actionable insights and intelligent applications. My work spans data analysis, model development, and deploying AI systems that support smarter decision-making.',
  strengths: [
    'End-to-end machine learning pipeline development',
    'Statistical analysis and exploratory data analysis',
    'LLM application engineering with RAG architectures',
    'Translating business problems into data solutions',
  ],
  goals: [
    'Advance AI engineering with production-grade LLM applications',
    'Build intelligent decision support systems at scale',
    'Contribute to open-source data science tooling',
  ],
};

export const stats = [
  { label: 'Data & AI Projects', value: 12, suffix: '+' },
  { label: 'Professional Certifications', value: 6, suffix: '+' },
  { label: 'Technologies Used', value: 10, suffix: '+' },
  { label: 'AI Specializations', value: 4, suffix: '+' },
];

export const typingRoles = [
  'Data Science Engineer',
  'AI Engineer',
  'Machine Learning Specialist',
  'LLM & RAG Developer',
  'Predictive Modeling Expert',
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const skillCategories = [
  {
    title: 'Artificial Intelligence',
    icon: 'Brain',
    color: 'accent',
    skills: [
      { name: 'Machine Learning', level: 90 },
      { name: 'Large Language Models (LLMs)', level: 85 },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 85 },
      { name: 'Prompt Engineering', level: 82 },
      { name: 'Model Training & Evaluation', level: 88 },
    ],
  },
  {
    title: 'Data Analytics',
    icon: 'BarChart3',
    color: 'secondary',
    skills: [
      { name: 'Exploratory Data Analysis (EDA)', level: 92 },
      { name: 'Statistical Analysis', level: 88 },
      { name: 'Feature Engineering', level: 86 },
      { name: 'Data Visualization', level: 87 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: 'Code2',
    color: 'primary',
    skills: [
    { name: 'Python', level: 95 },
    { name: 'SQL', level: 90 },
    { name: 'Java', level: 82 },
    { name: 'JavaScript', level: 80 },
    { name: 'Angular', level: 78 },
    { name: 'C', level: 75 }
    ],
  },
  {
    title: 'Databases',
    icon: 'Database',
    color: 'secondary',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'OracleDB', level: 80 },
      { name: 'MogoDB', level: 82 },
    ],
  },
  {
    title: 'Tools & Frameworks',
    icon: 'Wrench',
    color: 'accent',
    skills: [
      { name: 'TensorFlow', level: 82 },
      { name: 'Scikit-Learn', level: 96 },
            { name: 'ETL/ELT Processes', level: 80 },

      { name: 'Docker', level: 86 },
      { name: 'Agile Methodology', level: 96 },
      { name: 'Git & GitHub', level: 88 },
    ],
  },
];

export const experiences = [
{
  role: 'Data Analyst Intern',
  org: 'Colibox Maroc',
  period: '2-Month Internship | 2024',
  description:
    'Analyzed business datasets and developed interactive dashboards to support data-driven decision-making and reporting processes.',
  achievements: [
    'Performed data cleaning, transformation, and validation',
    'Conducted exploratory data analysis (EDA)',
    'Developed interactive dashboards and business reports',
    'Automated data preparation workflows',
    'Provided actionable insights from business data'
  ],
  tech: ['Python', 'SQL', 'Power BI', 'Excel', 'Matplotlib', 'Seaborn','streamlit'],
},
  {
  role: 'Full Stack Developer Intern',
  org: 'EAI Architect',
  period: '4-Month Internship | 2025',
  description:
    'Designed and developed a corporate web platform, contributing to both frontend and backend development.',
  achievements: [
    'Developed responsive user interfaces using Angular',
    'Built and integrated RESTful APIs with Node.js',
    'Optimized website performance and responsiveness',
    'Implemented modern UI/UX practices',
    'Delivered production-ready features'
  ],
  tech: ['Angular', 'Node.js', 'TypeScript', 'HTML5', 'CSS3']
},
 
];

export const projects = [
  {
    title: 'Chess Analytics & AI Platform',
    category: 'Machine Learning',
    featured: true,
    description:
      'A full-scale analytics platform processing 500,000+ chess games and 670,000+ players. Built a data pipeline generating 20+ key performance indicators and machine learning models for match outcome prediction, exposed through REST APIs.',
    tech: ['Python', 'Pandas', 'DuckDB', 'SQL', 'FastAPI', 'XGBoost'],
    github: 'https://github.com/chakir-bahmed',
    demo: 'https://github.com/chakir-bahmed',
    gradient: 'from-blue-600 to-cyan-500',
    icon: 'Cpu',
  },
  {
    title: 'AI Chatbot Assistant (RAG + LLMs)',
    category: 'AI / LLM',
    featured: true,
    description:
      'An intelligent assistant built with Retrieval-Augmented Generation, integrating 100+ documents with large language models. Improved contextual retrieval, search relevance, and answer precision for complex queries.',
    tech: ['Python', 'LangChain', 'ChromaDB', 'OpenAI API', 'FastAPI'],
    github: 'https://github.com/chakir-bahmed',
    demo: 'https://github.com/chakir-bahmed',
    gradient: 'from-violet-600 to-blue-500',
    icon: 'Bot',
  },
  {
    title: 'Credit Risk Analysis',
    category: 'Machine Learning',
    featured: false,
    description:
      'A predictive credit risk model analyzing financial data from 30,000 clients across 24 variables. Achieved 91% accuracy through rigorous data cleaning, EDA, and model optimization.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    github: 'https://github.com/chakir-bahmed',
    demo: 'https://github.com/chakir-bahmed',
    gradient: 'from-emerald-600 to-cyan-500',
    icon: 'TrendingUp',
  },
  {
    title: 'USA Road Accident Analytics & Prediction',
    category: 'Data Analytics',
    featured: false,
    description:
      'Analyzed 7 million+ road accidents to identify key risk factors including weather, traffic, and environmental conditions. Developed predictive models to estimate accident severity and improve decision-making.',
    tech: ['Python', 'Pandas', 'Scikit-Learn', 'SQL', 'Seaborn'],
    github: 'https://github.com/chakir-bahmed',
    demo: 'https://github.com/chakir-bahmed',
    gradient: 'from-amber-600 to-rose-500',
    icon: 'MapPin',
  },
];

export const education = [
  {
    degree: "Master ISI — Data Science Option",
    institution: 'Hassan II University',
    period: '2025 — 2027',
    location: 'Casablanca, Morocco',
    description:
      'Advanced graduate program focused on data science, artificial intelligence, and intelligent systems engineering.',
  },
  {
    degree: 'Bachelor Degree in Computer Science',
    institution: 'Hassan II University',
    period: '2022 — 2025',
    location: 'Casablanca, Morocco',
    description:
      'Comprehensive undergraduate program in computer science covering algorithms, databases, software engineering, and data fundamentals.',
  },
  {
    degree: 'Baccalaureate in Mathematical Sciences A',
    institution: 'Lycée Mostapha Elmaani',
    period: '2022',
    location: 'Casablanca, Morocco',
    description:
      'Mathematics-intensive secondary education with a focus on analytical reasoning and scientific problem-solving.',
  },
];

export const certifications = [
  {
    title: 'Rapid Application Development with Large Language Models (LLMs)',
    provider: 'NVIDIA',
    date: 'October 2026',
    description:
      'Building AI applications rapidly using Large Language Models and Generative AI techniques.',
    credentialId: 'm06Ls3-rERc35UZFkrXKvM_Q',
    credentialUrl: 'https://learn.nvidia.com/certificates',
  },
  {
    title: 'Building RAG Agents with LLMs',
    provider: 'NVIDIA',
    date: 'août 2026',
    description:
      'Specialized training in Retrieval-Augmented Generation (RAG), vector databases, and LLMOps.',
    credentialId: 'YOUR_CREDENTIAL_ID',
    credentialUrl: 'https://learn.nvidia.com/certificates/YOUR_LINK',
  },

  {
    title: 'Building RAG Apps Using MongoDB',
    provider: 'MongoDB',
    date: 'November 2026',
    description:
      'Learned to build Retrieval-Augmented Generation applications using MongoDB and vector search.',
    credentialId: 'YOUR_CREDENTIAL_ID',
    credentialUrl: 'https://learn.mongodb.com/YOUR_LINK',
  },
  
  

  {
    title: 'Advanced SQL',
    provider: 'Kaggle',
    date: 'November 2026',
    description:
      'Advanced SQL techniques including JOINs, CTEs, Window Functions, and Query Optimization.',
    credentialId: 'YOUR_CREDENTIAL_ID',
    credentialUrl: 'https://www.kaggle.com/learn/certification/YOUR_USERNAME/advanced-sql',
  },

  {
    title: 'Intro to Machine Learning',
    provider: 'Kaggle',
    date: 'November 2026',
    description:
      'Introduction to machine learning, feature engineering, model training, and evaluation.',
    credentialId: 'YOUR_CREDENTIAL_ID',
    credentialUrl: 'https://www.kaggle.com/learn/certification/YOUR_USERNAME/intro-to-machine-learning',
  },

  
];

export const achievements = [
  {
    title: 'Large-Scale Data Pipeline',
    description: 'Processed and analyzed 500,000+ chess games with 670,000+ player profiles, generating 20+ performance indicators.',
    icon: 'Database',
  },
  {
    title: 'High-Accuracy Predictive Model',
    description: 'Achieved 91% accuracy on a credit risk prediction model across 30,000 clients and 24 financial variables.',
    icon: 'Target',
  },
  {
    title: 'Million-Record Analytics',
    description: 'Analyzed 7,000,000+ road accident records to identify key risk factors and build severity prediction models.',
    icon: 'TrendingUp',
  },
  {
    title: 'RAG System with 100+ Documents',
    description: 'Built a retrieval-augmented generation assistant integrating 100+ documents for improved contextual AI responses.',
    icon: 'Brain',
  },
  {
    title: 'Multilingual Proficiency',
    description: 'Professional working proficiency in Arabic, English, French, and German across technical and business contexts.',
    icon: 'Languages',
  },
  {
    title: 'AI Engineering Focus',
    description: 'Specializing in generative AI, LLM applications, and intelligent decision support systems.',
    icon: 'Sparkles',
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Professional' },
  { name: 'German', level: 'Working' },
];

export const resumeSummary = `Chakir Bahmed
Data Science & AI Engineer
Casablanca, Morocco | chakirbahmed1@gmail.com | +212 688666804

PROFILE
Data Science & Artificial Intelligence Engineer passionate about innovation, data-driven solutions, and AI technologies.

EXPERIENCE
- AI Project Developer (RAG + LLMs): Built RAG assistant integrating 100+ documents
- ML Engineer (Chess Analytics): Analyzed 500K+ games, 670K+ players, match prediction APIs
- Data Scientist (Credit Risk): 91% accuracy predictive model on 30K clients
- Data Analyst (Road Accidents): Analyzed 7M+ records, severity prediction models

SKILLS
Python, SQL, Pandas, NumPy, Scikit-Learn, LangChain, ChromaDB, FastAPI, OpenAI API,
DuckDB, Matplotlib, Seaborn, Git, MySQL, PostgreSQL

EDUCATION
- Master ISI - Data Science, Hassan II University (2025-2027)
- Bachelor in Computer Science, Hassan II University (2022-2025)

CERTIFICATIONS
- Rapid Application Development with LLMs, NVIDIA (Oct 2026)
- Data Science Certification, EISTA (Aug 2024)`;
