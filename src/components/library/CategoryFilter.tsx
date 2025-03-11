'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import useTranslation from '@/hooks/useTranslation'

export const CategoryFilter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 text-gray-700 bg-white rounded-lg shadow hover:bg-gray-50"
      >
        <span>{t('library.filter.category')}</span>
        <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
    </div>
  )
}

export default CategoryFilter 