export const siteConfig = {
  siteName: 'PetVerdict',
  tagline: 'Tested. Scored. Tail-approved.',
  domain: process.env.SITE_URL || 'https://petverdict.net',
  description: 'In-depth testing and reviews of the best dog food, cat food, pet insurance, pet tech, and grooming tools in 2026. Real scores, honest verdicts, clear winners.',
  niche: 'pet-care',
  category: 'Pet Care',
  defaultAuthor: {
    name: 'PetVerdict Editorial Team',
    bio: 'We test, compare, and review pet products so you don\'t have to.',
  },
  analytics: {
    enabled: true,
    type: 'plausible',
    plausibleDomain: process.env.PLAUSIBLE_DOMAIN || 'petverdict.net',
    googleId: process.env.GOOGLE_ANALYTICS_ID || '',
  },
  affiliateNetworks: {
    amazon: { enabled: true, baseUrl: 'https://amazon.com', trackingId: 'toolsradar05-20' },
    chewy: { enabled: true, baseUrl: 'https://chewy.com', trackingId: process.env.CHEWY_AFFILIATE_ID || '' },
    petco: { enabled: true, baseUrl: 'https://petco.com', trackingId: process.env.PETCO_AFFILIATE_ID || '' },
    custom: { enabled: true, baseUrl: process.env.CUSTOM_AFFILIATE_BASE || 'https://petverdict.net/go/' },
  },
  social: { twitter: 'https://twitter.com/petverdictnet', linkedin: '', instagram: '', facebook: '' },
  content: { postsPerPage: 12, featuredPostsCount: 3, relatedPostsCount: 3 },
  seo: { includeJsonLd: true, sitemap: true, robotsTxt: true },
};
export default siteConfig;
