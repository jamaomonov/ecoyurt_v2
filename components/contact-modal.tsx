"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GlassPanel } from "@/components/layout/glass-panel"
import { X, Send, Phone, Mail, MessageCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  type: "contact" | "question" | "availability" | "partnership"
}

const modalTitles = {
  contact: "Связаться с нами",
  question: "Задать вопрос",
  availability: "Спросить о доступности",
  partnership: "Узнать о сотрудничестве"
}

const modalDescriptions = {
  contact: "Мы ответим в течение нескольких часов",
  question: "Получите подробную консультацию",
  availability: "Узнайте о свободных датах",
  partnership: "Обсудим возможности сотрудничества"
}

export function ContactModal({ isOpen, onClose, type }: ContactModalProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "+998",
    email: "",
    message: ""
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
          ...formData,
          selected: type
        })
      })

      if (response.ok) {
        toast({
          title: "Сообщение отправлено!",
          description: "Мы свяжемся с вами в ближайшее время.",
        })
        setFormData({
          name: "",
          phone: "+998",
          email: "",
          message: ""
        })
        onClose()
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

  const handleInputChange = (field: string, value: string) => {
    if (field === "phone") {
      // Обеспечиваем что номер всегда начинается с +998
      if (!value.startsWith("+998")) {
        value = "+998" + value.replace(/^\+998|^\+|^998|^/, "")
      }
    }
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-white border-none shadow-none">
        <GlassPanel className="p-6" >
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold">
                {modalTitles[type]}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-8 w-8 p-0 hover:bg-white/10"
              >
              </Button>
            </div>
            <p className="text-muted-foreground">
              {modalDescriptions[type]}
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                type="text"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                className="bg-white/50 border-white/20 focus:bg-white/70 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона *</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+998 90 123 45 67"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="pl-10 bg-white/50 border-white/20 focus:bg-white/70 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="pl-10 bg-white/50 border-white/20 focus:bg-white/70 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Сообщение</Label>
              <Textarea
                id="message"
                placeholder="Расскажите подробнее о ваших потребностях..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                rows={4}
                className="bg-white/50 border-white/20 focus:bg-white/70 transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading || !formData.name || !formData.phone}
              className="w-full rounded-full py-3 text-lg"
              size="lg"
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

          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">Или свяжитесь напрямую:</p>
              <div className="flex justify-center gap-4">
                <a
                  href="tel:+998901234567"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +998 90 123 45 67
                </a>
                <a
                  href="https://t.me/ecoyurt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </GlassPanel>
      </DialogContent>
    </Dialog>
  )
}
