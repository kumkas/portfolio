export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Nithin V",
    initials: "NV",
    title: "Senior AI Engineer",
    company: "TechCorp AI",
    location: "",
    email: "nithin@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://nithinv.dev",
    
    // Professional Summary
    summary: "Senior AI Engineer at TechCorp AI with 5+ years building production ML systems that drive real business value. Currently leading autonomous vehicle perception systems processing 10M+ miles of driving data daily. Previously scaled ML infrastructure at DataFlow Systems, reducing model inference latency by 70% and serving millions of users.",
    
    // Availability Status
    availableForWork: true,
    availabilityText: "Open to work",
  },

  // Social Links
  social: {
    github: "https://github.com/nithinv",
    linkedin: "https://linkedin.com/in/nithinv",
    twitter: "https://twitter.com/nithinv_ai",
    email: "mailto:nithin@example.com",
  },

  // Key Statistics
  stats: [
    { label: "Years Experience", value: "5+", color: "text-blue-600" },
    { label: "Models Deployed", value: "50+", color: "text-green-600" },
    { label: "Engineers Led", value: "8+", color: "text-purple-600" },
    { label: "Daily Users", value: "10M+", color: "text-orange-600" },
  ],

  // Core Skills (for tags)
  coreSkills: [
    "Machine Learning",
    "LLMs & NLP", 
    "Computer Vision",
    "MLOps",
    "Python",
    "PyTorch", 
    "AWS",
    "Kubernetes"
  ],

  // Experience
  experience: [
    {
      title: "Senior AI Engineer",
      company: "TechCorp AI",
      location: "San Francisco, CA",
      duration: "Jan 2022 - Present",
      current: true,
      description: "Leading development of autonomous vehicle perception systems processing 10M+ miles of driving data daily.",
      achievements: [
        "Led cross-functional team of 8 engineers building real-time ML pipelines",
        "Reduced model inference latency by 80% through optimization and caching",
        "Architected production LLM systems serving 10M+ daily requests",
        "Implemented MLOps practices reducing deployment time from weeks to hours"
      ],
      skills: ["PyTorch", "Kubernetes", "AWS", "TensorFlow", "MLflow", "FastAPI"]
    },
    {
      title: "Machine Learning Engineer", 
      company: "DataFlow Systems",
      location: "Seattle, WA",
      duration: "Mar 2020 - Dec 2021",
      current: false,
      description: "Built ML models for real-time recommendation systems and fraud detection serving millions of users.",
      achievements: [
        "Developed recommendation engine improving user engagement by 35%",
        "Built fraud detection system reducing false positives by 60%", 
        "Mentored 4 junior engineers and established ML best practices",
        "Migrated legacy systems to cloud-native microservices architecture"
      ],
      skills: ["Scikit-learn", "Apache Spark", "Docker", "PostgreSQL", "Redis"]
    },
    {
      title: "AI Research Engineer",
      company: "InnovateAI Labs", 
      location: "Boston, MA",
      duration: "Jun 2019 - Feb 2020",
      current: false,
      description: "Conducted cutting-edge research in computer vision and NLP with focus on multi-modal learning.",
      achievements: [
        "Published 2 first-author papers in top-tier AI conferences (ICCV, NeurIPS)",
        "Developed novel multi-modal fusion architecture for video understanding",
        "Open-sourced research code with 1000+ GitHub stars",
        "Won 'Best Paper Award' at Computer Vision Workshop"
      ],
      skills: ["TensorFlow", "OpenCV", "CUDA", "Python", "Research"]
    }
  ],

  // Education
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA", 
      duration: "2017 - 2019",
      specialization: "Artificial Intelligence",
      gpa: "3.9/4.0",
      thesis: "Neural Architecture Search for Efficient Deep Learning Models",
      achievements: [
        "Graduate Research Assistant in AI Lab",
        "Teaching Assistant for CS229 (Machine Learning)",
        "Recipient of Stanford AI Fellowship",
        "Published 3 conference papers"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "UC Berkeley",
      location: "Berkeley, CA",
      duration: "2013 - 2017", 
      specialization: "Data Science & Machine Learning",
      gpa: "3.8/4.0",
      thesis: "Deep Learning for Medical Image Classification",
      achievements: [
        "Summa Cum Laude graduate",
        "President of AI/ML Student Society", 
        "Winner of Berkeley Hackathon 2016",
        "Research in Professor's Computer Vision Lab"
      ]
    }
  ],

  // Skills Categories
  skillCategories: [
    {
      title: "Machine Learning & AI",
      skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "OpenCV", "Transformers", "LangChain", "RAG Systems", "MLflow", "Weights & Biases"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "Rust", "Go", "Bash", "C++"]
    },
    {
      title: "Cloud & Infrastructure", 
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Apache Spark", "Redis", "PostgreSQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Linux", "FastAPI", "React", "Next.js", "Jupyter", "VS Code", "Apache Kafka", "Airflow"]
    },
    {
      title: "Data & Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Apache Spark", "Pandas", "Apache Kafka", "Snowflake"]
    }
  ],

  // SEO & Metadata
  seo: {
    title: "Nithin V | Senior AI Engineer",
    description: "Senior AI Engineer at TechCorp AI with 5+ years building production ML systems. Expertise in LLMs, MLOps, and autonomous vehicle perception systems.",
    keywords: [
      "AI Engineer", "Machine Learning", "Deep Learning", "MLOps", "LLM", 
      "Large Language Models", "RAG", "Computer Vision", "NLP",
      "Natural Language Processing", "TensorFlow", "PyTorch", "Python",
      "Autonomous Vehicles", "Production ML", "AI Systems Architecture",
      "Data Science", "Neural Networks", "Nithin V", "TechCorp AI", "DataFlow Systems"
    ],
    url: "https://nithinv.dev",
    image: "https://nithinv.dev/og-image.jpg",
    author: "Nithin V"
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ],

  // Footer Links
  footerLinks: {
    privacy: "/privacy",
    terms: "/terms"
  }
}

// Type exports for better TypeScript support
export type PortfolioConfig = typeof portfolioConfig
export type Experience = typeof portfolioConfig.experience[0]
export type Education = typeof portfolioConfig.education[0]
export type SkillCategory = typeof portfolioConfig.skillCategories[0]
export type Stat = typeof portfolioConfig.stats[0]