"use client"

import { YouTubeEmbed } from "./youtube-embed"
import { InstagramEmbed } from "./instagram-embed"

interface MediaEmbedProps {
  type: "youtube" | "instagram"
  videoId?: string
  postId?: string
  startAt?: string
  className?: string
}

export function MediaEmbed({ type, videoId, postId, startAt, className = "" }: MediaEmbedProps) {
  if (type === "youtube" && videoId) {
    return <YouTubeEmbed videoId={videoId} startAt={startAt} className={className} />
  }

  if (type === "instagram" && postId) {
    return <InstagramEmbed postId={postId} className={className} />
  }

  return (
    <div className={`aspect-video bg-gray-200 flex items-center justify-center ${className}`}>
      <div>Media not available</div>
    </div>
  )
}
