"use client"

import { useEffect, useState } from "react"

interface YouTubeEmbedProps {
  videoId: string
  startAt?: string
  className?: string
}

export function YouTubeEmbed({ videoId, startAt, className = "" }: YouTubeEmbedProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={`aspect-video bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="animate-pulse">Loading video...</div>
      </div>
    )
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}${startAt ? `?start=${startAt}` : ""}`

  return (
    <div className={`aspect-video w-full ${className}`}>
      <iframe
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}
