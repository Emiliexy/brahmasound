import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Brahmasound 梵海清音 - 在线礼佛平台',
  description: '在线礼佛、诵经念佛、佛法修行平台',
  icons: {
    icon: '/images/icon/logo.png',
    apple: '/images/icon/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="lotus-pattern">
        <Navbar />
        <main className="min-h-screen px-4 py-8 max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  )
}
