"use client"

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
import { ContactModal } from "@/components/contact-modal"
import { useContactModal } from "@/hooks/use-contact-modal"

export default function Home() {
  const { isOpen, modalType, openModal, closeModal } = useContactModal()

  return (
    <main className="min-h-screen">
      <Header onContactClick={() => openModal("contact")} />
      
      <HeroSection onQuestionClick={() => openModal("question")} />
      <AboutSection />
      <TechnologiesSection />
      <NetworkSection />
      <GuestsSection onAvailabilityClick={() => openModal("availability")} />
      <PartnershipSection onPartnershipClick={() => openModal("partnership")} />
      <GallerySection />
      <ContactsSection />

      <Footer />

      <ContactModal 
        isOpen={isOpen}
        onClose={closeModal}
        type={modalType}
      />
    </main>
  )
}
