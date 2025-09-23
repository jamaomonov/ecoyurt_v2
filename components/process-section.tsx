"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { CheckCircle2 } from "lucide-react"

const steps = [
  { title: "Заявка и бриф", desc: "Формулируем задачи, бюджет и сроки. Предлагаем модели и комплектации." },
  { title: "Предпроект", desc: "Планировка, посадка на участке, инженерные схемы, смета и график работ." },
  { title: "Договор", desc: "Фиксируем условия, сроки и гарантию. Назначаем менеджера и подрядчиков." },
  { title: "Производство", desc: "Изготовление модулей и конструкций на заводе. Контроль качества." },
  { title: "Монтаж", desc: "Фундамент (по необходимости), сборка каркаса, оболочка, инженерия, отделка." },
  { title: "Сдача и сервис", desc: "Проверка, передача, инструктаж. Плановое обслуживание по договору." },
]

export function ProcessSection() {
  return (
    <Section id="process" muted>
      <Container>
        <SectionHeader eyebrow="Как мы работаем" title="Прозрачный процесс: от заявки до ввода за 5–10 дней" align="left" />

        <div className="mt-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-black/10" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <GlassPanel className="p-6">
                  <div className="font-semibold text-lg">{s.title}</div>
                  <div className="text-muted-foreground mt-1 leading-relaxed">{s.desc}</div>
                </GlassPanel>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}


