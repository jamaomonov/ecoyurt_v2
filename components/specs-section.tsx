"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ruler, Maximize2, Box, ThermometerSun } from "lucide-react"

const specs = [
  { k: "Диаметр", v: "6 / 8 / 10 м" },
  { k: "Полезная площадь", v: "28–78 м²" },
  { k: "Высота", v: "3.2–4.8 м" },
  { k: "Каркас", v: "Клеёный брус, оцинк. крепёж" },
  { k: "Оболочка", v: "Мембрана + утеплитель + паробарьер" },
  { k: "Остекление", v: "Энергосберегающие стеклопакеты" },
  { k: "Пол", v: "Инженерная доска / винил / плитка" },
  { k: "Отопление", v: "Конвекторы / ТП / печь" },
]

export function SpecsSection() {
  return (
    <Section id="specs">
      <Container>
        <SectionHeader eyebrow="Параметры" title="Технические характеристики" align="left" />

        <Tabs defaultValue="sizes" className="mt-10">
          <TabsList>
            <TabsTrigger value="sizes">Габариты</TabsTrigger>
            <TabsTrigger value="envelope">Оболочка</TabsTrigger>
            <TabsTrigger value="comfort">Комфорт</TabsTrigger>
          </TabsList>
          <TabsContent value="sizes" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <div className="font-medium">Диаметр</div>
                </div>
                <div className="text-xl font-semibold">6 / 8 / 10 м</div>
              </GlassPanel>
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div className="font-medium">Площадь</div>
                </div>
                <div className="text-xl font-semibold">28–78 м²</div>
              </GlassPanel>
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <div className="font-medium">Высота</div>
                </div>
                <div className="text-xl font-semibold">3.2–4.8 м</div>
              </GlassPanel>
            </div>
          </TabsContent>
          <TabsContent value="envelope" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Box className="w-5 h-5" />
                  </div>
                  <div className="font-medium">Каркас</div>
                </div>
                <div className="text-xl font-semibold">Клеёный брус, оцинк. крепёж</div>
              </GlassPanel>
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <ThermometerSun className="w-5 h-5" />
                  </div>
                  <div className="font-medium">Утепление</div>
                </div>
                <div className="text-xl font-semibold">Мембрана + утеплитель + паробарьер</div>
              </GlassPanel>
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                  <div className="font-medium">Остекление</div>
                </div>
                <div className="text-xl font-semibold">Энергосберегающие стеклопакеты</div>
              </GlassPanel>
            </div>
          </TabsContent>
          <TabsContent value="comfort" className="mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <ThermometerSun className="w-5 h-5" />
                  </div>
                  <div className="font-medium">R-value</div>
                </div>
                <div className="text-xl font-semibold">до R-30</div>
              </GlassPanel>
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <ThermometerSun className="w-5 h-5" />
                  </div>
                  <div className="font-medium">Утечки</div>
                </div>
                <div className="text-xl font-semibold">≤ 1.5 ACH</div>
              </GlassPanel>
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <ThermometerSun className="w-5 h-5" />
                  </div>
                  <div className="font-medium">Температура</div>
                </div>
                <div className="text-xl font-semibold">22–24°C стабильно</div>
              </GlassPanel>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </Section>
  )
}


