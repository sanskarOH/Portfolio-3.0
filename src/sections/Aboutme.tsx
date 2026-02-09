export default function Aboutme() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BENTO GRID */}
        <div
          className="
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    auto-rows-[minmax(160px,auto)]
                    gap-1
                  "
        >
          {/* big tile*/}
          <div
            className="flex
                      md:col-span-3
                      md:row-span-2
                      rounded-2xl
                      border
                      bg-background
                      p-4
                      justify-center
                      items-center
                    "
          ></div>
        </div>
      </div>
    </section>
  );
}
