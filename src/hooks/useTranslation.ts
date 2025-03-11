import { useContext } from 'react'
import { LanguageContext } from '@/contexts/LanguageContext'
import { Locale } from '@/i18n/config'

interface UseTranslation {
  t: (key: string, params?: Record<string, any>) => string;
  locale: Locale;
}

export const useTranslation = (): UseTranslation => {
  const { locale, translations } = useContext(LanguageContext)

  const t = (key: string, params?: Record<string, any>): string => {
    let translation = translations[key] || key

    if (params) {
      Object.keys(params).forEach(param => {
        translation = translation.replace(`{${param}}`, params[param])
      })
    }

    return translation
  }

  return { t, locale }
} 