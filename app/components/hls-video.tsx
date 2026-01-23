"use client"

import { useEffect, useRef } from "react"

interface HLSVideoProps {
  src: string
  className?: string
}

export function HLSVideo({ src, className = "" }: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Check if HLS is natively supported (Safari)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src
    } else {
      // Use hls.js for other browsers
      import("hls.js").then((HlsModule) => {
        const Hls = HlsModule.default
        if (Hls.isSupported()) {
          const hls = new Hls()
          hls.loadSource(src)
          hls.attachMedia(video)
        }
      })
    }
  }, [src])

  return (
    <div className={`aspect-video ${className}`}>
      <video
        ref={videoRef}
        controls
        playsInline
        className="w-full h-full object-cover"
        style={{ backgroundColor: "#000" }}
      />
    </div>
  )
}
