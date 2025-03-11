'use client'

import { useState } from 'react'
import { useLocale } from '@/contexts/LocaleContext'
import { locales, localeNames } from '@/i18n/config'
import { LanguageIcon } from '@heroicons/react/24/outline'

export default function LocaleSwitch() {
  const { locale, setLocale } = useLocale()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1.5 text-light-gold hover:text-primary-gold transition-colors"
        aria-label="切换语言"
      >
        <LanguageIcon className="w-5 h-5" />
        <span className="text-sm">{localeNames[locale]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-32 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-primary-gold/20 py-1 z-50">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setLocale(loc)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-light-gold/50 transition-colors ${
                locale === loc ? 'text-primary-gold font-bold' : 'text-dark-brown'
              }`}
            >
              {localeNames[loc]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 