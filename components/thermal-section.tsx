"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Snowflake, Wind, Flame } from "lucide-react"

export function ThermalSection() {
  return (
    <Section id="thermal">
      <Container>
        <SectionHeader eyebrow="Комфорт" title="Теплоэффективность и микроклимат круглый год" align="left" />

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Snowflake className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Утепление</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Высокая плотность утеплителя и отсутствие мостиков холода благодаря модульной геометрии. Сохраняет тепло
                зимой и прохладу летом.
              </p>
            </div>
          </GlassPanel>
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Wind className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Вентиляция</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Приточно-вытяжные решения с рекуперацией тепла. Качественная фильтрация и контроль влажности без потерь
                энергии.
              </p>
            </div>
          </GlassPanel>
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Отопление</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Электрические конвекторы, тёплый пол или печь по желанию. Низкая потребляемая мощность за счёт оболочки
                с высоким R-value.
              </p>
            </div>
          </GlassPanel>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-8">
          {[
            { label: "R-value оболочки", value: "до R-30" },
            { label: "Утечка воздуха", value: "≤ 1.5 ACH" },
            { label: "Энергопотребление", value: "до -40%" },
            { label: "Комфорт", value: "22–24°C стабильно" },
          ].map((item, i) => (
            <GlassPanel key={i} className="p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-primary mb-2">{item.value}</div>
              <div className="text-muted-foreground font-medium">{item.label}</div>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </Section>
  )
}


