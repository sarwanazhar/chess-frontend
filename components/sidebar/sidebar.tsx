'use client'
import { Gem, LogOut, Search, User } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { useClerk } from "@clerk/nextjs";
import ActionTooltip from "../ui/action-tooltip";
import { useRouter } from "next/navigation";


const SideBar = () => {
  const router = useRouter()

  const onClickProfile = () => {
    router.push('/profile')
  }


  const { signOut } = useClerk()

  const onClick = () => {
    signOut()
  }

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
          <ActionTooltip side="right" label="buy premium to support us." align="center">
          <button className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-blue-400 group transition">
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
          <button className="flex px-5 py-3 w-full gap-3 justify-start text-white items-center font-bold text-xl hover:bg-zinc-900">
            <Search />
            Add
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