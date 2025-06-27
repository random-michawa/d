import type { Metadata } from "next"
import ContactPage from "@/components/contact-page"

export const metadata: Metadata = {
  title: "Contact Us - DeFiSecure",
  description:
    "Get in touch with our Web3 security experts. We're here to help protect your digital assets and answer your questions.",
}

export default function Contact() {
  return <ContactPage />
}
