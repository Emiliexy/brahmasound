'use client'

import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { toast } from 'react-hot-toast'
import type { Wish } from './WishesDisplay'

// 敏感词列表
const sensitiveWords = [
  // 政治相关
  '政府', '官员', '领导人', '国家主席', '总理', '选举', '民主', '共产党', '国民党',
  // 不良行为
  '赌博', '吸毒', '嫖娼', '作弊', '欺诈', '造假',
  // 违法犯罪
  '偷窃', '抢劫', '杀人', '犯罪', '非法', '违法', '毒品', '走私',
  // 迷信邪教
  '邪教', '封建迷信', '巫术', '咒语', '诅咒', '符咒',
  // 谩骂歧视
  '傻逼', '混蛋', '白痴', '智障', '贱', '畜生', '猪狗', '垃圾'
]

// 检查文本是否包含敏感词
const containsSensitiveWords = (text: string): boolean => {
  return sensitiveWords.some(word => text.includes(word))
}

const PRESS_DURATION = 5000 // 5秒
const INITIAL_MESSAGE_DELAY = 500 // 0.5秒

// 统一的提示消息样式
const toastStyle = {
  style: {
    background: 'rgba(255, 248, 220, 0.95)',
    border: '1px solid #B8860B',
    padding: '16px 24px',
    color: '#5D3A1A',
    fontSize: '18px',
    fontFamily: 'KaiTi, STKaiti, serif',
    boxShadow: '0 4px 6px rgba(184, 134, 11, 0.1)',
  },
}

const errorToastStyle = {
  style: {
    ...toastStyle.style,
    background: 'rgba(255, 240, 240, 0.95)',
    border: '1px solid #800020',
    color: '#800020',
  },
}

interface WorshipSectionProps {
  onWishComplete: (wish: Wish) => void
}

const WorshipSection = ({ onWishComplete }: WorshipSectionProps) => {
  const [wishText, setWishText] = useState('')
  const [isGlowing, setIsGlowing] = useState(false)
  const [pressProgress, setPressProgress] = useState(0)
  const [buttonText1, setButtonText1] = useState('祈愿行拜礼')
  const [buttonText2, setButtonText2] = useState('直接行拜礼')
  const pressTimer = useRef<NodeJS.Timeout | null>(null)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)
  const maxLength = 50

  const handleWishChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    if (text.length <= maxLength) {
      // 检查是否包含敏感词
      if (containsSensitiveWords(text)) {
        toast.error('请文明祈愿，不要包含不当词汇', {
          duration: 3000,
          ...errorToastStyle,
        })
        return
      }
      setWishText(text)
    }
  }

  const startPress = (isWishButton: boolean) => {
    if (isWishButton) {
      if (!wishText.trim()) {
        toast.error('请先填写祈愿', {
          duration: 3000,
          ...errorToastStyle,
        })
        return
      }

      // 再次检查敏感词
      if (containsSensitiveWords(wishText)) {
        toast.error('祈愿内容包含不当词汇，请修改后重试', {
          duration: 3000,
          ...errorToastStyle,
        })
        return
      }
    }

    toast('请长按5秒完成礼佛', {
      duration: 3000,
      ...toastStyle,
    })

    // 开始计时和进度
    let progress = 0
    progressInterval.current = setInterval(() => {
      progress += 2
      setPressProgress(Math.min(progress, 100))
    }, 100)

    // 0.5秒后更改按钮文字
    setTimeout(() => {
      if (isWishButton) {
        setButtonText1('请默念：南无大慈大悲观世音菩萨')
      } else {
        setButtonText2('请默念：南无大慈大悲观世音菩萨')
      }
    }, INITIAL_MESSAGE_DELAY)

    // 5秒后完成
    pressTimer.current = setTimeout(() => {
      completePress(isWishButton)
    }, PRESS_DURATION)
  }

  const completePress = (isWishButton: boolean) => {
    // 清除定时器
    if (pressTimer.current) clearTimeout(pressTimer.current)
    if (progressInterval.current) clearInterval(progressInterval.current)

    // 重置按钮文字和进度
    setButtonText1('祈愿行拜礼')
    setButtonText2('直接行拜礼')
    setPressProgress(0)

    // 如果是祈愿按钮，提交心愿
    if (isWishButton && wishText.trim()) {
      onWishComplete({
        text: wishText.trim(),
        timestamp: new Date()
      })
      setWishText('') // 清空输入框
    }

    // 显示完成提示
    toast.success('祈愿完成，愿菩萨保佑🙏！', {
      duration: 4000,
      ...toastStyle,
      style: {
        ...toastStyle.style,
        background: 'rgba(255, 248, 220, 0.98)',
        border: '2px solid #B8860B',
      },
    })

    // 触发图片发光效果
    setIsGlowing(true)
    setTimeout(() => setIsGlowing(false), 3000)
  }

  const cancelPress = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current)
    if (progressInterval.current) clearInterval(progressInterval.current)
    setButtonText1('祈愿行拜礼')
    setButtonText2('直接行拜礼')
    setPressProgress(0)
  }

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-bg-cream/95 via-light-gold/30 to-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-primary-gold/10">
      <h2 className="text-3xl font-kai font-bold mb-8 text-burgundy">礼拜观音</h2>
      
      {/* 观音图片 */}
      <div className={`relative w-full aspect-video mb-8 rounded-lg overflow-hidden transition-all duration-1000 ${isGlowing ? 'ring-8 ring-primary-gold/50 shadow-2xl shadow-primary-gold/30' : ''}`}>
        <Image
          src="/images/libaiguanyin/guanyin.JPG"
          alt="观世音菩萨圣像"
          fill
          className={`object-cover transition-all duration-1000 ${isGlowing ? 'brightness-125 contrast-125' : ''}`}
          priority
        />
      </div>

      {/* 祈愿区域 */}
      <div className="flex gap-6">
        <div className="w-[600px] relative">
          <textarea
            value={wishText}
            onChange={handleWishChange}
            maxLength={maxLength}
            className="w-full h-24 p-4 rounded-lg bg-white/60 border-2 border-dark-brown/30 focus:border-primary-gold focus:outline-none resize-none hover:bg-white/80 transition-all duration-300"
            placeholder="南无大慈大悲观世音菩萨，弟子在此虔诚祈愿..."
          />
          <div className="absolute bottom-2 right-2 text-sm text-gray-500">
            {wishText.length}/{maxLength}
          </div>
        </div>
        
        <div className="flex flex-col h-24 justify-between flex-1">
          <div className="relative">
            <button
              onMouseDown={() => startPress(true)}
              onMouseUp={cancelPress}
              onMouseLeave={cancelPress}
              onTouchStart={() => startPress(true)}
              onTouchEnd={cancelPress}
              className="btn-primary w-full relative overflow-hidden"
            >
              {buttonText1}
              {pressProgress > 0 && (
                <div 
                  className="absolute left-0 bottom-0 h-1 bg-white/50 transition-all duration-100"
                  style={{ width: `${pressProgress}%` }}
                />
              )}
            </button>
          </div>
          <div className="relative">
            <button
              onMouseDown={() => startPress(false)}
              onMouseUp={cancelPress}
              onMouseLeave={cancelPress}
              onTouchStart={() => startPress(false)}
              onTouchEnd={cancelPress}
              className="btn-secondary w-full relative overflow-hidden"
            >
              {buttonText2}
              {pressProgress > 0 && (
                <div 
                  className="absolute left-0 bottom-0 h-1 bg-primary-gold/50 transition-all duration-100"
                  style={{ width: `${pressProgress}%` }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorshipSection 