import TermsOfServicePage from "@/components/terms-of-service-page"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - DeFiSecure",
  description: "Read our terms of service and understand your rights and responsibilities when using DeFiSecure.",
}

export default function TermsOfService() {
  return <TermsOfServicePage />
}
