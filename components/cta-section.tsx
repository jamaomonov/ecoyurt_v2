"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <Section id="cta">
      <Container>
        <GlassPanel className="p-12 lg:p-20 relative overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-sm uppercase tracking-wide text-muted-foreground font-medium">Готовы начать</div>
              <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Соберите свою ECOYURT под задачу и бюджет
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Оставьте заявку — пришлём смету по моделям, техническую документацию и предложим ближайшие даты монтажа.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="premium" className="rounded-full px-8 py-4 text-lg">
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 py-4 text-lg" asChild>
                  <a href="#pricing">Смотреть комплектации</a>
                </Button>
              </div>
            </div>
            
            {/* Видео-демонстрация */}
            <div className="relative">
              <div className="aspect-video relative overflow-hidden rounded-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/text-to-video-f3abd750.mp4" type="video/mp4" />
                  <img
                    src="/images/yurt-sunset-community.jpeg"
                    alt="ECOYURT в действии"
                    className="w-full h-full object-cover"
                  />
                </video>
              </div>
            </div>
          </div>
        </GlassPanel>
      </Container>
    </Section>
  )
}


