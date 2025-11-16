// Performance monitoring utilities
import * as React from "react"

export interface PerformanceMetrics {
  name: string
  duration: number
  timestamp: number
}

class PerformanceMonitor {
  private metrics: Map<string, number> = new Map()
  private observers: PerformanceObserver[] = []

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeObservers()
    }
  }

  private initializeObservers() {
    // Core Web Vitals observer
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              this.trackMetric('LCP', entry.startTime)
            }
            if (entry.entryType === 'first-input') {
              this.trackMetric('FID', (entry as any).processingStart - entry.startTime)
            }
            if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
              this.trackMetric('CLS', (entry as any).value)
            }
          }
        })

        observer.observe({
          entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift']
        })
        
        this.observers.push(observer)
      } catch (error) {
        console.warn('Performance monitoring not supported:', error)
      }
    }
  }

  startTimer(name: string): void {
    this.metrics.set(name, performance.now())
  }

  endTimer(name: string): number | null {
    const startTime = this.metrics.get(name)
    if (startTime) {
      const duration = performance.now() - startTime
      this.metrics.delete(name)
      this.trackMetric(name, duration)
      return duration
    }
    return null
  }

  private trackMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance: ${name} = ${value.toFixed(2)}ms`)
    }
    
    // In production, you could send these to analytics
    // analytics.track('performance', { metric: name, value })
  }

  measureComponent<T extends Record<string, any>>(
    Component: React.ComponentType<T>,
    name: string
  ): React.ComponentType<T> {
    return (props: T) => {
      const startTime = React.useRef<number>()
      
      React.useEffect(() => {
        startTime.current = performance.now()
        return () => {
          if (startTime.current) {
            const duration = performance.now() - startTime.current
            this.trackMetric(`Component:${name}`, duration)
          }
        }
      }, [])

      return React.createElement(Component, props)
    }
  }

  destroy(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
    this.metrics.clear()
  }
}

export const performanceMonitor = new PerformanceMonitor()

// Higher-order component for performance monitoring
export function withPerformanceMonitoring<T extends Record<string, any>>(
  Component: React.ComponentType<T>,
  name: string
) {
  return performanceMonitor.measureComponent(Component, name)
}

// Hook for measuring async operations
export function usePerformanceTimer() {
  const measure = React.useCallback((name: string, fn: () => Promise<any>) => {
    return async () => {
      performanceMonitor.startTimer(name)
      try {
        const result = await fn()
        return result
      } finally {
        performanceMonitor.endTimer(name)
      }
    }
  }, [])

  return { measure }
}

// Utility to preload critical resources
export function preloadResource(href: string, as: string) {
  if (typeof window !== "undefined") {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = href
    link.as = as
    document.head.appendChild(link)
  }
}

// Image optimization utility
export function optimizeImageLoading() {
  if (typeof window !== "undefined" && 'IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]')
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          img.src = img.dataset.src!
          img.classList.remove('lazy')
          observer.unobserve(img)
        }
      })
    })

    images.forEach(img => imageObserver.observe(img))
  }
}