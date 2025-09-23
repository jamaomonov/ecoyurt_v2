"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Hammer, Layers, Paintbrush } from "lucide-react"

export function MaterialsSection() {
  return (
    <Section id="materials">
      <Container>
        <SectionHeader eyebrow="Конструкция" title="Материалы и сборка, рассчитанные на десятилетия" align="left" />

        {/* Видео процесса сборки */}
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
                <source src="/videos/text-to-video-4e4a53ad.mp4" type="video/mp4" />
                <img
                  src="/images/yurt-desert-solar.jpeg"
                  alt="Процесс сборки эко-юрты"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>
          </GlassPanel>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Каркас</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Клеёный брус камерной сушки, антикоррозийный крепёж из оцинкованной стали. Геометрия купола распределяет
                нагрузки и выдерживает сильный ветер и снег.
              </p>
            </div>
          </GlassPanel>
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Ограждающие конструкции</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Многослойная оболочка: влагозащита, высокоплотный утеплитель, паробарьер, внешняя мембрана. Сертифицированные
                экоматериалы, безопасные для человека.
              </p>
            </div>
          </GlassPanel>
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Paintbrush className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Отделка</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Натуральное дерево и минералы, износостойкие покрытия. Быстрый ремонтопригодный модульный формат
                сокращает простои и затраты.
              </p>
            </div>
          </GlassPanel>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            { label: "Время монтажа", value: "5–10 дней" },
            { label: "Срок службы", value: "> 30 лет" },
            { label: "Гарантия", value: "до 5 лет" },
          ].map((item, i) => (
            <GlassPanel key={i} className="p-8 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-primary mb-2">{item.value}</div>
              <div className="text-muted-foreground font-medium">{item.label}</div>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </Section>
  )
}


