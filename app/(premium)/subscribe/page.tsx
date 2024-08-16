import { DiamondCard } from "@/components/diamond-card";
import NavBar from "@/components/navigation/navbar";
import SideBar from "@/components/sidebar/sidebar";
import { initialProfile } from "@/lib/initialProfile";

const Page = async () => {
    const profile = await initialProfile()

    return ( 
        <div className="bg-zinc-800 h-[200vh]  w-full flex">
        <div className="hidden lg:block h-[100vh] w-30 bg-zinc-900/70 fixed">
          <SideBar />
        </div>
        <div className="hidden lg:block h-[200vh] w-44 bg-zinc-900/70">

        </div>
        <div className="w-full lg:px-10">
            <NavBar profile={profile} />
            <div className="w-full h-[70vh] flex items-center justify-center mt-8">
              <DiamondCard profile={profile} />
            </div>
        </div>
      </div>
     );
}
 
export default Page;