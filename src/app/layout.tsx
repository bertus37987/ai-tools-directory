import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AiwithBert | Curated AI Products, Tools & Strategy',
  description: 'Discover and compare the best AI tools for your business. Professional curation of AI products with detailed reviews, pricing, and expert insights.',
  keywords: ['AI tools', 'artificial intelligence', 'AI directory', 'machine learning tools', 'AI software', 'business AI', 'productivity'],
  authors: [{ name: 'AiwithBert' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AiwithBert | Curated AI Products, Tools & Strategy',
    description: 'Discover and compare the best AI tools for your business. Professional curation with expert insights.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AiwithBert'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AiwithBert',
    description: 'Curated AI Products, Tools & Strategy',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-white text-black antialiased`}>
        {children}
      </body>
    </html>
  )
}