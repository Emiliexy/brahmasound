/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://brahmasound.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://brahmasound.com/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404'],
      },
    ],
  },
  additionalPaths: async (config) => [
    { loc: '/library', changefreq: 'daily', priority: 0.8 },
    { loc: '/library/heart-sutra', changefreq: 'weekly', priority: 0.7 },
    { loc: '/library/diamond-sutra', changefreq: 'weekly', priority: 0.7 },
    { loc: '/library/medicine-sutra', changefreq: 'weekly', priority: 0.7 },
    { loc: '/library/amitabha-sutra', changefreq: 'weekly', priority: 0.7 },
    { loc: '/library/avalokitesvara-sutra', changefreq: 'weekly', priority: 0.7 },
    { loc: '/practice', changefreq: 'daily', priority: 0.8 },
    { loc: '/worship', changefreq: 'daily', priority: 0.9 },
    { loc: '/chanting', changefreq: 'daily', priority: 0.8 },
  ],
} 