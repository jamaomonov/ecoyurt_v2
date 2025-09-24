import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/container"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Pill } from "@/components/ui/pill"
import { Metric } from "@/components/ui/metric"
import Image from "next/image"

interface HeroSectionProps {
  onQuestionClick?: () => void
}

export function HeroSection({ onQuestionClick }: HeroSectionProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                EcoYurt — жизнь в гармонии с природой и технологиями
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Современные умные юрты с городским комфортом и энергоавтономностью. Мы строим сеть резортов в самых красивых локациях Центральной Азии — для жизни, работы и отдыха на природе круглый год.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="premium" 
                className="rounded-full px-8 py-4 text-lg"
                onClick={onQuestionClick}
              >
                Задать вопрос
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 py-4 text-lg"
                asChild
              >
                <a href="#about">О проекте</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              <Pill>Умный дом</Pill>
              <Pill>Энергоэффективность</Pill>
              <Pill>Спутниковый интернет</Pill>
              <Pill>Комфорт 365 дней</Pill>
            </div>
          </div>

          <div className="relative">
            <GlassPanel className="p-2">
              <div className="aspect-square relative overflow-hidden rounded-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/text-to-video-b1f506e8.mp4" type="video/mp4" />
                  <img
                    src="/images/yurt-sunset-community.jpeg"
                    alt="Панорамный вид лагеря EcoYurt на природе, белые купольные юрты среди степи/горы/озера"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
            </GlassPanel>
            
            {/* Декоративные элементы */}
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_60%)] border border-white/40"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.18),transparent_60%)] border border-white/20"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
