"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { 
  Calendar, 
  MapPin, 
  Building,
  Download,
  ExternalLink
} from "lucide-react"

interface Experience {
  title: string
  company: string
  companyLogo?: string
  location: string
  duration: string
  current: boolean
  description: string
  achievements: string[]
  skills: string[]
}

const experiences: Experience[] = [
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
  return (
    <section id="experience" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Experience</h2>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <Download className="w-4 h-4" />
              Download CV
            </button>
          </div>

          {/* Experience Timeline - LinkedIn Style */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex gap-4 pb-6 border-b border-border last:border-b-0">
                
                {/* Company Logo Placeholder */}
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Building className="w-6 h-6 text-muted-foreground" />
                </div>
                
                {/* Experience Details */}
                <div className="flex-1 min-w-0">
                  
                  {/* Job Title & Company */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.title}</h3>
                      <p className="text-base font-medium text-muted-foreground">{exp.company}</p>
                    </div>
                    {exp.current && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                        Current
                      </Badge>
                    )}
                  </div>
                  
                  {/* Duration & Location */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Key Achievements */}
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-sm">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-4">
              {education.slice(0, 2).map((edu, index) => (
                <Card key={index} className="p-6 border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{edu.degree}</h3>
                      <p className="text-base font-medium text-muted-foreground mb-2">{edu.school}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span>{edu.duration}</span>
                        <span>•</span>
                        <span>{edu.location}</span>
                        <span>•</span>
                        <span>GPA: {edu.gpa}</span>
                      </div>
                      <Badge variant="outline" className="mb-2">{edu.specialization}</Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}