'use client'

import { useTranslation } from '@/hooks/useTranslation'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-text-gray py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white text-sm">
          © 2024-{currentYear} Brahmasound 梵海清音
        </p>
        <p className="text-white/80 text-xs mt-2">
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  )
}

export default Footer 