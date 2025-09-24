import { NextRequest, NextResponse } from "next/server"

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

interface ContactData {
  name: string
  phone?: string
  email?: string
  message?: string
  selected: "contact" | "question" | "availability" | "partnership" | "contact_form" | "partnership_detailed"
  company?: string
  city?: string
}

const actionLabels = {
  contact: "Связаться",
  question: "Задать вопрос", 
  availability: "Спросить о доступности",
  partnership: "Узнать о сотрудничестве",
  contact_form: "Контактная форма",
  partnership_detailed: "Детальная заявка на партнёрство"
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactData = await request.json()

    // Валидация данных
    if (!data.name || !data.selected) {
      return NextResponse.json(
        { error: "Обязательные поля не заполнены" },
        { status: 400 }
      )
    }

    // Дополнительная валидация для формы контактов
    if ((data.selected === "contact_form" || data.selected === "partnership_detailed") && (!data.email || !data.message)) {
      return NextResponse.json(
        { error: "Email и сообщение обязательны для данного типа заявки" },
        { status: 400 }
      )
    }

    // Формируем сообщение для Telegram
    let message = `
🔔 <b>Новая заявка с сайта EcoYurt</b>

👤 <b>Имя:</b> ${data.name}
${data.phone ? `📱 <b>Телефон:</b> ${data.phone}` : ''}
${data.email ? `📧 <b>Email:</b> ${data.email}` : ''}
🎯 <b>Действие:</b> ${actionLabels[data.selected]}
${data.message ? `💬 <b>Сообщение:</b>\n${data.message}` : ''}
${data.company ? `🏢 <b>Компания:</b> ${data.company}` : ''}
${data.city ? `🌍 <b>Город/регион:</b> ${data.city}` : ''}

⏰ <b>Дата:</b> ${new Date().toLocaleString('ru-RU', { 
  timeZone: 'Asia/Tashkent',
  year: 'numeric',
  month: 'long', 
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
    `.trim()

    // Отправляем в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML"
        })
      }
    )

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text()
      console.error("Telegram API error:", error)
      throw new Error("Ошибка отправки в Telegram")
    }

    return NextResponse.json({ 
      success: true, 
      message: "Сообщение успешно отправлено" 
    })

  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    )
  }
}
