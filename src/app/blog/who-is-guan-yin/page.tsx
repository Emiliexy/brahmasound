import Image from 'next/image'
import Link from 'next/link'

export default function WhoIsGuanYin() {
  return (
    <article className="max-w-4xl mx-auto bg-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 lg:p-12 my-8">
      {/* 标题和发布时间 */}
      <header className="text-center mb-16">
        <h1 className="text-3xl lg:text-4xl font-kai font-bold text-burgundy mb-4">
          观世音菩萨是谁？普陀山与菩萨的慈悲
        </h1>
        <time className="text-gray-500 font-song">2025年2月12日</time>
      </header>

      {/* 引言 */}
      <section className="mb-16 bg-light-gold/50 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">引言：观世音菩萨是谁？</h2>
        <p className="text-lg leading-loose text-black font-song">
          在佛教文化中，观世音菩萨是大慈大悲的象征，她普渡众生、化解苦难，是许多信徒心中的庇护神。她被广泛崇敬，尤其在中国，拥有众多信徒。本文将探讨观世音菩萨的起源、她与普陀山的渊源以及她在佛教中的重要地位。
        </p>
      </section>

      {/* 正文板块1 */}
      <section className="mb-16 bg-light-gold/50 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观世音菩萨的起源</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            观世音菩萨，简称观音菩萨，是大乘佛教中最为人熟知的菩萨之一。据佛经记载，观音菩萨本是修行菩萨道的觉悟者，具备无穷的慈悲心，愿意帮助所有有需要的众生。
          </p>
          <p>
            观世音菩萨能根据众生的不同需求，以不同的形象现身，救度困苦众生，帮助他们脱离痛苦、获得快乐。这种无处不在的慈悲，正是观音菩萨最为殊胜的愿力。
          </p>
          <p>
            在中国，观音菩萨的形象常常以女性的姿态出现，这与她的慈悲和母性特质相契合。她手持莲花，或杨枝甘露，象征着佛教的甘露能净化世间的苦难，带来希望和温暖。
          </p>
        </div>
      </section>

      {/* 正文板块2 */}
      <section className="mb-16 bg-light-gold/50 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观音菩萨与普陀山</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            普陀山，位于浙江省定海县，是观音菩萨的圣地。根据佛经的记载，观音菩萨曾住在南印度的普陀洛迦山，因此，这里被称为普陀山。普陀山不仅以其自然景色秀丽而闻名，还因是观音显灵、说法的地方而成为佛教的圣地之一。
          </p>
          <p>
            普陀山上的景点，包括双峰、佛顶山等，都是游客和信徒朝圣的圣地。山中有许多著名的道场，如普济寺、法雨寺、慧济寺等，它们吸引了成千上万的游客和信徒。
          </p>
        </div>
        
        {/* 图片部分 */}
        <div className="my-12">
          <div className="relative w-full max-w-[500px] mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/blog/whoisguanyin/putuo-temple.jpg"
              alt="普陀山-普济禅寺"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
          <p className="text-base text-gray-500 mt-4 text-center font-song">
            普陀山-普济禅寺
          </p>
        </div>
      </section>

      {/* 正文板块3 */}
      <section className="mb-16 bg-light-gold/50 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观音菩萨的慈悲精神</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            观音菩萨的慈悲精神深得世人崇敬。她不仅在佛教经文中被描述为救苦救难的菩萨，而且在民间信仰中，她的形象也与母爱、关怀和宽容紧密相关。
          </p>
          <p>
            在信徒的心目中，观音菩萨是无所不在、无所不能的救助者。无论是生活中的困境、精神上的迷茫，还是身体上的疾病，信徒们都相信观音菩萨能在他们最需要的时候伸出援手，给予他们力量和希望。
          </p>
          <p>
            每年，无数的香客和信徒前来普陀山朝圣，祈求观音菩萨的庇佑。无论是僧侣还是普通百姓，男女老幼，都愿意虔诚祈求她的帮助。
          </p>
        </div>
      </section>

      {/* 结语 */}
      <section className="mb-16 bg-light-gold/50 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">结语：观音菩萨的影响</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            观音菩萨不仅仅是佛教文化的代表之一，她的慈悲、智慧和愿意帮助所有众生的精神，在全球范围内都产生了深远的影响。无论是佛教徒还是非佛教徒，都能从观音菩萨的故事中汲取力量和智慧，感受到她带来的心灵慰藉和希望。
          </p>
          <p>
            普陀山作为观音菩萨的圣地，吸引着成千上万的信徒前来朝圣。观音菩萨的教义和精神，已成为许多人生活中不可或缺的精神支柱。
          </p>
        </div>
      </section>

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