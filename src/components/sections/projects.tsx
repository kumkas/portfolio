"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ExternalLink, 
  Github, 
  Play, 
  Database, 
  Brain, 
  Eye, 
  BarChart3,
  Cpu,
  MessageSquare,
  Image as ImageIcon,
  Code2,
  Users,
  ArrowRight
} from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  icon: React.ElementType
  gradient: string
  tech: string[]
  metrics: { label: string; value: string }[]
  links: { demo?: string; github?: string; paper?: string }
  status: "deployed" | "beta" | "research"
  category: "llm" | "cv" | "mlops" | "nlp"
}

const projects: Project[] = [
  {
    id: "multimodal-rag",
    title: "Multi-Modal RAG System",
    description: "Production RAG system processing text, images, and documents with vector search",
    longDescription: "Built an enterprise RAG system handling multiple data modalities with semantic search, chunk optimization, and real-time query processing. Deployed on AWS with auto-scaling.",
    icon: Database,
    gradient: "from-purple-500 to-pink-600",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI", "Docker", "AWS"],
    metrics: [
      { label: "Documents Processed", value: "10M+" },
      { label: "Query Response Time", value: "<200ms" },
      { label: "Search Accuracy", value: "94.2%" }
    ],
    links: {
      demo: "#",
      github: "#",
    },
    status: "deployed",
    category: "llm"
  },
  {
    id: "llm-finetuning",
    title: "Domain-Specific LLM Fine-tuning",
    description: "Fine-tuned LLaMA-2 for medical diagnosis with custom LoRA adapters",
    longDescription: "Implemented parameter-efficient fine-tuning using LoRA for medical domain adaptation. Achieved SOTA performance on medical QA benchmarks while reducing compute requirements by 70%.",
    icon: Brain,
    gradient: "from-blue-500 to-purple-600",
    tech: ["PyTorch", "Transformers", "LoRA", "Weights & Biases", "CUDA"],
    metrics: [
      { label: "Performance Improvement", value: "23%" },
      { label: "Compute Reduction", value: "70%" },
      { label: "Training Time", value: "8 hours" }
    ],
    links: {
      github: "#",
      paper: "#"
    },
    status: "research",
    category: "llm"
  },
  {
    id: "computer-vision",
    title: "Real-Time Object Detection API",
    description: "YOLO-based detection system processing 1000+ images per second",
    longDescription: "Deployed production computer vision API using optimized YOLOv8 models with TensorRT acceleration. Serves real-time object detection for autonomous vehicle applications.",
    icon: Eye,
    gradient: "from-green-500 to-blue-500",
    tech: ["YOLOv8", "TensorRT", "OpenCV", "FastAPI", "Redis", "Kubernetes"],
    metrics: [
      { label: "Images/Second", value: "1,000+" },
      { label: "Detection Accuracy", value: "96.8%" },
      { label: "Latency", value: "12ms" }
    ],
    links: {
      demo: "#",
      github: "#"
    },
    status: "deployed",
    category: "cv"
  },
  {
    id: "mlops-platform",
    title: "MLOps Automation Platform",
    description: "End-to-end ML pipeline with automated training, testing, and deployment",
    longDescription: "Built comprehensive MLOps platform handling model versioning, A/B testing, monitoring, and automated retraining. Reduced deployment time from weeks to hours.",
    icon: BarChart3,
    gradient: "from-orange-500 to-red-500",
    tech: ["MLflow", "Kubeflow", "Apache Airflow", "Prometheus", "Grafana"],
    metrics: [
      { label: "Deployment Time", value: "2 hours" },
      { label: "Model Versions", value: "500+" },
      { label: "Success Rate", value: "99.1%" }
    ],
    links: {
      demo: "#",
      github: "#"
    },
    status: "deployed",
    category: "mlops"
  },
  {
    id: "sentiment-analysis",
    title: "Distributed Sentiment Analysis",
    description: "Real-time sentiment processing for social media at 100K tweets/minute",
    longDescription: "Scalable sentiment analysis system processing social media streams with custom BERT models. Deployed on Kafka + Spark cluster with real-time dashboards.",
    icon: MessageSquare,
    gradient: "from-cyan-500 to-blue-500",
    tech: ["BERT", "Apache Kafka", "Spark Streaming", "PostgreSQL", "React"],
    metrics: [
      { label: "Tweets/Minute", value: "100K" },
      { label: "Processing Latency", value: "150ms" },
      { label: "F1 Score", value: "0.92" }
    ],
    links: {
      demo: "#",
      github: "#"
    },
    status: "deployed",
    category: "nlp"
  },
  {
    id: "neural-search",
    title: "Neural Code Search Engine",
    description: "Semantic code search using pre-trained transformers and vector databases",
    longDescription: "Built intelligent code search system using CodeBERT embeddings and semantic similarity. Enables natural language queries over large codebases with context awareness.",
    icon: Code2,
    gradient: "from-indigo-500 to-purple-500",
    tech: ["CodeBERT", "Elasticsearch", "React", "Python", "Docker"],
    metrics: [
      { label: "Code Files Indexed", value: "2M+" },
      { label: "Search Accuracy", value: "89.3%" },
      { label: "Query Time", value: "45ms" }
    ],
    links: {
      demo: "#",
      github: "#"
    },
    status: "beta",
    category: "nlp"
  }
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "llm", label: "LLM & RAG" },
  { id: "cv", label: "Computer Vision" },
  { id: "mlops", label: "MLOps" },
  { id: "nlp", label: "NLP" }
]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [selectedProject, setSelectedProject] = React.useState<string | null>(null)

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "deployed": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
      case "beta": return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
      case "research": return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 to-background">
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Production AI systems serving millions of users. Each project demonstrates 
            end-to-end ML engineering from research to deployment.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "ai" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {filteredProjects.map((project) => {
            const IconComponent = project.icon
            return (
              <motion.div key={project.id} variants={item}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20 hover:scale-105">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-md group-hover:shadow-lg transition-shadow`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={getStatusColor(project.status)}
                      >
                        {project.status.toUpperCase()}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed mb-4">
                      {project.description}
                    </CardDescription>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Metrics */}
                    <div className="space-y-3 mb-6">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground">{metric.label}:</span>
                          <span className="font-semibold text-primary">{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-2">
                      {project.links.demo && (
                        <Button size="sm" variant="ai" className="flex-1">
                          <Play className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      {project.links.github && (
                        <Button size="sm" variant="outline" className="flex-1">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.links.paper && (
                        <Button size="sm" variant="outline" className="flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Paper
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/20 border-2 border-primary/10">
            <div className="max-w-2xl mx-auto">
              <Users className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Interested in collaborating on cutting-edge AI projects? I'm always excited 
                to work on challenging problems that push the boundaries of what's possible.
              </p>
              <Button variant="ai" size="lg">
                Start a Conversation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}