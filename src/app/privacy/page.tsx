import PrivacyPolicyPage from "@/components/privacy-policy-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - DeFiSecure",
  description: "Learn how DeFiSecure protects your privacy and handles your personal information.",
}

export default function PrivacyPolicy() {
  return <PrivacyPolicyPage />
}
