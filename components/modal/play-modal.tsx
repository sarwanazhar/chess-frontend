import { useModal } from "@/hooks/use-modal-store"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { useRouter } from "next/navigation"

export const PlayModal = () => {
    const { isOpen, onClose, type } = useModal()
    const router = useRouter()

    const isModalOpen = isOpen && type === 'play';

    const handleClose = () => {
        onClose()
    }

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                <DialogTitle className="text-3xl font-bold capitalize">
                    Start matchmaking
                </DialogTitle>
                </DialogHeader>
                <div className="h-[35vh] w-full flex items-center justify-center flex-col">
                    <button onClick={() => {
                        handleClose()
                        router.push('/start')
                        }} className="px-6 hover:bg-slate-800 transition delay-50 py-2 bg-slate-600 text-xl rounded-full mb-5">
                        You vs Online Player
                    </button>
                    <button className="px-6 hover:bg-slate-800 transition delay-50 py-2 bg-slate-600 text-xl rounded-full mb-5">
                        You vs Computer Normal
                    </button>
                    <button className="px-6 hover:bg-slate-800 transition delay-50 py-2 bg-slate-600 text-xl rounded-full mb-5">
                        You vs Computer Hard
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    )
}