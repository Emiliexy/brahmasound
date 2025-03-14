'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const { t } = useTranslation()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 实现搜索功能
    console.log('搜索:', searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="relative flex-1 max-w-xl mx-auto">
      <div className={`relative flex items-center transition-all duration-300 ${
        isFocused ? 'transform scale-[1.01]' : ''
      }`}>
        <div className="relative flex-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={t('library.search.placeholder')}
            className="w-full h-12 pl-12 pr-4 bg-white/90 backdrop-blur-md rounded-l-xl 
                     shadow-[0_2px_8px_rgba(184,134,11,0.1)] border-2 border-r-0 border-primary-gold/20 
                     focus:outline-none focus:border-primary-gold/40
                     text-base font-song placeholder-gray-400 transition-all duration-300"
          />
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary-gold" />
        </div>
        <button
          type="submit"
          className="h-12 px-6 bg-primary-gold hover:bg-deep-gold transition-colors duration-300 
                   rounded-r-xl border-2 border-primary-gold flex items-center justify-center"
          aria-label={t('library.search')}
        >
          <MagnifyingGlassIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* 搜索建议 */}
      {searchQuery && (
        <div className="absolute z-50 w-full mt-2 bg-white/95 backdrop-blur-md rounded-xl 
                      shadow-[0_4px_12px_rgba(184,134,11,0.1)] border border-primary-gold/20">
          <div className="p-6">
            <div className="space-y-4">
              <p className="text-sm text-gray-500 font-song">{t('library.suggestions')}：</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  t('sutra.heart'),
                  t('sutra.compassion'),
                  t('sutra.diamond'),
                  t('sutra.amitabha'),
                  t('sutra.avalokitesvara.short'),
                  t('sutra.great-compassion.short')
                ].map((item) => (
                  <button
                    key={item}
                    className="text-left px-4 py-3 rounded-lg hover:bg-light-gold/50 
                             text-dark-brown font-song text-sm transition-all duration-200
                             hover:shadow-sm border border-transparent hover:border-primary-gold/20"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}

export default SearchBar 