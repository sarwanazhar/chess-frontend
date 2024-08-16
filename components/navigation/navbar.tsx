import { User } from "@prisma/client"
import {
    Avatar,
    AvatarImage,
} from '@/components/ui/avatar'
import { MobileToggle } from "../mobile-toggle";
import { Gem } from "lucide-react";
import ActionTooltip from "../ui/action-tooltip";

interface NavBarProps {
    profile: User;
}

const NavBar = async ({
    profile
}: NavBarProps) => {

    return (
        <div className="h-20 w-full flex items-center px-12 justify-between">
            <div className="h-10 flex items-center font-bold gap-4">
                <Avatar>
                    <AvatarImage src={profile.imageUrl} />
                </Avatar>
                <h1>{profile.name}</h1>
                {profile.subscribed === true && (
                    <ActionTooltip label="Diamond Member" align="center" side="bottom">
                        <Gem className="text-blue-500" />
                    </ActionTooltip>
                )}
            </div>
            <div>
                <MobileToggle />
            </div>
        </div>
    )
}

export default NavBar