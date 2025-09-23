"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { MapPin, Users, TrendingUp, Leaf } from "lucide-react"

export function NetworkSection() {
  const locations = [
    "Айдаркуль",
    "Нукус", 
    "Хива",
    "Кызылкум",
    "Кыргызстан",
    "Таджикистан"
  ]

  const benefits = [
    {
      icon: Users,
      title: "Новые рабочие места и развитие местных сервисов",
      desc: "Каждая локация создаёт 15-25 рабочих мест для местных жителей"
    },
    {
      icon: TrendingUp,
      title: "Рост внутреннего и въездного туризма",
      desc: "Привлекаем туристов в регионы с уникальной природой"
    },
    {
      icon: Leaf,
      title: "Устойчивые практики и бережное отношение к ландшафтам",
      desc: "Минимальное воздействие на окружающую среду"
    }
  ]

  return (
    <Section id="network" muted>
      <Container>
        <SectionHeader 
          eyebrow="Сеть и развитие" 
          title="Мы строим сеть резортов" 
          align="left" 
        />
        
        <div className="mt-12 space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                EcoYurt — это не один проект, а сеть локаций из 20–40 юрт в каждой. Мы выбираем живописные места с чистым воздухом и красивыми видами, чтобы сделать природу доступной для жизни и работы.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Наши локации</h3>
                <div className="flex flex-wrap gap-3">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                      <MapPin className="w-4 h-4" />
                      {location}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <GlassPanel className="p-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/yurt-aerial-lake.jpeg"
                    alt="Карта локаций EcoYurt в Центральной Азии"
                    className="w-full h-full object-cover"
                  />
                </div>
              </GlassPanel>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <GlassPanel key={index} className="p-8 hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
