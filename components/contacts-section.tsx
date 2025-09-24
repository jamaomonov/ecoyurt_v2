"use client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { SectionHeader } from "@/components/layout/section-header"
import { GlassPanel } from "@/components/layout/glass-panel"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ContactsSection() {
  const { toast } = useToast()
  const [isPartner, setIsPartner] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    city: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.message,
          selected: isPartner ? "partnership_detailed" : "contact_form",
          company: isPartner ? formData.company : undefined,
          city: isPartner ? formData.city : undefined
        })
      })

      if (response.ok) {
        toast({
          title: "Сообщение отправлено!",
          description: "Мы свяжемся с вами в течение 24 часов.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          company: "",
          city: ""
        })
        setIsPartner(false)
      } else {
        throw new Error("Ошибка отправки")
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позже или свяжитесь с нами по телефону.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section id="contacts" muted>
      <Container>
        <SectionHeader 
          eyebrow="Контакты" 
          title="Свяжитесь с нами" 
          align="left" 
        />
        
        <p className="text-xl text-muted-foreground mt-6 max-w-3xl">
          Напишите нам — ответим в течение 24 часов и подберём лучший формат взаимодействия: бронирование, партнёрство или пресс-материалы.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Форма */}
          <GlassPanel className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Имя *
                  </label>
                  <Input
                    placeholder="Как к вам обращаться"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    placeholder="Для обратной связи"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон
                </label>
                <Input
                  type="tel"
                  placeholder="Удобно для быстрого контакта"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Сообщение *
                </label>
                <Textarea
                  placeholder="Расскажите, что вас интересует"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={4}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="partner"
                    checked={isPartner}
                    onCheckedChange={(checked) => setIsPartner(checked as boolean)}
                  />
                  <label htmlFor="partner" className="text-sm font-medium">
                    Хочу сотрудничать как партнёр
                  </label>
                </div>

                {isPartner && (
                  <div className="grid md:grid-cols-2 gap-4 pl-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Компания
                      </label>
                      <Input
                        placeholder="Название компании"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Город/регион
                      </label>
                      <Input
                        placeholder="Ваш регион"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full rounded-full py-4 text-lg"
                disabled={isLoading || !formData.name || !formData.email || !formData.message}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Отправляем...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Отправить
                  </div>
                )}
              </Button>
            </form>
          </GlassPanel>

          {/* Контактная информация */}
          <div className="space-y-8">
            <GlassPanel className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Контактные данные</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">E-mail</div>
                      <div className="text-muted-foreground">hello@ecoyurt.world</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium">Офисы</div>
                      <div className="text-muted-foreground">Москва · Ташкент · Бишкек</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Время ответа</h4>
                <p className="text-muted-foreground">
                  Мы отвечаем на все сообщения в течение 24 часов. Для срочных вопросов используйте телефон.
                </p>
              </div>
            </GlassPanel>
          </div>
        </div>
      </Container>
    </Section>
  )
}
