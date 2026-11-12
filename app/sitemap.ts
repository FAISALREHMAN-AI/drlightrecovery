import { MetadataRoute } from 'next';
import { DUBAI_LOCATIONS } from './services/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.drlightrecovery.com';
  const currentDate = new Date();

  // Core Landing Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/car-recovery-dubai/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/emergency-car-recovery-dubai/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/car-towing-dubai/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/breakdown-recovery-dubai/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/luxury-sports-car-towing-dubai/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/motorbike-recovery-dubai/`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic Dubai location landing pages
  const locationPages: MetadataRoute.Sitemap = Object.keys(DUBAI_LOCATIONS).map((slug) => ({
    url: `${baseUrl}/services/${slug}/`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...locationPages];
}
