"use client"

import { useEffect, useRef, useState } from "react"

interface HLSVideoProps {
  src: string
  title?: string
  className?: string
}

export function HLSVideo({ src, title, className = "" }: HLSVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

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

    return () => {
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [src])

  return (
    <div className={`aspect-video relative ${className}`}>
      {/* Title overlay - similar to YouTube's */}
      {title && !isPlaying && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-3 pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium line-clamp-2">{title}</span>
          </div>
        </div>
      )}
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
