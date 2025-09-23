"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Leaf, Home, Shield, Sun } from "lucide-react"

const solutions = [
  { title: "Жилые решения", icon: Home, desc: "Постоянное и сезонное проживание с полной инженерией." },
  { title: "Эко-туризм", icon: Sun, desc: "Глэмпинги и ретрит-центры с быстрым вводом в эксплуатацию." },
  { title: "Сообщества", icon: Leaf, desc: "Поселения и кластеры с общей инфраструктурой и сервисами." },
  { title: "Коммерция", icon: Shield, desc: "Офисы/шоу-румы/комьюнити-пространства с премиальной отделкой." },
]

export function PropertyShowcase() {
  return (
    <Section id="solutions" muted>
      <Container>
        <SectionHeader eyebrow="Решения" title="Экосистема продуктов для разных сценариев" align="left" />
        
        {/* Видео-демонстрация */}
        <div className="mt-12 mb-16">
          <GlassPanel className="p-2">
            <div className="aspect-video relative overflow-hidden rounded-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/text-to-video-27c9a14c.mp4" type="video/mp4" />
                <img
                  src="/images/yurt-mountain-valley.jpeg"
                  alt="Эко-юрты в горной долине"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>
          </GlassPanel>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((s, i) => (
            <GlassPanel key={i} className="p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="font-semibold text-lg">{s.title}</div>
              <div className="text-sm text-muted-foreground mt-2">{s.desc}</div>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </Section>
  )
}
