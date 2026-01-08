import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { StructuredData } from "@/components/StructuredData"
import { MarkdownContent } from "@/components/MarkdownContent"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  // Enhanced keywords combining post keywords with general medical tourism keywords
  const enhancedKeywords = [
    ...post.seoKeywords,
    "medical tourism India",
    "medical treatment India",
    "medical tourism blog",
    "medical travel India",
    "affordable healthcare India",
    "medical cost India",
    "medical tourism guide",
    "medical tourism information",
    "medical tourism resources",
    "medical tourism help",
    "medical tourism support",
    "medical tourism assistance",
    "medical tourism consultant",
    "medical tourism facilitator",
    "medical tourism coordinator",
    "medical tourism agency",
    "medical tourism company",
    "medical tourism services",
    "medical tourism planning",
    "medical tourism preparation",
    "medical tourism process",
    "medical tourism steps",
    "medical tourism guide India",
    "medical tourism Hyderabad",
    "medical tourism Telangana",
    "international patients India",
    "medical tourism for Americans",
    "medical tourism for UK patients",
    "medical tourism for UAE patients",
    "medical tourism for African patients",
    "medical tourism USA to India",
    "medical tourism UK to India",
    "medical tourism UAE to India",
    "medical tourism Africa to India",
    "free medical consultation",
    "free medical guidance",
    "medical cost estimate",
    "treatment cost estimate",
    "hospital cost India",
    "surgery cost India",
    "medical procedure cost",
    "affordable surgery India",
    "cheap medical treatment",
    "low cost medical treatment",
    "best hospitals India",
    "best doctors India",
    "experienced surgeons India",
    "JCI accredited hospitals",
    "NABH accredited hospitals",
    "medical tourism quality",
    "medical tourism safety",
    "medical tourism benefits",
    "medical tourism advantages",
    "why medical tourism India",
    "medical tourism success rate",
    "medical tourism reviews",
    "medical tourism ratings",
    "medical tourism testimonials",
    "medical tourism experiences",
    "medical tourism stories",
    "medical tourism case studies",
  ]

  return {
    title: `${post.title} | Medical Tours India Blog`,
    description: `${post.description} Read comprehensive guide with cost comparisons, hospital recommendations, and expert insights. Get free medical guidance and cost estimates.`,
    keywords: enhancedKeywords,
    openGraph: {
      title: post.title,
      description: `${post.description} Free medical guidance and cost estimates available.`,
      url: `https://cost.medicaltoursindia.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: "Medical Tours India",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://cost.medicaltoursindia.com/blog/${post.slug}`,
    },
    other: {
      "article:published_time": post.date,
      "article:modified_time": post.date,
      "article:author": post.author,
      "article:section": post.category,
      "article:tag": post.tags.join(", "),
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://cost.medicaltoursindia.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Medical Tours India",
      url: "https://cost.medicaltoursindia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://cost.medicaltoursindia.com/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cost.medicaltoursindia.com/blog/${post.slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: "https://cost.medicaltoursindia.com/og-image.jpg",
    },
    keywords: post.seoKeywords.join(", "),
    articleSection: post.category,
    articleTag: post.tags,
    wordCount: post.content.split(" ").length,
    timeRequired: post.readTime,
    inLanguage: "en-US",
    about: {
      "@type": "Thing",
      name: "Medical Tourism in India",
    },
    mentions: [
      {
        "@type": "Place",
        name: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      {
        "@type": "Place",
        name: "India",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 py-16 md:py-24">
          <Link href="/blog">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span>•</span>
              <span>{post.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  <Tag className="h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <MarkdownContent content={post.content} />
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <div className="border-2 border-gray-100 rounded-lg p-4 hover:border-primary/30 transition-all cursor-pointer">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 hover:text-primary">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 p-8 bg-primary/5 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Explore Medical Treatment in India?
            </h2>
            <p className="text-gray-600 mb-6">
              Get free guidance from our medical coordinators to understand your options, estimate costs, and plan your treatment journey.
            </p>
            <Link href="/#lead-form">
              <Button className="gradient-primary hover:opacity-90">
                Get Free Medical Guidance
              </Button>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
