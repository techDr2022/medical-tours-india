import { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"
import { treatments } from "@/lib/treatments"

// Force dynamic generation - no caching
export const dynamic = 'force-dynamic'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cost.medicaltoursindia.com"
  const currentDate = new Date()

  const routes: MetadataRoute.Sitemap = []

  try {
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
    
    // Ensure treatments array exists and is valid
    if (treatments && Array.isArray(treatments) && treatments.length > 0) {
      treatments.forEach((treatment) => {
        if (treatment && typeof treatment === 'object' && treatment.slug && typeof treatment.slug === 'string' && treatment.slug.trim()) {
          routes.push({
            url: `${baseUrl}/treatments/${treatment.slug.trim()}`,
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
    
    // Ensure blogPosts array exists and is valid
    if (blogPosts && Array.isArray(blogPosts) && blogPosts.length > 0) {
      // Create a fresh copy to avoid mutations
      const allBlogPosts = [...blogPosts]
      
      // Sort by date (newest first)
      const sortedBlogPosts = allBlogPosts.sort((a, b) => {
        try {
          const dateA = a?.date ? new Date(a.date).getTime() : 0
          const dateB = b?.date ? new Date(b.date).getTime() : 0
          return dateB - dateA
        } catch {
          return 0
        }
      })

      // Add all blog post URLs
      sortedBlogPosts.forEach((post) => {
        if (post && typeof post === 'object' && post.slug && typeof post.slug === 'string' && post.slug.trim()) {
          try {
            const postDate = post.date ? new Date(post.date) : currentDate
            // Validate date is valid
            if (isNaN(postDate.getTime())) {
              return // Skip invalid dates
            }
            routes.push({
              url: `${baseUrl}/blog/${post.slug.trim()}`,
              lastModified: postDate,
              changeFrequency: "monthly",
              priority: 0.8,
            })
          } catch {
            // Skip invalid posts but continue with others
          }
        }
      })
    }
  } catch {
    // Return at least the basic pages even if there's an error
  }

  return routes
}
