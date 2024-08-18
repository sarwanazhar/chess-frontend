import { User } from "@prisma/client";
import NavBar from "../navigation/navbar";
import { ChevronRight, Gem, UserPen } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import ActionTooltip from "../ui/action-tooltip";
import { Games } from "../games";
import EditProfileButton from "../edit-profile-button";

interface ProfileProps {
    profile: User;
}

const Profile = ({
    profile
}: ProfileProps) => {
    
    return ( 
        <>
            <NavBar profile={profile} />

            <div className="w-full h-[20vh]">
                <div className="w-full h-full flex items-center justify-between px-5">
                    <div className="text-2xl font-bold ml-4 flex gap-3 items-center">
                         <Avatar>
                            <AvatarImage src={profile.imageUrl} />
                         </Avatar>
                        {profile.name} 
                         {profile.subscribed === true && (
                            <div className="flex items-center gap-3">
                                <ActionTooltip label="Diamond Member" align="center" side="bottom">
                                <Gem className="text-blue-500" />
                                </ActionTooltip>
                            </div>
                        )}
                    </div>
                    <div className="lg:mr-10">
                        <EditProfileButton profile={profile} />
                    </div>
                </div>
            </div>
            
            <div className='w-full h-[80vh] bg-zinc-900/70'>
                  <div className="w-full h-[6vh] bg-zinc-900 flex items-center justify-between">
                    <h1 className="text-xl ml-6 font-semibold">Completed Games {}</h1>
                    <ChevronRight className="w-8 h-8 font-bold mr-6" />
                  </div>
                  <Games  profile={profile} render={15} />
            </div>
        </>
     );
}
 
export default Profile;