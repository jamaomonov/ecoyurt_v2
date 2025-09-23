"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"

export function FAQSection() {
  const faqs = [
    {
      question: "Сколько времени занимает монтаж эко-юрты?",
      answer: "От заявки до готового объекта — 5-10 дней. Включает фундамент (при необходимости), сборку каркаса, оболочку, инженерию и отделку.",
    },
    {
      question: "Какие материалы используются в строительстве?",
      answer: "Клеёный брус камерной сушки, оцинкованный крепёж, многослойная оболочка с высокоплотным утеплителем, энергосберегающие стеклопакеты.",
    },
    {
      question: "Как обеспечивается теплоэффективность?",
      answer: "R-value оболочки до R-30, отсутствие мостиков холода, приточно-вытяжная вентиляция с рекуперацией. Энергопотребление снижается на 40%.",
    },
    {
      question: "Можно ли подключить к центральным коммуникациям?",
      answer: "Да, подключаем к электричеству, водоснабжению и канализации. Также предлагаем автономные решения: солнечные панели, септики, скважины.",
    },
    {
      question: "Какая гарантия на конструкцию?",
      answer: "Гарантия на каркас и оболочку — до 5 лет. Срок службы конструкции — более 30 лет при правильной эксплуатации.",
    },
    {
      question: "Можно ли заказать индивидуальную планировку?",
      answer: "Конечно. Предлагаем студию, спальня+санузел, кухня-ниша. Все решения адаптируем под ваши потребности и участок.",
    },
  ]

  return (
    <Section id="faq" muted>
      <Container>
        <SectionHeader eyebrow="FAQ" title="Часто задаваемые вопросы" align="left" />

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-0"
              >
                <GlassPanel className="p-6">
                  <AccordionTrigger className="text-left hover:no-underline py-2 font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </GlassPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  )
}
