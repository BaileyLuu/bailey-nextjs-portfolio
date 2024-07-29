export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: 'https://bailey-nextjs-portfolio.vercel.app/sitemap.xml',
    host: 'https://bailey-nextjs-portfolio.vercel.app',
  };
}
