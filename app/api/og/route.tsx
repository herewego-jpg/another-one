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
  music2: "M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
  music3: "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z",
  music4:
    "M21 3v8.5c0 .83-.67 1.5-1.5 1.5S18 12.33 18 11.5 18.67 10 19.5 10c.17 0 .33.03.5.07V3h3zM12 3v10.5c0 .83-.67 1.5-1.5 1.5S9 14.33 9 13.5 9.67 12 10.5 12c.17 0 .33.03.5.07V3h3z",
}

const iconNames = Object.keys(musicIcons) as (keyof typeof musicIcons)[]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    // Use current timestamp to ensure randomness on each request
    const seed = Date.now() + Math.random()
    const randomIndex = Math.floor(seed * iconNames.length) % iconNames.length
    const iconName = iconNames[randomIndex]
    const iconPath = musicIcons[iconName]

    // Create response with aggressive cache-busting
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
      },
    )

    // Set aggressive cache-busting headers
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0")
    response.headers.set("Pragma", "no-cache")
    response.headers.set("Expires", "0")
    response.headers.set("Surrogate-Control", "no-store")

    return response
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
