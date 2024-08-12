import RedirectToHome from "@/components/redirect-to-home";
import { initialProfile } from "@/lib/initialProfile";
import { RedirectToSignUp, SignedIn, SignedOut, } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const Home = async () => {
    const profile = await initialProfile()

    if (!profile) {
        return auth().redirectToSignIn()
    }

    

    return ( 
        <>
            <SignedIn>
                <RedirectToHome />
            </SignedIn>
            <SignedOut>
                <RedirectToSignUp />
            </SignedOut>
        </>
     );
}
 
export default Home;