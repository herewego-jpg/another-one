"use client"

import { YouTubeEmbed } from "./youtube-embed"
import { InstagramEmbed } from "./instagram-embed"
import { HLSVideo } from "./hls-video"
import { IspotEmbed } from "./ispot-embed"

interface MediaEmbedProps {
  type: "youtube" | "instagram" | "hls" | "ispot"
  videoId?: string
  postId?: string
  hlsUrl?: string
  hlsTitle?: string
  hlsLogo?: string
  adId?: string
  startAt?: string
  className?: string
}

export function MediaEmbed({ type, videoId, postId, hlsUrl, hlsTitle, hlsLogo, adId, startAt, className = "" }: MediaEmbedProps) {
  if (type === "youtube" && videoId) {
    return <YouTubeEmbed videoId={videoId} startAt={startAt} className={className} />
  }

  if (type === "instagram" && postId) {
    return <InstagramEmbed postId={postId} className={className} />
  }

  if (type === "hls" && hlsUrl) {
    return <HLSVideo src={hlsUrl} title={hlsTitle} logoUrl={hlsLogo} className={className} />
  }

  if (type === "ispot" && adId) {
    return <IspotEmbed adId={adId} className={className} />
  }

  return (
    <div className={`aspect-video bg-gray-200 flex items-center justify-center ${className}`}>
      <div>Media not available</div>
    </div>
  )
}
