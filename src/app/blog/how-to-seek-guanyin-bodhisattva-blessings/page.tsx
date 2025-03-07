import Image from 'next/image'
import Link from 'next/link'
import RelatedArticles from '@/components/RelatedArticles'
import { articles } from '@/data/articles'

export default function GuanYinBlessingsGuide() {
  return (
    <article className="max-w-4xl mx-auto bg-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 lg:p-12 my-8">
      {/* 标题和发布时间 */}
      <header className="text-center mb-16">
        <h1 className="text-3xl lg:text-4xl font-kai font-bold text-burgundy mb-4">
          如何求观世音菩萨庇佑？完整祈愿指南
        </h1>
        <time className="text-gray-500 font-song">2025年2月14日</time>
      </header>

      {/* 引言 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">引言：观世音菩萨的慈悲与庇佑</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            观世音菩萨，以&quot;大悲菩萨&quot;之名，广受世界各地佛教信徒的尊敬与崇拜。她是佛教中最具慈悲心的菩萨之一，象征着无私的救赎与无限的关怀。观世音菩萨时刻关注着世间的痛苦与困苦，愿意倾听一切求助的声音，并施以救赎与庇佑。
          </p>
          <p>
            在全球各地，无论是家庭的困境，还是个人的困扰，信徒们都愿意向观世音菩萨祈愿，求得她的庇佑与保佑。对于信徒来说，祈愿的过程不仅仅是求得帮助，更是与观世音菩萨建立心灵联系、增强信仰的过程。
          </p>
          <p>观音菩萨的&quot;慈悲&quot;是无边无际的。</p>
          <p>我们应该以&quot;真&quot;、&quot;诚&quot;、&quot;善&quot;的心来祈求。</p>
        </div>
      </section>

      {/* 正文板块1 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观世音菩萨的起源与象征</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            观世音菩萨源自印度的佛教文化，她的名字&quot;观世音&quot;指的是&quot;观世间所有声音&quot;，也象征着她能听到世间众生的苦痛与需求。作为慈悲与智慧的象征，观世音菩萨总是化身为众生需要的模样，广泛地救度苦难中的人们。
          </p>
          <p>
            在中国，尤其是浙江省的普陀山，观世音菩萨的信仰格外兴盛。普陀山被视为菩萨显现神迹的圣地，吸引着成千上万的信徒前来朝拜祈愿。
          </p>
        </div>
      </section>

      {/* 正文板块2 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观音诞拜拜的习俗与意义</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <h3 className="text-xl font-kai font-bold text-burgundy mb-4">如何向观世音菩萨祈愿？</h3>
          <p>信徒们通过多种方式向观世音菩萨祈愿，希望能够获得庇佑与保佑。以下是几种常见的祈愿方式：</p>
          
          <div className="space-y-6 mt-6">
            <div>
              <h4 className="font-bold mb-2">焚香祈愿</h4>
              <p>信徒们在家中或寺庙内点燃香火，双手合十，恭敬地向观世音菩萨祈求。香火象征着净化与清净，信徒们借此祈求菩萨的庇佑。焚香的过程中，香气四溢，似乎让人心境逐渐平静，进入一种虔诚的祈愿状态。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">诵经祈福</h4>
              <p>《大悲咒》是向观世音菩萨祈愿时最常诵读的经典之一。信徒们通过诵读《大悲咒》来净化心灵，消除内心的烦恼与障碍。诵经时，专心致志地念出每一字，每一音，信徒们深信这些经文能够引起观世音菩萨的共鸣，从而得到她的庇佑与保佑。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">供奉与祭品</h4>
              <p>向观世音菩萨祈愿时，许多信徒会准备香、花、果品等供品。虽然这些祭品可能并不奢华，但它们象征着信徒的恭敬与感恩之情。无论是在寺庙中，还是在家里，信徒们都会通过供奉祭品，表达对菩萨的崇敬与感激之情。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">保持虔诚心态</h4>
              <p>祈愿的过程中，信徒们深知心态的重要性。祈愿时，信徒们保持平和的心境，尽量去除心中的杂念与焦虑，以虔诚的心向观世音菩萨祈求。在无私的信仰下，信徒相信，菩萨的庇佑会在最合适的时机降临。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">放生与慈善</h4>
              <p>许多信徒还会选择在观音诞当天放生，象征放下业障，积累福德，借此向观音菩萨表达感恩与回报。</p>
            </div>
          </div>
        </div>

        {/* 图片部分 */}
        <div className="my-12">
          <div className="relative w-full max-w-[500px] mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/blog/seekguanyin/guanyin-temple.jpg"
              alt="舟山朱家尖 - 观音法界"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
          <p className="text-base text-gray-500 mt-4 text-center font-song">
            舟山朱家尖 - 观音法界
          </p>
        </div>
      </section>

      {/* 正文板块3 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">常见的观世音菩萨祈愿事项</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>信徒们向观世音菩萨祈愿的内容各异，通常包括以下几类：</p>
          
          <div className="space-y-6 mt-4">
            <div>
              <h4 className="font-bold mb-2">求平安</h4>
              <p>很多信徒在生活中遇到不顺或疾病时，会向观世音菩萨祈求保佑，希望家人和自己能平安无事。无论是旅行中的平安，还是日常生活中的平稳，信徒们都愿意将这些请求交给菩萨，期待她的庇佑。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">求解困厄</h4>
              <p>信徒们常常会求菩萨帮助他们化解困厄，无论是工作上的烦恼，还是生活中的困难，都会向菩萨请示，祈愿她为自己指点迷津，带来解脱的机会。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">求子得贵</h4>
              <p>对于有生育愿望的信徒来说，向观世音菩萨祈求得子也是常见的愿望之一。观世音菩萨被认为是慈悲的化身，能够帮助求子心切的夫妻解开心结，迎接新生命的到来。</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">解除痛苦</h4>
              <p>许多信徒因身体上的疾病或心灵上的痛苦，向观世音菩萨祈愿，希望得到她的慈悲庇佑，解除痛苦，恢复健康与宁静。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 正文板块4 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观世音菩萨祈愿后的感恩与回馈</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            求得观世音菩萨庇佑后，信徒们通常会通过行善积德、放生、捐款等方式来回报菩萨的恩德。这不仅是对菩萨慈悲的感恩，也是信徒修行中的一部分。通过回馈社会和他人，信徒们相信自己的功德能够积累起来，进一步得到菩萨的庇佑。
          </p>
        </div>
      </section>

      {/* 正文板块5 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">如何通过冥想和禅修向观世音菩萨祈求</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            除了日常的祈愿与诵经，许多信徒还通过冥想和禅修来向观世音菩萨祈求。在冥想和禅修中，信徒们专注于观世音菩萨的形象与智慧，通过平静内心，祈求菩萨的加持与庇佑。这种深度的冥想和修行，不仅帮助信徒与菩萨建立更加深厚的联系，也能让心灵得到净化与提升。
          </p>
        </div>
      </section>

      {/* 返回按钮之前添加相关文章模块 */}
      <RelatedArticles 
        currentArticleLink="/blog/how-to-seek-guanyin-bodhisattva-blessings"
        articles={articles}
      />

      {/* 返回按钮 */}
      <div className="text-center">
        <Link 
          href="/" 
          className="inline-block px-12 py-4 bg-burgundy text-white rounded-full hover:bg-burgundy/90 transition-colors hover:shadow-lg font-kai text-lg"
        >
          返回首页
        </Link>
      </div>
    </article>
  )
} 