import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { LocaleProvider } from '@/contexts/LocaleContext'

type Locale = 'zh-CN' | 'zh-TW'

interface SchemaData {
  website: {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    description: string;
    potentialAction: {
      "@type": string;
      target: string;
      "query-input": string;
    };
  };
  organization: {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    logo: string;
    description: string;
    sameAs: string[];
  };
}

const schemaData: Record<'zh-CN' | 'zh-TW', SchemaData> = {
  'zh-CN': {
    website: {
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
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BrahmaSound 梵海清音",
      "url": "https://brahmasound.com",
      "logo": "https://brahmasound.com/images/logo.png",
      "description": "BrahmaSound数字佛堂为您开启云端礼佛新体验。在线供奉观音菩萨，即时祈愿诵经，提供经典诵读。",
      "sameAs": [
        "https://twitter.com/brahmasound",
        "https://facebook.com/brahmasound"
      ]
    }
  },
  'zh-TW': {
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "BrahmaSound 梵海清音",
      "url": "https://brahmasound.com",
      "description": "BrahmaSound數位佛堂為您開啟雲端禮佛新體驗。線上供奉觀音菩薩，即時祈願誦經，提供經典誦讀。",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://brahmasound.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BrahmaSound 梵海清音",
      "url": "https://brahmasound.com",
      "logo": "https://brahmasound.com/images/logo.png",
      "description": "BrahmaSound數位佛堂為您開啟雲端禮佛新體驗。線上供奉觀音菩薩，即時祈願誦經，提供經典誦讀。",
      "sameAs": [
        "https://twitter.com/brahmasound",
        "https://facebook.com/brahmasound"
      ]
    }
  }
}

interface Params {
  locale?: string;
}

interface MetadataParams {
  params: Params;
}

interface RootLayoutProps {
  children: React.ReactNode;
  params?: Params;
}

export async function generateMetadata({ params }: MetadataParams) {
  const currentLocale = params.locale as Locale || 'zh-CN'
  return schemaData[currentLocale].website
}

export default function RootLayout({
  children,
  params = { locale: 'zh-CN' }
}: RootLayoutProps) {
  const locale = params.locale as keyof typeof schemaData || 'zh-CN'
  const schema = schemaData[locale]

  return (
    <html lang={locale === 'zh-CN' ? 'zh-CN' : 'zh-TW'}>
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
            function gtag(...args: unknown[]): void {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'G-TMDX45V18R');
          `}
        </Script>
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify(schema.website)}
        </Script>
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify(schema.organization)}
        </Script>
      </head>
      <body className="lotus-pattern">
        <LocaleProvider>
          <LanguageProvider>
            <Navbar />
            <main className="min-h-screen px-2 sm:px-4 py-4 sm:py-8 max-w-7xl mx-auto">
              {children}
            </main>
            <Footer />
            <Toaster position="top-center" />
          </LanguageProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
