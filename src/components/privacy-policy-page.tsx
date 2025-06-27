"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, ArrowLeft, Lock, Eye, Database, UserCheck, Mail, Calendar } from "lucide-react"

export default function PrivacyPolicyPage() {
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
              <Lock className="w-4 h-4 mr-2" />
              Privacy Policy
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Your Privacy{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Matters to Us
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Learn how DeFiSecure protects your privacy and handles your personal information with the highest security
              standards.
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
                    <Eye className="w-6 h-6 text-emerald-400" />
                    Information We Collect
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We collect information you provide directly to us, such as when you:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Create an account or connect your wallet</li>
                      <li>Use our security scanning and monitoring services</li>
                      <li>Contact us for support or inquiries</li>
                      <li>Subscribe to our newsletter or communications</li>
                      <li>Participate in surveys or feedback programs</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Types of Information</h3>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Wallet Information:</strong> Public wallet addresses, transaction hashes, and blockchain
                        interaction data
                      </li>
                      <li>
                        <strong>Contact Information:</strong> Email address, name, and communication preferences
                      </li>
                      <li>
                        <strong>Usage Data:</strong> How you interact with our platform, features used, and performance
                        metrics
                      </li>
                      <li>
                        <strong>Technical Data:</strong> IP address, browser type, device information, and access logs
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Database className="w-6 h-6 text-emerald-400" />
                    How We Use Your Information
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide, maintain, and improve our security services</li>
                      <li>Monitor and analyze blockchain transactions for security threats</li>
                      <li>Send you technical notices, updates, and security alerts</li>
                      <li>Respond to your comments, questions, and customer service requests</li>
                      <li>Develop new features and enhance user experience</li>
                      <li>Comply with legal obligations and protect against fraud</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Lock className="w-6 h-6 text-emerald-400" />
                    Information Security
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We implement industry-standard security measures to protect your information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Encryption:</strong> All data is encrypted in transit and at rest using AES-256
                        encryption
                      </li>
                      <li>
                        <strong>Access Controls:</strong> Strict access controls and authentication mechanisms
                      </li>
                      <li>
                        <strong>Regular Audits:</strong> Regular security audits and penetration testing
                      </li>
                      <li>
                        <strong>Data Minimization:</strong> We only collect and retain necessary information
                      </li>
                      <li>
                        <strong>Secure Infrastructure:</strong> Cloud infrastructure with enterprise-grade security
                      </li>
                    </ul>

                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 mt-6">
                      <p className="text-emerald-400 font-semibold mb-2">Important Security Note:</p>
                      <p>
                        We never store your private keys, seed phrases, or wallet passwords. These remain under your
                        complete control at all times.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <UserCheck className="w-6 h-6 text-emerald-400" />
                    Information Sharing
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties except in
                      the following circumstances:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Service Providers:</strong> Trusted third-party services that help us operate our
                        platform
                      </li>
                      <li>
                        <strong>Legal Requirements:</strong> When required by law, regulation, or legal process
                      </li>
                      <li>
                        <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                      </li>
                      <li>
                        <strong>Consent:</strong> When you have given us explicit consent to share your information
                      </li>
                    </ul>

                    <p className="mt-4">
                      All third-party service providers are contractually bound to protect your information and use it
                      only for specified purposes.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Your Rights and Choices</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>You have the following rights regarding your personal information:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong>Access:</strong> Request access to your personal information
                      </li>
                      <li>
                        <strong>Correction:</strong> Request correction of inaccurate information
                      </li>
                      <li>
                        <strong>Deletion:</strong> Request deletion of your personal information
                      </li>
                      <li>
                        <strong>Portability:</strong> Request a copy of your data in a portable format
                      </li>
                      <li>
                        <strong>Opt-out:</strong> Unsubscribe from marketing communications
                      </li>
                      <li>
                        <strong>Restriction:</strong> Request restriction of processing in certain circumstances
                      </li>
                    </ul>

                    <p className="mt-4">
                      To exercise these rights, please contact us at{" "}
                      <a href="mailto:privacy@defisecure.com" className="text-emerald-400 hover:text-emerald-300">
                        privacy@defisecure.com
                      </a>
                      .
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We use cookies and similar tracking technologies to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze how our platform is used</li>
                      <li>Provide personalized content and features</li>
                      <li>Improve our services and user experience</li>
                    </ul>

                    <p className="mt-4">
                      You can control cookies through your browser settings. For more information, see our{" "}
                      <Link href="/cookies" className="text-emerald-400 hover:text-emerald-300">
                        Cookie Policy
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>We retain your information for as long as necessary to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide our services to you</li>
                      <li>Comply with legal obligations</li>
                      <li>Resolve disputes and enforce agreements</li>
                      <li>Improve our services and security</li>
                    </ul>

                    <p className="mt-4">
                      When information is no longer needed, we securely delete or anonymize it according to our data
                      retention policies.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      Your information may be transferred to and processed in countries other than your own. We ensure
                      that such transfers comply with applicable data protection laws and implement appropriate
                      safeguards.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We may update this Privacy Policy from time to time. We will notify you of any material changes
                      by:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Posting the updated policy on our website</li>
                      <li>Sending you an email notification</li>
                      <li>Displaying a prominent notice on our platform</li>
                    </ul>

                    <p className="mt-4">
                      Your continued use of our services after any changes indicates your acceptance of the updated
                      policy.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Mail className="w-6 h-6 text-emerald-400" />
                    Contact Us
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
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
