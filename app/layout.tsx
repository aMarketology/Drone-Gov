import type { Metadata } from 'next'
import { organizationSchema, servicesSchema, reviewSchema } from '@/lib/schema'
import './globals.css'
import Providers from './components/Providers'

export const metadata: Metadata = {
  title: '48 States | Nationwide 3PL Logistics Solutions',
  description: 'Comprehensive third-party logistics solutions across all 48 continental states. Full truckload, LTL, expedited shipping, and specialized freight services.',
  keywords: '3PL, logistics, freight, trucking, FTL, LTL, expedited shipping, nationwide shipping, third-party logistics',
  metadataBase: new URL('https://48states.com'),
  openGraph: {
    type: 'website',
    url: 'https://48states.com',
    title: '48 States | Nationwide 3PL Logistics Solutions',
    description: 'Comprehensive third-party logistics solutions across all 48 continental states.',
    siteName: '48 States',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '48 States Logistics',
    description: 'Nationwide 3PL Solutions - FTL, LTL, Expedited Shipping',
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
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="dark:bg-gray-900 transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
