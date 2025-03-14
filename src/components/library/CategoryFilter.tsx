'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

interface FilterOption {
  key: string
  label: string
}

interface FilterSection {
  title: string
  options: FilterOption[]
}

export const CategoryFilter = () => {
  const { t } = useTranslation()
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({
    purpose: [],
    deity: [],
    school: []
  })

  const filterSections: FilterSection[] = [
    {
      title: t('filter.purpose'),
      options: [
        { key: 'wisdom', label: t('filter.purpose.wisdom') },
        { key: 'blessing', label: t('filter.purpose.blessing') },
        { key: 'purification', label: t('filter.purpose.purification') },
        { key: 'meditation', label: t('filter.purpose.meditation') }
      ]
    },
    {
      title: t('filter.deity'),
      options: [
        { key: 'guanyin', label: t('filter.deity.guanyin') },
        { key: 'amitabha', label: t('filter.deity.amitabha') },
        { key: 'shakyamuni', label: t('filter.deity.shakyamuni') },
        { key: 'medicine', label: t('filter.deity.medicine') }
      ]
    },
    {
      title: t('filter.school'),
      options: [
        { key: 'chan', label: t('filter.school.chan') },
        { key: 'pure-land', label: t('filter.school.pure-land') },
        { key: 'tantra', label: t('filter.school.tantra') },
        { key: 'huayan', label: t('filter.school.huayan') }
      ]
    }
  ]

  const toggleFilter = (section: string, key: string) => {
    setActiveFilters(prev => {
      const sectionFilters = prev[section]
      const newFilters = sectionFilters.includes(key)
        ? sectionFilters.filter(k => k !== key)
        : [...sectionFilters, key]
      
      return {
        ...prev,
        [section]: newFilters
      }
    })
  }

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-[0_2px_8px_rgba(184,134,11,0.1)] 
                    border-2 border-primary-gold/20 p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filterSections.map((section, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-lg font-kai font-bold text-burgundy">
              {section.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {section.options.map((option) => {
                const sectionKey = ['purpose', 'deity', 'school'][index]
                const isActive = activeFilters[sectionKey]?.includes(option.key)
                
                return (
                  <button
                    key={option.key}
                    onClick={() => toggleFilter(sectionKey, option.key)}
                    className={`px-4 py-2 rounded-lg text-sm font-song transition-all duration-200
                              ${isActive 
                                ? 'bg-primary-gold text-white shadow-sm' 
                                : 'bg-light-gold/30 text-dark-brown hover:bg-light-gold/50'
                              }`}
                  >
                    {option.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryFilter 