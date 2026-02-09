import SkillTerminal from "@/components/SkillTerminal";
import { BlurFade } from "@/components/ui/blur-fade";
import { MorphingText } from "@/components/ui/morphing-text";

export default function Hero() {
  const text = ["Developer", "Founder", "Freelancer", "Meow <3"];
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
          {/* big tile*/}
          <div
            className="flex
              md:col-span-2
              md:row-span-2
              rounded-2xl
              border
              bg-background
              p-4
              justify-center
              items-center
            "
          ></div>

          {/* SMALL TILE 1 */}
          <div className="">
            <SkillTerminal />
          </div>

          <div className="rounded-2xl border p-6 flex items-center justify-center">
            <MorphingText
              className="text-5xl md:text-5xl lg:text-6xl"
              texts={text}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
