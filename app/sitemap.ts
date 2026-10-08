import type { MetadataRoute } from 'next';
import summitContent from '@/content/summits.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';
  return [
    '/',
    '/summits',
    ...summitContent.summits.map((summit) => summit.url),
  ].map((path) => ({
    url: new URL(path, baseUrl).href,
  }));
}
