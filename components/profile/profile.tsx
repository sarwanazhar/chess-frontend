'use client';

import { User } from "@prisma/client";
import NavBar from "../navigation/navbar";
import { Gem } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import ActionTooltip from "../ui/action-tooltip";

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
                <div className="w-full h-full flex flex-col">
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
                </div>
            </div>

        </>
     );
}
 
export default Profile;