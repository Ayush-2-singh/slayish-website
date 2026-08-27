import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Slayish — Handcrafted Gifts & Accessories',
  description: 'Handcrafted gifts, resin art, bouquets, gift hampers & love letters. Pan India shipping. DM to order.',
  keywords: ['handcrafted gifts', 'resin art', 'bouquet', 'gift hampers', 'love letters', 'greeting cards', 'pan india'],
  openGraph: {
    title: 'Slayish — Handcrafted Gifts & Accessories',
    description: 'Handcrafted gifts, resin art, bouquets, gift hampers & love letters. Pan India shipping.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  )
}
