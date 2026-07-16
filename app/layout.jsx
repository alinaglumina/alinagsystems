import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { site } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: ['software development', 'IT services', 'custom software', 'cloud', 'DevOps', 'AI', 'web development', 'Alinag Systems'],
  authors: [{ name: site.name }],
  openGraph: {
    type: 'website', siteName: site.name, title: `${site.name} — ${site.tagline}`,
    description: site.description, url: site.url, locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.tagline },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F8FB' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0C12' },
  ],
};

export default function RootLayout({ children }) {
  const orgLd = {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: site.name, url: site.url, slogan: site.tagline, description: site.description,
    sameAs: [site.social.linkedin, site.social.github, site.social.twitter],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
        <ThemeProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-cobalt focus:px-4 focus:py-2 focus:text-white">
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
