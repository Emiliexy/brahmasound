'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Locale, defaultLocale } from '@/i18n/config'

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  // 从 localStorage 加载语言设置
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale
    if (savedLocale) {
      setLocale(savedLocale)
    }
  }, [])

  // 保存语言设置到 localStorage
  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
} 