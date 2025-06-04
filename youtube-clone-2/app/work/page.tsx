import { Navigation } from "../components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { MediaEmbed } from "../components/media-embed"
import { ChevronDown } from "lucide-react"

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
  },
  {
    id: "budweiser-anderson-paak",
    title: "Yours To Take",
    description: "Budweiser X Anderson .Paak Official Music Video",
    category: "Music Video",
    year: "2021",
    type: "youtube" as const,
    videoId: "aZBn0HkVQK4",
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="min-h-[100svh] flex items-center justify-center relative px-4"
        style={{ backgroundColor: "#FA8072" }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tight">Work</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Featured projects and collaborations
          </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-0">
                  <MediaEmbed type={project.type} videoId={project.videoId} startAt={project.startAt} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
