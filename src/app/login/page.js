import { getServerSession } from "next-auth";
import LoginWithGoogle from "../components/buttons/LoginWithGoogle";
import { authOptions } from "../api/auth/[...nextauth]/route.js";
import Logout from "../components/buttons/Logout";
import { Page } from "@/models/page"
import { redirect } from "next/navigation";
import mongoose from "mongoose";

export default async function LoginPage() {
    const session = await getServerSession(authOptions)
    mongoose.connect(process.env.MONGODB_URI)
    // fixing vercel build
    const page = await Page.findOne({ owner: session?.user?.email })
    if (page) {
        return (
            redirect('/account')
        )
    }

    return (
        <div className="flex items-center justify-center h-screen">


<div className="flex flex-col items-center gap-5 text-center rounded-3xl p-5 bg-[#f6e8ce] drop-shadow-xl outline-4 outline-dashed outline-[#E3C380] ">


            {!session && (
                <p>You're not log in!</p>
            )}

            {!!session && (
                <p>Hello, {session?.user?.name}. Now you can {<Logout />}</p>
            )}

<LoginWithGoogle />
      </div></div>
    )

}