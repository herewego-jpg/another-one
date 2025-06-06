import { Navigation } from "../components/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { AnimatedMusicIcon } from "../components/animated-music-icon"

export const metadata = {
  title: "About Emily Rose Weinstein - Music Supervisor & Producer",
  description:
    "Learn about Emily Rose Weinstein, a Los Angeles-based Music Supervisor & Producer with over a decade of experience working with major brands like Apple, Netflix, Tinder, and more.",
  openGraph: {
    title: "About Emily Rose Weinstein - Music Supervisor & Producer",
    description:
      "Learn about Emily Rose Weinstein, a Los Angeles-based Music Supervisor & Producer with over a decade of experience working with major brands like Apple, Netflix, Tinder, and more.",
    url: "https://emilyroseweinstein.com/about",
  },
  twitter: {
    title: "About Emily Rose Weinstein - Music Supervisor & Producer",
    description: "Learn about Emily Rose Weinstein - Music Supervisor & Producer.",
  },
  alternates: {
    canonical: "https://emilyroseweinstein.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="min-h-[100svh] flex items-center justify-center relative"
        style={{ backgroundColor: "#FA8072" }}
      >
        <div className="text-center text-white px-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tight">About</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Crafting sonic narratives that connect with audiences
          </p>

          {/* Animated Music Icon */}
          <div className="mt-8 md:mt-12 max-w-full overflow-visible">
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

      {/* About Content */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:font-light leading-tight text-teal-700 mb-8 md:mb-12 italic">
              Hey there, I'm Emily.
              <br />
              I'm a LA-based
              <br />
              Music Supervisor &
              <br />
              Producer.
            </h2>
          </div>

          {/* Centered Photo */}
          <div className="flex justify-center mb-16 md:mb-20">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
              <Image
                src="/images/emily-japan-photo.jpg"
                alt="Emily Rose Weinstein - Music Supervisor & Producer"
                fill
                className="object-cover scale-125"
                style={{ objectPosition: "65% 10%" }}
                priority
              />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="mb-16 md:mb-20">
            <p className="text-lg md:text-xl leading-relaxed text-teal-600 text-justify">
              With over a decade of experience in creative production, music supervision, original scoring, and audio
              post-production, I specialize in working with teams to create sonic experiences that elevate visual
              storytelling across all media formats.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-teal-600 text-justify mt-6">
              My approach combines technical expertise with creative vision to deliver white label services for premium
              audio solutions that resonate with audiences and enhance your brand's message.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6 md:mb-8">Experience</h3>
            <p className="text-lg md:text-xl leading-relaxed text-teal-600 text-justify">
              I've had the privilege of working with major brands including Apple, Beats by Dre, Tinder, American
              Express, Uber, Marriott, and more, as well as major studios including Warner Bros. and Netflix. My work
              spans music videos, commercial campaigns, sports marketing, luxury brand content, and digital media across
              platforms like TikTok, YouTube, Instagram, and streaming services.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-teal-600 text-justify mt-6">
              My diverse background includes global experience across photography, documentary filmmaking, and Bollywood
              productions, bringing a unique transmedia perspective to every project I undertake.
            </p>
          </div>

          {/* Collaboration Section */}
          <div className="mb-20 md:mb-24">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6 md:mb-8">Collaboration</h3>
            <p className="text-lg md:text-xl leading-relaxed text-teal-600 text-justify">
              I believe the best work comes from true collaboration. I work closely with directors, creative teams, and
              brand managers to ensure the music not only supports the vision but enhances it in ways that might not
              have been initially imagined.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-teal-600 text-justify mt-6">
              As a freelancer, I've both led and supported projects at some of the industry's most prominent music
              companies including Squeak E. Clean Studios, Found Objects, Invisible Arts, as well as creatives and
              production executives from Human Worldwide.
            </p>
          </div>

          {/* Philosophy Section */}
          <div className="mb-16 md:mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-700 mb-6 md:mb-8">Philosophy</h3>
            <p className="text-lg md:text-xl leading-relaxed text-teal-600 text-justify">
              Every project tells a unique story, and music is the bridge that connects that story with its audience.
              Whether it's selecting the *chef's kiss* licensed track, composing an original score, or producing a
              perfect audio mix, I approach each project with good ears and a deep understanding of how sound shapes
              perception.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-left mb-12 md:mb-16">
            <p className="text-2xl md:text-3xl lg:text-4xl text-teal-700 mb-8 md:mb-12">
              <Link href="/contact" className="hover:text-teal-800 transition-colors">
                Like what you hear? <span className="text-teal-500">Let's work together :)</span>
              </Link>
            </p>
          </div>

          {/* Signature */}
          <div className="text-left">
            <p className="text-lg md:text-xl font-bold uppercase tracking-wider text-teal-700 mb-4">MUCH LOVE,</p>
            <p
              className="text-6xl md:text-7xl lg:text-8xl font-light italic text-teal-700"
              style={{ fontFamily: "serif" }}
            >
              e
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 text-white" style={{ backgroundColor: "#FA8072" }}>
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Ready to Collaborate?</h2>
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
