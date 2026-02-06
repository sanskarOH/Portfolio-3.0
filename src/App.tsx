import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MainBanner } from "./components/sections/MainBanner"
function App() {
 
  return (
    <>
      <div className="min-h-screen items-center flex flex-col p-10">
        <h1>Sanskar Diwedi</h1>
        <Avatar className="m-3">
        <AvatarImage
            src="https://github.com/shadcn.png"
            alt="shadcan"
            className=""
        ></AvatarImage>
        </Avatar>
        <MainBanner />
       
      </div>
    </>
  )
}

export default App
