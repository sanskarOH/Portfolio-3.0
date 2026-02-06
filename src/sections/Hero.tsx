import SkillTerminal from "@/components/SkillTerminal"
import { BlurFade } from "@/components/ui/blur-fade"

export default function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <BlurFade delay={0.25} inView>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-12">
          Sanskar Diwedi 👋
        </h1>
        </BlurFade>

        {/* BENTO GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            auto-rows-[minmax(160px,auto)]
            gap-6
          "
        >
          {/* BIG TERMINAL TILE */}
          <div
            className="
              md:col-span-2
              md:row-span-2
              rounded-2xl
              border
              bg-background
              p-4
            "
          >
            
          </div>

          {/* SMALL TILE 1 */}
          <div className="">
            <SkillTerminal />
          </div>

          {/* SMALL TILE 2 */}
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">Currently Learning</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Cloud · Distributed Systems
            </p>
          </div>

          {/* WIDE TILE */}
          <div className="md:col-span-3 rounded-2xl border p-6">
            <p className="text-sm text-muted-foreground">
              I enjoy building scalable backend systems and clean developer
              experiences.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
