import Image from 'next/image'
import Link from 'next/link'

export default function GuanYinDanOfferings() {
  return (
    <article className="max-w-4xl mx-auto bg-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 lg:p-12 my-8">
      {/* 标题和发布时间 */}
      <header className="text-center mb-16">
        <h1 className="text-3xl lg:text-4xl font-kai font-bold text-burgundy mb-4">
          观音诞祭品都有什么以及正确的摆放方式
        </h1>
        <time className="text-gray-500 font-song">2025年2月24日</time>
      </header>

      {/* 引言 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">引言：观音诞的意义与祭拜方式</h2>
        <div className="text-lg leading-loose text-black font-song">
          <p>
            观音诞是佛教中重要的节日之一，纪念观世音菩萨的诞生，广受世界各地佛教信徒的崇敬。观音菩萨以"大悲菩萨"闻名，她的慈悲心怀与普度众生的精神，深深影响着无数信徒。每年，尤其是农历二月十九日，信徒们会举行盛大的祭拜活动，向观音菩萨表达感恩和祈求庇佑。在这一天，人们不仅会准备各种观音诞祭品进行祭拜，还会虔诚地祈愿，以期得到菩萨的慈悲保佑与加持。
          </p>
          <p className="mt-4">
            在本文中，我们将深入探讨观音诞的祭品及其摆放方式，帮助信徒们更好地准备观音菩萨诞的祭拜，表达对观音菩萨的虔诚与敬意。
          </p>
          <div className="mt-6 p-4 bg-white/60 border-2 border-primary-gold/30 rounded-lg shadow-sm">
            <p className="text-lg text-burgundy font-kai">
              观音诞的日子是农历二月十九日。2025年的观世音菩萨圣诞，阳历日期是3月18日星期二。
            </p>
          </div>
        </div>
      </section>

      {/* 正文板块1 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观音诞祭品与摆放方式</h2>
        <div className="text-lg leading-loose text-black font-song">
          <h3 className="text-xl font-kai font-bold text-burgundy mb-4">祭品</h3>
          <div className="space-y-6">
            <div>
              <p className="font-bold mb-2">香烛</p>
              <p>香烛是祭拜观音菩萨时必不可少的祭品。香代表着信徒的虔诚与纯净的心灵，烛光象征着光明与智慧。一般准备一对红色蜡烛和若干香，烛火的明亮与香气的四溢，是信徒向菩萨表达敬意与祈求的方式。</p>
            </div>
            <div>
              <p className="font-bold mb-2">鲜花</p>
              <p>观音菩萨喜爱鲜花，鲜花象征着美好、纯洁与吉祥。常见的供花包括香水百合、水仙、兰花、菊花等，这些花朵的色香俱佳，符合菩萨的喜好。选择花朵时应避免带有刺或异味的花卉，保持庄严与清雅。一般建议准备两束花，左右对称，寓意菩萨的平衡与慈爱。</p>
            </div>
            <div>
              <p className="font-bold mb-2">水果</p>
              <p>水果作为祭品，不仅能够表达对菩萨的敬意，也代表着丰收与吉祥。常见的水果包括苹果、橘子、橙子、菠萝、桃子和柿子等。每种水果都有独特的寓意，如：</p>
              <ul className="list-disc list-inside mt-2 ml-4 space-y-2">
                <li>苹果：平安无事</li>
                <li>橘子：大吉大利</li>
                <li>橙子：诸事顺利</li>
                <li>菠萝：求得智慧</li>
                <li>桃子：健康长寿</li>
                <li>柿子：心想事成</li>
              </ul>
              <p className="mt-2">通常准备三到五种水果，数量最好为单数，以示吉利。</p>
            </div>
            <div>
              <p className="font-bold mb-2">素食</p>
              <p>素食是观音诞祭拜中的重要组成部分，包括素鸡、素鸭、素鱼、寿面、寿桃等。素食的寓意是长寿与健康，寿面和寿桃象征着生命的延续与祝福。每一份素食都带有信徒对菩萨的敬意与祈愿。</p>
            </div>
            <div>
              <p className="font-bold mb-2">清水或清茶</p>
              <p>清水或清茶代表着清净与平等，是信徒对观音菩萨纯净敬意的体现。三杯清水或清茶并列摆放，代表着信仰的虔诚与对菩萨的无比尊敬。</p>
            </div>
            <div>
              <p className="font-bold mb-2">金银宝纸</p>
              <p>金银宝纸是祭拜仪式后焚化的物品，象征着向菩萨表达感恩与祈愿。常见的金银宝纸包括寿金、刈金、福金等，信徒会在祭拜结束后，将这些宝纸焚化，祈求菩萨的庇佑与保佑。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 正文板块2 */}
      <section className="mb-16 bg-light-gold/90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-primary-gold/20">
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">观音诞祭品的摆放方式</h2>
        <div className="text-lg leading-loose text-black font-song">
          <div className="space-y-6">
            <div>
              <p className="font-bold mb-2">整体布局</p>
              <p>祭品应摆放在整洁的供桌上，供桌应面向观音像或寺庙的主殿。如果是在家中供奉，观音像应摆放在客厅的显眼位置，避免直接置于风口处。祭品应整齐且有序地排列，体现出对菩萨的虔诚与尊敬。</p>
            </div>
            <div>
              <p className="font-bold mb-2">香烛摆放</p>
              <p>香烛通常放在供桌的最前端，左右对称。蜡烛应置于两侧，香应放在中间，且香的位置应略高于蜡烛，确保香烟能够自然上升，象征着信徒的愿望传达给菩萨。</p>
            </div>
            <div>
              <p className="font-bold mb-2">鲜花摆放</p>
              <p>鲜花应放在香烛的后方两侧，左右各一束，保持对称。花朵的摆放位置应注意美观与庄重，确保整个供桌的和谐美观。</p>
            </div>
            <div>
              <p className="font-bold mb-2">水果摆放</p>
              <p>水果应放在鲜花的后方或供桌中央，通常会考虑水果的数量和位置，如香蕉三根在上、四根在下，菠萝要求一对并列摆放等。</p>
            </div>
            <div>
              <p className="font-bold mb-2">素食摆放</p>
              <p>寿面、寿桃等素食可以放在水果的后方或一侧，整齐排列。寿面可卷成束状，放在盘中；寿桃则可堆叠成美观的形状，寓意着长寿与福运。</p>
            </div>
            <div>
              <p className="font-bold mb-2">清水或清茶摆放</p>
              <p>清水或清茶三杯应放置在供桌的一侧，通常与水果或素食相邻，三杯并列摆放，保持间距均匀。</p>
            </div>
            <div>
              <p className="font-bold mb-2">金银宝纸摆放</p>
              <p>金银宝纸应放在供桌的下方或旁边，等待祭拜结束后焚化，以示感恩与祈愿。</p>
            </div>
          </div>
        </div>

        {/* 第二张图片 */}
        <div className="my-12">
          <div className="relative w-full max-w-[500px] mx-auto aspect-square rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/blog/guanyinofferings/guanyin-offerings.jpg"
              alt="观音诞祭品"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 500px"
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
        <h2 className="text-xl lg:text-2xl font-kai font-bold text-burgundy mb-6">结语：观音诞祭拜的意义与祈愿</h2>
        <div className="space-y-6 text-lg leading-loose text-black font-song">
          <p>
            观音诞不仅是一个重要的节日，也是信徒们表达敬意与祈愿的时刻。通过精心准备的祭品与虔诚的祭拜，信徒们能够感受到观音菩萨的慈悲与庇佑，心灵得到净化与升华。在祭拜仪式中，信徒们通过香烛、鲜花、素食等供品表达自己对菩萨的敬意与感恩，同时祈愿菩萨保佑自己与他人平安、健康、顺利。
          </p>
          <p>
            通过了解观音诞祭品与摆放方式，信徒们不仅能更好地进行祈愿，也能深刻感受到这一天背后的深厚信仰与佛教文化。无论身处何地，虔诚的心和庄重的祭拜将为每一位信徒带来平安与庇佑。
          </p>
          <p>供品的摆放应遵循&quot;清净庄严&quot;的原则。</p>
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