import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { CustomCursor } from '@/components/custom-cursor'

export const metadata: Metadata = {
  title: 'Dev: Lauvigne | Full Stack Developer & Entrepreneur',
  description: 'Transforming ideas into digital experiences through code, creativity, and innovation. From full-stack development to no-code solutions, I bridge the gap between imagination and reality.',
  keywords: [
    'Lauvigne Lumeda',
    'Full Stack Developer',
    'Entrepreneur',
    'Next.js',
    'React',
    'TypeScript',
    'Web Development',
    'Portfolio',
    'Software Engineer',
    'Frontend',
    'Backend',
    'No-Code',
    'Low-Code'
  ],
  authors: [{ name: 'Lauvigne Lumeda', url: 'https://github.com/lauvigne' }],
  creator: 'Lauvigne Lumeda',
  publisher: 'Lauvigne Lumeda',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  applicationName: 'Dev: Lauvigne',
  
  // Open Graph tags
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lauvigne.dev', // Update this with your actual domain
    siteName: 'Dev: Lauvigne',
    title: 'Dev: Lauvigne | Full Stack Developer & Entrepreneur',
    description: 'Transforming ideas into digital experiences through code, creativity, and innovation. From full-stack development to no-code solutions.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Lauvigne Lumeda - Full Stack Developer',
      },
    ],
  },
  
  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    title: 'Dev: Lauvigne | Full Stack Developer & Entrepreneur',
    description: 'Transforming ideas into digital experiences through code, creativity, and innovation.',
    creator: '@Yuyuhie1', 
    images: ['/opengraph-image'],
  },
  
  // Icons and favicon
  icons: {
    icon: '/favicon.ico',
    apple: '/logo/lauv-logo2.svg',
    shortcut: '/favicon.ico',
  },
  
  // Additional meta tags
  category: 'technology',
  classification: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo/lauv-logo2.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo/lauv-logo2.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00BBFF" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="font-inconsolata">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}