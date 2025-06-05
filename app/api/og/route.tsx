import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

// Define our music icons as SVG paths
const musicIcons = {
  music: "M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  headphones:
    "M3 14h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zm0 0V9a9 9 0 0 1 18 0v5m0 0h-3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z",
  mic: "M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3zm6 9a6 6 0 0 1-12 0h-2a8 8 0 0 0 16 0h-2zm-6 7v3m-4 0h8",
  radio:
    "M4.9 19.1C1 15.2 1 8.8 4.9 4.9m14.2 0c3.9 3.9 3.9 10.3 0 14.2M8.5 16.5c-1.6-1.6-1.6-4.2 0-5.8m7 0c1.6 1.6 1.6 4.2 0 5.8M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  volume: "M11 5L6 9H2v6h4l5 4V5zm4.54 3.46a5 5 0 0 1 0 7.07m2.12-9.19a9 9 0 0 1 0 12.73",
  waveform: "M2 10v4m4-8v12m4-14v16m4-10v4m4-8v12m4-6v0",
}

const iconNames = Object.keys(musicIcons) as (keyof typeof musicIcons)[]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Always generate a random icon (ignore any icon parameter to ensure freshness)
    const randomIndex = Math.floor(Math.random() * iconNames.length)
    const iconName = iconNames[randomIndex]
    const iconPath = musicIcons[iconName]

    // Add cache-busting headers to ensure fresh generation
    const response = new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FA8072", // Salmon background
        }}
      >
        {/* Just the Icon - Nice and Big */}
        <svg
          width="400"
          height="400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={iconPath} />
        </svg>
      </div>,
      {
        width: 1200,
        height: 630,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      },
    )

    // Set cache-busting headers
    response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate")
    response.headers.set("Pragma", "no-cache")
    response.headers.set("Expires", "0")

    return response
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
