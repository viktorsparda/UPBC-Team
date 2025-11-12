import { resolvePublicPath } from '@utils/constants.js';

const contentModules = import.meta.glob('../content/news/*.json', {
  eager: true,
  import: 'default'
});

const RAW_NEWS = Object.values(contentModules)
  .map((entry) => entry)
  .sort((a, b) => {
    const dateA = a.publishDate ? new Date(a.publishDate) : 0;
    const dateB = b.publishDate ? new Date(b.publishDate) : 0;
    return dateB - dateA;
  });

const prefixAssetPaths = (value) => {
  if (typeof value === 'string') {
    if (value.startsWith('/assets/')) {
      return resolvePublicPath(value.slice(1));
    }
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(prefixAssetPaths);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, prefixAssetPaths(nestedValue)])
    );
  }

  return value;
};

export const NEWS = RAW_NEWS.map((entry) => prefixAssetPaths(entry));

export const NEWS_BY_SLUG = NEWS.reduce((acc, news) => {
  acc[news.slug] = news;
  return acc;
}, {});
