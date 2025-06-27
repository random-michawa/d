"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, ArrowLeft, FileText, AlertTriangle, CheckCircle, Calendar, Scale } from "lucide-react"

export default function TermsOfServicePage() {
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
              <FileText className="w-4 h-4 mr-2" />
              Terms of Service
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Terms of{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using DeFiSecure. By using our services, you agree to be bound by
              these terms.
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
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    Acceptance of Terms
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      By accessing or using DeFiSecure's services, you agree to be bound by these Terms of Service and
                      all applicable laws and regulations. If you do not agree with any of these terms, you are
                      prohibited from using our services.
                    </p>

                    <p>
                      These terms apply to all users of the service, including without limitation users who are
                      browsers, vendors, customers, merchants, and contributors of content.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Service Description</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>DeFiSecure provides Web3 security services including:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Wallet security scanning and monitoring</li>
                      <li>Transaction analysis and threat detection</li>
                      <li>Gas optimization recommendations</li>
                      <li>Smart contract security audits</li>
                      <li>Multi-chain security analytics</li>
                      <li>Real-time threat alerts and notifications</li>
                    </ul>

                    <p className="mt-4">
                      Our services are provided "as is" and we reserve the right to modify, suspend, or discontinue any
                      part of our services at any time.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">User Responsibilities</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>As a user of DeFiSecure, you agree to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Provide accurate and complete information when using our services</li>
                      <li>Maintain the security of your account credentials</li>
                      <li>Use our services only for lawful purposes</li>
                      <li>Not attempt to gain unauthorized access to our systems</li>
                      <li>Not interfere with or disrupt our services</li>
                      <li>Comply with all applicable laws and regulations</li>
                    </ul>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-6">
                      <p className="text-yellow-400 font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Important Responsibility:
                      </p>
                      <p>
                        You are solely responsible for the security of your private keys, seed phrases, and wallet
                        credentials. DeFiSecure cannot recover lost or compromised wallet access.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Prohibited Uses</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>You may not use our services:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                      <li>To violate any international, federal, provincial, or state regulations or laws</li>
                      <li>
                        To infringe upon or violate our intellectual property rights or the intellectual property rights
                        of others
                      </li>
                      <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                      <li>To submit false or misleading information</li>
                      <li>To upload or transmit viruses or any other type of malicious code</li>
                      <li>To collect or track the personal information of others</li>
                      <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      The service and its original content, features, and functionality are and will remain the
                      exclusive property of DeFiSecure and its licensors. The service is protected by copyright,
                      trademark, and other laws.
                    </p>

                    <p>
                      Our trademarks and trade dress may not be used in connection with any product or service without
                      our prior written consent.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                    Disclaimers and Limitations
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                      <h3 className="text-xl font-semibold text-white mb-3">Important Disclaimers:</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          <strong>No Financial Advice:</strong> Our services do not constitute financial, investment, or
                          trading advice
                        </li>
                        <li>
                          <strong>Security Limitations:</strong> No security system is 100% foolproof; use our services
                          as one part of your security strategy
                        </li>
                        <li>
                          <strong>Blockchain Risks:</strong> Blockchain transactions are irreversible and we cannot
                          recover lost funds
                        </li>
                        <li>
                          <strong>Third-Party Risks:</strong> We are not responsible for the security or actions of
                          third-party wallets or protocols
                        </li>
                      </ul>
                    </div>

                    <p className="mt-4">
                      THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED,
                      INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                      PURPOSE, OR NON-INFRINGEMENT.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Scale className="w-6 h-6 text-emerald-400" />
                    Limitation of Liability
                  </h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      IN NO EVENT SHALL DEFISECURE, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES
                      BE LIABLE FOR:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                      <li>Any loss of profits, revenues, data, use, goodwill, or other intangible losses</li>
                      <li>Any damages resulting from your use or inability to use the services</li>
                      <li>Any damages resulting from any unauthorized access to or use of our servers</li>
                      <li>
                        Any damages resulting from any interruption or cessation of transmission to or from our services
                      </li>
                    </ul>

                    <p className="mt-4">
                      OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE
                      TWELVE (12) MONTHS PRECEDING THE CLAIM.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      You agree to defend, indemnify, and hold harmless DeFiSecure and its licensee and licensors, and
                      their employees, contractors, agents, officers and directors, from and against any and all claims,
                      damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited
                      to attorney's fees).
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We may terminate or suspend your account and bar access to the service immediately, without prior
                      notice or liability, under our sole discretion, for any reason whatsoever and without limitation,
                      including but not limited to a breach of the Terms.
                    </p>

                    <p>If you wish to terminate your account, you may simply discontinue using the service.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      These Terms shall be interpreted and governed by the laws of the State of California, United
                      States, without regard to its conflict of law provisions.
                    </p>

                    <p>
                      Our failure to enforce any right or provision of these Terms will not be considered a waiver of
                      those rights.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                      revision is material, we will provide at least 30 days notice prior to any new terms taking
                      effect.
                    </p>

                    <p>
                      What constitutes a material change will be determined at our sole discretion. By continuing to
                      access or use our service after any revisions become effective, you agree to be bound by the
                      revised terms.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <div className="text-gray-300 space-y-4">
                    <p>If you have any questions about these Terms of Service, please contact us:</p>
                    <div className="bg-slate-700/50 rounded-lg p-4 space-y-2">
                      <p>
                        <strong>Email:</strong>{" "}
                        <a href="mailto:legal@defisecure.com" className="text-emerald-400 hover:text-emerald-300">
                          legal@defisecure.com
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
