import { Navigation } from "../components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Section } from "../components/section"
import { ChevronDown } from "lucide-react"
import { AnimatedMusicIcon } from "../components/animated-music-icon"

export const metadata = {
  title: "Contact Emily Rose Weinstein - Music Supervisor & Producer",
  description:
    "Get in touch with Emily Rose Weinstein for music supervision, original scoring, and audio post-production services. Based in Los Angeles, available for remote collaboration worldwide.",
  openGraph: {
    title: "Contact Emily Rose Weinstein - Music Supervisor & Producer",
    description:
      "Get in touch with Emily Rose Weinstein for music supervision, original scoring, and audio post-production services.",
    url: "https://emilyroseweinstein.com/contact",
  },
  twitter: {
    title: "Contact Emily Rose Weinstein - Music Supervisor & Producer",
    description:
      "Get in touch for music supervision and production services. Los Angeles-based, worldwide collaboration.",
  },
  alternates: {
    canonical: "https://emilyroseweinstein.com/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="min-h-[100svh] flex items-center justify-center relative px-4"
        style={{ backgroundColor: "#FA8072" }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 md:mb-6 tracking-tight">
            Contact
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Let's create something extraordinary together
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

      {/* Contact Content */}
      <Section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-teal-200 bg-white">
              <CardHeader className="pb-4 bg-white">
                <CardTitle className="text-xl md:text-2xl font-bold text-teal-700">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="bg-white">
                <form className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-teal-700 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="text-sm md:text-base border-teal-300 focus:border-teal-500 bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-teal-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="text-sm md:text-base border-teal-300 focus:border-teal-500 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-teal-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="text-sm md:text-base border-teal-300 focus:border-teal-500 bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-teal-700 mb-2">
                      Company (Optional)
                    </label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="text-sm md:text-base border-teal-300 focus:border-teal-500 bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-teal-700 mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      className="w-full px-3 py-2 text-sm md:text-base border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-teal-700 bg-white"
                    >
                      <option value="" className="text-teal-600">
                        Select project type
                      </option>
                      <option value="music-supervision" className="text-teal-700">
                        Music Supervision
                      </option>
                      <option value="original-score" className="text-teal-700">
                        Original Score
                      </option>
                      <option value="audio-post" className="text-teal-700">
                        Audio Post-Production
                      </option>
                      <option value="full-service" className="text-teal-700">
                        Full Service
                      </option>
                      <option value="consultation" className="text-teal-700">
                        Consultation
                      </option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-teal-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell me about your project, timeline, budget range, and any specific requirements..."
                      className="text-sm md:text-base border-teal-300 focus:border-teal-500 bg-white"
                    />
                  </div>

                  <Button className="w-full bg-teal-700 text-white hover:bg-teal-800 py-3 text-sm md:text-base">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <Card className="shadow-lg border-teal-200 bg-white">
                <CardHeader className="pb-4 bg-white">
                  <CardTitle className="text-xl md:text-2xl font-bold text-teal-700">Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6 bg-white">
                  <div>
                    <p className="text-sm md:text-base text-teal-600">
                      Thank you for reaching out! To get in touch with me, please fill out the contact form. I'll hit ya
                      back asap, promise.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">Response Time</h3>
                    <p className="text-sm md:text-base text-teal-600">I typically respond within 24 hours</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-teal-700 mb-2 text-sm md:text-base">Location</h3>
                    <p className="text-sm md:text-base text-teal-600">Los Angeles, CA</p>
                    <p className="text-xs md:text-sm text-teal-600">Available for remote collaboration worldwide</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
