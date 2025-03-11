'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'

const RecommendedSutras = () => {
  const { t } = useTranslation()

  const recommendedSutras = [
    {
      id: 'heart-sutra',
      title: t('sutra.heart'),
      description: t('sutra.heart.description'),
      category: t('sutra.category.wisdom'),
      image: '/images/library/heart-sutra.jpg',
      link: '/library/heart-sutra'
    },
    {
      id: 'diamond-sutra',
      title: t('sutra.diamond'),
      description: t('sutra.diamond.description'),
      category: t('sutra.category.wisdom'),
      image: '/images/library/diamond-sutra.jpg',
      link: '/library/diamond-sutra'
    }
  ]

  return (
    <div>
      <h2 className="text-2xl font-kai font-bold text-burgundy mb-6 flex items-center">
        <BookOpenIcon className="w-6 h-6 mr-2 text-primary-gold" />
        {t('library.recommended')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendedSutras.map((sutra) => (
          <Link
            key={sutra.id}
            href={sutra.link}
            className="group block bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-primary-gold/20 
                     overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary-gold/40"
          >
            <div className="relative h-48">
              <Image
                src={sutra.image}
                alt={sutra.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-kai font-bold text-burgundy mb-2">
                {sutra.title}
              </h3>
              <p className="text-gray-600 font-song text-sm mb-4">
                {sutra.description}
              </p>
              <div className="flex items-center justify-end text-sm">
                <span className="text-primary-gold/80">
                  {sutra.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecommendedSutras