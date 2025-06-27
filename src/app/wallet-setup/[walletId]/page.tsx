import WalletSetupPage from "@/components/wallet-setup-page"
import type { Metadata } from "next"

interface WalletSetupPageProps {
  params: {
    walletId: string
  }
}

export async function generateMetadata({ params }: WalletSetupPageProps): Promise<Metadata> {
  const walletName = params.walletId.charAt(0).toUpperCase() + params.walletId.slice(1)

  return {
    title: `${walletName} Setup - DeFiSecure`,
    description: `Connect or import your ${walletName} wallet to DeFiSecure platform.`,
  }
}

export default function WalletSetup({ params }: WalletSetupPageProps) {
  return <WalletSetupPage walletId={params.walletId} />
}
