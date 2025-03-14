'use client'

import { useTranslation } from '@/hooks/useTranslation'
import SutraCard from './SutraCard'

// 这里可以从本地存储或API获取最近阅读的经文
const recentSutras = [
  {
    id: 'heart-sutra',
    titleKey: 'sutra.heart',
    descriptionKey: 'sutra.heart.description',
    categoryKey: 'category.wisdom',
    image: '/images/sutras/heart-sutra.jpg',
    link: '/library/heart-sutra'
  }
]

const RecentlyRead = () => {
  const { t } = useTranslation()

  if (recentSutras.length === 0) {
    return null
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-kai font-bold text-burgundy mb-6">
        {t('library.recent')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentSutras.map((sutra) => (
          <SutraCard key={sutra.id} {...sutra} />
        ))}
      </div>
    </section>
  )
}

export default RecentlyRead 