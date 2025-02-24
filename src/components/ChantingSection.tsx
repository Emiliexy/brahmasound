'use client'

import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid'
import { useState, useRef, useEffect } from 'react'

const sutras = {
  'heart': {
    title: '般若波罗蜜多心经',
    description: '佛教最精简、最重要的经典之一，阐述"色即是空，空即是色"的般若智慧',
    content: [
      '般若波罗蜜多心经',
      '观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。',
      '舍利子，色不异空，空不异色，色即是空，空即是色，受想行识，亦复如是。',
      '舍利子，是诸法空相，不生不灭，不垢不净，不增不减。是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界，乃至无意识界。',
      '无无明，亦无无明尽，乃至无老死，亦无老死尽。无苦集灭道，无智亦无得。',
      '以无所得故，菩提萨埵，依般若波罗蜜多故，心无挂碍，无挂碍故，无有恐怖，远离颠倒梦想，究竟涅槃。',
      '三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。',
      '故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。',
      '故说般若波罗蜜多咒，即说咒曰：揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。'
    ],
    audioSrc: '/audio/jingshu/heart-sutra.mp3',
    duration: '03:44'
  },
  'avalokitesvara': {
    title: '妙法莲华经 · 观世音菩萨普门品',
    description: '阐述大慈大悲观世音菩萨的救苦救难本愿力',
    content: [
      '尔时，无尽意菩萨即从座起，偏袒右肩，合掌向佛，而作是言："世尊，观世音菩萨以何因缘，名观世音？"',
      '佛告无尽意菩萨："善男子，若有无量百千万亿众生，受诸苦恼，闻是观世音菩萨，一心称名，观世音菩萨即时观其音声，皆得解脱。',
      '若有持是观世音菩萨名者，设入大火，火不能烧；若为大水所漂，称其名号，即得浅处。',
      '若有百千万亿众生，为求金、银、琉璃、砗磲、玛瑙、珊瑚、琥珀、真珠等宝，入于大海，假使黑风吹其船舫，飘堕罗刹鬼国，其中若有乃至一人，称观世音菩萨名者，是诸人等，皆得解脱罗刹之难。以是因缘，名观世音。',
      '若复有人，临当被害，称观世音菩萨名者，彼所执刀杖，寻段段坏，而得解脱。',
      '若三千大千国土，满中夜叉、罗刹，欲来恼人，闻其称观世音菩萨名者，是诸恶鬼，尚不能以恶眼视之，况复加害？',
      '设复有人，若有罪、若无罪，杻械、枷锁检系其身，称观世音菩萨名者，皆悉断坏，即得解脱。',
      '若三千大千国土，满中怨贼，有一商主，将诸商人，赍持重宝，经过险路，其中一人作是唱言："诸善男子，勿得恐怖！汝等应当一心称观世音菩萨名号，是菩萨能以无畏施于众生，汝等若称名者，于此怨贼，当得解脱。"众商人闻，俱发声言："南无观世音菩萨"。称其名故，即得解脱。',
      '无尽意，观世音菩萨摩诃萨，威神之力，巍巍如是。若有众生多于淫欲，常念恭敬观世音菩萨，便得离欲；若多嗔恚，常念恭敬观世音菩萨，便得离嗔；若多愚痴，常念恭敬观世音菩萨，便得离痴。',
      '无尽意，观世音菩萨有如是等大威神力，多所饶益，是故众生常应心念。若有女人，设欲求男，礼拜供养观世音菩萨，便生福德智慧之男；设欲求女，便生端正有相之女，宿植德本，众人爱敬。',
      '无尽意，观世音菩萨有如是力，若有众生恭敬礼拜观世音菩萨，福不唐捐。是故众生皆应受持观世音菩萨名号。',
      '无尽意，若有人受持六十二亿恒河沙菩萨名字，复尽形供养饮食、衣服、卧具、医药，于汝意云何？是善男子、善女人功德多不？"',
      '无尽意言："甚多，世尊。"',
      '佛言："若复有人受持观世音菩萨名号，乃至一时礼拜供养，是二人福德正等无异。于百千万亿劫不可穷尽。',
      '无尽意，受持观世音菩萨名号，得如是无量无边福德之利。"',
      '无尽意菩萨白佛言："世尊，观世音菩萨云何游此娑婆世界？云何而为众生说法？方便之力，其事云何？"',
      '佛告无尽意菩萨："善男子，若有国土众生，应以佛身得度者，观世音菩萨即现佛身而为说法；应以辟支佛身得度者，即现辟支佛身而为说法；应以声闻身得度者，即现声闻身而为说法；应以梵王身得度者，即现梵王身而为说法；应以帝释身得度者，即现帝释身而为说法；应以自在天身得度者，即现自在天身而为说法；应以大自在天身得度者，即现大自在天身而为说法；应以天大将军身得度者，即现天大将军身而为说法；应以毗沙门身得度者，即现毗沙门身而为说法；应以小王身得度者，即现小王身而为说法；应以长者身得度者，即现长者身而为说法；应以居士身得度者，即现居士身而为说法；应以宰官身得度者，即现宰官身而为说法；应以婆罗门身得度者，即现婆罗门身而为说法；应以比丘、比丘尼、优婆塞、优婆夷身得度者，即现比丘、比丘尼、优婆塞、优婆夷身而为说法；应以长者、居士、宰官、婆罗门妇女身得度者，即现妇女身而为说法；应以童男、童女身得度者，即现童男、童女身而为说法；应以天、龙、夜叉、乾闼婆、阿修罗、迦楼罗、紧那罗、摩睺罗伽、人非人等身得度者，即皆现之而为说法；应以执金刚神得度者，即现执金刚神而为说法。',
      '无尽意，是观世音菩萨成就如是功德，以种种形，游诸国土，度脱众生。是故汝等应当一心供养观世音菩萨。是观世音菩萨摩诃萨，于怖畏急难之中，能施无畏，是故此娑婆世界，皆号之为施无畏者。"',
      '无尽意菩萨白佛言："世尊，我今当供养观世音菩萨。"即解颈众宝珠璎珞，价值百千两金，而以与之，作是言："仁者，受此法施珍宝璎珞。"',
      '时观世音菩萨不肯受之。',
      '无尽意复白观世音菩萨言："仁者，愍我等故，受此璎珞。"',
      '尔时，佛告观世音菩萨："当愍此无尽意菩萨及四众、天、龙、夜叉、乾闼婆、阿修罗、迦楼罗、紧那罗、摩睺罗伽、人非人等故，受是璎珞。"',
      '即时观世音菩萨愍诸四众及于天、龙、人非人等，受其璎珞，分作二分：一分奉释迦牟尼佛，一分奉多宝佛塔。',
      '"无尽意，观世音菩萨有如是自在神力，游于娑婆世界。"',
      '尔时，无尽意菩萨以偈问曰：\n"世尊妙相具，我今重问彼：\n佛子何因缘，名为观世音？"',
      '具足妙相尊，偈答无尽意：\n"汝听观音行，善应诸方所，\n弘誓深如海，历劫不思议，\n侍多千亿佛，发大清净愿。',
      '我为汝略说，闻名及见身，\n心念不空过，能灭诸有苦。\n假使兴害意，推落大火坑，\n念彼观音力，火坑变成池。',
      '或漂流巨海，龙鱼诸鬼难，\n念彼观音力，波浪不能没。\n或在须弥峰，为人所推堕，\n念彼观音力，如日虚空住。',
      '或被恶人逐，堕落金刚山，\n念彼观音力，不能损一毛。\n或值怨贼绕，各执刀加害，\n念彼观音力，咸即起慈心。',
      '或遭王难苦，临刑欲寿终，\n念彼观音力，刀寻段段坏。\n或囚禁枷锁，手足被杻械，\n念彼观音力，释然得解脱。',
      '咒诅诸毒药，所欲害身者，\n念彼观音力，还著于本人。\n或遇恶罗刹，毒龙诸鬼等，\n念彼观音力，时悉不敢害。',
      '若恶兽围绕，利牙爪可怖，\n念彼观音力，疾走无边方。\n蚖蛇及蝮蝎，气毒烟火然，\n念彼观音力，寻声自回去。',
      '云雷鼓掣电，降雹澍大雨，\n念彼观音力，应时得消散。\n众生被困厄，无量苦逼身，\n观音妙智力，能救世间苦。',
      '具足神通力，广修智方便，\n十方诸国土，无刹不现身。\n种种诸恶趣，地狱鬼畜生，\n生老病死苦，以渐悉令灭。',
      '真观清净观，广大智慧观，\n悲观及慈观，常愿常瞻仰。\n无垢清净光，慧日破诸暗，\n能伏灾风火，普明照世间。',
      '悲体戒雷震，慈意妙大云，\n澍甘露法雨，灭除烦恼焰。\n诤讼经官处，怖畏军阵中，\n念彼观音力，众怨悉退散。',
      '妙音观世音，梵音海潮音，\n胜彼世间音，是故须常念。\n念念勿生疑，观世音净圣，\n于苦恼死厄，能为作依怙。',
      '具一切功德，慈眼视众生，\n福聚海无量，是故应顶礼。"',
      '尔时持地菩萨即从座起，前白佛言："世尊，若有众生闻是观世音菩萨品，自在之业，普门示现神通力者，当知是人功德不少。"',
      '佛说是普门品时，众中八万四千众生，皆发无等等阿耨多罗三藐三菩提心。'
    ],
    audioSrc: '/audio/jingshu/pumen-pin.mp3',
    duration: '12:30'
  },
  'greatCompassion': {
    title: '千手千眼观世音菩萨广大圆满无碍大悲心陀罗尼',
    description: '千手千眼观世音菩萨的心咒，具有不可思议的加持力',
    content: [
      '南无、喝啰怛那、哆啰夜耶，南无、阿唎耶，婆卢羯帝、烁钵啰耶，菩提萨埵婆耶，摩诃萨埵婆耶，摩诃、迦卢尼迦耶，唵，萨皤啰罚曳，数怛那怛写，南无、悉吉栗埵、伊蒙阿唎耶，婆卢吉帝、室佛啰楞驮婆，南无、那啰谨墀，醯利摩诃、皤哆沙咩，萨婆阿他、豆输朋，阿逝孕，萨婆萨哆、那摩婆萨哆，那摩婆伽，摩罚特豆。',
      '怛侄他。唵，阿婆卢醯。卢迦帝。迦罗帝。夷醯唎。摩诃菩提萨埵，萨婆萨婆。摩啰摩啰，摩醯摩醯、唎驮孕。俱卢俱卢、羯蒙。度卢度卢、罚阇耶帝。摩诃罚阇耶帝。陀啰陀啰。地唎尼。室佛啰耶。遮啰遮啰。摩么罚摩啰。穆帝隶。伊醯伊醯。室那室那。阿啰参、佛啰舍利。罚沙罚参。佛啰舍耶。呼嚧呼嚧摩啰。呼嚧呼嚧醯利。娑啰娑啰，悉唎悉唎。苏嚧苏嚧。',
      '菩提夜、菩提夜。菩驮夜、菩驮夜。弥帝唎夜。那啰谨墀。地利瑟尼那。婆夜摩那。娑婆诃。悉陀夜。娑婆诃。摩诃悉陀夜。娑婆诃。悉陀喻艺。室皤啰耶。娑婆诃。那啰谨墀。娑婆诃。摩啰那啰。娑婆诃。悉啰僧、阿穆佉耶，娑婆诃。娑婆摩诃、阿悉陀夜。娑婆诃。者吉啰、阿悉陀夜。娑婆诃。波陀摩、羯悉陀夜。娑婆诃。那啰谨墀、皤伽啰耶。娑婆诃。摩婆利、胜羯啰夜。娑婆诃。',
      '南无、喝啰怛那、哆啰夜耶，南无、阿唎耶。婆嚧吉帝。烁皤啰夜。娑婆诃。唵，悉殿都。漫多啰。跋陀耶，娑婆诃。',
      '回向偈：',
      '愿以此功德，庄严佛净土；\n上报四重恩，下济三途苦；\n若有见闻者，悉发菩提心；\n尽此一报身，同生极乐国。',
      '愿消三障诸烦恼，愿得智慧真明了，\n普愿罪障悉消除，世世常行菩萨道。',
      '愿以此功德，回向弟子眷属合家吉祥安康;\n人疾病早日康复;人事业有成;\n回向弟子历代先祖、冤亲债主，离苦得乐。',
      '最后礼观音菩萨三拜'
    ],
    audioSrc: '/audio/jingshu/dabeizhou.mp3',
    duration: '08:15'
  }
}

const ChantingSection = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSutra, setCurrentSutra] = useState('heart')
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('00:00')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const progressInterval = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // 创建音频元素
    audioRef.current = new Audio(sutras[currentSutra as keyof typeof sutras].audioSrc)
    
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
      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }
  }, [currentSutra])

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

  const handleSutraChange = (sutra: string) => {
    if (isPlaying && audioRef.current) {
      audioRef.current.pause()
    }
    setCurrentSutra(sutra)
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime('00:00')
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

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-bg-cream/95 via-light-gold/30 to-bg-cream/95 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-primary-gold/10">
      <h2 className="text-3xl font-kai font-bold text-burgundy mb-8">
        诵经念佛
      </h2>

      {/* 筛选按钮 */}
      <div className="flex justify-center gap-4 mb-8">
        <button 
          onClick={() => handleSutraChange('heart')}
          className={`px-6 py-2 rounded-full transition-colors ${
            currentSutra === 'heart' 
              ? 'bg-primary-gold text-white' 
              : 'bg-white/60 text-dark-brown hover:bg-white/80'
          }`}
        >
          心经
        </button>
        <button 
          onClick={() => handleSutraChange('avalokitesvara')}
          className={`px-6 py-2 rounded-full transition-colors ${
            currentSutra === 'avalokitesvara' 
              ? 'bg-primary-gold text-white' 
              : 'bg-white/60 text-dark-brown hover:bg-white/80'
          }`}
        >
          普门品
        </button>
        <button 
          onClick={() => handleSutraChange('greatCompassion')}
          className={`px-6 py-2 rounded-full transition-colors ${
            currentSutra === 'greatCompassion' 
              ? 'bg-primary-gold text-white' 
              : 'bg-white/60 text-dark-brown hover:bg-white/80'
          }`}
        >
          大悲咒
        </button>
      </div>

      <div className="bg-white/60 p-6 rounded-lg border border-primary-gold/20 hover:bg-white/80 transition-all duration-300">
        {/* 经文标题和描述 */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-song font-bold text-dark-brown mb-2">
            {sutras[currentSutra as keyof typeof sutras].title}
          </h3>
          <p className="text-gray-600 text-sm">
            {sutras[currentSutra as keyof typeof sutras].description}
          </p>
        </div>

        {/* 经文内容 - 添加固定高度和滚动 */}
        <div className="h-[400px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary-gold/20 scrollbar-track-transparent hover:scrollbar-thumb-primary-gold/40">
          <div className="space-y-6 text-lg font-song leading-loose text-dark-brown">
            {sutras[currentSutra as keyof typeof sutras].content.map((paragraph, index) => (
              <p key={index} className="indent-8 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* 音频控件 */}
        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-4">
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
              {currentTime} / {sutras[currentSutra as keyof typeof sutras].duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChantingSection 