import { MetadataRoute } from 'next'
import { generateSitemapData } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemapData()
}