"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  BarChart3
} from "lucide-react"

const skillCategories = [
  {
    title: "Machine Learning & AI",
    icon: Cpu,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas", "OpenCV", "Transformers", "LangChain", "RAG Systems", "MLflow", "Weights & Biases"]
  },
  {
    title: "Programming Languages", 
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Rust", "Go", "Bash", "C++"]
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Apache Spark", "Redis", "PostgreSQL"]
  },
  {
    title: "Tools & Platforms",
    icon: BarChart3,
    skills: ["Git", "Linux", "FastAPI", "React", "Next.js", "Jupyter", "VS Code", "Apache Kafka", "Airflow"]
  },
  {
    title: "Data & Databases",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Apache Spark", "Pandas", "Apache Kafka", "Snowflake"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground">
              Technologies I use to build production ML systems and scalable applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="p-6 border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-muted rounded-lg">
                      <IconComponent className="w-5 h-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}