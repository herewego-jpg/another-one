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
          <div style="position:relative; width:100%; padding-top:56.25%; padding-bottom:40px;">
            <iframe 
              src="https://www.ispot.tv/share/${adId}" 
              style="position:absolute; top:0; right:0; left:0; bottom:0; width:100%; height:100%;" 
              frameborder="0" 
              scrolling="no" 
              allowfullscreen=""
            ></iframe>
          </div>
        `,
      }}
    />
  )
}
