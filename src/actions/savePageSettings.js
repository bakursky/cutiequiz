'use server'

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/page";
import { User } from "@/models/user";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function savePageSettings(formData) {

    mongoose.connect(process.env.MONGODB_URI)
    const session = await getServerSession(authOptions)

    if (session) {
        const dataKeys = [
            'bio', 'q1', 'q2', 'q3','q4','q5','q6','q7','q8','q9','q10','q11','q12','q13','q14','q15','q16','q17','q18','q19','q20','q21','q22','q23','q24','q25','q26','q27',
        ]

        const dataToUpdate = {}
        for (const key of dataKeys){
            if(formData.has(key)) {
                dataToUpdate[key] = formData.get(key)
            }
        }

        await Page.updateOne(
            { owner: session?.user?.email },
            dataToUpdate,
        )

        if(formData.has('avatar')){
            const avatarLink = formData.get('avatar')
            await User.updateOne(
                {email: session?.user?.email},
                {image: avatarLink}
            )
        }


        return true
    }


    return false
}