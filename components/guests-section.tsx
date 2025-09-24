"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Button } from "@/components/ui/button"
import { Wifi, Shield, Droplets, Star, Apple, Heart, Users, Car } from "lucide-react"

interface GuestsSectionProps {
  onAvailabilityClick?: () => void
}

export function GuestsSection({ onAvailabilityClick }: GuestsSectionProps) {
  const benefits = [
    {
      icon: Wifi,
      title: "Спутниковый интернет и рабочие места",
      desc: "Стабильная связь для удалённой работы"
    },
    {
      icon: Shield,
      title: "Тёплые стены и тихий интерьер",
      desc: "Комфорт в любую погоду"
    },
    {
      icon: Droplets,
      title: "Собственная ванная и горячая вода",
      desc: "Все удобства городского отеля"
    },
    {
      icon: Star,
      title: "Купольное окно: звёзды и свежий воздух",
      desc: "Панорамный вид на небо"
    },
    {
      icon: Apple,
      title: "Эко-питание и локальные продукты",
      desc: "Свежие и полезные блюда"
    },
    {
      icon: Heart,
      title: "Йога-пространство и прогулочные маршруты",
      desc: "Места для здоровья и медитации"
    },
    {
      icon: Users,
      title: "Бизнес-зона и камерные события",
      desc: "Пространство для встреч и мероприятий"
    },
    {
      icon: Car,
      title: "Парковка и удобная навигация",
      desc: "Легко добраться и припарковаться"
    }
  ]

  return (
    <Section id="guests">
      <Container>
        <SectionHeader 
          eyebrow="Для гостей" 
          title="Комфорт отеля — свобода природы" 
          align="left" 
        />
        
        <div className="mt-12 space-y-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                EcoYurt создана для тех, кто хочет тишины, вида на небо и ощущение дома. Здесь можно полноценно работать онлайн, заниматься здоровьем и проводить время с близкими — всё это в нескольких шагах от дикой природы.
              </p>
              
              <Button 
                size="lg" 
                className="rounded-full px-8 py-4 text-lg"
                onClick={onAvailabilityClick}
              >
                Спросить о доступности
              </Button>
            </div>

            <div className="relative">
              <GlassPanel className="p-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/yurt-forest-evening.jpeg"
                    alt="Интерьер EcoYurt с купольным окном и звёздами"
                    className="w-full h-full object-cover"
                  />
                </div>
              </GlassPanel>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <GlassPanel key={index} className="p-6 hover:scale-105 transition-transform duration-300">
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
