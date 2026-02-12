import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Estilo & Arte | Peluquería Premium en Madrid',
  description: 'Descubre Estilo & Arte, tu peluquería de confianza. Cortes modernos, coloración profesional y estilismo para eventos. Reserva tu cita por WhatsApp.',
  keywords: ['peluquería Madrid', 'corte de pelo', 'coloración profesional', 'estilismo', 'peluquería premium', 'tratamientos capilares'],
  authors: [{ name: 'Estilo & Arte' }],
  creator: 'Estilo & Arte',
  publisher: 'Estilo & Arte',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://estiloarte.com',
    siteName: 'Estilo & Arte - Peluquería Premium',
    title: 'Estilo & Arte | Tu Peluquería Premium en Madrid',
    description: 'Transformamos tu estilo con cortes modernos, coloración profesional y tratamientos de primera calidad. Reserva ahora por WhatsApp.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Estilo & Arte Peluquería',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Estilo & Arte | Peluquería Premium',
    description: 'Tu peluquería de confianza para cortes, coloración y estilismo profesional',
    images: ['/og-image.jpg'],
  },
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
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
