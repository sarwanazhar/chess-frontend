import Profile from "@/components/profile/profile";
import SideBar from "@/components/sidebar/sidebar";
import { initialProfile } from "@/lib/initialProfile";

const Page = async () => {
    const profile = await initialProfile()

    return ( 
        <>
          <div className="bg-zinc-800 h-[200vh]  w-full flex">
            <div className="hidden lg:block h-[100vh] w-30 bg-zinc-900/70 fixed">
              <SideBar />
            </div>
            <div className="hidden lg:block h-[200vh] w-44 bg-zinc-900/70">
                    
            </div>
            <div className="w-full lg:px-10">
              <Profile profile={profile} />
            </div>
          </div>
        </>
     );
}
 
export default Page;