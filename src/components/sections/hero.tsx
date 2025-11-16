"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Linkedin, Github } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-40 pb-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Professional Header - LinkedIn Style */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
            
            {/* Profile Image */}
            <div className="w-32 h-32 md:w-40 md:h-40 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              <div className="text-6xl font-bold text-muted-foreground">AC</div>
            </div>
            
            {/* Name and Title */}
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Alex Chen</h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
                Senior AI Engineer
              </h2>
              
              {/* Location and Status */}
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  San Francisco, CA
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  Open to work
                </Badge>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                <Button size="sm" variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button size="sm" variant="outline">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button size="sm" variant="outline">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Professional Summary - LinkedIn Style */}
          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              Senior AI Engineer at TechCorp AI with 5+ years building production ML systems that drive real business value. 
              Currently leading autonomous vehicle perception systems processing 10M+ miles of driving data daily. Previously 
              scaled ML infrastructure at DataFlow Systems, reducing model inference latency by 70% and serving millions of users.
            </p>
          </div>

          {/* Key Stats - Clean Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Models Deployed</div>
            </div>
            <div className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Engineers Led</div>
            </div>
            <div className="text-center p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary">10M+</div>
              <div className="text-sm text-muted-foreground">Daily Users</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}