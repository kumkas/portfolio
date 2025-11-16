import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nithin V | Senior AI Engineer",
  description: "Nithin V's portfolio - Senior AI Engineer at Ortho Diagnostics with 5+ years building production ML systems. Expertise in LLMs, MLOps, and autonomous vehicle perception systems.",
  keywords: ["AI Engineer", "Machine Learning", "Deep Learning", "MLOps", "LLM", "RAG", "Computer Vision", "NLP", "TensorFlow", "PyTorch"],
  authors: [{ name: "Nithin V" }],
  creator: "Nithin V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nithinv.dev",
    title: "Nithin V | Senior AI Engineer",
    description: "Senior AI Engineer at Ortho Diagnostics with expertise in production ML systems, LLMs, and autonomous vehicle perception.",
    siteName: "Nithin V Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithin V | Senior AI Engineer",
    description: "Senior AI Engineer specializing in production ML systems and autonomous vehicle perception",
    creator: "@nithinv_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <StructuredData />
          <div className="relative min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
