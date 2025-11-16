"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { AiTwinChat } from "@/components/demos/ai-twin-chat"
import { RagDocumentChat } from "@/components/demos/rag-document-chat"
import { Brain, ArrowDown, Sparkles } from "lucide-react"


export function Hero() {
  const [isVisible, setIsVisible] = React.useState(true)
  const [isChatOpen, setIsChatOpen] = React.useState(false)
  const [isRagOpen, setIsRagOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight * 0.5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById("about")
    nextSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/20">
      {/* Simple Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 via-background to-blue-50/10 dark:to-blue-950/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Icon Group */}
          <div className="flex justify-center space-x-4 mb-8">
           
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">Alex Chen</span>
          </h1>

          {/* Professional Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6 sm:mb-8">
            Senior AI Engineer
          </h2>

          {/* Key Value Proposition */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
              <div className="flex items-center bg-primary/10 text-primary px-3 sm:px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 mr-2" />
                5+ Years Experience
              </div>
              {/* <div className="flex items-center bg-green-500/10 text-green-600 dark:text-green-400 px-3 sm:px-4 py-2 rounded-full">
                <Brain className="w-4 h-4 mr-2" />
                50+ ML Models Deployed
              </div> */}
              {/* <div className="flex items-center bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 sm:px-4 py-2 rounded-full">
                <ArrowDown className="w-4 h-4 mr-2 rotate-45" />
                8+ Team Members Led
              </div> */}
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-8 sm:mb-12 max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground mb-4 leading-relaxed px-4 sm:px-0 font-medium">
              I build production-scale AI systems that drive real business outcomes
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-4 sm:px-0">
              Currently <strong className="text-primary">Senior AI Engineer at TechCorp AI</strong>, where I lead the development of 
              autonomous vehicle perception systems processing 10M+ miles of real-world driving data. 
              Previously scaled ML infrastructure at <strong className="text-primary">DataFlow Systems</strong>, 
              reducing model inference latency by 70% and increasing deployment frequency by 400%.
            </p>
          </div>

          {/* Core Expertise */}
          <div className="mb-8 sm:mb-12 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">
              <div className="text-center p-4 rounded-lg glass border border-primary/20">
                <div className="font-semibold text-primary mb-2">LLM Engineering</div>
                <div className="text-muted-foreground">RAG • Fine-tuning • Deployment</div>
              </div>
              <div className="text-center p-4 rounded-lg glass border border-green-500/20">
                <div className="font-semibold text-green-600 dark:text-green-400 mb-2">Computer Vision</div>
                <div className="text-muted-foreground">Object Detection • Segmentation</div>
              </div>
              <div className="text-center p-4 rounded-lg glass border border-blue-500/20 sm:col-span-2 lg:col-span-1">
                <div className="font-semibold text-blue-600 dark:text-blue-400 mb-2">MLOps at Scale</div>
                <div className="text-muted-foreground">Kubernetes • AutoML • Monitoring</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0">
            <Button
              size="lg"
              variant="ai"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                contactSection?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Let's Talk - I'm Available
            </Button>
   
          </div>
        </div>
      </div>

  

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

      {/* AI Twin Chat Modal */}
      <AiTwinChat open={isChatOpen} onOpenChange={setIsChatOpen} />
      
      {/* RAG Document Chat Modal */}
      <RagDocumentChat open={isRagOpen} onOpenChange={setIsRagOpen} />
    </section>
  )
}