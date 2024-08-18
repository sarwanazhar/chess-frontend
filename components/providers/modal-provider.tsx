'use client'

import { EditProfileModal } from "../modal/edit-profile-modal"
import { PlayModal } from "../modal/play-modal"

export const ModalProvider = () => {
    return (
        <>
            <PlayModal />
            <EditProfileModal />
        </>
    )
}