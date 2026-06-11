"use client"

interface IspotEmbedProps {
  adId: string
  provider?: "lbb" | "ispot"
  title?: string
  className?: string
}

export function IspotEmbed({ adId, provider = "lbb", title, className = "" }: IspotEmbedProps) {
  const src =
    provider === "ispot"
      ? `https://www.ispot.tv/share/${adId}`
      : `https://lbbonline.com/work/${adId}/embed?no_credits=true`

  return (
    <div className={`aspect-video relative ${className}`}>
      {title && (
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 via-black/40 to-transparent px-3 pt-2.5 pb-8 pointer-events-none">
          <span
            className="text-white text-[16px] leading-tight line-clamp-2"
            style={{ fontFamily: '"Roboto", "Arial", sans-serif' }}
          >
            {title}
          </span>
        </div>
      )}
      <iframe
        id={`work-with-credits-${adId}`}
        src={src}
        scrolling="no"
        allowFullScreen
        className="w-full h-full border-none"
        title={title ?? "Video embed"}
      />
    </div>
  )
}
