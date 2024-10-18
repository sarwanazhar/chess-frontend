import { initialProfile } from "@/lib/initialProfile"

const Page = async() => {
  const profile = await initialProfile()

  if (profile.subscribed === true) {    
    return (
      <div>
        hello
      </div>
    )
  } else {
    return (
      <div className="text-4xl flex items-center justify-center h-[100vh]">
        you are not a diamond member you need to buy it to review games.
      </div>
    )
  }
}

export default Page