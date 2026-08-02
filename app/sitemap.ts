import { MetadataRoute } from 'next';
import { DUBAI_LOCATIONS } from './services/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drlight-recovery.vercel.app';
  const currentDate = new Date();

  // Primary pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Dynamic Dubai location landing pages
  const locationPages: MetadataRoute.Sitemap = Object.keys(DUBAI_LOCATIONS).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...locationPages];
}