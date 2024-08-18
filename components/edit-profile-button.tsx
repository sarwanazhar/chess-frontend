'use client'

import { UserPen } from "lucide-react"
import ActionTooltip from "./ui/action-tooltip"
import { useModal } from "@/hooks/use-modal-store"
import { User } from "@prisma/client"

interface EditProfileButtonProps {
  profile: User;
}


const EditProfileButton = ({
  profile
}: EditProfileButtonProps) => {
  const {onOpen} = useModal()
  return (
    <div>
      <button onClick={() => onOpen('editProfile', { userId: profile.userId })}>
        <ActionTooltip label="Edit Profile" align="center" side="top">
          <UserPen />
        </ActionTooltip>
      </button>
    </div>
  )
}

export default EditProfileButton