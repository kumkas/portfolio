"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, File, Send, Bot, User, Loader2, FileText, Database, Search, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  sources?: string[]
}

interface Document {
  id: string
  name: string
  content: string
  chunks: string[]
  embedding?: number[]
}

interface RagDocumentChatProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const sampleDocuments: Document[] = [
  {
    id: "1",
    name: "Machine Learning Research Paper.pdf",
    content: "Recent advances in neural architecture search have shown promising results in automating the design of neural networks. Our research focuses on differentiable architecture search methods that can efficiently explore the space of possible architectures. We demonstrate improvements in both accuracy and computational efficiency across multiple datasets including CIFAR-10 and ImageNet.",
    chunks: [
      "Recent advances in neural architecture search have shown promising results in automating the design of neural networks.",
      "Our research focuses on differentiable architecture search methods that can efficiently explore the space of possible architectures.",
      "We demonstrate improvements in both accuracy and computational efficiency across multiple datasets including CIFAR-10 and ImageNet."
    ]
  },
  {
    id: "2", 
    name: "MLOps Best Practices Guide.pdf",
    content: "MLOps combines machine learning, DevOps, and data engineering to streamline the deployment and maintenance of ML systems. Key components include model versioning, automated testing, continuous integration, monitoring, and rollback strategies. Implementing proper MLOps practices can reduce deployment time from weeks to hours while ensuring model reliability and performance in production environments.",
    chunks: [
      "MLOps combines machine learning, DevOps, and data engineering to streamline the deployment and maintenance of ML systems.",
      "Key components include model versioning, automated testing, continuous integration, monitoring, and rollback strategies.",
      "Implementing proper MLOps practices can reduce deployment time from weeks to hours while ensuring model reliability and performance."
    ]
  },
  {
    id: "3",
    name: "LLM Fine-tuning Techniques.pdf", 
    content: "Large Language Model fine-tuning involves adapting pre-trained models to specific domains or tasks. Techniques include full fine-tuning, parameter-efficient methods like LoRA, and instruction tuning. The choice of method depends on available computational resources, data size, and task complexity. Proper evaluation metrics and validation strategies are crucial for successful fine-tuning outcomes.",
    chunks: [
      "Large Language Model fine-tuning involves adapting pre-trained models to specific domains or tasks.",
      "Techniques include full fine-tuning, parameter-efficient methods like LoRA, and instruction tuning.",
      "The choice of method depends on available computational resources, data size, and task complexity.",
      "Proper evaluation metrics and validation strategies are crucial for successful fine-tuning outcomes."
    ]
  }
]

export function RagDocumentChat({ open, onOpenChange }: RagDocumentChatProps) {
  const [documents, setDocuments] = React.useState<Document[]>(sampleDocuments)
  const [messages, setMessages] = React.useState<Message[]>([])
  const [inputValue, setInputValue] = React.useState("")
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [isUploading, setIsUploading] = React.useState(false)
  const [step, setStep] = React.useState<"upload" | "chat">("upload")
  const messagesEndRef = React.useRef<HTMLDivElement>(null)
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  React.useEffect(() => {
    if (open && documents.length > 0 && step === "upload") {
      // Auto-progress to chat if documents are available
      setTimeout(() => setStep("chat"), 1000)
    }
  }, [open, documents.length, step])

  React.useEffect(() => {
    if (step === "chat" && messages.length === 0) {
      // Add initial AI message
      setMessages([{
        id: "1",
        content: `Hello! I've processed ${documents.length} documents and created a searchable knowledge base. You can now ask me questions about the content, and I'll provide answers based on the information in your documents. What would you like to know?`,
        sender: "ai",
        timestamp: new Date()
      }])
    }
  }, [step, documents.length, messages.length])

  const simulateDocumentProcessing = async (files: FileList) => {
    setIsUploading(true)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const newDocs: Document[] = Array.from(files).map((file, index) => ({
      id: `upload-${Date.now()}-${index}`,
      name: file.name,
      content: `Processed content from ${file.name}. This is a simulation of document parsing and chunk extraction.`,
      chunks: [
        `Introduction section from ${file.name}`,
        `Main content section from ${file.name}`,
        `Conclusion section from ${file.name}`
      ]
    }))
    
    setDocuments(prev => [...prev, ...newDocs])
    setIsUploading(false)
    setStep("chat")
  }

  const findRelevantChunks = (query: string): string[] => {
    const allChunks = documents.flatMap(doc => 
      doc.chunks.map(chunk => ({ chunk, source: doc.name }))
    )
    
    // Simple keyword matching simulation
    const keywords = query.toLowerCase().split(' ')
    const relevantChunks = allChunks.filter(({ chunk }) =>
      keywords.some(keyword => chunk.toLowerCase().includes(keyword))
    ).slice(0, 3)
    
    return relevantChunks.map(({ chunk, source }) => `[${source}] ${chunk}`)
  }

  const generateRAGResponse = (query: string, chunks: string[]): string => {
    if (chunks.length === 0) {
      return "I couldn't find relevant information in the uploaded documents to answer your question. Could you try rephrasing or asking about a different topic?"
    }

    // Simulate different types of responses based on query
    if (query.toLowerCase().includes('mlops')) {
      return "Based on the documents, MLOps combines machine learning, DevOps, and data engineering to streamline deployment and maintenance of ML systems. Key components include model versioning, automated testing, continuous integration, and monitoring. This approach can significantly reduce deployment time while ensuring reliability."
    }
    
    if (query.toLowerCase().includes('neural') || query.toLowerCase().includes('architecture')) {
      return "According to the research paper, neural architecture search has shown promising results in automating neural network design. The focus is on differentiable architecture search methods that efficiently explore possible architectures, demonstrating improvements in both accuracy and computational efficiency."
    }
    
    if (query.toLowerCase().includes('fine-tuning') || query.toLowerCase().includes('llm')) {
      return "The documents explain that LLM fine-tuning involves adapting pre-trained models to specific domains or tasks. Techniques include full fine-tuning, parameter-efficient methods like LoRA, and instruction tuning. The choice depends on computational resources, data size, and task complexity."
    }
    
    return `Based on the relevant sections I found: ${chunks.join(' ')} This information suggests that ${query.toLowerCase().includes('how') ? 'the process involves' : 'the key points are'} the implementation of best practices and methodologies outlined in your documents.`
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
    setIsProcessing(true)

    // Simulate RAG processing
    await new Promise(resolve => setTimeout(resolve, 1500))

    const relevantChunks = findRelevantChunks(content)
    const aiResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: generateRAGResponse(content, relevantChunks),
      sender: "ai",
      timestamp: new Date(),
      sources: relevantChunks.length > 0 ? documents.map(doc => doc.name) : undefined
    }

    setMessages(prev => [...prev, aiResponse])
    setIsProcessing(false)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      simulateDocumentProcessing(files)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputValue)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[85vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogClose onClose={() => onOpenChange(false)} />
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
              <Database className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="flex items-center space-x-2">
                <span>RAG Document Chat</span>
                <Search className="w-4 h-4 text-blue-500" />
              </DialogTitle>
              <DialogDescription>
                Upload documents and ask questions. I'll search through the content to provide accurate answers.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          {step === "upload" ? (
            <div className="p-6">
              {/* Document Upload Interface */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Upload Area */}
                  <Card className="border-2 border-dashed border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="font-semibold mb-2">Upload Documents</h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          PDF, TXT, DOCX files supported
                        </p>
                        <Button
                          onClick={() => fileInputRef.current?.click()}
                          variant="outline"
                          disabled={isUploading}
                        >
                          {isUploading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            <>
                              <FileText className="w-4 h-4 mr-2" />
                              Choose Files
                            </>
                          )}
                        </Button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept=".pdf,.txt,.docx"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sample Documents */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Sample Documents</CardTitle>
                      <CardDescription>
                        Or try with pre-loaded AI/ML documents
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => setStep("chat")}
                        variant="ai"
                        className="w-full"
                      >
                        <Brain className="w-4 h-4 mr-2" />
                        Use Sample Documents
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Document List */}
                {documents.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Processed Documents ({documents.length})</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {documents.map((doc) => (
                          <div key={doc.id} className="flex items-center space-x-2 p-2 bg-muted rounded-md">
                            <File className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium">{doc.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-96">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[85%] ${
                        message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === "ai" 
                            ? "bg-gradient-to-r from-purple-500 to-pink-600" 
                            : "bg-gradient-to-r from-blue-500 to-cyan-500"
                        }`}>
                          {message.sender === "ai" ? (
                            <Bot className="w-4 h-4 text-white" />
                          ) : (
                            <User className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className="space-y-2">
                          <Card className={`p-3 ${
                            message.sender === "user" 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted"
                          }`}>
                            <p className="text-sm leading-relaxed">{message.content}</p>
                          </Card>
                          {message.sources && (
                            <div className="text-xs text-muted-foreground">
                              <span className="font-medium">Sources:</span> {message.sources.slice(0, 2).join(", ")}
                              {message.sources.length > 2 && ` +${message.sources.length - 2} more`}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {isProcessing && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <Card className="p-3 bg-muted">
                        <div className="flex items-center space-x-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-sm text-muted-foreground">Searching documents...</span>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="p-6 pt-0 border-t border-border">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask a question about your documents..."
                    className="flex-1 px-3 py-2 text-sm border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    disabled={isProcessing}
                  />
                  <Button
                    type="submit"
                    size="sm"
                    variant="ai"
                    disabled={isProcessing || !inputValue.trim()}
                    className="px-3"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="mt-2 flex space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleSendMessage("What are the key points about MLOps?")}
                    disabled={isProcessing}
                  >
                    What is MLOps?
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleSendMessage("Explain neural architecture search")}
                    disabled={isProcessing}
                  >
                    Neural Architecture Search
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}