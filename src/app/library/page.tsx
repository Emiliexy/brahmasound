'use client'

import { useTranslation } from '@/hooks/useTranslation'
import SearchBar from '@/components/library/SearchBar'
import { CategoryFilter } from '@/components/library/CategoryFilter'
import RecommendedSutras from '@/components/library/RecommendedSutras'
import RecentlyRead from '@/components/library/RecentlyRead'

export default function LibraryPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-gradient-to-br from-bg-cream via-light-gold/5 to-bg-cream">
      <div className="absolute inset-0 bg-[url('/images/patterns/lotus-pattern-light.png')] opacity-5 pointer-events-none" />
      
      {/* 页面头部 */}
      <header className="relative px-4 sm:px-8 py-12 border-b border-primary-gold/20">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold font-kai text-burgundy">
              {t('library.title')}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('library.subtitle')}
            </p>
          </div>

          {/* 搜索栏 */}
          <SearchBar />
        </div>
      </header>

      {/* 主要内容区域 */}
      <div className="relative px-4 sm:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* 筛选器 */}
          <CategoryFilter />

          {/* 推荐经文 */}
          <RecommendedSutras />

          {/* 最近阅读 */}
          <RecentlyRead />
        </div>
      </div>
    </main>
  )
} 