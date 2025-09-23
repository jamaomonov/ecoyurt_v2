"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Base",
    price: "от 1.9 млн ₽",
    features: ["Каркас + оболочка", "Окна/двери", "Электрика базовая"],
    popular: false,
  },
  {
    name: "Comfort",
    price: "от 2.6 млн ₽",
    features: ["Полная инженерия", "Отделка interior", "Тёплый пол"],
    popular: true,
  },
  {
    name: "Pro",
    price: "от 3.4 млн ₽",
    features: ["Премиальные материалы", "Умный дом", "Солнечные панели (опция)"],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <Section id="pricing" muted>
      <Container>
        <SectionHeader eyebrow="Стоимость" title="Модели и комплектации" align="left" />

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <GlassPanel key={i} className={`p-8 flex flex-col hover:scale-105 transition-transform duration-300 ${p.popular ? 'ring-2 ring-primary/50' : ''}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Популярно
                  </div>
                </div>
              )}
              <div className="flex items-baseline justify-between mb-6">
                <div className="font-semibold text-2xl">{p.name}</div>
                <div className="text-primary font-bold text-xl">{p.price}</div>
              </div>
              <ul className="space-y-3 text-muted-foreground flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                    {f}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 rounded-full" variant={p.popular ? "default" : "outline"}>
                Получить смету
              </Button>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </Section>
  )
}


