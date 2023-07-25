import './globals.css'
import "primereact/resources/primereact.min.css"; 
import "primereact/resources/themes/lara-light-indigo/theme.css";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Contacto | Solutions Cargo',
  description: 'Solutions Cargo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.png" type="image/x-icon" />

      <link rel="apple-touch-icon" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/favicon.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/favicon.png" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
