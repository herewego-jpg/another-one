import type React from "react"
import "./globals.css"
import { JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleAnalytics } from "./components/google-analytics"
import { Suspense } from "react"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata = {
  metadataBase: new URL("https://emilyroseweinstein.com"),
  title: {
    default: "Emily Rose Weinstein - Music Supervisor & Producer | LA Music Professional",
    template: "%s | Emily Rose Weinstein - Music Supervisor & Producer",
  },
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
    "Apple Music Supervisor",
    "Beats by Dre Music",
    "Tinder Campaign Music",
    "Netflix Music Supervisor",
    "Warner Bros Music",
    "Marriott Music",
    "Uber Music",
    "American Express Music",
  ],
  authors: [{ name: "Emily Rose Weinstein", url: "https://emilyroseweinstein.com" }],
  creator: "Emily Rose Weinstein",
  publisher: "Emily Rose Weinstein",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Emily Rose Weinstein - Music Supervisor & Producer | LA Music Professional",
    description:
      "Emily Rose Weinstein is a Los Angeles-based Music Supervisor & Producer creating music experiences that elevate visual storytelling across all media formats.",
    url: "https://emilyroseweinstein.com",
    siteName: "Emily Rose Weinstein - Music Supervisor & Producer",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Emily Rose Weinstein - Music Supervisor & Producer",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emily Rose Weinstein - Music Supervisor & Producer",
    description: "LA-based Music Supervisor & Producer creating music experiences that elevate visual storytelling.",
    images: ["/api/og"],
    creator: "@emilyroseweinstein",
    site: "@emilyroseweinstein",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0827F5",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code-here",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://emilyroseweinstein.com",
    languages: {
      "en-US": "https://emilyroseweinstein.com",
    },
  },
  category: "Music Production",
  classification: "Music Supervisor & Producer",
  other: {
    "msapplication-TileColor": "#0827F5",
    "theme-color": "#0827F5",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="canonical" href="https://emilyroseweinstein.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Geo Tags */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />

        {/* Business Info */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://emilyroseweinstein.com/#person",
                  name: "Emily Rose Weinstein",
                  alternateName: ["Emily Weinstein", "Emily Rose"],
                  jobTitle: "Music Supervisor & Producer",
                  description:
                    "Los Angeles-based Music Supervisor & Producer specializing in music supervision, original scoring, and audio post-production for film, TV, commercials, and digital media.",
                  url: "https://emilyroseweinstein.com",
                  image: {
                    "@type": "ImageObject",
                    url: "https://emilyroseweinstein.com/images/emily-latest-photo.jpg",
                    width: 400,
                    height: 400,
                  },
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
                  sameAs: ["https://emilyroseweinstein.com"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://emilyroseweinstein.com/#website",
                  url: "https://emilyroseweinstein.com",
                  name: "Emily Rose Weinstein - Music Supervisor & Producer",
                  description:
                    "Professional music supervision, original scoring, and audio post-production services for film, TV, commercials, and digital media.",
                  publisher: {
                    "@id": "https://emilyroseweinstein.com/#person",
                  },
                  potentialAction: [
                    {
                      "@type": "SearchAction",
                      target: {
                        "@type": "EntryPoint",
                        urlTemplate: "https://emilyroseweinstein.com/?s={search_term_string}",
                      },
                      "query-input": "required name=search_term_string",
                    },
                  ],
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://emilyroseweinstein.com/#service",
                  name: "Emily Rose Weinstein Music Services",
                  description:
                    "Professional music supervision, original scoring, and audio post-production services for entertainment industry.",
                  provider: {
                    "@id": "https://emilyroseweinstein.com/#person",
                  },
                  areaServed: {
                    "@type": "Place",
                    name: "Los Angeles, CA",
                  },
                  serviceType: ["Music Supervision", "Original Scoring", "Audio Post-Production"],
                  url: "https://emilyroseweinstein.com/services",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${jetbrainsMono.variable}`}>
        <GoogleAnalytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
