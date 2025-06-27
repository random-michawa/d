import type { Metadata } from "next"
import WalletConnectionPage from "@/components/wallet-connection-page"

export const metadata: Metadata = {
  title: "Connect Your Wallet - DeFiSecure",
  description:
    "Connect your preferred crypto wallet to DeFiSecure. Support for 50+ wallets across all major blockchain networks.",
}

export default function ConnectPage() {
  return <WalletConnectionPage />
}
