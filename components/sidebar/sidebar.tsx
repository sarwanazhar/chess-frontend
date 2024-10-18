'use client'
import { BookUser, Gem, LogOut, Search, User } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useClerk } from "@clerk/nextjs";
import ActionTooltip from "../ui/action-tooltip";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useModal } from "@/hooks/use-modal-store";

interface SideBarProps {
  userId: string
}

const SideBar = ({
  userId
}: SideBarProps) => {
  const router = useRouter()
  const { onOpen } = useModal();

  const onClickProfile = () => {
    router.push('/profile')
  }


  const { signOut } = useClerk()

  const onClick = () => {
    signOut()
  }

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
      const handleResize = () => {
          setIsLargeScreen(window.innerWidth >= 1024); // Tailwind's lg breakpoint
      };

      // Initial check
      handleResize();

      // Add resize event listener
      window.addEventListener('resize', handleResize);

      // Clean up on unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-full lg:w-full w-[300px]">
        <div className="flex-1 w-full">
          <ActionTooltip hidden={true}>
          <button onClick={() => router.push('/')} className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-zinc-900">
            <Image src='play.svg' alt="playImg" width={35} height={35} />
            Play
          </button>
          </ActionTooltip>
          <ActionTooltip side="right" align="center" label="solve puzzles to get better !!">
          <button className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-zinc-900">
            <Image src='puzzles.svg' alt="playImg" width={35} height={35} />
            Puzzles
          </button>
          </ActionTooltip>
          <ActionTooltip side="right" align="center" label="analyse your games.">
          <button className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-zinc-900" onClick={() => router.push("/analyse")}>
            <Search />
            Analyse
          </button>
          </ActionTooltip>
          <ActionTooltip  side="right" label="buy premium to support us." align="center">
          <button onClick={() => router.push('/subscribe')} className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-blue-400 group transition">
            <Gem className="text-blue-600 group-hover:text-blue-800" />
            Premium
          </button>
          </ActionTooltip>
        </div>
        <Separator className="bg-zinc-500" />
        <div className=" w-full flex flex-col align-bottom justify-start">
          <ActionTooltip side="right" align="center" label="Profile">
          <button onClick={onClickProfile} className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-zinc-900">
            <User className="w-8 h-8" />
            Profile
          </button>
          </ActionTooltip>
          <ActionTooltip side="right" align="center" label="Add friends to play with them !">
          <button onClick={() => onOpen("addFriends", {userId: userId})} className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-zinc-900">
            <Search />
            Add
          </button>
          </ActionTooltip>
          <ActionTooltip side="right" align="center" label="Chat with your Friends">
          <button className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-zinc-900">
            <BookUser />
            Friends
          </button>
          </ActionTooltip>
          <button onClick={() => onClick()} className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold hover:bg-zinc-900">
            <LogOut className="" />
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default SideBar;