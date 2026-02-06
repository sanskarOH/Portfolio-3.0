import SkillTerminal from "@/components/SkillTerminal"
export default function Hero(){
    return(
        <section id="hero" className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4">
                {/*content*/}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight " >Sanskar Diwedi</h1>
                <SkillTerminal />

            </div>
        </section>
    )
}