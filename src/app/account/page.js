import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import UsernameForm from "../components/buttons/forms/UsernameForm"
import { redirect } from "next/navigation"
import { Page } from "@/models/page"
import mongoose from "mongoose";
import UserPageEdit from "../components/buttons/forms/UserPageEdit"
import cloneDeep from "clone-deep"

export default async function AccountPage(...rest){
    
    const session = await getServerSession(authOptions)
    if (!session){
        return redirect('/')
    }

    mongoose.connect(process.env.MONGODB_URI)
    const page = await Page.findOne({owner: session?.user?.email})

    const leanPage = cloneDeep(page.toJSON())
    leanPage._id = leanPage._id.toString()

    if (page){
        return(
            <UserPageEdit page={leanPage} user={session.user}/>
        )
    }

    return(
        <>
   <UsernameForm />
        
        </>
    )
}