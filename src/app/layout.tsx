import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/layout/navigation';
import Footer from '@/components/layout/footer';
import { siteConfig } from '@/data';
import { generateMetaTags } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...generateMetaTags(
    siteConfig.title,
    siteConfig.description,
    `${siteConfig.url}/images/og-image.jpg`
  ),
  authors: [{ name: siteConfig.author }],
  keywords: [
    'Computer Science',
    'Software Engineer',
    'Full-Stack Developer',
    'Machine Learning',
    'AI',
    'React',
    'TypeScript',
    'Next.js',
    'Portfolio'
  ],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
