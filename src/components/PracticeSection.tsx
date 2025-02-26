import { BookOpenIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const articles = [
  {
    title: '观音开库2025与观音借库2025：如何在新的一年向观音菩萨祈愿财富与顺利',
    excerpt: '观音菩萨不仅是慈悲和智慧的象征，也被许多信徒认为是能带来好运和保佑的守护神。每到新的一年，信徒们常常会进行祈愿，希望能够借助观音菩萨的庇佑，获得财富和事业上的顺利...',
    date: '2025-02-12',
    image: '/images/blog/guanyinkaiku/guanyiinkaiku.jpeg',
    link: '/blog/guanyin-kai-ku-2025-guanyin-jie-ku-2025'
  },
  {
    title: '观音诞祭品都有什么以及正确的摆放方式',
    excerpt: '观音诞是佛教中重要的节日之一，纪念观世音菩萨的诞生，广受世界各地佛教信徒的崇敬。在这一天，信徒们会准备各种祭品进行祭拜，以表达对观音菩萨的虔诚与敬意...',
    date: '2025-02-24',
    image: '/images/blog/guanyinofferings/guanyin-names.jpg',
    link: '/blog/guanyin-dan-jipin-yu-baifang-fangshi'
  },
  {
    title: '向观音菩萨祈求庇佑的请愿文、还愿文与回向偈怎么讲？',
    excerpt: '在佛教信仰中，观音菩萨被视为"大悲菩萨"，她广受信徒的尊敬与崇拜，象征着无私的慈悲与救赎。无论是生活中的困境、健康的忧虑，还是心灵的痛苦，信徒们都会向观音菩萨虔诚祈愿...',
    date: '2025-02-16',
    image: '/images/blog/prayerthanks/guanyin-prayer-guide.jpg',
    link: '/blog/prayer-thanksgiving-dedication-to-guanyin'
  },
  {
    title: '如何求观世音菩萨庇佑？完整祈愿指南',
    excerpt: '观世音菩萨，以"大悲菩萨"之名，广受世界各地佛教信徒的尊敬与崇拜。她是佛教中最具慈悲心的菩萨之一，象征着无私的救赎与无限的关怀...',
    date: '2025-02-14',
    image: '/images/blog/seekguanyin/guanyin-temple.jpg',
    link: '/blog/how-to-seek-guanyin-bodhisattva-blessings'
  },
  {
    title: '观音诞如何拜拜？详细指南与习俗解读',
    excerpt: '观音诞是指纪念观世音菩萨的诞生、成道及涅槃的节日。在中国，尤其是在一些佛教文化盛行的地方，观音诞被视为一个重要的宗教节日...',
    date: '2025-02-12',
    image: '/images/blog/guanyindan/guanyin-offerings.jpg',
    link: '/blog/guanyin-dan-bai-bai-zheng-que-fang-shi'
  },
  {
    title: '观世音菩萨是谁？普陀山与菩萨的慈悲',
    excerpt: '在佛教文化中，观音菩萨是大慈大悲的象征，她普渡众生、化解苦难，是许多信徒心中的庇护神。她被广泛崇敬，尤其在中国...',
    date: '2025-02-12',
    image: '/images/blog/whoisguanyin/putuo-temple.jpg',
    link: '/blog/who-is-guan-yin'
  }
]

const PracticeSection = () => {
  return (
    <div className="bg-gradient-to-br from-bg-cream/95 via-light-gold/30 to-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 border border-primary-gold/10">
      {/* 标题区域 */}
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <BookOpenIcon className="w-6 h-6 text-primary-gold" />
        <h2 className="text-xl sm:text-2xl font-kai font-bold text-burgundy">
          佛法修行
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
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* 文章内容 */}
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-song font-bold text-dark-brown mb-2 line-clamp-2 hover:text-burgundy transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">
                {article.excerpt}
              </p>
              <div className="flex justify-between items-center mt-auto pt-3 border-t border-primary-gold/10">
                <time className="text-xs text-gray-500">
                  {article.date}
                </time>
                <Link
                  href={article.link || '#'}
                  className="inline-flex items-center px-3 py-1 bg-burgundy/90 text-white rounded-full hover:bg-burgundy transition-colors text-sm font-kai"
                >
                  阅读全文
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default PracticeSection 