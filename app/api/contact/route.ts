import { NextResponse } from 'next/server'
import Mailjet from 'node-mailjet'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { inquiryType, companyName, companyAddress, name, email, phone, message } = body

    const mailjet = Mailjet.apiConnect(
      process.env.MAILJET_API_KEY!,
      process.env.MAILJET_SECRET_KEY!
    )

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Inquiry Type:</strong> ${inquiryType || 'Not specified'}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company Name:</strong> ${companyName || 'Not provided'}</p>
      <p><strong>Company Address:</strong> ${companyAddress || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `

    await mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: 'info@amarketology.com',
            Name: 'Resolute ISR Contact Form'
          },
          To: [
            {
              Email: process.env.NOTIFICATION_EMAIL_1!,
              Name: 'Resolute ISR'
            },
            {
              Email: process.env.NOTIFICATION_EMAIL_2!,
              Name: 'aMarketology'
            }
          ],
          Subject: `New Contact Form Submission - ${inquiryType || 'General'}`,
          HTMLPart: emailContent
        }
      ]
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
