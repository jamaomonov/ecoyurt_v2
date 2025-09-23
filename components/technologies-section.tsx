"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { CheckCircle, Thermometer, Mic, Sun, Wind, Recycle } from "lucide-react"

import { useState } from "react"

export function TechnologiesSection() {
  const [d824Src, setD824Src] = useState("/images/technologies/composite-block-d824.png")
  return (
    <Section id="technologies">
      <Container>
        <SectionHeader 
          eyebrow="Инновационные технологии" 
          title="Инновационные технологии EcoYurt" 
          align="left" 
        />
        
        <p className="text-xl text-muted-foreground mt-6 max-w-3xl">
          Инженерия, которая делает природу ближе и дом — умнее.
        </p>

        <div className="mt-16 space-y-20">
          {/* Композитный блок D824 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Композитный блок D824 — сердце тёплой юрты</h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Мы разработали уникальный композитный блок, в котором два слоя бетона разделены термомостом. Такая конструкция разделяет внешний и внутренний климат и позволяет управлять теплопотоками без потерь.
                </p>
                <p>
                  Зимой внутренний слой аккумулирует тепло и остаётся тёплым, когда снаружи мороз. Летом — сохраняет приятную прохладу, а внешний слой принимает на себя жару.
                </p>
                <p>
                  Итог — стабильный комфорт круглый год и минимальные расходы на отопление и охлаждение.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "Два слоя кварцево-белого и пенополистирольного бетона",
                  "Разделение климатов за счёт термомоста",
                  "Армирование и долговечность конструкции",
                  "Тихо в комнате даже при ветре и дожде",
                  "Экологичный состав и долгий срок службы",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <GlassPanel className="p-4">
                <div className="aspect-square relative overflow-hidden rounded-2xl bg-white">
                  <img
                    src={d824Src}
                    alt="Схема композитного блока EcoYurt D824 в разрезе с подписями слоёв и термомоста"
                    className="w-full h-full object-contain p-4"
                    onError={() => {
                      if (d824Src.endsWith(".png")) {
                        setD824Src("/images/technologies/composite-block-d824.jpg")
                      } else if (d824Src.endsWith(".jpg")) {
                        setD824Src("/images/technologies/composite-block-d824.jpeg")
                      }
                    }}
                  />
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* Умный дом Азиза */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <GlassPanel className="p-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/yurt-night-moon.jpeg"
                    alt="Интерьер EcoYurt с системой управления Азиза"
                    className="w-full h-full object-cover"
                  />
                </div>
              </GlassPanel>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl font-bold">Голосовой помощник и сценарии комфорта</h3>
              
              <p className="text-muted-foreground">
                Система «Азиза» управляет светом, климатом и верхним купольным окном. Сценарии «Ночь», «Работа», «Проветривание» и «Тихий рассвет» подстраивают дом под ритм дня. Всё доступно с голоса или смартфона — просто и естественно.
              </p>

              <div className="space-y-3">
                {[
                  "Голосовое и мобильное управление",
                  "Автоматическое открытие/закрытие купольного окна",
                  "Постепенное включение света «мягкое пробуждение»",
                  "Телеметрия и энергоменеджмент в реальном времени",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Энергоавтономность */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Солнце и ветер — наша энергия</h3>
              
              <p className="text-muted-foreground">
                Юрты готовы работать на солнечных панелях и ветрогенераторах с накоплением энергии в батареях. Система распределяет нагрузку так, чтобы дом оставался устойчивым даже в пасмурные дни. Предусмотрена интеграция с EcoStation для подзарядки транспорта и бытовых приборов.
              </p>

              <div className="space-y-3">
                {[
                  "Генерация от солнца и ветра",
                  "Аккумуляция и умное распределение",
                  "Готовность к подключению EcoStation",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <GlassPanel className="p-2">
                <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/yurt-sunset-community.jpeg"
                    alt="Солнечные панели и ветрогенераторы EcoYurt"
                    className="w-full h-full object-cover"
                  />
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* Экологичность */}
          <div className="text-center">
            <GlassPanel className="p-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Материалы и ответственность</h3>
                
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Мы выбираем безопасные и долговечные материалы, снижаем строительные отходы и сокращаем углеродный след. EcoYurt — дом, который уважает природу.
                </p>

                <div className="text-2xl font-bold text-primary mt-8">
                  EcoYurt — самое энергоэффективное и умное жильё для жизни на природе.
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </Container>
    </Section>
  )
}
