import './globals.css'
import { Inter } from 'next/font/google'
import Loader from './loader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '1usOS',
  description: '1usOS Web Desktop.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader />
        {children}
      </body>
    </html>
  )
}