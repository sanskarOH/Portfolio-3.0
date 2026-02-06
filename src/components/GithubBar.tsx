import { GitHubCalendar } from "react-github-calendar"

export default function GithubBar(){
    return(
        <section id="hero" className="py-24">
            <div className="max-w-6xl mx-auto px-4">
                {/*content*/}
                <div className="wrapper border-gray-400 border-2 rounded-2xl">
                    <div className="p-5">
                    <GitHubCalendar className="" colorScheme="light" username="sanskarOH" />
                </div>
                </div>
            </div>
        </section>
    )
}