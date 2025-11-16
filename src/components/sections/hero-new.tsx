"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="min-h-screen bg-background">
      <div className="container mx-auto px-6">
        <div className="pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Clean, direct introduction like successful portfolios */}
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
              Alex Chen
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Senior AI Engineer @ TechCorp AI
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I build production ML systems for autonomous vehicles. Previously scaled 
              infrastructure at DataFlow Systems, reducing inference latency by 70% and 
              serving 10M+ daily users.
            </p>
            
            {/* Simple contact links like real professional portfolios */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="outline"
                size="lg"
                className="w-fit"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  contactSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get in touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-fit"
                onClick={() => {
                  const projectsSection = document.getElementById("projects")
                  projectsSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View my work
              </Button>
            </div>
            
            {/* Simple facts - no fancy cards or animations */}
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• 5+ years in production ML systems</p>
              <p>• Led teams of 8+ engineers</p>
              <p>• 50+ models deployed at scale</p>
              <p>• Currently based in San Francisco</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Clean divider */}
      <div className="border-b border-border"></div>
    </section>
  )
}