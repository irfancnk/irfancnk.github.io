import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { StructuredData } from '@/components/structured-data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.irfanck.com'),
  title: {
    default: 'Irfan Can Kaleli - Backend Developer | Node.js & React Expert',
    template: '%s | Irfan Can Kaleli'
  },
  description: 'Backend developer who can handle frontend when needed, with 7+ years experience building reliable, scalable applications using JavaScript technologies. Specializing in Node.js, React, AWS, and microservices architecture.',
  keywords: [
    'Backend Developer',
    'Full-Stack Engineer', 
    'Node.js Developer',
    'React Developer',
    'JavaScript Developer',
    'TypeScript',
    'AWS',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
    'MongoDB',
    'Elasticsearch',
    'Microservices',
    'Remote Developer',
    'E-commerce Developer',
    'Ankara Turkey',
    'Software Engineer'
  ],
  authors: [{ name: 'Irfan Can Kaleli', url: 'https://www.irfanck.com' }],
  creator: 'Irfan Can Kaleli',
  publisher: 'Irfan Can Kaleli',
  viewport: 'width=device-width, initial-scale=1',
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
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' }
  ],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.irfanck.com',
    title: 'Irfan Can Kaleli - Backend Developer | Node.js & React Expert',
    description: 'Backend developer with 7+ years experience building scalable applications. Specializing in Node.js, React, AWS, and microservices architecture.',
    siteName: 'Irfan Can Kaleli Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Irfan Can Kaleli - Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irfan Can Kaleli - Backend Developer | Node.js & React Expert',
    description: 'Backend developer with 7+ years experience building scalable applications.',
    images: ['/og-image.jpg'],
    creator: '@irfancnk',
  },
  alternates: {
    canonical: 'https://www.irfanck.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="canonical" href="https://www.irfanck.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}