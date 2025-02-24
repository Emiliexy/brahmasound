import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-burgundy/90 shadow-md sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* 品牌标识 */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/icon/logo.png"
                  alt="Brahmasound Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-kai font-bold text-scroll-gold/90">
                  Brahmasound 梵海清音
                </span>
                <span className="text-base text-light-gold/80">在线礼佛平台</span>
              </div>
            </Link>
          </div>

          {/* 导航菜单 */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="nav-link text-light-gold hover:text-primary-gold">
              首页
            </Link>
            <Link href="#worship" className="nav-link text-light-gold hover:text-primary-gold">
              礼拜观音
            </Link>
            <Link href="#chanting" className="nav-link text-light-gold hover:text-primary-gold">
              诵经念佛
            </Link>
            <Link href="#practice" className="nav-link text-light-gold hover:text-primary-gold">
              佛法修行
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 