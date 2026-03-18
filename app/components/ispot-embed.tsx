"use client"

interface IspotEmbedProps {
  adId: string
  className?: string
}

export function IspotEmbed({ adId, className = "" }: IspotEmbedProps) {
  return (
    <div className={`aspect-video ${className}`}>
      <iframe
        id={`work-with-credits-${adId}`}
        src={`https://lbbonline.com/work/${adId}/embed?no_credits=true`}
        scrolling="no"
        allowFullScreen
        className="w-full h-full border-none"
        title="Video embed"
      />
    </div>
  )
}
