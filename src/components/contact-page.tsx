"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Users,
  Headphones,
  Globe,
  Twitter,
  Github,
  Linkedin,
  DiscIcon as Discord,
  Zap,
  AlertTriangle,
  HelpCircle,
  Star,
  Sparkles,
} from "lucide-react"

interface ContactForm {
  name: string
  email: string
  company: string
  subject: string
  category: string
  message: string
  priority: string
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  company: "",
  subject: "",
  category: "",
  message: "",
  priority: "normal",
}

const contactCategories = [
  { value: "security", label: "Security Audit", icon: Shield },
  { value: "support", label: "Technical Support", icon: Headphones },
  { value: "partnership", label: "Partnership", icon: Users },
  { value: "general", label: "General Inquiry", icon: MessageSquare },
  { value: "bug", label: "Bug Report", icon: AlertTriangle },
  { value: "feature", label: "Feature Request", icon: Star },
]

const priorityLevels = [
  { value: "low", label: "Low Priority", color: "text-green-400" },
  { value: "normal", label: "Normal Priority", color: "text-blue-400" },
  { value: "high", label: "High Priority", color: "text-yellow-400" },
  { value: "urgent", label: "Urgent", color: "text-red-400" },
]

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {}

    if (!form.name.trim()) newErrors.name = "Name is required"
    if (!form.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid"
    if (!form.subject.trim()) newErrors.subject = "Subject is required"
    if (!form.category) newErrors.category = "Category is required"
    if (!form.message.trim()) newErrors.message = "Message is required"
    else if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setShowSuccess(true)
    setForm(initialForm)

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false)
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/connect">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Back</span>
                </Button>
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold hidden sm:inline">DeFiSecure</span>
              </div>
            </div>

            <Link href="/">
              <Button variant="outline" size="sm" className="border-slate-700 text-gray-300 hover:text-white">
                Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Success Message Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-slate-800 border-emerald-500/50 max-w-md w-full animate-in zoom-in-95 duration-300">
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-400 mb-6">Thanks for reaching out to us, we'll contact you as soon as possible</p>
              <Button onClick={() => setShowSuccess(false)} className="bg-emerald-500 hover:bg-emerald-600">
                <Sparkles className="w-4 h-4 mr-2" />
                Continue
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <Badge
            variant="outline"
            className="border-emerald-500 text-emerald-400 bg-emerald-500/10 px-4 py-2 text-sm font-medium"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Contact Our{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Security Experts
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have questions about Web3 security? Need help with our platform? Our team of experts is here to assist you
            with all your DeFi security needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Enter your full name"
                        className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="Enter your email address"
                        className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">
                      Company/Organization
                    </label>
                    <Input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Enter your company name (optional)"
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  {/* Category and Priority Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="category" className="text-sm font-medium text-gray-300">
                        Category *
                      </label>
                      <Select value={form.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger
                          className={`bg-slate-700 border-slate-600 text-white focus:ring-emerald-500 focus:border-emerald-500 ${
                            errors.category ? "border-red-500" : ""
                          }`}
                        >
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          {contactCategories.map((category) => {
                            const IconComponent = category.icon
                            return (
                              <SelectItem key={category.value} value={category.value} className="text-white">
                                <div className="flex items-center gap-2">
                                  <IconComponent className="w-4 h-4" />
                                  {category.label}
                                </div>
                              </SelectItem>
                            )
                          })}
                        </SelectContent>
                      </Select>
                      {errors.category && <p className="text-red-400 text-xs">{errors.category}</p>}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="priority" className="text-sm font-medium text-gray-300">
                        Priority Level
                      </label>
                      <Select value={form.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:ring-emerald-500 focus:border-emerald-500">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          {priorityLevels.map((priority) => (
                            <SelectItem key={priority.value} value={priority.value} className="text-white">
                              <span className={priority.color}>{priority.label}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      value={form.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your inquiry"
                      className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 ${
                        errors.subject ? "border-red-500" : ""
                      }`}
                    />
                    {errors.subject && <p className="text-red-400 text-xs">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide detailed information about your inquiry..."
                      rows={6}
                      className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 resize-none ${
                        errors.message ? "border-red-500" : ""
                      }`}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
                      <p className="text-xs text-gray-400 ml-auto">{form.message.length}/1000</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Contact Information</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:support@defisecure.com"
                        className="text-white hover:text-emerald-400 transition-colors"
                      >
                        support@defisecure.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a href="tel:+15551234567" className="text-white hover:text-emerald-400 transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-emerald-400 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-400">Business Hours</p>
                      <p className="text-white">
                        Mon - Fri: 9:00 AM - 6:00 PM PST
                        <br />
                        24/7 Emergency Support
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Support Options */}
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Quick Support</h3>
                </div>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700"
                  >
                    <HelpCircle className="w-4 h-4 mr-3" />
                    Help Center
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700"
                  >
                    <MessageSquare className="w-4 h-4 mr-3" />
                    Live Chat
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700"
                  >
                    <Globe className="w-4 h-4 mr-3" />
                    System Status
                  </Button>
                </div>
              </CardContent>
            </Card>


            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Security Emergency?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  If you're experiencing a security breach or urgent threat, contact us immediately.
                </p>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Hotline
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
