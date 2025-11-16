"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AiTwinChat } from "@/components/demos/ai-twin-chat"
import { RagDocumentChat } from "@/components/demos/rag-document-chat"
import { 
  Brain, 
  Database, 
  Heart, 
  Eye, 
  Code, 
  BarChart3, 
  Sparkles,
  Play,
  ArrowRight,
  Cpu,
  FileSearch
} from "lucide-react"

interface Demo {
  id: string
  title: string
  description: string
  icon: React.ElementType
  gradient: string
  features: string[]
  status: "live" | "coming-soon"
  complexity: "beginner" | "intermediate" | "advanced"
}

const aiDemos: Demo[] = [
  {
    id: "ai-twin",
    title: "AI Twin Assistant",
    description: "Conversational AI trained on professional experience and expertise",
    icon: Brain,
    gradient: "from-blue-500 to-purple-600",
    features: ["Natural conversation", "Context awareness", "Professional knowledge", "Personality simulation"],
    status: "live",
    complexity: "advanced"
  },
  {
    id: "rag-chat",
    title: "RAG Document Analysis",
    description: "Upload documents and ask questions using Retrieval-Augmented Generation",
    icon: Database,
    gradient: "from-purple-500 to-pink-600",
    features: ["Document upload", "Semantic search", "Source attribution", "Multi-format support"],
    status: "live",
    complexity: "advanced"
  },
  {
    id: "sentiment",
    title: "Real-time Sentiment Analysis",
    description: "Analyze emotions and sentiment from text with confidence scores",
    icon: Heart,
    gradient: "from-green-500 to-blue-500",
    features: ["Real-time analysis", "Emotion detection", "Confidence scoring", "Visualization"],
    status: "coming-soon",
    complexity: "intermediate"
  },
  {
    id: "vision",
    title: "Computer Vision Recognition",
    description: "Object detection and image classification with bounding boxes",
    icon: Eye,
    gradient: "from-orange-500 to-red-500",
    features: ["Object detection", "Real-time processing", "Confidence scores", "Webcam support"],
    status: "coming-soon",
    complexity: "advanced"
  },
  {
    id: "code-gen",
    title: "Code Generation Assistant",
    description: "Generate Python/JavaScript code from natural language descriptions",
    icon: Code,
    gradient: "from-cyan-500 to-blue-500",
    features: ["Multi-language support", "Syntax highlighting", "Copy to clipboard", "Code explanation"],
    status: "coming-soon",
    complexity: "intermediate"
  },
  {
    id: "analytics",
    title: "ML Performance Dashboard",
    description: "Monitor model metrics, data drift, and system performance",
    icon: BarChart3,
    gradient: "from-indigo-500 to-purple-500",
    features: ["Real-time metrics", "Data drift detection", "Model versioning", "Performance alerts"],
    status: "coming-soon",
    complexity: "advanced"
  }
]

export function AiDemos() {
  const [selectedDemo, setSelectedDemo] = React.useState<string | null>(null)
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [isRagOpen, setIsRagOpen] = React.useState(false)

  const handleDemoClick = (demoId: string) => {
    switch (demoId) {
      case "ai-twin":
        setIsChatOpen(true)
        break
      case "rag-chat":
        setIsRagOpen(true)
        break
      default:
        setSelectedDemo(demoId)
        // For now, these will be placeholder interactions
        break
    }
  }

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
    <section id="demos" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Live AI Demonstrations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Interact with cutting-edge AI systems built from scratch. Each demo showcases
            production-ready machine learning capabilities with real-time processing.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {aiDemos.map((demo) => {
            const IconComponent = demo.icon
            return (
              <motion.div key={demo.id} variants={item}>
                <Card 
                  className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20 ${
                    demo.status === "live" ? "hover:scale-105" : "opacity-75"
                  }`}
                  onClick={() => demo.status === "live" && handleDemoClick(demo.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${demo.gradient} shadow-md group-hover:shadow-lg transition-shadow`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        {demo.status === "live" ? (
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-xs font-medium text-green-600 dark:text-green-400">LIVE</span>
                          </div>
                        ) : (
                          <span className="text-xs font-medium text-muted-foreground">COMING SOON</span>
                        )}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {demo.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {demo.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Complexity:</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          demo.complexity === "beginner" ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300" :
                          demo.complexity === "intermediate" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" :
                          "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                        }`}>
                          {demo.complexity}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2 text-muted-foreground">Key Features:</h4>
                        <ul className="space-y-1">
                          {demo.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="text-xs flex items-center space-x-2">
                              <div className="w-1 h-1 bg-primary rounded-full"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {demo.status === "live" ? (
                        <Button 
                          variant="ai" 
                          size="sm" 
                          className="w-full group-hover:shadow-md transition-shadow"
                        >
                          <Play className="w-4 h-4 mr-2" />
                          Try Demo
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full" disabled>
                          <Cpu className="w-4 h-4 mr-2" />
                          In Development
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

      </div>

      {/* Demo Modals */}
      <AiTwinChat open={isChatOpen} onOpenChange={setIsChatOpen} />
      <RagDocumentChat open={isRagOpen} onOpenChange={setIsRagOpen} />
    </section>
  )
}