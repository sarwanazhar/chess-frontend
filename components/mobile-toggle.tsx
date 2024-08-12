import { Ghost, Menu } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "./ui/button"
import SideBar from "./sidebar/sidebar"
  

export const MobileToggle = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='ghost' size='icon' className="lg:hidden"><Menu /></Button>
            </SheetTrigger>
            <SheetContent side='left' className="p-0 flex gap-0">
                <div className="w-[72px]">
                    <SideBar />
                </div>
            </SheetContent>
        </Sheet>
    )
}