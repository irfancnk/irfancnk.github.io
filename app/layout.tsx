import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://irfancnk.com'),
  title: 'Irfan Can Kaleli - Senior Full-Stack Engineer',
  description: 'Personal portfolio of Irfan Can Kaleli, a senior full-stack engineer with 7+ years experience in Node.js, React, and scalable web applications.',
  keywords: ['Full-Stack Engineer', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'AWS', 'Docker'],
  authors: [{ name: 'Irfan Can Kaleli' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  openGraph: {
    title: 'Irfan Can Kaleli - Senior Full-Stack Engineer',
    description: 'Personal portfolio showcasing expertise in modern web technologies and scalable applications.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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