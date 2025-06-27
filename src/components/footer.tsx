"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Github,
  Linkedin,
  DiscIcon as Discord,
  TextIcon as Telegram,
  ArrowRight,
  Heart,
  ChevronUp,
} from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      {/* Newsletter Section */}
      <section className="relative py-12 sm:py-16 border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-emerald-500/20 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Stay Ahead of Web3 Threats</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Get the latest security insights, threat alerts, and product updates delivered to your inbox. Join
                    15,000+ security-conscious users.
                  </p>
                </div>

                <div className="space-y-4">
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      required
                    />
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 px-6 py-3 whitespace-nowrap"
                    >
                      {isSubscribed ? (
                        <>
                          <Shield className="w-4 h-4 mr-2" />
                          Subscribed!
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                  <p className="text-xs text-gray-500">
                    No spam, unsubscribe at any time. Read our{" "}
                    <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="relative py-6 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span>© 2024 DeFiSecure. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookies" className="hover:text-emerald-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400" />
                <span>for Web3</span>
              </div>

              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-emerald-400 hover:bg-slate-800"
              >
                <ChevronUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
