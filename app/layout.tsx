import type { Metadata } from 'next'
import { organizationSchema, servicesSchema, reviewSchema } from '@/lib/schema'
import './globals.css'

export const metadata: Metadata = {
  title: 'Resolute ISR | Superior Intelligence, Surveillance & Reconnaissance',
  description: 'Resolute ISR delivers superior UAS platforms and ISR capabilities. Original manufacturer of the Resolute Eagle with runway independence, advanced sensors, and mission-critical technology for land and sea operations.',
  keywords: 'ISR, intelligence surveillance reconnaissance, UAS, unmanned aerial systems, Resolute Eagle, drone technology, VTOL, runway independent, aerial intelligence, C4ISR, military drones, defense contractors',
  metadataBase: new URL('https://resoluteisr.com'),
  openGraph: {
    type: 'website',
    url: 'https://resoluteisr.com',
    title: 'Resolute ISR | Superior ISR Capabilities',
    description: 'Original manufacturer of the Resolute Eagle UAS platform. Superior capabilities and advanced technology for Intelligence, Surveillance, and Reconnaissance missions.',
    siteName: 'Resolute ISR',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resolute ISR',
    description: 'Superior Intelligence, Surveillance & Reconnaissance Capabilities',
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
        <meta name="theme-color" content="rgba(238, 49, 36, 0.75)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
