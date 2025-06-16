import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AutoDealer Pro - AI Car Sales CRM',
  description: 'AI-Powered Car Sales Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
