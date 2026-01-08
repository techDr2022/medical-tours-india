import { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Medical Tourism Blog - Expert Guides, Cost Comparisons & Treatment Insights | Medical Tours India",
  description: "Comprehensive medical tourism blog with expert guides on treatments, costs, hospitals, and medical travel to India. Learn about IVF, heart surgery, cancer treatment, joint replacement, and more. Free cost estimates and treatment guidance.",
  keywords: [
    "medical tourism blog",
    "medical travel blog",
    "India medical tourism",
    "medical treatment guides",
    "healthcare India blog",
    "medical tourism articles",
    "medical tourism information",
    "medical tourism resources",
    "medical tourism news",
    "medical tourism updates",
    "medical tourism tips",
    "medical tourism advice",
    "medical tourism guide India",
    "medical tourism blog India",
    "medical tourism articles India",
    "medical treatment blog",
    "healthcare blog India",
    "medical tourism cost blog",
    "medical tourism comparison",
    "medical tourism reviews blog",
    "medical tourism experiences",
    "medical tourism stories",
    "medical tourism case studies",
    "medical tourism success stories",
    "medical tourism patient stories",
    "medical tourism testimonials blog",
    "medical tourism FAQ",
    "medical tourism questions",
    "medical tourism answers",
    "medical tourism help",
    "medical tourism support blog",
    "medical tourism planning blog",
    "medical tourism preparation",
    "medical tourism checklist blog",
    "medical tourism process",
    "medical tourism steps",
    "medical tourism guide",
    "how to medical tourism",
    "medical tourism for beginners",
    "medical tourism explained",
    "medical tourism detailed guide",
    "comprehensive medical tourism guide",
    "complete medical tourism guide",
    "medical tourism everything you need to know",
    "medical tourism complete information",
    "medical tourism full guide",
    "medical tourism comprehensive resource",
  ],
  openGraph: {
    title: "Medical Tourism Blog - Expert Guides and Insights",
    description: "Read expert guides on medical tourism in India. Learn about treatments, costs, hospitals, and medical travel.",
    url: "https://cost.medicaltoursindia.com/blog",
  },
  alternates: {
    canonical: "https://cost.medicaltoursindia.com/blog",
  },
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Medical Tourism <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guides, insights, and everything you need to know about medical tourism in India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full border-2 border-gray-100 hover:border-primary/30 transition-all hover:shadow-soft-lg cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4 ml-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-primary font-semibold group-hover:underline">
                    Read More →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
