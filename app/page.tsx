import { Card, CardContent } from "@/components/ui/card"
import { MediaEmbed } from "./components/media-embed"
import { Navigation } from "./components/navigation"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimatedMusicIcon } from "./components/animated-music-icon"

const projects = [
  {
    id: "dream-academy",
    title: "Dream Academy Art Film",
    description: "HYBE x Geffen collaboration showcasing the creative vision behind Dream Academy",
    category: "Music Video",
    year: "2023",
    type: "youtube" as const,
    videoId: "3pzu8Ej-xhQ",
    startAt: "1",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "budweiser-anderson-paak",
    title: "Yours To Take",
    description: "Budweiser X Anderson .Paak Official Music Video",
    category: "Music Video",
    year: "2021",
    type: "youtube" as const,
    videoId: "aZBn0HkVQK4",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "lebron-bronny-beats",
    title: "King of the Court",
    description:
      "LeBron James' Legacy Continues with Bronny | Beats by Dre campaign featuring dynamic music supervision that switches between classical and energetic rap",
    category: "Commercial",
    year: "2022",
    type: "youtube" as const,
    videoId: "gD-8GWz-K4I",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "rams-season-kickoff",
    title: "Different Season. Same Beast",
    description:
      "Los Angeles Rams Season Kickoff Trailer - High-energy sports marketing campaign with powerful music supervision to build excitement for the NFL season",
    category: "Sports Marketing",
    year: "2022",
    type: "youtube" as const,
    videoId: "ax5xMEsWxUw",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "tinder-rescue",
    title: "Rescue | It Starts with a Swipe™",
    description:
      "Tinder's heartwarming campaign showcasing real connections and meaningful relationships through strategic music supervision",
    category: "Digital Marketing",
    year: "2024",
    type: "youtube" as const,
    videoId: "7XTcEB_E44Y",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "tinder-class",
    title: "Class | It Starts With A Swipe™",
    description:
      "Part of Tinder's acclaimed campaign series highlighting authentic connections with carefully curated musical storytelling",
    category: "Digital Marketing",
    year: "2024",
    type: "youtube" as const,
    videoId: "H8-P9T11IkQ",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "tinder-campaign-3",
    title: "It Starts With A Swipe™ - Campaign 3",
    description:
      "Third installment in Tinder's successful digital marketing series, featuring innovative music supervision for modern dating culture",
    category: "Digital Marketing",
    year: "2024",
    type: "youtube" as const,
    videoId: "GknITY8cLgE",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: "tinder-campaign-4",
    title: "It Starts With A Swipe™ - Campaign 4",
    description:
      "Latest addition to Tinder's award-winning campaign series, showcasing sophisticated music supervision for digital platforms",
    category: "Digital Marketing",
    year: "2024",
    type: "youtube" as const,
    videoId: "EuMl5blJhuA",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: "silversea-luxury",
    title: "Silversea. To Finding More.",
    description:
      "Luxury cruise line campaign featuring elegant, sophisticated music supervision that captures the essence of premium travel experiences",
    category: "Luxury Marketing",
    year: "2024",
    type: "youtube" as const,
    videoId: "2Z7S1xV-n8U",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "instagram-project",
    title: "",
    description: "Social media campaign showcasing music supervision for Instagram content",
    category: "Social Media",
    year: "2024",
    type: "instagram" as const,
    postId: "DEh1Tl5JErq",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: "tyson-royal-jewels",
    title: "Always Been Tyson™ | Royal Jewels",
    description:
      "Food brand commercial with music supervision that elevates everyday products to premium status through strategic sonic branding",
    category: "Food & Beverage",
    year: "2024",
    type: "youtube" as const,
    videoId: "IwZpZBZlccY",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: "marriott-autograph",
    title: "Find the Unforgettable with Autograph Collection",
    description:
      "Marriott Bonvoy's luxury hotel campaign featuring sophisticated music supervision that evokes wanderlust and premium hospitality experiences",
    category: "Hospitality Marketing",
    year: "2022",
    type: "youtube" as const,
    videoId: "TB-DbNPrYak",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: true,
  },
  {
    id: "motorola-edge",
    title: "Meet our new motorola edge phones - #findyouredge",
    description:
      "Technology product launch campaign with cutting-edge music supervision that captures innovation and modern connectivity",
    category: "Technology Marketing",
    year: "2022",
    type: "youtube" as const,
    videoId: "toboHKeybLw",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
  {
    id: "live-event-project",
    title: "Live Event Experience",
    description:
      "Live streaming event with real-time music supervision and production, showcasing expertise in live broadcast environments",
    category: "Live Events",
    year: "2024",
    type: "youtube" as const,
    videoId: "qxUCzsO-dio",
    thumbnail: "/placeholder.svg?height=300&width=400",
    featured: false,
  },
]

// Generate random icon for this page's OG image with timestamp
const timestamp = Date.now()

export const metadata = {
  title: "Emily Rose Weinstein - Music Supervisor & Producer",
  description: "Creating music experiences that elevate visual storytelling across all media formats.",
  openGraph: {
    title: "Emily Rose Weinstein - Music Supervisor & Producer",
    description: "Creating music experiences that elevate visual storytelling across all media formats.",
    images: [
      {
        url: `/api/og?t=${timestamp}`,
        width: 1200,
        height: 630,
        alt: "Emily Rose Weinstein - Music Supervisor & Producer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emily Rose Weinstein - Music Supervisor & Producer",
    description: "Creating music experiences that elevate visual storytelling across all media formats.",
    images: [`/api/og?t=${timestamp}`],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="min-h-[100svh] flex items-center justify-center relative px-4"
        style={{ backgroundColor: "#FA8072" }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tight">
            Music Supervisor
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-8 tracking-tight">
            & Producer
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Creating music experiences that elevate visual storytelling
          </p>

          {/* Animated Music Icon */}
          <div className="mt-6 md:mt-12">
            <AnimatedMusicIcon size={48} className="sm:hidden" />
            <AnimatedMusicIcon size={64} className="hidden sm:block" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 w-full flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-4 md:mb-6">Featured Work</h2>
            <p className="text-lg md:text-xl text-teal-600 max-w-3xl mx-auto">
              A selection of music supervision, original score, and audio post projects across film, television, and
              digital media
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <MediaEmbed
                    type={project.type}
                    videoId={project.videoId}
                    postId={project.postId}
                    startAt={project.startAt}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 text-white" style={{ backgroundColor: "#FA8072" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">Let's Create Together</h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
