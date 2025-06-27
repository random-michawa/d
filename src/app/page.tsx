import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AnalyticsSection from "@/components/analytics-section"
import AboutSection from "@/components/about-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <AnalyticsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
