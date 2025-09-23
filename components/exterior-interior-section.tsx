"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Mountain, Sofa } from "lucide-react"

export function ExteriorInteriorSection() {
  return (
    <Section id="design" muted>
      <Container>
        <SectionHeader eyebrow="Дизайн" title="Экстерьер и интерьер: эстетика без компромиссов" align="left" />

        <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <GlassPanel className="p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Mountain className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-xl">Экстерьер</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Аэродинамичная форма снижает ветровые нагрузки, покрытие устойчиво к UV и осадкам. Панорамные окна
                  с энергосберегающими стеклопакетами, защита от конденсата.
                </p>
              </div>
            </GlassPanel>
            <GlassPanel className="p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Sofa className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-xl">Интерьер</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Планировочные сценарии: студия, спальня + санузел, кухня-ниша. Тёплые натуральные материалы, скрытая
                  проводка, регулируемое освещение, акустический комфорт.
                </p>
              </div>
            </GlassPanel>
          </div>
          <div className="space-y-6">
            {/* Главное видео */}
            <GlassPanel className="p-2">
              <div className="aspect-video relative overflow-hidden rounded-xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/text-to-video-15851d8a.mp4" type="video/mp4" />
                  <img
                    src="/images/yurt-forest-evening.jpeg"
                    alt="Экстерьер эко-юрты"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
            </GlassPanel>
            
            {/* Дополнительные изображения */}
            <div className="grid grid-cols-2 gap-4">
              {[
                "/images/yurt-night-mountains.jpeg",
                "/images/yurt-night-moon.jpeg",
              ].map((src, i) => (
                <GlassPanel key={i} className="p-2 hover:scale-105 transition-transform duration-300">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl">
                    <img src={src} alt="Экстерьер/интерьер" className="w-full h-full object-cover" />
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}


