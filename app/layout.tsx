import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Donat 77 - Donat Lezat dengan Harga Mahasiswa",
  description:
    "Donat 77 menyediakan donat lezat dengan harga terjangkau untuk mahasiswa dan semua kalangan. Pengganjal perut saat lapar dengan harga bersahabat.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
