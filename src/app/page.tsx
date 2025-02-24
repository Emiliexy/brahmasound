'use client'

import WorshipSection from '@/components/WorshipSection'
import DailyWisdom from '@/components/DailyWisdom'
import ChantingSection from '@/components/ChantingSection'
import PracticeSection from '@/components/PracticeSection'
import WishesDisplay from '@/components/WishesDisplay'
import { useState } from 'react'
import type { Wish } from '@/components/WishesDisplay'

export default function Home() {
  const [wishes, setWishes] = useState<Wish[]>([])

  const handleWishComplete = (wish: Wish) => {
    setWishes(prevWishes => {
      const newWishes = [wish, ...prevWishes].slice(0, 5) // 只保留最新的5条
      return newWishes
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* 主内容区和侧边栏布局 */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 主内容区 */}
        <div className="flex-1 space-y-16">
          <section id="worship">
            <WorshipSection onWishComplete={handleWishComplete} />
          </section>

          <section id="chanting">
            <ChantingSection />
          </section>
        </div>

        {/* 侧边栏 */}
        <div className="lg:w-80 lg:flex-shrink-0">
          <div className="sticky top-24" style={{ marginBottom: 'calc(100vh - 800px)' }}>
            <WishesDisplay wishes={wishes} />
            <DailyWisdom />
          </div>
        </div>
      </div>

      {/* 佛法修行模块（全宽显示） */}
      <section id="practice" className="mt-16">
        <PracticeSection />
      </section>
    </div>
  )
}
