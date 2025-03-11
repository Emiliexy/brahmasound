import { useLocale } from '@/contexts/LocaleContext'
import { translations } from '@/i18n/translations'

type TranslationKey = keyof typeof translations['zh-CN']
type TranslationParams = Record<string, string | number>

export const useTranslation = () => {
  const { locale } = useLocale()

  const t = (key: TranslationKey, params?: TranslationParams): string => {
    const translation = translations[locale]?.[key] || translations['zh-CN'][key]
    if (!translation) return key

    if (params) {
      return Object.entries(params).reduce(
        (acc, [key, value]) => acc.replace(`{{${key}}}`, String(value)),
        translation
      )
    }

    return translation
  }

  return { t }
}

export default useTranslation 