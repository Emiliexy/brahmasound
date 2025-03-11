'use client'

import { useState } from 'react'
import { 
  HeartIcon, SparklesIcon, CloudIcon, LightBulbIcon,
  FunnelIcon, ChevronDownIcon, ChevronUpIcon
} from '@heroicons/react/24/outline'
import { useTranslation } from '@/hooks/useTranslation'

const categories = {
  purpose: [
    { id: 'blessing', name: '祈福', icon: HeartIcon },
    { id: 'karma', name: '消业', icon: SparklesIcon },
    { id: 'transcendence', name: '超度', icon: CloudIcon },
    { id: 'wisdom', name: '智慧开悟', icon: LightBulbIcon },
  ],
  deity: [
    {
      id: 'sakyamuni',
      name: '释迦牟尼佛',
      icon: '/images/icons/buddha.svg',
      description: '本师佛陀，三界导师'
    },
    {
      id: 'guanyin',
      name: '观音菩萨',
      icon: '/images/icons/guanyin.svg',
      description: '大慈大悲，救苦救难'
    },
    {
      id: 'ksitigarbha',
      name: '地藏菩萨',
      icon: '/images/icons/dizang.svg',
      description: '地狱不空，誓不成佛'
    },
    {
      id: 'amitabha',
      name: '阿弥陀佛',
      icon: '/images/icons/amitabha.svg',
      description: '西方极乐世界教主'
    },
    {
      id: 'bhaisajya',
      name: '药师佛',
      icon: '/images/icons/yaoshi.svg',
      description: '消灾延寿，消业障'
    },
    {
      id: 'manjusri',
      name: '文殊菩萨',
      icon: '/images/icons/wenshu.svg',
      description: '大智慧菩萨'
    },
    {
      id: 'samantabhadra',
      name: '普贤菩萨',
      icon: '/images/icons/puxian.svg',
      description: '大行愿菩萨'
    },
    {
      id: 'maitreya',
      name: '弥勒菩萨',
      icon: '/images/icons/mile.svg',
      description: '未来佛，大慈氏'
    },
    {
      id: 'mahasthamaprapta',
      name: '大势至菩萨',
      icon: '/images/icons/dashizhi.svg',
      description: '智慧光明，念佛法门'
    }
  ],
  school: [
    { 
      id: 'pureland', 
      name: '净土宗',
      icon: '/images/icons/lotus.svg',
      description: '以念佛为主要修行方法'
    },
    { 
      id: 'chan', 
      name: '禅宗',
      icon: '/images/icons/zen.svg',
      description: '以心传心，直指人心'
    }
  ]
}

interface FilterDropdownProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ title, isOpen, onToggle, children }) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 hover:bg-white/90 
                 border border-primary-gold/20 transition-all duration-200"
    >
      <span className="text-dark-brown font-song">{title}</span>
      <ChevronDownIcon 
        className={`w-4 h-4 text-primary-gold transition-transform duration-200 
                    ${isOpen ? 'transform rotate-180' : ''}`}
      />
    </button>
    {isOpen && (
      <div className="absolute z-40 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-xl 
                    shadow-lg border border-primary-gold/20 py-2">
        {children}
      </div>
    )}
  </div>
)

const CategoryFilter = () => {
  const { t } = useTranslation()
  const [selectedPurpose, setSelectedPurpose] = useState<string>('')
  const [selectedDeity, setSelectedDeity] = useState<string>('')
  const [selectedSchool, setSelectedSchool] = useState<string>('')
  const [openFilter, setOpenFilter] = useState<string | null>(null)

  const handleFilterToggle = (filter: string) => {
    setOpenFilter(openFilter === filter ? null : filter)
  }

  const handlePurposeClick = (id: string) => {
    setSelectedPurpose(selectedPurpose === id ? '' : id)
  }

  const handleDeityClick = (id: string) => {
    setSelectedDeity(selectedDeity === id ? '' : id)
  }

  const handleSchoolClick = (id: string) => {
    setSelectedSchool(selectedSchool === id ? '' : id)
  }

  return (
    <div className="flex items-center gap-4">
      <FunnelIcon className="w-5 h-5 text-primary-gold" />
      
      {/* 修行目的筛选 */}
      <FilterDropdown
        title={t('filter.purpose')}
        isOpen={openFilter === 'purpose'}
        onToggle={() => handleFilterToggle('purpose')}
      >
        {[
          { id: 'wisdom', label: t('filter.purpose.wisdom') },
          { id: 'blessing', label: t('filter.purpose.blessing') },
          { id: 'purification', label: t('filter.purpose.purification') },
          { id: 'meditation', label: t('filter.purpose.meditation') }
        ].map(purpose => (
          <button
            key={purpose.id}
            onClick={() => handlePurposeClick(purpose.id)}
            className="block w-full text-left px-4 py-2 text-sm text-dark-brown hover:bg-light-gold/50 
                     transition-colors font-song"
          >
            {purpose.label}
          </button>
        ))}
      </FilterDropdown>

      {/* 本尊筛选 */}
      <FilterDropdown
        title={t('filter.deity')}
        isOpen={openFilter === 'deity'}
        onToggle={() => handleFilterToggle('deity')}
      >
        {[
          { id: 'guanyin', label: t('filter.deity.guanyin') },
          { id: 'amitabha', label: t('filter.deity.amitabha') },
          { id: 'shakyamuni', label: t('filter.deity.shakyamuni') },
          { id: 'medicine', label: t('filter.deity.medicine') }
        ].map(deity => (
          <button
            key={deity.id}
            onClick={() => handleDeityClick(deity.id)}
            className="block w-full text-left px-4 py-2 text-sm text-dark-brown hover:bg-light-gold/50 
                     transition-colors font-song"
          >
            {deity.label}
          </button>
        ))}
      </FilterDropdown>

      {/* 宗派筛选 */}
      <FilterDropdown
        title={t('filter.school')}
        isOpen={openFilter === 'school'}
        onToggle={() => handleFilterToggle('school')}
      >
        {[
          { id: 'chan', label: t('filter.school.chan') },
          { id: 'pure-land', label: t('filter.school.pure-land') },
          { id: 'tantra', label: t('filter.school.tantra') },
          { id: 'huayan', label: t('filter.school.huayan') }
        ].map(school => (
          <button
            key={school.id}
            onClick={() => handleSchoolClick(school.id)}
            className="block w-full text-left px-4 py-2 text-sm text-dark-brown hover:bg-light-gold/50 
                     transition-colors font-song"
          >
            {school.label}
          </button>
        ))}
      </FilterDropdown>

      {/* 已选筛选项展示 */}
      {(selectedPurpose || selectedDeity || selectedSchool) && (
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => {
              setSelectedPurpose('')
              setSelectedDeity('')
              setSelectedSchool('')
            }}
            className="text-xs text-primary-gold hover:text-burgundy transition-colors"
          >
            清除筛选
          </button>
        </div>
      )}
    </div>
  )
}

export default CategoryFilter 