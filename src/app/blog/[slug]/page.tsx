import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getBlogPost, blogPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, ChevronRight } from "lucide-react"
import ReactMarkdown from "react-markdown"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
   

  if (!post) {
    return {
      title: "Post Not Found - DeFiSecure Blog",
    }
  }

  return {
    title: `${post.title} - DeFiSecure Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.id,
  }))
}


export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getBlogPost(slug)


  if (!post) {
    notFound()
  }
  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2)

  return (
    <main className="min-h-screen bg-slate-900 pt-16 sm:pt-20">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 mb-6 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Badge className="bg-emerald-500 text-white">{post.category}</Badge>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{post.title}</h1>

              <p className="text-xl text-gray-400 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between py-6 border-y border-slate-800">
                <div className="flex items-center gap-4">
                  <img
                    src={post.author.avatar || "/placeholder.svg"}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{post.author.name}</div>
                    <div className="text-sm text-gray-400">{post.author.role}</div>
                  </div>
                </div>

                <Button variant="outline" className="border-slate-700 text-gray-300 hover:text-white">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6 sm:p-8 lg:p-12">
                <div className="prose prose-invert prose-emerald max-w-none">
                  <ReactMarkdown
                    components={{
                      h1: (props) => (
                        <h1 {...props} className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">{props.children}</h1>
                      ),
                      h2: (props) => <h2 {...props} className="text-2xl font-bold text-white mb-4 mt-8">{props.children}</h2>,
                      h3: (props) => <h3 {...props} className="text-xl font-bold text-white mb-3 mt-6">{props.children}</h3>,
                      p: (props) => <p {...props} className="text-gray-300 leading-relaxed mb-4">{props.children}</p>,
                      ul: (props) => (
                        <ul {...props} className="list-disc list-inside text-gray-300 mb-4 space-y-2">{props.children}</ul>
                      ),
                      ol: (props) => (
                        <ol {...props} className="list-decimal list-inside text-gray-300 mb-4 space-y-2">{props.children}</ol>
                      ),
                      li: (props) => <li {...props} className="text-gray-300">{props.children}</li>,
                      strong: (props) => <strong {...props} className="text-emerald-400 font-semibold">{props.children}</strong>,
                      code: (props) => (
                        <code {...props} className="bg-slate-700 text-emerald-400 px-2 py-1 rounded text-sm">{props.children}</code>
                      ),
                      pre: (props) => (
                        <pre {...props} className="bg-slate-900 border border-slate-700 rounded-lg p-4 overflow-x-auto mb-6">
                          {props.children}
                        </pre>
                      ),
                      blockquote: (props) => (
                        <blockquote {...props} className="border-l-4 border-emerald-500 pl-4 italic text-gray-400 my-6">
                          {props.children}
                        </blockquote>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-slate-700">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="border-slate-600 text-gray-400">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">Related Articles</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300"
                  >
                    <CardContent className="p-6 space-y-4">
                      <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                        {relatedPost.category}
                      </Badge>

                      <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {relatedPost.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">{relatedPost.excerpt.slice(0, 120)}...</p>

                      <div className="flex items-center justify-between pt-4">
                        <div className="flex items-center gap-2 text-xs text-gray-400">
                          <Clock className="w-3 h-3" />
                          {relatedPost.readTime}
                        </div>

                        <Link href={`/blog/${relatedPost.id}`}>
                          <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}