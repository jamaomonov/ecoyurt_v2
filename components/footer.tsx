import { Container } from "@/components/layout/container"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t/0">
      <Container className="py-14">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center">
              <Image src="/brand/ecoyurt-logo.png" alt="ECOYURT Logo" width={120} height={120} className="object-contain mix-blend-multiply" />
            </div>
            <p className="text-sm text-muted-foreground">
              Устойчивые юрточные сообщества. Экология, архитектура, доходность.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Навигация</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#about">О проекте</Link>
              </li>
              <li>
                <Link href="#technologies">Технологии</Link>
              </li>
              <li>
                <Link href="#network">Сеть</Link>
              </li>
              <li>
                <Link href="#guests">Гостям</Link>
              </li>
              <li>
                <Link href="#partnership">Партнёрство</Link>
              </li>
              <li>
                <Link href="#gallery">Галерея</Link>
              </li>
              <li>
                <Link href="#contacts">Контакты</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Контакты</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>hello@ecoyurt.world</li>
              <li>+7 (999) 123-45-67</li>
              <li>Москва · Ташкент · Бишкек</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Партнёрам</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#partnership">Сотрудничество</Link>
              </li>
              <li>
                <Link href="#gallery">Галерея проектов</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-2 md:gap-0 items-start md:items-center justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} ECOYURT. Все права защищены.</span>
          <span>Сделано с уважением к природе</span>
        </div>
      </Container>
    </footer>
  )
}


