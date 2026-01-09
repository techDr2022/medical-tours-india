import { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"
import { treatments } from "@/lib/treatments"

// Force dynamic generation to prevent caching issues
export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cost.medicaltoursindia.com"
  const currentDate = new Date()

  // Verify data is loaded correctly
  const totalTreatments = treatments.length
  const totalBlogPosts = blogPosts.length

  const routes: MetadataRoute.Sitemap = []

  // ============================================
  // MAIN PAGES - Highest Priority
  // ============================================
  
  // Homepage - Most important page
  routes.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 1.0,
  })

  // Main category pages - High priority
  routes.push({
    url: `${baseUrl}/treatments`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  })

  routes.push({
    url: `${baseUrl}/blog`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.9,
  })

  // ============================================
  // TREATMENT PAGES - High Priority
  // ============================================
  
  // Ensure treatments are added
  if (treatments && treatments.length > 0) {
    treatments.forEach((treatment) => {
      if (treatment && treatment.slug) {
        routes.push({
          url: `${baseUrl}/treatments/${treatment.slug}`,
          lastModified: currentDate,
          changeFrequency: "monthly",
          priority: 0.8,
        })
      }
    })
  }

  // ============================================
  // BLOG POSTS - Medium Priority
  // ============================================
  
  // Sort blog posts by date (newest first) for better organization
  if (blogPosts && blogPosts.length > 0) {
    const sortedBlogPosts = [...blogPosts].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    sortedBlogPosts.forEach((post) => {
      if (post && post.slug) {
        routes.push({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: new Date(post.date),
          changeFrequency: "monthly",
          priority: 0.8,
        })
      }
    })
  }

  return routes
}
