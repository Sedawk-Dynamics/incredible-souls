import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Incredible Souls | Nature Wellness Foundation',
  description: 'A sacred sanctuary for inner healing, spiritual growth and soul remembrance. Guided by ancient wisdom and compassionate healing — in Pune, India.',
  keywords: 'spiritual healing, wellness, past life regression, chakra healing, reiki, soul awakening, Pune, India',
  openGraph: {
    title: 'Incredible Souls | Nature Wellness Foundation',
    description: 'The light that you seek lives within you. A sanctuary for healing, spiritual growth and soul transformation.',
    type: 'website',
  },
  themeColor: '#E9DFF0',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E9DFF0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  )
}
