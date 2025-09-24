"use client"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
// removed sheet; custom vertical menu panel instead

interface HeaderProps {
  onContactClick?: () => void
}

export function Header({ onContactClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Обычная шапка */}
      <div className={`transition-all duration-500 ${scrolled ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        <div className="max-w-7xl mx-auto w-full px-6 py-3">
          <div className="flex items-center justify-between rounded-full border bg-white/60 backdrop-blur-md px-4 py-2">
            <div className="flex items-center">
              <Image src="/brand/ecoyurt-logo.png" alt="ECOYURT Logo" width={144} height={144} className="object-contain mix-blend-multiply" />
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <Link href="#about" className="text-sm hover:text-primary transition-colors">
                О проекте
              </Link>
              <Link href="#technologies" className="text-sm hover:text-primary transition-colors">
                Технологии
              </Link>
              <Link href="#network" className="text-sm hover:text-primary transition-colors">
                Сеть
              </Link>
              <Link href="#guests" className="text-sm hover:text-primary transition-colors">
                Гостям
              </Link>
              <Link href="#partnership" className="text-sm hover:text-primary transition-colors">
                Партнёрство
              </Link>
              <Link href="#gallery" className="text-sm hover:text-primary transition-colors">
                Галерея
              </Link>
              <Link href="#contacts" className="text-sm hover:text-primary transition-colors">
                Контакты
              </Link>
            </nav>

            {/* Кнопка Связаться */}
            <div className="hidden lg:block">
              <Button 
                size="sm" 
                className="rounded-full px-6 py-2"
                onClick={onContactClick}
              >
                Связаться
              </Button>
            </div>

            {/* Мобильное меню */}
            <div className="lg:hidden">
              <button
                onClick={() => setOpen((v) => !v)}
                className="h-10 w-10 rounded-full flex items-center justify-center border bg-white/80 backdrop-blur-md hover:bg-white/90 transition-all duration-300"
                aria-label="Меню"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Плавающая круглая кнопка-меню и вертикальная панель */}
      <div className={`fixed bottom-6 right-6 transition-all duration-500 ${scrolled ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4 pointer-events-none'}`}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="h-16 w-16 rounded-full flex items-center justify-center shadow-xl border bg-white/80 backdrop-blur-md hover:bg-white/90 transition-all duration-300 hover:scale-110"
          aria-label="Меню"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Мобильное меню для планшетов и мобилок */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-20 left-4 right-4 origin-top animate-in slide-in-from-top-4 fade-in duration-200">
            <div className="rounded-2xl border bg-white/90 backdrop-blur-md shadow-2xl p-6">
              <div className="grid gap-4">
                {[
                  { href: '#about', label: 'О проекте' },
                  { href: '#technologies', label: 'Технологии' },
                  { href: '#network', label: 'Сеть' },
                  { href: '#guests', label: 'Гостям' },
                  { href: '#partnership', label: 'Партнёрство' },
                  { href: '#gallery', label: 'Галерея' },
                  { href: '#contacts', label: 'Контакты' },
                ].map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="text-base py-3 px-4 rounded-lg hover:bg-black/5 transition-colors font-medium"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t grid gap-3 text-sm">
                <a href="tel:+79991234567" className="underline font-medium">+7 (999) 123-45-67</a>
                <a href="https://t.me/ecoyurt" target="_blank" className="underline font-medium">Telegram</a>
                <a href="mailto:info@ecoyurt.com" className="underline font-medium">info@ecoyurt.com</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Десктопное меню (только для больших экранов) */}
      {open && (
        <div className="hidden lg:block">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setOpen(false)}
          />
          <div className="fixed bottom-[104px] right-6 w-[280px] origin-bottom-right animate-in slide-in-from-bottom-4 fade-in duration-200">
            <div className="rounded-2xl border bg-white/90 backdrop-blur-md shadow-2xl p-4">
              <div className="grid gap-3">
                {[
                  { href: '#about', label: 'О проекте' },
                  { href: '#technologies', label: 'Технологии' },
                  { href: '#network', label: 'Сеть' },
                  { href: '#guests', label: 'Гостям' },
                  { href: '#partnership', label: 'Партнёрство' },
                  { href: '#gallery', label: 'Галерея' },
                  { href: '#contacts', label: 'Контакты' },
                ].map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="text-sm py-2 px-3 rounded-lg hover:bg-black/5 transition-colors"
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t grid gap-2 text-sm">
                <a href="tel:+79991234567" className="underline">+7 (999) 123-45-67</a>
                <a href="https://t.me/ecoyurt" target="_blank" className="underline">Telegram</a>
                <a href="mailto:info@ecoyurt.com" className="underline">info@ecoyurt.com</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
