"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"

export function GallerySection() {
  const galleryItems = [
    {
      src: "/images/yurt-night-moon.jpeg",
      alt: "Интерьер EcoYurt: светлый купол и натуральные материалы",
      title: "Интерьер EcoYurt"
    },
    {
      src: "/images/yurt-night-mountains.jpeg",
      alt: "Купольное окно «Тенгри»: больше света днём, звёзды ночью",
      title: "Купольное окно «Тенгри»"
    },
    {
      src: "/images/yurt-desert-solar.jpeg",
      alt: "Схема композитного блока D824 в разрезе",
      title: "Композитный блок D824"
    },
    {
      src: "/images/yurt-aerial-lake.jpeg",
      alt: "Утренний вид из юрты на озеро/горы",
      title: "Утренний вид"
    },
    {
      src: "/images/yurt-green-valley.jpeg",
      alt: "Пространство для практик и йоги",
      title: "Йога-пространство"
    },
    {
      src: "/images/yurt-sunset-community.jpeg",
      alt: "Вечернее освещение и тропинки к юртам",
      title: "Вечернее освещение"
    }
  ]

  return (
    <Section id="gallery">
      <Container>
        <SectionHeader 
          eyebrow="Галерея" 
          title="Вдохновляющие виды и уют внутри" 
          align="left" 
        />
        
        <p className="text-xl text-muted-foreground mt-6 max-w-3xl">
          Живые фото и 3D-визуализации интерьеров, детали конструкций и кадры природы вокруг.
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GlassPanel key={index} className="p-2 hover:scale-105 transition-transform duration-300 group">
              <div className="aspect-[4/3] relative overflow-hidden rounded-xl">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </Container>
    </Section>
  )
}
