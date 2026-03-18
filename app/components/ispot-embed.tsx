"use client"

interface IspotEmbedProps {
  adId: string
  className?: string
}

export function IspotEmbed({ adId, className = "" }: IspotEmbedProps) {
  return (
    <div
      className={`aspect-video ${className}`}
      dangerouslySetInnerHTML={{
        __html: `
          <iframe 
            class="inline-iframe-with-credits __se__tag" 
            id="word-with-credits-${adId}" 
            src="https://lbbonline.com/work/${adId}/embed?no_credits=true" 
            scrolling="no" 
            webkitallowfullscreen="" 
            mozallowfullscreen="" 
            allowfullscreen=""
            style="width: 100%; height: 100%; border: none;"
          ></iframe>
        `,
      }}
    />
  )
}
