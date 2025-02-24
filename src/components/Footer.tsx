const Footer = () => {
  return (
    <footer className="bg-text-gray py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-white text-sm">
          © 2024-{new Date().getFullYear()} Brahmasound 梵海清音
        </p>
        <p className="text-white/80 text-xs mt-2">
          本平台仅供修行参考，佛法无边，诚心为要
        </p>
      </div>
    </footer>
  )
}

export default Footer 