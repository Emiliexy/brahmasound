'use client'

import WorshipSection from '@/components/WorshipSection'
import DailyWisdom from '@/components/DailyWisdom'
import ChantingSection from '@/components/ChantingSection'
import PracticeSection from '@/components/PracticeSection'
import WishesDisplay from '@/components/WishesDisplay'
import { useState, useEffect } from 'react'
import type { Wish } from '@/components/WishesDisplay'

// 从 localStorage 加载心愿数据的函数
const loadWishesFromStorage = (): Wish[] => {
  if (typeof window === 'undefined') return []
  const savedWishes = localStorage.getItem('wishes')
  if (savedWishes) {
    try {
      return JSON.parse(savedWishes).map((wish: any) => ({
        ...wish,
        timestamp: new Date(wish.timestamp)
      }))
    } catch (error) {
      console.error('Error loading wishes:', error)
      return []
    }
  }
  return []
}

// 保存心愿数据到 localStorage 的函数
const saveWishesToStorage = (wishes: Wish[]) => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem('wishes', JSON.stringify(wishes))
  } catch (error) {
    console.error('Error saving wishes:', error)
  }
}

export default function Home() {
  const [wishes, setWishes] = useState<Wish[]>([])

  // 组件加载时从 localStorage 读取数据
  useEffect(() => {
    const savedWishes = loadWishesFromStorage()
    setWishes(savedWishes)
  }, [])

  const handleWishComplete = (wish: Wish) => {
    setWishes(prevWishes => {
      const newWishes = [wish, ...prevWishes].slice(0, 5) // 只保留最新的5条
      saveWishesToStorage(newWishes) // 保存到 localStorage
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
