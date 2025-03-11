import { BookOpenIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

const PracticeSection = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-gradient-to-br from-bg-cream/95 via-light-gold/30 to-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-primary-gold/10">
      {/* 标题区域 */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <BookOpenIcon className="w-6 h-6 text-primary-gold" />
        <h2 className="text-xl sm:text-2xl font-kai font-bold text-burgundy">
          {t('practice.title')}
        </h2>
      </div>

      {/* 文章网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {articles.map((article, index) => (
          <article
            key={index}
            className="bg-white/60 rounded-xl border border-primary-gold/20 hover:shadow-lg transition-all duration-300 hover:bg-white/80 flex flex-col overflow-hidden group"
          >
            {/* 文章缩略图 */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={article.image || '/images/practice/default.jpg'}
                alt={t(article.titleKey)}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* 文章内容 */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-song font-bold text-dark-brown mb-2 line-clamp-2 hover:text-burgundy transition-colors">
                {t(article.titleKey)}
              </h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
                {t(article.excerptKey)}
              </p>
              <div className="flex justify-between items-center mt-auto pt-3 border-t border-primary-gold/10">
                <time className="text-xs text-gray-500">
                  {article.date}
                </time>
                <Link
                  href={article.link || '#'}
                  className="inline-flex items-center px-3 py-1 bg-burgundy/90 text-white rounded-full hover:bg-burgundy transition-colors text-sm font-kai"
                >
                  {t('common.read-more')}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

const articles = [
  {
    titleKey: 'practice.articles.kaiku.title',
    excerptKey: 'practice.articles.kaiku.excerpt',
    date: '2025-02-28',
    image: '/images/blog/guanyinkaiku/guanyiinkaiku.jpeg',
    link: '/blog/guanyin-kai-ku-2025-guanyin-jie-ku-2025'
  },
  {
    titleKey: 'practice.articles.offerings.title',
    excerptKey: 'practice.articles.offerings.excerpt',
    date: '2025-02-24',
    image: '/images/blog/guanyinofferings/guanyin-names.jpg',
    link: '/blog/guanyin-dan-jipin-yu-baifang-fangshi'
  },
  {
    titleKey: 'practice.articles.prayer.title',
    excerptKey: 'practice.articles.prayer.excerpt',
    date: '2025-02-16',
    image: '/images/blog/prayerthanks/guanyin-prayer-guide.jpg',
    link: '/blog/prayer-thanksgiving-dedication-to-guanyin'
  },
  {
    titleKey: 'practice.articles.blessings.title',
    excerptKey: 'practice.articles.blessings.excerpt',
    date: '2025-02-14',
    image: '/images/blog/seekguanyin/guanyin-temple.jpg',
    link: '/blog/how-to-seek-guanyin-bodhisattva-blessings'
  },
  {
    titleKey: 'practice.articles.festival.title',
    excerptKey: 'practice.articles.festival.excerpt',
    date: '2025-02-12',
    image: '/images/blog/guanyindan/guanyin-offerings.jpg',
    link: '/blog/guanyin-dan-bai-bai-zheng-que-fang-shi'
  },
  {
    titleKey: 'practice.articles.intro.title',
    excerptKey: 'practice.articles.intro.excerpt',
    date: '2025-02-12',
    image: '/images/blog/whoisguanyin/putuo-temple.jpg',
    link: '/blog/who-is-guan-yin'
  }
]

export default PracticeSection 