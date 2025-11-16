"use client"

import * as React from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SkillsVisualization } from "@/components/three/skills-visualization"
import { 
  Brain, 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  BarChart3, 
  Monitor,
  Zap,
  Target,
  Users
} from "lucide-react"

const skillCategories = [
  {
    title: "Machine Learning",
    icon: Brain,
    color: "from-blue-500 to-purple-600",
    skills: [
      { name: "PyTorch", level: 95 },
      { name: "TensorFlow", level: 90 },
      { name: "Scikit-learn", level: 92 },
      { name: "NumPy/Pandas", level: 94 },
      { name: "OpenCV", level: 88 }
    ]
  },
  {
    title: "LLMs & NLP",
    icon: Cpu,
    color: "from-purple-500 to-pink-600",
    skills: [
      { name: "Transformers", level: 94 },
      { name: "LangChain", level: 88 },
      { name: "RAG Systems", level: 91 },
      { name: "Fine-tuning", level: 89 },
      { name: "Prompt Engineering", level: 92 }
    ]
  },
  {
    title: "MLOps & Deployment",
    icon: Cloud,
    color: "from-green-500 to-blue-500",
    skills: [
      { name: "Docker", level: 89 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS SageMaker", level: 87 },
      { name: "MLflow", level: 86 },
      { name: "Apache Airflow", level: 83 }
    ]
  },
  {
    title: "Data Engineering",
    icon: Database,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Apache Spark", level: 86 },
      { name: "SQL/PostgreSQL", level: 90 },
      { name: "MongoDB", level: 83 },
      { name: "Redis", level: 85 },
      { name: "Apache Kafka", level: 82 }
    ]
  },
  {
    title: "Programming",
    icon: Code,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Python", level: 96 },
      { name: "JavaScript/TypeScript", level: 88 },
      { name: "Rust", level: 82 },
      { name: "Go", level: 79 },
      { name: "SQL", level: 90 }
    ]
  },
  {
    title: "AI Research",
    icon: Target,
    color: "from-indigo-500 to-purple-500",
    skills: [
      { name: "Computer Vision", level: 89 },
      { name: "Deep Learning", level: 93 },
      { name: "Neural Architecture Search", level: 85 },
      { name: "Multi-modal AI", level: 87 },
      { name: "Reinforcement Learning", level: 81 }
    ]
  }
]

const certifications = [

]

export function Skills() {
  const [activeView, setActiveView] = React.useState<"3d" | "grid">("3d")
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

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
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Comprehensive expertise across the full AI/ML stack, from research to production deployment.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <Button
              variant={activeView === "3d" ? "ai" : "outline"}
              onClick={() => setActiveView("3d")}
              className="flex items-center space-x-2"
            >
              <Monitor className="w-4 h-4" />
              <span>3D View</span>
            </Button>
            <Button
              variant={activeView === "grid" ? "ai" : "outline"}
              onClick={() => setActiveView("grid")}
              className="flex items-center space-x-2"
            >
              <BarChart3 className="w-4 h-4" />
              <span>Grid View</span>
            </Button>
          </div>
        </motion.div>

        {/* 3D Skills Visualization */}
        {activeView === "3d" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Card className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 border-2 border-primary/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Interactive Skills Network</h3>
                <p className="text-muted-foreground">
                  Hover over nodes to explore skills. Size indicates proficiency level.
                </p>
              </div>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <Canvas
                  camera={{ position: [8, 8, 8], fov: 60 }}
                  className="w-full h-full"
                >
                  <Environment preset="city" />
                  <ambientLight intensity={0.4} />
                  <pointLight position={[10, 10, 10]} intensity={0.8} />
                  <SkillsVisualization />
                  <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                  />
                </Canvas>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Grid Skills View */}
        {activeView === "grid" && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon
                return (
                  <motion.div key={categoryIndex} variants={item}>
                    <Card 
                      className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 ${
                        selectedCategory === category.title 
                          ? "border-primary shadow-lg" 
                          : "hover:border-primary/20"
                      }`}
                      onClick={() => setSelectedCategory(
                        selectedCategory === category.title ? null : category.title
                      )}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} shadow-md group-hover:shadow-lg transition-shadow`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <Zap className="w-5 h-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {category.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground w-8">
                                {skill.level}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}