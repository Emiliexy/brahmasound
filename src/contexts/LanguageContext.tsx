'use client'

import React, { createContext, useState, useEffect } from 'react'
import { Locale } from '@/i18n/config'
import zhCN from '@/i18n/locales/zh-CN.json'
import zhTW from '@/i18n/locales/zh-TW.json'

interface LanguageContextType {
  locale: Locale
  translations: Record<string, string>
  setLocale: (locale: Locale) => void
  detectionSource: 'localStorage' | 'browser' | 'ip' | 'default'
}

export const LanguageContext = createContext<LanguageContextType>({
  locale: 'zh-CN',
  translations: zhCN,
  setLocale: () => {},
  detectionSource: 'default'
})

const translations = {
  'zh-CN': zhCN,
  'zh-TW': zhTW
}

// 检测用户的语言偏好
const detectUserLanguage = async (): Promise<[Locale, 'localStorage' | 'browser' | 'ip' | 'default']> => {
  // 1. 首先检查 localStorage 中保存的语言设置
  const savedLocale = localStorage.getItem('locale') as Locale
  if (savedLocale && (savedLocale === 'zh-CN' || savedLocale === 'zh-TW')) {
    return [savedLocale, 'localStorage']
  }

  // 2. 检查浏览器语言设置
  const browserLangs = navigator.languages || [navigator.language]
  
  // 遍历浏览器语言列表
  for (const lang of browserLangs) {
    const normalizedLang = lang.toLowerCase()
    
    // 检查是否匹配繁体中文区域
    if (
      normalizedLang.startsWith('zh-tw') || 
      normalizedLang.startsWith('zh-hk') || 
      normalizedLang.startsWith('zh-mo')
    ) {
      return ['zh-TW', 'browser']
    }
    
    // 检查是否匹配简体中文区域
    if (
      normalizedLang.startsWith('zh-cn') || 
      normalizedLang.startsWith('zh-sg') ||
      normalizedLang === 'zh'
    ) {
      return ['zh-CN', 'browser']
    }
  }

  try {
    // 3. 尝试通过 IP 地理位置检测用户区域
    const response = await fetch('https://ipapi.co/json/')
    const data = await response.json()
    
    // 根据国家/地区代码判断
    if (data.country_code === 'CN' || data.country_code === 'SG') {
      return ['zh-CN', 'ip']
    }
    if (['TW', 'HK', 'MO'].includes(data.country_code)) {
      return ['zh-TW', 'ip']
    }
  } catch (error) {
    console.error('IP detection failed:', error)
  }

  // 4. 默认返回简体中文
  return ['zh-CN', 'default']
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('zh-CN')
  const [detectionSource, setDetectionSource] = useState<'localStorage' | 'browser' | 'ip' | 'default'>('default')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // 仅在客户端执行语言检测
    if (typeof window !== 'undefined' && !isInitialized) {
      detectUserLanguage().then(([detectedLocale, source]) => {
        setLocale(detectedLocale)
        setDetectionSource(source)
        setIsInitialized(true)
      })
    }
  }, [isInitialized])

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('locale', locale)
    }
  }, [locale, isInitialized])

  return (
    <LanguageContext.Provider 
      value={{
        locale,
        translations: translations[locale],
        setLocale,
        detectionSource
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
} 