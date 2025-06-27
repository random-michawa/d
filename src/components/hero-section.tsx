"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Globe, TrendingUp, CheckCircle, RefreshCw, ArrowRight, Wallet } from "lucide-react"

export default function HeroSection() {
  const [stats, setStats] = useState({
    connections: 847, // More realistic starting number
    secured: 94.2, // More realistic security score
    saved: 1.2, // More realistic gas savings in millions
  })

  const [securityStatus, setSecurityStatus] = useState("Scanning...")
  const [isScanning, setIsScanning] = useState(true)

  useEffect(() => {
    // Simulate real-time stats updates with more realistic increments
    const interval = setInterval(() => {
      setStats((prev) => ({
        connections: prev.connections + Math.floor(Math.random() * 2), // Increment by 0-1
        secured: Math.min(99.9, prev.secured + Math.random() * 0.05), // Small increments
        saved: prev.saved + Math.random() * 0.02, // Small gas savings increments
      }))
    }, 5000) // Update every 5 seconds instead of 3

    // Rest of the useEffect remains the same
    const scanTimeout = setTimeout(() => {
      setSecurityStatus("Secure")
      setIsScanning(false)
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(scanTimeout)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

      {/* Floating Elements - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-float"></div>
      <div
        className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <Badge
                variant="outline"
                className="border-emerald-500 text-emerald-400 bg-emerald-500/10 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium animate-pulse"
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Advanced Web3 Security Platform
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Secure Your{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Web3 Journey
                </span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto lg:mx-0">
                Advanced security tools, real-time monitoring, and intelligent automation to protect your digital assets
                across all blockchain networks.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400">
                  {stats.connections.toLocaleString()}+
                </div>
                <div className="text-xs sm:text-sm text-gray-500">Active Connections</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400">
                  {stats.secured.toFixed(1)}%
                </div>
                <div className="text-xs sm:text-sm text-gray-500">Security Score</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-emerald-400">
                  ${stats.saved.toFixed(1)}M
                </div>
                <div className="text-xs sm:text-sm text-gray-500">Gas Saved</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              <Link href="/connect">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group w-full sm:w-auto"
                >
                  <Wallet className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Connect Wallet
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/connect">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-white hover:bg-slate-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg group w-full sm:w-auto bg-transparent"
                >
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Validate Wallet
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side - Interactive Security Dashboard */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Main Security Card */}
              <Card className="w-full bg-slate-800/50 backdrop-blur-sm border-slate-700 shadow-2xl">
                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="hidden sm:inline">Security Dashboard</span>
                      <span className="sm:hidden">Security</span>
                    </h3>
                    <Badge className={`${isScanning ? "bg-yellow-500" : "bg-emerald-500"} text-white text-xs`}>
                      {isScanning ? "Scanning" : "Secure"}
                    </Badge>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm sm:text-base">Wallet Status</span>
                      <div className="flex items-center gap-2">
                        {isScanning ? (
                          <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 animate-spin text-yellow-500" />
                        ) : (
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                        )}
                        <span className="text-white text-sm sm:text-base">{securityStatus}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm sm:text-base">Network</span>
                      <div className="flex items-center gap-2">
                        <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                        <span className="text-white text-sm:text-base">Multi-Chain</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm sm:text-base">Gas Optimization</span>
                      <Badge className="bg-emerald-500 text-white text-xs">
                        <Zap className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        Active
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm sm:text-base">Threat Detection</span>
                      <Badge className="bg-emerald-500 text-white text-xs">
                        <Shield className="w-2 h-2 sm:w-3 sm:h-3 mr-1" />
                        Protected
                      </Badge>
                    </div>
                  </div>

                  <Link href="/connect">
                    <Button
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 py-2 sm:py-3 text-sm sm:text-base"
                      disabled={isScanning}
                    >
                      {isScanning ? (
                        <>
                          <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 mr-2 animate-spin" />
                          <span className="hidden sm:inline">Running Diagnostics...</span>
                          <span className="sm:hidden">Scanning...</span>
                        </>
                      ) : (
                        <>
                          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                          <span className="hidden sm:inline">View Full Report</span>
                          <span className="sm:hidden">View Report</span>
                        </>
                      )}
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Floating Status Cards - Hidden on mobile */}
              <Card className="hidden sm:block absolute -top-4 -left-4 bg-emerald-500/20 backdrop-blur-sm border-emerald-500/30 p-3 animate-float">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">No Threats Detected</span>
                </div>
              </Card>

              <Card
                className="hidden sm:block absolute -bottom-4 -right-4 bg-teal-500/20 backdrop-blur-sm border-teal-500/30 p-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2 text-teal-400">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">Gas Saved: 23%</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
