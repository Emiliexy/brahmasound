'use client'

import { HandRaisedIcon, ShareIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useTranslation } from '@/hooks/useTranslation'
import { Locale } from '@/i18n/config'

interface WisdomQuote {
  text: string
  source: string
  category: string
}

const wisdomQuotes: Record<Locale, WisdomQuote[]> = {
  'zh-CN': [
    {
      text: "放下执着，迎接自在",
      source: "星云大师",
      category: "修心"
    },
    {
      text: "心若无事，便是禅定",
      source: "六祖惠能",
      category: "禅修"
    },
    {
      text: "万法皆空，因果不空",
      source: "佛经智慧",
      category: "因果"
    },
    {
      text: "心静如水，返观自在",
      source: "禅宗智慧",
      category: "修心"
    },
    {
      text: "随缘不变，不变随缘",
      source: "净空法师",
      category: "修行"
    },
    {
      text: "慈悲喜舍，自在随心",
      source: "佛门智慧",
      category: "慈悲"
    },
    {
      text: "心中有佛，处处光明",
      source: "弘一大师",
      category: "信仰"
    },
    {
      text: "诸恶莫作，众善奉行",
      source: "七佛通诫",
      category: "修行"
    },
    {
      text: "一念清净，福至心灵",
      source: "佛门智慧",
      category: "修心"
    },
    {
      text: "心有菩提，处处是道",
      source: "禅宗智慧",
      category: "修行"
    }
  ],
  'zh-TW': [
    {
      text: "放下執著，迎接自在",
      source: "星雲大師",
      category: "修心"
    },
    {
      text: "心若無事，便是禪定",
      source: "六祖慧能",
      category: "禪修"
    },
    {
      text: "萬法皆空，因果不空",
      source: "佛經智慧",
      category: "因果"
    },
    {
      text: "心靜如水，返觀自在",
      source: "禪宗智慧",
      category: "修心"
    },
    {
      text: "隨緣不變，不變隨緣",
      source: "淨空法師",
      category: "修行"
    },
    {
      text: "慈悲喜舍，自在随心",
      source: "佛门智慧",
      category: "慈悲"
    },
    {
      text: "心中有佛，处处光明",
      source: "弘一大师",
      category: "信仰"
    },
    {
      text: "诸恶莫作，众善奉行",
      source: "七佛通诫",
      category: "修行"
    },
    {
      text: "一念清净，福至心灵",
      source: "佛门智慧",
      category: "修心"
    },
    {
      text: "心有菩提，处处是道",
      source: "禅宗智慧",
      category: "修行"
    }
  ]
}

// 获取每日索引的函数
const getDailyIndex = () => {
  const today = new Date()
  const dateString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
  const hash = dateString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  return hash % 5 // 现在固定为5条智慧语
}

const DailyWisdom = () => {
  const { t, locale } = useTranslation()
  const [wisdom, setWisdom] = useState<WisdomQuote>(wisdomQuotes[locale][0])
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const index = getDailyIndex()
    setWisdom(wisdomQuotes[locale][index])
  }, [locale])

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: t('daily-wisdom.title'),
          text: `${wisdom.text} —— ${wisdom.source}`,
          url: window.location.href
        })
      } else {
        // 如果不支持原生分享API，复制到剪贴板
        await navigator.clipboard.writeText(`${wisdom.text} —— ${wisdom.source}`)
        toast.success(t('wisdom.copied'), {
          style: {
            background: 'rgba(255, 248, 220, 0.95)',
            color: '#5D3A1A',
            border: '1px solid #B8860B',
          },
        })
      }
    } catch (error) {
      console.error('分享失败:', error)
    }
  }

  return (
    <div 
      className="w-full h-40 bg-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <HandRaisedIcon className={`w-6 h-6 text-primary-gold transition-all duration-1000 ${isHovered ? 'animate-pulse' : ''}`} />
          <h2 className="text-2xl font-kai font-bold text-burgundy">
            {t('daily-wisdom.title')}
          </h2>
        </div>
        <button 
          onClick={handleShare}
          className="p-2 rounded-full hover:bg-primary-gold/10 transition-colors duration-200"
          aria-label={t('wisdom.share')}
        >
          <ShareIcon className="w-5 h-5 text-primary-gold" />
        </button>
      </div>
      
      <div 
        className={`bg-light-gold/50 p-4 rounded-lg border border-primary-gold/20 h-[calc(100%-2.5rem)] flex flex-col justify-center group transition-all duration-300 ${
          isHovered ? 'border-primary-gold/40 scale-[1.02]' : ''
        }`}
      >
        <p className="text-center text-lg font-kai text-dark-brown transition-all duration-300 group-hover:scale-105">
          {wisdom.text}
        </p>
        <div className={`mt-3 border-t border-primary-gold/20 transition-opacity duration-300 ${
          isHovered ? 'opacity-50' : 'opacity-20'
        }`} />
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-primary-gold/60">
            #{wisdom.category}
          </span>
          <p className="text-center text-sm text-gray-500">
            —— {wisdom.source}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DailyWisdom 