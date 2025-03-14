'use client'

import { useTranslation } from '@/hooks/useTranslation'
import SutraCard from './SutraCard'

const recommendedSutras = [
  {
    id: 'heart-sutra',
    titleKey: 'sutra.heart',
    descriptionKey: 'sutra.heart.description',
    categoryKey: 'category.wisdom',
    image: '/images/sutras/heart-sutra.jpg',
    link: '/library/heart-sutra'
  },
  {
    id: 'diamond-sutra',
    titleKey: 'sutra.diamond',
    descriptionKey: 'sutra.diamond.description',
    categoryKey: 'category.wisdom',
    image: '/images/sutras/diamond-sutra.jpg',
    link: '/library/diamond-sutra'
  },
  {
    id: 'medicine-sutra',
    titleKey: 'sutra.medicine',
    descriptionKey: 'sutra.medicine.description',
    categoryKey: 'category.blessing',
    image: '/images/sutras/medicine-sutra.jpg',
    link: '/library/medicine-sutra'
  }
]

const RecommendedSutras = () => {
  const { t } = useTranslation()

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-kai font-bold text-burgundy mb-6">
        {t('library.recommended')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedSutras.map((sutra) => (
          <SutraCard key={sutra.id} {...sutra} />
        ))}
      </div>
    </section>
  )
}

export default RecommendedSutras