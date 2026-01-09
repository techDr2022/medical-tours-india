import { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"
import { treatments } from "@/lib/treatments"

// Force dynamic generation - no caching
export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cost.medicaltoursindia.com"
  const currentDate = new Date()

  const routes: MetadataRoute.Sitemap = []

  // ============================================
  // MAIN PAGES - Highest Priority
  // ============================================
  
  routes.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 1.0,
  })

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
  
  // Add all treatment pages
  for (const treatment of treatments) {
    if (treatment?.slug) {
      routes.push({
        url: `${baseUrl}/treatments/${treatment.slug}`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      })
    }
  }

  // ============================================
  // BLOG POSTS - Medium Priority
  // ============================================
  
  // Create a fresh copy and ensure all posts are included
  const allBlogPosts = Array.isArray(blogPosts) ? [...blogPosts] : []
  
  // Sort by date (newest first)
  const sortedBlogPosts = allBlogPosts.sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime()
    const dateB = new Date(b.date || 0).getTime()
    return dateB - dateA
  })

  // Add all blog post URLs
  for (const post of sortedBlogPosts) {
    if (post?.slug) {
      routes.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      })
    }
  }

  return routes
}
