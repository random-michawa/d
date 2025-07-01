import WalletSetupPage from "@/components/wallet-setup-page"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ walletId: string }>
}): Promise<Metadata> {
  const { walletId } = await params
  const walletName = walletId.charAt(0).toUpperCase() + walletId.slice(1)

  return {
    title: `${walletName} Setup - DeFiSecure`,
    description: `Connect or import your ${walletName} wallet to DeFiSecure platform.`,
  }
}

export default async function WalletSetup({
  params,
}: {
  params: Promise<{ walletId: string }>
}) {
  const { walletId } = await params
  return <WalletSetupPage walletId={walletId} />
}