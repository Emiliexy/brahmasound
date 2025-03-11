'use client'

import { BookOpenIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import SearchBar from '@/components/library/SearchBar'
import CategoryFilter from '@/components/library/CategoryFilter'
import RecommendedSutras from '@/components/library/RecommendedSutras'
import RecentlyRead from '@/components/library/RecentlyRead'
import { useTranslation } from '@/hooks/useTranslation'

export default function LibraryPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-cream via-light-gold/5 to-bg-cream">
      <div className="absolute inset-0 bg-[url('/images/patterns/lotus-pattern-light.png')] opacity-5 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* 页面标题 */}
        <header className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold font-kai text-burgundy mb-4 drop-shadow-sm">
            {t('library.title')}
          </h1>
          <p className="text-lg text-gray-600 font-song">
            {t('library.subtitle')}
          </p>
        </header>

        {/* 搜索和筛选区域 */}
        <div className="relative z-50 bg-white/40 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary-gold/10">
          <div className="flex items-center gap-6">
            <SearchBar />
            <div className="flex-1">
              <CategoryFilter />
            </div>
          </div>
        </div>

        {/* 主要内容区：推荐经书和最近阅读 */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 推荐经书区域 */}
          <div className="lg:col-span-2 bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-gold/10">
            <RecommendedSutras />
          </div>

          {/* 最近阅读区域 */}
          <div className="lg:col-span-1 bg-white/40 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-primary-gold/10">
            <RecentlyRead />
          </div>
        </div>
      </div>
    </div>
  )
} 