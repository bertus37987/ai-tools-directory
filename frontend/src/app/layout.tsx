import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Tools Directory | The Complete Guide to AI Tools',
  description: 'Discover, compare and find the best AI tools for your needs. Comprehensive directory with reviews, pricing, and features.',
  keywords: ['AI tools', 'artificial intelligence', 'AI directory', 'machine learning tools', 'AI software'],
  authors: [{ name: 'AI Tools Directory' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'AI Tools Directory | The Complete Guide to AI Tools',
    description: 'Discover, compare and find the best AI tools for your needs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools Directory',
    description: 'The complete guide to AI tools and software',
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