"use client"

import { generateJsonLd } from '@/lib/seo'

export function StructuredData() {
  const jsonLd = generateJsonLd()

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd, null, 2)
      }}
    />
  )
}