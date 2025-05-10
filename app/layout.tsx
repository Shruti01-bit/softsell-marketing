import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftSell India - Software License Resale Platform",
  description:
    "Unlock the value of your unused software licenses with SoftSell India. The trusted marketplace for software license resale in India.",
  keywords: "software resale india, license resale india, sell software licenses india, software marketplace india, IT asset recovery india",
  authors: [{ name: "SoftSell India" }],
  icons: {
    icon: [
      { url: '/placeholder-logo.svg', type: 'image/svg+xml' },
      { url: '/placeholder-logo.png', type: 'image/png' },
    ],
    shortcut: '/placeholder-logo.svg',
    apple: '/placeholder-logo.png',
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://softsell.co.in",
    title: "SoftSell India - Software License Resale Platform",
    description: "Unlock the value of your unused software licenses with SoftSell India",
    siteName: "SoftSell India",
    images: [
      {
        url: '/placeholder-logo.png',
        width: 800,
        height: 600,
        alt: 'SoftSell India Logo',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* This script ensures favicon is applied immediately */}
        <Script id="favicon-script" strategy="beforeInteractive">
          {`
            // Dynamic favicon injection
            const link = document.createElement('link');
            link.rel = 'icon';
            link.href = '/placeholder-logo.svg';
            link.type = 'image/svg+xml';
            document.head.appendChild(link);
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
