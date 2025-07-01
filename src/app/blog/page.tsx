import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { blogPosts, getFeaturedPosts } from "@/lib/blog-data"
import { Calendar, Clock, ArrowRight, TrendingUp, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog - DeFiSecure",
  description: "Latest insights, case studies, and success stories from the world of Web3 security.",
}

export default async function BlogPage() {
  const featuredPosts = await getFeaturedPosts()
  const recentPosts = blogPosts.filter((post) => !post.featured)


  return (
    <main className="min-h-screen bg-slate-900 pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge
              variant="outline"
              className="border-emerald-500 text-emerald-400 bg-emerald-500/10 px-4 py-2 text-sm font-medium"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Latest Insights
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Web3 Security{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover how DeFiSecure has helped protect millions in digital assets, prevent exploits, and optimize DeFi
              operations for thousands of users worldwide.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">$50M+</div>
                <div className="text-sm text-gray-500">Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">500+</div>
                <div className="text-sm text-gray-500">Exploits Prevented</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">10K+</div>
                <div className="text-sm text-gray-500">Users Protected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Stories</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card
                key={post.id}
                className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-teal-500/20 relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-500 text-white">{post.category}</Badge>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-white">{post.author.name}</div>
                        <div className="text-xs text-gray-400">{post.author.role}</div>
                      </div>
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" className="text-emerald-400 hover:text-emerald-300 group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-emerald-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Recent Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <Card
                key={post.id}
                className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="border-slate-600 text-gray-400 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar || "/placeholder.svg"}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-medium text-white">{post.author.name}</div>
                        <div className="text-xs text-gray-400">{new Date(post.publishedAt).toLocaleDateString()}</div>
                      </div>
                    </div>

                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300 group/btn">
                        Read
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
            <CardContent className="p-8 sm:p-12 text-center space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Stay Updated with Web3 Security</h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Get the latest security insights, case studies, and protection tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
