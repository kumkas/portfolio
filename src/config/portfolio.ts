export const portfolioConfig = {
  // Personal Information
  personal: {
    name: "Nithin V",
    initials: "NV",
    title: "Senior AI Developer",
    company: "Ortho Diagnostics",
    location: "",
    email: "nkumarv18@gmail..com",
    phone: "+1 (555) 123-4567",
    website: "https://nithinv.dev",
    
    // Professional Summary
    summary: "Senior AI Developer at Ortho Diagnostics with 5+ years of experience developing machine learning solutions for healthcare applications. Currently leading AI initiatives focused on claims processing automation and member services optimization. Previously worked at DataFlow Systems building scalable ML infrastructure and recommendation systems.",
    
    // Availability Status
    availableForWork: true,
    availabilityText: "Open to work",
  },

  // Social Links
  social: {
    github: "https://github.com/nithinv",
    linkedin: "https://linkedin.com/in/nithinv",
    twitter: "https://twitter.com/nithinv_ai",
    email: "mailto:nkumarv18@gmail.com",
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
      title: "Senior AI Developer",
      company: "Ortho Diagnostics",
      location: "",
      duration: "Dec 2023 - Present",
      current: true,
      description: "Leading AI initiatives in healthcare technology, focusing on machine learning solutions for claims processing and member services.",
      achievements: [
        "Led cross-functional team of engineers building real-time ML pipelines for healthcare analytics",
        "Developed and deployed machine learning models for claims processing and fraud detection", 
        "Built data infrastructure to support AI initiatives across multiple business units",
        "Collaborated with product teams to integrate AI solutions into customer-facing applications"
      ],
      skills: ["PyTorch", "Kubernetes", "AWS", "TensorFlow", "MLflow", "FastAPI"]
    },
    {
      title: "AI Engineer", 
      company: "Target",
      location: "New Jersey",
      duration: "May 2022 - Nov 2023",
      current: false,
      description: "Developed machine learning solutions for e-commerce and fintech applications with focus on scalable data pipelines.",
      achievements: [
        "Built recommendation systems for e-commerce platform serving millions of users",
        "Designed and implemented fraud detection models for payment processing", 
        "Mentored junior engineers and established ML development workflows",
        "Led migration of analytics workloads to cloud infrastructure"
      ],
      skills: ["Scikit-learn", "Apache Spark", "Docker", "PostgreSQL", "Redis"]
    },
    {
      title: "Data scientist",
      company: "Lowes", 
      location: "New York",
      duration: "Sep 2014 - Dec 2015",
      current: false,
      description: "Conducted research in computer vision and natural language processing with applications to autonomous systems.",
      achievements: [
        "Researched deep learning approaches for video analysis and object detection",
        "Collaborated on computer vision models for autonomous vehicle perception",
        "Contributed to open-source ML frameworks and published technical documentation",
        "Presented research findings at industry conferences and workshops"
      ],
      skills: ["TensorFlow", "OpenCV", "CUDA", "Python", "Research"]
    }
  ],

  // Education
  education: [
    {
      degree: "Master of Science",
      school: "UNT",
      location: "Texas", 
      duration: "2014 - 2016",
      specialization: "Information Technology",
      thesis: "Neural Architecture Search for Efficient Deep Learning Models",
      achievements: [
        "Graduate Research Assistant in AI Lab",
        "Teaching Assistant for CS229 (Machine Learning)",
        "Recipient of Stanford AI Fellowship",
        "Published 3 conference papers"
      ]
    },
    {
      degree: "Bachelor of Technology",
      school: "JNTU",
      location: "HYD, IND",
      duration: "2009 - 2013", 
      specialization: "Electronics and Communication",

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
    title: "Nithin V | Senior AI Developer",
    description: "Senior AI Developer at Ortho Diagnostics with 5+ years building production ML systems. Expertise in LLMs, MLOps, and autonomous vehicle perception systems.",
    keywords: [
      "AI Developer", "Machine Learning", "Deep Learning", "MLOps", "LLM", 
      "Large Language Models", "RAG", "Computer Vision", "NLP",
      "Natural Language Processing", "TensorFlow", "PyTorch", "Python",
      "Autonomous Vehicles", "Production ML", "AI Systems Architecture",
      "Data Science", "Neural Networks", "Nithin V", "Ortho Diagnostics", "DataFlow Systems"
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