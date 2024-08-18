'use client'

import { useModal } from "@/hooks/use-modal-store"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "@prisma/client"


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required."
    }),
    imageUrl: z.string().min(1, {
        message: "image is required."
    })
})



export const EditProfileModal = () => {
    const { isOpen, onClose, type, data } = useModal()
    const {userId} = data;
    const [user, setUser] = useState<null | User>(null)

    const isModalOpen = isOpen && type === 'editProfile';

    const handleClose = () => {
        onClose()
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            imageUrl: ''
        }
    });

    useEffect(() => {
      const fetchProfile = async () => {
        try {
            const response = await axios.post("http://localhost:8080/fetch-profile", {userId: userId})


            console.log(response.data)
           setUser(response.data)
        } catch (error) {
            console.log("error fetching profile")
        }
    }
    fetchProfile()


    }, [userId, ])
    

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="overflow-hidden p-0">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Edit your Profile
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        edit
                    </DialogDescription>
                </DialogHeader>
                <div>
                    hello
                </div>
            </DialogContent>
        </Dialog>
    )
}