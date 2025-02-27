import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

export const metadata: Metadata = {
  metadataBase: new URL('https://brahmasound.com'),
  title: '【在线佛堂】观音菩萨在线祈福 | 即时诵经念佛 | BrahmaSound',
  description: 'BrahmaSound数字佛堂为您开启云端礼佛新体验。在线供奉观音菩萨，即时祈愿诵经，提供《般若波罗蜜多心经》《普门品》等经典诵读。每日佛号共修、功德回向指引，助您居家净心、消灾增慧。无论身在何处，皆可礼敬观音菩萨，获慈悲加持。',
  keywords: '在线拜观音,观音菩萨在线祈福,般若波罗蜜多心经诵读,普门品念诵,佛教在线修行,念佛共修,观音菩萨圣号,居家拜佛,数字佛堂,佛经在线听诵,菩提心修行,佛教心灵成长,慈悲加持,消灾祈福,佛教文化传承',
  applicationName: 'BrahmaSound 梵海清音',
  authors: [{ name: 'BrahmaSound Team' }],
  generator: 'Next.js',
  other: {
    'google-adsense-account': 'ca-pub-2909094795372025'
  },
  icons: {
    icon: '/images/icon/logo.png',
    apple: '/images/icon/logo.png',
  },
  manifest: '/manifest.json',
  themeColor: '#B8860B',
  colorScheme: 'light',
  openGraph: {
    title: '【在线佛堂】观音菩萨在线祈福 | 即时诵经念佛 | BrahmaSound',
    description: 'BrahmaSound数字佛堂为您开启云端礼佛新体验。在线供奉观音菩萨，即时祈愿诵经，提供经典诵读。每日佛号共修、功德回向指引，助您居家净心、消灾增慧。',
    type: 'website',
    locale: 'zh_CN',
    url: 'https://brahmasound.com',
    siteName: 'BrahmaSound 梵海清音',
    images: [
      {
        url: '/images/icon/logo.png',
        width: 800,
        height: 600,
        alt: 'BrahmaSound Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '【在线佛堂】观音菩萨在线祈福 | 即时诵经念佛 | BrahmaSound',
    description: 'BrahmaSound数字佛堂为您开启云端礼佛新体验。在线供奉观音菩萨，即时祈愿诵经，提供经典诵读。每日佛号共修、功德回向指引，助您居家净心、消灾增慧。',
    site: '@brahmasound',
    creator: '@brahmasound',
    images: ['/images/icon/logo.png'],
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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://brahmasound.com',
    languages: {
      'zh-CN': 'https://brahmasound.com',
    },
  },
  category: '佛教文化',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2909094795372025"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TMDX45V18R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TMDX45V18R');
          `}
        </Script>
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BrahmaSound 梵海清音",
              "url": "https://brahmasound.com",
              "description": "BrahmaSound数字佛堂为您开启云端礼佛新体验。在线供奉观音菩萨，即时祈愿诵经，提供经典诵读。",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://brahmasound.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
        <Script id="organization-schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "BrahmaSound 梵海清音",
              "url": "https://brahmasound.com",
              "logo": "https://brahmasound.com/images/icon/logo.png",
              "sameAs": [
                "https://twitter.com/brahmasound",
                "https://www.facebook.com/brahmasound"
              ]
            }
          `}
        </Script>
      </head>
      <body className="lotus-pattern">
        <Navbar />
        <main className="min-h-screen px-2 sm:px-4 py-4 sm:py-8 max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
