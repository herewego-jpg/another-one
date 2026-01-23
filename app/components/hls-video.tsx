"use client"

import { useEffect, useRef, useState } from "react"

interface HLSVideoProps {
  src: string
  title?: string
  logoUrl?: string
  className?: string
}

export function HLSVideo({ src, title, logoUrl, className = "" }: HLSVideoProps) {
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
      {/* Title overlay - matching YouTube's embed style */}
      {title && !isPlaying && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-3 pt-2.5 pb-8 pointer-events-none">
          <div className="flex items-center gap-3">
            {logoUrl ? (
              <img 
                src={logoUrl || "/placeholder.svg"} 
                alt="" 
                className="h-8 w-auto object-contain flex-shrink-0"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            )}
            <span 
              className="text-white text-[13px] leading-tight font-roboto line-clamp-2"
              style={{ fontFamily: '"Roboto", "Arial", sans-serif' }}
            >
              {title}
            </span>
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
