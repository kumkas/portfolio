"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  Code, 
  Database, 
  Cpu, 
  Cloud, 
  Target,
  Award,
  Users,
  TrendingUp,
  Zap
} from "lucide-react"

const skills = {
  "Machine Learning": {
    icon: Brain,
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "Hugging Face", "MLflow"],
    color: "from-blue-500 to-purple-600"
  },
  "LLMs & NLP": {
    icon: Cpu,
    items: ["GPT-4", "Claude", "LLaMA", "BERT", "Fine-tuning", "RAG", "LangChain", "Prompt Engineering"],
    color: "from-purple-500 to-pink-600"
  },
  "MLOps & Deployment": {
    icon: Cloud,
    items: ["Docker", "Kubernetes", "AWS SageMaker", "Azure ML", "GCP Vertex AI", "FastAPI", "TensorFlow Serving"],
    color: "from-green-500 to-blue-500"
  },
  "Data Engineering": {
    icon: Database,
    items: ["Apache Spark", "Pandas", "SQL", "MongoDB", "Redis", "Apache Kafka", "Airflow"],
    color: "from-orange-500 to-red-500"
  },
  "Programming": {
    icon: Code,
    items: ["Python", "JavaScript/TypeScript", "Rust", "Go", "SQL", "Bash", "Git"],
    color: "from-cyan-500 to-blue-500"
  },
  "AI Research": {
    icon: Target,
    items: ["Computer Vision", "Deep Learning", "Neural Architecture Search", "Multi-modal AI", "Reinforcement Learning"],
    color: "from-indigo-500 to-purple-500"
  }
}

const achievements = [
  {
    icon: Award,
    title: "Business Impact Delivered",
    description: "Led AI initiatives generating $50M+ in cost savings and revenue growth for autonomous vehicle safety systems",

  },
  {
    icon: TrendingUp,
    title: "System Performance Excellence",
    description: "Architected ML infrastructure achieving 99.7% uptime while reducing inference latency by 70% at scale",
    metric: "70% Faster"
  },
  {
    icon: Users,
    title: "Technical Leadership & Mentorship",
    description: "Built and led 3 cross-functional AI teams, mentoring 12+ engineers into senior roles",
    metric: "12+ Mentored"
  },
  {
    icon: Zap,
    title: "Industry Recognition & Innovation",
    description: "5 pending patents in autonomous vehicle perception, keynote speaker at AI conferences",
    metric: "5+ Patents"
  }
]

export function About() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 bg-background">
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
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-foreground mb-6 leading-relaxed font-medium">
              I transform breakthrough AI research into production systems that create real business value
            </p>
            <div className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-4">
              <p>
                Currently at <strong className="text-primary">BCBS</strong>, I lead the development of autonomous vehicle perception 
                systems that process over <strong className="text-foreground">10 million miles</strong> of real-world driving data daily. 
                My team's computer vision models achieve <strong className="text-foreground">99.7% accuracy</strong> in object detection, 
                directly enabling safer autonomous navigation.
              </p>
              <p>
                Previously at <strong className="text-primary">DataFlow Systems</strong>, I architected and deployed the MLOps infrastructure 
                that reduced model deployment time from <strong className="text-foreground">weeks to hours</strong> and improved system 
                reliability by <strong className="text-foreground">400%</strong>. This transformation enabled the data science team to 
                iterate faster and deliver business-critical insights to Fortune 500 clients.
              </p>
              <p>
                I specialize in <strong className="text-foreground">Large Language Models</strong>, <strong className="text-foreground">Computer Vision</strong>, 
                and <strong className="text-foreground">MLOps at Scale</strong> - with a proven track record of leading cross-functional teams 
                and mentoring junior engineers into senior contributors.
              </p>
            </div>
      
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Technical Expertise</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full-stack AI/ML capabilities across the entire machine learning lifecycle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, data]) => {
              const IconComponent = data.icon
              return (
                <motion.div key={category} variants={item}>
                  <Card className="h-full border border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-3 rounded-lg bg-muted">
                          <IconComponent className="w-6 h-6 text-foreground" />
                        </div>
                        <h4 className="text-lg font-semibold ml-3">
                          {category}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {data.items.map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>


      </div>
    </section>
  )
}