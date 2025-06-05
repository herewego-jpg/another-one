import type React from "react"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

// Generate random icon for OG image with timestamp to ensure uniqueness
const musicIcons = ["music", "headphones", "mic", "radio", "volume", "waveform"]
const randomIcon = musicIcons[Math.floor(Math.random() * musicIcons.length)]
const timestamp = Date.now()

export const metadata = {
  title: "Emily Rose Weinstein - Music Supervisor & Producer",
  description:
    "Creating music experiences that elevate visual storytelling across all media formats. Music supervision, original scoring, and audio post-production.",
  openGraph: {
    title: "Emily Rose Weinstein - Music Supervisor & Producer",
    description: "Creating music experiences that elevate visual storytelling across all media formats.",
    url: "https://your-domain.com",
    siteName: "Emily Rose Weinstein",
    images: [
      {
        url: `/api/og?t=${timestamp}`,
        width: 1200,
        height: 630,
        alt: "Emily Rose Weinstein - Music Supervisor & Producer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emily Rose Weinstein - Music Supervisor & Producer",
    description: "Creating music experiences that elevate visual storytelling across all media formats.",
    images: [`/api/og?t=${timestamp}`],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
