"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { wallets, getPopularWallets, searchWallets, type Wallet } from "@/lib/wallet-data"
import {
  Shield,
  Zap,
  Globe,
  Search,
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Smartphone,
  Monitor,
  HardDrive,
  Building,
  Coins,
  Star,
  Download,
  Info,
  ChevronRight,
} from "lucide-react"

const categoryIcons = {
  popular: Star,
  hardware: HardDrive,
  mobile: Smartphone,
  browser: Monitor,
  defi: Coins,
  enterprise: Building,
}

const categoryColors = {
  popular: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  hardware: "text-gray-400 bg-gray-500/10 border-gray-500/20",
  mobile: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  browser: "text-green-400 bg-green-500/10 border-green-500/20",
  defi: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  enterprise: "text-orange-400 bg-orange-500/10 border-orange-500/20",
}

export default function WalletConnectionPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isConnecting, setIsConnecting] = useState<string | null>(null)
  const [connectedWallet, setConnectedWallet] = useState<string | null>(null)

  const popularWallets = getPopularWallets()

  const filteredWallets = useMemo(() => {
    let filtered = searchWallets(searchQuery)

    if (selectedCategory !== "all") {
      filtered = filtered.filter((wallet) => wallet.category === selectedCategory)
    }

    return filtered
  }, [searchQuery, selectedCategory])

  const categories = [
    { id: "all", name: "All Wallets", count: wallets.length },
    { id: "popular", name: "Popular", count: wallets.filter((w) => w.category === "popular").length },
    { id: "hardware", name: "Hardware", count: wallets.filter((w) => w.category === "hardware").length },
    { id: "mobile", name: "Mobile", count: wallets.filter((w) => w.category === "mobile").length },
    { id: "browser", name: "Browser", count: wallets.filter((w) => w.category === "browser").length },
    { id: "defi", name: "DeFi", count: wallets.filter((w) => w.category === "defi").length },
    { id: "enterprise", name: "Enterprise", count: wallets.filter((w) => w.category === "enterprise").length },
  ]

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

            <div className="flex items-center gap-4">
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
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Connect Your{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Wallet</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Choose your preferred wallet to connect to DeFiSecure and start protecting your digital assets
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search wallets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
            <CardContent className="p-4 sm:p-6">
              <Shield className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Secure Connection</h3>
              <p className="text-sm text-gray-400">Your wallet credentials are never stored on our servers</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
            <CardContent className="p-4 sm:p-6">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Fast Setup</h3>
              <p className="text-sm text-gray-400">Connect your wallet in just a few clicks</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 text-center">
            <CardContent className="p-4 sm:p-6">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Multi-Chain</h3>
              <p className="text-sm text-gray-400">Support for multiple blockchain networks</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const IconComponent =
                category.id === "all" ? Globe : categoryIcons[category.id as keyof typeof categoryIcons]
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-emerald-500 hover:bg-emerald-600"
                      : "border-slate-700 text-gray-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(" ")[0]}</span>
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </div>

        {/* Popular Wallets (only show when no search query and "all" or "popular" category) */}
        {!searchQuery && (selectedCategory === "all" || selectedCategory === "popular") && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400" />
              Popular Wallets
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {popularWallets.map((wallet) => (
                <WalletCard
                  key={wallet.id}
                  wallet={wallet}
                  isConnecting={isConnecting === wallet.id}
                  isConnected={connectedWallet === wallet.id}
                />
              ))}
            </div>
          </section>
        )}

        {/* All Wallets */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-emerald-400" />
            {searchQuery ? `Search Results (${filteredWallets.length})` : "All Wallets"}
          </h2>

          {filteredWallets.length === 0 ? (
            <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
              <CardContent className="p-8 sm:p-12 text-center">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No wallets found</h3>
                <p className="text-gray-400 mb-4">Try adjusting your search terms or browse different categories</p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("all")
                  }}
                  variant="outline"
                  className="border-slate-700 text-gray-300 hover:text-white"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredWallets.map((wallet) => (
                <WalletCard
                  key={wallet.id}
                  wallet={wallet}
                  isConnecting={isConnecting === wallet.id}
                  isConnected={connectedWallet === wallet.id}
                />
              ))}
            </div>
          )}
        </section>

        {/* Help Section */}
        <section className="mt-16 text-center">
          <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6 sm:p-8">
              <Info className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Need Help?</h3>
              <p className="text-gray-400 mb-4">
                Don't see your wallet or having trouble connecting? We're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/help">
                  <Button variant="outline" className="border-slate-700 text-gray-300 hover:text-white bg-transparent">
                    View Help Center
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="bg-emerald-500 hover:bg-emerald-600">Contact Support</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

interface WalletCardProps {
  wallet: Wallet
  isConnecting: boolean
  isConnected: boolean
}

function WalletCard({ wallet, isConnecting, isConnected }: WalletCardProps) {
  const CategoryIcon = categoryIcons[wallet.category as keyof typeof categoryIcons]

  return (
    <Card className="group bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-12 h-12 bg-gradient-to-r ${wallet.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
          >
            {wallet.icon}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-white truncate">{wallet.name}</h3>
              {wallet.isPopular && <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />}
            </div>

            <Badge
              variant="outline"
              className={`text-xs ${categoryColors[wallet.category as keyof typeof categoryColors]}`}
            >
              <CategoryIcon className="w-3 h-3 mr-1" />
              {wallet.category.charAt(0).toUpperCase() + wallet.category.slice(1)}
            </Badge>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-4 leading-relaxed">{wallet.description}</p>

        {/* Networks */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {wallet.networks.slice(0, 3).map((network) => (
              <Badge key={network} variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                {network}
              </Badge>
            ))}
            {wallet.networks.length > 3 && (
              <Badge variant="secondary" className="text-xs bg-slate-700 text-gray-300">
                +{wallet.networks.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="space-y-1">
            {wallet.features.slice(0, 2).map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle className="w-3 h-3 text-emerald-400" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Link href={`/wallet-setup/${wallet.id}`}>
            <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500">
              Connect {wallet.name}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          {wallet.downloadUrl && wallet.id !== "other" && (
            <a href={wallet.downloadUrl} target="_blank" rel="noopener noreferrer" className="block">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-slate-700 text-gray-300 hover:text-white text-xs bg-transparent"
              >
                <Download className="w-3 h-3 mr-2" />
                Download Wallet
                <ExternalLink className="w-3 h-3 ml-2" />
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
