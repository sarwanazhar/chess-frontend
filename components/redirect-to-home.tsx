'use client'
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const RedirectToHome = () => {
    const router = useRouter()

    router.push('/home')

    return ( 
        <>
            <div className="flex items-center justify-center h-[100vh]">
                <LoaderCircle className="animate-spin w-20  h-20" />
            </div>
        </>
     );
}
 
export default RedirectToHome;