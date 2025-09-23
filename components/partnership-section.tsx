"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Button } from "@/components/ui/button"
import { FileText, MapPin, Calendar, CheckCircle } from "lucide-react"

export function PartnershipSection() {
  const steps = [
    {
      icon: FileText,
      title: "Получите материалы о модели развития EcoYurt",
      desc: "Подробная информация о концепции и бизнес-модели"
    },
    {
      icon: MapPin,
      title: "Обсудим локации и формат участия",
      desc: "Выберем подходящие места и определим роли"
    },
    {
      icon: Calendar,
      title: "Сформируем дорожную карту запуска",
      desc: "Пошаговый план реализации проекта"
    }
  ]

  return (
    <Section id="partnership" muted>
      <Container>
        <SectionHeader 
          eyebrow="Партнёрство" 
          title="Сотрудничество и развитие" 
          align="left" 
        />
        
        <div className="mt-12 space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Каждая новая локация EcoYurt — это точка роста для региона: рабочие места, приток гостей, развитие локального бизнеса и инфраструктуры. Мы открыты к сотрудничеству с теми, кто разделяет наш подход к устойчивому развитию и бережному туризму.
              </p>
              
              <Button size="lg" className="rounded-full px-8 py-4 text-lg">
                Узнать о сотрудничестве
              </Button>
            </div>

            <div className="relative">
              <GlassPanel className="p-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/yurt-aerial-pathways.jpeg"
                    alt="Развитие инфраструктуры EcoYurt в регионе"
                    className="w-full h-full object-cover"
                  />
                </div>
              </GlassPanel>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Как начать сотрудничество</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <GlassPanel key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold text-primary">{index + 1}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm">{step.desc}</p>
                    </div>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Информация носит ознакомительный характер и не является публичной офертой. Условия сотрудничества обсуждаются индивидуально.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}
