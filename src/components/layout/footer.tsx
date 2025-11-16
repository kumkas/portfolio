"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, Heart, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:hello@example.com", icon: Mail },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

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
                <span className="text-background font-bold text-sm">AC</span>
              </div>
              <span className="font-bold text-xl">Alex Chen</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Senior AI Engineer passionate about building production ML systems 
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
              <span>© {currentYear} Alex Chen. Made with</span>
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