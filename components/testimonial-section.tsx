export function TestimonialSection() {
  return (
    <section className="px-6 py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground uppercase tracking-wide">ОТЗЫВЫ</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Истории Успеха, Которые Вдохновляют Доверие.</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <blockquote className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
            "Что отличает эту компанию - это их глубокое понимание рынка и персонализированный сервис, который они
            предлагают. Их детальный подход позволил мне принимать обоснованные решения, которые окупились с лихвой."
          </blockquote>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300"></div>
          <div className="text-left">
            <p className="font-semibold">Иван Петров</p>
            <p className="text-sm text-muted-foreground">Инвестор в недвижимость</p>
          </div>
        </div>
      </div>
    </section>
  )
}
