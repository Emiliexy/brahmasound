import { BookOpenIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/data/articles'

interface RelatedArticlesProps {
  currentArticleLink: string
  articles: typeof articles
}

const RelatedArticles = ({ currentArticleLink }: RelatedArticlesProps) => {
  // 过滤掉当前文章，并获取前3篇相关文章
  const relatedArticles = articles
    .filter(article => article.link !== currentArticleLink)
    .slice(0, 3)

  return (
    <div className="my-12 bg-light-gold/90 backdrop-blur-sm rounded-2xl p-8 shadow-md">
      {/* 标题区域 */}
      <div className="flex items-center gap-3 mb-6">
        <BookOpenIcon className="w-6 h-6 text-primary-gold" />
        <h2 className="text-xl font-kai font-bold text-burgundy">
          相关文章
        </h2>
      </div>

      {/* 文章网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {relatedArticles.map((article, index) => (
          <Link
            key={index}
            href={article.link}
            className="group bg-white/60 rounded-xl border border-primary-gold/20 overflow-hidden hover:shadow-lg transition-all duration-300 hover:bg-white/80 flex flex-col"
          >
            {/* 文章缩略图 */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* 文章内容 */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-base font-song font-bold text-dark-brown mb-2 line-clamp-2 group-hover:text-burgundy transition-colors">
                {article.title}
              </h3>
              <time className="text-xs text-gray-500 mt-auto">
                {article.date}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedArticles 