import { MetadataRoute } from "next"
import { blogPosts } from "@/lib/blog-posts"
import { treatments } from "@/lib/treatments"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cost.medicaltoursindia.com"
  const currentDate = new Date()

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  // Add all treatment pages
  treatments.forEach((treatment) => {
    routes.push({
      url: `${baseUrl}/treatments/${treatment.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  })

  // Add all blog posts
  blogPosts.forEach((post) => {
    routes.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.8,
    })
  })

  return routes
}
