"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Plug, Droplets, Recycle } from "lucide-react"

export function UtilitiesSection() {
  return (
    <Section id="utilities" muted>
      <Container>
        <SectionHeader eyebrow="Инженерия" title="Коммуникации: всё подключено и продумано" align="left" />

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Plug className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Электрика</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Щит, автоматы, скрытая проводка в огнестойких гофрах. Опция солнечных панелей и накопителей.
              </p>
            </div>
          </GlassPanel>
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Droplets className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Водоснабжение</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Подключение к центральным сетям или автономные резервуары. Фильтрация и подогрев.
              </p>
            </div>
          </GlassPanel>
          <GlassPanel className="p-8 hover:scale-105 transition-transform duration-300">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Recycle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-xl">Канализация</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Септик/биостанция с высокоэффективной очисткой. Без запахов, с сервисом под ключ.
              </p>
            </div>
          </GlassPanel>
        </div>
      </Container>
    </Section>
  )
}


