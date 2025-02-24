import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primary-gold': '#B8860B',
        'deep-gold': '#A67C00',
        'light-gold': '#FFF8DC',
        'dark-brown': '#5D3A1A',
        'burgundy': '#800020',
        'bg-cream': '#FAF9F6',
        'text-gray': '#333333',
        'scroll-gold': '#D4AF37',
      },
      fontFamily: {
        'song': ['SimSun', 'STSong', 'serif'],
        'kai': ['KaiTi', 'STKaiti', 'serif'],
        'sans': ['Microsoft YaHei', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
