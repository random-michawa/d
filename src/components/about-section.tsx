"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Shield,
  Award,
  Globe,
  Heart,
  Code,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Calendar,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

interface TeamMember {
  name: string
  role: string
  bio: string
  avatar: string
  expertise: string[]
  social: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former Ethereum core developer with 8+ years in blockchain security. Led security audits for $2B+ in DeFi protocols.",
    avatar: "/sarah.jpg?height=120&width=120",
    expertise: ["Blockchain Security", "Smart Contracts", "DeFi Protocols"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Dr. James Wilson",
    role: "CTO & Co-Founder",
    bio: "PhD in Cryptography from MIT. Previously led security teams at ConsenSys and built enterprise blockchain solutions.",
    avatar: "/man.jpeg?height=120&width=120",
    expertise: ["Cryptography", "Security Architecture", "AI/ML"],
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Elena Vasquez",
    role: "Head of Engineering",
    bio: "Full-stack engineer with expertise in distributed systems. Built scalable infrastructure for 10M+ users.",
    avatar: "/elena.jpg?height=120&width=120",
    expertise: ["Distributed Systems", "Backend Engineering", "DevOps"],
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "John Mike",
    role: "Head of Product",
    bio: "Product strategist with 6+ years in fintech. Led product teams at major DeFi protocols and traditional finance.",
    avatar: "john.jpg?height=120&width=120",
    expertise: ["Product Strategy", "UX Design", "Market Research"],
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
]

const milestones = [
  {
    year: "2022",
    title: "Company Founded",
    description: "DeFiSecure was born from a vision to make Web3 safer for everyone",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "First Major Protocol Secured",
    description: "Successfully prevented a $5M exploit in our first major client engagement",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    year: "2023",
    title: "Series A Funding",
    description: "Raised $15M to expand our security platform and team",
    icon: <TrendingUp className="w-5 h-5" />,
  },
  {
    year: "2024",
    title: "50M+ Protected",
    description: "Reached milestone of protecting over $50M in digital assets",
    icon: <Award className="w-5 h-5" />,
  },
]

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security First",
    description: "Every decision we make prioritizes the security and safety of our users' digital assets.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Community Driven",
    description: "We build for the community, with the community, creating tools that truly serve user needs.",
    color: "text-red-400",
    bgColor: "bg-red-500/10",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible in Web3 security through cutting-edge technology.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Accessibility",
    description: "Making advanced security tools accessible to everyone, from beginners to DeFi veterans.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
]

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"team" | "story" | "values">("story")

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <Badge
            variant="outline"
            className="border-emerald-500 text-emerald-400 bg-emerald-500/10 px-4 py-2 text-sm font-medium"
          >
            <Users className="w-4 h-4 mr-2" />
            About DeFiSecure
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Building the{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Future of Web3 Security
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're a team of security experts, blockchain engineers, and product innovators dedicated to making Web3
            safer and more accessible for everyone.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-1 border border-slate-700">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab("story")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all ${
                  activeTab === "story"
                    ? "bg-emerald-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                Our Story
              </button>
              <button
                onClick={() => setActiveTab("team")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all ${
                  activeTab === "team"
                    ? "bg-emerald-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                Our Team
              </button>
              <button
                onClick={() => setActiveTab("values")}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base font-medium transition-all ${
                  activeTab === "values"
                    ? "bg-emerald-500 text-white"
                    : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                Our Values
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Our Story Tab */}
          {activeTab === "story" && (
            <div className="space-y-12 sm:space-y-16">
              {/* Mission Statement */}
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Mission</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To democratize Web3 security by providing advanced, AI-powered tools that protect digital assets and
                  empower users to navigate the decentralized ecosystem with confidence.
                </p>
              </div>

              {/* Company Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">$50M+</div>
                    <div className="text-sm sm:text-base text-gray-400">Assets Protected</div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">500+</div>
                    <div className="text-sm sm:text-base text-gray-400">Exploits Prevented</div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">15K+</div>
                    <div className="text-sm sm:text-base text-gray-400">Active Users</div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">47</div>
                    <div className="text-sm sm:text-base text-gray-400">Networks Supported</div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline */}
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Our Journey</h3>
                <div className="space-y-6 sm:space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
                          {milestone.icon}
                        </div>
                      </div>
                      <div className="flex-1 pb-6 sm:pb-8 border-b border-slate-800 last:border-b-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <Badge className="bg-emerald-500/20 text-emerald-400 w-fit">{milestone.year}</Badge>
                          <h4 className="text-lg sm:text-xl font-semibold text-white">{milestone.title}</h4>
                        </div>
                        <p className="text-gray-400">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Our Team Tab */}
          {activeTab === "team" && (
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Meet Our Team</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Our diverse team of experts brings together decades of experience in blockchain security, software
                  engineering, and product development.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {teamMembers.map((member, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                  >
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                          <img
                            src={member.avatar || "/placeholder.svg"}
                            alt={member.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors object-cover shadow-lg"
                          />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">{member.name}</h4>
                          <p className="text-emerald-400 text-sm sm:text-base mb-3">{member.role}</p>
                          <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>

                          <div className="flex flex-wrap gap-2 justify-center sm:justify-start mb-4">
                            {member.expertise.map((skill, skillIndex) => (
                              <Badge
                                key={skillIndex}
                                variant="outline"
                                className="border-slate-600 text-gray-400 text-xs"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>

                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Our Values Tab */}
          {activeTab === "values" && (
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Core Values</h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  These principles guide everything we do, from product development to customer support.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 group"
                  >
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div
                        className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <div className={value.color}>{value.icon}</div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Want to Join Our Mission?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for Web3 security and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Contact Us</span>
                <span className="sm:hidden">Contact</span>
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800 px-6 sm:px-8 py-3 w-full sm:w-auto bg-transparent"
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">View Careers</span>
              <span className="sm:hidden">Careers</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
