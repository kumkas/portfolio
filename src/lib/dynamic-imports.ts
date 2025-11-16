import dynamic from "next/dynamic"

// Dynamic imports for better code splitting and performance

export const DynamicHero = dynamic(
  () => import("@/components/sections/hero").then(mod => ({ default: mod.Hero })),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-blue-50/20 dark:to-blue-950/20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading portfolio...</p>
        </div>
      </div>
    ),
    ssr: true,
  }
)

export const DynamicAIDemo = dynamic(
  () => import("@/components/sections/ai-demos").then(mod => ({ default: mod.AIDemosSection })),
  {
    loading: () => <div className="w-full h-64 animate-pulse bg-muted rounded-lg" />,
    ssr: false,
  }
)

export const DynamicAbout = dynamic(
  () => import("@/components/sections/about").then(mod => ({ default: mod.About })),
  {
    loading: () => <div className="w-full h-96 animate-pulse bg-muted rounded-lg" />,
    ssr: true,
  }
)

export const DynamicProjects = dynamic(
  () => import("@/components/sections/projects").then(mod => ({ default: mod.Projects })),
  {
    loading: () => <div className="w-full h-96 animate-pulse bg-muted rounded-lg" />,
    ssr: false,
  }
)

export const DynamicSkills = dynamic(
  () => import("@/components/sections/skills").then(mod => ({ default: mod.Skills })),
  {
    loading: () => <div className="w-full h-96 animate-pulse bg-muted rounded-lg" />,
    ssr: false,
  }
)

export const DynamicExperience = dynamic(
  () => import("@/components/sections/experience").then(mod => ({ default: mod.Experience })),
  {
    loading: () => <div className="w-full h-96 animate-pulse bg-muted rounded-lg" />,
    ssr: true,
  }
)

export const DynamicContact = dynamic(
  () => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })),
  {
    loading: () => <div className="w-full h-96 animate-pulse bg-muted rounded-lg" />,
    ssr: true,
  }
)

// 3D components (expensive to load)
export const DynamicNeuralNetwork = dynamic(
  () => import("@/components/three/neural-network").then(mod => ({ default: mod.NeuralNetwork })),
  {
    loading: () => <div className="w-full h-full" />,
    ssr: false,
  }
)

export const DynamicFloatingElements = dynamic(
  () => import("@/components/three/neural-network").then(mod => ({ default: mod.FloatingElements })),
  {
    loading: () => <div className="w-full h-full" />,
    ssr: false,
  }
)

// Heavy interactive components
export const DynamicAITwinChat = dynamic(
  () => import("@/components/demos/ai-twin-chat").then(mod => ({ default: mod.AiTwinChat })),
  {
    loading: () => <div>Loading AI Chat...</div>,
    ssr: false,
  }
)

export const DynamicRagDocumentChat = dynamic(
  () => import("@/components/demos/rag-document-chat").then(mod => ({ default: mod.RagDocumentChat })),
  {
    loading: () => <div>Loading Document Chat...</div>,
    ssr: false,
  }
)