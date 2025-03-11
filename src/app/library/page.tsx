'use client'

import useTranslation from '@/hooks/useTranslation'
import { CategoryFilter } from '@/components/library/CategoryFilter'
import RecommendedSutras from '@/components/library/RecommendedSutras'
import RecentlyRead from '@/components/library/RecentlyRead'

export default function LibraryPage() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen bg-light-beige">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-dark-brown mb-8">{t('library.title')}</h1>
        <div className="space-y-8">
          <CategoryFilter />
          <RecommendedSutras />
          <RecentlyRead />
        </div>
      </div>
    </main>
  )
} 