import SideBar from "@/components/sidebar/sidebar";

const Profile = () => {
    return ( 
        <>
          <div className="bg-zinc-800 h-[200vh]  w-full flex">
            <div className="hidden lg:block h-[100vh] w-40 bg-zinc-900/70 fixed">
              <SideBar />
            </div>
            <div className="hidden lg:block h-[200vh] w-44 bg-zinc-900/70">
              
            </div>
            <div className="w-full">

            </div>
          </div>
        </>
     );
}
 
export default Profile;