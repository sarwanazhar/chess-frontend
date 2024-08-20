'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { User } from "@prisma/client"
import axios from "axios"
import { Check, Gem } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
interface DiamondCardProps {
    profile: User
}


export const DiamondCard = ({
    profile
}: DiamondCardProps) => {
    const router = useRouter()

    const handleClick = async () => {
        try {
            const response = await axios.post("/api/buy", {
              productId: "485604",
              userId: profile.userId
            });
      
            console.log(response.data);
      
            router.push(response.data.checkoutUrl)
          } catch (err) {
            console.error(err);
            alert("Failed to buy product #1");
          }
    }

    return (
        <motion.div
        whileHover={{
            scale: 1.05
        }}
        >
        <Card className="w-80 h-[55vh] bg-blue-600/90">
            <CardHeader className="bg-blue-900">
                <CardTitle className="flex gap-3 items-center"><Gem className="text-blue-500 h-10 w-10" /> Diamond</CardTitle>
                <CardDescription>Membership One time payment.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="flex gap-4 text-zinc-300 mt-5"><Check className="text-white h-6 w-6" /> Unlock Puzzles</p>
                <p className="flex gap-4 text-zinc-300"><Check className="text-white h-7 w-7 mb-10" /> get diamond infront of your name</p>
            </CardContent>
            <CardFooter className="flex items-center flex-col justify-center w-full">
                <p className="text-zinc-300 font-semibold">PKR 2000</p>
                <motion.button
                    whileHover={{
                        scale: 1.10,
                    }}
                    whileTap={{
                        scale: 0.95,
                        rotate: "2.5deg"
                    }}
                    transition={{
                        duration: 0.125,
                        ease: "easeInOut"
                    }}
                 className="text-xl font-bold px-14 cursor-pointer rounded-lg py-3 mt-3 bg-[#E58F2A]" disabled={profile.subscribed === true} onClick={handleClick}>
                    {profile.subscribed === true ? "Activated" : 'Buy Now'}
                </motion.button>
            </CardFooter>
        </Card>
        </motion.div>

    )
}