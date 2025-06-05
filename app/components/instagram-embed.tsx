"use client"

import { useEffect, useState } from "react"

interface InstagramEmbedProps {
  postId: string
  className?: string
}

export function InstagramEmbed({ postId, className = "" }: InstagramEmbedProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className={`aspect-video bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="animate-pulse">Loading Instagram post...</div>
      </div>
    )
  }

  const embedUrl = `https://www.instagram.com/p/${postId}/embed/`

  return (
    <div className={`aspect-video w-full ${className}`}>
      <iframe
        src={embedUrl}
        title="Instagram post"
        allow="encrypted-media"
        allowFullScreen
        className="w-full h-full border-0"
      />
    </div>
  )
}
