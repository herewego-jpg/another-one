import { Navigation } from "../../components/navigation"
import { MediaEmbed } from "../../components/media-embed"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BudweiserAndersonPaakProject() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/work" className="inline-block mb-8">
            <Button variant="outline">← Back to Work</Button>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-teal-700 mb-6">Yours To Take</h1>

          <div className="mb-8">
            <MediaEmbed type="youtube" videoId="aZBn0HkVQK4" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-teal-600">Budweiser X Anderson .Paak Official Music Video.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
