'use client'

import { useState, useRef, useEffect } from 'react'
import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline'

const sutraContent = [
  { id: 'title', text: '般若波罗蜜多心经' },
  { id: 'guanzizai', text: '观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。' },
  { id: 'sebuyi', text: '舍利子，色不异空，空不异色，色即是空，空即是色，受想行识，亦复如是。' },
  { id: 'zhufakong', text: '舍利子，是诸法空相，不生不灭，不垢不净，不增不减。是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界，乃至无意识界。' },
  { id: 'wuwuming', text: '无无明，亦无无明尽，乃至无老死，亦无老死尽。无苦集灭道，无智亦无得。' },
  { id: 'yiwusuode', text: '以无所得故，菩提萨埵，依般若波罗蜜多故，心无挂碍，无挂碍故，无有恐怖，远离颠倒梦想，究竟涅槃。' },
  { id: 'sanshifo', text: '三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。' },
  { id: 'guzhipoluomiduoduo', text: '故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。' },
  { id: 'jieshuo', text: '故说般若波罗蜜多咒，即说咒曰：揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。' }
]

const menuItems = [
  { id: 'guanzizai', text: '观自在菩萨' },
  { id: 'sebuyi', text: '舍利子，色不异空' },
  { id: 'zhufakong', text: '是诸法空相' },
  { id: 'wuwuming', text: '无无明，亦无无明尽' },
  { id: 'yiwusuode', text: '以无所得故' },
  { id: 'sanshifo', text: '三世诸佛' },
  { id: 'guzhipoluomiduoduo', text: '故知般若波罗蜜多' },
  { id: 'jieshuo', text: '故说般若波罗蜜多咒' }
]

const explanations = [
  {
    id: 'guanzizai',
    title: '观自在菩萨',
    content: '观自在菩萨在深入修行般若波罗蜜多（究竟智慧）时，彻见一切身心现象（五蕴：色、受、想、行、识）皆是空性，因此得以超越一切痛苦与困厄。'
  },
  {
    id: 'sebuyi',
    title: '色不异空',
    content: '舍利子啊，物质现象（色）与空性没有差别，空性与物质现象也没有差别，色即是空，空即是色。同样，感受（受）、想象（想）、意志（行）和意识（识）也是如此。'
  },
  {
    id: 'zhufakong',
    title: '诸法空相',
    content: '舍利子啊，一切事物的本质都是"空相"，它们既不会生起，也不会消亡，不会污秽，也不会清净，不会增加，也不会减少。因此，在空性之中，没有物质（色），没有感受、想象、意志、意识（受、想、行、识）；没有眼、耳、鼻、舌、身、意六根；没有色、声、香、味、触、法六尘；没有从眼界到意识界的存在。'
  },
  {
    id: 'wuwuming',
    title: '无无明',
    content: '没有无明，也没有无明的消尽，乃至没有老死，也没有老死的消尽。没有苦、集、灭、道（四圣谛），没有智慧，也没有所得。'
  },
  {
    id: 'yiwusuode',
    title: '以无所得',
    content: '正因为无所得，所以菩萨依靠般若波罗蜜多的智慧，内心无所执著，没有执著就没有恐惧，远离一切颠倒虚妄的妄想，最终达到究竟的涅槃境界。'
  },
  {
    id: 'sanshifo',
    title: '三世诸佛',
    content: '过去、现在、未来三世的一切佛陀，都依靠般若波罗蜜多，成就无上正等正觉（阿耨多罗三藐三菩提）。'
  },
  {
    id: 'guzhipoluomiduoduo',
    title: '大神咒',
    content: '所以应当知道，般若波罗蜜多是伟大的真言，是明亮的真言，是无上的真言，是无与伦比的真言，能够消除一切痛苦，真实不虚。'
  },
  {
    id: 'jieshuo',
    title: '真言',
    content: '因此，宣说般若波罗蜜多的真言："揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃！"（去吧，去吧，去到彼岸，大家一起去到彼岸，觉悟成就！）'
  }
]

const HeartSutraPage = () => {
  const [showExplanation, setShowExplanation] = useState(true)
  const [fontSize, setFontSize] = useState('text-lg')
  const [isVertical, setIsVertical] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('00:00')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const duration = '03:44'
  const contentRef = useRef<HTMLDivElement>(null)
  const [currentExplanation, setCurrentExplanation] = useState<string>('guanzizai')
  const [highlightedId, setHighlightedId] = useState<string | null>(null)

  useEffect(() => {
    // 创建音频元素
    audioRef.current = new Audio('/audio/jingshu/heart-sutra.mp3')
    
    // 监听音频进度
    audioRef.current.addEventListener('timeupdate', updateProgress)
    
    // 监听音频结束
    audioRef.current.addEventListener('ended', handleAudioEnd)
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress)
        audioRef.current.removeEventListener('ended', handleAudioEnd)
        audioRef.current.pause()
      }
    }
  }, [])

  const updateProgress = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(currentProgress)
      
      // 更新当前时间显示
      const minutes = Math.floor(audioRef.current.currentTime / 60)
      const seconds = Math.floor(audioRef.current.currentTime % 60)
      setCurrentTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
    }
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime('00:00')
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
      const progressBarWidth = progressBar.offsetWidth
      const newProgress = (clickPosition / progressBarWidth) * 100
      const newTime = (audioRef.current.duration * newProgress) / 100
      
      audioRef.current.currentTime = newTime
      setProgress(newProgress)
    }
  }

  const scrollToSection = (id: string) => {
    if (contentRef.current) {
      const element = document.getElementById(id)
      if (element) {
        const container = contentRef.current
        const elementPosition = element.offsetTop
        container.scrollTo({
          top: elementPosition - container.offsetTop - 20,
          behavior: 'smooth'
        })
        setCurrentExplanation(id)
        setHighlightedId(id)
        
        // 3秒后取消高亮
        setTimeout(() => {
          setHighlightedId(null)
        }, 3000)
      }
    }
  }

  // 监听经文滚动，更新当前释义
  useEffect(() => {
    const container = contentRef.current
    if (!container) return

    const handleScroll = () => {
      const paragraphs = container.getElementsByTagName('p')
      for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i]
        const rect = paragraph.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        
        if (rect.top >= containerRect.top && rect.top <= containerRect.bottom) {
          const id = paragraph.id
          if (id && id !== 'title') {
            setCurrentExplanation(id)
          }
          break
        }
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-cream via-light-gold/5 to-bg-cream">
      <div className="absolute inset-0 bg-[url('/images/patterns/lotus-pattern-light.png')] opacity-5 pointer-events-none" />
      
      {/* 页面头部 */}
      <header className="relative px-8 py-6 border-b border-primary-gold/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold font-song text-dark-brown">《心经》</h1>
          <p className="mt-2 text-gray-600 max-w-2xl">
            《心经》是佛教最重要的经典之一，全文260字，深入探讨"空性"智慧，被誉为'诸佛母'。
          </p>
          
          {/* 音频控件 */}
          <div className="mt-4 flex items-center gap-4 max-w-2xl">
            <button
              onClick={handlePlayPause}
              className="text-primary-gold hover:text-deep-gold transition-colors"
            >
              {isPlaying ? (
                <PauseCircleIcon className="w-12 h-12" />
              ) : (
                <PlayCircleIcon className="w-12 h-12" />
              )}
            </button>
            
            {/* 进度条 */}
            <div 
              className="flex-1 h-2 bg-gray-200 rounded-full cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-primary-gold rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <span className="text-sm text-dark-brown whitespace-nowrap">
              {currentTime} / {duration}
            </span>
          </div>
        </div>
      </header>

      <main className="relative px-8 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          {/* 左侧导航 */}
          <aside className="col-span-3 space-y-6">
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-primary-gold/20">
              <h2 className="text-lg font-bold text-dark-brown mb-4">经文目录</h2>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gold/50 text-dark-brown
                             transition-colors flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-gold/60" />
                    <span>{item.text}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-primary-gold/20">
              <h2 className="text-lg font-bold text-dark-brown mb-4">相关资料</h2>
              <nav className="space-y-2">
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-light-gold/50 text-dark-brown transition-colors">
                  📚 心经的历史、版本、各宗派解读
                </a>
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-light-gold/50 text-dark-brown transition-colors">
                  🔗 《金刚经》
                </a>
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-light-gold/50 text-dark-brown transition-colors">
                  🔗 《大般若经》
                </a>
              </nav>
            </div>
          </aside>

          {/* 中间经文 */}
          <div className="col-span-6">
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-sm border border-primary-gold/20">
              <div className="flex justify-between items-center mb-4">
                <div className="space-x-2">
                  <button
                    onClick={() => setFontSize('text-base')}
                    className={`px-3 py-1 rounded ${fontSize === 'text-base' ? 'bg-primary-gold/20' : 'hover:bg-primary-gold/10'}`}
                  >
                    小
                  </button>
                  <button
                    onClick={() => setFontSize('text-lg')}
                    className={`px-3 py-1 rounded ${fontSize === 'text-lg' ? 'bg-primary-gold/20' : 'hover:bg-primary-gold/10'}`}
                  >
                    中
                  </button>
                  <button
                    onClick={() => setFontSize('text-xl')}
                    className={`px-3 py-1 rounded ${fontSize === 'text-xl' ? 'bg-primary-gold/20' : 'hover:bg-primary-gold/10'}`}
                  >
                    大
                  </button>
                </div>
                <button
                  onClick={() => setIsVertical(!isVertical)}
                  className="px-3 py-1 rounded hover:bg-primary-gold/10"
                >
                  {isVertical ? '横排' : '竖排'}
                </button>
              </div>
              <div 
                ref={contentRef}
                className={`${fontSize} font-song text-dark-brown leading-loose overflow-y-auto max-h-[600px] ${
                  isVertical ? 'writing-vertical-rl h-[600px]' : ''
                }`}
              >
                {sutraContent.map((paragraph) => (
                  <p 
                    key={paragraph.id} 
                    id={paragraph.id}
                    className={`mb-4 indent-8 scroll-mt-4 transition-all duration-300 rounded-lg ${
                      highlightedId === paragraph.id 
                        ? 'bg-primary-gold/10 -mx-4 px-4' 
                        : ''
                    }`}
                  >
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧释义 */}
          <aside className="col-span-3">
            {showExplanation ? (
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-primary-gold/20">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-dark-brown">经文释义</h2>
                  <button
                    onClick={() => setShowExplanation(false)}
                    className="text-sm text-gray-500 hover:text-dark-brown transition-colors"
                  >
                    隐藏释义
                  </button>
                </div>
                <div className="space-y-4 h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary-gold/40 hover:scrollbar-thumb-primary-gold/60">
                  {explanations.map((explanation) => (
                    <div 
                      key={explanation.id}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        currentExplanation === explanation.id 
                          ? 'bg-light-gold/50 shadow-sm' 
                          : 'bg-light-gold/20 hover:bg-light-gold/30'
                      }`}
                    >
                      <h3 className="font-bold mb-2 text-burgundy">{explanation.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {explanation.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowExplanation(true)}
                className="w-full bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-primary-gold/20 
                         hover:bg-white/90 transition-all duration-300 text-left group"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-kai text-lg text-dark-brown">展开释义</span>
                </div>
              </button>
            )}
          </aside>
        </div>
      </main>
    </div>
  )
}

export default HeartSutraPage 