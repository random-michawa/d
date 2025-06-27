import CookiePolicyPage from "@/components/cookie-policy-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - DeFiSecure",
  description: "Learn about how DeFiSecure uses cookies and similar technologies to improve your experience.",
}

export default function CookiePolicy() {
  return <CookiePolicyPage />
}
