import Image from 'next/image'
import { useMemo, useEffect, useState } from 'react'
import { BellIcon } from '@heroicons/react/24/outline'

export interface Wish {
  text: string
  timestamp: Date
}

interface WishesDisplayProps {
  wishes: Wish[]
}

// 生成随机莲友ID的函数
const generateLianYouId = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = 0; i < 5; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

const WishesDisplay = ({ wishes }: WishesDisplayProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // 检测是否为移动端
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  // 自动滚动效果
  useEffect(() => {
    if (isMobile && wishes.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % wishes.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [wishes.length, isMobile])

  // 为每个心愿生成一个固定的莲友ID
  const wishesWithId = useMemo(() => {
    return wishes.map(wish => ({
      ...wish,
      lianYouId: generateLianYouId()
    }))
  }, [wishes])

  // 移动端通告栏样式
  if (isMobile) {
    return (
      <div className="fixed top-16 left-0 right-0 z-40 bg-light-gold/95 backdrop-blur-sm shadow-sm border-y border-primary-gold/20">
        {wishes.length > 0 && (
          <div className="flex items-center px-4 py-1.5 text-burgundy overflow-hidden">
            <BellIcon className="w-4 h-4 flex-shrink-0 mr-2 animate-bounce text-primary-gold" />
            <div className="overflow-hidden whitespace-nowrap">
              <div 
                className="inline-block animate-marquee text-sm font-song"
                style={{
                  animation: 'marquee 20s linear infinite'
                }}
              >
                {wishesWithId.map((wish, index) => (
                  <span key={index} className="mr-8">
                    莲友{wish.lianYouId}：{wish.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // 桌面端原有样式
  return (
    <div className="w-full bg-gradient-to-br from-bg-cream/95 via-light-gold/30 to-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl mb-6 border border-primary-gold/10">
      <div className="flex items-center gap-2 mb-4">
        <div className="relative w-6 h-6">
          <Image
            src="/images/icon/lotus-icon.svg"
            alt="莲花图标"
            fill
            className="object-contain [filter:invert(54%)_sepia(97%)_saturate(402%)_hue-rotate(6deg)_brightness(89%)_contrast(101%)]"
          />
        </div>
        <h2 className="text-2xl font-kai font-bold text-burgundy">
          心愿展示台
        </h2>
      </div>
      
      <div className="h-[180px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary-gold/40 hover:scrollbar-thumb-primary-gold/60 pr-2 border-y border-primary-gold/20">
        <div className="space-y-3 py-2">
          {wishesWithId.length === 0 ? (
            <p className="text-center text-gray-500 font-song py-4">暂无心愿</p>
          ) : (
            wishesWithId.map((wish, index) => (
              <div 
                key={index}
                className="bg-white/60 p-4 rounded-lg border border-primary-gold/20 transition-all duration-300 hover:border-primary-gold/40 hover:scale-[1.02] hover:bg-white/80 shadow-sm mx-1"
              >
                <p className="text-dark-brown font-song line-clamp-2">
                  {wish.text}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">
                    {wish.timestamp.toLocaleString('zh-CN', {
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                  <p className="text-xs text-primary-gold/80 font-song">
                    莲友{wish.lianYouId}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default WishesDisplay 