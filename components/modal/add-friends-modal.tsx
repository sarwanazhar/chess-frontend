import { useModal } from "@/hooks/use-modal-store"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { useEffect, useState } from "react"
import axios from "axios"
import { User } from "@prisma/client"

export const AddFriendModal = () => {
    const { isOpen, onClose, type, data } = useModal()
    const { userId } = data
    const [User, setUser] = useState<null | User>(null)

    const isModalOpen = isOpen && type === 'addFriends';

    const handleClose = () => {
        onClose()
    }

    useEffect(() => {
      const fetchUser = async () => {
        try {
            const response = await axios.post("https://secret-chess-backend-production.up.railway.app/fetch-profile", {userId})
            if (response.status === 200) {
                setUser(response.data)
            }
        } catch (err) {
            console.log(err)
        }
      }
      fetchUser();

      const fetchAllUsers = async () => {
        try {
            const response = await axios.post('http://localhost:8080/fetch-users')

            if (response.status === 200) {
                console.log(response.data)
            }

        } catch (error) {
            console.log(error)
        }
      }

    }, [userId])
    

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-3xl font-bold capitalize">
                    Add Friends
                </DialogTitle>
                </DialogHeader>
                <div>
                  hello {User?.name}
                </div>
            </DialogContent>
        </Dialog>
    )
}