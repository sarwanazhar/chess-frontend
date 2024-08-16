import { ButtonServer } from "@/components/button-for-client";
import { Games } from "@/components/games";
import NavBar from "@/components/navigation/navbar";
import SideBar from "@/components/sidebar/sidebar";
import { initialProfile } from "@/lib/initialProfile";
import { ChevronRight } from "lucide-react";

const Main = async () => {
  const profile = await initialProfile()

  
    return ( 
        <>
          <div className="bg-zinc-800 h-[200vh]  w-full flex">
            <div className="hidden lg:block h-[100vh] w-40 bg-zinc-900/70 fixed">
              <SideBar />
            </div>
            <div className="hidden lg:block h-[200vh] w-44 bg-zinc-900/70">
            
            </div>
            <div className="w-full">
              <NavBar profile={profile} />
              <div className="px-10 lg:px-20 mt-6 w-full h-[70vh]">
                <div className="w-full h-[20vh] flex items-center justify-center">
                <ButtonServer profile={profile} />
                </div>
                <div className='w-full h-[80vh] bg-zinc-900/70'>
                  <div className="w-full h-[6vh] bg-zinc-900 flex items-center justify-between">
                    <h1 className="text-xl ml-6 font-semibold">Completed Games {}</h1>
                    <ChevronRight className="w-8 h-8 font-bold mr-6" />
                  </div>
                  <Games  profile={profile} />
                </div>
              </div>
            </div>
          </div>
        </>
     );
}
 
export default Main;