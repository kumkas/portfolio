"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter,
  Send,
  CheckCircle,
  Calendar,
  MessageSquare,
  Coffee,
  Briefcase
} from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "alex.chen@email.com",
    href: "mailto:alex.chen@email.com",
    description: "Best for detailed discussions",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567", 
    description: "Available Mon-Fri, 9AM-5PM PST",
    color: "from-green-500 to-blue-500"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "San Francisco, CA",
    href: "#",
    description: "Open to remote opportunities",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    value: "Book a Call",
    href: "#",
    description: "30-minute consultation",
    color: "from-purple-500 to-pink-600"
  }
]

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/ai-engineer",
    color: "#0077b5"
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/ai-engineer",
    color: "#333"
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/ai_engineer",
    color: "#1da1f2"
  }
]

const collaborationTypes = [
  {
    icon: Briefcase,
    title: "Opportunities",
    description: "Senior AI/ML Engineer roles at innovative companies",
    color: "from-blue-500 to-purple-600"
  },
  {
    icon: Coffee,
    title: "Consulting Projects",
    description: "AI strategy, architecture design, and implementation",
    color: "from-green-500 to-blue-500"
  },
  {
    icon: MessageSquare,
    title: "Speaking Engagements",
    description: "Technical talks on AI/ML, conferences, and workshops", 
    color: "from-orange-500 to-red-500"
  }
]

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    company: "",
    message: "",
    type: "general"
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "", type: "general" })
    }, 3000)
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
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
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
            <span className="gradient-text">Let's Connect</span>
          </h2>
  
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <motion.div key={index} variants={item}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} shadow-md group-hover:shadow-lg transition-shadow`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold group-hover:text-primary transition-colors">
                            {method.title}
                          </h4>
                          <a 
                            href={method.href}
                            className="text-primary font-medium hover:underline"
                          >
                            {method.value}
                          </a>
                          <p className="text-sm text-muted-foreground mt-1">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* <Card className="p-8 border-2 border-primary/10">
              <CardHeader className="px-0 pt-0 pb-6">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </CardHeader>

              <CardContent className="px-0 pb-0">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="type" className="block text-sm font-medium mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="type"
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="job">Job Opportunity</option>
                        <option value="consulting">Consulting Project</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="collaboration">Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 resize-none"
                        placeholder="Tell me about your project, opportunity, or how I can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="ai"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 mr-2"
                          >
                            <Send className="w-4 h-4" />
                          </motion.div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card> */}
          </motion.div>
        </div>

        {/* Collaboration Types */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">How We Can Work Together</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm open to various types of collaborations and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {collaborationTypes.map((collab, index) => {
              const IconComponent = collab.icon
              return (
                <motion.div key={index} variants={item}>
                  <Card className="text-center p-6 h-full hover:shadow-lg transition-all duration-300 group border-2 hover:border-primary/20">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${collab.color} shadow-md group-hover:shadow-lg transition-shadow`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {collab.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {collab.description}
                    </p>
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