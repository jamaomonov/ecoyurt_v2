"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <Section id="contact" className="bg-foreground text-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <SectionHeader 
              eyebrow="Контакты" 
              title="Готовы начать проект?" 
              align="left" 
              className="text-background"
            />
            
            <div className="space-y-6">
              <p className="text-background/80 text-xl leading-relaxed max-w-lg">
                Обсудим ваши задачи, подберём оптимальное решение и рассчитаем стоимость проекта.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Позвонить</p>
                    <p className="text-background/60">+7 (999) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Написать</p>
                    <p className="text-background/60">info@ecoyurt.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Telegram</p>
                    <p className="text-background/60">@ecoyurt</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="rounded-full px-8 py-4 text-lg bg-primary hover:bg-primary/90">
                Оставить заявку
              </Button>
            </div>
          </div>

          <div className="relative">
            <GlassPanel className="p-2">
              <img
                src="/images/yurt-night-moon.jpeg"
                alt="Eco yurt under moonlight"
                className="w-full h-auto rounded-2xl"
              />
            </GlassPanel>
          </div>
        </div>
      </Container>
    </Section>
  )
}
