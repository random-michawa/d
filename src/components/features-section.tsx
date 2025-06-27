"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, RefreshCw, Layers, BarChart3, Lock, ArrowRight, TrendingUp, Cpu, Eye } from "lucide-react"

interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  stats: string
  badge?: string
  color: string
  gradient: string
}

const features: Feature[] = [
  {
    id: "security-audits",
    icon: <Shield className="w-8 h-8" />,
    title: "Advanced Security Audits",
    description:
      "AI-powered vulnerability detection that scans your wallet and transactions for potential threats in real-time.",
    stats: "99.7% accuracy",
    badge: "AI-Powered",
    color: "text-emerald-400",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    id: "gas-optimization",
    icon: <Zap className="w-8 h-8" />,
    title: "Intelligent Gas Optimization",
    description: "Smart algorithms that predict optimal gas prices and suggest the best times to execute transactions.",
    stats: "Save up to 40%",
    badge: "Smart",
    color: "text-yellow-400",
    gradient: "from-yellow-500 to-orange-400",
  },
  {
    id: "transaction-recovery",
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Transaction Recovery Suite",
    description:
      "Advanced tools to recover stuck transactions, cancel pending operations, and optimize your transaction flow.",
    stats: "95% success rate",
    color: "text-blue-400",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "multi-chain",
    icon: <Layers className="w-8 h-8" />,
    title: "Universal Multi-Chain Support",
    description:
      "Seamlessly interact with 50+ blockchains including Ethereum, Polygon, BSC, Avalanche, and emerging L2 solutions.",
    stats: "50+ networks",
    badge: "Universal",
    color: "text-purple-400",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: "analytics",
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Real-Time Performance Analytics",
    description:
      "Comprehensive insights into your DeFi portfolio, transaction patterns, and yield optimization opportunities.",
    stats: "Live tracking",
    color: "text-green-400",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    id: "contract-verification",
    icon: <Lock className="w-8 h-8" />,
    title: "Smart Contract Verification",
    description:
      "Automated contract auditing with risk assessment, code analysis, and security recommendations before interaction.",
    stats: "Instant verification",
    badge: "Automated",
    color: "text-red-400",
    gradient: "from-red-500 to-rose-400",
  },
]

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
  const [visibleFeatures, setVisibleFeatures] = useState<Set<string>>(new Set())
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureId = entry.target.getAttribute("data-feature-id")
            if (featureId) {
              setVisibleFeatures((prev) => new Set([...prev, featureId]))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    const featureCards = document.querySelectorAll("[data-feature-id]")
    featureCards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <Badge
            variant="outline"
            className="border-emerald-500 text-emerald-400 bg-emerald-500/10 px-4 py-2 text-sm font-medium"
          >
            <Cpu className="w-4 h-4 mr-2" />
            Advanced Web3 Tools
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Powerful Features to{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Enhance Your Web3 Experience
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive platform provides cutting-edge tools and intelligent automation to navigate the Web3
            ecosystem safely, efficiently, and profitably.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center gap-8 pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">50+</div>
              <div className="text-sm text-gray-500">Supported Networks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">1M+</div>
              <div className="text-sm text-gray-500">Transactions Secured</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">99.9%</div>
              <div className="text-sm text-gray-500">Uptime</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.id}
              data-feature-id={feature.id}
              className={`group relative bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                visibleFeatures.has(feature.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                <div className="space-y-4 sm:space-y-6">
                  {/* Icon and Badge */}
                  <div className="flex items-start justify-between">
                    <div className={`${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-6 h-6 sm:w-8 sm:h-8">{feature.icon}</div>
                    </div>
                    {feature.badge && (
                      <Badge
                        variant="secondary"
                        className={`bg-gradient-to-r ${feature.gradient} text-white border-0 text-xs`}
                      >
                        {feature.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-emerald-400 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-medium text-emerald-400">{feature.stats}</span>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className={`w-full justify-between ${feature.color} hover:bg-slate-700/50 group/btn`}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Interactive Elements */}
                {hoveredFeature === feature.id && (
                  <div className="absolute top-4 right-4">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} animate-pulse`}></div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 space-y-4 sm:space-y-6">
          <h3 className="text-2xl font-semibold text-white">Ready to secure your Web3 journey?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Start Free Security Scan</span>
              <span className="sm:hidden">Security Scan</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">View Live Demo</span>
              <span className="sm:hidden">Live Demo</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
