'use client'

import { useModal } from "@/hooks/use-modal-store"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form"
import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "@prisma/client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import { Fileupload } from "../fileupload";
import { useToast } from "../ui/use-toast";
import { title } from "process";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required."
    }),
    imageUrl: z.string().min(1, {
        message: "Image is required."
    })
});

export const EditProfileModal = () => {
    const { isOpen, onClose, type, data } = useModal();
    const { userId } = data;
    const [user, setUser] = useState<null | User>(null);
    const { toast } = useToast()

    const isModalOpen = isOpen && type === 'editProfile';

    const handleClose = () => {
        onClose();
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            imageUrl: '',
        },
    });

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.post("https://secret-chess-backend-production.up.railway.app/fetch-profile", { userId });

                setUser(response.data);
                form.reset({ name: response.data.name, imageUrl: response.data.imageUrl });
            } catch (error) {
                console.log("Error fetching profile");
            }
        };

        if (userId) {
            fetchProfile();
        }

    }, [userId, form]);

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

        const updateProfile = async () => {
            try {
                const response = await axios.post("https://secret-chess-backend-production.up.railway.app/update-profile", {userId, name: values.name, imageUrl: values.imageUrl})
    
                if (response.status === 200) {
                    toast({
                        title: "Succesfully edited !",
                        description: "CHANGED !",
                      })

                    // Reload the window after 1.5 seconds
                    setTimeout(() => {
                        window.location.reload();
                    }, 1500);

                } else  if(response.status === 500 || 400 || 404) {
                    toast({
                        title: "something went wrong !",
                        description: "FAILED",
                      })
                }
            } catch (err) {
                console.log(err)
            }
        }

        updateProfile()
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className="overflow-hidden p-0">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Edit your Profile
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Edit your profile details.
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full p-3">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="imageUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Fileupload
                                                endpoint="profileImage"
                                                value={field.value}
                                                onChange={field.onChange}
                                             />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your New Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button className="text-xl flex gap-5 font-semibold" type="submit">Edit <Pencil /></Button>
                        </form>
                    </Form>
                </div>
            </DialogContent>
        </Dialog>
    );
};
