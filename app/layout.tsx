import type { Metadata } from "next"
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zillionsystems - AI Cold Email System for Staffing Firms",
  description: "Get 3-5 job orders a month using AI based cold emails",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload Wistia script for better performance */}
        <link rel="preconnect" href="https://fast.wistia.net" />
        <link rel="preconnect" href="https://fast.wistia.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="main-background">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
        {/* Load Wistia script at document level */}
        <Script src="https://fast.wistia.net/assets/external/E-v1.js" strategy="afterInteractive" />
      </body>
    </html>
  )
}
