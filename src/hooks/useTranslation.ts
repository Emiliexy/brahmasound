import { useContext } from 'react'
import { LanguageContext } from '@/contexts/LanguageContext'
import { translations } from '@/i18n/translations'
import { Locale } from '@/i18n/config'

type TranslationKey = keyof typeof translations['zh-CN']
type TranslationParams = Record<string, string | number>

export const useTranslation = () => {
  const { locale } = useContext(LanguageContext)

  const t = (key: TranslationKey, params?: TranslationParams): string => {
    const translation = translations[locale as Locale]?.[key] || translations['zh-CN'][key]
    if (!translation) return key

    if (params) {
      return Object.entries(params).reduce(
        (acc, [key, value]) => acc.replace(`{{${key}}}`, String(value)),
        translation
      )
    }

    return translation
  }

  return { t, locale }
}

export default useTranslation 