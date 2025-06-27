export interface Wallet {
  id: string
  name: string
  description: string
  icon: string
  category: "popular" | "hardware" | "mobile" | "browser" | "defi" | "enterprise"
  networks: string[]
  features: string[]
  isPopular?: boolean
  color: string
  downloadUrl?: string
}

export const wallets: Wallet[] = [
  // Popular Wallets
  {
    id: "metamask",
    name: "MetaMask",
    description: "The most popular Ethereum wallet with browser extension and mobile app options.",
    icon: "🦊",
    category: "popular",
    networks: ["Ethereum", "Polygon", "BSC", "Avalanche", "Arbitrum", "Optimism"],
    features: ["Browser Extension", "Mobile App", "Hardware Wallet Support"],
    isPopular: true,
    color: "from-orange-500 to-yellow-500",
    downloadUrl: "https://metamask.io",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    description: "Connect to mobile wallets using QR codes. Works with most major wallets.",
    icon: "🔗",
    category: "popular",
    networks: ["Multi-Chain"],
    features: ["QR Code Connection", "Mobile First", "Universal Protocol"],
    isPopular: true,
    color: "from-blue-500 to-cyan-500",
    downloadUrl: "https://walletconnect.com",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    description: "Secure crypto wallet from Coinbase. Easy to use for beginners.",
    icon: "🔵",
    category: "popular",
    networks: ["Ethereum", "Polygon", "BSC", "Avalanche"],
    features: ["Beginner Friendly", "DeFi Integration", "NFT Support"],
    isPopular: true,
    color: "from-blue-600 to-purple-600",
    downloadUrl: "https://wallet.coinbase.com",
  },

  // Hardware Wallets
  {
    id: "ledger",
    name: "Ledger",
    description: "Connect your hardware wallet for maximum security of your assets.",
    icon: "🔒",
    category: "hardware",
    networks: ["Ethereum", "Bitcoin", "Polygon", "BSC", "Avalanche", "Solana"],
    features: ["Hardware Security", "Multi-Currency", "Offline Storage"],
    color: "from-gray-600 to-gray-800",
    downloadUrl: "https://ledger.com",
  },
  {
    id: "trezor",
    name: "Trezor",
    description: "Hardware wallet with advanced security features and open-source design.",
    icon: "🛡️",
    category: "hardware",
    networks: ["Ethereum", "Bitcoin", "Polygon", "BSC"],
    features: ["Open Source", "Advanced Security", "Multi-Currency"],
    color: "from-green-600 to-emerald-600",
    downloadUrl: "https://trezor.io",
  },

  // Mobile Wallets
  {
    id: "trust",
    name: "Trust Wallet",
    description: "Multi-chain crypto wallet with a focus on security and simplicity.",
    icon: "🛡️",
    category: "mobile",
    networks: ["Ethereum", "BSC", "Polygon", "Avalanche", "Solana", "Cosmos"],
    features: ["Multi-Chain", "DeFi Browser", "Staking"],
    color: "from-blue-500 to-teal-500",
    downloadUrl: "https://trustwallet.com",
  },
  {
    id: "phantom",
    name: "Phantom",
    description: "Popular wallet for Solana blockchain with a user-friendly interface.",
    icon: "👻",
    category: "mobile",
    networks: ["Solana", "Ethereum", "Polygon"],
    features: ["Solana Native", "NFT Gallery", "DeFi Integration"],
    color: "from-purple-500 to-pink-500",
    downloadUrl: "https://phantom.app",
  },
  {
    id: "rainbow",
    name: "Rainbow",
    description: "Ethereum wallet with beautiful design and strong focus on user experience.",
    icon: "🌈",
    category: "mobile",
    networks: ["Ethereum", "Polygon", "Arbitrum", "Optimism"],
    features: ["Beautiful UI", "NFT Focus", "Social Features"],
    color: "from-pink-500 to-purple-500",
    downloadUrl: "https://rainbow.me",
  },

  // Browser Wallets
  {
    id: "brave",
    name: "Brave Wallet",
    description: "Built-in wallet for Brave browser with privacy-focused features.",
    icon: "🦁",
    category: "browser",
    networks: ["Ethereum", "Solana", "Filecoin"],
    features: ["Privacy Focused", "Built-in Browser", "Multi-Chain"],
    color: "from-orange-600 to-red-600",
    downloadUrl: "https://brave.com/wallet",
  },
  {
    id: "opera",
    name: "Opera Wallet",
    description: "Integrated crypto wallet in Opera browser with Web3 features.",
    icon: "🎭",
    category: "browser",
    networks: ["Ethereum", "Polygon", "BSC"],
    features: ["Browser Integration", "VPN Support", "Web3 Ready"],
    color: "from-red-500 to-pink-500",
    downloadUrl: "https://opera.com",
  },

  // DeFi Wallets
  {
    id: "argent",
    name: "Argent",
    description: "Smart contract wallet with enhanced security features and social recovery.",
    icon: "🔐",
    category: "defi",
    networks: ["Ethereum", "Polygon", "Arbitrum"],
    features: ["Smart Contract", "Social Recovery", "DeFi Native"],
    color: "from-indigo-500 to-purple-500",
    downloadUrl: "https://argent.xyz",
  },
  {
    id: "gnosis",
    name: "Gnosis Safe",
    description: "Multi-signature wallet for teams and organizations with advanced security.",
    icon: "🏛️",
    category: "enterprise",
    networks: ["Ethereum", "Polygon", "BSC", "Arbitrum", "Optimism"],
    features: ["Multi-Signature", "Team Management", "Advanced Security"],
    color: "from-green-500 to-emerald-500",
    downloadUrl: "https://gnosis-safe.io",
  },

  // Additional Popular Wallets
  {
    id: "binance",
    name: "Binance Wallet",
    description: "Official wallet from Binance with seamless exchange integration.",
    icon: "🟡",
    category: "popular",
    networks: ["BSC", "Ethereum", "Polygon"],
    features: ["Exchange Integration", "Low Fees", "Trading Focus"],
    color: "from-yellow-500 to-orange-500",
    downloadUrl: "https://binance.org",
  },
  {
    id: "exodus",
    name: "Exodus",
    description: "Multi-asset wallet with built-in exchange and portfolio tracking.",
    icon: "🚀",
    category: "popular",
    networks: ["Ethereum", "Bitcoin", "Solana", "Polygon", "BSC"],
    features: ["Multi-Asset", "Built-in Exchange", "Portfolio Tracking"],
    color: "from-blue-600 to-purple-600",
    downloadUrl: "https://exodus.com",
  },
  {
    id: "atomic",
    name: "Atomic Wallet",
    description: "Decentralized wallet with atomic swaps and staking features.",
    icon: "⚛️",
    category: "defi",
    networks: ["Ethereum", "Bitcoin", "BSC", "Polygon", "Avalanche"],
    features: ["Atomic Swaps", "Staking", "Decentralized"],
    color: "from-cyan-500 to-blue-500",
    downloadUrl: "https://atomicwallet.io",
  },
  {
    id: "keplr",
    name: "Keplr",
    description: "The most powerful wallet for the Cosmos ecosystem and IBC.",
    icon: "🌌",
    category: "defi",
    networks: ["Cosmos", "Osmosis", "Juno", "Secret Network"],
    features: ["Cosmos Native", "IBC Support", "Staking"],
    color: "from-purple-600 to-indigo-600",
    downloadUrl: "https://keplr.app",
  },
  {
    id: "terra",
    name: "Terra Station",
    description: "Official wallet for Terra blockchain with staking and governance.",
    icon: "🌍",
    category: "defi",
    networks: ["Terra", "Ethereum"],
    features: ["Terra Native", "Staking", "Governance"],
    color: "from-blue-500 to-cyan-500",
    downloadUrl: "https://station.terra.money",
  },
  {
    id: "solflare",
    name: "Solflare",
    description: "Non-custodial wallet built specifically for Solana blockchain.",
    icon: "☀️",
    category: "defi",
    networks: ["Solana"],
    features: ["Solana Native", "Staking", "NFT Support"],
    color: "from-purple-500 to-pink-500",
    downloadUrl: "https://solflare.com",
  },
  {
    id: "slope",
    name: "Slope",
    description: "Mobile-first Solana wallet with beautiful design and DeFi integration.",
    icon: "📱",
    category: "mobile",
    networks: ["Solana"],
    features: ["Mobile First", "DeFi Integration", "Beautiful UI"],
    color: "from-gradient-to-r from-purple-400 to-pink-400",
    downloadUrl: "https://slope.finance",
  },
  {
    id: "math",
    name: "Math Wallet",
    description: "Multi-platform crypto wallet supporting 100+ blockchains.",
    icon: "🧮",
    category: "mobile",
    networks: ["Ethereum", "BSC", "Polygon", "Solana", "Cosmos", "Polkadot"],
    features: ["100+ Blockchains", "DApp Browser", "Cross-Chain"],
    color: "from-blue-500 to-purple-500",
    downloadUrl: "https://mathwallet.org",
  },
  {
    id: "safepal",
    name: "SafePal",
    description: "Hardware and software wallet with comprehensive security features.",
    icon: "🔐",
    category: "hardware",
    networks: ["Ethereum", "BSC", "Bitcoin", "Polygon", "Solana"],
    features: ["Hardware Option", "Air-Gapped", "Multi-Chain"],
    color: "from-green-500 to-teal-500",
    downloadUrl: "https://safepal.io",
  },
  {
    id: "imtoken",
    name: "imToken",
    description: "Professional digital asset management tool with DeFi integration.",
    icon: "💎",
    category: "mobile",
    networks: ["Ethereum", "Bitcoin", "BSC", "Polygon"],
    features: ["Professional Grade", "DeFi Integration", "Asset Management"],
    color: "from-blue-600 to-cyan-600",
    downloadUrl: "https://token.im",
  },
  {
    id: "tokenpocket",
    name: "TokenPocket",
    description: "Multi-chain wallet supporting 100+ blockchains with DApp browser.",
    icon: "🎒",
    category: "mobile",
    networks: ["Ethereum", "BSC", "Polygon", "Solana", "Tron", "EOS"],
    features: ["100+ Chains", "DApp Browser", "Multi-Platform"],
    color: "from-indigo-500 to-purple-500",
    downloadUrl: "https://tokenpocket.pro",
  },
  {
    id: "bitkeep",
    name: "BitKeep",
    description: "Decentralized multi-chain crypto wallet with swap and NFT features.",
    icon: "🔑",
    category: "mobile",
    networks: ["Ethereum", "BSC", "Polygon", "Solana", "Avalanche"],
    features: ["Multi-Chain Swap", "NFT Marketplace", "DeFi Aggregator"],
    color: "from-purple-500 to-pink-500",
    downloadUrl: "https://bitkeep.com",
  },
  {
    id: "alpha",
    name: "Alpha Wallet",
    description: "Ethereum wallet focused on TokenScript and advanced token features.",
    icon: "🅰️",
    category: "browser",
    networks: ["Ethereum", "Polygon", "BSC"],
    features: ["TokenScript", "Advanced Tokens", "Smart Contracts"],
    color: "from-blue-500 to-indigo-500",
    downloadUrl: "https://alphawallet.com",
  },
  {
    id: "frame",
    name: "Frame",
    description: "Native desktop wallet with advanced security and privacy features.",
    icon: "🖼️",
    category: "browser",
    networks: ["Ethereum", "Polygon", "Arbitrum", "Optimism"],
    features: ["Desktop Native", "Advanced Security", "Privacy Focused"],
    color: "from-gray-600 to-blue-600",
    downloadUrl: "https://frame.sh",
  },
  {
    id: "portis",
    name: "Portis",
    description: "Web-based wallet with email and password login for easy onboarding.",
    icon: "📧",
    category: "browser",
    networks: ["Ethereum", "Polygon", "BSC"],
    features: ["Email Login", "Web-Based", "Easy Onboarding"],
    color: "from-green-500 to-blue-500",
    downloadUrl: "https://portis.io",
  },
  {
    id: "fortmatic",
    name: "Fortmatic",
    description: "SDK wallet with phone number authentication and Web2 UX.",
    icon: "🎩",
    category: "browser",
    networks: ["Ethereum", "Polygon"],
    features: ["Phone Auth", "Web2 UX", "SDK Integration"],
    color: "from-purple-500 to-blue-500",
    downloadUrl: "https://fortmatic.com",
  },
  {
    id: "other",
    name: "Other Wallet",
    description: "Connect any other wallet by entering your wallet details manually.",
    icon: "🔗",
    category: "enterprise",
    networks: ["Universal"],
    features: ["Manual Entry", "Universal Support", "Custom Integration"],
    color: "from-gray-500 to-slate-500",
  },
]

export function getPopularWallets(): Wallet[] {
  return wallets.filter((wallet) => wallet.isPopular)
}

export function getWalletsByCategory(category: string): Wallet[] {
  return wallets.filter((wallet) => wallet.category === category)
}

export function searchWallets(query: string): Wallet[] {
  if (!query.trim()) return wallets

  const lowercaseQuery = query.toLowerCase()
  return wallets.filter(
    (wallet) =>
      wallet.name.toLowerCase().includes(lowercaseQuery) ||
      wallet.description.toLowerCase().includes(lowercaseQuery) ||
      wallet.networks.some((network) => network.toLowerCase().includes(lowercaseQuery)) ||
      wallet.features.some((feature) => feature.toLowerCase().includes(lowercaseQuery)),
  )
}
