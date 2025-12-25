// next-sitemap.config.mjs
const isProd = process.env.VERCEL_ENV === 'production';

export default {
  siteUrl: 'https://www.hjsconstruction.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: [
    '/admin*',
    '/api*',
    '/draft*',
  ],
  // 동적 프로젝트 페이지들 추가
  additionalPaths: async (config) => {
    const projectIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    
    return projectIds.map((id) => ({
      loc: `/projects/${id}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};

