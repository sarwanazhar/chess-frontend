import { MobileHiddenClient } from "@/components/mobile-hidden-client";
import Profile from "@/components/profile/profile";
import SideBar from "@/components/sidebar/sidebar";
import { initialProfile } from "@/lib/initialProfile";

const Page = async () => {
    const profile = await initialProfile()

    return ( 
        <>
          <div className="bg-zinc-800 h-[200vh]  w-full flex">

            <MobileHiddenClient profile={profile} />

            <div className="w-full lg:px-10">
              <Profile profile={profile} />
            </div>
          </div>
        </>
     );
}
 
export default Page;