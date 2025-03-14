import { Locale } from './config'

export const translations: Record<Locale, Record<string, string>> = {
  'zh-CN': {
    // 导航
    'nav.home': '首页',
    'nav.worship': '礼拜观音',
    'nav.chanting': '诵经念佛',
    'nav.practice': '佛法修行',
    'nav.platform': '在线礼佛平台',

    // 藏经阁
    'library.title': '藏经阁',
    'library.subtitle': '在此您可以阅读和聆听佛教经典，感受佛法的智慧与慈悲',
    'library.search.placeholder': '搜索经文、关键词...',
    'library.recommended': '推荐经典',
    'library.recent': '最近阅读',
    'library.no-records': '暂无阅读记录',
    'library.suggestions': '热门搜索',

    // 心愿展示台
    'wishes.title': '心愿展示台',
    'wishes.empty': '暂无心愿',
    'wishes.user-prefix': '莲友',
    'wishes.submit': '提交心愿',
    'wishes.placeholder': '写下您的心愿...',

    // 佛历
    'calendar.title': '佛历',
    'calendar.lunar': '农历',
    'calendar.year': '年',
    'calendar.month': '月',
    'calendar.day': '日',
    'calendar.festival-reminder': '节日提醒',
    'calendar.guanyin-birthday': '观音菩萨圣诞',
    'calendar.days-away': '将在 {days} 天后到来',

    // 每日智慧
    'daily-wisdom.title': '今日佛学小语',
    'wisdom.share': '分享',
    'wisdom.copied': '已复制到剪贴板',
    'wisdom.source': '出自',
    'wisdom.category': '分类',

    // 页脚
    'footer.copyright': '版权所有',
    'footer.disclaimer': '本平台仅供修行参考，佛法无边，诚心为要',

    // 经书相关
    'sutra.heart': '般若波罗蜜多心经',
    'sutra.heart.description': '佛教最简短而精华的经典，阐述"色即是空，空即是色"的般若智慧',
    'sutra.heart.short': '心经',
    'sutra.heart.full': '般若波罗蜜多心经',
    'sutra.diamond': '金刚般若波罗蜜经',
    'sutra.diamond.description': '阐述"应无所住而生其心"的般若系重要经典',
    'sutra.amitabha': '阿弥陀经',
    'sutra.amitabha.description': '净土宗的根本经典，介绍西方极乐世界和念佛往生的法门',
    'sutra.avalokitesvara.short': '观音经',
    'sutra.avalokitesvara.full': '妙法莲华经 · 观世音菩萨普门品',
    'sutra.avalokitesvara.description': '阐述大慈大悲观世音菩萨的救苦救难本愿力',
    'sutra.great-compassion.short': '大悲咒',
    'sutra.great-compassion.full': '千手千眼观世音菩萨广大圆满无碍大悲心陀罗尼',
    'sutra.great-compassion.description': '千手千眼观世音菩萨的心咒，具有不可思议的加持力',
    'sutra.medicine': '药师琉璃光如来本愿功德经',
    'sutra.medicine.description': '阐述药师佛十二大愿，消除疾病与灾难的殊胜经典',
    'sutra.compassion': '大悲心陀罗尼经',
    'sutra.category.wisdom': '智慧开悟',
    'sutra.category.blessing': '祈福',
    'sutra.category.purification': '消业',
    'sutra.play': '播放',
    'sutra.pause': '暂停',
    'sutra.font-size': '字体大小',
    'sutra.explanation': '经文释义',
    'sutra.show-explanation': '显示释义',
    'sutra.hide-explanation': '隐藏释义',
    'sutra.duration': '时长',
    'chanting.title': '诵经念佛',

    // 通用
    'common.loading': '加载中...',
    'common.error': '出错了',
    'common.retry': '重试',
    'common.back': '返回',
    'common.more': '更多',
    'common.read-more': '阅读全文',
    'common.search': '搜索',
    'common.close': '关闭',

    // 分类筛选
    'filter.purpose': '修行目的',
    'filter.purpose.wisdom': '开启智慧',
    'filter.purpose.blessing': '积累功德',
    'filter.purpose.purification': '消除业障',
    'filter.purpose.meditation': '禅修入定',

    'filter.deity': '本尊法门',
    'filter.deity.guanyin': '观世音菩萨',
    'filter.deity.amitabha': '阿弥陀佛',
    'filter.deity.shakyamuni': '释迦牟尼佛',
    'filter.deity.medicine': '药师佛',

    'filter.school': '宗派传承',
    'filter.school.chan': '禅宗',
    'filter.school.pure-land': '净土宗',
    'filter.school.tantra': '密宗',
    'filter.school.huayan': '华严宗',

    // 修行文章
    'practice.title': '佛法修行',
    'practice.articles.kaiku.title': '观音开库2025与观音借库2025：如何在新的一年向观音菩萨祈愿财富与顺利',
    'practice.articles.kaiku.excerpt': '观音菩萨不仅是慈悲和智慧的象征，也被许多信徒认为是能带来好运和保佑的守护神。每到新的一年，信徒们常常会进行祈愿，希望能够借助观音菩萨的庇佑，获得财富和事业上的顺利...',
    'practice.articles.offerings.title': '观音诞祭品都有什么以及正确的摆放方式',
    'practice.articles.offerings.excerpt': '观音诞是佛教中重要的节日之一，纪念观世音菩萨的诞生，广受世界各地佛教信徒的崇敬。在这一天，信徒们会准备各种祭品进行祭拜，以表达对观音菩萨的虔诚与敬意...',
    'practice.articles.prayer.title': '向观音菩萨祈求庇佑的请愿文、还愿文与回向偈怎么讲？',
    'practice.articles.prayer.excerpt': '在佛教信仰中，观音菩萨被视为"大悲菩萨"，她广受信徒的尊敬与崇拜，象征着无私的慈悲与救赎。无论是生活中的困境、健康的忧虑，还是心灵的痛苦，信徒们都会向观音菩萨虔诚祈愿...',
    'practice.articles.blessings.title': '如何求观世音菩萨庇佑？完整祈愿指南',
    'practice.articles.blessings.excerpt': '观世音菩萨，以"大悲菩萨"之名，广受世界各地佛教信徒的尊敬与崇拜。她是佛教中最具慈悲心的菩萨之一，象征着无私的救赎与无限的关怀...',
    'practice.articles.festival.title': '观音诞如何拜拜？详细指南与习俗解读',
    'practice.articles.festival.excerpt': '观音诞是指纪念观世音菩萨的诞生、成道及涅槃的节日。在中国，尤其是在一些佛教文化盛行的地方，观音诞被视为一个重要的宗教节日...',
    'practice.articles.intro.title': '观世音菩萨是谁？普陀山与菩萨的慈悲',
    'practice.articles.intro.excerpt': '在佛教文化中，观音菩萨是大慈大悲的象征，她普渡众生、化解苦难，是许多信徒心中的庇护神。她被广泛崇敬，尤其在中国...',

    // 礼拜组件
    'worship.title': '礼拜观音',
    'worship.image-alt': '观世音菩萨圣像',
    'worship.wish-placeholder': '南无大慈大悲观世音菩萨，弟子在此虔诚祈愿...',
    'worship.wish-button': '祈愿行拜礼',
    'worship.direct-button': '直接行拜礼',
    'worship.mantra': '请默念：南无大慈大悲观世音菩萨',
    'worship.press-instruction': '请长按5秒完成礼佛',
    'worship.complete': '祈愿完成，愿菩萨保佑🙏！',
    'worship.error.sensitive-words': '请文明祈愿，不要包含不当词汇',
    'worship.error.empty-wish': '请先填写祈愿',
    'worship.error.sensitive-content': '祈愿内容包含不当词汇，请修改后重试',

    // 经文分类
    'category.wisdom': '智慧',
    'category.blessing': '功德',
    'category.purification': '消业',
    'category.meditation': '禅修',
  },
  'zh-TW': {
    // 導航
    'nav.home': '首頁',
    'nav.worship': '禮拜觀音',
    'nav.chanting': '誦經念佛',
    'nav.practice': '佛法修行',
    'nav.platform': '線上禮佛平台',

    // 藏經閣
    'library.title': '藏經閣',
    'library.subtitle': '在此您可以閱讀和聆聽佛教經典，感受佛法的智慧與慈悲',
    'library.search.placeholder': '搜索經文、關鍵詞...',
    'library.recommended': '推薦經典',
    'library.recent': '最近閱讀',
    'library.no-records': '暫無閱讀記錄',
    'library.suggestions': '熱門搜索',

    // 心願展示台
    'wishes.title': '心願展示台',
    'wishes.empty': '暫無心願',
    'wishes.user-prefix': '蓮友',
    'wishes.submit': '提交心願',
    'wishes.placeholder': '寫下您的心願...',

    // 佛曆
    'calendar.title': '佛曆',
    'calendar.lunar': '農曆',
    'calendar.year': '年',
    'calendar.month': '月',
    'calendar.day': '日',
    'calendar.festival-reminder': '節日提醒',
    'calendar.guanyin-birthday': '觀音菩薩聖誕',
    'calendar.days-away': '將在 {days} 天後到來',

    // 每日智慧
    'daily-wisdom.title': '今日佛學小語',
    'wisdom.share': '分享',
    'wisdom.copied': '已複製到剪貼板',
    'wisdom.source': '出自',
    'wisdom.category': '分類',

    // 頁腳
    'footer.copyright': '版權所有',
    'footer.disclaimer': '本平台僅供修行參考，佛法無邊，誠心為要',

    // 經書相關
    'sutra.heart': '般若波羅蜜多心經',
    'sutra.heart.description': '佛教最簡短而精華的經典，闡述"色即是空，空即是色"的般若智慧',
    'sutra.heart.short': '心經',
    'sutra.heart.full': '般若波羅蜜多心經',
    'sutra.diamond': '金剛般若波羅蜜經',
    'sutra.diamond.description': '闡述"應無所住而生其心"的般若系重要經典',
    'sutra.amitabha': '阿彌陀經',
    'sutra.amitabha.description': '淨土宗的根本經典，介紹西方極樂世界和念佛往生的法門',
    'sutra.avalokitesvara.short': '觀音經',
    'sutra.avalokitesvara.full': '妙法蓮華經 · 觀世音菩薩普門品',
    'sutra.avalokitesvara.description': '闡述大慈大悲觀世音菩薩的救苦救難本願力',
    'sutra.great-compassion.short': '大悲咒',
    'sutra.great-compassion.full': '千手千眼觀世音菩薩廣大圓滿無礙大悲心陀羅尼',
    'sutra.great-compassion.description': '千手千眼觀世音菩薩的心咒，具有不可思議的加持力',
    'sutra.medicine': '藥師琉璃光如來本願功德經',
    'sutra.medicine.description': '闡述藥師佛十二大願，消除疾病與災難的殊勝經典',
    'sutra.compassion': '大悲心陀羅尼經',
    'sutra.category.wisdom': '智慧開悟',
    'sutra.category.blessing': '祈福',
    'sutra.category.purification': '消業',
    'sutra.play': '播放',
    'sutra.pause': '暫停',
    'sutra.font-size': '字體大小',
    'sutra.explanation': '經文釋義',
    'sutra.show-explanation': '顯示釋義',
    'sutra.hide-explanation': '隱藏釋義',
    'sutra.duration': '時長',
    'chanting.title': '誦經念佛',

    // 通用
    'common.loading': '加載中...',
    'common.error': '出錯了',
    'common.retry': '重試',
    'common.back': '返回',
    'common.more': '更多',
    'common.read-more': '閱讀全文',
    'common.search': '搜索',
    'common.close': '關閉',

    // 分類篩選
    'filter.purpose': '修行目的',
    'filter.purpose.wisdom': '開啟智慧',
    'filter.purpose.blessing': '積累功德',
    'filter.purpose.purification': '消除業障',
    'filter.purpose.meditation': '禪修入定',

    'filter.deity': '本尊法門',
    'filter.deity.guanyin': '觀世音菩薩',
    'filter.deity.amitabha': '阿彌陀佛',
    'filter.deity.shakyamuni': '釋迦牟尼佛',
    'filter.deity.medicine': '藥師佛',

    'filter.school': '宗派傳承',
    'filter.school.chan': '禪宗',
    'filter.school.pure-land': '淨土宗',
    'filter.school.tantra': '密宗',
    'filter.school.huayan': '華嚴宗',

    // 修行文章
    'practice.title': '佛法修行',
    'practice.articles.kaiku.title': '觀音開庫2025與觀音借庫2025：如何在新的一年向觀音菩薩祈願財富與順利',
    'practice.articles.kaiku.excerpt': '觀音菩薩不僅是慈悲和智慧的象徵，也被許多信徒認為是能帶來好運和保佑的守護神。每到新的一年，信徒們常常會進行祈願，希望能夠藉助觀音菩薩的庇佑，獲得財富和事業上的順利...',
    'practice.articles.offerings.title': '觀音誕祭品都有什麼以及正確的擺放方式',
    'practice.articles.offerings.excerpt': '觀音誕是佛教中重要的節日之一，紀念觀世音菩薩的誕生，廣受世界各地佛教信徒的崇敬。在這一天，信徒們會準備各種祭品進行祭拜，以表達對觀音菩薩的虔誠與敬意...',
    'practice.articles.prayer.title': '向觀音菩薩祈求庇佑的請願文、還願文與回向偈怎麼講？',
    'practice.articles.prayer.excerpt': '在佛教信仰中，觀音菩薩被視為"大悲菩薩"，她廣受信徒的尊敬與崇拜，象徵著無私的慈悲與救贖。無論是生活中的困境、健康的憂慮，還是心靈的痛苦，信徒們都會向觀音菩薩虔誠祈願...',
    'practice.articles.blessings.title': '如何求觀世音菩薩庇佑？完整祈願指南',
    'practice.articles.blessings.excerpt': '觀世音菩薩，以"大悲菩薩"之名，廣受世界各地佛教信徒的尊敬與崇拜。她是佛教中最具慈悲心的菩薩之一，象徵著無私的救贖與無限的關懷...',
    'practice.articles.festival.title': '觀音誕如何拜拜？詳細指南與習俗解讀',
    'practice.articles.festival.excerpt': '觀音誕是指紀念觀世音菩薩的誕生、成道及涅槃的節日。在中國，尤其是在一些佛教文化盛行的地方，觀音誕被視為一個重要的宗教節日...',
    'practice.articles.intro.title': '觀世音菩薩是誰？普陀山與菩薩的慈悲',
    'practice.articles.intro.excerpt': '在佛教文化中，觀音菩薩是大慈大悲的象徵，她普渡眾生、化解苦難，是許多信徒心中的庇護神。她被廣泛崇敬，尤其在中國...',

    // 礼拜组件
    'worship.title': '禮拜觀音',
    'worship.image-alt': '觀世音菩薩聖像',
    'worship.wish-placeholder': '南無大慈大悲觀世音菩薩，弟子在此虔誠祈願...',
    'worship.wish-button': '祈願行拜禮',
    'worship.direct-button': '直接行拜禮',
    'worship.mantra': '請默念：南無大慈大悲觀世音菩薩',
    'worship.press-instruction': '請長按5秒完成禮佛',
    'worship.complete': '祈願完成，願菩薩保佑🙏！',
    'worship.error.sensitive-words': '請文明祈願，不要包含不當詞彙',
    'worship.error.empty-wish': '請先填寫祈願',
    'worship.error.sensitive-content': '祈願內容包含不當詞彙，請修改後重試',

    // 經文分類
    'category.wisdom': '智慧',
    'category.blessing': '功德',
    'category.purification': '消業',
    'category.meditation': '禪修',
  }
} 