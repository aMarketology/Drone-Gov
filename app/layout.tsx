import type { Metadata } from 'next'
import { organizationSchema, servicesSchema, reviewSchema } from '@/lib/schema'
import './globals.css'

export const metadata: Metadata = {
  title: 'Resolute ISR | Intelligence, Surveillance & Reconnaissance',
  description: 'Original equipment manufacturer of the Resolute Eagle UAS platform. Superior capabilities, advanced technology, and runway-independent operations for ISR missions.',
  keywords: 'ISR, intelligence surveillance reconnaissance, UAS, unmanned aerial systems, VTOL, fixed wing, drone, Resolute Eagle, military drone, tactical ISR',
  metadataBase: new URL('https://resoluteisr.com'),
  openGraph: {
    type: 'website',
    url: 'https://resoluteisr.com',
    title: 'Resolute ISR | Intelligence, Surveillance & Reconnaissance',
    description: 'Original equipment manufacturer of the Resolute Eagle UAS platform with superior capabilities and advanced technology.',
    siteName: 'Resolute ISR',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resolute ISR',
    description: 'Intelligence, Surveillance & Reconnaissance - Superior UAS Capabilities',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-verification" />
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#ff8c00" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
