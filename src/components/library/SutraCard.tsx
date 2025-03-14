'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export interface SutraCardProps {
  id: string
  titleKey: string
  descriptionKey: string
  categoryKey: string
  image: string
  link: string
}

const SutraCard = ({ 
  titleKey, 
  descriptionKey, 
  categoryKey, 
  image, 
  link 
}: SutraCardProps) => {
  const { t } = useTranslation()

  return (
    <Link
      href={link}
      className="group block bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-primary-gold/20 
                 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary-gold/40"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={t(titleKey)}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-kai font-bold text-burgundy mb-2">
          {t(titleKey)}
        </h3>
        <p className="text-gray-600 font-song text-sm mb-4 line-clamp-2">
          {t(descriptionKey)}
        </p>
        <div className="flex items-center justify-end text-sm">
          <span className="text-primary-gold/80">
            {t(categoryKey)}
          </span>
        </div>
      </div>
    </Link>
  )
}

export default SutraCard 