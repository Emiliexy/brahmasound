import Image from 'next/image'
import Link from 'next/link'

export default function GuanYinDanGuide() {
  return (
    <article className="max-w-4xl mx-auto bg-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 lg:p-12 my-8">
      {/* 标题和发布时间 */}
      <header className="text-center mb-16">
        <h1 className="text-3xl lg:text-4xl font-kai font-bold text-burgundy mb-4">
          观音诞如何拜拜？详细指南与习俗解读
        </h1>
        <time className="text-gray-500 font-song">2025年2月12日</time>
      </header>

      {/* 引言 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">引言：什么是观音诞？</h2>
        <div className="text-lg leading-loose text-black font-song">
          <p>
            观音诞是指纪念观世音菩萨的诞生、成道及涅槃的节日。在中国，尤其是在一些佛教文化盛行的地方，观音诞被视为一个重要的宗教节日。不同地区的信徒会在这一天举行各种形式的拜祭活动，以表达对观音菩萨的敬仰与祈求。
          </p>
          <div className="mt-6 p-4 bg-white/60 border-2 border-primary-gold/30 rounded-lg shadow-sm">
            <p className="text-lg text-burgundy font-kai">
              观音诞的日期通常是农历二月十九日。2025年的观世音菩萨圣诞，阳历日期是3月18日星期二。
            </p>
          </div>
        </div>
      </section>

      {/* 正文板块1 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观音诞的文化背景</h2>
        <div className="text-lg leading-loose text-black font-song">
          <p>
            观音菩萨是佛教中最受尊敬的菩萨之一，她象征着大慈大悲，广泛信仰于华人世界。特别是在中国，观音菩萨被视为普度众生、解救困苦的神明。每年的观音诞，信徒们通过拜拜、诵经、烧香等方式，祈求保平安、治病消灾、求子得贵等各种愿望。
          </p>
        </div>
      </section>

      {/* 正文板块2 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观音诞拜拜的习俗与意义</h2>
        <div className="text-lg leading-loose text-black font-song">
          <p>在观音诞这一天，信徒们会遵循传统习俗进行各种祭拜活动：</p>
          <ul className="list-disc list-inside mt-4 space-y-4 ml-4">
            <li><span className="font-bold">祭品准备：</span>传统上，信徒会准备香火、鲜花、供果等祭品。香火象征着清净与敬意，鲜花则代表敬奉与庄严。</li>
            <li><span className="font-bold">焚香祈愿：</span>拜拜的过程一般先点香，然后双手合十，默念观音菩萨的名号"南无观世音菩萨"。许多人会在此过程中许下自己的愿望，祈求观音菩萨的庇佑。</li>
            <li><span className="font-bold">诵经与拜佛：</span>在庙宇中，除了焚香外，信徒们还会进行诵经、拜佛，特别是《大悲咒》和《观音心咒》，这两部经文能够帮助清净身心，化解业障。</li>
            <li><span className="font-bold">放生与慈善：</span>许多信徒还会选择在观音诞当天放生，象征放下业障，积累福德，借此向观音菩萨表达感恩与回报。</li>
          </ul>
        </div>

        {/* 第二张图片 */}
        <div className="my-12">
          <div className="relative w-full max-w-[500px] mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/blog/guanyindan/guanyin-blessing.jpg"
              alt="信徒们在观音庙宇中虔诚祭拜"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
          </div>
          <p className="text-base text-gray-500 mt-4 text-center font-song">
            信徒们在观音庙宇中虔诚祭拜
          </p>
        </div>
      </section>

      {/* 正文板块3 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观音诞拜拜的正确步骤</h2>
        <div className="text-lg leading-loose text-black font-song">
          <p>如果你想在家里举行简单的观音诞拜拜，可以参考以下步骤：</p>
          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-bold mb-2">一、清洁环境</h3>
              <p>首先，要清洁拜祭的地方，确保神像或佛像周围干净整洁。</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">二、准备祭品</h3>
              <p>准备香、蜡烛、鲜花、水果、茶等供品。香火是必不可少的，它代表着与菩萨的沟通。</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">三、点香与祈祷</h3>
              <p>点燃香火后，双手合十，站立在佛像前，诚心祈求自己的愿望。在心中默念"南无观世音菩萨"，并持续几分钟，保持专注与敬意。</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">四、诵经或持咒</h3>
              <p>你可以诵读《大悲咒》或《观音心咒》，也可以选择默念这些咒语，帮助净化身心。</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">五、放生与行善</h3>
              <p>在这一天，许多信徒会选择放生，或者捐款做慈善，作为积德的方式。观音菩萨喜爱行善，做善事也能积累福报。</p>
            </div>
          </div>
        </div>

        {/* 第一张图片 */}
        <div className="my-12">
          <div className="relative w-full max-w-[400px] mx-auto aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/blog/guanyindan/guanyin-offerings.jpg"
              alt="观音诞祭品"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
          <p className="text-base text-gray-500 mt-4 text-center font-song">
            观音诞祭品
          </p>
        </div>
      </section>

      {/* 结语 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">结语：观音诞的精神与意义</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            观音诞不仅是一个宗教节日，更是一种慈悲和愿力的体现。通过拜拜和祈愿，信徒们感受到观音菩萨的庇佑与大悲。同时，观音诞也提醒人们要行善积德，帮助他人，从而累积自己的福报。
          </p>
          <p>
            无论是在庙宇中的盛大仪式，还是在家中的简单拜祭，观音诞的庆祝方式都表达了人们对慈悲与智慧的追求，以及愿意帮助他人、化解痛苦的精神。
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