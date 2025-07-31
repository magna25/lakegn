import { NextRequest, NextResponse } from 'next/server'

interface FormData {
  fullName: string
  dateOfBirth: string
  phoneNumber: string
  email: string
  purpose: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json()
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phoneNumber || !formData.purpose) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID
    
    if (!botToken || !chatId) {
      console.error('Missing Telegram configuration')
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 500 }
      )
    }
    
    const purposeEmoji = {
      school: '🎓',
      work: '💼',
      visit: '✈️'
    }
    
    const message = `
🚨 *New Client Inquiry - Lakegn Consultancy*

👤 *Full Name:* ${formData.fullName}
📅 *Date of Birth:* ${formData.dateOfBirth}
📞 *Phone:* ${formData.phoneNumber}
📧 *Email:* ${formData.email}
${purposeEmoji[formData.purpose as keyof typeof purposeEmoji] || '📝'} *Purpose:* ${formData.purpose.toUpperCase()}

⏰ *Submitted:* ${new Date().toLocaleString()}
    `.trim()
    
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    })
    
    if (!response.ok) {
      const errorData = await response.text()
      console.error('Telegram API error:', errorData)
      throw new Error('Failed to send Telegram message')
    }
    
    console.log('Notification sent successfully for:', formData.email)
    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Error sending Telegram notification:', error)
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: 'Unable to process request. Please try again later.' },
      { status: 500 }
    )
  }
}