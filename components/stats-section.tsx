"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { TrendingUp, Users, Award, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    { value: "50+", label: "Реализованных проектов", icon: TrendingUp },
    { value: "200+", label: "Довольных клиентов", icon: Users },
    { value: "15+", label: "Лет опыта", icon: Award },
    { value: "5-10", label: "Дней монтажа", icon: Zap },
  ]

  return (
    <Section id="stats">
      <Container>
        <SectionHeader eyebrow="Результаты" title="Цифры, которые говорят сами за себя" align="left" />
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <GlassPanel key={index} className="p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </Section>
  )
}
