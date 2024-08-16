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

    // const lsqyClient = {
    //     API_KEY: process.env.NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY || '',
    //     URL: "https://api.lemonsqueezy.com/v1"
    // }
    
    // const headers = {
    //     Accept: "application/vnd.api+json",
    //     "Content-Type": "application/vnd.api+json",
    //     Authorization: `Bearer ${lsqyClient.API_KEY}`
    // }

    // const handleClick = async () => {
    //     if (profile.subscribed === true) {
    //       return alert("Already activated");
    //     }

    //     try {
    //         const response = await axios.get(`${lsqyClient.URL}/products`, {
    //             headers
    //         })

    //         console.log(response.data.data[0].attributes.buy_now_url)
    //         router.push(response.data.data[0].attributes.buy_now_url)
    //     } catch (error) {
    //         console.log(error)
    //     }

    //   };
      
    
    

    return (
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
                <button className="text-xl font-bold px-14 cursor-pointer rounded-lg py-3 mt-3 bg-[#E58F2A]" disabled={profile.subscribed === true} onClick={handleClick}>
                    {profile.subscribed === true ? "Activated" : 'Buy Now'}
                </button>
            </CardFooter>
        </Card>

    )
}