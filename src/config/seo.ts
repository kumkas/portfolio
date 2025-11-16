import type { Metadata } from "next"

export interface SEOConfig {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  section?: string
}

const defaultConfig = {
  title: "Nithin V | Senior AI Engineer",
  description: "Senior AI Engineer at Ortho Diagnostics with 5+ years building production ML systems. Expertise in LLMs, MLOps, and autonomous vehicle perception systems.",
  keywords: [
    "AI Engineer",
    "Machine Learning", 
    "Deep Learning",
    "MLOps",
    "LLM",
    "Large Language Models",
    "RAG",
    "Computer Vision",
    "NLP",
    "Natural Language Processing",
    "TensorFlow",
    "PyTorch",
    "Python",
    "Autonomous Vehicles",
    "Production ML",
    "AI Systems Architecture",
    "Data Science",
    "Neural Networks",
    "Nithin V",
    "Ortho Diagnostics",
    "DataFlow Systems"
  ],
  url: "https://portfolio.nkumarv18.workers.dev/",
  image: "https://portfolio.nkumarv18.workers.dev/og-image.jpg",
  type: "website" as const,
}

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = defaultConfig.title,
    description = defaultConfig.description,
    keywords = defaultConfig.keywords,
    image = defaultConfig.image,
    url = defaultConfig.url,
    type = defaultConfig.type,
    section
  } = config

  const fullTitle = section ? `${section} | ${title}` : title
  const fullUrl = section ? `${url}#${section.toLowerCase()}` : url

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: "Nithin V", url: "https://portfolio.nkumarv18.workers.dev/" }],
    creator: "Nithin V",
    publisher: "Nithin V",
    
    // Open Graph
    openGraph: {
      type,
      locale: "en_US",
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: "Nithin V Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Portfolio`,
        },
      ],
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@nithinv_ai",
      images: [image],
    },

    // Additional meta tags
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Verification
    verification: {
      google: process.env.GOOGLE_VERIFICATION || "",
      other: {
        'msvalidate.01': process.env.BING_VERIFICATION || "",
      },
    },

    // Additional tags
    other: {
      'theme-color': '#4F46E5',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'format-detection': 'telephone=no',
    },

    // Canonical URL
    alternates: {
      canonical: fullUrl,
    },
  }
}

// Schema.org JSON-LD data
export function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nithin V",
    "jobTitle": "Senior AI Engineer",
    "description": "Senior AI Engineer with 5+ years building production ML systems at scale",
    "url": "https://portfolio.nkumarv18.workers.dev/",
    "image": "https://portfolio.nkumarv18.workers.dev.jpg",
    "sameAs": [

    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Ortho Diagnostics",
    },
    "alumniOf": {
      "@type": "Organization", 
      "name": "DataFlow Systems",
      "url": "https://dataflowsystems.com"
    },
    "knowsAbout": [
      "Machine Learning",
      "Deep Learning", 
      "Large Language Models",
      "MLOps",
      "Computer Vision",
      "Natural Language Processing",
      "Autonomous Vehicles",
      "AI Systems Architecture",
      "TensorFlow",
      "PyTorch",
      "Python"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Senior AI Engineer",
        "description": "5+ years building production ML systems"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "professional",
      "email": "nithinv@email.com"
    }
  }
}

// Generate sitemap data
export function generateSitemapData() {
  const baseUrl = "https://portfolio.nkumarv18.workers.dev/"
  const sections = [
    { path: "", priority: 1.0, changefreq: "weekly" },
    { path: "#about", priority: 0.8, changefreq: "monthly" },
    { path: "#demos", priority: 0.9, changefreq: "weekly" },
    { path: "#projects", priority: 0.9, changefreq: "monthly" },
    { path: "#skills", priority: 0.7, changefreq: "monthly" },
    { path: "#experience", priority: 0.8, changefreq: "monthly" },
    { path: "#contact", priority: 0.6, changefreq: "monthly" },
  ]

  return sections.map(section => ({
    url: `${baseUrl}${section.path}`,
    lastModified: new Date(),
    changeFrequency: section.changefreq as "weekly" | "monthly",
    priority: section.priority,
  }))
}

// Performance and SEO monitoring
export function trackPageView(page: string) {
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_title: page,
        page_location: window.location.href,
      })
    }
  }
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}