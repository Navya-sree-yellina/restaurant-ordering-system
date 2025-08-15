import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Savory - Modern American Kitchen & Bar',
  description: 'Fresh, locally-sourced American cuisine with a modern twist. Order online for delivery, takeaway, or dine-in at our contemporary restaurant.',
  keywords: 'American restaurant, modern cuisine, online ordering, food delivery, local ingredients, farm to table',
  openGraph: {
    title: 'Savory - Modern American Kitchen & Bar',
    description: 'Fresh, locally-sourced American cuisine with a modern twist',
    type: 'website',
    locale: 'en_US',
    siteName: 'Savory Restaurant',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}