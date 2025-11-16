"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Linkedin, Github } from "lucide-react"
import { portfolioConfig } from "@/config/portfolio"

export function Hero() {
  const { personal, social, coreSkills } = portfolioConfig

  return (
    <section id="home" className="pt-40 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Professional Header - LinkedIn Style */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              <div className="text-6xl font-bold text-muted-foreground">{personal.initials}</div>
            </div>
            
            {/* Name and Title */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{personal.name}</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
                {personal.title}
              </h2>
              
              {/* Location and Status */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {personal.location}
                </div>
                {personal.availableForWork && (
                  <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                    {personal.availabilityText}
                  </Badge>
                )}
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <Button size="sm" variant="outline" onClick={() => window.open(social.email)}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
           
              </div>
            </div>
          </div>

          {/* Professional Summary - LinkedIn Style */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              {personal.summary}
            </p>
          </div>

          {/* Core Expertise Tags */}
          <div className="border-t border-border pt-8">
            <h3 className="text-lg font-semibold mb-4">Core Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}