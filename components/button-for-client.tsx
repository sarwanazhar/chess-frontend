'use client'

import { useModal } from "@/hooks/use-modal-store"
import { User } from "@prisma/client"
import Image from "next/image"

interface ButtonServerProps{
    profile: User;
}

export const ButtonServer = ({
    profile
}: ButtonServerProps) => {

    const { onOpen } = useModal()

    return (
        <button onClick={() => onOpen('play', {userId: profile.userId})} className="flex px-5 py-3 w-40 gap-3 justify-start text-white items-center rounded-md font-bold text-xl bg-green-600 hover:bg-green-800">
        <Image src='play.svg' alt="playImg" width={35} height={35} />
        Play
        </button>
    )
}