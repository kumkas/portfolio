"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Loader2, Brain, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

interface AiTwinChatProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const aiPersonality = {
  name: "AI Alex",
  description: "An AI version of Alex trained on his professional experience and expertise",
  responses: {
    greeting: [
      "Hello! I'm AI Alex - a digital version of Nithin V trained on his professional experience. I can tell you about his AI/ML projects, technical expertise, and career journey. What would you like to know?",
      "Hi there! I'm an AI assistant representing Nithin V. Feel free to ask about his machine learning projects, technical skills, or professional experience!",
      "Welcome! I'm here to share Alex's background in AI engineering. I can discuss his expertise, projects, or answer questions about his career path."
    ],
    skills: [
      "Alex's expertise spans machine learning, deep learning, and MLOps. He specializes in LLM fine-tuning, RAG systems, computer vision, and production AI deployment using frameworks like PyTorch, TensorFlow, and LangChain.",
      "He's proficient in the full ML lifecycle - from data preprocessing and model development to deployment and monitoring. His tech stack includes Python, PyTorch, TensorFlow, Docker, Kubernetes, and cloud platforms like AWS and GCP.",
      "Alex's core competencies include neural network architectures, transformer models, MLOps pipelines, and real-time AI systems. He's built production systems handling millions of requests with high accuracy."
    ],
    projects: [
      "Alex's notable projects include: a multi-modal RAG system for document analysis at TechCorp AI, real-time sentiment analysis API processing 100K tweets/minute, and custom LLM fine-tuning achieving 23% performance improvements.",
      "He's deployed production AI systems including recommendation engines improving engagement by 35%, fraud detection systems, and computer vision APIs. Each project demonstrates end-to-end ML engineering expertise.",
      "His project portfolio showcases modern AI: autonomous vehicle perception systems, transformer-based models, neural architecture search research, and MLOps infrastructure scaling to enterprise requirements."
    ],
    experience: [
      "Alex currently works as Senior AI Engineer at TechCorp AI, leading autonomous vehicle perception systems. Previously at DataFlow Systems building recommendation engines and fraud detection. Started at InnovateAI Labs doing computer vision research.",
      "His career spans 5+ years from AI research to production engineering and technical leadership. He's led teams of 8+ engineers, published research papers, and shipped AI features serving millions of users.",
      "Alex's background shows progression from research intern to senior engineer, with experience across startups and enterprises. He's passionate about turning research breakthroughs into real-world impact."
    ],
    default: [
      "That's a great question! While I focus on Alex's AI/ML background, I'd be happy to discuss his technical expertise, project experience, or career journey. What specific area interests you?",
      "I'd love to help! I'm designed to discuss Alex's AI/ML capabilities, technical projects, and professional experience. Could you rephrase your question about his background?",
      "Thanks for asking! My knowledge centers around Alex's AI/ML expertise and professional experience. Feel free to ask about his specific technologies, projects, or career achievements."
    ]
  }
}

const predefinedQuestions = [
  "What's Alex's experience with machine learning?",
  "Tell me about Alex's AI projects",
  "What technologies does Alex use?",
  "How does Alex approach MLOps?",
  "What's Alex's strongest technical skill?",
  "Can you describe Alex's work experience?"
]

export function AiTwinChat({ open, onOpenChange }: AiTwinChatProps) {
  const [messages, setMessages] = React.useState<Message[]>([])
  const [inputValue, setInputValue] = React.useState("")
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    if (open && messages.length === 0) {
      // Add initial greeting message
      const greeting = aiPersonality.responses.greeting[
        Math.floor(Math.random() * aiPersonality.responses.greeting.length)
      ]
      setMessages([{
        id: "1",
        content: greeting,
        sender: "ai",
        timestamp: new Date()
      }])
    }
  }, [open, messages.length])

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateAiResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    
    if (message.includes("skill") || message.includes("technology") || message.includes("tech")) {
      return aiPersonality.responses.skills[Math.floor(Math.random() * aiPersonality.responses.skills.length)]
    }
    if (message.includes("project") || message.includes("work") || message.includes("build")) {
      return aiPersonality.responses.projects[Math.floor(Math.random() * aiPersonality.responses.projects.length)]
    }
    if (message.includes("experience") || message.includes("career") || message.includes("background")) {
      return aiPersonality.responses.experience[Math.floor(Math.random() * aiPersonality.responses.experience.length)]
    }
    if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
      return aiPersonality.responses.greeting[Math.floor(Math.random() * aiPersonality.responses.greeting.length)]
    }
    
    return aiPersonality.responses.default[Math.floor(Math.random() * aiPersonality.responses.default.length)]
  }

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content,
      sender: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: generateAiResponse(content),
      sender: "ai",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, aiResponse])
    setIsTyping(false)
  }

  const handlePredefinedQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogClose onClose={() => onOpenChange(false)} />
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="flex items-center space-x-2">
                <span>{aiPersonality.name}</span>
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </DialogTitle>
              <p className="text-xs text-muted-foreground mt-1">
                {aiPersonality.description}
              </p>
            </div>
          </div>
        </DialogHeader>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 pt-4 space-y-4 max-h-96">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                }`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === "ai" 
                      ? "bg-gradient-to-r from-blue-500 to-purple-600" 
                      : "bg-gradient-to-r from-green-500 to-blue-500"
                  }`}>
                    {message.sender === "ai" ? (
                      <Bot className="w-4 h-4 text-white" />
                    ) : (
                      <User className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <Card className={`p-3 ${
                    message.sender === "user" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted"
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <Card className="p-3 bg-muted">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">AI is thinking...</span>
                  </div>
                </Card>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Predefined Questions */}
        {messages.length <= 1 && (
          <div className="px-6 py-2">
            <p className="text-xs text-muted-foreground mb-2">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {predefinedQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handlePredefinedQuestion(question)}
                  className="text-xs"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="p-6 pt-0">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything about AI/ML experience..."
              className="flex-1 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              disabled={isTyping}
            />
            <Button
              type="submit"
              size="sm"
              variant="ai"
              disabled={isTyping || !inputValue.trim()}
              className="px-3"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}