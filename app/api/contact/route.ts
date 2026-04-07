import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { inquiryType, companyName, companyAddress, name, email, phone, message } = body

    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN
    const NOTIFICATION_EMAIL_1 = process.env.NOTIFICATION_EMAIL_1
    const NOTIFICATION_EMAIL_2 = process.env.NOTIFICATION_EMAIL_2

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !NOTIFICATION_EMAIL_1 || !NOTIFICATION_EMAIL_2) {
      console.error('Missing Mailgun environment variables')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #414042; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-weight: 300; letter-spacing: 2px;">RESOLUTE ISR</h1>
          <div style="width: 40px; height: 3px; background-color: #ee3124; margin: 10px auto;"></div>
        </div>
        <div style="padding: 30px; background-color: #f9f9f9;">
          <h2 style="color: #414042; border-bottom: 2px solid #ee3124; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; color: #414042; width: 140px;">Inquiry Type:</td><td style="padding: 8px 0; color: #666;">${inquiryType || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #414042;">Name:</td><td style="padding: 8px 0; color: #666;">${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #414042;">Email:</td><td style="padding: 8px 0; color: #666;">${email}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #414042;">Phone:</td><td style="padding: 8px 0; color: #666;">${phone || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #414042;">Company:</td><td style="padding: 8px 0; color: #666;">${companyName || 'Not provided'}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold; color: #414042;">Address:</td><td style="padding: 8px 0; color: #666;">${companyAddress || 'Not provided'}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 3px solid #ee3124;">
            <p style="font-weight: bold; color: #414042; margin: 0 0 8px 0;">Message:</p>
            <p style="color: #666; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
        <div style="background-color: #414042; padding: 15px; text-align: center;">
          <p style="color: #999; font-size: 12px; margin: 0;">Resolute ISR &mdash; Contact Form Submission</p>
        </div>
      </div>
    `

    const formData = new FormData()
    formData.append('from', `Resolute ISR <noreply@${MAILGUN_DOMAIN}>`)
    formData.append('to', NOTIFICATION_EMAIL_1)
    formData.append('to', NOTIFICATION_EMAIL_2)
    formData.append('h:Reply-To', email)
    formData.append('subject', `New Contact Form Submission - ${inquiryType || 'General'}`)
    formData.append('html', emailContent)

    const response = await fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`
      },
      body: formData
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Mailgun error:', errorData)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
