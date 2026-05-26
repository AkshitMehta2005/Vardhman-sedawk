import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'BVW | Vardhman Composites India — Save Green, Live Green',
  description:
    'Vardhman Composites India manufactures premium WPC profiles, UPVC pipes & fittings under the BVW brand. Trusted by architects, builders, and contractors across India.',
  keywords:
    'WPC door, WPC flooring, WPC cladding, UPVC pipes, composite profiles, BVW, Vardhman Composites',
  openGraph: {
    title: 'BVW | Vardhman Composites India',
    description:
      'Premium WPC & UPVC solutions — Save Green, Live Green',
    siteName: 'BVW India',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased bg-background">
        {children}
      </body>
    </html>
  )
}