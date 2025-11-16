"use client"

import { useState, useEffect, useRef, ReactNode } from "react"

interface LazyLoadProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
  className?: string
}

export function LazyLoad({
  children,
  fallback = <div className="w-full h-64 animate-pulse bg-muted rounded-lg" />,
  rootMargin = "50px",
  threshold = 0.1,
  className = "",
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
        }
      },
      {
        rootMargin,
        threshold,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [rootMargin, threshold, hasLoaded])

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}

interface LazyComponentProps {
  fallback?: ReactNode
  className?: string
  children: () => Promise<ReactNode> | ReactNode
}

export function LazyComponent({ 
  children, 
  fallback = <div className="w-full h-64 animate-pulse bg-muted rounded-lg" />,
  className = "",
}: LazyComponentProps) {
  const [component, setComponent] = useState<ReactNode>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
      }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible && isLoading) {
      const loadComponent = async () => {
        try {
          const result = await Promise.resolve(children())
          setComponent(result)
        } catch (error) {
          console.error("Failed to load component:", error)
        } finally {
          setIsLoading(false)
        }
      }

      loadComponent()
    }
  }, [isVisible, isLoading, children])

  return (
    <div ref={ref} className={className}>
      {isVisible ? (isLoading ? fallback : component) : fallback}
    </div>
  )
}