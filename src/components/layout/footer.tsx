"use client"

import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { portfolioConfig } from "@/config/portfolio"

const socialLinks = [
  { name: "GitHub", href: portfolioConfig.social.github, icon: Github },
  { name: "LinkedIn", href: portfolioConfig.social.linkedin, icon: Linkedin },
  { name: "Twitter", href: portfolioConfig.social.twitter, icon: Twitter },
  { name: "Email", href: portfolioConfig.social.email, icon: Mail },
]

const quickLinks = portfolioConfig.navigation

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                <span className="text-background font-bold text-sm">{portfolioConfig.personal.initials}</span>
              </div>
              <span className="font-bold text-xl">{portfolioConfig.personal.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {portfolioConfig.personal.title} passionate about building production ML systems 
              that solve real-world problems and drive meaningful impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Technologies
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Machine Learning</p>
              <p>Deep Learning</p>
              <p>Large Language Models</p>
              <p>MLOps & Deployment</p>
              <p>Computer Vision</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex space-x-3 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 hover:text-primary"
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-4 h-4" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </Button>
                )
              })}
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {currentYear} {portfolioConfig.personal.name}. Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>and passion for AI</span>
            </div>
            <div className="text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary mr-4">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-primary">
                Terms
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}