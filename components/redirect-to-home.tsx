'use client'
import { useRouter } from "next/navigation";

const RedirectToHome = () => {
    const router = useRouter()

    router.push('/home')

    return ( 
        <>
            Loading...
        </>
     );
}
 
export default RedirectToHome;