import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      
    },
    sitemap: 'https://thurein-portfolio-nplg.vercel.app/sitemap.xml',
  };
}