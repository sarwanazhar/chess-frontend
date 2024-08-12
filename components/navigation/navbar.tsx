import { User } from "@prisma/client"
import {
    Avatar,
    AvatarImage,
} from '@/components/ui/avatar'
import { MobileToggle } from "../mobile-toggle";

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
            </div>
            <div>
                <MobileToggle />
            </div>
        </div>
    )
}

export default NavBar