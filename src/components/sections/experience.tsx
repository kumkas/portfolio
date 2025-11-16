"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  MapPin, 
  TrendingUp, 
  Users, 
  Award, 
  Briefcase,
  Building,
  ExternalLink,
  Download
} from "lucide-react"

interface Experience {
  title: string
  company: string
  location: string
  duration: string
  type: "full-time" | "contract" | "internship"
  description: string
  achievements: string[]
  technologies: string[]
  metrics?: string[]
}

const experiences: Experience[] = [
  {
    title: "Senior AI Engineer",
    company: "TechCorp AI",
    location: "San Francisco, CA",
    duration: "Jan 2022 - Present",
    type: "full-time",
    description: "Leading the development of large-scale AI systems and ML infrastructure for autonomous vehicle perception and decision-making.",
    achievements: [
      "Architected and deployed production LLM systems serving 10M+ daily requests",
      "Led cross-functional team of 8 engineers building real-time ML pipelines",
      "Reduced model inference latency by 80% through optimization and caching",
      "Implemented MLOps practices reducing deployment time from weeks to hours",
      "Published 3 papers on efficient neural architecture search"
    ],
    technologies: ["PyTorch", "Kubernetes", "AWS", "TensorFlow", "MLflow", "FastAPI"],
    metrics: ["$2M+ cost savings", "99.7% uptime", "80% latency reduction"]
  },
  {
    title: "Machine Learning Engineer",
    company: "DataFlow Systems",
    location: "Seattle, WA", 
    duration: "Mar 2020 - Dec 2021",
    type: "full-time",
    description: "Built and maintained ML models for real-time recommendation systems and fraud detection across multiple product lines.",
    achievements: [
      "Developed recommendation engine improving user engagement by 35%",
      "Built fraud detection system reducing false positives by 60%",
      "Implemented A/B testing framework for ML model evaluation",
      "Mentored 4 junior engineers and established ML best practices",
      "Migrated legacy systems to cloud-native microservices architecture"
    ],
    technologies: ["Scikit-learn", "Apache Spark", "Docker", "PostgreSQL", "Redis"],
    metrics: ["35% engagement boost", "60% false positive reduction", "$1.5M fraud prevented"]
  },
  {
    title: "AI Research Engineer",
    company: "InnovateAI Labs",
    location: "Boston, MA",
    duration: "Jun 2019 - Feb 2020",
    type: "full-time", 
    description: "Conducted cutting-edge research in computer vision and natural language processing, with focus on multi-modal learning.",
    achievements: [
      "Developed novel multi-modal fusion architecture for video understanding",
      "Published 2 first-author papers in top-tier AI conferences (ICCV, NeurIPS)",
      "Collaborated with Stanford and MIT researchers on joint projects",
      "Open-sourced research code with 1000+ GitHub stars",
      "Won 'Best Paper Award' at Computer Vision Workshop"
    ],
    technologies: ["TensorFlow", "OpenCV", "CUDA", "Python", "Jupyter"],
    metrics: ["2 top-tier publications", "1000+ GitHub stars", "Best Paper Award"]
  },
  {
    title: "Data Science Intern",
    company: "Global Analytics Inc",
    location: "New York, NY",
    duration: "May 2018 - Aug 2018",
    type: "internship",
    description: "Applied machine learning to financial data analysis and algorithmic trading strategy development.",
    achievements: [
      "Built predictive models for stock price movement with 72% accuracy",
      "Developed automated trading strategies generating 15% returns",
      "Created data pipeline processing 100GB+ daily market data",
      "Presented findings to C-level executives",
      "Received full-time offer upon internship completion"
    ],
    technologies: ["Python", "Pandas", "NumPy", "SQL", "Matplotlib"],
    metrics: ["72% prediction accuracy", "15% trading returns", "100GB+ daily processing"]
  }
]

const education = [
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
]

export function Experience() {
  const [selectedExperience, setSelectedExperience] = React.useState<number>(0)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "full-time": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      case "contract": return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
      case "internship": return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
    }
  }

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            5+ years building production AI systems across different industries and scales,
            from research to enterprise deployment.
          </p>
          <Button variant="outline" className="mb-8">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        {/* Experience Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Timeline Navigation */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-4 lg:sticky lg:top-20">
              {experiences.map((exp, index) => (
                <motion.div key={index} variants={item}>
                  <Card 
                    className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
                      selectedExperience === index 
                        ? "border-primary shadow-lg bg-primary/5" 
                        : "hover:border-primary/20 hover:shadow-md"
                    }`}
                    onClick={() => setSelectedExperience(index)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 shadow-md flex-shrink-0">
                        <Briefcase className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-sm truncate">{exp.title}</h4>
                          <Badge variant="secondary" className={getTypeColor(exp.type)}>
                            {exp.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-primary font-medium">{exp.company}</p>
                        <div className="flex items-center text-xs text-muted-foreground mt-1">
                          <Calendar className="w-3 h-3 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Details */}
          <motion.div
            key={selectedExperience}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 h-full">
              <CardHeader className="pb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 shadow-md">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className={getTypeColor(experiences[selectedExperience].type)}>
                    {experiences[selectedExperience].type.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-2xl mb-2">
                  {experiences[selectedExperience].title}
                </CardTitle>
                <div className="text-lg space-y-2">
                  <div className="flex items-center text-primary font-medium">
                    <Building className="w-4 h-4 mr-2" />
                    {experiences[selectedExperience].company}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experiences[selectedExperience].location} • {experiences[selectedExperience].duration}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {experiences[selectedExperience].description}
                </p>

                {/* Key Metrics */}
                {experiences[selectedExperience].metrics && (
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Key Impact
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {experiences[selectedExperience].metrics!.map((metric, index) => (
                        <div key={index} className="text-center p-3 bg-primary/5 rounded-lg">
                          <div className="text-lg font-bold text-primary">{metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {experiences[selectedExperience].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedExperience].technologies.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Education</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strong academic foundation in computer science and artificial intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-md group-hover:shadow-lg transition-shadow">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary">{edu.gpa}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-1">
                      <div className="flex items-center text-primary font-medium">
                        <Building className="w-4 h-4 mr-2" />
                        {edu.school}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location} • {edu.duration}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {edu.specialization}
                        </Badge>
                        <p className="text-sm text-muted-foreground">
                          <strong>Thesis:</strong> {edu.thesis}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium mb-2">Notable Achievements</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-xs">
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}