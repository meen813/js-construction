// next-sitemap.config.mjs
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const isProd = process.env.VERCEL_ENV === 'production';

// Read project ids straight from the source of truth. data.ts cannot be imported
// here because it uses static image imports that only resolve through webpack.
const getProjectIds = () => {
  const source = readFileSync(
    join(dirname(fileURLToPath(import.meta.url)), 'src/projects/data.ts'),
    'utf8'
  );
  const ids = [...source.matchAll(/^\s{4}id:\s*(\d+),$/gm)].map((m) => Number(m[1]));

  if (ids.length === 0) {
    throw new Error('next-sitemap: no project ids found in src/projects/data.ts');
  }

  return ids.sort((a, b) => a - b);
};

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
    return getProjectIds().map((id) => ({
      loc: `/projects/${id}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};

