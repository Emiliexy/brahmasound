import Image from 'next/image'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'
import { articles } from '@/data/articles'

export default function PrayerThanksgivingGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* 标题和日期 */}
      <header className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold font-kai text-burgundy mb-4">
          向观音菩萨祈求庇佑的请愿文、还愿文与回向偈怎么讲？
        </h1>
        <time className="text-gray-600 font-song">2025年2月16日</time>
      </header>

      {/* 引言 */}
      <section className="mb-12 bg-light-gold/90 backdrop-blur-sm rounded-2xl p-8 shadow-md">
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>在佛教信仰中，观音菩萨被视为&quot;大悲菩萨&quot;，她广受信徒的尊敬与崇拜，象征着无私的慈悲与救赎。无论是生活中的困境、健康的忧虑，还是心灵的痛苦，信徒们都会向观音菩萨虔诚祈愿，寻求庇佑与保佑。而在祈愿的过程中，如何正确表达心中的请求和感恩，便成为了一项重要的仪式。</p>
          <p>向观音菩萨请愿时，通常会以&quot;请愿文&quot;来表述自己的愿望，诚心地诉说自己的苦难与需求；当愿望实现后，信徒们又会以&quot;还愿文&quot;来表达感恩之情，感谢菩萨的慈悲庇佑。同时，回向偈则是信徒们在完成祈愿与还愿后，向菩萨及所有众生回向功德，愿一切众生都能得到福祉与智慧。</p>
          <p>在本文中，我们将详细介绍如何撰写向观音菩萨的请愿文、还愿文及回向偈，帮助信徒们在祈愿的过程中更加虔诚与真诚，表达内心的感恩与希望。</p>
          <p>祈祷时要以&quot;诚&quot;为本。</p>
          <p>感恩和回向是&quot;修行&quot;的重要部分，要以&quot;清净&quot;的心来做。</p>
        </div>
      </section>

      {/* 正文板块1 */}
      <section className="mb-12 bg-light-gold/90 backdrop-blur-sm rounded-2xl p-8 shadow-md">
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <h3 className="text-xl font-kai font-bold text-burgundy mb-4">请愿文</h3>
          <div className="space-y-4">
            <p className="font-bold">南无大慈大悲观世音菩萨（三遍）</p>
            <p>弟子今日顶礼佛前，恭敬焚香，虔诚请愿。愿：（将心中所思所想所愿，诉于佛前）</p>
            <p>弟子将以感恩之心，践行善念，广结善缘。一切皆有因果，弟子将以感恩、敬畏之心，秉持善念，广行好事。</p>
            <p>愿大慈大悲观世音菩萨垂怜，应允弟子之请愿。弟子【你的名字】。诚心叩首。【具体日期】</p>
          </div>
        </div>
      </section>

      {/* 正文板块2 */}
      <section className="mb-12 bg-light-gold/90 backdrop-blur-sm rounded-2xl p-8 shadow-md">
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <h3 className="text-xl font-kai font-bold text-burgundy mb-4">还愿文</h3>
          <div className="space-y-4">
            <p className="font-bold">南无大慈大悲观世音菩萨（三遍）</p>
            <p>弟子【你的名字】至诚顶礼，感恩大慈大悲观世音菩萨护佑于我，使我所求如愿【愿望实现情况简述】。弟子将以虔诚之心于佛前：或亦供佛、或亦点灯，以此相表法，传递佛法智慧与慈悲，让更多的人感受到佛菩萨的恩泽！</p>
            <p>弟子【你的名字】。诚心叩首。【具体日期】</p>
            <p>放生与慈善：许多信徒还会选择在观音诞当天放生，象征放下业障，积累福德，借此向观音菩萨表达感恩与回报。</p>
          </div>
        </div>
      </section>

      {/* 图片部分 */}
      <div className="my-12">
        <div className="relative w-full max-w-[500px] mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/blog/prayerthanks/guanyin-prayer-guide.jpg"
            alt="普陀山-南海观音像"
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 500px"
            priority
          />
        </div>
        <p className="text-base text-gray-500 mt-4 text-center font-song">
          普陀山-南海观音像
        </p>
      </div>

      {/* 正文板块3 */}
      <section className="mb-12 bg-light-gold/90 backdrop-blur-sm rounded-2xl p-8 shadow-md">
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <h3 className="text-xl font-kai font-bold text-burgundy mb-4">回向偈</h3>
          <div className="space-y-4">
            <p className="font-bold">南无大慈大悲观世音菩萨（三遍）</p>
            <p>弟子【名字】今于观世音菩萨前虔诚供灯、供佛之功德回向十方法界一切有情众生，愿一切众生圆满诸福慧，圆成胜善根，安住大乘，明心见性，修学种智，圆证无上正等菩提。</p>
          </div>
        </div>
      </section>

      {/* 返回按钮之前添加相关文章模块 */}
      <RelatedArticles 
        currentArticleLink="/blog/prayer-thanksgiving-dedication-to-guanyin"
        articles={articles}
      />

      {/* 返回首页按钮 */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-2 bg-burgundy text-white rounded-full hover:bg-burgundy/90 transition-colors text-lg font-kai"
        >
          返回首页
        </Link>
      </div>
    </article>
  )
} 