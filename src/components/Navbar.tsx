'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useContext, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import LanguageSwitch from './LanguageSwitch'
import { useTranslation } from '@/hooks/useTranslation'
import { LanguageContext } from '@/contexts/LanguageContext'
import toast from 'react-hot-toast'

const Navbar = () => {
  const { locale, detectionSource } = useContext(LanguageContext)
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasShownNotification, setHasShownNotification] = useState(false)

  useEffect(() => {
    // 仅在首次加载时显示语言检测提示
    if (!hasShownNotification && detectionSource !== 'localStorage') {
      const savedLocale = localStorage.getItem('detected_locale_notified')
      if (!savedLocale) {
        // 根据检测来源显示不同的提示
        let message = ''
        let icon = '🌏'
        
        switch (detectionSource) {
          case 'browser':
            message = t('language.browser-detected')
            icon = '🌐'
            break
          case 'ip':
            message = t('language.auto-detected')
            icon = '📍'
            break
          default:
            message = t('language.switch-success')
            icon = '🌏'
        }

        toast.success(message, {
          duration: 3000,
          icon
        })
        
        localStorage.setItem('detected_locale_notified', 'true')
      }
      setHasShownNotification(true)
    }
  }, [locale, hasShownNotification, detectionSource, t])

  return (
    <nav className="bg-burgundy/90 shadow-md sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 品牌标识 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/icon/logo.png"
                  alt="Brahmasound Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-kai font-bold text-scroll-gold/90">
                  Brahmasound 梵海清音
                </span>
                <span className="text-sm sm:text-base text-light-gold/80">
                  {t('nav.platform')}
                </span>
              </div>
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="flex items-center sm:hidden">
            <LanguageSwitch />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-gold hover:text-primary-gold p-2"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* 桌面端导航菜单 */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="/" className="nav-link text-light-gold hover:text-primary-gold">
              {t('nav.home')}
            </Link>
            <Link href="#worship" className="nav-link text-light-gold hover:text-primary-gold">
              {t('nav.worship')}
            </Link>
            <Link href="#chanting" className="nav-link text-light-gold hover:text-primary-gold">
              {t('nav.chanting')}
            </Link>
            <Link href="/library" className="nav-link text-light-gold hover:text-primary-gold">
              {t('library.title')}
            </Link>
            <Link href="#practice" className="nav-link text-light-gold hover:text-primary-gold">
              {t('nav.practice')}
            </Link>
            <LanguageSwitch />
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-burgundy/95 border-t border-light-gold/10">
          <Link 
            href="/" 
            className="block px-3 py-2 text-light-gold hover:text-primary-gold font-kai"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.home')}
          </Link>
          <Link 
            href="#worship" 
            className="block px-3 py-2 text-light-gold hover:text-primary-gold font-kai"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.worship')}
          </Link>
          <Link 
            href="#chanting" 
            className="block px-3 py-2 text-light-gold hover:text-primary-gold font-kai"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.chanting')}
          </Link>
          <Link 
            href="/library" 
            className="block px-3 py-2 text-light-gold hover:text-primary-gold font-kai"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('library.title')}
          </Link>
          <Link 
            href="#practice" 
            className="block px-3 py-2 text-light-gold hover:text-primary-gold font-kai"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('nav.practice')}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 