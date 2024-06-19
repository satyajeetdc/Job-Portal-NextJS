import { fetchProfileAction } from "@/actions";
import OnBoard from "@/components/on-board";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function OnBoardPage() {
  // get the auth user from clerk
  const user = await currentUser();

  //fetch the profile info -> either candidare or recruiter
  const profileInfo = await fetchProfileAction(user.id);

  if (profileInfo?._id) {
    if (profileInfo?.role === "recruiter" && !profileInfo.isPremium) {
      redirect("/membership");
    } else {
      redirect("/");
    }
  } else {
    return <OnBoard />;
  }
}

export default OnBoardPage;
