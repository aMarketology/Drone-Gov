import { NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'newsletter-signups.json')

    // Create data directory if it doesn't exist
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    // Read existing signups or create new array
    let signups = []
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, 'utf-8')
      signups = JSON.parse(fileContent)
    }

    // Check if email already exists
    if (signups.some((signup: any) => signup.email === email)) {
      return NextResponse.json({ message: 'Already subscribed' }, { status: 200 })
    }

    // Add new signup
    signups.push({
      email,
      subscribedAt: new Date().toISOString()
    })

    // Save to file
    await writeFile(filePath, JSON.stringify(signups, null, 2))

    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Newsletter signup error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
