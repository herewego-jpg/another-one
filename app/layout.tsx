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
  title: "Emily Rose Weinstein - Music Supervisor & Producer | LA Music Professional",
  description:
    "Emily Rose Weinstein is a Los Angeles-based Music Supervisor & Producer creating music experiences that elevate visual storytelling. Specializing in music supervision, original scoring, and audio post-production for film, TV, commercials, and digital media.",
  keywords: [
    "Emily Weinstein",
    "Emily Rose Weinstein",
    "Music Supervisor",
    "Music Producer",
    "Los Angeles Music Supervisor",
    "LA Music Producer",
    "Film Music Supervisor",
    "TV Music Supervisor",
    "Commercial Music",
    "Music Supervision Services",
    "Original Scoring",
    "Audio Post Production",
    "Music for Media",
    "Visual Storytelling Music",
    "Squeak E Clean Studios",
    "Found Objects",
    "Invisible Arts",
    "Human Worldwide",
  ],
  authors: [{ name: "Emily Rose Weinstein" }],
  creator: "Emily Rose Weinstein",
  publisher: "Emily Rose Weinstein",
  openGraph: {
    title: "Emily Rose Weinstein - Music Supervisor & Producer | LA Music Professional",
    description:
      "Emily Rose Weinstein is a Los Angeles-based Music Supervisor & Producer creating music experiences that elevate visual storytelling across all media formats.",
    url: "https://your-domain.com",
    siteName: "Emily Rose Weinstein - Music Supervisor & Producer",
    images: [
      {
        url: `/api/og?t=${timestamp}`,
        width: 800,
        height: 600,
        alt: "Emily Rose Weinstein - Music Supervisor & Producer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Emily Rose Weinstein - Music Supervisor & Producer",
    description: "LA-based Music Supervisor & Producer creating music experiences that elevate visual storytelling.",
    images: [`/api/og?t=${timestamp}`],
    creator: "@emilyroseweinstein",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://your-domain.com",
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
      <head>
        <link rel="canonical" href="https://your-domain.com" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Emily Rose Weinstein",
              alternateName: ["Emily Weinstein", "Emily Rose"],
              jobTitle: "Music Supervisor & Producer",
              description:
                "Los Angeles-based Music Supervisor & Producer specializing in music supervision, original scoring, and audio post-production for film, TV, commercials, and digital media.",
              url: "https://your-domain.com",
              image: "https://your-domain.com/images/emily-latest-photo.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Los Angeles",
                addressRegion: "CA",
                addressCountry: "US",
              },
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Squeak E. Clean Studios",
                },
                {
                  "@type": "Organization",
                  name: "Found Objects",
                },
                {
                  "@type": "Organization",
                  name: "Invisible Arts",
                },
                {
                  "@type": "Organization",
                  name: "Human Worldwide",
                },
              ],
              knowsAbout: [
                "Music Supervision",
                "Music Production",
                "Original Scoring",
                "Audio Post Production",
                "Film Music",
                "Television Music",
                "Commercial Music",
                "Digital Media Music",
              ],
              sameAs: ["https://your-domain.com"],
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
