import { ChessBoardComponent } from "@/components/chessboard";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { initialProfile } from "@/lib/initialProfile";
import { useEffect } from "react";

const Start = async () => {
    const profile = await initialProfile()


    return (
        <div className="flex justify-center items-center h-[100vh] w-[100vw] flex-col bg-zinc-800 overflow-hidden">
            <ChessBoardComponent profile={profile} />
        </div>
    );
}

export default Start;