import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { LocaleProvider } from '@/contexts/LocaleContext'

type Locale = 'zh-CN' | 'zh-TW'

const metadata: Record<string, Metadata> = {
  'zh-CN': {
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
        'zh-TW': 'https://brahmasound.com/zh-tw',
      },
    },
    category: '佛教文化',
  },
  'zh-TW': {
    metadataBase: new URL('https://brahmasound.com'),
    title: '【線上佛堂】觀音菩薩線上祈福 | 即時誦經念佛 | BrahmaSound',
    description: 'BrahmaSound數位佛堂為您開啟雲端禮佛新體驗。線上供奉觀音菩薩，即時祈願誦經，提供《般若波羅蜜多心經》《普門品》等經典誦讀。每日佛號共修、功德迴向指引，助您居家淨心、消災增慧。無論身在何處，皆可禮敬觀音菩薩，獲慈悲加持。',
    keywords: '線上拜觀音,觀音菩薩線上祈福,般若波羅蜜多心經誦讀,普門品念誦,佛教線上修行,念佛共修,觀音菩薩聖號,居家拜佛,數位佛堂,佛經線上聽誦,菩提心修行,佛教心靈成長,慈悲加持,消災祈福,佛教文化傳承',
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
      title: '【線上佛堂】觀音菩薩線上祈福 | 即時誦經念佛 | BrahmaSound',
      description: 'BrahmaSound數位佛堂為您開啟雲端禮佛新體驗。線上供奉觀音菩薩，即時祈願誦經，提供經典誦讀。每日佛號共修、功德迴向指引，助您居家淨心、消災增慧。',
      type: 'website',
      locale: 'zh_TW',
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
      title: '【線上佛堂】觀音菩薩線上祈福 | 即時誦經念佛 | BrahmaSound',
      description: 'BrahmaSound數位佛堂為您開啟雲端禮佛新體驗。線上供奉觀音菩薩，即時祈願誦經，提供經典誦讀。每日佛號共修、功德迴向指引，助您居家淨心、消災增慧。',
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
      canonical: 'https://brahmasound.com/zh-tw',
      languages: {
        'zh-CN': 'https://brahmasound.com',
        'zh-TW': 'https://brahmasound.com/zh-tw',
      },
    },
    category: '佛教文化',
  }
}

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

export const generateMetadata = async ({
  params: { locale = 'zh-CN' }
}: MetadataParams) => {
  const currentLocale = locale as Locale
  const schemaData: Record<Locale, SchemaData> = {
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

  return {
    title: {
      template: '%s | BrahmaSound 梵海清音',
      default: 'BrahmaSound 梵海清音 - 在线礼佛·在线祈愿平台'
    },
    description: schemaData[currentLocale].website.description,
    keywords: ['在线礼佛', '在线祈愿', '观音菩萨', '诵经', '佛教', '数字佛堂'],
    openGraph: {
      title: 'BrahmaSound 梵海清音 - 在线礼佛·在线祈愿平台',
      description: schemaData[currentLocale].website.description,
      url: 'https://brahmasound.com',
      siteName: 'BrahmaSound 梵海清音',
      images: [
        {
          url: 'https://brahmasound.com/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'BrahmaSound 梵海清音'
        }
      ],
      locale: currentLocale,
      type: 'website'
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BrahmaSound 梵海清音 - 在线礼佛·在线祈愿平台',
      description: schemaData[currentLocale].website.description,
      creator: '@brahmasound',
      images: ['https://brahmasound.com/images/twitter-image.jpg']
    },
    verification: {
      google: 'google-site-verification-code',
      yandex: 'yandex-verification-code',
      baidu: 'baidu-site-verification-code'
    },
    alternates: {
      canonical: 'https://brahmasound.com',
      languages: {
        'zh-CN': 'https://brahmasound.com/zh-CN',
        'zh-TW': 'https://brahmasound.com/zh-TW'
      }
    }
  }
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
