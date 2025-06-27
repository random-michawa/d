"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, ArrowLeft, Cookie, Settings, BarChart3, Calendar, Eye } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Back to Home</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold hidden sm:inline">DeFiSecure</span>
              </div>
            </div>

            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-700 text-gray-300 hover:text-white bg-transparent"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 space-y-4">
            <Badge
              variant="outline"
              className="border-emerald-500 text-emerald-400 bg-emerald-500/10 px-4 py-2 text-sm font-medium"
            >
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Cookie{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Learn about how DeFiSecure uses cookies and similar technologies to improve your experience and provide
              our services.
            </p>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Last updated: December 27, 2024</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="prose prose-invert prose-emerald max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Cookie className="w-6 h-6 text-emerald-400" />
                    What Are Cookies?
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Cookies are small text files that are placed on your computer or mobile device when you visit a
                      website. They are widely used to make websites work more efficiently and provide information to
                      website owners.
                    </p>

                    <p>Cookies allow us to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Remember your preferences and settings</li>
                      <li>Understand how you use our website</li>
                      <li>Improve your user experience</li>
                      <li>Provide personalized content and features</li>
                      <li>Analyze website performance and usage</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Settings className="w-6 h-6 text-emerald-400" />
                    Types of Cookies We Use
                  </h2>
                  <div className="text-gray-300 space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                      <p className="mb-2">
                        These cookies are necessary for the website to function properly and cannot be disabled.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Authentication and security cookies</li>
                        <li>Session management cookies</li>
                        <li>Load balancing cookies</li>
                        <li>Security and fraud prevention cookies</li>
                      </ul>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                      <p className="mb-2">These cookies enable enhanced functionality and personalization.</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>User preference cookies (theme, language)</li>
                        <li>Wallet connection state cookies</li>
                        <li>Feature toggle cookies</li>
                        <li>Accessibility settings cookies</li>
                      </ul>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                      <p className="mb-2">These cookies help us understand how visitors interact with our website.</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Google Analytics cookies</li>
                        <li>Performance monitoring cookies</li>
                        <li>User behavior tracking cookies</li>
                        <li>A/B testing cookies</li>
                      </ul>
                    </div>

                    <div className="bg-slate-700/30 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                      <p className="mb-2">
                        These cookies are used to deliver relevant advertisements and track campaign effectiveness.
                      </p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>Social media integration cookies</li>
                        <li>Advertising network cookies</li>
                        <li>Conversion tracking cookies</li>
                        <li>Retargeting cookies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-emerald-400" />
                    Third-Party Cookies
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We use several third-party services that may set cookies on your device:</p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Google Analytics</h3>
                        <p className="text-sm mb-2">Helps us understand website usage and performance</p>
                        <p className="text-xs text-gray-400">
                          Learn more:{" "}
                          <a
                            href="https://policies.google.com/privacy"
                            className="text-emerald-400 hover:text-emerald-300"
                          >
                            Google Privacy Policy
                          </a>
                        </p>
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Intercom</h3>
                        <p className="text-sm mb-2">Powers our customer support chat widget</p>
                        <p className="text-xs text-gray-400">
                          Learn more:{" "}
                          <a href="https://intercom.com/privacy" className="text-emerald-400 hover:text-emerald-300">
                            Intercom Privacy Policy
                          </a>
                        </p>
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Hotjar</h3>
                        <p className="text-sm mb-2">Provides heatmaps and user session recordings</p>
                        <p className="text-xs text-gray-400">
                          Learn more:{" "}
                          <a href="https://hotjar.com/privacy" className="text-emerald-400 hover:text-emerald-300">
                            Hotjar Privacy Policy
                          </a>
                        </p>
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Social Media</h3>
                        <p className="text-sm mb-2">Twitter, LinkedIn, and other social platforms</p>
                        <p className="text-xs text-gray-400">Each platform has its own privacy policy</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Cookie Duration</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>Cookies can be categorized by how long they remain on your device:</p>

                    <div className="space-y-4">
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Session Cookies</h3>
                        <p className="text-sm">
                          These are temporary cookies that are deleted when you close your browser. They help us
                          maintain your session while you navigate our website.
                        </p>
                      </div>

                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">Persistent Cookies</h3>
                        <p className="text-sm">
                          These cookies remain on your device for a set period (ranging from minutes to years) or until
                          you delete them. They help us remember your preferences across visits.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Eye className="w-6 h-6 text-emerald-400" />
                    Managing Your Cookie Preferences
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>You have several options for managing cookies:</p>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-white mb-2">Browser Settings</h3>
                      <p className="mb-2">Most browsers allow you to:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>View and delete cookies</li>
                        <li>Block cookies from specific websites</li>
                        <li>Block third-party cookies</li>
                        <li>Clear all cookies when you close the browser</li>
                        <li>Set up notifications when cookies are being set</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-white">Browser-Specific Instructions:</h3>
                      <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                        <li>
                          <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                        </li>
                        <li>
                          <strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data
                        </li>
                        <li>
                          <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
                        </li>
                        <li>
                          <strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data
                        </li>
                      </ul>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                      <p className="text-yellow-400 font-semibold mb-2">Important Note:</p>
                      <p className="text-sm">
                        Disabling certain cookies may affect the functionality of our website and limit your access to
                        some features.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Opt-Out Options</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>You can opt out of specific tracking services:</p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                        <span>Google Analytics</span>
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          className="text-emerald-400 hover:text-emerald-300 text-sm"
                        >
                          Opt Out
                        </a>
                      </div>

                      <div className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                        <span>Google Ads</span>
                        <a
                          href="https://adssettings.google.com"
                          className="text-emerald-400 hover:text-emerald-300 text-sm"
                        >
                          Manage Settings
                        </a>
                      </div>

                      <div className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                        <span>Network Advertising Initiative</span>
                        <a
                          href="https://optout.networkadvertising.org"
                          className="text-emerald-400 hover:text-emerald-300 text-sm"
                        >
                          Opt Out
                        </a>
                      </div>

                      <div className="flex items-center justify-between bg-slate-700/30 rounded-lg p-3">
                        <span>Digital Advertising Alliance</span>
                        <a
                          href="https://optout.aboutads.info"
                          className="text-emerald-400 hover:text-emerald-300 text-sm"
                        >
                          Opt Out
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Updates to This Policy</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We may update this Cookie Policy from time to time to reflect changes in our practices or for
                      other operational, legal, or regulatory reasons.
                    </p>

                    <p>
                      When we make changes, we will update the "Last updated" date at the top of this policy and notify
                      you through our website or other appropriate means.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us:</p>
                    <div className="bg-slate-700/50 rounded-lg p-4 space-y-2">
                      <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:privacy@defisecure.com" className="text-emerald-400 hover:text-emerald-300">
                          privacy@defisecure.com
                        </a>
                      </p>
                      <p>
                        <strong>Address:</strong> 123 Blockchain Street, San Francisco, CA 94105
                      </p>
                      <p>
                        <strong>Phone:</strong> +1 (555) 123-4567
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
