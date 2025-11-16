"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  Linkedin, 
  Github, 
  Twitter,
  MapPin,
  ExternalLink
} from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

const contactLinks = [
  {
    icon: Mail,
    label: "Email", 
    value: portfolioConfig.personal.email.replace('mailto:', ''),
    href: portfolioConfig.social.email
  },
  // {
  //   icon: Linkedin,
  //   label: "LinkedIn",
  //   value: "/in/nithinv",
  //   href: portfolioConfig.social.linkedin
  // },
  // {
  //   icon: Github,
  //   label: "GitHub",
  //   value: "/nithinv", 
  //   href: portfolioConfig.social.github
  // },
  // {
  //   icon: Twitter,
  //   label: "Twitter",
  //   value: "@nithinv_ai",
  //   href: portfolioConfig.social.twitter
  // }
]

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss AI projects or potential roles.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <Card key={index} className="p-6 border border-border hover:shadow-lg transition-shadow">
                  <a href={contact.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 bg-muted rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {contact.label}
                      </h3>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </Card>
              )
            })}
          </div>

          {/* Location & Availability */}
          <Card className="p-8 bg-muted/50 border border-border text-center">
            {/* <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span className="text-muted-foreground">Based in San Francisco, CA</span>
            </div> */}
            <h3 className="text-xl font-semibold mb-2">Open to Opportunities</h3>
            <p className="text-muted-foreground mb-6">
              Currently seeking full-time Senior AI Engineer roles and interesting consulting projects.
            </p>
            <Button size="lg" variant="outline">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </Card>

        </div>
      </div>
    </section>
  )
}