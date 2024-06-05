import type { Metadata } from 'next'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: {
    template: '%s | DKRM Studio',
    default: 'DKRM Studio',
  },
  description: 'Light shines brighter in the dark.',
}
