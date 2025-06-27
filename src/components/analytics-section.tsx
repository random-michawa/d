"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
  Users,
  Activity,
  Globe,
  ArrowUp,
  ArrowDown,
  Eye,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react"

interface AnalyticsData {
  totalValue: number
  transactionsSecured: number
  gasSaved: number
  threatsBlocked: number
  activeUsers: number
  networksSupported: number
  uptimePercentage: number
  avgResponseTime: number
}

interface TrendData {
  label: string
  value: number
  change: number
  isPositive: boolean
}

export default function AnalyticsSection() {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData>({
    totalValue: 52300000,
    transactionsSecured: 1247893,
    gasSaved: 8900000,
    threatsBlocked: 2847,
    activeUsers: 15420,
    networksSupported: 47,
    uptimePercentage: 99.97,
    avgResponseTime: 0.23,
  })

  const [trendData, setTrendData] = useState<TrendData[]>([
    { label: "Security Score", value: 98.7, change: 2.3, isPositive: true },
    { label: "Gas Efficiency", value: 94.2, change: 5.1, isPositive: true },
    { label: "Threat Detection", value: 99.1, change: 1.2, isPositive: true },
    { label: "Response Time", value: 0.23, change: -0.05, isPositive: true },
  ])

  const [realtimeMetrics, setRealtimeMetrics] = useState({
    activeScans: 342,
    pendingTransactions: 1247,
    blockedThreats: 23,
    onlineUsers: 8934,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyticsData((prev) => ({
        ...prev,
        totalValue: prev.totalValue + Math.floor(Math.random() * 10000),
        transactionsSecured: prev.transactionsSecured + Math.floor(Math.random() * 5),
        gasSaved: prev.gasSaved + Math.floor(Math.random() * 1000),
        threatsBlocked: prev.threatsBlocked + (Math.random() > 0.8 ? 1 : 0),
      }))

      setRealtimeMetrics((prev) => ({
        activeScans: Math.max(200, prev.activeScans + Math.floor(Math.random() * 20) - 10),
        pendingTransactions: Math.max(800, prev.pendingTransactions + Math.floor(Math.random() * 100) - 50),
        blockedThreats: prev.blockedThreats + (Math.random() > 0.9 ? 1 : 0),
        onlineUsers: Math.max(5000, prev.onlineUsers + Math.floor(Math.random() * 200) - 100),
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`
    return num.toLocaleString()
  }

  const formatCurrency = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`
    if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`
    return `$${num.toLocaleString()}`
  }

  return (
    <section id="analytics" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <Badge
            variant="outline"
            className="border-emerald-500 text-emerald-400 bg-emerald-500/10 px-4 py-2 text-sm font-medium"
          >
            <BarChart3 className="w-4 h-4 mr-2" />
            Real-Time Analytics
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Security Analytics
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Monitor your Web3 security in real-time with advanced analytics, threat detection, and performance metrics
            across all supported blockchain networks.
          </p>
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Primary Metrics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                    <Badge className="bg-emerald-500/20 text-emerald-400 text-xs">Live</Badge>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {formatCurrency(analyticsData.totalValue)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Total Value Protected</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <div className="flex items-center gap-1 text-green-400">
                      <ArrowUp className="w-3 h-3" />
                      <span className="text-xs">+12%</span>
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {formatNumber(analyticsData.transactionsSecured)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Transactions Secured</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                    <div className="flex items-center gap-1 text-green-400">
                      <ArrowUp className="w-3 h-3" />
                      <span className="text-xs">+8%</span>
                    </div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {formatCurrency(analyticsData.gasSaved)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Gas Fees Saved</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-emerald-500/50 transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                    <Badge className="bg-red-500/20 text-red-400 text-xs">Blocked</Badge>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {formatNumber(analyticsData.threatsBlocked)}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">Threats Blocked</div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Trends */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-white">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Performance Trends
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {trendData.map((trend, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300 text-sm sm:text-base">{trend.label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-semibold">
                        {trend.label === "Response Time" ? `${trend.value}s` : `${trend.value}%`}
                      </span>
                      <div
                        className={`flex items-center gap-1 ${trend.isPositive ? "text-green-400" : "text-red-400"}`}
                      >
                        {trend.isPositive ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                        <span className="text-xs">{Math.abs(trend.change)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Real-time Monitoring */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Activity className="w-5 h-5 text-emerald-400" />
                  Live Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Active Scans</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold">{realtimeMetrics.activeScans}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Pending Transactions</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold">{realtimeMetrics.pendingTransactions}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Blocked Threats</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold">{realtimeMetrics.blockedThreats}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Online Users</span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold">{formatNumber(realtimeMetrics.onlineUsers)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-white">
                  <Globe className="w-5 h-5 text-emerald-400" />
                  Network Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Networks Supported</span>
                    <span className="text-white font-semibold">{analyticsData.networksSupported}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Uptime</span>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white font-semibold">{analyticsData.uptimePercentage}%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Avg Response</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-400" />
                      <span className="text-white font-semibold">{analyticsData.avgResponseTime}s</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Active Users</span>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="text-white font-semibold">{formatNumber(analyticsData.activeUsers)}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Insights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Advanced Threat Detection</h3>
              <p className="text-gray-400 text-sm">
                AI-powered security monitoring with 99.1% accuracy in threat identification
              </p>
              <div className="text-2xl font-bold text-emerald-400">2,847</div>
              <div className="text-xs text-gray-500">Threats Blocked This Month</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Gas Optimization</h3>
              <p className="text-gray-400 text-sm">Smart algorithms reducing transaction costs by up to 40%</p>
              <div className="text-2xl font-bold text-blue-400">$8.9M</div>
              <div className="text-xs text-gray-500">Total Gas Fees Saved</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Multi-Chain Coverage</h3>
              <p className="text-gray-400 text-sm">Comprehensive protection across 47 blockchain networks</p>
              <div className="text-2xl font-bold text-purple-400">47</div>
              <div className="text-xs text-gray-500">Supported Networks</div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to see your own analytics dashboard?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get detailed insights into your Web3 security, transaction patterns, and optimization opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">View Your Analytics</span>
              <span className="sm:hidden">Your Analytics</span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 px-6 sm:px-8 py-3 w-full sm:w-auto"
            >
              <Eye className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
