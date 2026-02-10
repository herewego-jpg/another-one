import { Navigation } from "../components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { AnimatedMusicIcon } from "../components/animated-music-icon"

export const metadata = {
  title: "Music Supervision Services - Emily Rose Weinstein",
  description:
    "Professional music supervision, original scoring, and audio post-production services for film, TV, commercials, and digital media. Comprehensive audio solutions from concept to delivery.",
  openGraph: {
    title: "Music Supervision Services - Emily Rose Weinstein",
    description:
      "Professional music supervision, original scoring, and audio post-production services for film, TV, commercials, and digital media.",
    url: "https://emilyroseweinstein.com/services",
  },
  twitter: {
    title: "Music Supervision Services - Emily Rose Weinstein",
    description:
      "Professional music supervision, original scoring, and audio post-production services for entertainment industry.",
  },
  alternates: {
    canonical: "https://emilyroseweinstein.com/services",
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: "Music Supervision",
      description:
        "Curating and licensing the perfect existing music for your project, from chart-toppers to hidden gems.",
      features: [
        "Music research and selection",
        "Rights clearance and licensing",
        "Budget management",
        "Artist and label negotiations",
        "Sync licensing coordination",
      ],
    },
    {
      title: "Original Score",
      description:
        "Working with composers to produce custom music tailored specifically to your project's unique narrative and emotional needs.",
      features: [
        "Custom composition",
        "Theme development",
        "Orchestration and arrangement",
        "Recording and production",
        "Mixing and mastering",
      ],
    },
    {
      title: "Audio Post-Production",
      description:
        "Executing audio finishing in tandem with the industry's best engineers to ensure your project sounds as good as it looks.",
      features: ["Sound design", "Audio mixing", "Dialogue editing", "Foley and SFX", "Final mastering"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="min-h-[100svh] flex items-center justify-center relative px-4"
        style={{ backgroundColor: "#0827F5" }}
      >
        <div className="text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tight" style={{ color: "#89CC04" }}>
            Services
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#89CC04" }}>
            Comprehensive audio solutions for every project
          </p>

          {/* Animated Music Icon */}
          <div className="mt-8 md:mt-12 w-full h-20 sm:h-24 flex items-center justify-center overflow-hidden">
            <AnimatedMusicIcon size={64} />
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-12 w-full flex justify-center">
          <div className="animate-bounce">
            <ChevronDown className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-4 md:mb-6">What I Offer</h2>
            <p className="text-lg md:text-xl text-teal-600 max-w-3xl mx-auto">
              From initial concept to final delivery, I provide end-to-end audio solutions that bring your vision to
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-teal-200 bg-white"
              >
                <CardHeader className="pb-4 bg-white">
                  <CardTitle className="text-xl md:text-2xl font-bold text-teal-700">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="bg-white">
                  <p className="text-sm md:text-base text-teal-600 mb-4 md:mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm md:text-base text-teal-600 flex items-center">
                        <span className="w-2 h-2 bg-teal-700 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border border-teal-200">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-4 md:mb-6">Industries & Formats</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div>
                <h4 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">Commercial</h4>
                <ul className="text-teal-600 space-y-1 text-xs md:text-sm">
                  <li>Brand campaigns</li>
                  <li>Product launches</li>
                  <li>Digital advertising</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">Entertainment</h4>
                <ul className="text-teal-600 space-y-1 text-xs md:text-sm">
                  <li>Music videos</li>
                  <li>Film & TV</li>
                  <li>Streaming content</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">Sports</h4>
                <ul className="text-teal-600 space-y-1 text-xs md:text-sm">
                  <li>Team promotions</li>
                  <li>Event coverage</li>
                  <li>Athlete content</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">Digital</h4>
                <ul className="text-teal-600 space-y-1 text-xs md:text-sm">
                  <li>Social media</li>
                  <li>Podcasts</li>
                  <li>Live streaming</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20" style={{ backgroundColor: "#0827F5" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8" style={{ color: "#89CC04" }}>Let's Discuss Your Project</h2>
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
