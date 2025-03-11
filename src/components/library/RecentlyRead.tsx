'use client'

import { ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

// 模拟最近阅读数据
const recentlyReadSutras = [
  {
    id: 'heart-sutra',
    titleKey: 'sutra.heart',
    lastRead: '10分钟前',
    progress: 100,
    link: '/library/heart-sutra'
  },
  {
    id: 'diamond-sutra',
    titleKey: 'sutra.diamond',
    lastRead: '2小时前',
    progress: 45,
    link: '/library/diamond-sutra'
  }
]

const RecentlyRead = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h2 className="text-2xl font-kai font-bold text-burgundy mb-6 flex items-center">
        <ClockIcon className="w-6 h-6 mr-2 text-primary-gold" />
        {t('library.recent')}
      </h2>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-primary-gold/20 overflow-hidden">
        {recentlyReadSutras.length === 0 ? (
          <div className="p-6 text-center text-gray-500 font-song">
            {t('library.no-records')}
          </div>
        ) : (
          <div className="divide-y divide-primary-gold/10">
            {recentlyReadSutras.map((sutra) => (
              <Link
                key={sutra.id}
                href={sutra.link}
                className="block p-4 hover:bg-light-gold/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-kai font-bold text-burgundy">
                    {t(sutra.titleKey)}
                  </h3>
                  <span className="text-xs text-gray-500">{sutra.lastRead}</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary-gold/60 rounded-full"
                      style={{ width: `${sutra.progress}%` }}
                    />
                  </div>
                  <span className="ml-2 text-xs text-primary-gold/80">
                    {sutra.progress}%
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default RecentlyRead 