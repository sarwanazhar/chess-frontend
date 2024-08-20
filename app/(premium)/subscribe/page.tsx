import { DiamondCard } from "@/components/diamond-card";
import { MobileHiddenClient } from "@/components/mobile-hidden-client";
import NavBar from "@/components/navigation/navbar";
import { initialProfile } from "@/lib/initialProfile";

const Page = async () => {
    const profile = await initialProfile()

    return ( 
        <div className="bg-zinc-800 h-[200vh]  w-full flex">

        <MobileHiddenClient />

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