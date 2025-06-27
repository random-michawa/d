"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wallet, Menu, X, Shield, Zap, Globe, Home, BarChart3, FileText, Users, ArrowRight } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent background scroll
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const handleConnect = () => {
    setIsConnected(!isConnected)
  }

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const scrollToAnalytics = () => {
    document.getElementById("analytics")?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="relative">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden xs:block">
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  DeFiSecure
                </span>
                <Badge
                  variant="secondary"
                  className="ml-2 text-xs bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hidden sm:inline-flex"
                >
                  v2.0
                </Badge>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Home
              </Link>

              <button
                onClick={scrollToFeatures}
                className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
              >
                Features
              </button>

              <button
                onClick={scrollToAnalytics}
                className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
              >
                Analytics
              </button>

              <Link href="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors font-medium">
                Blog
              </Link>

              <button
                onClick={scrollToAbout}
                className="text-gray-300 hover:text-emerald-400 transition-colors font-medium"
              >
                About
              </button>
            </nav>

            {/* Desktop Connect Button & Mobile Menu Button */}
            <div className="flex items-center gap-3 sm:gap-4">
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

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-gray-300 hover:text-white p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/98 backdrop-blur-md border-l border-slate-800 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">DeFiSecure</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="px-6 space-y-2">
              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span className="font-medium">Home</span>
              </Link>

              <button
                onClick={scrollToFeatures}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                <Shield className="w-5 h-5" />
                <span className="font-medium">Features</span>
              </button>

              <button
                onClick={scrollToAnalytics}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                <BarChart3 className="w-5 h-5" />
                <span className="font-medium">Analytics</span>
              </button>

              <Link
                href="/blog"
                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileText className="w-5 h-5" />
                <span className="font-medium">Blog</span>
              </Link>

              <button
                onClick={scrollToAbout}
                className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all"
              >
                <Users className="w-5 h-5" />
                <span className="font-medium">About Us</span>
              </button>
            </nav>

            {/* Mobile Menu Features Section */}
            <div className="px-6 mt-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Quick Access</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm">Security Audit</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all">
                  <Zap className="w-5 h-5" />
                  <span className="text-sm">Gas Optimizer</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-all">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm">Multi-Chain</span>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-slate-800">
            <div className="space-y-4">
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

              <div className="text-center">
                <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                  v2.0 - Secure & Fast
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
