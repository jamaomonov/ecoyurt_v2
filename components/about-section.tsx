"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Home, Zap, Sun, Shield, Leaf, Wifi } from "lucide-react"

export function AboutSection() {
  const features = [
    { icon: Home, title: "Умный дом «Азиза»", desc: "Голосовое управление и автоматизация" },
    { icon: Zap, title: "Самое энергоэффективное жильё в мире", desc: "Минимальные расходы на отопление" },
    { icon: Sun, title: "Солнечная и ветровая энергия", desc: "Полная энергоавтономность" },
    { icon: Shield, title: "Тихие, тёплые стены", desc: "Композитный блок D824" },
    { icon: Leaf, title: "Экологичные материалы", desc: "Безопасные и долговечные" },
    { icon: Wifi, title: "Цифровая инфраструктура", desc: "Спутниковый интернет и телеметрия" },
  ]

  return (
    <Section id="about" muted>
      <Container>
        <SectionHeader 
          eyebrow="О проекте" 
          title="Что такое EcoYurt" 
          align="left" 
        />
        
        <div className="mt-12 space-y-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                EcoYurt — это экодома в форме юрт, где традиции степной архитектуры соединяются с современной инженерией. Мы создаём умные, автономные и очень тёплые пространства, в которых приятно жить и работать рядом с природой.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Каждая наша локация — это мини-резорт с устойчивой инфраструктурой: стабильный интернет для удалённой работы, бизнес-зона и пространство для здоровья — от тишины и чистого воздуха до йоги и сбалансированного питания.
              </p>
            </div>
            
            <div className="relative">
              <GlassPanel className="p-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/yurt-mountain-valley.jpeg"
                    alt="EcoYurt в горной долине с панорамным видом"
                    className="w-full h-full object-cover"
                  />
                </div>
              </GlassPanel>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <GlassPanel key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
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
