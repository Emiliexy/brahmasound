'use client'

import { useState, useEffect } from 'react'
import { CalendarIcon, BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Lunar, Solar } from 'lunar-typescript'

// 佛历年份计算（以公元前543年为起点）
const getBuddhistYear = (date: Date) => {
  return date.getFullYear() + 543
}

// 计算到观音菩萨圣诞的天数
const getDaysUntilGuanYinBirthday = () => {
  const today = Solar.fromDate(new Date())
  const thisYear = today.getYear()
  
  // 获取今年的观音菩萨圣诞（农历二月十九）
  let festival = Lunar.fromYmd(thisYear, 2, 19).getSolar()
  
  // 如果今年的节日已经过去，就计算到明年的节日
  if (today.getJulianDay() > festival.getJulianDay()) {
    festival = Lunar.fromYmd(thisYear + 1, 2, 19).getSolar()
  }
  
  // 计算相差的天数
  const daysUntil = Math.ceil(festival.getJulianDay() - today.getJulianDay())
  
  return {
    name: '观音菩萨圣诞',
    daysUntil,
    date: festival.toYmd()
  }
}

const BuddhistCalendar = () => {
  const [currentDate] = useState(new Date())
  const [isHovered, setIsHovered] = useState(false)
  const [upcomingFestival, setUpcomingFestival] = useState<{
    name: string;
    daysUntil: number;
    date: string;
  } | null>(null)
  
  const buddhistYear = getBuddhistYear(currentDate)

  useEffect(() => {
    const festival = getDaysUntilGuanYinBirthday()
    setUpcomingFestival(festival)
  }, [])

  // 获取农历日期
  const lunar = Lunar.fromDate(currentDate)
  const lunarDate = `农历${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`

  return (
    <div 
      className="w-full bg-gradient-to-br from-bg-cream/95 via-light-gold/30 to-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 transition-all duration-300 hover:shadow-xl mb-6 border border-primary-gold/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 标题区域 */}
      <div className="flex items-center gap-2 mb-3">
        <div className="relative w-6 h-6">
          <Image
            src="/images/icon/lotus-icon.svg"
            alt="莲花图标"
            fill
            className="object-contain [filter:invert(54%)_sepia(97%)_saturate(402%)_hue-rotate(6deg)_brightness(89%)_contrast(101%)]"
          />
        </div>
        <h2 className="text-2xl font-kai font-bold text-burgundy">
          佛历
        </h2>
      </div>

      {/* 佛历日期显示 */}
      <div className="bg-white/60 p-3 rounded-lg border border-primary-gold/20 mb-3 transition-all duration-300 hover:border-primary-gold/40">
        <div className="flex items-center gap-2 mb-1">
          <CalendarIcon className="w-5 h-5 text-primary-gold" />
          <span className="text-lg font-kai text-dark-brown">
            佛历 {buddhistYear} 年
          </span>
        </div>
        <div className="space-y-0.5">
          <p className="text-sm text-gray-600">
            公历 {currentDate.getFullYear()} 年 {currentDate.getMonth() + 1} 月 {currentDate.getDate()} 日
          </p>
          <p className="text-sm text-gray-600">
            {lunarDate}
          </p>
        </div>
      </div>

      {/* 即将到来的节日提醒 */}
      {upcomingFestival && (
        <div className={`bg-burgundy/10 p-3 rounded-lg border border-burgundy/20 transition-all duration-300 ${
          isHovered ? 'animate-pulse' : ''
        }`}>
          <div className="flex items-center gap-2">
            <BellIcon className="w-5 h-5 text-burgundy" />
            <span className="text-burgundy font-kai">
              节日提醒
            </span>
          </div>
          <div className="space-y-0.5 mt-1">
            <p className="text-sm text-gray-700">
              {upcomingFestival.name}将在 {upcomingFestival.daysUntil} 天后到来
            </p>
            <p className="text-xs text-gray-500">
              农历二月十九日（{upcomingFestival.date}）
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default BuddhistCalendar 