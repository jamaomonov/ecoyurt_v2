import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { NetworkSection } from "@/components/network-section"
import { GuestsSection } from "@/components/guests-section"
import { PartnershipSection } from "@/components/partnership-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactsSection } from "@/components/contacts-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <NetworkSection />
      <GuestsSection />
      <PartnershipSection />
      <GallerySection />
      <ContactsSection />

      <Footer />
    </main>
  )
}
